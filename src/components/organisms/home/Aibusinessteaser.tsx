"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/atoms/Button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, Lightbulb, Palette, Zap } from "lucide-react";
import { CountUp } from "@/components/atoms/CountUp";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { withBasePath } from "@/constants/paths";

// Card tints follow the hero stat chips in the Figma (pink / mint / cream / lilac)
const PILLARS = [
  { key: "strategy", icon: Lightbulb, tint: "bg-tabi-pink", iconTint: "text-brand-primary" },
  { key: "design", icon: Palette, tint: "bg-tabi-mint", iconTint: "text-[#2F8F5B]" },
  { key: "build", icon: Globe, tint: "bg-tabi-cream", iconTint: "text-[#B9772E]" },
  { key: "automate", icon: Zap, tint: "bg-tabi-lilac/60", iconTint: "text-brand-primary" }
] as const;

export default function AIBusinessTeaser() {
  const t = useTranslations("AIBusinessTeaser");
  const reduced = useReducedMotion();

  const HIGHLIGHTS = [
    { id: "training", tone: "bg-tabi-mint", pos: "-left-4 top-10 sm:-left-10" },
    { id: "participants", tone: "bg-tabi-cream", pos: "-right-2 top-1/3 sm:-right-8" },
    { id: "tools", tone: "bg-white", pos: "left-6 -bottom-6 sm:left-10" },
    { id: "handsOn", tone: "bg-tabi-pink", pos: "right-10 -bottom-10 hidden sm:block" }
  ] as const;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-brand-orchid/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* ── Copy ── */}
          <div className="flex flex-col items-start">
            <Reveal y={12}>
              <Eyebrow dot>{t("badge")}</Eyebrow>
            </Reveal>

            <h2 className="mt-6 text-[clamp(2.1rem,4.6vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.01em] text-tabi-ink">
              <Reveal as="span" className="block" delay={0.05}>
                {t("headlinePart1")}
              </Reveal>
              <Reveal as="span" className="block" delay={0.12}>
                <GradientText>{t("headlinePart2")}</GradientText>
              </Reveal>
              <Reveal as="span" className="block" delay={0.19}>
                {t("headlinePart3")}
              </Reveal>
            </h2>

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-lg text-base leading-[1.8] text-tabi-body">
                {t("description")}
              </p>
            </Reveal>

            <Reveal delay={0.32} className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/ai-for-businesses">
                <Button variant="primary" size="lg">
                  {t("cta.primary")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </Reveal>

            <Reveal delay={0.4} className="mt-8 flex items-center gap-3 rounded-2xl bg-tabi-blush px-5 py-4">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3CB371] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3CB371]" />
              </span>
              <p className="text-sm text-tabi-body">
                <span className="font-bold text-tabi-ink">{t("footer.headline")}</span>{" "}
                {t("footer.subtext")}
              </p>
            </Reveal>
          </div>

          {/* ── Visual: framed images + floating stat chips ── */}
          <div className="relative mx-auto w-full max-w-[560px] py-6">
            <Parallax offset={30}>
              <motion.div
                className="relative ml-auto aspect-[4/5] w-[78%] overflow-hidden rounded-[1.75rem] border-[3px] border-brand-primary"
                initial={reduced ? { opacity: 0 } : { opacity: 0, clipPath: "inset(12% 12% 12% 12% round 28px)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: EASE_TABI }}
              >
                <Image
                  src={withBasePath("/ai-business-hero-2.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 80vw, 440px"
                  className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/50 via-transparent to-transparent" />
              </motion.div>
            </Parallax>

            <Parallax offset={-40} className="absolute bottom-0 left-0 w-[52%]">
              <motion.div
                className="relative aspect-square overflow-hidden rounded-[1.5rem] border-[3px] border-brand-primary bg-white shadow-[0_30px_60px_-30px_rgba(113,40,111,0.6)]"
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, rotate: -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2, ease: EASE_TABI }}
              >
                <Image
                  src={withBasePath("/ai-business-hero.jpg")}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 290px"
                  className="object-cover object-[70%_center]"
                />
              </motion.div>
            </Parallax>

            <Sparkle className="absolute left-[44%] top-[56%] z-10" size={46} />
            <Sparkle className="absolute right-2 top-0 z-10" size={22} delay={1.4} color="var(--color-brand-orchid)" />

            {/* Stat chips — same visual vocabulary as the hero orbit cards */}
            {HIGHLIGHTS.map((h, i) => (
              <motion.div
                key={h.id}
                className={`absolute z-20 ${h.pos}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.45 + i * 0.12 }}
              >
                <div
                  className={`animate-float rounded-2xl px-4 py-3 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.35)] ring-1 ring-black/[0.03] ${h.tone}`}
                  style={{ animationDelay: `${i * -1.4}s` }}
                >
                  <p className="text-xl font-bold leading-none text-tabi-ink">
                    <CountUp value={t(`highlights.${h.id}.value`)} />
                  </p>
                  <p className="mt-1.5 text-[11px] text-tabi-body">{t(`highlights.${h.id}.label`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Pillars ── */}
        <Stagger className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-28 lg:grid-cols-4" stagger={0.1}>
          {PILLARS.map(({ key, icon: Icon, tint, iconTint }, i) => (
            <StaggerItem key={key} hoverLift={6}>
              <Link
                href="/ai-for-businesses"
                className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(113,40,111,0.55)] ${tint}`}
              >
                <span className="absolute right-6 top-5 text-5xl font-bold text-black/[0.05] transition-transform duration-500 group-hover:-translate-y-1">
                  0{i + 1}
                </span>
                <span
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110 ${iconTint}`}
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <h3 className="text-lg font-bold text-tabi-ink">{t(`pillars.${key}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tabi-body">
                  {t(`pillars.${key}.description`)}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  {t("cta.secondary").replace(/\s*→\s*$/, "")}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
