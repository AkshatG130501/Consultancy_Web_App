import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { LinkedinIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { site, footerServiceLinks, footerCompanyLinks } from "@/lib/data/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-navy-950/10 bg-cream-100 text-navy-800">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="dark" size="xl" />
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-full border border-navy-950/15 text-navy-700 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gold-600 uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-700 transition-colors hover:text-navy-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gold-600 uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-700 transition-colors hover:text-navy-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-gold-600 uppercase">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-600" />
                <span>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-gold-600" />
                <a href={`mailto:${site.email}`} className="hover:text-navy-950">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold-600" />
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-navy-950">
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-950/10 pt-8 text-xs text-navy-600 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Management Consultants — Africa · Middle East · Asia</p>
        </div>
      </Container>
    </footer>
  );
}
