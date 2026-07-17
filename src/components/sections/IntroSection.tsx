import { Container } from "@/components/ui/Container";
import { Globe } from "@/components/decorative/Globe";

export function IntroSection() {
  return (
    <section className="bg-white pt-6 pb-20 sm:pt-8 sm:pb-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Globe />
        </div>

        <div>
          <h2 className="font-serif-display text-2xl font-bold text-navy-950 sm:text-3xl">
            Empowering ambitious businesses
            <br />
            build stronger organizations
            <br />
            and scale up beyond borders.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-navy-700/80 sm:text-xl">
            <p>
              We partner with entrepreneurs, growing companies, family
              businesses, and multinational organisations to strengthen their
              financial foundation, build high-performing leadership teams,
              and create efficient business operations.
            </p>
            <p>
              Whether you&apos;re expanding into new markets, restructuring
              your business, or preparing for your next phase of growth, our
              experts provide practical solutions that deliver measurable
              business outcomes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
