import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

// Load .env.local manually (no dotenv dep needed)
try {
  const env = readFileSync(new URL("../.env.local", import.meta.url), "utf-8");
  for (const line of env.split("\n")) {
    const eq = line.indexOf("=");
    if (eq === -1 || line.startsWith("#")) continue;
    const k = line.slice(0, eq).trim();
    const v = line.slice(eq + 1).trim();
    if (k && !process.env[k]) process.env[k] = v;
  }
} catch {}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!url || !key) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL or key. Check .env.local");
  process.exit(1);
}

const supabase = createClient(url, key);

const founders = [
  {
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    initials: "JB",
    title: "Founder & Executive Chairman, Amazon",
    company: "Amazon",
    quote: "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death.",
    tags: ["customer-obsession", "long-term", "decision-making"],
  },
  {
    slug: "alex-hormozi",
    name: "Alex Hormozi",
    initials: "AH",
    title: "Founder, Acquisition.com",
    company: "Acquisition.com",
    quote: "You must do so much volume that it would be unreasonable to suck.",
    tags: ["sales", "offers", "volume"],
  },
  {
    slug: "sam-altman",
    name: "Sam Altman",
    initials: "SA",
    title: "CEO, OpenAI",
    company: "OpenAI",
    quote: "The most successful people I know believe in themselves almost to the point of delusion.",
    tags: ["startups", "ai", "compounding"],
  },
  {
    slug: "paul-graham",
    name: "Paul Graham",
    initials: "PG",
    title: "Co-founder, Y Combinator",
    company: "Y Combinator",
    quote: "A startup is a company designed to grow fast.",
    tags: ["startups", "growth", "essays"],
  },
  {
    slug: "naval-ravikant",
    name: "Naval Ravikant",
    initials: "NR",
    title: "Co-founder, AngelList",
    company: "AngelList",
    quote: "Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.",
    tags: ["wealth", "leverage", "philosophy"],
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    initials: "EM",
    title: "CEO, Tesla & SpaceX",
    company: "Tesla / SpaceX",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    tags: ["vision", "engineering", "risk"],
  },
  {
    slug: "reid-hoffman",
    name: "Reid Hoffman",
    initials: "RH",
    title: "Co-founder, LinkedIn",
    company: "LinkedIn",
    quote: "If you are not embarrassed by the first version of your product, you've launched too late.",
    tags: ["networking", "scaling", "vc"],
  },
  {
    slug: "peter-thiel",
    name: "Peter Thiel",
    initials: "PT",
    title: "Co-founder, PayPal & Palantir",
    company: "PayPal / Palantir",
    quote: "Competition is for losers. If you want to create and capture lasting value, look to build a monopoly.",
    tags: ["strategy", "monopoly", "contrarian"],
  },
  {
    slug: "marc-andreessen",
    name: "Marc Andreessen",
    initials: "MA",
    title: "Co-founder, Andreessen Horowitz",
    company: "Andreessen Horowitz",
    quote: "Software is eating the world.",
    tags: ["investing", "tech-trends", "product-market-fit"],
  },
  {
    slug: "jason-lemkin",
    name: "Jason Lemkin",
    initials: "JL",
    title: "Founder, SaaStr",
    company: "SaaStr",
    quote: "Get to $1M ARR. Then hire. If you hire before, you'll run out of money before you find product-market fit.",
    tags: ["saas", "b2b", "fundraising"],
  },
  {
    slug: "arvid-kahl",
    name: "Arvid Kahl",
    initials: "AK",
    title: "Founder, FeedbackPanda",
    company: "FeedbackPanda",
    quote: "Embed yourself in your audience's community before you build anything. Then build in public.",
    tags: ["bootstrapping", "marketing", "solo-founder"],
  },
  {
    slug: "nathan-barry",
    name: "Nathan Barry",
    initials: "NB",
    title: "Founder & CEO, Kit (ConvertKit)",
    company: "Kit",
    quote: "Teach everything you know. The more you give away, the more you get back.",
    tags: ["saas", "content", "build-in-public"],
  },
  {
    slug: "tony-dinh",
    name: "Tony Dinh",
    initials: "TD",
    title: "Indie Hacker",
    company: "Xnapper / ScreenshotOne",
    quote: "Stop waiting for the perfect idea. Ship something small, charge for it, and iterate.",
    tags: ["indie-hacker", "solo-founder", "revenue"],
  },
  {
    slug: "lenny-rachitsky",
    name: "Lenny Rachitsky",
    initials: "LR",
    title: "Founder, Lenny's Newsletter",
    company: "Lenny's Newsletter",
    quote: "The best growth comes from building something people genuinely want to share — not from growth hacks.",
    tags: ["product", "growth", "pm"],
  },
  {
    slug: "april-dunford",
    name: "April Dunford",
    initials: "AD",
    title: "Founder, Ambient Strategy",
    company: "Ambient Strategy",
    quote: "Positioning is the act of deliberately defining how you are the best at something that a defined market cares a lot about.",
    tags: ["positioning", "marketing", "messaging"],
  },
  {
    slug: "shane-parrish",
    name: "Shane Parrish",
    initials: "SP",
    title: "Founder, Farnam Street",
    company: "Farnam Street",
    quote: "Most people don't actually think — they just rearrange their prejudices.",
    tags: ["mental-models", "decision-making", "thinking"],
  },
  {
    slug: "tim-ferriss",
    name: "Tim Ferriss",
    initials: "TF",
    title: "Author & Investor",
    company: "Various",
    quote: "Focus on being productive instead of busy.",
    tags: ["productivity", "interviews", "optimization"],
  },
  {
    slug: "jessica-livingston",
    name: "Jessica Livingston",
    initials: "JLi",
    title: "Co-founder, Y Combinator",
    company: "Y Combinator",
    quote: "The most important quality in a founder is determination. Intelligence is fine, but tenacity is what counts.",
    tags: ["yc", "early-stage", "founders"],
  },
  {
    slug: "michael-seibel",
    name: "Michael Seibel",
    initials: "MS",
    title: "Partner, Y Combinator",
    company: "Y Combinator",
    quote: "The number one cause of startup death is founders building something no one wants. Talk to users before you write a single line of code.",
    tags: ["yc", "execution", "startups"],
  },
  {
    slug: "andrew-wilkinson",
    name: "Andrew Wilkinson",
    initials: "AW",
    title: "Co-founder, Tiny",
    company: "Tiny",
    quote: "Stop trying to build unicorns. Build a portfolio of boring cash-flow machines and compound quietly.",
    tags: ["acquisitions", "holding-company", "operations"],
  },
  {
    slug: "brian-chesky",
    name: "Brian Chesky",
    initials: "BC",
    title: "Co-founder & CEO, Airbnb",
    company: "Airbnb",
    quote: "Build something 100 people love, not something 1 million people kind of like.",
    tags: ["design", "hospitality", "culture"],
  },
  {
    slug: "patrick-collison",
    name: "Patrick Collison",
    initials: "PC",
    title: "Co-founder & CEO, Stripe",
    company: "Stripe",
    quote: "Move with urgency and focus. Slow is not safe — it is slow.",
    tags: ["payments", "engineering", "curiosity"],
  },
  {
    slug: "tobi-lutke",
    name: "Tobi Lütke",
    initials: "TL",
    title: "Co-founder & CEO, Shopify",
    company: "Shopify",
    quote: "You have to trust that the dots will somehow connect in your future.",
    tags: ["ecommerce", "culture", "scaling"],
  },
  {
    slug: "pieter-levels",
    name: "Pieter Levels",
    initials: "PL",
    title: "Founder, Nomad List & Remote OK",
    company: "Nomad List",
    quote: "Make $1,000 first. Not $1 billion. Constraints breed creativity.",
    tags: ["indie-hacker", "bootstrapping", "nomad"],
  },
  {
    slug: "dharmesh-shah",
    name: "Dharmesh Shah",
    initials: "DS",
    title: "Co-founder & CTO, HubSpot",
    company: "HubSpot",
    quote: "Culture is to recruiting as product is to marketing. It compounds.",
    tags: ["saas", "inbound", "culture"],
  },
];

async function seed() {
  console.log(`\nSeeding ${founders.length} founders into ${url}...\n`);

  // Strip tags so the upsert works even before migration 002 (ALTER TABLE ADD COLUMN tags)
  // Once migration 002 is applied, remove this and tags will be included automatically
  const withoutTags = founders.map(({ tags: _tags, ...f }) => f);

  const { data, error } = await supabase
    .from("founders")
    .upsert(withoutTags, { onConflict: "slug" })
    .select("slug, name");

  if (error) {
    console.error("❌ Seed failed:", error.message);
    if (error.message.includes("row-level security")) {
      console.error("\nThe anon key can't INSERT — RLS blocks writes.");
      console.error("Add your service role key to .env.local:");
      console.error("  SUPABASE_SERVICE_ROLE_KEY=<your-key>");
      console.error("  → Supabase Dashboard → Project Settings → API → service_role\n");
    } else if (error.message.includes("does not exist")) {
      console.error("\nRun the migrations in Supabase Dashboard → SQL Editor:");
      console.error("  1. supabase/migrations/001_initial_schema.sql");
      console.error("  2. supabase/migrations/002_add_tags.sql\n");
    }
    process.exit(1);
  }

  const { count } = await supabase
    .from("founders")
    .select("*", { count: "exact", head: true });

  console.log("Seeded founders:");
  data?.forEach((f, i) => console.log(`  ${String(i + 1).padStart(2, "0")}. ${f.name} (${f.slug})`));
  console.log(`\n✅ Total founders in database: ${count}\n`);
}

seed();
