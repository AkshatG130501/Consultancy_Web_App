import { ArrowRight, Users, Building2, LineChart, CheckCircle2 } from "lucide-react";
import type { ThemePreview } from "@/lib/data/theme-previews";

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const bigint = parseInt(full, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

export function ThemeMock({ theme }: { theme: ThemePreview }) {
  if (theme.layout === "flat") return <FlatMock theme={theme} />;
  return <GradientMock theme={theme} />;
}

function GradientMock({ theme }: { theme: ThemePreview }) {
  const { bg, surface, ink, mutedInk, border, from, to, accent } = theme;
  const gradient = `linear-gradient(135deg, ${from}, ${to})`;
  const glow = hexToRgba(from, 0.35);

  const vars = {
    "--bg": bg,
    "--surface": surface,
    "--ink": ink,
    "--muted": mutedInk,
    "--border": border,
    "--from": from,
    "--to": to,
    "--accent": accent,
  } as React.CSSProperties;

  return (
    <div
      style={{ ...vars, background: bg }}
      className="relative overflow-hidden rounded-2xl border border-(--border) shadow-xl"
    >
      {/* Ambient gradient blobs */}
      <div
        className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full opacity-30 blur-3xl"
        style={{ background: from }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-10 size-64 rounded-full opacity-25 blur-3xl"
        style={{ background: to }}
      />

      {/* Nav */}
      <div className="relative flex items-center justify-between border-b border-(--border) px-6 py-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-(--ink)">
          <span
            className="flex size-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
            style={{ background: gradient }}
          >
            N
          </span>
          Northbridge
        </div>
        <div className="hidden items-center gap-6 text-sm font-medium text-(--muted) sm:flex">
          <span>About</span>
          <span>Services</span>
          <span>Team</span>
          <span>Insights</span>
        </div>
        <span
          className="rounded-full px-4 py-2 text-xs font-semibold text-white"
          style={{ background: gradient, boxShadow: `0 6px 18px ${glow}` }}
        >
          Get in touch
        </span>
      </div>

      {/* Hero */}
      <div className="relative px-6 py-14">
        <div className="max-w-md">
          <p
            className="mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase"
            style={{ color: accent }}
          >
            <span className="h-px w-5" style={{ background: gradient }} />
            Management Consultants
          </p>
          <h2
            className="bg-clip-text text-2xl leading-tight font-semibold text-transparent sm:text-3xl"
            style={{ backgroundImage: gradient, WebkitBackgroundClip: "text" }}
          >
            Clarity in complexity
          </h2>
          <h2 className="text-2xl leading-tight font-semibold text-(--ink) sm:text-3xl">
            for ambitious businesses.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-(--muted)">
            Executive search, back-office operations, and CFO advisory across
            Africa, the Middle East, and Asia.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span
              className="flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white"
              style={{ background: gradient, boxShadow: `0 10px 26px ${glow}` }}
            >
              Talk to an advisor
              <ArrowRight className="size-3.5" />
            </span>
            <span
              className="rounded-full border px-5 py-2.5 text-sm font-medium text-(--ink)"
              style={{ borderColor: border, background: surface }}
            >
              Explore services
            </span>
          </div>
        </div>
      </div>

      {/* Stat band (glass strip) */}
      <div
        className="relative mx-6 grid grid-cols-4 gap-2 rounded-2xl border border-(--border) px-5 py-4 backdrop-blur-xl"
        style={{ background: surface }}
      >
        {[
          ["300+", "Clients"],
          ["40+", "Countries"],
          ["12", "Years"],
          ["94%", "Retention"],
        ].map(([value, label]) => (
          <div key={label}>
            <p className="text-lg font-bold" style={{ color: accent }}>
              {value}
            </p>
            <p className="text-[10px] text-(--muted)">{label}</p>
          </div>
        ))}
      </div>

      {/* Service cards (glass) */}
      <div className="relative grid grid-cols-1 gap-3 px-6 py-8 sm:grid-cols-3">
        {[
          { icon: Users, title: "Executive Search" },
          { icon: Building2, title: "Back-Office" },
          { icon: LineChart, title: "CFO Advisory" },
        ].map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="rounded-xl border border-(--border) p-4 backdrop-blur-xl"
            style={{ background: surface }}
          >
            <div
              className="flex size-8 items-center justify-center rounded-lg text-white"
              style={{ background: gradient }}
            >
              <Icon className="size-4" />
            </div>
            <p className="mt-3 text-sm font-semibold text-(--ink)">{title}</p>
            <p className="mt-2 flex items-center gap-1 text-xs font-medium" style={{ color: accent }}>
              Learn more <ArrowRight className="size-3" />
            </p>
          </div>
        ))}
      </div>

      {/* Benefits strip */}
      <div className="relative flex flex-wrap gap-4 border-t border-(--border) px-6 py-5">
        {["Confidentiality as standard", "Senior attention on every mandate"].map((b) => (
          <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-(--muted)">
            <CheckCircle2 className="size-3.5" style={{ color: accent }} />
            {b}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="relative flex items-center justify-between px-6 py-5 text-xs"
        style={{ background: hexToRgba(theme.mode === "dark" ? "#000000" : from, theme.mode === "dark" ? 0.35 : 0.06), color: mutedInk }}
      >
        <span>© 2026 Northbridge Advisory</span>
        <span className="flex gap-3">
          <span className="size-5 rounded-full" style={{ background: hexToRgba(ink, 0.1) }} />
          <span className="size-5 rounded-full" style={{ background: hexToRgba(ink, 0.1) }} />
          <span className="size-5 rounded-full" style={{ background: hexToRgba(ink, 0.1) }} />
        </span>
      </div>
    </div>
  );
}

function FlatMock({ theme }: { theme: ThemePreview }) {
  const { bg, ink, mutedInk, border, block = "#FFC845", to, blockInk = "#111111" } = theme;

  return (
    <div
      style={{ background: bg }}
      className="relative overflow-hidden rounded-2xl border-2"
      // border color intentionally solid ink, not translucent — matches the flat/brutalist style
    >
      <div style={{ borderColor: ink }} className="absolute inset-0 rounded-2xl border-2" />
      {/* Nav */}
      <div className="relative flex items-center justify-between border-b-2 px-6 py-4" style={{ borderColor: ink }}>
        <div className="flex items-center gap-2 text-sm font-bold" style={{ color: ink }}>
          <span
            className="flex size-6 items-center justify-center rounded-full text-[10px] font-bold"
            style={{ background: block, color: blockInk }}
          >
            N
          </span>
          Northbridge
        </div>
        <div className="hidden items-center gap-6 text-sm font-semibold sm:flex" style={{ color: mutedInk }}>
          <span>About</span>
          <span>Services</span>
          <span>Team</span>
          <span>Insights</span>
        </div>
        <span
          className="rounded-full border-2 px-4 py-2 text-xs font-bold"
          style={{ background: to, borderColor: ink, color: "#ffffff" }}
        >
          Get in touch
        </span>
      </div>

      {/* Hero */}
      <div className="relative grid grid-cols-1 sm:grid-cols-[1.3fr_1fr]">
        <div className="px-6 py-14">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold tracking-wide uppercase" style={{ color: to }}>
            <span className="h-1.5 w-5 rounded-full" style={{ background: to }} />
            Management Consultants
          </p>
          <h2 className="text-3xl font-black leading-[1.05]" style={{ color: ink }}>
            Clarity in complexity for ambitious businesses.
          </h2>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: mutedInk }}>
            Executive search, back-office operations, and CFO advisory across
            Africa, the Middle East, and Asia.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span
              className="flex items-center gap-1.5 rounded-full border-2 px-5 py-2.5 text-sm font-bold"
              style={{ background: block, borderColor: ink, color: blockInk }}
            >
              Talk to an advisor
              <ArrowRight className="size-3.5" />
            </span>
            <span
              className="rounded-full border-2 px-5 py-2.5 text-sm font-bold"
              style={{ borderColor: ink, color: ink }}
            >
              Explore services
            </span>
          </div>
        </div>
        <div className="border-t-2 sm:border-t-0 sm:border-l-2" style={{ borderColor: ink, background: block }} />
      </div>

      {/* Stat band */}
      <div className="relative grid grid-cols-4 gap-px border-y-2" style={{ borderColor: ink, background: ink }}>
        {[
          ["300+", "Clients"],
          ["40+", "Countries"],
          ["12", "Years"],
          ["94%", "Retention"],
        ].map(([value, label]) => (
          <div key={label} className="px-3 py-4" style={{ background: bg }}>
            <p className="text-lg font-black" style={{ color: to }}>
              {value}
            </p>
            <p className="text-[10px] font-semibold" style={{ color: mutedInk }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Service cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3">
        {[
          { icon: Users, title: "Executive Search" },
          { icon: Building2, title: "Back-Office" },
          { icon: LineChart, title: "CFO Advisory" },
        ].map(({ icon: Icon, title }, i) => (
          <div
            key={title}
            className="border-b-2 p-5 sm:border-r-2 sm:border-b-0"
            style={{
              borderColor: hexToRgba(ink, 0.15),
              background: i === 1 ? block : bg,
            }}
          >
            <div
              className="flex size-8 items-center justify-center rounded-lg border-2"
              style={{ borderColor: ink, color: ink, background: i === 1 ? blockInk : "transparent" }}
            >
              <Icon className="size-4" style={{ color: i === 1 ? block : ink }} />
            </div>
            <p className="mt-3 text-sm font-bold" style={{ color: i === 1 ? blockInk : ink }}>
              {title}
            </p>
            <p
              className="mt-2 flex items-center gap-1 text-xs font-bold"
              style={{ color: i === 1 ? blockInk : to }}
            >
              Learn more <ArrowRight className="size-3" />
            </p>
          </div>
        ))}
      </div>

      {/* Benefits strip */}
      <div className="relative flex flex-wrap gap-4 border-t-2 px-6 py-5" style={{ borderColor: ink }}>
        {["Confidentiality as standard", "Senior attention on every mandate"].map((b) => (
          <span key={b} className="flex items-center gap-1.5 text-xs font-bold" style={{ color: mutedInk }}>
            <CheckCircle2 className="size-3.5" style={{ color: to }} />
            {b}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="relative flex items-center justify-between border-t-2 px-6 py-5 text-xs font-semibold"
        style={{ borderColor: ink, background: ink, color: "#ffffff" }}
      >
        <span>© 2026 Northbridge Advisory</span>
        <span className="flex gap-3">
          <span className="size-5 rounded-full border-2" style={{ borderColor: "#ffffff" }} />
          <span className="size-5 rounded-full border-2" style={{ borderColor: "#ffffff" }} />
          <span className="size-5 rounded-full border-2" style={{ borderColor: "#ffffff" }} />
        </span>
      </div>
    </div>
  );
}
