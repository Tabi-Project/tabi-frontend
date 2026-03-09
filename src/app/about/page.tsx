import AboutHero from "@/components/organisms/AboutHero";
import GetInvolved from "@/components/organisms/GetInvolved";
import OurPhilosophy from "@/components/organisms/Ourphilosophy";
import TheTeam from "@/components/organisms/TheTeam";

export const metadata = {
  title: "About Us | TEE Foundation",
  description:
    "We are a non-profit organization training 5000 African women in tech — bridging the gap through education, research, and open-source.",
};

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