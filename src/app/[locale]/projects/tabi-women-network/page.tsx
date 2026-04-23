// app/tabi-women-network/page.tsx
"use client";

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

export default function TabiWomenNetworkPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
      <TWNHero />{" "}
      {/* Hero often stays without wrapper, or you can add fade inside the component */}
      <FadeInSection>
        <TWNNextEdition />
      </FadeInSection>
      <FadeInSection>
        <TWNManifestoMission />
      </FadeInSection>
      <FadeInSection>
        <TWNWhatItIsNot />
      </FadeInSection>
      <FadeInSection>
        <TWNDirectory />
      </FadeInSection>
      <FadeInSection>
        <TWNGallery />
      </FadeInSection>
      <FadeInSection>
        <TWNImpactSummary />
      </FadeInSection>
      <FadeInSection>
        <TWNPastEditions />
      </FadeInSection>
      <FadeInSection>
        <TWNCityRequest />
      </FadeInSection>
      <FadeInSection>
        <TWNManifestoQuote />
      </FadeInSection>
      <FadeInSection>
        <TWNValuePillars />
      </FadeInSection>
      <FadeInSection>
        <TWNFaq />
      </FadeInSection>
      <FadeInSection>
        <TWNTestimonial />
      </FadeInSection>
    </div>
  );
}
