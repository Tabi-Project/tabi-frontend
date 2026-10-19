"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/atoms/CountUp";
import { Stagger, StaggerItem } from "@/components/atoms/Reveal";

const TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function TWNImpactSummary() {
  const t = useTranslations("TWN.impactSummary");
  const stats = t.raw("stats") as Array<{ label: string; value: string }>;

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Stagger className="grid grid-cols-2 gap-4 md:grid-cols-4" stagger={0.08}>
          {stats.map((stat, i) => (
            <StaggerItem key={stat.label} hoverLift={4}>
              <div className={`rounded-[1.75rem] p-6 sm:p-7 ${TINTS[i % TINTS.length]}`}>
                <p className="text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-none text-tabi-ink">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-sm text-tabi-body">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
