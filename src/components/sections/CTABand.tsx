import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GridPattern } from "@/components/decorative/GridPattern";

export function CTABand({
  title = "Let's talk about what your business needs next.",
  description = "Whether it's a single leadership hire or a full financial re-structuring, the first conversation is free and confidential.",
  primaryLabel = "Get in touch",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gold-600 py-20">
      <GridPattern className="text-white/[0.08]" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="font-serif-display max-w-2xl text-3xl font-medium text-balance text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-base text-white/85">{description}</p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Button
            href={primaryHref}
            size="lg"
            showArrow
            className="bg-white text-gold-700 hover:bg-cream-100"
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="ghost"
              size="lg"
              className="border-white/40 text-white hover:border-white/60 hover:bg-white/10"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
