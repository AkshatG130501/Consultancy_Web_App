import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CTABand } from "@/components/sections/CTABand";
import { JobsList } from "@/components/JobsList";
import { jobs } from "@/lib/data/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles at ScaleBridge Global and with our clients across Africa, the Middle East, and Asia.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career across three continents"
        description="Roles on our own team, and select client mandates we're running search for — updated as they open."
        crumbs={[{ label: "Careers" }]}
        image="/page/careers.jpg"
      />

      <section className="bg-white py-24">
        <Container>
          <JobsList jobs={jobs} />
        </Container>
      </section>

      <CTABand
        title="Don't see the right role listed?"
        description="Send us your CV and the kind of mandate you're looking for — we keep an active pipeline for roles that haven't been posted yet."
        primaryLabel="Send your CV"
      />
    </>
  );
}
