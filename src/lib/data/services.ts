export type ServiceCategory = "executive-search" | "back-office" | "advisory";

export type ServiceSection = {
  heading: string;
  body: string;
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
  summary: string;
  sections: ServiceSection[];
  benefits: string[];
  processSteps?: string[];
  relatedSlugs: string[];
};

export const serviceCategories: Record<
  ServiceCategory,
  { title: string; slug: string; description: string }
> = {
  "executive-search": {
    title: "Executive Search & RPO",
    slug: "executive-search",
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
  // ---------------- PILLAR: EXECUTIVE SEARCH ----------------
  {
    slug: "executive-search",
    category: "executive-search",
    pillar: true,
    icon: "Users",
    title: "Executive Search & RPO",
    shortDescription:
      "We help transform your organisation with the right hires — from C-suite to specialist talent.",
    heroTagline: "Build the leadership team your growth deserves.",
    summary:
      "ScaleBridge Global identifies and places leadership and specialist talent for organisations operating across Africa, the Middle East, and Asia. We combine deep sector networks with a rigorous, reference-checked screening process to place candidates who perform from day one.",
    sections: [
      {
        heading: "Leadership hiring, done properly",
        body: "We recruit across the C-suite (CEO, CFO, COO, CHRO, CXO) as well as senior and mid-level management, covering commercial, finance, marketing, HR, supply chain, and technology functions. Every mandate is led by a consultant who has personally worked in the sector, not a generalist reading a job description.",
      },
      {
        heading: "Recruitment Process Outsourcing",
        body: "For clients scaling headcount quickly, we embed as an extension of your HR team — owning sourcing, screening, and coordination end-to-end while you retain final hiring authority. This is particularly effective for retail, FMCG, and manufacturing businesses opening new markets.",
      },
      {
        heading: "Cross-border and expatriate placement",
        body: "We maintain an active, continuously refreshed database of internationally mobile candidates and manage the added complexity of relocation, visa sponsorship, and cultural onboarding — a common blind spot for firms hiring across borders for the first time.",
      },
      {
        heading: "Sector depth",
        body: "FMCG, oil & gas, textiles and apparel, construction and infrastructure, retail, telecom, agri-tech, fintech, logistics, and healthcare, among others. We do not take a mandate outside our network's depth — and we tell you when that's the case.",
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
      "Discovery call to align on the role, mandate, and organisational context",
      "Job description and compensation benchmarking",
      "Confidential market mapping and headhunting",
      "Structured screening and competency interviews",
      "Client interviews and shortlist presentation",
      "Reference checks and background verification",
      "Offer structuring and negotiation support",
      "Visa, relocation, and onboarding coordination",
    ],
    relatedSlugs: ["back-office", "advisory"],
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
    summary:
      "Our back-office team handles the accounting, payroll, and audit work that keeps a business running — from a dedicated operations centre working in your time zone, on your systems, reporting to your standards.",
    sections: [
      {
        heading: "A dedicated team, not a ticketing queue",
        body: "Clients are assigned a named team that learns their business, chart of accounts, and reporting cadence — rather than being routed through a rotating support desk. The team works your operating hours, joins your calls, and is reachable the way an in-house hire would be.",
      },
      {
        heading: "Built on your infrastructure",
        body: "We operate inside your existing ERP, accounting software, and document management systems wherever possible, minimising the transition burden and keeping your auditors and board reporting unaffected.",
      },
      {
        heading: "Three specialisations",
        body: "Accounting (daily transaction processing and financial reporting), Payroll (statutory compliance and salary administration), and Management Audit (independent operational review) — engaged individually or as a combined back office.",
      },
      {
        heading: "An alternative: staff at our premises",
        body: "Some clients prefer to hire their own staff but house them at our Gurugram facility under our administrative and IT infrastructure — reducing office overhead without outsourcing the work itself. We can structure either model.",
      },
    ],
    benefits: [
      "Full-time dedicated team aligned to your working hours",
      "Lower cost base than an equivalent in-house finance function",
      "Enterprise-grade infrastructure and data security controls",
      "Single point of accountability for accuracy and turnaround",
      "Scales up or down with headcount, without hiring lead time",
    ],
    relatedSlugs: ["accounting", "payroll", "management-audit", "advisory"],
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
    summary:
      "Our Virtual CFO service places an experienced finance leader inside your business — remotely, via cloud tools and periodic site visits — to close the gap between what your books say and what your business needs to grow.",
    sections: [
      {
        heading: "Why businesses need this",
        body: "Revenue leakage, tax inefficiency, and weak financial visibility are rarely caused by bad intentions — they're caused by the absence of senior finance oversight. A Virtual CFO brings that oversight without the cost, hiring risk, or ramp-up time of a full-time executive hire.",
      },
      {
        heading: "A team, not one person",
        body: "Engaging ScaleBridge gives you access to a team spanning corporate advisory, financing, M&A, and financial re-engineering — versus the single point of failure (and single skill set) of one in-house CFO hire.",
      },
      {
        heading: "Six specialist services",
        body: "Corporate Advisory, Financing & Capital Raise, Feasibility Studies, Mergers & Acquisitions, Financial Re-engineering, and Emerging Markets Advisory — engaged individually or as an integrated CFO mandate.",
      },
    ],
    benefits: [
      "Senior finance expertise at a fraction of full-time executive cost",
      "Continuity that survives any single individual's departure",
      "Faster access to specialist skills (M&A, financing, tax) as needed",
      "Long-term strategic partner, not a transactional consultant",
    ],
    relatedSlugs: [
      "corporate-advisory",
      "financing",
      "feasibility-study",
      "mergers-acquisitions",
      "financial-re-engineering",
      "emerging-markets-advisory",
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
    summary:
      "We review your business the way an incoming investor would — costs, cash conversion, organisational structure, and controls — and turn that review into a prioritised plan for improving shareholder value.",
    sections: [
      {
        heading: "Corporate restructuring",
        body: "Identifying organisational bloat, redundant reporting layers, and operational inefficiency that quietly erode margin.",
      },
      {
        heading: "Business sustainability",
        body: "Stress-testing the business model against demand, cost, and competitive shifts to build a model that survives beyond the current growth cycle.",
      },
      {
        heading: "Turn-around strategy",
        body: "For businesses in distress, a structured recovery plan covering cost reduction, cash stabilisation, and stakeholder communication.",
      },
      {
        heading: "MIS and decision support",
        body: "Analytical management information systems and budgeting frameworks that give leadership a decision-ready view of the business, not a rear-view mirror.",
      },
      {
        heading: "Tax planning and internal controls",
        body: "Offshore structuring, double-taxation-treaty planning across our markets, insurance and premium review, and internal control audits across production, supply chain, and IT.",
      },
    ],
    benefits: [
      "A prioritised, numbers-led improvement plan — not a slide deck of generic frameworks",
      "Tax and structuring guidance specific to your operating markets",
      "Independent view free from internal reporting bias",
    ],
    relatedSlugs: ["advisory", "financial-re-engineering", "financing"],
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
