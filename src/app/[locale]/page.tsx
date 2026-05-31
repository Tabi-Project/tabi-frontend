import { getTranslations } from "next-intl/server";
import AIBusinessTeaser from "@/components/organisms/home/Aibusinessteaser";
import ConsultancyTeaser from "@/components/organisms/consultancy/ConsultancyTeaser";
import FeaturedProjectsServer from "@/components/organisms/home/FeaturedProjectsServer";
import GetInvolved from "@/components/organisms/shared/GetInvolved";
import HeroSection from "@/components/organisms/home/HeroSection";
import InsightsStories from "@/components/organisms/resources/InsightsStories";
import Partners from "@/components/organisms/home/Partners";
import WhatWeDo from "@/components/organisms/home/WhatWeDo";
import type { Metadata } from "next";
import TestimonialSectionServer from "@/components/organisms/home/TestimonialSectionServer";

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

  const baseUrl = "https://tabiproject.com";

  // JSON-LD Organization schema for AEO / structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tabi Empowerment & Educational Foundation",
    alternateName: "Tabi Academy",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/company/tabi-academy/",
      "https://x.com/tabi_academy",
      "https://www.instagram.com/tabi_academy"
    ],
    description: t("description")
  };

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: baseUrl
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: baseUrl,
      images: [
        { url: "/og-image.jpeg", width: 1200, height: 630, type: "image/jpeg" }
      ]
    },
    // Inject JSON-LD script via the metadata API
    other: {
      "application/ld+json": JSON.stringify(jsonLd)
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
      <TestimonialSectionServer locale={locale} />
      <GetInvolved />
      <ConsultancyTeaser />
      <InsightsStories locale={locale} />
    </>
  );
}
