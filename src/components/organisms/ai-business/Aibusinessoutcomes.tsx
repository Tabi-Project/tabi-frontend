"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Brain, Globe, Palette, ScrollText, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";
import RegistrationModal from "@/components/molecules/RegistrationModal";

const OUTCOMES = [
  { key: "fluency", icon: Brain, tint: "bg-tabi-pink", ink: "text-brand-primary", span: "lg:col-span-2" },
  { key: "brand", icon: Palette, tint: "bg-tabi-mint", ink: "text-[#2F8F5B]", span: "" },
  { key: "website", icon: Globe, tint: "bg-tabi-cream", ink: "text-[#B9772E]", span: "" },
  { key: "agent", icon: Zap, tint: "bg-tabi-lilac/60", ink: "text-brand-primary", span: "" },
  { key: "capstone", icon: Trophy, tint: "bg-tabi-peach", ink: "text-tabi-brown", span: "" },
  { key: "certificate", icon: ScrollText, tint: "bg-tabi-blush", ink: "text-brand-primary", span: "lg:col-span-2" }
] as const;

export default function AIBusinessOutcomes() {
  const t = useTranslations("AIBusiness.outcomes");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <SectionHeading
            align="center"
            eyebrow={t("badge")}
            title={t("heading")}
            description={t("description")}
            className="mb-14 lg:mb-16"
          />

          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {OUTCOMES.map(({ key, icon: Icon, tint, ink, span }, i) => (
              <StaggerItem key={key} className={span} hoverLift={6}>
                <article
                  className={`group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[2rem] p-7 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(113,40,111,0.5)] sm:p-8 ${tint}`}
                >
                  <span className="pointer-events-none absolute -right-2 -top-4 select-none text-[6.5rem] font-bold leading-none text-black/[0.04] transition-transform duration-700 group-hover:-translate-y-2">
                    0{i + 1}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110 ${ink}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-auto pt-10 text-xl font-bold text-tabi-ink">{t(`items.${key}.title`)}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-tabi-body">
                    {t(`items.${key}.description`)}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* CTA band */}
          <Reveal className="mt-16 lg:mt-20" scale={0.97}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-tabi-lilac/60 px-8 py-12 text-center sm:px-16 sm:py-16">
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,#000_80%)]" />
              <Sparkle className="absolute left-[12%] top-10" size={32} />
              <Sparkle className="absolute bottom-10 right-[14%]" size={20} delay={1.2} color="var(--color-brand-orchid)" />

              <h3 className="relative text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-tabi-ink">
                <GradientText>{t("ctaHeading")}</GradientText>
              </h3>
              <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-tabi-body">
                {t("ctaDescription")}
              </p>
              <div className="relative mt-9 flex flex-col items-center gap-5">
                <Button variant="primary" size="lg" onClick={() => setFormOpen(true)}>
                  {t("ctaButton")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                  </span>
                  {t("closingSoon")}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
