import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { InsightCard } from "@/components/cards/InsightCard";
import { insights } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Perspectives on executive search, back-office operations, and financial advisory from the Northbridge Advisory team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Perspectives from the field"
        description="Practical notes from our executive search, back-office, and advisory teams — grounded in live mandates, not theory."
        crumbs={[{ label: "Blogs" }]}
        image="/page/insights.jpg"
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Have a topic you'd like our team to cover?"
        description="Send us a question from a live mandate and we may turn it into our next piece."
      />
    </>
  );
}
