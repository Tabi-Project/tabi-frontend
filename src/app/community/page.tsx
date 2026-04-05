import { Metadata } from "next";
import { communityMetadata } from "@/seo/page-metadata";
import CommunityHero from "@/components/organisms/CommunityHero";
import CommunityGallery from "@/components/organisms/CommunityGallery";
import { getAllGalleryImages } from "@/lib/cms";
import CommunityPhilosophy from "@/components/organisms/CommunityPhilosophy";
import HowWeThrive from "@/components/organisms/HowWeThrive";
import CommunityCTA from "@/components/organisms/CommunityCTA";
// import CommunityStats from "@/components/organisms/CommunityStats";
// import CommunityStats from "@/components/organisms/CommunityStats";

export const metadata: Metadata = communityMetadata;

export default function CommunityPage() {
  const cmsGalleryData = getAllGalleryImages();

  // Map the Decap CMS data to match the UI component's interface
  const formattedImages = cmsGalleryData.map((img) => ({
    id: img.slug,
    category: img.category,
    src: img.src,
    alt: img.alt,
    caption: img.caption
  }));

  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary selection:text-white">
      <CommunityHero />
      <CommunityGallery cmsImages={formattedImages} />
      {/* ── FUTURE SECTIONS WILL GO HERE ── */}
      <CommunityPhilosophy />
      <HowWeThrive />
      {/* <CommunityStats /> */}
      <CommunityCTA />
    </main>
  );
}
