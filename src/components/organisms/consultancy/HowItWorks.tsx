"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const ACCENTS = ["#F3A6D9", "#E0C0A8", "#9FD8B0", "#D8B4F8"];

export default function HowItWorks() {
  const t = useTranslations("Consultancy.HowItWorks");
  const steps = t.raw("steps") as Array<{ number: string; title: string; description: string }>;
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="relative w-full overflow-hidden bg-tabi-night">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_50%_0%,rgba(208,96,176,0.3)_0%,transparent_65%)]" />
      <Sparkle className="absolute left-[8%] top-16" size={28} />
      <Sparkle className="absolute bottom-16 right-[10%]" size={18} delay={1.4} color="#F3A6D9" />

      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <SectionHeading align="center" inverted eyebrow={t("badge")} title={t("heading")} className="mb-16 lg:mb-20" />

        <div ref={ref} className="relative grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {/* Connector that fills as you scroll */}
          <div aria-hidden className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-[2px] rounded-full bg-white/10 sm:block">
            <motion.span
              className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-[#F3A6D9] via-tabi-tan to-[#9FD8B0]"
              style={reduced ? undefined : { scaleX: progress }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative flex flex-col items-center text-center"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE_TABI }}
            >
              <motion.span
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-tabi-night ring-8 ring-tabi-night transition-transform duration-500 group-hover:scale-110"
                style={{ background: ACCENTS[i % ACCENTS.length] }}
                initial={{ scale: 0.3 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 14, delay: 0.2 + i * 0.15 }}
              >
                {step.number}
              </motion.span>
              <div className="mt-8 w-full rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10 transition-colors duration-500 group-hover:bg-white/[0.1]">
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-white/65">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
