import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { InsightCard } from "@/components/cards/InsightCard";
import { insights, getInsightBySlug } from "@/lib/data/insights";
import { formatDate } from "@/lib/format-date";

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();

  const more = insights.filter((i) => i.slug !== insight.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        description={`${formatDate(insight.date)} · ${insight.readTime} · By ${insight.author}`}
        crumbs={[{ label: "Blogs", href: "/blogs" }, { label: insight.title }]}
      />

      <section className="bg-white py-20">
        <Container className="max-w-2xl">
          <div className="space-y-6 text-base leading-relaxed text-navy-800/90">
            {insight.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-20">
        <Container>
          <SectionHeading eyebrow="Keep reading" title="More from our team" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
