// import AIBusinessHero from "@/components/organisms/Aibusinesshero";
// import AIBusinessStats from "@/components/organisms/AIBusinessStats";
// import AIBusinessOutcomes from "@/components/organisms/Aibusinessoutcomes";
// import AIBusinessTimeline from "@/components/organisms/Aibusinesstimeline";
// import AIBusinessCurriculum from "@/components/organisms/Aibusinesscurriculum";
// import AIBusinessInclusions from "@/components/organisms/Aibusinessinclusions";
// import AIBusinessAudience from "@/components/organisms/Aibusinessaudience";
// import AIBusinessCertification from "@/components/organisms/Aibusinesscertification";
// import AIBusinessFAQ from "@/components/organisms/Aibusinessfaq";
// import AIBusinessCTA from "@/components/organisms/Aibusinesscta";
// import { aiForBusinessMetadata } from "@/seo/page-metadata";
// import AIBusinessPricing from "@/components/organisms/Aibusinesspricing";

// export const metadata = aiForBusinessMetadata;

// export default function AIForBusinessesPage() {
//   return (
//     <>
//       <AIBusinessHero />
//       <AIBusinessStats />
//       <AIBusinessOutcomes />
//       <AIBusinessTimeline />
//       <AIBusinessCurriculum />
//       <AIBusinessInclusions />
//       <AIBusinessAudience />
//       <AIBusinessPricing />
//       <AIBusinessCertification />
//       <AIBusinessFAQ />
//       <AIBusinessCTA />
//     </>
//   );
// }


import AIBusinessHero from "@/components/organisms/Aibusinesshero";
import AIBusinessStats from "@/components/organisms/AIBusinessStats";
import AIBusinessOutcomes from "@/components/organisms/Aibusinessoutcomes";
import AIBusinessTimeline from "@/components/organisms/Aibusinesstimeline";
import AIBusinessCurriculum from "@/components/organisms/Aibusinesscurriculum";
import AIBusinessInclusions from "@/components/organisms/Aibusinessinclusions";
import AIBusinessAudience from "@/components/organisms/Aibusinessaudience";
import AIBusinessCertification from "@/components/organisms/Aibusinesscertification";
import AIBusinessFAQ from "@/components/organisms/Aibusinessfaq";
import AIBusinessCTA from "@/components/organisms/Aibusinesscta";
// import { aiForBusinessMetadata } from "@/seo/page-metadata";
import AIBusinessPricing from "@/components/organisms/Aibusinesspricing";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AIBusiness.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/ai-for-businesses",
      images: [{ url: "/og-image.jpeg", width: 1200, height: 630 }]
    }
  };
}


export default function AIForBusinessesPage() {
  return (
    <>
      <AIBusinessHero />
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
