export type ServiceCategory = "talent-acquisition" | "back-office" | "advisory";

export type ServiceSection = {
  heading: string;
  body: string;
};

export type ServiceOffering = {
  title: string;
  description: string;
  points: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  category: ServiceCategory;
  pillar: boolean;
  parentSlug?: string;
  icon: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  /** When set, the detail page renders a full-bleed image hero instead of PageHero. */
  heroImage?: string;
  /** Background focal point for the image hero (e.g. "top"); defaults to center. */
  heroImagePosition?: string;
  /** Large stacked headline for the image hero (defaults to `title`). */
  heroTitle?: string;
  /** Muted sub-line shown under the image-hero headline. */
  heroSubtitle?: string;
  summary: string;
  sections: ServiceSection[];
  /** Optional "Our Services" block: grouped offerings, each with bullet points. */
  serviceOfferings?: ServiceOffering[];
  benefits: string[];
  processSteps?: ProcessStep[];
  relatedSlugs: string[];
  /** Static informational cards shown in the "Related" section (offerings without their own page). */
  relatedCards?: {
    icon: string;
    title: string;
    description: string;
    href?: string;
  }[];
};

export const serviceCategories: Record<
  ServiceCategory,
  { title: string; slug: string; description: string }
> = {
  "talent-acquisition": {
    title: "Talent Acquisition & RPO",
    slug: "talent-acquisition",
    description:
      "Leadership hiring, recruitment process outsourcing, and specialist talent placement across emerging markets.",
  },
  "back-office": {
    title: "Back-Office Solutions",
    slug: "back-office",
    description:
      "Accounting, payroll, and management audit delivered by a dedicated remote operations team.",
  },
  advisory: {
    title: "CFO & Advisory Services",
    slug: "advisory",
    description:
      "Fractional CFO leadership, capital raising, and corporate strategy for growing businesses.",
  },
};

export const services: Service[] = [
  // ---------------- PILLAR: TALENT ACQUISITION ----------------
  {
    slug: "talent-acquisition",
    category: "talent-acquisition",
    pillar: true,
    icon: "Users",
    title: "Talent Acquisition & RPO",
    shortDescription:
      "We help transform your organisation with the right hires — from C-suite to specialist talent.",
    heroTagline: "Build the leadership team your growth deserves.",
    heroImage: "/hero/executive-search.jpg",
    heroTitle: "Talent Acquisition",
    heroSubtitle: "Fulfilling Leadership. Building Futures.",
    summary:
      "We recruit across the C-suite (CEO, CFO, COO, CHRO, CXO) as well as senior and mid-level management, covering commercial, finance, marketing, HR, supply chain, and technology functions.FMCG, oil & gas, textiles and apparel, construction and infrastructure, retail, telecom, agri-tech, fintech, logistics, and healthcare, among others. We do not take a mandate outside our network's depth — and we tell you when that's the case.",
    sections: [],
    serviceOfferings: [
      {
        title: "Talent Acquisition",
        description:
          "End-to-end recruitment support for client businesses — sourcing, screening and shortlisting candidates for finance, accounts, sales and operations roles.",
        points: [
          "Role-specific candidate sourcing and screening",
          "Structured shortlist with interview-ready profiles",
          "Support through offer negotiation and onboarding",
        ],
      },
      {
        title: "Virtual Talent Provision",
        description:
          "Supplying pre-vetted remote professionals (accountants, analysts, admin support) that client businesses can engage flexibly without the overhead of a full-time hire.",
        points: [
          "On-demand access to trained remote staff",
          "Flexible engagement — part-time, project-based or full-time",
          "Lower fixed-cost burden for small and mid-size clients",
        ],
      },
      {
        title: "Contractual Services",
        description:
          "Structured, time-bound engagements where our team executes a defined scope of work (accounting clean-up, compliance filing, process documentation) under a fixed contract.",
        points: [
          "Clearly scoped deliverables and timelines",
          "Fixed-fee or milestone-based pricing",
          "Lower commitment risk than permanent hiring",
        ],
      },
    ],
    benefits: [
      "Consultants with direct sector operating experience, not generalist recruiters",
      "A pre-vetted, continuously updated candidate database across 40+ countries",
      "Structured reference verification on every shortlisted candidate",
      "Support through offer negotiation, visa sponsorship, and onboarding",
      "Typical shortlist delivery within 10 working days of mandate kick-off",
    ],
    processSteps: [
      {
        title: "Discover",
        description:
          "We learn about your business strategy, culture, leadership expectations, and hiring priorities.",
      },
      {
        title: "Search",
        description:
          "Our consultants identify exceptional professionals through executive search, referrals, market mapping, and extensive talent networks.",
      },
      {
        title: "Assess",
        description:
          "Every shortlisted candidate is evaluated for technical expertise, leadership capability, cultural alignment, and long-term potential.",
      },
      {
        title: "Present",
        description:
          "You receive a refined shortlist supported by consultant insights and detailed evaluation summaries.",
      },
      {
        title: "Secure",
        description:
          "We manage interviews, negotiations, reference verification, offer discussions, and onboarding coordination.",
      },
      {
        title: "Grow",
        description:
          "Our relationship extends beyond hiring with onboarding support and continued partnership to help your business scale successfully.",
      },
    ],
    relatedSlugs: [],
    relatedCards: [
      {
        icon: "Workflow",
        title: "Recruitment Process Outsourcing",
        description:
          "For clients scaling headcount quickly, we embed as an extension of your HR team — owning sourcing, screening, and coordination end-to-end while you retain final hiring authority. This is particularly effective for retail, FMCG, and manufacturing businesses opening new markets.",
        href: "/contact",
      },
    ],
  },

  // ---------------- PILLAR: BACK OFFICE ----------------
  {
    slug: "back-office",
    category: "back-office",
    pillar: true,
    icon: "Building2",
    title: "Back-Office Solutions",
    shortDescription:
      "Grow your business, not your overhead — establish a fully managed back office with us.",
    heroTagline: "Operational weight, off your books.",
    heroImage: "/hero/back-office.jpg",
    heroTitle: "Back Office",
    heroSubtitle: "Efficient Processes. Stronger Foundations.",
    summary: "",
    sections: [],
    serviceOfferings: [
      {
        title: "Remote Books And Accounting Services",
        description:
          "Day-to-day bookkeeping and accounting managed remotely — vouchers, reconciliations, payables/receivables tracking and periodic financial statements.",
        points: [
          "Daily/weekly transaction recording",
          "Bank and ledger reconciliation",
          "Periodic P&L, balance sheet and MIS output",
        ],
      },
      {
        title: "ERP Setup — Initial And Backend Services",
        description:
          "Complete first-time ERP implementation, including chart of accounts design, opening balances, and ongoing backend data entry and maintenance.",
        points: [
          "Company creation, ledger and inventory setup",
          "Opening balance migration from existing records",
          "Backend data-entry support on a recurring basis",
        ],
      },
      {
        title: "ERP Expert Services",
        description:
          "Specialist support on ERP — advanced configuration, troubleshooting, custom reports and best-practice usage for businesses already on the platform.",
        points: [
          "Diagnostic review of existing Tally usage",
          "Custom report and voucher configuration",
          "Ongoing expert helpdesk support",
        ],
      },
      {
        title: "System Automation",
        description:
          "Designing and implementing automated workflows — accounting, inventory, billing, reporting — to reduce manual effort and error in day-to-day operations.",
        points: [
          "Process mapping and automation opportunity audit",
          "Implementation of accounting/ERP-linked automations",
          "Staff training on the automated workflow",
        ],
      },
    ],
    benefits: [
      "Full-time dedicated team aligned to your working hours",
      "Lower cost base than an equivalent in-house finance function",
      "Enterprise-grade infrastructure and data security controls",
      "Single point of accountability for accuracy and turnaround",
      "Scales up or down with headcount, without hiring lead time",
    ],
    relatedSlugs: ["payroll", "management-audit"],
  },
  {
    slug: "accounting",
    category: "back-office",
    pillar: false,
    parentSlug: "back-office",
    icon: "Calculator",
    title: "Accounting",
    shortDescription:
      "Offshore accounting support covering daily transactions through to board-ready reporting.",
    heroTagline: "Grow your business, not your office.",
    summary:
      "A remote accounting team that processes your daily transactions, reconciles your accounts, and delivers management-ready financial reports — with periodic on-site verification where it matters.",
    sections: [
      {
        heading: "Daily transaction processing",
        body: "Purchases, sales, production entries, logistics costs, inter-company transfers, and forex transactions are recorded and reviewed daily, keeping your books current rather than reconstructed at month-end.",
      },
      {
        heading: "Reconciliation",
        body: "Bank reconciliation, debtor and creditor ledgers, statutory return cross-checks, and inventory discrepancy resolution — the unglamorous work that prevents year-end surprises.",
      },
      {
        heading: "Reporting",
        body: "Monthly management accounts, board packs, and covenant reporting formatted to your template, delivered on a fixed schedule.",
      },
      {
        heading: "Technology-driven process",
        body: "We work within your existing ERP and cloud accounting stack, with document management handled through secure cloud storage rather than email attachments.",
      },
      {
        heading: "Periodic on-site visits",
        body: "For clients who want it, our team conducts scheduled site visits for physical verification, control testing, and risk assessment — combining the cost advantage of remote delivery with the assurance of in-person checks.",
      },
    ],
    benefits: [
      "Books closed on a fixed monthly schedule, every time",
      "Full audit trail across every transaction category",
      "No hiring, training, or attrition risk on your side",
      "Direct access to the team preparing your numbers",
    ],
    relatedSlugs: ["back-office", "payroll", "management-audit"],
  },
  {
    slug: "payroll",
    category: "back-office",
    pillar: false,
    parentSlug: "back-office",
    icon: "Wallet",
    title: "Payroll Management",
    shortDescription:
      "End-to-end payroll processing and statutory compliance, so payday is never a fire drill.",
    heroTagline: "Payroll that runs quietly, correctly, every cycle.",
    summary:
      "We manage salary processing, statutory compliance, and employee queries so your HR and finance teams stop spending the last week of every month on payroll administration.",
    sections: [
      {
        heading: "Salary administration",
        body: "Attendance and leave integration, deductions, payables processing, and pay-slip generation — reconciled and ready before your cut-off date, every cycle.",
      },
      {
        heading: "Statutory compliance",
        body: "Local labour law, tax withholding, and social security filings handled and tracked by jurisdiction, with a compliance calendar shared with your team so nothing is a surprise.",
      },
      {
        heading: "Employee interaction",
        body: "We field payroll queries and full-and-final settlements directly, freeing your internal HR team from being the first line of support for pay disputes.",
      },
      {
        heading: "Reporting",
        body: "Labour cost analysis and MIS reporting by department, cost centre, or project — built for finance teams that need payroll data to feed budgeting, not just a payslip PDF.",
      },
    ],
    benefits: [
      "Zero missed statutory filing deadlines",
      "Multi-jurisdiction payroll handled from a single point of contact",
      "Reduced exposure to compliance penalties",
      "Frees internal HR time for strategic work",
    ],
    relatedSlugs: ["back-office", "accounting", "management-audit"],
  },
  {
    slug: "management-audit",
    category: "back-office",
    pillar: false,
    parentSlug: "back-office",
    icon: "ClipboardCheck",
    title: "Management Audit",
    shortDescription:
      "Independent, remote-enabled review of operations, controls, and organisational efficiency.",
    heroTagline: "Find the leak before it becomes a loss.",
    summary:
      "An independent evaluation of how your business actually runs — strategy execution, organisational structure, budgeting discipline, IT controls, and resource utilisation — reported without the internal politics that blunt most self-assessments.",
    sections: [
      {
        heading: "What we review",
        body: "Strategy execution against plan, organisational structure and span of control, budgeting and forecasting discipline, IT general controls, resource and asset utilisation, and enterprise risk exposure.",
      },
      {
        heading: "Why independence matters",
        body: "Internal reviews are shaped by internal incentives. An external audit surfaces the inefficiencies, fraud exposure, and process gaps that internal teams are structurally unlikely to flag on their own.",
      },
      {
        heading: "Remote-enabled delivery",
        body: "Document review, system access, and stakeholder interviews are conducted remotely wherever possible, supplemented by targeted on-site verification — reducing cost and disruption versus a traditional audit engagement.",
      },
    ],
    benefits: [
      "Materially reduced fraud exposure through independent controls testing",
      "Faster identification of process inefficiencies",
      "Objective, board-ready reporting free of internal bias",
      "Early detection of errors before they compound",
    ],
    relatedSlugs: ["back-office", "accounting", "payroll"],
  },

  // ---------------- PILLAR: ADVISORY ----------------
  {
    slug: "advisory",
    category: "advisory",
    pillar: true,
    icon: "LineChart",
    title: "CFO & Advisory Services",
    shortDescription:
      "A dedicated finance professional acting as your Virtual CFO — strategy, financing, and structure.",
    heroTagline: "Senior finance leadership, without the full-time cost.",
    heroImage: "/hero/virtual-cfo.jpg",
    heroImagePosition: "top",
    heroTitle: "Virtual Services",
    heroSubtitle: "Financial Clarity. Strategic Growth.",
    summary:
      "Revenue leakage, tax inefficiency, and weak financial visibility are rarely caused by bad intentions — they're caused by the absence of senior finance oversight. A Virtual CFO brings that oversight without the cost, hiring risk, or ramp-up time of a full-time executive hire.",
    sections: [],
    serviceOfferings: [
      {
        title: "Virtual CFO",
        description:
          "Senior financial leadership delivered remotely — budgeting, cash-flow management, MIS reporting, fundraising support and board-level financial guidance for businesses that cannot yet justify a full-time CFO.",
        points: [
          "Monthly MIS, Dashboards, budgeting and cash-flow oversight",
          "Investor / lender-ready financial reporting",
          "Strategic input on pricing, costing and growth decisions",
          "Development of Cost Sheets and Models",
          "Development of Strategy for FOREX buying, selling and Hedging",
        ],
      },
      {
        title: "Virtual Director Services",
        description:
          "Independent, part-time directorial oversight — governance guidance, strategic review and accountability for promoter-led businesses that need an experienced outside voice on key decisions.",
        points: [
          "Periodic strategy and governance review",
          "Independent perspective on major decisions",
          "Support preparing for board meetings and investor discussions",
        ],
      },
    ],
    benefits: [
      "Senior finance expertise at a fraction of full-time executive cost",
      "Continuity that survives any single individual's departure",
      "Faster access to specialist skills (M&A, financing, tax) as needed",
      "Long-term strategic partner, not a transactional consultant",
    ],
    relatedSlugs: [
      "financing",
      "financial-re-engineering",
      "feasibility-study",
    ],
  },
  {
    slug: "corporate-advisory",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "Compass",
    title: "Corporate Advisory & Strategy",
    shortDescription:
      "Shareholder-value analysis to improve profitability, cash flow, and organisational efficiency.",
    heroTagline: "Strategy grounded in your numbers, not a template.",
    heroImage: "/hero/corporate-advisory.jpg",
    heroImagePosition: "top",
    heroTitle: "Corporate Advisory",
    heroSubtitle: "Strategy. Scale. Sustainable Growth.",
    summary:
      "We review your business the way an incoming investor would — costs, cash conversion, organisational structure, and controls — and turn that review into a prioritised plan for improving shareholder value.",
    sections: [],
    serviceOfferings: [
      {
        title: "Business Advisory Services",
        description:
          "Hands-on advisory across pricing, costing, working-capital, vendor negotiation and operational efficiency — tailored to the specific pain points of each client.",
        points: [
          "Diagnostic review of the business's current state",
          "Actionable recommendations with priority and impact",
          "Periodic follow-up to track implementation",
        ],
      },
      {
        title: "FMCG Expert Opinion",
        description:
          "Sector-specific guidance for FMCG and manufacturing businesses — distribution strategy, route-to-market, pricing architecture and category benchmarking, drawing on our sector network.",
        points: [
          "Distribution and route-to-market assessment",
          "Pricing and margin-structure benchmarking",
          "Introductions within our FMCG network where relevant",
        ],
      },
      {
        title: "Project Discussion And Advisory",
        description:
          "Structured sounding-board sessions for new projects or expansion plans — feasibility input, risk flagging and a second opinion before capital is committed.",
        points: [
          "Structured project review sessions",
          "Feasibility and risk-flagging input",
          "Documented recommendations and next steps",
        ],
      },
      {
        title: "Business Consultancy",
        description:
          "Broader consulting engagements covering business-plan development, process redesign, and organisational structuring for businesses in a growth or turnaround phase.",
        points: [
          "Business plan and structure development",
          "Process and organisational redesign support",
          "Implementation roadmap with milestones",
        ],
      },
      {
        title: "Business Survey",
        description:
          "On-ground and desk-based market/competitor surveys — mapping demand, pricing, competitor presence and distribution gaps in a defined territory or sector.",
        points: [
          "Defined-scope market/competitor survey",
          "Structured findings report with data",
          "Recommendations based on survey insights",
        ],
      },
    ],
    benefits: [
      "A prioritised, numbers-led improvement plan — not a slide deck of generic frameworks",
      "Tax and structuring guidance specific to your operating markets",
      "Independent view free from internal reporting bias",
    ],
    relatedSlugs: [],
    relatedCards: [
      {
        icon: "HeartHandshake",
        title: "Help as a Friend in Business",
        description:
          "An informal, always-available sounding board — beyond the scope of a formal engagement — for promoters who simply need a trusted, experienced voice to think through a decision.",
        href: "/contact",
      },
    ],
  },
  {
    slug: "financing",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "HandCoins",
    title: "Financing & Capital Raise",
    shortDescription:
      "Arranging term lending, working capital, private equity, and export credit financing.",
    heroTagline: "The right capital, from the right source, on time.",
    summary:
      "We connect clients with development finance institutions, international banks, export credit agencies, and private equity funds — and manage the application process end-to-end to reduce approval time.",
    sections: [
      {
        heading: "Application preparation",
        body: "We prepare and compile financing applications to meet the specific underwriting norms of each institution, which materially reduces back-and-forth and processing time versus a generic application.",
      },
      {
        heading: "Funding sources",
        body: "Development finance institutions (lower cost of capital, reputational benefit), export credit agencies (3–10 year tenors), international commercial banks (faster turnaround), and private equity funds (governance and growth capital).",
      },
      {
        heading: "Full lifecycle support",
        body: "From initial structuring through due diligence and banker queries to financial close — we stay engaged for the entire process, not just the introduction.",
      },
    ],
    benefits: [
      "Access to a network of DFIs, ECAs, banks, and PE funds built over a decade",
      "Materially reduced processing and approval time",
      "Support through due diligence, not just the initial pitch",
    ],
    relatedSlugs: ["advisory", "feasibility-study", "mergers-acquisitions"],
  },
  {
    slug: "feasibility-study",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "FileBarChart",
    title: "Feasibility Studies",
    shortDescription:
      "Bank- and investor-grade feasibility studies and pitch decks for new projects and expansions.",
    heroTagline: "Make the first impression the right one.",
    summary:
      "A rigorous, professionally presented feasibility study — covering market, technical, and financial viability — built to the standard banks and investors actually expect, so financing decisions move faster.",
    sections: [
      {
        heading: "Rigorous analysis",
        body: "Market feasibility, financial viability modelling, and risk assessment grounded in verifiable data, not assumptions dressed up as projections.",
      },
      {
        heading: "Professional presentation",
        body: "A well-structured study and pitch deck materially improves financing approval odds — first impressions matter as much to a credit committee as to any other audience.",
      },
      {
        heading: "Institutional relationships",
        body: "Familiarity with the specific requirements of IFC, regional development banks, and commercial insurers means studies are built to the format decision-makers already expect.",
      },
    ],
    benefits: [
      "Studies built to the exact standard your target financier expects",
      "Faster financing approval cycles",
      "Comprehensive coverage: market, technical, and financial viability",
    ],
    relatedSlugs: ["advisory", "financing", "corporate-advisory"],
  },
  {
    slug: "mergers-acquisitions",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "GitMerge",
    title: "Mergers & Acquisitions",
    shortDescription:
      "Buy-side and sell-side advisory, valuations, and independent due diligence.",
    heroTagline: "Know exactly what you're buying — or selling.",
    summary:
      "We support both sides of the transaction table: identifying and evaluating acquisition targets, running valuations, and coordinating independent due diligence that boards can rely on to approve a deal.",
    sections: [
      {
        heading: "Buy-side and sell-side advisory",
        body: "Target evaluation and outreach, valuation modelling, and financial strategy recommendations tailored to the client's position in the transaction.",
      },
      {
        heading: "Independent due diligence",
        body: "Financial, legal, tax, and IT due diligence conducted independently of the deal team — the standard most boards now require before approving a transaction.",
      },
      {
        heading: "Sector coverage",
        body: "Active experience across food production, retail, mining, agriculture, and technology transactions in emerging markets.",
      },
    ],
    benefits: [
      "Independent due diligence that satisfies board governance requirements",
      "Valuation grounded in sector-specific transaction experience",
      "Support through negotiation, not just target identification",
    ],
    relatedSlugs: ["advisory", "financing", "corporate-advisory"],
  },
  {
    slug: "financial-re-engineering",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "RefreshCcw",
    title: "Financial Re-engineering",
    shortDescription:
      "Optimising financial instruments, hedging, and currency structures to reduce cost of capital.",
    heroTagline: "The same debt, structured to cost less.",
    summary:
      "We review how a business finances itself — instruments, currency exposure, and interest rate positioning — and re-engineer that structure to reduce cost and volatility, often without changing the underlying lender relationship.",
    sections: [
      {
        heading: "Instrument selection",
        body: "Matching the right financial instrument — cash credit, overdrafts, term lending, letters of credit, or private equity — to the actual cash flow profile of the business, rather than defaulting to whatever a relationship banker offers.",
      },
      {
        heading: "Cross-currency swaps",
        body: "Converting local-currency exposure to lower-rate foreign currency financing, materially reducing borrowing costs in high-interest-rate markets.",
      },
      {
        heading: "Forex hedging",
        body: "Structured hedging policies that manage currency volatility risk without turning treasury into a speculative function.",
      },
      {
        heading: "Interest rate arbitrage and letters of credit",
        body: "Capitalising on rate differentials across banking relationships to generate low-risk income, and using letters of credit as a deliberate cost-reduction and cash-management tool.",
      },
    ],
    benefits: [
      "Reduced cost of capital without changing operating lenders",
      "Lower currency and interest rate volatility exposure",
      "Practical, instrument-level recommendations — not theoretical treasury policy",
    ],
    relatedSlugs: ["advisory", "financing", "corporate-advisory"],
  },
  {
    slug: "emerging-markets-advisory",
    category: "advisory",
    pillar: false,
    parentSlug: "advisory",
    icon: "Globe2",
    title: "Emerging Markets Advisory",
    shortDescription:
      "Market entry, joint-venture structuring, and financing support for businesses expanding into new regions.",
    heroTagline: "Enter new markets without relearning everything.",
    summary:
      "For businesses expanding into Africa, the Middle East, or Southeast Asia for the first time, we provide the on-the-ground judgement that turns market entry from a multi-year learning exercise into a structured, financed plan.",
    sections: [
      {
        heading: "Why these markets, now",
        body: "Large, under-penetrated consumer markets; resource-rich economies with room for sustainable development; a rapidly expanding working-age population; and steadily improving governance and foreign-investment frameworks.",
      },
      {
        heading: "Business setup and operational roadmap",
        body: "Entity structuring, regulatory navigation, and an operational roadmap sequenced to your risk tolerance and capital — not a generic market-entry template.",
      },
      {
        heading: "Joint-venture partner identification",
        body: "Sourcing and vetting local partners, and running due diligence that protects your position before capital or reputation is committed.",
      },
      {
        heading: "Project financing",
        body: "Arranging financing through our existing development finance institution and banking network, sized and structured for the specific market you're entering.",
      },
    ],
    benefits: [
      "On-the-ground judgement, not desk research",
      "Vetted local partners and reduced joint-venture risk",
      "Financing arranged through existing DFI and banking relationships",
    ],
    relatedSlugs: ["advisory", "financing", "corporate-advisory"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getPillars() {
  return services.filter((s) => s.pillar);
}

export function getChildren(parentSlug: string) {
  return services.filter((s) => s.parentSlug === parentSlug);
}
