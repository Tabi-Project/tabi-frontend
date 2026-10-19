"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function TWNManifestoQuote() {
  const t = useTranslations("TWN.manifestoQuote");
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orchid/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal y={0} scale={0.6} className="mb-10 flex justify-center">
          <Sparkle size={56} />
        </Reveal>
        <Reveal>
          <h2 className="text-[clamp(2.4rem,6vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.015em] text-tabi-ink">
            {t("line1")} <span className="font-serif font-normal italic text-gradient-brand">{t("highlight1")}</span> {t("line2")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t("highlight2")}</span>
              <motion.span
                aria-hidden
                className="absolute bottom-[0.12em] left-0 h-[0.32em] w-full origin-left rounded-full bg-tabi-pink"
                initial={reduced ? undefined : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5, ease: EASE_TABI }}
              />
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-3xl font-serif text-xl italic leading-relaxed text-tabi-body md:text-2xl">{t("quote")}</p>
        </Reveal>
      </div>
    </section>
  );
}
