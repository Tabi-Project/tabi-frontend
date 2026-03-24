import AboutHero from "@/components/organisms/AboutHero";
import GetInvolved from "@/components/organisms/GetInvolved";
import OurPhilosophy from "@/components/organisms/Ourphilosophy";
import TheTeam from "@/components/organisms/TheTeam";
import { aboutMetadata } from "@/seo/page-metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurPhilosophy />
      <GetInvolved />
      <TheTeam />

      {/* More about sections added here */}
    </>
  );
}