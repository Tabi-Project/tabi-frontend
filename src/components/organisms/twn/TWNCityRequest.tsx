"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Globe, MapPin } from "lucide-react";
import CityRequestModal from "@/components/molecules/CityRequestModal";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

// A few cities orbiting the globe — purely decorative
const CITIES = ["Lagos", "Accra", "Nairobi", "Kigali", "Cotonou", "Abuja"];

export default function TWNCityRequest() {
  const t = useTranslations("TWN.cityRequest");
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Reveal y={40} scale={0.97}>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-tabi-night p-8 md:p-16 lg:p-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_100%_0%,rgba(208,96,176,0.35)_0%,transparent_60%)]" />
            <Sparkle className="absolute left-[8%] top-12" size={28} />

            <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
              <div className="text-center md:text-left">
                <Eyebrow tone="plum">
                  <MapPin size={14} className="text-tabi-tan" />
                  {t("badge")}
                </Eyebrow>
                <h3 className="mt-7 text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.08] text-white">
                  {t("headingLine1")}
                  <br />
                  <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text font-serif font-normal italic text-transparent">
                    {t("headingHighlight")}
                  </span>
                </h3>
                <p className="mx-auto mt-6 max-w-md text-lg leading-[1.8] text-white/75 md:mx-0">{t("description")}</p>
              </div>

              <div className="relative flex flex-col items-center rounded-[2rem] bg-white/[0.06] p-10 text-center ring-1 ring-white/10 backdrop-blur-xl md:p-14">
                {/* Globe with an orbit of city tags */}
                <div className="relative mb-10 h-40 w-40">
                  <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                  <motion.div
                    aria-hidden
                    className="absolute inset-0"
                    animate={reduced ? undefined : { rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  >
                    {CITIES.map((city, i) => {
                      const a = (i / CITIES.length) * Math.PI * 2;
                      return (
                        <motion.span
                          key={city}
                          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70"
                          style={{ left: `${(50 + 50 * Math.cos(a)).toFixed(2)}%`, top: `${(50 + 50 * Math.sin(a)).toFixed(2)}%` }}
                          animate={reduced ? undefined : { rotate: -360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                          {city}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                  <span className="absolute inset-7 flex items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_0_40px_rgba(208,96,176,0.5)]">
                    <Globe size={42} strokeWidth={2} className={reduced ? "" : "animate-spin-slow"} />
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white md:text-3xl">{t("cardTitle")}</h4>
                <p className="mt-3 max-w-xs text-base leading-relaxed text-white/80">{t("cardText")}</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="group mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-brand-primary animate-pulse-ring transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {t("cta").replace(/\s*→\s*$/, "")}
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      {modalOpen && <CityRequestModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
