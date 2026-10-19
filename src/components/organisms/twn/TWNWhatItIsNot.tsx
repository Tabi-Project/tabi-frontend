"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/molecules/SectionHeading";
import { Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";

export default function TWNWhatItIsNot() {
  const t = useTranslations("TWN.whatItIsNot");

  const comparison = t.raw("comparison") as Array<{ is: string; not: string }>;
  const footerTags = t.raw("footerTags") as string[];
  const reduced = useReducedMotion();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-350 mx-auto px-6 sm:px-12 lg:px-20">
        <SectionHeading
          align="center"
          eyebrow={
            <>
              <Sparkles size={13} /> {t("badge")}
            </>
          }
          title={t("heading")}
          description={t("description")}
          className="mb-16"
        />

        <div className="grid lg:grid-cols-1 gap-4 max-w-5xl mx-auto">
          {comparison.map((item, idx) => (
            <div
              key={idx}
              className="group grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 p-2"
            >
              {/* IT IS NOT */}
              <motion.div
                className="rounded-[1.75rem] bg-tabi-card/80 p-7"
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: -40 }}
                whileInView={{ opacity: 0.7, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: EASE_TABI }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 text-tabi-body/70" />
                  </div>
                  <span className="font-serif text-lg italic text-tabi-body line-through decoration-tabi-body/30">
                    {item.not}
                  </span>
                </div>
              </motion.div>

              {/* CENTER DIVIDER */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-px h-8 bg-gray-100" />
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-tabi-pink text-brand-primary"
                  initial={reduced ? undefined : { scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.25 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
                <div className="w-px h-8 bg-gray-100" />
              </div>

              {/* IT IS */}
              <motion.div
                className="relative overflow-hidden rounded-[1.75rem] bg-tabi-night p-7 shadow-[0_24px_50px_-30px_rgba(113,40,111,0.7)] transition-transform duration-500 group-hover:-translate-y-1"
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE_TABI }}
              >
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-brand-orchid/30 opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    {item.is}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer reinforcement */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-sm font-medium text-tabi-body">
            {t("footerTagline")}
          </p>
          <Stagger className="flex flex-wrap justify-center gap-3" stagger={0.08}>
            {footerTags.map((tag) => (
              <StaggerItem key={tag} as="span" y={10} scale={0.9}>
                <span className="inline-flex items-center gap-2 rounded-full bg-tabi-pink px-4 py-2 font-medium text-brand-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
