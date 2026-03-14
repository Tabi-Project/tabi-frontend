"use client";

import { useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/constants/paths";

function MissionVisual() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ minHeight: "100%" }}
    >
      <Image
        src={withBasePath("/about/mission-blocks.png")}
        alt="Mission visual"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

function VisionVisual() {
  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ minHeight: "100%" }}
    >
      <Image
        src={withBasePath("/about/vision-blob.png")}
        alt="Vision visual"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

const TABS = [
  {
    id: "mission",
    label: "Mission",
    activeBg: "#E3D4E2",
    activeText: "#71286F",
    activeDot: "#71286F",
    inactiveBg: "white",
    inactiveText: "#121212",
    inactiveDot: "#B893B7",
    heading: "Championing Tech Empowerment",
    body: "At the Tabi Empowerment and Educational Foundation (TEEF), we are dedicated to bridging the gender gap in technology through exceptional tech education, pioneering research and development, and the promotion of open-source projects. Our mission is to empower African women with the skills and opportunities needed to thrive in the tech industry, fostering an inclusive and innovative ecosystem. Through our unwavering commitment, we aim to uplift individuals, transform communities, and inspire a future where women lead and excel in technology and innovation.",
    cardBg: "#E8D8E8"
  },
  {
    id: "vision",
    label: "Vision",
    activeBg: "#D6A884",
    activeText: "white",
    activeDot: "white",
    inactiveBg: "white",
    inactiveText: "#121212",
    inactiveDot: "#D6A884",
    heading: "Our Vision for Tomorrow",
    body: "At the Tabi Empowerment and Educational Foundation (TEEF), our vision is to create a world where African women are at the forefront of technological innovation, leading advancements and making significant contributions to the global tech landscape. We aspire to cultivate an environment where education and opportunity are accessible to all, fostering a diverse and inclusive tech community. By empowering individuals with the tools and knowledge to excel, we aim to drive sustainable development, inspire change, and shape a future where the potential of every woman is fully realized and celebrated.",
    cardBg: "#EDD9C4"
  }
];

export default function OurPhilosophy() {
  const [active, setActive] = useState<"mission" | "vision">("mission");
  const tab = TABS.find((t) => t.id === active)!;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-center text-[#121212] tracking-tight mb-10">
          Our Philosophy
        </h2>

        <div className="flex justify-center gap-3 mb-10">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id as "mission" | "vision")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? t.activeBg : t.inactiveBg,
                  border: "1px solid #E1E3EA",
                  color: isActive ? t.activeText : t.inactiveText
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300"
                  style={{ background: isActive ? t.activeDot : t.inactiveDot }}
                />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          className="w-full rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-105"
          style={{ background: tab.cardBg }}
        >
          <div className="relative min-h-75 lg:min-h-0 overflow-hidden">
            {tab.id === "mission" ? <MissionVisual /> : <VisionVisual />}
          </div>

          <div className="flex flex-col justify-center px-10 py-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121212] mb-6 leading-tight">
              {tab.heading}
            </h3>
            <p className="text-sm sm:text-base text-[#121212] leading-relaxed">
              {tab.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
