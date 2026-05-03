"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
    activeBg: "#E3D4E2",
    activeText: "#71286F",
    activeDot: "#71286F",
    inactiveBg: "white",
    inactiveText: "#121212",
    inactiveDot: "#B893B7",
    cardBg: "#E8D8E8"
  },
  {
    id: "vision",
    activeBg: "#D6A884",
    activeText: "white",
    activeDot: "white",
    inactiveBg: "white",
    inactiveText: "#121212",
    inactiveDot: "#D6A884",
    cardBg: "#EDD9C4"
  }
];

export default function OurPhilosophy() {
  const t = useTranslations("About.philosophy");
  const [active, setActive] = useState<"mission" | "vision">("mission");
  const activeTab = TABS.find((tab) => tab.id === active)!;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-extrabold text-center text-[#121212] tracking-tight mb-10">
          {t("heading")}
        </h2>

        <div className="flex justify-center gap-3 mb-10">
          {TABS.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id as "mission" | "vision")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: isActive ? tab.activeBg : tab.inactiveBg,
                  border: "1px solid #E1E3EA",
                  color: isActive ? tab.activeText : tab.inactiveText
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300"
                  style={{
                    background: isActive ? tab.activeDot : tab.inactiveDot
                  }}
                />
                {t(`${tab.id}.label`)}
              </button>
            );
          })}
        </div>

        <div
          className="w-full rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-105"
          style={{ background: activeTab.cardBg }}
        >
          <div className="relative min-h-75 lg:min-h-0 overflow-hidden">
            {active === "mission" ? <MissionVisual /> : <VisionVisual />}
          </div>

          <div className="flex flex-col justify-center px-10 py-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121212] mb-6 leading-tight">
              {t(`${active}.heading`)}
            </h3>
            <p className="text-sm sm:text-base text-[#121212] leading-relaxed">
              {t(`${active}.body`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
