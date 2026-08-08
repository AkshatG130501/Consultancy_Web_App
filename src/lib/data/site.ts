export const site = {
  name: "Vertex",
  shortName: "Vertex",
  tagline: "Turnaround Businesses. Beyond Boundaries",
  description:
    "Vertex is a boutique management consulting firm helping ambitious businesses across global emerging markets scale with confidence — through talent acquisition, back-office operations, and strategic CFO advisory.",
  url: "https://www.vertexglobal.com",
  founded: 2012,
  email: "khandelwalvikrant1@gmail.com",
  careersEmail: "careers@vertexglobal.com",
  phone: "+91 89553 14742",
  address: {
    line1: "5/10 Malviya Nagar, Amit Bhardwaj Marg",
    line2: "Jaipur, Rajasthan",
    line3: "India, 302017",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vertex-global",
    instagram: "https://www.instagram.com/vertexglobal",
    whatsapp: "https://wa.me/918955314742",
    youtube: "https://www.youtube.com/@vertexglobal",
    twitter: "https://x.com/vertexglobal",
  },
  regions: ["Asia", "Africa", "Middle East"],
  stats: [
    { value: "300+", label: "Clients advised" },
    { value: "40+", label: "Countries served" },
    { value: "12", label: "Years in practice" },
    { value: "94%", label: "Client retention" },
  ],
} as const;

export type NavChild = {
  title: string;
  slug: string;
  description: string;
};

export type NavItem = {
  title: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "Talent Acquisition",
        slug: "talent-acquisition",
        description: "Leadership hiring and recruitment process outsourcing",
      },
      {
        title: "Back Office Establishment",
        slug: "back-office",
        description: "Finance, HR, payroll, compliance, and shared services",
      },
      {
        title: "Virtual Services",
        slug: "advisory",
        description: "Fractional CFO leadership, reporting, and financing",
      },
      {
        title: "Corporate Advisory",
        slug: "corporate-advisory",
        description: "Growth strategy, transformation, and restructuring",
      },
    ],
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Jobs",
    href: "/careers",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export const footerServiceLinks = [
  { title: "Talent Acquisition & RPO", href: "/services/talent-acquisition" },
  { title: "Accounting", href: "/services/accounting" },
  { title: "Payroll Management", href: "/services/payroll" },
  { title: "Management Audit", href: "/services/management-audit" },
  { title: "Corporate Advisory", href: "/services/corporate-advisory" },
  { title: "Financing & Capital Raise", href: "/services/financing" },
  { title: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
  {
    title: "Emerging Markets Advisory",
    href: "/services/emerging-markets-advisory",
  },
];

export const footerCompanyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Team", href: "/team" },
  { title: "Blogs", href: "/blogs" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];

export const footerQuickLinks = [
  { title: "About Us", href: "/about" },
  { title: "Talent Acquisition", href: "/services/talent-acquisition" },
  { title: "Virtual Services", href: "/services/advisory" },
  { title: "Back Office", href: "/services/back-office" },
  { title: "Corporate Advisory", href: "/services/corporate-advisory" },
  { title: "Blog", href: "/blogs" },
  { title: "Jobs", href: "/careers" },
  { title: "Contact Us", href: "/contact" },
];
