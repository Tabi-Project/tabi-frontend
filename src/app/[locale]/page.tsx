import { getTranslations } from "next-intl/server";
import AIBusinessTeaser from "@/components/organisms/Aibusinessteaser";
import ConsultancyTeaser from "@/components/organisms/ConsultancyTeaser";
import FeaturedProjectsServer from "@/components/organisms/FeaturedProjectsServer";
import GetInvolved from "@/components/organisms/GetInvolved";
import HeroSection from "@/components/organisms/HeroSection";
import InsightsStories from "@/components/organisms/InsightsStories";
import Partners from "@/components/organisms/Partners";
import WhatWeDo from "@/components/organisms/WhatWeDo";
import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "HomePage.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "https://tabiproject.com"
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com",
      images: [
        { url: "/og-image.jpeg", width: 1200, height: 630, type: "image/jpeg" }
      ]
    }
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HeroSection />
      <Partners />
      <AIBusinessTeaser />
      <WhatWeDo />
      <FeaturedProjectsServer locale={locale} />
      <GetInvolved />
      <ConsultancyTeaser />
      <InsightsStories />
    </>
  );
}
