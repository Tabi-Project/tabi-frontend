// app/tabi-women-network/page.tsx
import { TWNHero } from "@/components/organisms/TWNHero";
import { TWNDirectory } from "@/components/organisms/TWNDirectory";
import TWNNextEdition from "@/components/organisms/TWNNextEdition";
import TWNManifestoMission from "@/components/organisms/TWNManifestoMission";
import TWNWhatItIsNot from "@/components/organisms/TWNWhatItIsNot";
import TWNGallery from "@/components/organisms/TWNGallery";
import TWNImpactSummary from "@/components/organisms/TWNImpactSummary";
import TWNPastEditions from "@/components/organisms/TWNPastEditions";
import TWNCityRequest from "@/components/organisms/TWNCityRequest";
import TWNManifestoQuote from "@/components/organisms/TWNManifestoQuote";
import TWNValuePillars from "@/components/organisms/TWNValuePillars";
import TWNFaq from "@/components/organisms/TWNFaq";
import TWNTestimonial from "@/components/organisms/TWNTestimonial";
import FadeInSection from "@/components/atoms/FadeInSection";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";


export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "TWN.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/projects/tabi-women-network",
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
