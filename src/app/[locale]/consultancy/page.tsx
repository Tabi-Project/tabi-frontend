import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ConsultancyHero from "@/components/organisms/consultancy/ConsultancyHero";
import WhatYouGet from "@/components/organisms/consultancy/WhatYouGet";
import WhoItsFor from "@/components/organisms/consultancy/WhoItsFor";
import HowItWorks from "@/components/organisms/consultancy/HowItWorks";
import ConsultancyApplySection from "@/components/organisms/consultancy/ConsultancyApplySection";
import ConsultancyFAQSection from "@/components/organisms/consultancy/ConsultancyFAQSection";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tMeta = await getTranslations({
    locale,
    namespace: "Consultancy.metadata"
  });
  const tFAQ = await getTranslations({
    locale,
    namespace: "Consultancy.FAQSection"
  });
  const faqItems = tFAQ.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  const baseUrl = "https://tabiproject.com/consultancy";

  // Service schema – describes the free consultancy offering
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tMeta("title"),
    description: tMeta("description"),
    provider: {
      "@type": "Organization",
      name: "Tabi Empowerment & Educational Foundation",
      sameAs: [
        "https://www.linkedin.com/company/tabi-academy/",
        "https://x.com/tabi_academy",
        "https://www.instagram.com/tabi_academy"
      ]
    },
    audience: {
      "@type": "Audience",
      audienceType: "Women-led businesses in Africa"
    },
    areaServed: {
      "@type": "Continent",
      name: "Africa"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN"
    }
  };

  // FAQPage schema – same as before
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const jsonLd = JSON.stringify([serviceSchema, faqSchema]);

  return {
    title: tMeta("title"),
    description: tMeta("description"),
    keywords: [
      "free business consultancy Nigeria",
      "women in business Africa",
      "Tabi Academy support",
      "TEE Foundation business advice"
    ],
    alternates: { canonical: baseUrl },
    openGraph: {
      title: tMeta("ogTitle"),
      description: tMeta("ogDescription"),
      url: baseUrl,
      images: [
        {
          url: "/og-image.jpeg",
          width: 1200,
          height: 630,
          type: "image/jpeg"
        }
      ]
    },
    other: {
      "application/ld+json": jsonLd
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
