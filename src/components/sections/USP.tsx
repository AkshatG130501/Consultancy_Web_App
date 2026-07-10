import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ValueArt, OfficeArt, PeopleArt, ShieldArt } from "@/components/decorative/UspArt";

const usps = [
  {
    Art: ValueArt,
    title: "Delivering the best value",
    description:
      "We create real value through an honest, ethical approach and a genuine focus on results — delivered by an energetic team with a quick turnaround.",
  },
  {
    Art: OfficeArt,
    title: "We work as your extended office",
    description:
      "Based in India's tech hub of Gurugram, we operate in your time zone and on your systems — with local knowledge across Africa, the Middle East and Asia, to the standards your board expects.",
  },
  {
    Art: PeopleArt,
    title: "Senior attention on every mandate",
    description:
      "Your engagement is led by a consultant with direct operating experience in your sector — not handed to a junior team. Timelines are agreed up front and reported against.",
  },
  {
    Art: ShieldArt,
    title: "Confidentiality assured",
    description:
      "Every engagement is structured to maintain complete confidentiality, customised to each client's requirements — from a leadership search to a financing round.",
  },
];

export function USP() {
  return (
    <section className="bg-cream-50 py-24">
      <Container>
        <SectionHeading
          align="center"
          title="What sets us apart"
          description="A boutique partner that pairs the cost and convenience of an offshore team with the rigour and discretion clients expect from senior advisors."
        />
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
          {usps.map((usp) => (
            <div key={usp.title} className="flex flex-col items-center text-center">
              <usp.Art className="size-24" />
              <h3 className="mt-6 font-serif-display text-xl font-medium text-navy-950">
                {usp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-700/75">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
