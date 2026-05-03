import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AboutHero from "@/components/organisms/about/AboutHero";
import GetInvolved from "@/components/organisms/shared/GetInvolved";
import OurPhilosophy from "@/components/organisms/about/Ourphilosophy";
import TheTeam from "@/components/organisms/about/TheTeam";

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

  const baseUrl = "https://tabiproject.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tabi Empowerment & Educational Foundation",
    alternateName: "Tabi Academy",
    url: `${baseUrl}/about`,
    sameAs: [
      "https://www.linkedin.com/company/tabi-academy/",
      "https://x.com/tabi_academy",
      "https://www.instagram.com/tabi_academy"
    ],
    description: t("description")
  };

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `${baseUrl}/about` },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `${baseUrl}/about`,
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
      "application/ld+json": JSON.stringify(jsonLd)
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
