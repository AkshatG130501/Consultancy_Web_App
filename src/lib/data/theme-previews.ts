export type ThemePreview = {
  id: string;
  name: string;
  tagline: string;
  mode: "dark" | "light";
  layout: "gradient" | "flat";
  bg: string;
  surface: string;
  ink: string;
  mutedInk: string;
  border: string;
  from: string;
  to: string;
  accent: string;
  block?: string;
  blockInk?: string;
};

export const themePreviews: ThemePreview[] = [
  {
    id: "aurora",
    name: "Aurora",
    tagline: "Near-black canvas, glowing violet-to-cyan gradient, glass cards — Linear/Vercel-style modern SaaS.",
    mode: "dark",
    layout: "gradient",
    bg: "#0A0A0F",
    surface: "rgba(255,255,255,0.04)",
    ink: "#F5F5F7",
    mutedInk: "rgba(245,245,247,0.6)",
    border: "rgba(255,255,255,0.09)",
    from: "#7C3AED",
    to: "#06B6D4",
    accent: "#22D3EE",
  },
  {
    id: "electric-indigo",
    name: "Electric Indigo",
    tagline: "Bolder neon duotone (lime-to-pink) on ink black — high-energy startup feel, brightest of the dark options.",
    mode: "dark",
    layout: "gradient",
    bg: "#05040F",
    surface: "rgba(255,255,255,0.045)",
    ink: "#F5F3FF",
    mutedInk: "rgba(245,243,255,0.6)",
    border: "rgba(255,255,255,0.1)",
    from: "#A3E635",
    to: "#EC4899",
    accent: "#A3E635",
  },
  {
    id: "sunbeam",
    name: "Sunbeam",
    tagline: "Warm orange-to-pink gradient on a cream canvas — bright and optimistic without losing polish.",
    mode: "light",
    layout: "gradient",
    bg: "#FFFBF5",
    surface: "rgba(255,255,255,0.75)",
    ink: "#1A1207",
    mutedInk: "rgba(26,18,7,0.62)",
    border: "rgba(26,18,7,0.08)",
    from: "#FF7A45",
    to: "#EC4899",
    accent: "#FFB020",
  },
  {
    id: "neo-mint",
    name: "Neo Mint",
    tagline: "Cool mint-to-indigo gradient with frosted glass cards — fresh, techy, calm confidence.",
    mode: "light",
    layout: "gradient",
    bg: "#F3FBF8",
    surface: "rgba(255,255,255,0.7)",
    ink: "#06261F",
    mutedInk: "rgba(6,38,31,0.62)",
    border: "rgba(6,38,31,0.08)",
    from: "#34D399",
    to: "#6366F1",
    accent: "#34D399",
  },
  {
    id: "glacier",
    name: "Glacier",
    tagline: "Soft blue-to-violet gradient, glassmorphic surfaces — clean, premium, Apple-adjacent.",
    mode: "light",
    layout: "gradient",
    bg: "#F5F7FF",
    surface: "rgba(255,255,255,0.65)",
    ink: "#0B1330",
    mutedInk: "rgba(11,19,48,0.6)",
    border: "rgba(11,19,48,0.08)",
    from: "#60A5FA",
    to: "#A78BFA",
    accent: "#60A5FA",
  },
  {
    id: "citrus-pop",
    name: "Citrus Pop",
    tagline: "Flat, bold color-blocking in yellow, black, and red — modern-brutalist, no gradients, no glow.",
    mode: "light",
    layout: "flat",
    bg: "#FFFFFF",
    surface: "#111111",
    ink: "#111111",
    mutedInk: "rgba(17,17,17,0.65)",
    border: "rgba(17,17,17,0.12)",
    from: "#FFC845",
    to: "#FF4D4D",
    accent: "#FF4D4D",
    block: "#FFC845",
    blockInk: "#111111",
  },
];
