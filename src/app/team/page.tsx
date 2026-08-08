import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { getTeamByGroup } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the leadership behind Vertex's mandates across Africa, the Middle East, and Asia.",
};

export default function TeamPage() {
  const leadership = getTeamByGroup("Leadership").slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind every mandate"
        description="Every consultant on our team has direct operating experience in the sector and region they cover — not a generalist recruiter reading from a database."
        crumbs={[{ label: "Team" }]}
        image="/page/team.jpg"
      />

      <section className="bg-white py-24">
        <Container>
          <SectionHeading align="center" title="Meet the partners" />
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10">
            {leadership.map((member) => (
              <article key={member.slug} className="flex flex-col">
                <div className="overflow-hidden rounded-2xl bg-cream-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <h3 className="mt-6 font-serif-display text-2xl font-medium text-navy-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-gold-700 uppercase">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-navy-700/75">
                  {member.bio}
                </p>
                <p className="mt-4 text-xs font-medium tracking-wide text-navy-950/50 uppercase">
                  Focus: {member.focus}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Want to speak with a consultant directly?"
        description="Tell us about your mandate and we'll connect you with the right person on the team — usually within one business day."
        primaryLabel="Contact us"
      />
    </>
  );
}
