import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ThemeMock } from "@/components/theme-preview/ThemeMock";
import { themePreviews } from "@/lib/data/theme-previews";

export const metadata: Metadata = {
  title: "Theme Preview",
  robots: { index: false, follow: false },
};

export default function ThemePreviewPage() {
  return (
    <div className="bg-slate-100 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Internal · Theme Preview
          </p>
          <h1 className="font-serif-display mt-3 text-3xl font-medium text-slate-900 sm:text-4xl">
            Six modern directions for the palette
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Each mockup below reuses the same layout as the live site — only
            the colors change. Tell me which one (or which combination) to
            apply site-wide, and I&apos;ll swap it into the real theme.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {themePreviews.map((theme, i) => (
            <div key={theme.id}>
              <div className="mx-auto max-w-3xl">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif-display text-xl font-semibold text-slate-900">
                    {i + 1}. {theme.name}
                  </h2>
                  <div className="flex items-center gap-1.5">
                    {[theme.bg, theme.from, theme.to, theme.accent].map((c, idx) => (
                      <span
                        key={`${c}-${idx}`}
                        className="size-5 rounded-full border border-black/10"
                        style={{ background: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-1.5 text-sm text-slate-600">{theme.tagline}</p>
              </div>
              <div className="mx-auto mt-5 max-w-3xl">
                <ThemeMock theme={theme} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
