import AIBusinessTeaser from "@/components/organisms/Aibusinessteaser";
import ConsultancyTeaser from "@/components/organisms/ConsultancyTeaser";
import FeaturedProjectsServer from "@/components/organisms/FeaturedProjectsServer";
// import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import GetInvolved from "@/components/organisms/GetInvolved";
import HeroSection from "@/components/organisms/HeroSection";
import InsightsStories from "@/components/organisms/InsightsStories";
import Partners from "@/components/organisms/Partners";
import WhatWeDo from "@/components/organisms/WhatWeDo";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "TEE Foundation empowers African women through free technology education, AI training, mentorship, and community programs. Join the movement transforming lives across Africa.",
  alternates: {
    canonical: "https://tabiproject.com"
  },
  openGraph: {
    title: "TEE Foundation | Empowering Futures, Transforming Communities",
    description:
      "Free technology education, AI training and mentorship for women across Africa. Join TEE Foundation today.",
    url: "https://tabiproject.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }]
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
      {/* <FeaturedProjects />  */}
      <GetInvolved />
      <ConsultancyTeaser />
      <InsightsStories />
    </>
  );
}
