"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Check } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import RegistrationModal from "@/components/molecules/RegistrationModal";
import { withBasePath } from "@/constants/paths";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE_TABI }
});

export default function AIBusinessHero() {
  const t = useTranslations("AIBusiness.hero");
  const [formOpen, setFormOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const discScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const trustSignals = [
    t("trustSignals.noTech"),
    t("trustSignals.virtual"),
    t("trustSignals.certified")
  ];

  const buildItems = [
    t("floatingCards.buildItems.liveWebsite"),
    t("floatingCards.buildItems.aiAgent"),
    t("floatingCards.buildItems.brandKit")
  ];

  return (
    <>
      <section
        ref={ref}
        className="relative w-full overflow-hidden bg-tabi-blush"
        style={{ paddingTop: "var(--nav-height, 80px)" }}
      >
        {/* Blurred orbs, as on the About hero */}
        <div aria-hidden className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-brand-orchid/25 blur-[90px] animate-blob" />
        <div aria-hidden className="pointer-events-none absolute right-[30%] -top-10 h-64 w-64 rounded-full bg-tabi-tan/40 blur-[90px] animate-blob [animation-delay:-5s]" />

        <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            {/* ── Copy ── */}
            <motion.div
              style={reduced ? undefined : { y: copyY, opacity: copyOpacity }}
              className="relative z-10 flex flex-col items-start pt-12 lg:py-24"
            >
              <motion.div {...rise(0)}>
                <Eyebrow tone="white" dot>
                  {t("badge")}
                </Eyebrow>
              </motion.div>

              <h1 className="mt-7 text-[clamp(2.5rem,5.4vw,4.25rem)] font-bold leading-[1.06] tracking-[-0.015em] text-tabi-ink">
                <motion.span {...rise(0.08)} className="block">
                  {t("headlinePart1")}{" "}
                  <span className="relative inline-block">
                    <GradientText>{t("headlinePart2")}</GradientText>
                    <motion.svg
                      aria-hidden
                      viewBox="0 0 220 14"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 h-3 w-full"
                    >
                      <motion.path
                        d="M3 9C40 3 80 2 120 5s70 5 97 1"
                        fill="none"
                        stroke="url(#ai-hero-underline)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.1, delay: 0.7, ease: EASE_TABI }}
                      />
                      <defs>
                        <linearGradient id="ai-hero-underline" x1="0" x2="1">
                          <stop offset="0%" stopColor="#71286F" />
                          <stop offset="100%" stopColor="#D060B0" />
                        </linearGradient>
                      </defs>
                    </motion.svg>
                  </span>
                </motion.span>
                <motion.span {...rise(0.16)} className="block">
                  {t("headlinePart3")}
                </motion.span>
                <motion.span {...rise(0.24)} className="block">
                  {t("headlinePart4")}
                </motion.span>
              </h1>

              <motion.p {...rise(0.32)} className="mt-7 max-w-lg text-base leading-[1.8] text-tabi-body sm:text-lg">
                {t("description")}
              </motion.p>

              <motion.div {...rise(0.4)} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button variant="primary" size="lg" onClick={() => setFormOpen(true)}>
                  {t("cta")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <p className="text-sm text-tabi-body">
                  {t("cohortMessage")}{" "}
                  <span className="font-bold text-brand-primary">{t("cohortLimit")}</span>
                </p>
              </motion.div>

              <motion.ul {...rise(0.48)} className="mt-8 flex flex-wrap gap-2">
                {trustSignals.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-tabi-body ring-1 ring-brand-primary/10"
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-tabi-green text-[#2F8F5B]">
                      <Check size={10} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* ── Visual: gradient disc + cut-out + orbit chips ── */}
            <motion.div
              style={reduced ? undefined : { y: visualY }}
              className="relative mx-auto aspect-square w-full max-w-[560px] self-end"
            >
              {/* orbit ring */}
              <div aria-hidden className="absolute inset-[2%] rounded-full border border-tabi-ink/15 animate-spin-slow">
                <span className="absolute left-[14%] top-[14%] h-3.5 w-3.5 rounded-full bg-white shadow-md" />
                <span className="absolute bottom-[22%] -right-1.5 h-3 w-3 rounded-full bg-tabi-tan" />
                <span className="absolute -left-1 top-1/2 h-2.5 w-2.5 rounded-full bg-brand-orchid/60" />
              </div>

              {/* disc */}
              <motion.div
                aria-hidden
                style={reduced ? undefined : { scale: discScale }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: EASE_TABI }}
                className="absolute inset-[14%] rounded-full bg-[linear-gradient(180deg,#FBC48A_0%,#E78FB3_38%,#C84FB5_68%,#71286F_100%)]"
              />
              <div aria-hidden className="absolute inset-[20%] rounded-full border border-white/40" />

              {/* cut-out */}
              <motion.div
                className="absolute inset-x-[10%] bottom-0 top-[6%]"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.35, ease: EASE_TABI }}
              >
                <Image
                  src={withBasePath("/ai-business-hero-3.png")}
                  alt={t("floatingCards.youWillBuild")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 480px"
                  className="object-contain object-bottom"
                />
              </motion.div>

              <Sparkle className="absolute right-[18%] top-[8%]" size={40} />
              <Sparkle className="absolute left-[8%] bottom-[38%]" size={18} delay={1.3} color="var(--color-brand-orchid)" />

              {/* chip: cohort size */}
              <motion.div
                className="absolute right-0 top-[18%] z-10 sm:-right-4"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.8 }}
              >
                <div className="animate-float rounded-2xl bg-tabi-mint px-4 py-3 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.35)]">
                  <p className="text-[11px] text-tabi-body">{t("floatingCards.cohortSize")}</p>
                  <p className="text-2xl font-bold leading-tight text-tabi-ink">50</p>
                  <p className="text-[11px] font-medium text-brand-primary">{t("floatingCards.participantsMax")}</p>
                </div>
              </motion.div>

              {/* chip: you'll build */}
              <motion.div
                className="absolute bottom-[16%] left-0 z-10 sm:-left-6"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.95 }}
              >
                <div className="animate-float rounded-2xl bg-white px-4 py-3.5 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.35)] [animation-delay:-2s]">
                  <p className="mb-2 text-[11px] text-tabi-body">{t("floatingCards.youWillBuild")}</p>
                  <ul className="flex flex-col gap-1.5">
                    {buildItems.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-tabi-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* chip: certified */}
              <motion.div
                className="absolute bottom-[6%] right-[2%] z-10"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1.1 }}
              >
                <div className="animate-float flex items-center gap-3 rounded-2xl bg-brand-primary px-4 py-3 shadow-[0_14px_34px_-10px_rgba(113,40,111,0.7)] [animation-delay:-4s]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                    <Award size={16} />
                  </span>
                  <span>
                    <span className="block text-xs font-bold leading-tight text-white">{t("floatingCards.certifiedOn")}</span>
                    <span className="block text-[10px] text-white/70">{t("floatingCards.completion")}</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
