import AIBusinessTeaser from "@/components/organisms/Aibusinessteaser";
import ConsultancyTeaser from "@/components/organisms/ConsultancyTeaser";
import FeaturedProjectsServer from "@/components/organisms/FeaturedProjectsServer";
import GetInvolved from "@/components/organisms/GetInvolved";
import HeroSection from "@/components/organisms/HeroSection";
import InsightsStories from "@/components/organisms/InsightsStories";
import Partners from "@/components/organisms/Partners";
import WhatWeDo from "@/components/organisms/WhatWeDo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tabi Academy empowers African women through free technology education, AI training, and mentorship. A TEE Foundation initiative transforming lives across Africa.",
  alternates: {
    canonical: "https://tabiproject.com"
  },
  openGraph: {
    title: "Tabi Academy | Empowering Futures, Transforming Communities",
    description:
      "Free technology education, AI training and mentorship for women across Africa. Join Tabi Academy by TEE Foundation today.",
    url: "https://tabiproject.com",
    images: [
      { url: "/og-image.jpeg", width: 1200, height: 630, type: "image/jpeg" }
    ]
  }
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <AIBusinessTeaser />
      <WhatWeDo />
      <FeaturedProjectsServer />
      <GetInvolved />
      <ConsultancyTeaser />
      <InsightsStories />
    </>
  );
}
