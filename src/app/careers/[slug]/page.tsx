import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Briefcase, Building2, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { JobCard } from "@/components/cards/JobCard";
import { jobs, getJobBySlug } from "@/lib/data/jobs";
import { formatDate } from "@/lib/format-date";
import { site } from "@/lib/data/site";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const more = jobs.filter((j) => j.slug !== job.slug).slice(0, 3);
  const applyHref = `mailto:${site.careersEmail}?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}`;

  return (
    <>
      <PageHero
        eyebrow={job.department}
        title={job.title}
        description={job.summary}
        crumbs={[{ label: "Careers", href: "/careers" }, { label: job.title }]}
      />

      <section className="bg-white py-20">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-10">
            <div>
              <h3 className="font-serif-display text-xl font-medium text-navy-950">
                What you&apos;ll do
              </h3>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-700/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif-display text-xl font-medium text-navy-950">
                What we&apos;re looking for
              </h3>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-navy-700/80">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-navy-950/8 bg-cream-100 p-7">
              <h3 className="font-semibold text-navy-950">Role details</h3>
              <ul className="mt-4 space-y-3 text-sm text-navy-700/80">
                <li className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-gold-600" />
                  {job.location}
                </li>
                <li className="flex items-center gap-2.5">
                  <Briefcase className="size-4 text-gold-600" />
                  {job.type}
                </li>
                <li className="flex items-center gap-2.5">
                  <Building2 className="size-4 text-gold-600" />
                  {job.department}
                </li>
                <li className="flex items-center gap-2.5">
                  <CalendarDays className="size-4 text-gold-600" />
                  Posted {formatDate(job.postedDate)}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-gold-100 p-7 text-navy-900">
              <h3 className="font-serif-display text-lg font-medium text-navy-950">
                Ready to apply?
              </h3>
              <p className="mt-2 text-sm text-navy-700/80">
                Send your CV and a short note on why this mandate fits — we
                respond to every application within five business days.
              </p>
              <a
                href={applyHref}
                className="mt-5 inline-flex items-center justify-center rounded-full bg-gold-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-700"
              >
                Apply for this role
              </a>
            </div>
          </aside>
        </Container>
      </section>

      <section className="bg-cream-100 py-20">
        <Container>
          <SectionHeading eyebrow="Other roles" title="More open mandates" />
          <div className="mt-10 flex flex-col gap-4">
            {more.map((j) => (
              <JobCard key={j.slug} job={j} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
