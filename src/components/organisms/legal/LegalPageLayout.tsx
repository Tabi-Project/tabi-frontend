import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { LegalSection } from "@/types/legal";
import LegalTOC from "@/components/molecules/LegalTOC";
import LegalSectionBlock from "@/components/organisms/legal/LegalSectionBlock";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";

interface LegalPageLayoutProps {
  label: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  footerNote: string;
  sections: LegalSection[];
  breadcrumbHref: string;
  breadcrumbLabel: string;
  breadcrumbHomeLabel: string;
}

export default function LegalPageLayout({
  label,
  title,
  effectiveDate,
  lastUpdated,
  footerNote,
  sections,
  breadcrumbHref,
  breadcrumbLabel,
  breadcrumbHomeLabel
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-white" style={{ paddingTop: "var(--nav-height, 80px)" }}>
      <section className="relative overflow-hidden bg-tabi-blush">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand-orchid/15 blur-[90px]" />
        <div className="relative mx-auto max-w-350 px-6 py-12 sm:px-12 lg:px-20 lg:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-tabi-body">
            <Link href="/" className="transition-colors hover:text-brand-primary">
              {breadcrumbHomeLabel}
            </Link>
            <ChevronRight size={14} className="text-tabi-body/40" />
            <Link href={breadcrumbHref} className="font-medium text-brand-primary">
              {breadcrumbLabel}
            </Link>
          </nav>
          <Reveal y={12}>
            <Eyebrow tone="white">{label}</Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-[1.12] text-tabi-ink">{title}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white px-4 py-1.5 text-tabi-body">
                Effective: <span className="font-medium text-tabi-ink">{effectiveDate}</span>
              </span>
              <span className="rounded-full bg-white px-4 py-1.5 text-tabi-body">
                Last updated: <span className="font-medium text-tabi-ink">{lastUpdated}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-350 px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-16 lg:flex-row">
          <LegalTOC sections={sections} />

          <div className="min-w-0 max-w-3xl flex-1">
            <div className="space-y-14">
              {sections.map((section) => (
                <LegalSectionBlock key={section.number} section={section} />
              ))}
            </div>

            <div className="mt-16 rounded-[1.5rem] bg-tabi-card/70 px-6 py-5">
              <p className="text-sm text-tabi-body">{footerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
