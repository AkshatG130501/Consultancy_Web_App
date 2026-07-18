import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { getChildren, getPillars, serviceCategories } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Talent acquisition & RPO, back-office solutions, and CFO advisory services for businesses operating across Africa, the Middle East, and Asia.",
};

export default function ServicesPage() {
  const pillars = getPillars();

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Three practices. One accountable partner."
        description="Engage us for a single mandate or as an integrated extension of your leadership team — every practice is delivered to the same standard."
        crumbs={[{ label: "Services" }]}
        image="/page/services.jpg"
      />

      {pillars.map((pillar, i) => {
        const children = getChildren(pillar.slug);
        return (
          <section
            key={pillar.slug}
            className={cn(
              "py-20 sm:py-24",
              i % 2 === 1 ? "bg-cream-100" : "bg-white",
            )}
          >
            <Container>
              <SectionHeading
                eyebrow={serviceCategories[pillar.category].title}
                title={pillar.heroTagline}
                description={pillar.summary}
              />
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <ServiceCard service={pillar} />
                {children.map((child) => (
                  <ServiceCard key={child.slug} service={child} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTABand
        title="Not sure which service fits your situation?"
        description="Describe your mandate in a few lines and we'll point you to the right practice — no obligation."
      />
    </>
  );
}
