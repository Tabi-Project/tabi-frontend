"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { CountUp } from "@/components/atoms/CountUp";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { Marquee } from "@/components/atoms/Marquee";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { withBasePath } from "@/constants/paths";
import { SLOTS_REMAINING, TOTAL_SLOTS } from "@/constants/consultancy";

const PILL_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/70", "bg-tabi-peach"];
const STAT_TINTS = ["bg-tabi-mint", "bg-tabi-cream", "bg-tabi-pink"];

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_TABI }
});

export default function ConsultancyHero() {
  const t = useTranslations("Consultancy.ConsultancyHero");
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const smallY = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const areas = t.raw("areas") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-white"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      {/* Urgency ticker */}
      <div className="bg-brand-primary py-3 text-white">
        <Marquee duration={36} fade={false}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 px-6 text-sm font-medium">
              {t("urgentBar", { totalSlots: TOTAL_SLOTS })}
              <Sparkle size={14} still />
            </span>
          ))}
        </Marquee>
      </div>

      <div aria-hidden className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-orchid/15 blur-[90px]" />

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-14 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28">
          {/* Copy */}
          <div>
            <motion.div {...rise(0)} className="mb-7 flex flex-wrap items-center gap-3">
              <Eyebrow>{t("freeBadge")}</Eyebrow>
              <span className="text-sm text-tabi-body">{t("freeSubtext")}</span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="text-[clamp(2.4rem,5.2vw,4rem)] font-bold leading-[1.08] tracking-[-0.015em] text-tabi-ink"
            >
              {t("headline1")} {t("headline2")}{" "}
              <span className="relative inline-block">
                <GradientText>{t("headlineHighlight")}</GradientText>
                <svg aria-hidden viewBox="0 0 300 14" preserveAspectRatio="none" className="absolute -bottom-2 left-0 h-3 w-full">
                  <motion.path
                    d="M3 9C60 3 120 2 180 5s90 5 115 1"
                    fill="none"
                    stroke="#D060B0"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, delay: 0.7, ease: EASE_TABI }}
                  />
                </svg>
              </span>{" "}
              {t("headline3")}
            </motion.h1>

            <motion.p {...rise(0.16)} className="mt-7 max-w-lg text-base leading-[1.8] text-tabi-body sm:text-lg">
              {t("description")}
            </motion.p>

            <motion.ul {...rise(0.24)} className="mt-8 flex flex-wrap gap-2">
              {areas.map((area, i) => (
                <li key={area} className={`rounded-full px-4 py-1.5 text-sm font-medium text-tabi-ink ${PILL_TINTS[i % PILL_TINTS.length]}`}>
                  {area}
                </li>
              ))}
            </motion.ul>

            <motion.div {...rise(0.32)} className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`rounded-2xl px-4 py-4 ${STAT_TINTS[i % STAT_TINTS.length]}`}>
                  <p className="text-2xl font-bold leading-none text-tabi-ink sm:text-3xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-2 text-xs text-tabi-body">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div {...rise(0.4)} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="#apply">
                <Button variant="primary" size="lg">
                  {t("cta").replace(/\s*→\s*$/, "")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
              <p className="text-sm text-tabi-body">{t("terms", { remaining: SLOTS_REMAINING, total: TOTAL_SLOTS })}</p>
            </motion.div>
          </div>

          {/* Collage: framed photos + sparkle, as in the Figma project grids */}
          <div className="relative mx-auto w-full max-w-[520px] pb-16 pl-10 sm:pl-16">
            <motion.div style={reduced ? undefined : { y: bigY }}>
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-[3px] border-brand-primary"
                initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE_TABI }}
              >
                <Image
                  src={withBasePath("/consultancy/hero-2.jpg")}
                  alt={t("imageAlt")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 440px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="flex items-center gap-2 text-xs text-white/75">
                    <CalendarDays size={14} />
                    {t("deadlineLabel")}
                  </p>
                  <p className="mt-1 font-bold">{t("applicationDeadline")}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={reduced ? undefined : { y: smallY }} className="absolute bottom-0 left-0 w-[52%]">
              <motion.div
                className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border-[3px] border-brand-primary bg-white shadow-[0_30px_60px_-30px_rgba(113,40,111,0.6)]"
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 1, delay: 0.4, ease: EASE_TABI }}
              >
                <Image src={withBasePath("/consultancy/hero.jpg")} alt="" fill sizes="260px" className="object-cover" />
              </motion.div>
            </motion.div>

            <Sparkle className="absolute bottom-[30%] left-[46%] z-10" size={48} />

            {/* Open slots chip */}
            <motion.div
              className="absolute right-[-0.5rem] top-10 z-10 sm:-right-6"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.8 }}
            >
              <div className="animate-float rounded-2xl bg-white px-5 py-4 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.4)]">
                <p className="text-xs text-tabi-body">{t("openSlotsLabel")}</p>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-2xl font-bold text-tabi-ink">{SLOTS_REMAINING}</span>
                  <span className="flex gap-1">
                    {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                      <motion.span
                        key={i}
                        className={`h-2.5 w-2.5 rounded-full ${i < SLOTS_REMAINING ? "bg-brand-primary" : "bg-tabi-lilac"}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 14, delay: 1 + i * 0.08 }}
                      />
                    ))}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Areas chip */}
            <motion.div
              className="absolute bottom-24 right-[-0.5rem] z-10 sm:-right-8"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1 }}
            >
              <div className="animate-float rounded-2xl bg-brand-primary px-5 py-4 text-white shadow-[0_14px_34px_-10px_rgba(113,40,111,0.7)] [animation-delay:-3s]">
                <p className="text-xs text-white/70">{t("areasCoveredLabel")}</p>
                <p className="mt-1 max-w-[12rem] text-sm font-bold leading-snug">{areas.join(" · ")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
