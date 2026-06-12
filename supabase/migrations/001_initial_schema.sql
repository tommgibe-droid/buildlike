-- Enable pgvector extension
create extension if not exists vector;

-- ─────────────────────────────────────────
-- FOUNDERS
-- ─────────────────────────────────────────
create table if not exists founders (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  initials    text not null,
  title       text not null,
  company     text not null,
  quote       text,
  bio         text,
  created_at  timestamptz default now()
);

-- ─────────────────────────────────────────
-- CONTENT (books, essays, letters, talks…)
-- ─────────────────────────────────────────
create table if not exists content (
  id          uuid primary key default gen_random_uuid(),
  founder_id  uuid not null references founders(id) on delete cascade,
  title       text not null,
  type        text not null check (type in ('book','essay','letter','interview','talk','thread')),
  year        integer,
  url         text,
  raw_text    text,
  created_at  timestamptz default now()
);

create index if not exists content_founder_idx on content(founder_id);

-- ─────────────────────────────────────────
-- CHUNKS (vector embeddings for RAG)
-- ─────────────────────────────────────────
create table if not exists chunks (
  id          uuid primary key default gen_random_uuid(),
  content_id  uuid not null references content(id) on delete cascade,
  founder_id  uuid not null references founders(id) on delete cascade,
  text        text not null,
  embedding   vector(1536),             -- OpenAI text-embedding-3-small
  metadata    jsonb default '{}',       -- { page, section, quote, source_title }
  created_at  timestamptz default now()
);

create index if not exists chunks_founder_idx  on chunks(founder_id);
create index if not exists chunks_content_idx  on chunks(content_id);
create index if not exists chunks_embedding_idx
  on chunks using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- ─────────────────────────────────────────
-- MATCH FUNCTION (semantic search)
-- ─────────────────────────────────────────
create or replace function match_chunks(
  query_embedding vector(1536),
  match_threshold float default 0.75,
  match_count     int   default 5,
  founder_ids     uuid[] default null
)
returns table (
  id          uuid,
  founder_id  uuid,
  content_id  uuid,
  text        text,
  metadata    jsonb,
  similarity  float
)
language sql stable
as $$
  select
    c.id,
    c.founder_id,
    c.content_id,
    c.text,
    c.metadata,
    1 - (c.embedding <=> query_embedding) as similarity
  from chunks c
  where
    (founder_ids is null or c.founder_id = any(founder_ids))
    and 1 - (c.embedding <=> query_embedding) > match_threshold
  order by c.embedding <=> query_embedding
  limit match_count;
$$;

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY (public read)
-- ─────────────────────────────────────────
alter table founders enable row level security;
alter table content  enable row level security;
alter table chunks   enable row level security;

create policy "public read founders" on founders for select using (true);
create policy "public read content"  on content  for select using (true);
create policy "public read chunks"   on chunks   for select using (true);
