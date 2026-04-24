import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import CommunityHero from "@/components/organisms/CommunityHero";
import CommunityGallery from "@/components/organisms/CommunityGallery";
import { getAllGalleryImages } from "@/lib/cms";
import CommunityPhilosophy from "@/components/organisms/CommunityPhilosophy";
import HowWeThrive from "@/components/organisms/HowWeThrive";
import CommunityCTA from "@/components/organisms/CommunityCTA";
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

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://tabiproject.com/community",
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

export default function CommunityPage() {
  const cmsGalleryData = getAllGalleryImages();

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
