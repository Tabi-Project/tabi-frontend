import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import HeroSection from "@/components/organisms/HeroSection";
import Partners from "@/components/organisms/Partners";
import WhatWeDo from "@/components/organisms/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Partners />
      <WhatWeDo />
      <FeaturedProjects />
    </>
  );
}