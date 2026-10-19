"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { WordReveal } from "@/components/atoms/WordReveal";

export default function TWNTestimonial() {
  const t = useTranslations("TWN.testimonial");
  const reduced = useReducedMotion();
  const quote = (t("quote") as string).replace(/^["“]+|["”]+$/g, "");

  return (
    <section className="relative overflow-hidden bg-tabi-night py-24 text-white lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_50%,rgba(208,96,176,0.28)_0%,transparent_70%)]" />
      <Sparkle className="absolute left-[12%] top-20" size={30} />
      <Sparkle className="absolute bottom-20 right-[14%]" size={18} delay={1.3} color="#F3A6D9" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.svg
          aria-hidden
          viewBox="0 0 56 44"
          className="mx-auto mb-10 h-12 w-16"
          initial={reduced ? undefined : { opacity: 0, scale: 0.4, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
        >
          <path
            fill="#F3A6D9"
            d="M22 0C9.5 4.8 1 14.6 1 27.6 1 37 6.4 44 14 44c6.3 0 11-4.8 11-10.6 0-5.9-4.2-10-9.9-10-1.2 0-2.4.2-3.2.6 1.2-6.5 7-12.9 13.5-16.4L22 0Zm30 0C39.5 4.8 31 14.6 31 27.6 31 37 36.4 44 44 44c6.3 0 11-4.8 11-10.6 0-5.9-4.2-10-9.9-10-1.2 0-2.4.2-3.2.6 1.2-6.5 7-12.9 13.5-16.4L52 0Z"
          />
        </motion.svg>

        <blockquote className="font-serif text-[clamp(1.6rem,3.6vw,2.6rem)] italic leading-[1.35] text-white/95">
          <WordReveal text={`“${quote}”`} stagger={0.04} />
        </blockquote>

        <Reveal delay={0.4} className="mt-12 flex flex-col items-center">
          <motion.span
            aria-hidden
            className="mb-8 h-px w-16 origin-center bg-gradient-to-r from-transparent via-[#F3A6D9] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE_TABI }}
          />
          <p className="text-lg font-bold text-tabi-tan">{t("attribution")}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.4em] text-white/40">{t("footer")}</p>
        </Reveal>
      </div>
    </section>
  );
}
