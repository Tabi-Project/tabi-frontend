"use client";

import { useTranslations } from "next-intl";
import { CountUp } from "@/components/atoms/CountUp";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

const ACCENTS = ["#F3A6D9", "#E0C0A8", "#9FD8B0", "#D8B4F8"];

export default function OpenSourceImpact() {
  const t = useTranslations("OpenSource.impact");
  const stats = t.raw("stats") as Array<{ label: string; value: string; description: string }>;

  return (
    <section className="relative overflow-hidden bg-tabi-night py-20 text-white lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(208,96,176,0.3)_0%,transparent_65%)]" />
      <Sparkle className="absolute right-[12%] top-16" size={28} />

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-16 text-center">
          <Reveal y={12}>
            <Eyebrow tone="plum">
              {t("badge")}
              <span className="mx-1 h-3.5 w-px bg-white/25" />
              <span className="text-tabi-tan">{t("collaborator")}</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.06} className="mt-6">
            <h2 className="text-[clamp(2.1rem,4.5vw,3.5rem)] font-bold leading-[1.1]">
              {t("headingPart1")}{" "}
              <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                {t("headingHighlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-[1.8] text-white/70">{t("description")}</p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5" stagger={0.1}>
          {stats.map((stat, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <StaggerItem key={stat.label} className="h-full" hoverLift={8}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] bg-white/[0.05] p-7 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09] sm:p-8">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: accent }}
                  />
                  <p className="relative text-[clamp(2.2rem,4vw,3rem)] font-bold leading-none">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="relative mt-4 text-sm font-medium" style={{ color: accent }}>
                    {stat.label}
                  </p>
                  <p className="relative mt-2 text-sm leading-relaxed text-white/60">{stat.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
