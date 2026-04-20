"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import RegistrationModal from "@/components/molecules/RegistrationModal";

export default function AIBusinessOutcomes() {
  const t = useTranslations("AIBusiness.outcomes");
  const [formOpen, setFormOpen] = useState(false);

  const OUTCOMES = [
    {
      number: "01",
      icon: "🧠",
      titleKey: "items.fluency.title",
      descriptionKey: "items.fluency.description"
    },
    {
      number: "02",
      icon: "🎨",
      titleKey: "items.brand.title",
      descriptionKey: "items.brand.description"
    },
    {
      number: "03",
      icon: "🌐",
      titleKey: "items.website.title",
      descriptionKey: "items.website.description"
    },
    {
      number: "04",
      icon: "⚡",
      titleKey: "items.agent.title",
      descriptionKey: "items.agent.description"
    },
    {
      number: "05",
      icon: "🏆",
      titleKey: "items.capstone.title",
      descriptionKey: "items.capstone.description"
    },
    {
      number: "06",
      icon: "📜",
      titleKey: "items.certificate.title",
      descriptionKey: "items.certificate.description"
    }
  ];

  return (
    <>
      <section className="w-full bg-[#fdf7ff]">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              {t("badge")}
            </span>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#666] leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUTCOMES.map((outcome, i) => (
              <div
                key={outcome.number}
                className="group relative flex flex-col items-center text-center rounded-4xl p-8 bg-[#FFF5FF99]/40 border border-white/40 backdrop-blur-3xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  boxShadow: "0px 4px 12px 2px #3737371F",
                  transitionDelay: `${i * 40}ms`
                }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                  {outcome.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">
                  {t(outcome.titleKey)}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {t(outcome.descriptionKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center text-center bg-white/60 border border-white/80 rounded-[3rem] p-10 md:p-16 shadow-xl shadow-brand-primary/5">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mb-4">
              {t("ctaHeading")}
            </h3>
            <p className="text-[#555] max-w-xl mb-10 text-sm md:text-base leading-relaxed">
              {t("ctaDescription")}
            </p>
            <div className="flex flex-col items-center gap-5">
              <Button
                variant="primary"
                size="lg"
                className="px-12 py-7 text-lg shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform cursor-pointer"
                onClick={() => setFormOpen(true)}
              >
                {t("ctaButton")}
              </Button>
              <div className="flex items-center gap-2 text-brand-primary font-semibold text-xs uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                {t("closingSoon")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
