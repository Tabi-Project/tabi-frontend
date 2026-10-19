"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/atoms/CountUp";
import { Stagger, StaggerItem } from "@/components/atoms/Reveal";

// Same tinted chips as the Figma hero stats
const TINTS = ["bg-tabi-mint", "bg-tabi-pink", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function AIBusinessStats() {
  const t = useTranslations("AIBusiness.stats");

  const STATS = [
    { value: t("training.value"), label: t("training.label") },
    { value: t("sessions.value"), label: t("sessions.label") },
    { value: t("tools.value"), label: t("tools.label") },
    { value: t("handsOn.value"), label: t("handsOn.label") }
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-16 lg:py-20">
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4" stagger={0.08}>
          {STATS.map((stat, i) => (
            <StaggerItem key={stat.label} hoverLift={4}>
              <div className={`flex h-full flex-col justify-between rounded-[1.75rem] p-6 sm:p-7 ${TINTS[i % TINTS.length]}`}>
                <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none text-tabi-ink">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-4 text-sm text-tabi-body">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
