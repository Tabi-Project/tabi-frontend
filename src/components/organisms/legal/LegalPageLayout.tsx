import Link from "next/link";
import { LegalSection } from "@/types/legal";
import LegalTOC from "@/components/molecules/LegalTOC";
import LegalSectionBlock from "@/components/organisms/legal/LegalSectionBlock";

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
    <main className="w-full bg-white min-h-screen">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-14 lg:py-20">
        <p className="text-sm text-[#666] mb-10">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            {breadcrumbHomeLabel}
          </Link>
          <span className="mx-2 text-[#ccc]">&gt;&gt;</span>
          <Link
            href={breadcrumbHref}
            className="text-brand-primary font-medium"
          >
            {breadcrumbLabel}
          </Link>
        </p>

        <div className="flex flex-col lg:flex-row gap-16">
          <LegalTOC sections={sections} />

          <div className="flex-1 min-w-0">
            <div className="mb-12 pb-8 border-b border-gray-100">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">
                {label}
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#121212] leading-snug mb-3">
                {title}
              </h1>
              <p className="text-sm text-[#888]">
                Effective Date: {effectiveDate}&nbsp;&nbsp;|&nbsp;&nbsp;Last
                Updated: {lastUpdated}
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section) => (
                <LegalSectionBlock key={section.number} section={section} />
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-sm text-[#aaa] italic">{footerNote}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
