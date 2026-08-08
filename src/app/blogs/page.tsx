import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { BlogFilter } from "@/components/sections/BlogFilter";
import { insights, blogCategories } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Perspectives on talent acquisition, back-office operations, and financial advisory from the Vertex team.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Perspectives from the field"
        description="Practical notes from our talent acquisition, back-office, and advisory teams — grounded in live mandates, not theory."
        crumbs={[{ label: "Blogs" }]}
        image="/page/insights.jpg"
      />

      <section className="bg-white py-24">
        <Container>
          <BlogFilter insights={insights} categories={blogCategories} />
        </Container>
      </section>

      <CTABand
        title="Have a topic you'd like our team to cover?"
        description="Send us a question from a live mandate and we may turn it into our next piece."
      />
    </>
  );
}
