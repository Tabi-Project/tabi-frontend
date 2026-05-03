// app/tabi-women-network/page.tsx
import { TWNHero } from "@/components/organisms/twn/TWNHero";
import { TWNDirectory } from "@/components/organisms/twn/TWNDirectory";
import TWNNextEdition from "@/components/organisms/twn/TWNNextEdition";
import TWNManifestoMission from "@/components/organisms/twn/TWNManifestoMission";
import TWNWhatItIsNot from "@/components/organisms/twn/TWNWhatItIsNot";
import TWNGallery from "@/components/organisms/twn/TWNGallery";
import TWNImpactSummary from "@/components/organisms/twn/TWNImpactSummary";
import TWNPastEditions from "@/components/organisms/twn/TWNPastEditions";
import TWNCityRequest from "@/components/organisms/twn/TWNCityRequest";
import TWNManifestoQuote from "@/components/organisms/twn/TWNManifestoQuote";
import TWNValuePillars from "@/components/organisms/twn/TWNValuePillars";
import TWNFaq from "@/components/organisms/twn/TWNFaq";
import TWNTestimonial from "@/components/organisms/twn/TWNTestimonial";
import FadeInSection from "@/components/atoms/FadeInSection";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tMeta = await getTranslations({
    locale,
    namespace: "TWN.metadata"
  });
  const tFAQ = await getTranslations({
    locale,
    namespace: "TWN.faq"
  });
  const faqItems = tFAQ.raw("items") as Array<{ q: string; a: string }>;

  const baseUrl = "https://tabiproject.com/projects/tabi-women-network";

  // Organization schema for the Tabi Women Network
  const networkSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tabi Women Network",
    alternateName: "TWN",
    url: baseUrl,
    description: tMeta("description"),
    parentOrganization: {
      "@type": "Organization",
      name: "Tabi Empowerment & Educational Foundation",
      sameAs: [
        "https://www.linkedin.com/company/tabi-academy/",
        "https://x.com/tabi_academy",
        "https://www.instagram.com/tabi_academy"
      ]
    },
    sameAs: ["mailto:sophia@tabiproject.com"]
  };

  // FAQPage schema built directly from the same translation keys as the component
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a
      }
    }))
  };

  const jsonLd = JSON.stringify([networkSchema, faqSchema]);

  return {
    title: tMeta("title"),
    description: tMeta("description"),
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

export default function TabiWomenNetworkPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
      {/* 1. HERO - The First Impression */}
      <TWNHero />

      {/* 2. THE NOW - Immediate opportunity for Cotonou */}
      <FadeInSection>
        <TWNNextEdition />
      </FadeInSection>

      {/* 3. THE PHILOSOPHY - Setting the standard early */}
      <div id="philosophy">
        <FadeInSection>
          <TWNManifestoMission />
        </FadeInSection>
        <FadeInSection>
          <TWNWhatItIsNot />
        </FadeInSection>
      </div>

      {/* 4. THE VISUAL PROOF - Seeing the "Table" in action */}
      <FadeInSection>
        <TWNGallery />
      </FadeInSection>

      {/* 5. THE SUBSTANCE - Why this matters and the results */}
      <FadeInSection>
        <TWNValuePillars />
      </FadeInSection>
      <FadeInSection>
        <TWNImpactSummary />
      </FadeInSection>

      {/* 6. THE VALIDATION - Evidence from others */}
      <FadeInSection>
        <TWNTestimonial />
      </FadeInSection>
      <FadeInSection>
        <TWNPastEditions />
      </FadeInSection>

      {/* 7. THE ACCESS - Who is in the network */}
      <FadeInSection>
        <TWNDirectory />
      </FadeInSection>

      {/* 8. THE EXPANSION - Lead gen for other cities */}
      <FadeInSection>
        <TWNCityRequest />
      </FadeInSection>

      {/* 9. THE CLOSING - Logic and Emotion */}
      <FadeInSection>
        <TWNFaq />
      </FadeInSection>

      {/* The Quote acts as a beautiful 'End of Page' footer-like element */}
      <FadeInSection>
        <TWNManifestoQuote />
      </FadeInSection>
    </div>
  );
}
