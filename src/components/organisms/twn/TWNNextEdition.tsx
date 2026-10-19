"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { Star, Calendar, Info } from "lucide-react";
import CityRequestModal from "@/components/molecules/CityRequestModal";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import { TiltCard } from "@/components/atoms/TiltCard";

export default function TWNNextEdition() {
  const t = useTranslations("TWN.nextEdition");
  const [modalOpen, setModalOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-350 mx-auto px-6 sm:px-12 lg:px-20">
        <Reveal y={40} scale={0.97}>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-tabi-blush p-8 md:p-16">
          <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-orchid/15 blur-[80px]" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text & Details */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <Eyebrow tone="white">
                  <Star size={13} fill="currentColor" /> {t("badge")}
                </Eyebrow>
                <h2 className="text-4xl md:text-5xl font-bold text-tabi-ink leading-tight">
                  {t("headingLine1")} <br />
                  <span className="text-gradient-brand font-serif lowercase">
                    {t("headingHighlight")}
                  </span>
                </h2>
                <p className="text-tabi-body text-lg font-medium max-w-md">
                  {t("description")}
                </p>
              </div>

              <div className="flex items-start gap-6 rounded-[1.5rem] bg-white p-6">
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_10px_24px_-10px_rgba(113,40,111,0.7)]">
                  <span className="text-[10px] font-bold uppercase">{t("month")}</span>
                  <span className="text-2xl font-bold leading-none">{t("day")}</span>
                </div>
                <div>
                  <p className="text-tabi-ink font-bold">{t("eventTitle")}</p>
                  <p className="text-sm text-tabi-body">{t("eventTime")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => setModalOpen(true)}
                  size="lg"
                  className="w-full md:w-auto"
                >
                  {t("cta")} <Calendar size={18} />
                </Button>

                <div className="flex items-center gap-2 text-[11px] text-tabi-body/70 font-medium">
                  <Info size={14} className="text-brand-primary" />
                  <span>{t("footnote")}</span>
                </div>
              </div>
            </div>

            {/* Right: The Flyer with Language Toggle */}
            <div className="relative order-1 lg:order-2 group">
              <Sparkle className="absolute -top-4 right-[12%] z-10" size={40} />
              <TiltCard max={8} className="mx-auto w-full max-w-sm rounded-[2rem]">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] border-[3px] border-brand-primary shadow-[0_40px_80px_-40px_rgba(113,40,111,0.6)]">
                <Image
                  src={
                    language === "en"
                      ? "/flyers/cotonou-en.png"
                      : "/flyers/cotonou-fr.png"
                  }
                  alt="Tabi Women Network Cotonou Flyer"
                  fill
                  sizes="384px"
                  className="object-cover transition-opacity duration-500"
                />

                {/* Language switcher with a sliding pill */}
                <LayoutGroup id="flyer-lang">
                  <div className="absolute right-4 top-4 flex rounded-full bg-white/25 p-1 ring-1 ring-white/30 backdrop-blur-xl">
                    {(["en", "fr"] as const).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setLanguage(lang)}
                        aria-pressed={language === lang}
                        className={`relative cursor-pointer rounded-full px-4 py-1 text-[11px] font-bold uppercase transition-colors ${language === lang ? "text-brand-primary" : "text-white"}`}
                      >
                        {language === lang && (
                          <motion.span
                            layoutId="flyer-lang-pill"
                            className="absolute inset-0 rounded-full bg-white"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative">{lang}</span>
                      </button>
                    ))}
                  </div>
                </LayoutGroup>
              </div>
              </TiltCard>

              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 bg-brand-primary/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </div>
        </div>

        </Reveal>
      </div>

      {modalOpen && <CityRequestModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}