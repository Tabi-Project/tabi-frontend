"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import RegistrationModal from "../../molecules/RegistrationModal";

export default function AIBusinessCTA() {
  const t = useTranslations("AIBusiness.cta");
  const [formOpen, setFormOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const draw = useTransform(scrollYProgress, [0.1, 1], [0, 1]);
  const arcY = useTransform(scrollYProgress, [0, 1], [80, 0]);

  const trustSignals = t.raw("trustSignals") as string[];

  return (
    <>
      <section id="register" ref={ref} className="relative w-full overflow-hidden bg-tabi-night">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(208,96,176,0.45)_0%,transparent_65%)]"
        />

        {/* Tabi "smile" arcs draw themselves in as the section arrives */}
        <motion.svg
          aria-hidden
          viewBox="0 0 400 200"
          style={reduced ? undefined : { y: arcY }}
          className="pointer-events-none absolute -bottom-10 left-1/2 w-[min(1100px,140vw)] -translate-x-1/2"
          fill="none"
        >
          <motion.path
            d="M20 0a180 180 0 0 0 360 0"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="26"
            style={reduced ? undefined : { pathLength: draw }}
          />
          <motion.path
            d="M110 0a90 90 0 0 0 180 0"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="26"
            style={reduced ? undefined : { pathLength: draw }}
          />
        </motion.svg>

        <Sparkle className="absolute left-[14%] top-24" size={34} />
        <Sparkle className="absolute right-[16%] top-40" size={20} delay={1} color="#F3A6D9" />
        <Sparkle className="absolute bottom-32 left-[22%]" size={16} delay={2} color="#fff" />

        <div className="relative mx-auto flex max-w-350 flex-col items-center px-6 py-24 text-center sm:px-12 lg:px-20 lg:py-36">
          <Reveal y={12}>
            <Eyebrow tone="plum" dot>
              {t("badge")}
            </Eyebrow>
          </Reveal>

          <Reveal delay={0.06} className="mt-7">
            <h2 className="max-w-4xl text-[clamp(2.5rem,6.5vw,5.25rem)] font-bold leading-[1.04] tracking-[-0.02em] text-white">
              {t("headingLine1")}{" "}
              <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                {t("headingHighlight")}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-[1.8] text-white/70 sm:text-lg">
              {t("description")} <span className="font-bold text-white">{t("descriptionHighlight")}</span>{" "}
              {t("descriptionSuffix")}
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-5">
            <button
              onClick={() => setFormOpen(true)}
              className="group relative inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-9 py-4 text-base font-bold text-brand-primary animate-pulse-ring transition-transform duration-500 hover:-translate-y-0.5 active:scale-95"
            >
              {t("button")}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-white/50">
              {t("enrolledText")}{" "}
              <Link
                href="#"
                className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                {t("enrolledLink")}
              </Link>
            </p>
          </Reveal>

          <Reveal delay={0.28} className="mt-12">
            <ul className="flex flex-wrap justify-center gap-2.5">
              {trustSignals.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] px-4 py-2 text-xs text-white/75 ring-1 ring-white/10"
                >
                  <Check size={12} className="text-[#9FD8B0]" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
