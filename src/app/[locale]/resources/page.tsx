import { Suspense } from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import {
  getBlogPosts,
  getNewsPosts,
  getAllEvents,
  getFeaturedEvents
} from "@/lib/cms";
import ResourcesTabs from "@/components/organisms/Resourcestabs";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Resources.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/resources",
      images: [
        { url: "/og-image.jpeg", width: 1200, height: 630, type: "image/jpeg" }
      ]
    }
  };
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Resources" });

  const newsPosts = getNewsPosts(locale);
  const blogPosts = getBlogPosts(locale);
  const allEvents = getAllEvents(locale);
  const featuredEvents = getFeaturedEvents(locale);
  
  return (
    <main
      className="w-full bg-white"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-[#878787] mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-brand-primary transition-colors">
            {t("breadcrumb.home")}
          </Link>
          <span className="text-[#ccc] text-[10px] font-bold">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">
            {t("breadcrumb.label")}
          </span>
        </nav>

        {/* Page Header */}
        <header className="mb-12">
          <h1
            className="text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold mb-4 tracking-tight"
            style={{
              background:
                "linear-gradient(180deg, #FFCC70 0%, #C850C0 50%, #71286F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            {t("heading")}
          </h1>
          <p className="text-base text-[#444] max-w-5xl leading-relaxed">
            {t("description")}
          </p>
        </header>

        {/* Interactive Tabs */}
        <Suspense
          fallback={
            <div className="space-y-8 animate-pulse">
              <div className="h-10 w-full max-w-md bg-gray-100 rounded-lg" />
              <div className="h-100 w-full bg-gray-50 rounded-2xl" />
            </div>
          }
        >
          <ResourcesTabs
            newsPosts={newsPosts}
            blogPosts={blogPosts}
            allEvents={allEvents}
            featuredEvents={featuredEvents}
          />
        </Suspense>
      </div>
    </main>
  );
}
