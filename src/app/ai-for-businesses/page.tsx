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
import AIBusinessPageFooter from "@/components/organisms/Aibusinesspagefooter";

export const metadata = {
  title: "AI for Businesses | Tabi Academy",
  description:
    "A hands-on, live 2-week training programme equipping women in business with real AI skills. No technical background required."
};

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
      <AIBusinessCertification />
      <AIBusinessFAQ />
      <AIBusinessCTA />
      <AIBusinessPageFooter />
      {/* More sections added here as we build them */}
    </>
  );
}
