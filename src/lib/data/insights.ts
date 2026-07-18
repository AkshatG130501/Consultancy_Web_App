export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
};

export const insights: Insight[] = [
  {
    slug: "choosing-an-executive-search-partner",
    title: "How to choose an talent acquisition partner, not just a recruiter",
    excerpt:
      "The difference between a recruiter and a search partner shows up long before the shortlist — in how the mandate is scoped in the first place.",
    category: "Talent Acquisition",
    date: "2026-05-18",
    readTime: "6 min read",
    author: "Tara Kapoor",
    content: [
      "Most leadership hires fail for reasons that have nothing to do with the candidate pool. They fail because the mandate was scoped against a job description rather than the actual gap in the business — and no amount of database access fixes that at the search stage.",
      "A genuine search partner starts by pressure-testing the mandate: what does this role need to be true in eighteen months, and does the org structure around it support that outcome? That conversation alone eliminates a large share of hires that would otherwise fail within the first year.",
      "The second differentiator is reference depth. A recruiter confirms dates of employment. A search partner talks to people who worked for and with the candidate, off the record, about how they actually operate under pressure.",
      "Finally, ask how a firm handles a mandate outside its depth. The right answer is 'we'll tell you it's outside our network' — not a shortlist assembled from a generic database search dressed up as specialist coverage.",
    ],
  },
  {
    slug: "remote-operational-assessments",
    title: "What a remote operational assessment can and can't tell you",
    excerpt:
      "Remote audit technology has closed most of the gap with on-site review — but not all of it. Here's where the line still sits.",
    category: "Back Office",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Karan Thakkar",
    content: [
      "Cloud ERP access, video walkthroughs, and document-sharing platforms mean a remote back-office team can now review transaction-level detail, reconcile ledgers, and test controls without setting foot on site — for most of what a management audit needs to cover.",
      "Where remote review genuinely falls short is physical verification: inventory counts, asset condition, and the informal conversations that happen when an auditor is standing on a factory floor rather than on a scheduled call.",
      "The practical answer for most mid-market businesses is a hybrid model — remote-first for the bulk of the review, with scheduled on-site visits timed around physical verification and control testing that can't be done through a screen.",
      "Businesses that insist on fully remote audits to save cost tend to discover the gap at the worst possible time: during a fraud investigation, not during the audit itself.",
    ],
  },
  {
    slug: "financing-emerging-market-expansion",
    title: "Financing a first expansion into a new market",
    excerpt:
      "The financing mistake we see most often isn't picking the wrong lender — it's picking the wrong instrument for the stage the business is actually at.",
    category: "Corporate Advisory",
    date: "2026-03-30",
    readTime: "7 min read",
    author: "Tushar Vir",
    content: [
      "Businesses expanding into a new market for the first time usually default to whichever financing route their existing bank offers — which is rarely the best fit for the risk profile of a market-entry project.",
      "Development finance institutions offer a lower cost of capital and a reputational signal that helps with subsequent fundraising, but their underwriting timelines are longer and their documentation standards are exacting. Export credit agencies suit longer-tenor equipment financing well but are a poor fit for working capital needs.",
      "The businesses that raise financing efficiently are the ones that match instrument to need before they start applications — not the ones that apply everywhere and take whichever offer arrives first.",
      "A feasibility study built to the standard your target financier already expects does more to speed up approval than any amount of relationship-building with a loan officer.",
    ],
  },
  {
    slug: "welcome-samuel-okafor",
    title: "Welcome to ScaleBridge, Samuel Okafor",
    excerpt:
      "We're pleased to welcome Samuel Okafor as our new West Africa Regional Lead, bringing over 25 years of HR and operations leadership to the team.",
    category: "Africa News",
    date: "2026-02-14",
    readTime: "2 min read",
    author: "Vikrant Khandelwal",
    content: [
      "We're pleased to announce that Samuel Okafor has joined ScaleBridge Global as West Africa Regional Lead, based out of our Lagos coverage team.",
      "Samuel brings more than 25 years of HR and operations leadership experience across manufacturing and FMCG businesses in Nigeria, Ghana, and the wider ECOWAS region — deep, operator-level knowledge that strengthens our talent acquisition practice across the region.",
      "His arrival reflects our continued investment in on-the-ground presence across the markets we serve, rather than running regional mandates from a single hub.",
    ],
  },
  {
    slug: "financial-re-engineering-in-high-rate-markets",
    title: "Reducing borrowing costs without changing your bank",
    excerpt:
      "Financial re-engineering is often mistaken for refinancing. The two aren't the same, and the first is usually faster and cheaper to execute.",
    category: "Virtual Services",
    date: "2025-12-11",
    readTime: "5 min read",
    author: "Karan Thakkar",
    content: [
      "When borrowing costs rise, the instinct is to shop for a new lender. That's often the slowest and most expensive path to relief, especially in markets where banking relationships take years to build.",
      "Cross-currency swaps, structured letters of credit, and disciplined forex hedging can meaningfully reduce the effective cost of existing debt without touching the underlying lender relationship at all.",
      "The businesses that benefit most are the ones treating treasury as an active function — reviewing instrument mix and currency exposure on a quarterly cycle, not just at renewal time.",
      "None of this requires exotic derivatives or speculative positioning. It requires matching the instrument to the actual cash flow and currency profile of the business, which most mid-market treasury functions simply haven't had the bandwidth to do.",
    ],
  },
  {
    slug: "asia-mid-market-hiring-outlook",
    title: "Asia hiring outlook: where mid-market demand is shifting",
    excerpt:
      "Across South and Southeast Asia, the roles our clients are competing hardest for have changed — and the compensation benchmarks haven't caught up yet.",
    category: "Asia News",
    date: "2026-06-24",
    readTime: "5 min read",
    author: "Tara Kapoor",
    content: [
      "The strongest mid-market hiring demand we're seeing across India, Vietnam, and Indonesia is no longer concentrated in traditional commercial roles. It has moved decisively toward finance transformation, supply-chain resilience, and data-literate operations leadership.",
      "The compensation benchmarks most businesses are working from are eighteen to twenty-four months out of date for exactly these roles, which is why offers that look competitive on paper are being turned down at the final stage.",
      "Cross-border candidates returning to the region — often after a decade in the Gulf or Southeast Asian financial hubs — are reshaping expectations on flexibility and equity, particularly in high-growth businesses.",
      "For businesses hiring in Asia this year, the practical takeaway is to benchmark against live offers, not last year's survey data, and to move faster on the roles where regional supply is genuinely thin.",
    ],
  },
  {
    slug: "gulf-market-entry-shifts",
    title: "What's changing for businesses entering the Gulf",
    excerpt:
      "Localisation rules, new entity structures, and a deeper local talent pool are quietly rewriting the market-entry playbook across the GCC.",
    category: "Middle East News",
    date: "2026-05-30",
    readTime: "6 min read",
    author: "Tushar Vir",
    content: [
      "The market-entry playbook that worked in the Gulf five years ago — a free-zone entity, an expatriate leadership team, and a local sponsor — is being replaced by structures that put local ownership, hiring, and value creation at the centre.",
      "Localisation requirements across Saudi Arabia and the UAE now shape hiring plans from day one, not as a compliance afterthought. Businesses that build their org chart around these targets from the outset avoid expensive restructuring twelve months in.",
      "The local talent pool has deepened materially, particularly in finance and operations leadership, which changes the economics of building a team versus importing one wholesale.",
      "For businesses evaluating a Gulf entry this year, the sequencing matters more than the destination: entity structure, localisation plan, and financing should be decided together, not in series.",
    ],
  },
];

/** Blog taxonomy — the categories surfaced as filters on the /blogs page, in order. */
export const blogCategories = [
  "Talent Acquisition",
  "Back Office",
  "Virtual Services",
  "Corporate Advisory",
  "Asia News",
  "Africa News",
  "Middle East News",
] as const;

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}
