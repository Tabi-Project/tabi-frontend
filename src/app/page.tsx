import AIBusinessTeaser from "@/components/organisms/Aibusinessteaser";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import GetInvolved from "@/components/organisms/GetInvolved";
import HeroSection from "@/components/organisms/HeroSection";
import InsightsStories from "@/components/organisms/InsightsStories";
import Partners from "@/components/organisms/Partners";
import WhatWeDo from "@/components/organisms/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <AIBusinessTeaser />
      <WhatWeDo />
      <FeaturedProjects />
      <GetInvolved />
      <InsightsStories />
    </>
  );
}