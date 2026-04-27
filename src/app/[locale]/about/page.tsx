import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AboutHero from "@/components/organisms/AboutHero";
import GetInvolved from "@/components/organisms/GetInvolved";
import OurPhilosophy from "@/components/organisms/Ourphilosophy";
import TheTeam from "@/components/organisms/TheTeam";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "About.metadata"
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "https://tabiproject.com/about" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/about",
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

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <AboutHero />
      <OurPhilosophy />
      <GetInvolved />
      <TheTeam locale={locale} />
    </>
  );
}
