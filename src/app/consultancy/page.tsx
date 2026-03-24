import ConsultancyHero from "@/components/organisms/ConsultancyHero";
import WhatYouGet from "@/components/organisms/WhatYouGet";
import WhoItsFor from "@/components/organisms/WhoItsFor";
import HowItWorks from "@/components/organisms/HowItWorks";
import ConsultancyApplySection from "@/components/organisms/ConsultancyApplySection";
import ConsultancyFAQSection from "@/components/organisms/ConsultancyFAQSection";
import { consultancyMetadata } from "@/seo/page-metadata";

export const metadata = consultancyMetadata;

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
