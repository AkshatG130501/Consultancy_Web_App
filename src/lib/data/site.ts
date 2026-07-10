export const site = {
  name: "Northbridge Advisory",
  shortName: "Northbridge",
  tagline: "Clarity in complexity",
  description:
    "Northbridge Advisory is a boutique management consulting firm helping ambitious businesses across global emerging markets scale with confidence — through executive search, back-office operations, and strategic CFO advisory.",
  url: "https://www.northbridgeadvisory.com",
  founded: 2012,
  email: "hello@northbridgeadvisory.com",
  careersEmail: "careers@northbridgeadvisory.com",
  phone: "+91 124 456 7890",
  address: {
    line1: "Tower B, Cyber Hub",
    line2: "Sector 24, Gurugram",
    line3: "Haryana 122002, India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/northbridge-advisory",
    instagram: "https://www.instagram.com/northbridgeadvisory",
    youtube: "https://www.youtube.com/@northbridgeadvisory",
  },
  regions: ["Africa", "Middle East", "Southeast Asia", "South Asia"],
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
        title: "Executive Search & RPO",
        slug: "executive-search",
        description: "Leadership hiring and recruitment process outsourcing",
      },
      {
        title: "Back-Office Solutions",
        slug: "back-office",
        description: "Accounting, payroll, and management audit",
      },
      {
        title: "CFO & Advisory Services",
        slug: "advisory",
        description: "Fractional CFO, financing, and corporate strategy",
      },
    ],
  },
  {
    title: "Team",
    href: "/team",
  },
  {
    title: "Insights",
    href: "/insights",
  },
  {
    title: "Careers",
    href: "/careers",
  },
];

export const footerServiceLinks = [
  { title: "Executive Search & RPO", href: "/services/executive-search" },
  { title: "Accounting", href: "/services/accounting" },
  { title: "Payroll Management", href: "/services/payroll" },
  { title: "Management Audit", href: "/services/management-audit" },
  { title: "Corporate Advisory", href: "/services/corporate-advisory" },
  { title: "Financing & Capital Raise", href: "/services/financing" },
  { title: "Mergers & Acquisitions", href: "/services/mergers-acquisitions" },
  { title: "Emerging Markets Advisory", href: "/services/emerging-markets-advisory" },
];

export const footerCompanyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Our Team", href: "/team" },
  { title: "Insights", href: "/insights" },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
];
