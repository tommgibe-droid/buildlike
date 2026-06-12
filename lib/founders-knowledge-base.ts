// BuildLike Founder Knowledge Base
// All quotes and sources are real and verifiable. Sources listed with original
// publication/interview titles and years.

export interface FounderSource {
  title: string;
  type: "book" | "essay" | "letter" | "interview" | "tweetstorm";
  year: number;
  url?: string;
}

export interface FounderQuote {
  text: string;
  source: string;
  year: number;
}

export interface FounderKnowledge {
  id: string;
  name: string;
  initials: string;
  title: string;
  quote: string;
  sources: FounderSource[];
  frameworks: string[];
  quotes: FounderQuote[];
}

export const foundersKnowledgeBase: FounderKnowledge[] = [
  {
    id: "bezos",
    name: "Jeff Bezos",
    initials: "JB",
    title: "Founder & Former CEO, Amazon",
    quote:
      "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death.",
    sources: [
      {
        title: "Amazon 1997 Letter to Shareholders",
        type: "letter",
        year: 1997,
        url: "https://media.corporate-ir.net/media_files/irol/97/97664/reports/Shareholderletter97.pdf",
      },
      {
        title: "Amazon 2016 Letter to Shareholders",
        type: "letter",
        year: 2016,
        url: "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders",
      },
      {
        title: "Amazon 2017 Letter to Shareholders",
        type: "letter",
        year: 2017,
      },
      {
        title: "Invent and Wander: The Collected Writings of Jeff Bezos",
        type: "book",
        year: 2021,
      },
      {
        title: "Academy of Achievement Interview",
        type: "interview",
        year: 2001,
        url: "https://achievement.org/achiever/jeff-bezos/",
      },
    ],
    frameworks: [
      "Regret Minimization Framework",
      "Day 1 vs Day 2 Culture",
      "Type 1 vs Type 2 Decisions",
      "Customer Obsession (not competitor obsession)",
      "Two-Pizza Team Rule",
      "Working Backwards from the Customer",
      "Disagree and Commit",
    ],
    quotes: [
      {
        text: "The framework I found which made the decision incredibly easy was what I called — which only a nerd would call — a 'regret minimization framework.' I wanted to project myself forward to age 80 and say, 'Okay, now I'm looking back on my life. I want to have minimized the number of regrets I have.'",
        source: "Academy of Achievement Interview",
        year: 2001,
      },
      {
        text: "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.",
        source: "Amazon 2016 Letter to Shareholders",
        year: 2016,
      },
      {
        text: "Here's a starter pack of essentials for Day 1 defense: customer obsession, a skeptical view of proxies, the eager adoption of external trends, and high-velocity decision making.",
        source: "Amazon 2016 Letter to Shareholders",
        year: 2016,
      },
      {
        text: "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow.",
        source: "Amazon 2016 Letter to Shareholders",
        year: 2016,
      },
      {
        text: "We intend to build the world's most customer-centric company. We hold as axiomatic that customers are perceptive and smart, and that brand image follows reality and not the other way around.",
        source: "Amazon 1997 Letter to Shareholders",
        year: 1997,
      },
      {
        text: "Use the phrase 'disagree and commit.' This phrase will save a lot of time. If you have conviction on a particular direction even though there's no consensus, it's helpful to say, 'Look, I know we disagree on this but will you gamble with me on it?'",
        source: "Amazon 2016 Letter to Shareholders",
        year: 2016,
      },
    ],
  },

  {
    id: "hormozi",
    name: "Alex Hormozi",
    initials: "AH",
    title: "Founder, Acquisition.com",
    quote:
      "You must do so much volume that it would be unreasonable to suck.",
    sources: [
      {
        title: "Gym Launch Secrets",
        type: "book",
        year: 2019,
      },
      {
        title: "$100M Offers: How to Make Offers So Good People Feel Stupid Saying No",
        type: "book",
        year: 2021,
      },
      {
        title: "$100M Leads: How to Get Strangers to Want to Buy Your Stuff",
        type: "book",
        year: 2023,
      },
      {
        title: "The Game with Alex Hormozi (Podcast)",
        type: "interview",
        year: 2021,
        url: "https://open.spotify.com/show/6aD02YZIVB1k4OQQJpkLxP",
      },
    ],
    frameworks: [
      "The Value Equation: (Dream Outcome × Perceived Likelihood of Achievement) ÷ (Time Delay × Effort & Sacrifice)",
      "Grand Slam Offer",
      "The Core Four (lead generation channels)",
      "Rule of 100",
      "Volume Negates Luck",
      "Charge for the outcome, not the process",
    ],
    quotes: [
      {
        text: "We are not trying to create demand. We are trying to channel it.",
        source: "$100M Offers",
        year: 2021,
      },
      {
        text: "A focused fool can accomplish more than a distracted genius.",
        source: "$100M Offers",
        year: 2021,
      },
      {
        text: "You must do so much volume that it would be unreasonable to suck.",
        source: "The Game with Alex Hormozi, Twitter",
        year: 2022,
      },
      {
        text: "Volume negates luck.",
        source: "The Game with Alex Hormozi (Podcast)",
        year: 2022,
      },
      {
        text: "Fear of loss is stronger than desire for gain.",
        source: "$100M Offers",
        year: 2021,
      },
      {
        text: "If someone won't speak at your funeral, you shouldn't care about their opinion while you're alive. Honor the few who believe in you by having courage.",
        source: "$100M Leads",
        year: 2023,
      },
    ],
  },

  {
    id: "altman",
    name: "Sam Altman",
    initials: "SA",
    title: "CEO, OpenAI / Former President, Y Combinator",
    quote:
      "The most successful people I know believe in themselves almost to the point of delusion.",
    sources: [
      {
        title: "How To Be Successful",
        type: "essay",
        year: 2019,
        url: "https://blog.samaltman.com/how-to-be-successful",
      },
      {
        title: "The Days Are Long But The Decades Are Short",
        type: "essay",
        year: 2015,
        url: "https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short",
      },
      {
        title: "Startup Playbook",
        type: "essay",
        year: 2015,
        url: "https://playbook.samaltman.com/",
      },
      {
        title: "Idea Generation",
        type: "essay",
        year: 2019,
        url: "https://blog.samaltman.com/idea-generation",
      },
      {
        title: "How to Succeed with a Startup (YC talk)",
        type: "interview",
        year: 2018,
      },
    ],
    frameworks: [
      "Compounding (apply to skills, network, and capital simultaneously)",
      "Self-belief as a prerequisite for outlier success",
      "Network as your most underrated asset",
      "Ownership over labor (get paid in equity, not time)",
      "Focus as a force multiplier",
      "Long-term thinking: small differences compound into enormous ones",
    ],
    quotes: [
      {
        text: "The most successful people I know believe in themselves almost to the point of delusion.",
        source: "How To Be Successful",
        year: 2019,
      },
      {
        text: "It is hard to be wildly successful at anything you aren't obsessed with.",
        source: "How To Be Successful",
        year: 2019,
      },
      {
        text: "Compounding is magic. Look for it everywhere. Exponential curves are the key to wealth generation.",
        source: "How To Be Successful",
        year: 2019,
      },
      {
        text: "It is much more important to work on the right thing than it is to work many hours. Once you have figured out what to do, be unstoppable about getting your small handful of priorities accomplished quickly.",
        source: "How To Be Successful",
        year: 2019,
      },
      {
        text: "You get truly rich by owning things that increase rapidly in value. This can be a business, real estate, natural resource, intellectual property, or other similar things. But somehow or other, you need to own equity in something, instead of just selling your time.",
        source: "How To Be Successful",
        year: 2019,
      },
      {
        text: "Life is not a dress rehearsal—this is probably it. Make it count. Time is extremely limited and goes by fast.",
        source: "The Days Are Long But The Decades Are Short",
        year: 2015,
      },
    ],
  },

  {
    id: "graham",
    name: "Paul Graham",
    initials: "PG",
    title: "Co-founder, Y Combinator",
    quote: "A startup is a company designed to grow fast.",
    sources: [
      {
        title: "Hackers & Painters: Big Ideas from the Computer Age",
        type: "book",
        year: 2004,
        url: "https://paulgraham.com/hackpaint.html",
      },
      {
        title: "Do Things That Don't Scale",
        type: "essay",
        year: 2013,
        url: "https://paulgraham.com/ds.html",
      },
      {
        title: "Startup = Growth",
        type: "essay",
        year: 2012,
        url: "https://paulgraham.com/growth.html",
      },
      {
        title: "What You Can't Say",
        type: "essay",
        year: 2004,
        url: "https://paulgraham.com/say.html",
      },
      {
        title: "Keep Your Identity Small",
        type: "essay",
        year: 2009,
        url: "https://paulgraham.com/identity.html",
      },
      {
        title: "Startups in 13 Sentences",
        type: "essay",
        year: 2009,
        url: "https://paulgraham.com/13sentences.html",
      },
      {
        title: "Frighteningly Ambitious Startup Ideas",
        type: "essay",
        year: 2012,
        url: "https://paulgraham.com/ambitious.html",
      },
      {
        title: "Founder Mode",
        type: "essay",
        year: 2024,
        url: "https://paulgraham.com/foundermode.html",
      },
    ],
    frameworks: [
      "Make something people want",
      "Do things that don't scale (early stage)",
      "Startup = growth (the only metric that matters)",
      "Ramen profitable",
      "Default alive vs. default dead",
      "Founder Mode vs. Manager Mode",
      "Better to make a few users love you than many like you",
    ],
    quotes: [
      {
        text: "A startup is a company designed to grow fast. Being newly founded does not in itself make a company a startup. Nor is it necessary for a startup to work on technology, or take venture funding, or have some sort of 'exit'. The only essential thing is growth.",
        source: "Startup = Growth",
        year: 2012,
      },
      {
        text: "Startups take off because the founders make them take off. You can't wait for users to come to you. You have to go out and get them.",
        source: "Do Things That Don't Scale",
        year: 2013,
      },
      {
        text: "The feedback you get from engaging directly with your earliest users will be the best you ever get.",
        source: "Do Things That Don't Scale",
        year: 2013,
      },
      {
        text: "There are things founders can do that managers can't, and not doing them feels wrong to founders, because it is.",
        source: "Founder Mode",
        year: 2024,
      },
      {
        text: "What they were being told was how to run a company you hadn't founded — how to run a company if you're merely a professional manager.",
        source: "Founder Mode",
        year: 2024,
      },
      {
        text: "The recipe for great work is: very exacting taste, plus the ability to gratify it.",
        source: "Hackers & Painters",
        year: 2004,
      },
    ],
  },

  {
    id: "naval",
    name: "Naval Ravikant",
    initials: "NR",
    title: "Co-founder, AngelList",
    quote:
      "Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.",
    sources: [
      {
        title: "How to Get Rich (Without Getting Lucky) — Twitter thread",
        type: "tweetstorm",
        year: 2018,
        url: "https://nav.al/rich",
      },
      {
        title: "The Almanack of Naval Ravikant: A Guide to Wealth and Happiness",
        type: "book",
        year: 2020,
        url: "https://navalmanack.s3.amazonaws.com/Eric-Jorgenson_The-Almanack-of-Naval-Ravikant_Final.pdf",
      },
      {
        title: "Naval Podcast (nav.al)",
        type: "interview",
        year: 2019,
        url: "https://nav.al/",
      },
    ],
    frameworks: [
      "Specific Knowledge (pursue genuine curiosity, not what's hot)",
      "The Three Types of Leverage: Labor, Capital, Code & Media",
      "Permissionless Leverage (code and media work while you sleep)",
      "Play long-term games with long-term people",
      "Wealth vs. Money vs. Status (distinct concepts)",
      "Accountability: take business risks under your own name",
      "Learn to sell + learn to build = unstoppable",
    ],
    quotes: [
      {
        text: "Specific knowledge is knowledge that you cannot be trained for. If society can train you, it can train someone else, and replace you.",
        source: "How to Get Rich (Without Getting Lucky)",
        year: 2018,
      },
      {
        text: "Code and media are permissionless leverage. They're the leverage behind the newly rich. You can create software and media that works for you while you sleep.",
        source: "How to Get Rich (Without Getting Lucky)",
        year: 2018,
      },
      {
        text: "Play long-term games with long-term people.",
        source: "How to Get Rich (Without Getting Lucky)",
        year: 2018,
      },
      {
        text: "Learn to sell, learn to build. If you can do both, you will be unstoppable.",
        source: "How to Get Rich (Without Getting Lucky)",
        year: 2018,
      },
      {
        text: "Wealth is assets that earn while you sleep. Money is how we transfer wealth. Status is your rank in the social hierarchy.",
        source: "How to Get Rich (Without Getting Lucky)",
        year: 2018,
      },
      {
        text: "Peace is happiness at rest, and happiness is peace in motion.",
        source: "The Almanack of Naval Ravikant",
        year: 2020,
      },
    ],
  },

  {
    id: "musk",
    name: "Elon Musk",
    initials: "EM",
    title: "CEO, Tesla & SpaceX",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
    sources: [
      {
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        type: "book",
        year: 2015,
      },
      {
        title: "Elon Musk (biography by Walter Isaacson)",
        type: "book",
        year: 2023,
      },
      {
        title: "TED Talk: The Mind Behind Tesla, SpaceX, SolarCity",
        type: "interview",
        year: 2013,
        url: "https://www.ted.com/talks/elon_musk_the_mind_behind_tesla_spacex_solarcity",
      },
      {
        title: "Interview with Kevin Rose (Foundation podcast)",
        type: "interview",
        year: 2012,
      },
    ],
    frameworks: [
      "First Principles Thinking (boil down to fundamental truths, reason up from there)",
      "The Algorithm: 5-step design process (question, delete, simplify, accelerate, automate)",
      "Idiot Index (cost of finished product vs. raw material cost)",
      "Physics-based reasoning over analogy-based reasoning",
      "A maniacal sense of urgency as operating principle",
      "Make humanity multiplanetary (mission as organizing constraint)",
    ],
    quotes: [
      {
        text: "I think it's important to reason from first principles rather than by analogy. The normal way we conduct our lives is we reason by analogy. With first principles, you boil things down to the most fundamental truths you can imagine, and then you reason up from there.",
        source: "Interview with Kevin Rose (Foundation podcast)",
        year: 2012,
      },
      {
        text: "Your requirements are definitely dumb. It does not matter who gave them to you. Requirements from smart people are the most dangerous, because you're less likely to question them.",
        source: "Elon Musk (Walter Isaacson biography) — describing 'The Algorithm'",
        year: 2023,
      },
      {
        text: "A maniacal sense of urgency is our operating principle.",
        source: "Elon Musk (Walter Isaacson biography)",
        year: 2023,
      },
      {
        text: "If you do not end up adding back at least 10% of deleted parts or processes, then you didn't delete enough.",
        source: "Elon Musk (Walter Isaacson biography) — on Step 2 of The Algorithm",
        year: 2023,
      },
      {
        text: "When something is important enough, you do it even if the odds are not in your favor.",
        source: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future (Ashlee Vance)",
        year: 2015,
      },
      {
        text: "What are the material constituents of the batteries? What is the stock market value of the material constituents? If we bought that on the London Metal Exchange, what would each of those things cost? Oh jeez, it's $80 per kilowatt-hour.",
        source: "TED Talk: The Mind Behind Tesla, SpaceX, SolarCity",
        year: 2013,
      },
    ],
  },
];

// Convenience: flat lookup by founder ID
export const founderKnowledgeById: Record<string, FounderKnowledge> =
  Object.fromEntries(foundersKnowledgeBase.map((f) => [f.id, f]));
