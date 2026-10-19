"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BookOpen, Heart, Zap } from "lucide-react";
import { CountUp } from "@/components/atoms/CountUp";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const ICONS = [Zap, BookOpen, Heart];
const ACCENTS = ["#F3A6D9", "#E0C0A8", "#9FD8B0"];

export default function CommunityPhilosophy() {
  const t = useTranslations("Community.philosophy");
  const reduced = useReducedMotion();
  const pillars = t.raw("pillars") as Array<{ title: string; text: string; tag: string }>;

  return (
    <section className="relative overflow-hidden bg-tabi-night py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_0%_0%,rgba(208,96,176,0.3)_0%,transparent_60%),radial-gradient(50%_60%_at_100%_100%,rgba(113,40,111,0.6)_0%,transparent_60%)]"
      />
      <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-80 w-80 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1.5px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]" />
      <Sparkle className="absolute left-[46%] top-20" size={26} />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:mb-20 lg:grid-cols-2">
          <SectionHeading
            inverted
            eyebrow={t("badge")}
            title={
              <>
                {t("headingLine1")}{" "}
                <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                  {t("headingHighlight")}
                </span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="text-lg leading-[1.8] text-white/70 lg:border-l lg:border-white/15 lg:pl-10">{t("description")}</p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.12}>
          {pillars.map((pillar, i) => {
            const Icon = ICONS[i % ICONS.length];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <StaggerItem key={pillar.title} className="h-full" hoverLift={8}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white/[0.05] p-8 ring-1 ring-white/10 transition-colors duration-500 hover:bg-white/[0.09] sm:p-9">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
                    style={{ background: accent }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full text-tabi-night transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110"
                      style={{ background: accent }}
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">{pillar.tag}</span>
                  </div>
                  <h3 className="relative mt-10 text-2xl font-bold text-white">{pillar.title}</h3>
                  <p className="relative mt-4 flex-1 text-base leading-[1.8] text-white/65">{pillar.text}</p>
                  <span className="relative mt-8 inline-flex translate-y-2 items-center gap-1.5 text-sm font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" style={{ color: accent }}>
                    {t("viewImpact")}
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Mission stat with a progress ring */}
        <Reveal className="mt-16 lg:mt-20" scale={0.96}>
          <div className="flex flex-col items-center justify-between gap-10 rounded-[2.5rem] bg-gradient-to-r from-brand-primary/60 to-white/[0.04] p-8 ring-1 ring-white/10 sm:p-12 md:flex-row">
            <div className="flex items-center gap-6 sm:gap-8">
              <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="52"
                    fill="none"
                    stroke="url(#mission-ring)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, ease: EASE_TABI }}
                  />
                  <defs>
                    <linearGradient id="mission-ring" x1="0" x2="1">
                      <stop offset="0%" stopColor="#F3A6D9" />
                      <stop offset="100%" stopColor="#E0C0A8" />
                    </linearGradient>
                  </defs>
                </svg>
                <Sparkle className="absolute inset-0 m-auto" size={34} />
              </div>
              <div>
                <p className="text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none text-white">
                  <CountUp value={Number(t("statValue")).toLocaleString("en-US")} duration={2.2} />
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-snug text-white/65">{t("statLabel")}</p>
              </div>
            </div>
            <p className="max-w-sm text-center text-lg leading-relaxed text-white/80 md:text-right">{t("statQuote")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
