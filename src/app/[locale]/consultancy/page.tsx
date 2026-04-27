import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ConsultancyHero from "@/components/organisms/ConsultancyHero";
import WhatYouGet from "@/components/organisms/WhatYouGet";
import WhoItsFor from "@/components/organisms/WhoItsFor";
import HowItWorks from "@/components/organisms/HowItWorks";
import ConsultancyApplySection from "@/components/organisms/ConsultancyApplySection";
import ConsultancyFAQSection from "@/components/organisms/ConsultancyFAQSection";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Consultancy.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "free business consultancy Nigeria",
      "women in business Africa",
      "Tabi Academy support",
      "TEE Foundation business advice"
    ],
    alternates: { canonical: "https://tabiproject.com/consultancy" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/consultancy",
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          type: "image/jpeg"
        }
      ]
    }
  };
}

export default function ConsultancyPage() {
  return (
    <main className="w-full bg-white">
      <ConsultancyHero />
      <WhatYouGet />
      <WhoItsFor />
      <HowItWorks />
      <ConsultancyApplySection />
      <ConsultancyFAQSection />
    </main>
  );
}
