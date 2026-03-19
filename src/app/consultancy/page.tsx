import ConsultancyHero from "@/components/organisms/ConsultancyHero";
import WhatYouGet from "@/components/organisms/WhatYouGet";
import WhoItsFor from "@/components/organisms/WhoItsFor";
import HowItWorks from "@/components/organisms/HowItWorks";
import ConsultancyApplySection from "@/components/organisms/ConsultancyApplySection";
import ConsultancyFAQSection from "@/components/organisms/ConsultancyFAQSection";

export const metadata = {
  title: "Free Business Consultancy | TEE Foundation",
  description:
    "Apply for a free one-on-one business consultancy session with TEE Foundation. 5 slots available every month for African entrepreneurs and women-led businesses."
};

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
