import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CommunityHero from "@/components/organisms/community/CommunityHero";
import CommunityGallery from "@/components/organisms/community/CommunityGallery";
import { getAllGalleryImages } from "@/lib/cms";
import CommunityPhilosophy from "@/components/organisms/community/CommunityPhilosophy";
import HowWeThrive from "@/components/organisms/community/HowWeThrive";
import CommunityCTA from "@/components/organisms/community/CommunityCTA";
import ScrollToGallery from "./ScrollToGallery";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Community.metadata"
  });

  const baseUrl = "https://tabiproject.com/community";

  // Community Organization structured data
  const communitySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tabi Academy Community",
    alternateName: "Tabi Sisterhood",
    url: baseUrl,
    description: t("description"),
    parentOrganization: {
      "@type": "Organization",
      name: "Tabi Empowerment & Educational Foundation",
      sameAs: [
        "https://www.linkedin.com/company/tabi-academy/",
        "https://x.com/tabi_academy",
        "https://www.instagram.com/tabi_academy"
      ]
    },
    sameAs: [
      "https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo",
      "https://www.linkedin.com/company/tabi-academy/"
    ]
  };

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
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
      "application/ld+json": JSON.stringify(communitySchema)
    }
  };
}

export default async function CommunityPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cmsGalleryData = getAllGalleryImages(locale);

  const formattedImages = cmsGalleryData.map((img) => ({
    id: img.slug,
    category: img.category,
    src: img.src,
    alt: img.alt,
    caption: img.caption
  }));

  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <ScrollToGallery />
      <CommunityHero />
      <div id="community-gallery" className="scroll-mt-24">
        <CommunityGallery cmsImages={formattedImages} />
      </div>
      <CommunityPhilosophy />
      <HowWeThrive />
      <CommunityCTA />
    </main>
  );
}
