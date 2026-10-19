"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Parallax } from "@/components/atoms/Parallax";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function TWNManifestoMission() {
  const t = useTranslations("TWN.manifestoMission");

  const principles = t.raw("principles") as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-350 mx-auto px-6 sm:px-12 lg:px-20">
        {/* --- PART 1: THE MANIFESTO --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="relative">
            <Sparkle className="absolute -left-4 -top-4 z-10" size={42} />
            <Parallax offset={40}>
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border-[3px] border-brand-primary md:aspect-4/5">
              <Image
                src="/community/woman-teaching.jpg"
                alt="The Tabi Table"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-tabi-night/80 via-transparent to-transparent" />
            </div>
            </Parallax>

            <motion.div
              className="absolute -bottom-6 left-6 right-6 max-w-sm rounded-[2rem] border-[6px] border-white bg-brand-primary p-8 shadow-2xl md:-right-12 md:left-auto"
              initial={{ opacity: 0, y: 50, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE_TABI }}
            >
              <Quote
                className="text-white/20 mb-4"
                size={32}
                fill="currentColor"
              />
              <p className="text-white font-bold text-lg md:text-xl leading-tight">
                {t("quote")}
              </p>
              <p className="text-white/60 text-[10px] mt-6 uppercase font-black tracking-[0.2em]">
                {t("quoteAuthor")}
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
            <Reveal y={12}>
              <Eyebrow dot>{t("badge")}</Eyebrow>
            </Reveal>

            <Reveal delay={0.06}>
            <h2 className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em] text-tabi-ink">
              {t("headingLine1")} <br />
              {t("headingLine2")} <br />
              <span className="text-gradient-brand font-serif font-normal lowercase tracking-normal">
                {t("headingHighlight")}
              </span>
            </h2>
            </Reveal>

            <Reveal delay={0.12} className="space-y-6 text-lg leading-[1.8] text-tabi-body">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
            </Reveal>
          </div>
        </div>

        {/* --- PART 2: THE OPERATING PRINCIPLES --- */}
        <div className="border-t border-brand-primary/10 pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-tabi-ink tracking-tight">
                {t("principlesHeading")}
              </h3>
              <p className="text-tabi-body mt-4 text-lg">
                {t("principlesDescription")}
              </p>
            </div>
            <div className="hidden md:block h-px grow bg-gray-100 mx-12 mb-4" />
            <span className="text-brand-primary font-serif italic text-2xl">
              {t("pillarsCount")}
            </span>
          </div>

          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {principles.map((item, idx) => (
              <StaggerItem key={item.title} className="h-full" hoverLift={6}>
              <div className="group h-full space-y-4 rounded-[1.75rem] bg-tabi-blush p-7 transition-colors duration-500 hover:bg-tabi-pink">
                <div className="flex items-center gap-4">
                  <span className="text-brand-primary font-serif italic text-2xl">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px w-8 bg-brand-primary/20 transition-all duration-500 group-hover:w-14 group-hover:bg-brand-primary" />
                </div>
                <h4 className="text-lg font-bold text-tabi-ink">
                  {item.title}
                </h4>
                <p className="text-tabi-body leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
