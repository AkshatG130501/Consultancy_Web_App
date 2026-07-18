// Country -> region mapping for the interactive globe. Names match exactly the
// Natural Earth naming used by world-atlas `countries-50m.json` (verified
// against the dataset), so lookups are reliable.
//
// "Middle East" is a political grouping, not a continent, so its members are
// listed explicitly (and removed from Asia/Africa). Transcontinental edge cases
// resolved deliberately: Egypt/Turkey/Cyprus -> Middle East; the Caucasus
// (Armenia/Azerbaijan/Georgia), Kazakhstan and Russia -> Asia.

export type GlobeRegion = "Asia" | "Africa" | "Middle East";

export const REGIONS: GlobeRegion[] = ["Asia", "Africa", "Middle East"];

const REGION_MEMBERS: Record<GlobeRegion, string[]> = {
  Asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Georgia",
    "Hong Kong",
    "India",
    "Indonesia",
    "Japan",
    "Kazakhstan",
    "Kyrgyzstan",
    "Laos",
    "Macao",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar",
    "Nepal",
    "North Korea",
    "Pakistan",
    "Philippines",
    "Russia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Taiwan",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkmenistan",
    "Uzbekistan",
    "Vietnam",
  ],
  Africa: [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cameroon",
    "Central African Rep.",
    "Chad",
    "Comoros",
    "Congo",
    "Côte d'Ivoire",
    "Dem. Rep. Congo",
    "Djibouti",
    "Eq. Guinea",
    "Eritrea",
    "eSwatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "São Tomé and Principe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Somalia",
    "Somaliland",
    "South Africa",
    "S. Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "W. Sahara",
    "Zambia",
    "Zimbabwe",
  ],
  "Middle East": [
    "Bahrain",
    "Cyprus",
    "Egypt",
    "Iran",
    "Iraq",
    "Israel",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "N. Cyprus",
    "Oman",
    "Palestine",
    "Qatar",
    "Saudi Arabia",
    "Syria",
    "Turkey",
    "United Arab Emirates",
    "Yemen",
  ],
};

// name -> region, built once.
const NAME_TO_REGION: Record<string, GlobeRegion> = {};
for (const region of REGIONS) {
  for (const name of REGION_MEMBERS[region]) {
    NAME_TO_REGION[name] = region;
  }
}

export function regionOf(name: string | undefined): GlobeRegion | null {
  if (!name) return null;
  return NAME_TO_REGION[name] ?? null;
}

// Countries whose name is always shown; the rest reveal on hover.
export const KEY_COUNTRIES = new Set<string>([
  // Asia
  "India",
  "China",
  "Indonesia",
  "Bangladesh",
  "Japan",
  "Vietnam",
  "Malaysia",
  "Thailand",
  "Singapore",
  "Russia",
  // Africa
  "Nigeria",
  "South Africa",
  "Kenya",
  "Ethiopia",
  "Ghana",
  "Tanzania",
  "Morocco",
  "Côte d'Ivoire",
  "Angola",
  "Morocco",
  "Rwanda",
  "Egypt",
  "Malawi",
  "Mozambique",
  "Namibia",
  "Senegal",
  "Tanzania",
  // Middle East
  "Saudi Arabia",
  "United Arab Emirates",
  "Turkey",
]);

// Muted, light-theme palette — one hue per region. `fill` tints the countries,
// `boundary` is the highlighted merged region outline, `swatch` feeds the legend.
export const REGION_COLORS: Record<
  GlobeRegion,
  { fill: string; boundary: string; swatch: string }
> = {
  Asia: { fill: "#bcd3e8", boundary: "#3f74a6", swatch: "#3f74a6" },
  Africa: { fill: "#bfe0cf", boundary: "#3f9a72", swatch: "#3f9a72" },
  "Middle East": { fill: "#f0d7b0", boundary: "#c9853a", swatch: "#c9853a" },
};

export const GLOBE_COLORS = {
  ocean: "#f6f4f7",
  otherLand: "#e2e0e7",
  border: "#ffffff",
  sphereStroke: "#d8d5de",
  graticule: "#e7e4ec",
};
