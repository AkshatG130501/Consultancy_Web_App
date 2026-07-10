// Flat, duotone illustrations for the "What sets us apart" section.
// Rose accent palette (gold-* tokens) on a soft rose backdrop — self-contained.

type ArtProps = { className?: string };

function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="48" cy="48" r="46" className="fill-gold-100" />
      {children}
    </svg>
  );
}

// Delivering the best value — a faceted gem with sparkles
export function ValueArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <path d="M37 33h22l11 13-22 27-22-27z" className="fill-gold-300" />
      <path d="M26 46h44L48 73z" className="fill-gold-500" />
      <path d="M42 46h12l-6 27z" className="fill-gold-600" />
      <path d="M37 33h22l3 13H34z" className="fill-gold-400" />
      <path
        d="M70 30l1.4 3.6L75 35l-3.6 1.4L70 40l-1.4-3.6L65 35l3.6-1.4z"
        className="fill-gold-500"
      />
      <path
        d="M27 24l1 2.6 2.6 1-2.6 1L27 32l-1-2.6-2.6-1 2.6-1z"
        className="fill-gold-400"
      />
    </Frame>
  );
}

// We work as your extended office — a building with a globe badge
export function OfficeArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="30" y="32" width="30" height="42" rx="3" className="fill-gold-500" />
      <rect x="36" y="39" width="7" height="7" rx="1.3" className="fill-white" />
      <rect x="47" y="39" width="7" height="7" rx="1.3" className="fill-white" />
      <rect x="36" y="50" width="7" height="7" rx="1.3" className="fill-white" />
      <rect x="47" y="50" width="7" height="7" rx="1.3" className="fill-white" />
      <rect x="40" y="62" width="10" height="12" rx="1.5" className="fill-gold-100" />
      <circle cx="63" cy="35" r="10" className="fill-gold-600" />
      <path
        d="M63 27a8 8 0 100 16 8 8 0 000-16zm0 0v16m-8-8h16M56.6 30.5c2 1.3 10.8 1.3 12.8 0M56.6 39.5c2-1.3 10.8-1.3 12.8 0"
        className="stroke-white"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </Frame>
  );
}

// Senior attention on every mandate — two advisors in conversation
export function PeopleArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <circle cx="38" cy="41" r="9" className="fill-gold-600" />
      <path d="M23 72c0-9 7-15 15-15s15 6 15 15z" className="fill-gold-600" />
      <circle cx="61" cy="45" r="7.5" className="fill-gold-400" />
      <path d="M48 72c0-8 6-13 13-13s13 5 13 13z" className="fill-gold-400" />
      <path
        d="M62 26h9a4 4 0 014 4v6a4 4 0 01-4 4h-5l-5 4v-4a4 4 0 01-4-4v-6a4 4 0 014-4z"
        className="fill-gold-500"
      />
      <circle cx="62" cy="33" r="1.5" className="fill-white" />
      <circle cx="67" cy="33" r="1.5" className="fill-white" />
      <circle cx="72" cy="33" r="1.5" className="fill-white" />
    </Frame>
  );
}

// Confidentiality assured — a shield with a keyhole
export function ShieldArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <path
        d="M48 24l20 8v15c0 15-10 22-20 25-10-3-20-10-20-25V32z"
        className="fill-gold-500"
      />
      <path
        d="M48 24l20 8v15c0 15-10 22-20 25V24z"
        className="fill-gold-600"
      />
      <circle cx="48" cy="48" r="6" className="fill-white" />
      <path d="M45.6 47.5h4.8L52 61H44z" className="fill-white" />
    </Frame>
  );
}

export const uspArt = [ValueArt, OfficeArt, PeopleArt, ShieldArt];
