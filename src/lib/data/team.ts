export type TeamGroup =
  | "Leadership"
  | "Management Consulting"
  | "Finance & Advisory";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  group: TeamGroup;
  bio: string;
  focus: string;
  initials: string;
  image?: string;
};

export const team: TeamMember[] = [
  // Leadership
  {
    slug: "tushar-vir",
    name: "Tushar Vir",
    role: "Founder",
    group: "Leadership",
    bio: "Tushar founded ScaleBridge Global in 2012 after a decade in corporate finance across India, East Africa, and Central Europe. He is a Chartered Accountant and has led debt syndication and M&A mandates totalling more than USD 250 million.",
    focus: "Corporate finance, M&A, capital raising",
    initials: "TV",
    image: "/team/tushar-vir.jpg",
  },
  {
    slug: "vikrant-khandelwal",
    name: "Vikrant Khandelwal",
    role: "Founder",
    group: "Leadership",
    bio: "Vikrant leads client relationships and internal talent development. A graduate of Delhi University with postgraduate training in organisational communication, he has worked across European, Asian, and African client mandates for over a decade.",
    focus: "Client strategy, quality control, team development",
    initials: "VK",
    image: "/team/vikrant-khandelwal.jpg",
  },
  {
    slug: "devraj-oberoi",
    name: "Devraj Oberoi",
    role: "Senior Advisor",
    group: "Leadership",
    bio: "Devraj brings four decades of operating experience, including board and presidency roles at manufacturing groups in India and West Africa. He advises the firm's leadership on long-horizon strategy and governance.",
    focus: "Governance, manufacturing sector strategy",
    initials: "DO",
  },
  // Management Consulting
  {
    slug: "tara-kapoor",
    name: "Tara Kapoor",
    role: "Principal Consultant",
    group: "Management Consulting",
    bio: "MBA with 8+ years in talent acquisition, managing mandates across East and West Africa. Specialises in finance and operations leadership placements.",
    focus: "Finance & operations leadership, Africa",
    initials: "TK",
  },
  {
    slug: "priyansh-mehra",
    name: "Priyansh Mehra",
    role: "Principal Consultant",
    group: "Management Consulting",
    bio: "14+ years managing diversified group hiring mandates across Africa and South Asia, with particular depth in manufacturing and FMCG leadership roles.",
    focus: "FMCG & manufacturing leadership",
    initials: "PM",
  },
  {
    slug: "nidhi-vora",
    name: "Nidhi Vora",
    role: "Senior Consultant",
    group: "Management Consulting",
    bio: "14+ years across India, Africa, and international mandates, focused on operational and commercial leadership hiring for mid-market and multinational clients.",
    focus: "Operations & commercial roles",
    initials: "NV",
  },
  {
    slug: "aaliya-farooqui",
    name: "Aaliya Farooqui",
    role: "Senior Consultant",
    group: "Management Consulting",
    bio: "MBA and law graduate covering Africa, the Middle East, and India, with a focus on operational and sales leadership mandates.",
    focus: "Operations & sales leadership",
    initials: "AF",
  },
  {
    slug: "rhea-dsouza",
    name: "Rhea D'Souza",
    role: "Consultant",
    group: "Management Consulting",
    bio: "Specialises in food & beverage sector recruitment across Africa, the Middle East, and India, with a track record in FMCG plant leadership hiring.",
    focus: "Food & beverage sector",
    initials: "RD",
  },
  {
    slug: "manav-suri",
    name: "Manav Suri",
    role: "Consultant",
    group: "Management Consulting",
    bio: "Handles leadership and mid-level mandates across Africa and India, with a focus on energy and food-processing clients.",
    focus: "Energy & food processing",
    initials: "MS",
  },
  {
    slug: "ishita-bhalla",
    name: "Ishita Bhalla",
    role: "Consultant",
    group: "Management Consulting",
    bio: "Covers finance and operations leadership mandates across Africa, the UAE, and India for mid-market and PE-backed clients.",
    focus: "Finance & operations, UAE",
    initials: "IB",
  },
  // Finance & Advisory
  {
    slug: "karan-thakkar",
    name: "Karan Thakkar",
    role: "Head of Financial Advisory",
    group: "Finance & Advisory",
    bio: "Chartered Accountant with 7+ years handling international finance and accounting mandates, leading the back-office and management audit practice.",
    focus: "Back-office operations, management audit",
    initials: "KT",
  },
  {
    slug: "vaani-choudhary",
    name: "Vaani Choudhary",
    role: "Financial Consultant",
    group: "Finance & Advisory",
    bio: "Economics honours graduate managing project finance mandates across African markets, with particular focus on infrastructure and agriculture financing.",
    focus: "Project finance, Africa",
    initials: "VC",
  },
];

export function getTeamByGroup(group: TeamGroup) {
  return team.filter((member) => member.group === group);
}
