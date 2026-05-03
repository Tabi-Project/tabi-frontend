"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { Star, Calendar, Info } from "lucide-react";
import CityRequestModal from "@/components/molecules/CityRequestModal";
import Image from "next/image";

export default function TWNNextEdition() {
  const t = useTranslations("TWN.nextEdition");
  const [modalOpen, setModalOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "fr">("en");

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#FAF7FA] border border-brand-primary/5 rounded-[4rem] p-8 md:p-16 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text & Details */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">
                  <Star size={14} fill="currentColor" /> {t("badge")}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D102D] leading-tight">
                  {t("headingLine1")} <br />
                  <span className="text-brand-primary italic font-serif lowercase">
                    {t("headingHighlight")}
                  </span>
                </h2>
                <p className="text-gray-500 text-lg font-medium max-w-md">
                  {t("description")}
                </p>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-brand-primary rounded-2xl flex flex-col items-center justify-center text-white shrink-0">
                  <span className="text-[8px] font-black uppercase">{t("month")}</span>
                  <span className="text-2xl font-black leading-none">{t("day")}</span>
                </div>
                <div>
                  <p className="text-[#1a1a2e] font-bold">{t("eventTitle")}</p>
                  <p className="text-sm text-gray-500">{t("eventTime")}</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto bg-[#2D102D] hover:bg-brand-primary text-white px-10 py-6 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  {t("cta")} <Calendar size={18} />
                </Button>

                <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium">
                  <Info size={14} className="text-brand-primary" />
                  <span>{t("footnote")}</span>
                </div>
              </div>
            </div>

            {/* Right: The Flyer with Language Toggle */}
            <div className="relative order-1 lg:order-2 group">
              <div className="relative aspect-4/5 w-full max-w-sm mx-auto overflow-hidden rounded-4xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={
                    language === "en"
                      ? "/flyers/cotonou-en.png"
                      : "/flyers/cotonou-fr.png"
                  }
                  alt="Tabi Women Network Cotonou Flyer"
                  fill
                  className="object-cover transition-opacity duration-500"
                />

                {/* Language Switcher Overlay */}
                <div className="absolute top-4 right-4 flex bg-white/20 backdrop-blur-xl border border-white/20 p-1 rounded-full">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-4 py-1 text-[10px] font-black rounded-full transition-all ${language === "en" ? "bg-white text-brand-primary" : "text-white"}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage("fr")}
                    className={`px-4 py-1 text-[10px] font-black rounded-full transition-all ${language === "fr" ? "bg-white text-brand-primary" : "text-white"}`}
                  >
                    FR
                  </button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -z-10 inset-0 bg-brand-primary/20 blur-[80px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && <CityRequestModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}