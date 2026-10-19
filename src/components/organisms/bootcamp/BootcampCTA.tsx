"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function BootcampCTA() {
  const t = useTranslations("Bootcamp.cta");
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const draw = useTransform(scrollYProgress, [0.1, 1], [0, 1]);

  return (
    <>
      <section id="cta-section" ref={ref} className="relative overflow-hidden bg-tabi-night py-24 lg:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(208,96,176,0.45)_0%,transparent_65%)]" />
        <motion.svg aria-hidden viewBox="0 0 400 200" className="pointer-events-none absolute -bottom-10 left-1/2 w-[min(1100px,140vw)] -translate-x-1/2" fill="none">
          <motion.path d="M20 0a180 180 0 0 0 360 0" stroke="rgba(255,255,255,0.08)" strokeWidth="26" style={reduced ? undefined : { pathLength: draw }} />
          <motion.path d="M110 0a90 90 0 0 0 180 0" stroke="rgba(255,255,255,0.06)" strokeWidth="26" style={reduced ? undefined : { pathLength: draw }} />
        </motion.svg>
        <Sparkle className="absolute left-[14%] top-20" size={34} />
        <Sparkle className="absolute right-[16%] top-36" size={20} delay={1} color="#F3A6D9" />

        <div className="relative z-10 mx-auto max-w-350 px-6 text-center sm:px-12 lg:px-20">
          <Reveal y={12}>
            <Eyebrow tone="plum" dot>
              {t("badge")}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.06} className="mt-7">
            <h2 className="mx-auto max-w-3xl text-[clamp(2.3rem,5.5vw,4.5rem)] font-bold leading-[1.06] text-white">
              {t("heading")}{" "}
              <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                {t("highlight")}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-md text-base leading-[1.8] text-white/70 sm:text-lg">{t("description")}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-5">
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-primary animate-pulse-ring transition-transform duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              {t("button")}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-sm text-white/55">{t("footnote")}</p>
          </Reveal>
        </div>
      </section>

      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
