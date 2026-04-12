import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Case Studies | TEE Foundation",
  description:
    "Research, reports and case studies from TEE Foundation's programmes — transparent accounts of what happened, what we learned, and what we are building next."
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main
      className="w-full bg-white"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#878787] mb-8">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <Link
            href="/resources"
            className="hover:text-brand-primary transition-colors"
          >
            Resources
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">Case Studies</span>
        </nav>

        {/* Header */}
        <header className="mb-14 max-w-2xl">
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
            style={{ background: "#F3E8FF" }}
          >
            Research & Reports
          </span>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-[#1a1a2e] tracking-tight leading-[1.1] mb-4">
            Case Studies
          </h1>
          <p className="text-base text-[#555] leading-relaxed">
            Transparent accounts of our programmes — what happened, what we
            learned, and what we are building next. No spin. Just the truth.
          </p>
        </header>

        {/* Case studies list */}
        {caseStudies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-[#E5E7EB] rounded-2xl">
            <div className="w-14 h-14 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-4">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M6 4h12l6 6v16H6V4z"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4v6h6M10 14h8M10 18h6"
                  stroke="#71286F"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-semibold text-[#1a1a2e] mb-1">
              No case studies yet
            </p>
            <p className="text-xs text-[#888]">
              Check back soon — research is being documented.
            </p>
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-[#F0E8F5]">
            {caseStudies.map((study, i) => (
              <Link
                key={study.slug}
                href={`/resources/case-studies/${study.slug}`}
                className="group flex flex-col sm:flex-row gap-6 sm:gap-10 py-10 hover:bg-[#FDFAFF] transition-colors rounded-xl px-4 -mx-4"
              >
                {/* Cover image */}
                {study.coverImage && (
                  <div className="relative w-full sm:w-52 h-36 shrink-0 rounded-xl overflow-hidden bg-[#F3E8FF]">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 208px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                )}

                <div className="flex flex-col justify-center flex-1 min-w-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {study.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: "#F3E8FF", color: "#71286F" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-[#1a1a2e] leading-snug mb-2 group-hover:text-brand-primary transition-colors">
                    {study.title}
                  </h2>

                  <p className="text-sm text-[#666] leading-relaxed mb-3 line-clamp-2">
                    {study.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-[#999]">
                    {study.author && (
                      <span className="font-medium text-[#555]">
                        {study.author}
                      </span>
                    )}
                    {study.author && <span>·</span>}
                    <span>{study.date}</span>
                    {study.programme && (
                      <>
                        <span>·</span>
                        <span>{study.programme}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden sm:flex items-center shrink-0">
                  <span className="w-9 h-9 rounded-full border border-[#ede8f5] flex items-center justify-center text-[#aaa] group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
