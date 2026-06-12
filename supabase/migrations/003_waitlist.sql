create table if not exists waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  created_at timestamptz default now(),
  source     text
);

alter table waitlist enable row level security;

create policy "anyone can insert" on waitlist for insert with check (true);
create policy "anyone can read count" on waitlist for select using (true);
