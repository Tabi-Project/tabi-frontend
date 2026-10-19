"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, CalendarDays } from "lucide-react";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";
import { Button } from "@/components/atoms/Button";
import { CountUp } from "@/components/atoms/CountUp";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

/* ── Inline SVG logos ─────────────────────────────────────────────── */
function VueLogo() {
  return (
    <svg viewBox="0 0 261.76 226.69" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.688L261.742.001z" fill="#41b883" />
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.525 136.01L209.4.001z" fill="#34495e" />
    </svg>
  );
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2L2 9.5v13L16 30l14-7.5v-13L16 2z" fill="#539E43" />
      <path d="M16 6.5L6 12v8l10 5.5 10-5.5v-8L16 6.5z" fill="#fff" opacity=".15" />
      <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace">
        JS
      </text>
    </svg>
  );
}

function SailsLogo() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L36 34 L4 34 Z" fill="#71286F" opacity="0.85" />
      <path d="M20 4 L36 34 L20 28 Z" fill="#c040a0" opacity="0.7" />
    </svg>
  );
}

/** Tiny "editor" whose lines type themselves in — a nod to what students will ship. */
const CODE = [
  { indent: 0, tokens: [["#D8B4F8", "const "], ["#fff", "product"], ["#F3A6D9", " = "], ["#9FD8B0", "await "], ["#fff", "build("]] },
  { indent: 1, tokens: [["#E0C0A8", "stack"], ["#fff", ": "], ["#9FD8B0", '"vue + node"'], ["#fff", ","]] },
  { indent: 1, tokens: [["#E0C0A8", "ai"], ["#fff", ": "], ["#D8B4F8", "true"], ["#fff", ","]] },
  { indent: 1, tokens: [["#E0C0A8", "payments"], ["#fff", ": "], ["#D8B4F8", "true"]] },
  { indent: 0, tokens: [["#fff", "});"]] },
  { indent: 0, tokens: [["#F3A6D9", "deploy"], ["#fff", "(product) "], ["#9FD8B0", "// 🚀 live"]] }
] as const;

function CodeWindow() {
  return (
    <div className="w-[300px] overflow-hidden rounded-2xl bg-tabi-night shadow-[0_30px_60px_-24px_rgba(42,13,41,0.8)] ring-1 ring-white/10">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F3A6D9]" />
        <span className="h-2.5 w-2.5 rounded-full bg-tabi-tan" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#9FD8B0]" />
        <span className="ml-3 text-[11px] text-white/40">saas.ts</span>
      </div>
      <pre className="px-4 py-4 font-mono text-[12px] leading-6">
        {CODE.map((line, i) => (
          <motion.div
            key={i}
            style={{ paddingLeft: line.indent * 16 }}
            initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.5, delay: 1 + i * 0.28, ease: "easeOut" }}
          >
            {line.tokens.map(([color, text], j) => (
              <span key={j} style={{ color }}>
                {text}
              </span>
            ))}
          </motion.div>
        ))}
        <motion.span
          className="inline-block h-4 w-2 translate-y-0.5 bg-[#F3A6D9]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </pre>
    </div>
  );
}

const STAT_TINTS = ["bg-tabi-pink", "bg-tabi-mint", "bg-tabi-cream", "bg-tabi-lilac/60"];

export default function BootcampHero() {
  const t = useTranslations("Bootcamp.hero");
  const trust = t.raw("trust") as Array<{ value: string; label: string }>;
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const codeY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE_TABI }
  });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-tabi-blush"
      style={{ paddingTop: "var(--nav-height, 80px)" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-50 [mask-image:radial-gradient(ellipse_at_70%_40%,#000,transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-orchid/20 blur-[90px] animate-blob" />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid min-h-[85vh] grid-cols-1 items-center gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.div {...rise(0)}>
              <Eyebrow tone="white" dot>
                {t("badge")}
              </Eyebrow>
            </motion.div>

            <h1 className="mt-7 text-[clamp(2.6rem,5.6vw,4.4rem)] font-bold leading-[1.06] tracking-[-0.015em] text-tabi-ink">
              <motion.span {...rise(0.08)} className="block">
                {t.rich("line1")}
              </motion.span>
              <motion.span {...rise(0.16)} className="block">
                <GradientText>{t("line2")}</GradientText>
              </motion.span>
              <motion.span {...rise(0.24)} className="block">
                {t("line3")}
              </motion.span>
            </h1>

            <motion.p {...rise(0.32)} className="mt-7 max-w-lg text-base leading-[1.8] text-tabi-body sm:text-lg">
              {t.rich("subheadline", {
                semibold: (chunks) => <span className="font-bold text-tabi-ink">{chunks}</span>
              })}
            </motion.p>
            <motion.p {...rise(0.36)} className="mt-3 flex items-center gap-2 text-sm text-tabi-body">
              <CalendarDays size={15} className="text-brand-primary" />
              {t("schedule")}
            </motion.p>

            <motion.div {...rise(0.44)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
                {t("cta")}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white"
                onClick={() => document.getElementById("curriculum")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("ctaSecondary")}
                <ArrowDown size={18} className="transition-transform duration-300 group-hover/btn:translate-y-0.5" />
              </Button>
            </motion.div>

            <motion.div {...rise(0.52)} className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {trust.map((stat, i) => (
                <div key={stat.label} className={`rounded-2xl px-4 py-3.5 ${STAT_TINTS[i % STAT_TINTS.length]}`}>
                  <p className="text-2xl font-bold leading-none text-tabi-ink">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1.5 text-[11px] text-tabi-body">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — framed photo + code window + floating chips */}
          <div className="relative mx-auto w-full max-w-[540px] pb-10 lg:pb-0">
            <motion.div style={reduced ? undefined : { y: photoY }}>
              <motion.div
                className="relative ml-auto aspect-[4/5] w-[86%] overflow-hidden rounded-[2rem] border-[3px] border-brand-primary"
                initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.1, ease: EASE_TABI }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={t("heroImageAlt")}
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 460px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 via-brand-primary/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs text-white/75">{t("heroCardLabel")}</p>
                  <p className="mt-1 text-lg font-bold leading-snug">{t("heroCardDetails")}</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              style={reduced ? undefined : { y: codeY }}
              className="absolute -left-2 top-[18%] z-10 hidden sm:block lg:-left-10"
            >
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -6 }}
                animate={{ opacity: 1, x: 0, rotate: -3 }}
                transition={{ duration: 1, delay: 0.5, ease: EASE_TABI }}
              >
                <CodeWindow />
              </motion.div>
            </motion.div>

            <Sparkle className="absolute right-[4%] top-[-3%] z-10" size={42} />

            {/* Starts chip */}
            <motion.div
              className="absolute -top-4 left-[18%] z-20 sm:left-[30%]"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.9 }}
            >
              <div className="animate-float rounded-2xl bg-tabi-mint px-5 py-3.5 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.4)]">
                <p className="text-[11px] text-tabi-body">{t("floatingStartsLabel")}</p>
                <p className="text-xl font-bold leading-tight text-tabi-ink">{t("floatingStartsDate")}</p>
                <p className="text-[11px] text-tabi-body">{t("floatingStartsSubtext")}</p>
              </div>
            </motion.div>

            {/* Stack chip */}
            <motion.div
              className="absolute bottom-0 left-0 z-20 lg:-bottom-6 lg:-left-6"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 1.05 }}
            >
              <div className="animate-float flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_14px_34px_-14px_rgba(113,40,111,0.4)] [animation-delay:-3s]">
                <span className="h-6 w-6">
                  <VueLogo />
                </span>
                <span className="h-6 w-6">
                  <NodeLogo />
                </span>
                <span className="relative h-5 w-9">
                  <Image src="/tailwind.svg" alt="Tailwind CSS" fill className="object-contain" />
                </span>
                <span className="h-5 w-5">
                  <SailsLogo />
                </span>
                <span className="text-xs font-medium text-tabi-body">{t("stackLabel")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
