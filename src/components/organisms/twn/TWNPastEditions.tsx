"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function TWNPastEditions() {
  const t = useTranslations("TWN.pastEditions");
  const reduced = useReducedMotion();

  return (
    <section className="overflow-hidden bg-tabi-blush py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Parallax offset={35} className="relative">
            <div aria-hidden className="absolute -left-5 -top-5 h-full w-full rounded-[2.75rem] border-2 border-dashed border-brand-primary/20" />
            <Sparkle className="absolute -right-4 -top-4 z-10" size={40} />
            <motion.div
              className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] border-[3px] border-brand-primary md:aspect-video lg:aspect-square"
              initial={reduced ? { opacity: 0 } : { opacity: 0, rotate: -4, scale: 0.94 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: EASE_TABI }}
            >
              <Image src="/tfwf.png" alt="Tabi Women Network Enugu Edition" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-tabi-night/90 via-tabi-night/20 to-transparent p-8 sm:p-10">
                <span className="mb-4 w-fit rounded-full bg-white px-4 py-1.5 text-xs font-bold text-brand-primary">{t("badge")}</span>
                <h4 className="text-2xl font-bold text-white">{t("location")}</h4>
                <p className="text-sm text-white/75">{t("date")}</p>
              </div>
            </motion.div>
          </Parallax>

          <div>
            <Reveal>
              <h2 className="text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.01em] text-tabi-ink">
                {t("headingLine1")}
                <br />
                <span className="font-serif text-[1.15em] font-normal italic text-gradient-brand">{t("headingHighlight")}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-[1.8] text-tabi-body">{t("description")}</p>
            </Reveal>
            <Reveal delay={0.18} className="mt-9">
              <Link href="/resources/blog/tabi-women-network-debuts-pan-african-series-in-enugu">
                <Button size="lg">
                  {t("cta")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
