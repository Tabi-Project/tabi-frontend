import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import BootcampHero from "@/components/organisms/bootcamp/BootcampHero";
import BootcampWhy from "@/components/organisms/bootcamp/BootcampWhy";
import BoringStack from "@/components/organisms/bootcamp/BoringStack";
import CurriculumTimeline from "@/components/organisms/bootcamp/CurriculumTimeline";
import Outcomes from "@/components/organisms/bootcamp/Outcomes";
import AdmissionGated from "@/components/organisms/bootcamp/AdmissionGated";
import PartnerBanner from "@/components/organisms/bootcamp/PartnerBanner";
import BootcampCTA from "@/components/organisms/bootcamp/BootcampCTA";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Bootcamp.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/javascript-bootcamp",
      images: [{ url: "/og-image.jpeg", width: 1200, height: 630 }]
    }
  };
}

export default function JSBootcampPage() {
  return (
    <div className="bg-white overflow-hidden">
      <BootcampHero />
      <BootcampWhy />
      <BoringStack />
      <CurriculumTimeline />
      <Outcomes />
      <AdmissionGated />
      <PartnerBanner />
      <BootcampCTA />
    </div>
  );
}
