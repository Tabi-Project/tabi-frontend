// src/app/[locale]/ai-for-businesses/page.tsx
import AIBusinessHero from "@/components/organisms/ai-business/Aibusinesshero";
import AIBusinessStats from "@/components/organisms/ai-business/AIBusinessStats";
import AIBusinessOutcomes from "@/components/organisms/ai-business/Aibusinessoutcomes";
import AIBusinessTimeline from "@/components/organisms/ai-business/Aibusinesstimeline";
import AIBusinessCurriculum from "@/components/organisms/ai-business/Aibusinesscurriculum";
import AIBusinessInclusions from "@/components/organisms/ai-business/Aibusinessinclusions";
import AIBusinessAudience from "@/components/organisms/ai-business/Aibusinessaudience";
import AIBusinessCertification from "@/components/organisms/ai-business/Aibusinesscertification";
import AIBusinessFAQ from "@/components/organisms/ai-business/Aibusinessfaq";
import AIBusinessCTA from "@/components/organisms/ai-business/Aibusinesscta";
import AIBusinessPricing from "@/components/organisms/ai-business/Aibusinesspricing";
import { SLAWebinarSection } from "@/components/organisms/ai-business/SLAWebinarSection";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Fetch translations for both metadata and FAQ namespace
  const tMeta = await getTranslations({
    locale,
    namespace: "AIBusiness.metadata"
  });
  const tFaq = await getTranslations({ locale, namespace: "AIBusiness.faq" });
  const faqItems = tFaq.raw("items") as Array<{
    q: string;
    a: string;
    tag: string;
  }>;

  const baseUrl = "https://tabiproject.com/ai-for-businesses";

  // Course structured data
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
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
    courseMode: "online",
    educationalCredentialAwarded: "Certificate of Completion",
    inLanguage: locale === "fr" ? "fr-FR" : "en-NG",
    offers: {
      "@type": "Offer",
      category: "Free"
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      instructor: {
        "@type": "Person",
        name: "Sophia Ahuoyiza",
        jobTitle: "Software Engineer & Product Manager"
      }
    }
  };

  // FAQPage structured data (automatically builds from the same keys the component uses)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a
      }
    }))
  };

  // Combine both schemas into a single JSON-LD array
  const jsonLd = JSON.stringify([courseSchema, faqSchema]);

  return {
    title: tMeta("title"),
    description: tMeta("description"),
    openGraph: {
      title: tMeta("ogTitle"),
      description: tMeta("ogDescription"),
      url: baseUrl,
      images: [{ url: "/og-image.jpeg", width: 1200, height: 630 }]
    },
    other: {
      "application/ld+json": jsonLd
    }
  };
}

export default function AIForBusinessesPage() {
  return (
    <>
      <AIBusinessHero />
      <Suspense fallback={<div />}>
        <SLAWebinarSection />
      </Suspense>
      <AIBusinessStats />
      <AIBusinessOutcomes />
      <AIBusinessTimeline />
      <AIBusinessCurriculum />
      <AIBusinessInclusions />
      <AIBusinessAudience />
      <AIBusinessPricing />
      <AIBusinessCertification />
      <AIBusinessFAQ />
      <AIBusinessCTA />
    </>
  );
}
