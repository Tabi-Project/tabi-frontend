import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/cms";
import { ArrowRight, ChevronRight, FileText } from "lucide-react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Resources.caseStudies.metadata"
  });

  const baseUrl = "https://tabiproject.com/resources/case-studies";

  // CollectionPage structured data
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t("title"),
    description: t("description"),
    url: baseUrl,
    provider: {
      "@type": "Organization",
      name: "Tabi Empowerment & Educational Foundation",
      sameAs: [
        "https://www.linkedin.com/company/tabi-academy/",
        "https://x.com/tabi_academy",
        "https://www.instagram.com/tabi_academy"
      ]
    },
    about: "Case studies and research reports from Tabi Academy programmes"
  };

  return {
    title: t("title"),
    description: t("description"),
    other: {
      "application/ld+json": JSON.stringify(collectionSchema)
    }
  };
}

export default async function CaseStudiesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Resources.caseStudies"
  });
const caseStudies = getAllCaseStudies(locale);

  return (
    <main className="w-full bg-white" style={{ paddingTop: "var(--nav-height, 80px)" }}>
      {/* Header band */}
      <section className="relative overflow-hidden bg-tabi-blush">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-brand-orchid/20 blur-[90px] animate-blob" />
        <Sparkle className="absolute right-[18%] top-16 hidden md:block" size={36} />
        <div className="relative mx-auto max-w-350 px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-sm text-tabi-body">
            <Link href="/" className="transition-colors hover:text-brand-primary">
              {t("breadcrumb.home")}
            </Link>
            <ChevronRight size={14} className="text-tabi-body/40" />
            <Link href="/resources" className="transition-colors hover:text-brand-primary">
              {t("breadcrumb.resources")}
            </Link>
            <ChevronRight size={14} className="text-tabi-body/40" />
            <span className="font-medium text-brand-primary">{t("breadcrumb.label")}</span>
          </nav>

          <header className="max-w-2xl">
            <Reveal y={12}>
              <Eyebrow tone="white" dot>
                {t("badge")}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-6 text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.015em] text-tabi-ink">
                {t("title")}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-[1.8] text-tabi-body">{t("description")}</p>
            </Reveal>
          </header>
        </div>
      </section>

      <div className="mx-auto max-w-350 px-6 py-14 sm:px-12 lg:px-20 lg:py-20">
        {caseStudies.length === 0 ? (
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-[2rem] bg-tabi-blush py-24 text-center">
              <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-primary">
                <FileText size={26} />
              </span>
              <p className="font-bold text-tabi-ink">{t("emptyTitle")}</p>
              <p className="mt-1 text-sm text-tabi-body">{t("emptyMessage")}</p>
            </div>
          </Reveal>
        ) : (
          <div className="flex flex-col gap-5">
            {caseStudies.map((study, i) => (
              <Reveal key={study.slug} delay={Math.min(i, 4) * 0.06} y={30}>
                <Link
                  href={`/resources/case-studies/${study.slug}`}
                  className="group grid gap-6 rounded-[2rem] bg-tabi-card/70 p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-tabi-blush hover:shadow-[0_24px_50px_-30px_rgba(113,40,111,0.5)] sm:grid-cols-[260px_1fr_auto] sm:items-center sm:gap-8 sm:p-5"
                >
                  <div className="relative h-48 overflow-hidden rounded-[1.5rem] border-[3px] border-brand-primary bg-tabi-lilac sm:h-40">
                    {study.coverImage && (
                      <Image
                        src={study.coverImage}
                        alt={study.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 260px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    )}
                  </div>

                  <div className="min-w-0 px-2 sm:px-0">
                    {study.tags && study.tags.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-2">
                        {study.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-tabi-pink px-3 py-1 text-xs font-medium text-brand-primary">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold leading-snug text-tabi-ink transition-colors group-hover:text-brand-primary sm:text-2xl">
                      {study.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-tabi-body sm:text-base">{study.excerpt}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-tabi-body/80">
                      {study.author && <span className="font-medium text-tabi-ink">{study.author}</span>}
                      {study.author && <span aria-hidden>·</span>}
                      <span>{study.date}</span>
                      {study.programme && (
                        <>
                          <span aria-hidden>·</span>
                          <span>{study.programme}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-white text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white sm:flex">
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
