import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/cms";
import CaseStudyBody from "@/components/organisms/resources/CaseStudyBody";

const BASE_URL = "https://tabiproject.com";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getCaseStudyBySlug(slug, locale);
  if (!study) return { title: "Case Study Not Found" };

  const url = `${BASE_URL}/resources/case-studies/${study.slug}`;

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.excerpt,
    author: study.author
      ? {
          "@type": "Person",
          name: study.author,
          jobTitle: study.authorRole || undefined
        }
      : undefined,
    datePublished: study.date,
    publisher: {
      "@type": "Organization",
      name: "Tabi Empowerment & Educational Foundation",
      sameAs: [
        "https://www.linkedin.com/company/tabi-academy/",
        "https://x.com/tabi_academy",
        "https://www.instagram.com/tabi_academy"
      ]
    },
    image: study.coverImage || undefined,
    url,
    inLanguage: locale === "fr" ? "fr-FR" : "en-NG"
  };

  // Remove undefined fields
  const cleanSchema = JSON.parse(JSON.stringify(articleSchema));

  return {
    title: `${study.title} | Case Studies`,
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      url,
      images: study.coverImage
        ? [{ url: study.coverImage, width: 1200, height: 630 }]
        : []
    },
    other: {
      "application/ld+json": JSON.stringify(cleanSchema)
    }
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Resources.CaseStudyDetail"
  });

  const study = getCaseStudyBySlug(slug, locale);
  if (!study) notFound();

  return (
    <main
      className="w-full bg-white min-h-screen"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-12">
        <nav className="flex items-center gap-2 text-sm text-[#878787] mb-10">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            {t("breadcrumb.home")}
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <Link
            href="/resources"
            className="hover:text-brand-primary transition-colors"
          >
            {t("breadcrumb.resources")}
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <Link
            href="/resources/case-studies"
            className="hover:text-brand-primary transition-colors"
          >
            {t("breadcrumb.caseStudies")}
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">
            {t("breadcrumb.label")}
          </span>
        </nav>

        <div className="max-w-195 mx-auto">
          <div className="flex items-center gap-3 text-xs text-[#878787] mb-8 pb-4 border-b border-[#E5E7EB]">
            <span className="font-bold text-brand-primary">
              {t("runningHeader.academy")}
            </span>
            <span>|</span>
            <span>{study.programme}</span>
            <span>|</span>
            <span>{t("runningHeader.caseStudy")}</span>
          </div>

          <div className="flex gap-2 mb-5">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">
              {t("runningHeader.academy")}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#aaa]">
              |
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#aaa]">
              {t("runningHeader.caseStudy")}
            </span>
          </div>

          {study.coverImage && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
              <Image
                src={study.coverImage}
                alt={study.title}
                fill
                priority
                quality={85}
                sizes="(max-width: 640px) 100vw, 780px"
                className="object-cover"
              />
            </div>
          )}

          <h1
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-[#1a1a2e] leading-[1.2] mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {study.title}
          </h1>

          <div className="text-sm text-[#555] mb-1">
            {study.author && <span>By {study.author}</span>}
            {study.authorRole && (
              <span className="text-[#aaa]"> | {study.authorRole}</span>
            )}
          </div>
          <div className="text-sm text-[#555] mb-8">
            {study.date}
            {study.programme && (
              <span className="text-[#aaa]"> | {study.programme}</span>
            )}
          </div>

          <hr className="border-brand-primary mb-10" />

          {study.stats && study.stats.length > 0 && (
            <div
              className="rounded-xl mb-10 px-6 py-5 grid gap-y-3"
              style={{
                background: "#F3E8FF",
                gridTemplateColumns: `repeat(${Math.min(study.stats.length, 5)}, 1fr)`
              }}
            >
              {study.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <span className="text-3xl font-extrabold leading-none text-brand-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-brand-primary font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {study.tags && study.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#F3E8FF", color: "#71286F" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <CaseStudyBody body={study.body ?? ""} />

          <div className="mt-16 pt-8 border-t border-[#E5E7EB] text-center">
            <p className="text-sm italic font-bold text-brand-primary mb-1">
              {t("footer.tagline")}
            </p>
            <p className="text-xs text-[#aaa]">{t("footer.credit")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
