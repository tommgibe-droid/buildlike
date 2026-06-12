export const founders = [
  {
    id: "bezos",
    name: "Jeff Bezos",
    initials: "JB",
    title: "Founder, Amazon",
    color: "from-orange-500 to-orange-700",
    quote: "We are stubborn on vision. We are flexible on details.",
    tags: ["Operations", "Customer obsession", "Long-term thinking"],
  },
  {
    id: "hormozi",
    name: "Alex Hormozi",
    initials: "AH",
    title: "Founder, Acquisition.com",
    color: "from-blue-500 to-blue-700",
    quote: "The only way to get rich is to help a lot of people.",
    tags: ["Sales", "Offers", "Business building"],
  },
  {
    id: "altman",
    name: "Sam Altman",
    initials: "SA",
    title: "CEO, OpenAI",
    color: "from-emerald-500 to-emerald-700",
    quote: "Move fast. Speed is one of your most important advantages.",
    tags: ["Startups", "AI", "Growth"],
  },
  {
    id: "graham",
    name: "Paul Graham",
    initials: "PG",
    title: "Co-founder, Y Combinator",
    color: "from-purple-500 to-purple-700",
    quote: "Make something people want.",
    tags: ["Product", "Fundraising", "Essays"],
  },
  {
    id: "musk",
    name: "Elon Musk",
    initials: "EM",
    title: "CEO, Tesla & SpaceX",
    color: "from-red-500 to-red-700",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
    tags: ["Execution", "First principles", "Moonshots"],
  },
  {
    id: "naval",
    name: "Naval Ravikant",
    initials: "NR",
    title: "Founder, AngelList",
    color: "from-cyan-500 to-cyan-700",
    quote: "Specific knowledge is knowledge you cannot be trained for.",
    tags: ["Wealth", "Leverage", "Philosophy"],
  },
];

export const founderFilters = [
  { id: "all", label: "All" },
  { id: "hormozi", label: "Hormozi" },
  { id: "bezos", label: "Bezos" },
  { id: "yc", label: "YC" },
  { id: "altman", label: "Altman" },
  { id: "naval", label: "Naval" },
];

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: { name: string; id: string }[];
  timestamp: string;
};

export type Conversation = {
  id: string;
  title: string;
  preview: string;
  date: string;
  messages: Message[];
};

export const conversations: Conversation[] = [
  {
    id: "conv-1",
    title: "How to price my SaaS",
    preview: "What's the right pricing strategy...",
    date: "Today",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "What's the right pricing strategy for a B2B SaaS just starting out?",
        timestamp: "2:14 PM",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "For early-stage B2B SaaS, I'd strongly recommend starting with value-based pricing rather than cost-plus. Here's why this matters:\n\nFirst, you likely don't know your true costs yet — and even if you did, your customers don't care. They care about the outcome you deliver. Figure out the economic value of the problem you solve (time saved, revenue generated, risk reduced), then price at roughly 10–20% of that value.\n\nSecond, start higher than you think is reasonable. You can always discount, but it's nearly impossible to raise prices on existing customers without churn. A $500/mo product that closes 30% of demos beats a $99/mo product that closes 70% — do the math on lifetime value.\n\nThird, for truly early stage: charge anything. Even $100/mo from 5 customers teaches you more than free. The act of paying signals real commitment.",
        sources: [
          { name: "Hormozi", id: "hormozi" },
          { name: "PG", id: "graham" },
        ],
        timestamp: "2:14 PM",
      },
      {
        id: "m3",
        role: "user",
        content: "Should I do freemium?",
        timestamp: "2:16 PM",
      },
      {
        id: "m4",
        role: "assistant",
        content:
          "Freemium is a distribution strategy, not a monetization strategy — and most early-stage founders confuse the two.\n\nFreemium works when: (1) your product has viral or network effects, (2) the marginal cost of serving a free user is near zero, and (3) you have the runway to acquire a large user base before needing to convert. Slack, Dropbox, Notion — these fit the model.\n\nFor most B2B SaaS, especially those selling to SMBs or enterprises, freemium is a trap. You'll spend enormous energy supporting free users who never convert. Instead, consider a free trial (14–30 days, full access, no credit card) — this removes risk for the buyer while creating urgency and maintaining the pricing signal.",
        sources: [
          { name: "Altman", id: "altman" },
          { name: "Naval", id: "naval" },
        ],
        timestamp: "2:17 PM",
      },
    ],
  },
  {
    id: "conv-2",
    title: "Hiring first engineer",
    preview: "When should I hire my first...",
    date: "Yesterday",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "When should I hire my first engineer, and what should I look for?",
        timestamp: "11:03 AM",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Hire your first engineer when the cost of not building is greater than the cost of hiring wrong. That sounds obvious, but most founders hire too early out of insecurity rather than necessity.\n\nFor the profile: at this stage you want a generalist who can move fast, not a specialist who does one thing perfectly. Look for someone who has shipped real products, not just written good code. Ask them to walk you through a project they built from scratch — the way they talk about tradeoffs tells you everything.\n\nOne underrated filter: do they ask great questions? Good early engineers are as much product thinkers as they are coders. They'll save you months by catching bad ideas before they're built.",
        sources: [
          { name: "PG", id: "graham" },
          { name: "Altman", id: "altman" },
        ],
        timestamp: "11:04 AM",
      },
    ],
  },
  {
    id: "conv-3",
    title: "Cold outreach that converts",
    preview: "How to write cold emails that...",
    date: "Mon",
    messages: [
      {
        id: "m1",
        role: "user",
        content: "How do I write cold emails that actually get responses?",
        timestamp: "9:45 AM",
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Most cold emails fail because they're about the sender, not the reader. Flip that.\n\nThe framework: one sentence on who you are, one sentence on a specific observation about them (their recent launch, a post they wrote, a problem in their industry), one sentence on the value you provide, one clear ask — a 15-minute call, not a purchase.\n\nUnder 100 words. No attachments. No PDFs. Plain text, because it looks personal. And personalize the observation — not 'I saw you're in SaaS' but 'I noticed your churn rate section in the teardown you posted last week.' That specificity is what gets replies.",
        sources: [
          { name: "Hormozi", id: "hormozi" },
        ],
        timestamp: "9:46 AM",
      },
    ],
  },
  {
    id: "conv-4",
    title: "Equity splits for cofounders",
    preview: "What's a fair equity split...",
    date: "Sun",
    messages: [],
  },
  {
    id: "conv-5",
    title: "When to raise venture capital",
    preview: "Signs it's the right time to...",
    date: "Sat",
    messages: [],
  },
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try it on a real decision. See the difference from generic AI in your first conversation.",
    features: [
      "10 messages per month",
      "Access to 5 founders",
      "Basic conversation history",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$20",
    period: "/month",
    description: "One better pricing call pays for a year. Unlimited access to every founder, full history.",
    features: [
      "Unlimited messages",
      "Full founder library",
      "Full conversation history",
      "Export conversations",
      "Priority response speed",
    ],
    cta: "Try Pro free",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Team",
    price: "$50",
    period: "/month",
    description: "Align your team on the same frameworks. One bad hire costs more than this plan.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared conversation library",
      "Team insights dashboard",
      "Slack integration",
    ],
    cta: "Start Team trial",
    highlighted: false,
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "I was about to price my SaaS at $29/mo because that's what everyone else charged. BuildLike pushed back hard — cited Hormozi on value-based pricing. I relaunched at $149 and conversion barely moved. Best decision I made that quarter.",
    name: "Marcus O.",
    role: "Founder",
    company: "Trackflow",
    initials: "MO",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "t2",
    quote:
      "I use it before every hard conversation — a tough hire, a pricing change, a fundraise. It doesn't tell me what to do, it shows me how people who've done it 10x think about it. That framing shift alone is worth it.",
    name: "Priya S.",
    role: "CEO",
    company: "Loopcast",
    initials: "PS",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "t3",
    quote:
      "We were going to raise a Series A. BuildLike synthesized Naval and Altman on when not to raise. We bootstrapped instead, hit profitability 8 months later. That single conversation probably saved us 20% dilution.",
    name: "David K.",
    role: "Co-founder",
    company: "Vaultly",
    initials: "DK",
    color: "from-emerald-500 to-emerald-700",
  },
];

export const faqs = [
  {
    q: "How is this different from asking ChatGPT?",
    a: "ChatGPT generates plausible-sounding business advice from internet noise — Reddit threads, SEO content, averaged opinions. BuildLike answers from primary sources only: Bezos's actual shareholder letters, Hormozi's actual books, Graham's actual essays. Every answer is attributed. Nothing is made up. ChatGPT tells you 'it depends.' BuildLike tells you what Bezos actually decided — and where he said it.",
  },
  {
    q: "Where does the knowledge come from?",
    a: "Primary sources only. Every founder's knowledge base is assembled from their books, long-form interviews, essays, shareholder letters, and public talks — then verified against the original before going live. We exclude second-hand takes, paraphrased content, and anything we can't trace back to the source.",
  },
  {
    q: "Can I trust the answers for my specific business?",
    a: "BuildLike gives you perspective, not directives. It shows you how proven founders frame problems similar to yours — with the source named so you can read the original. You make the final call, but now you're making it with the same thinking that built billion-dollar companies.",
  },
  {
    q: "How is this different from just reading their books?",
    a: "Speed and precision. Instead of spending 40 hours reading everything Hormozi has published to find his specific take on pricing, you ask one question and get a direct answer with the source. Then you can push back, go deeper, or apply it to your specific situation.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your conversations are private and never used to train models or shared with third parties. You can delete your history at any time.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "Free gives you 10 messages per month and access to a selection of founders — enough to try it on a real decision. Pro unlocks the full library, unlimited messages, full history, and priority speed. Most people upgrade after their first real conversation.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Ask",
    description:
      "Type any business question — pricing, hiring, fundraising, GTM, culture. No structure needed.",
    icon: "MessageSquare",
  },
  {
    step: "02",
    title: "Match",
    description:
      "BuildLike finds the most relevant frameworks, mental models, and decisions from each founder's body of work.",
    icon: "Zap",
  },
  {
    step: "03",
    title: "Decide",
    description:
      "Get a synthesized answer grounded in how these founders actually think — with sources you can trace back.",
    icon: "CheckCircle",
  },
];
