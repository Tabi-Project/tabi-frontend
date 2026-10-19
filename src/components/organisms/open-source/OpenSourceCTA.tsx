"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export default function CaseStudiesCTA() {
  const t = useTranslations("OpenSource.cta");

  return (
    <section className="relative overflow-hidden bg-tabi-night py-24 text-center text-white lg:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(208,96,176,0.45)_0%,transparent_65%)]" />
      {/* faint code grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_70%)]" />
      <Sparkle className="absolute left-[14%] top-20" size={32} />
      <Sparkle className="absolute bottom-24 right-[14%]" size={20} delay={1.2} color="#F3A6D9" />

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <h2 className="text-[clamp(2.4rem,6vw,4.75rem)] font-bold leading-[1.05]">
            {t("headingPart1")}{" "}
            <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
              {t("headingHighlight")}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.8] text-white/70">{t("description")}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10">
          <a
            href="https://github.com/tabi-project"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-9 py-4 font-bold text-brand-primary animate-pulse-ring transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Github size={20} />
            {t("button")}
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
