import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import OpenSourceHero from "@/components/organisms/open-source/OpenSourceHero";
import OpenSourceList from "@/components/organisms/open-source/OpenSourceList";
import OpemSourceImpact from "@/components/organisms/open-source/OpemSourceImpact";
import OpenSourceCTA from "@/components/organisms/open-source/OpenSourceCTA";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "OpenSource.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [{ url: "/projects/hero-composite.png" }]
    }
  };
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <OpenSourceHero />
      <OpenSourceList />
      <OpemSourceImpact />
      <OpenSourceCTA />
    </main>
  );
}
