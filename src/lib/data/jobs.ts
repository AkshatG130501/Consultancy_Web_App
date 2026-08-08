export type Job = {
  slug: string;
  title: string;
  location: string;
  region: string;
  type: string;
  department: string;
  postedDate: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    slug: "cfo-agriprocessing-kenya",
    title: "Chief Financial Officer — Agri-processing Group",
    location: "Nairobi, Kenya",
    region: "Africa",
    type: "Full-time, client mandate",
    department: "Talent Acquisition",
    postedDate: "2026-06-20",
    summary:
      "A leading East African agri-processing group is seeking a CFO to lead finance strategy across a multi-country operating footprint, reporting directly to the Group CEO.",
    responsibilities: [
      "Own group financial strategy, planning, and treasury across four countries",
      "Lead relationships with banking partners, DFIs, and the board audit committee",
      "Rebuild management reporting to support an upcoming capital raise",
      "Lead and develop a finance team of 20+ across regional offices",
    ],
    requirements: [
      "15+ years in senior finance roles, with at least 5 in a CFO or deputy CFO capacity",
      "Experience in agriculture, FMCG, or manufacturing sectors in Africa",
      "Chartered Accountant, ACCA, or equivalent qualification",
      "Track record of leading capital raises or major financing transactions",
    ],
  },
  {
    slug: "regional-hr-director-uae",
    title: "Regional HR Director — Retail Group",
    location: "Dubai, UAE",
    region: "Middle East",
    type: "Full-time, client mandate",
    department: "Talent Acquisition",
    postedDate: "2026-06-12",
    summary:
      "A multinational retail group is hiring a Regional HR Director to lead people strategy across GCC operations during a period of rapid store expansion.",
    responsibilities: [
      "Design and execute regional talent strategy across 6 GCC markets",
      "Lead workforce planning for 40+ new store openings over 18 months",
      "Modernise performance management and compensation frameworks",
      "Partner with regional leadership on organisational design",
    ],
    requirements: [
      "10+ years in HR leadership, ideally within retail or multi-site operations",
      "Experience operating across multiple GCC jurisdictions",
      "Fluency in English required; Arabic a strong advantage",
    ],
  },
  {
    slug: "senior-accountant-back-office-noida",
    title: "Senior Accountant — Back-Office Operations",
    location: "Gurugram, India (Hybrid)",
    region: "South Asia",
    type: "Full-time, Vertex team",
    department: "Back-Office Solutions",
    postedDate: "2026-06-05",
    summary:
      "Join our internal back-office team supporting international clients across Africa and the Middle East with day-to-day accounting and reporting.",
    responsibilities: [
      "Manage daily transaction processing and monthly close for a portfolio of clients",
      "Prepare management accounts and board reporting packs",
      "Coordinate with client-side finance teams across multiple time zones",
      "Support periodic on-site verification visits as required",
    ],
    requirements: [
      "3–6 years in accounting or audit, ideally with international client exposure",
      "Working knowledge of a major ERP or cloud accounting platform",
      "CA-Inter, ACCA-affiliate, or equivalent in progress or completed",
    ],
  },
  {
    slug: "ma-analyst-gurugram",
    title: "M&A Analyst",
    location: "Gurugram, India",
    region: "South Asia",
    type: "Full-time, Vertex team",
    department: "CFO & Advisory Services",
    postedDate: "2026-05-28",
    summary:
      "Support our advisory practice on live buy-side and sell-side mandates across Africa, the Middle East, and Asia, working directly with senior partners.",
    responsibilities: [
      "Build valuation and financial models for live transaction mandates",
      "Support due diligence coordination across financial, tax, and legal work streams",
      "Prepare investor and board materials for active deals",
      "Conduct sector and market research to support new business development",
    ],
    requirements: [
      "1–3 years in investment banking, transaction advisory, or corporate finance",
      "Strong financial modelling and valuation skills",
      "MBA or CFA progress preferred but not required",
    ],
  },
  {
    slug: "regional-lead-west-africa",
    title: "Regional Lead — West Africa",
    location: "Lagos, Nigeria",
    region: "Africa",
    type: "Full-time, Vertex team",
    department: "Talent Acquisition",
    postedDate: "2026-05-15",
    summary:
      "Lead our West Africa talent acquisition practice, owning client relationships and mandate delivery across Nigeria, Ghana, and the wider ECOWAS region.",
    responsibilities: [
      "Own client relationships for existing and new mandates across West Africa",
      "Lead search execution for C-suite and senior management mandates",
      "Build and maintain candidate networks across priority sectors",
      "Represent Vertex at regional industry events and client forums",
    ],
    requirements: [
      "10+ years in talent acquisition, HR leadership, or management consulting",
      "Established professional network across Nigeria and West Africa",
      "Comfortable operating with significant autonomy in a client-facing role",
    ],
  },
  {
    slug: "payroll-specialist-remote",
    title: "Payroll Specialist — Multi-Country",
    location: "Remote (Africa & Middle East time zones)",
    region: "Africa / Middle East",
    type: "Full-time, Vertex team",
    department: "Back-Office Solutions",
    postedDate: "2026-05-02",
    summary:
      "Manage multi-jurisdiction payroll processing for a portfolio of clients across Africa and the Middle East, ensuring statutory compliance in every market served.",
    responsibilities: [
      "Process monthly payroll cycles across multiple countries and currencies",
      "Track statutory filing deadlines and maintain a compliance calendar per jurisdiction",
      "Respond to employee payroll queries on behalf of client HR teams",
      "Prepare labour cost and MIS reporting for client finance teams",
    ],
    requirements: [
      "3+ years in multi-country payroll processing",
      "Familiarity with labour law and statutory compliance in at least two of our operating regions",
      "High attention to detail and comfort with recurring deadline-driven work",
    ],
  },
];

export function getJobBySlug(slug: string) {
  return jobs.find((j) => j.slug === slug);
}
