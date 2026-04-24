"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { MapPin, Globe } from "lucide-react";
import CityRequestModal from "@/components/molecules/CityRequestModal";

export default function TWNCityRequest() {
  const t = useTranslations("TWN.cityRequest");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2D102D] rounded-[4rem] p-8 md:p-20 relative overflow-hidden shadow-[0_20px_50px_rgba(45,16,45,0.3)]">
          <div className="absolute top-0 right-0 w-125 h-125 bg-brand-primary/10 blur-[150px] rounded-full -mr-40 -mt-40 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-black/30 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em]">
                <MapPin
                  size={14}
                  className="text-brand-primary fill-brand-primary/20"
                />
                {t("badge")}
              </div>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                {t("headingLine1")} <br />
                <span className="text-brand-primary font-serif italic lowercase tracking-normal">
                  {t("headingHighlight")}
                </span>
              </h3>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                {t("description")}
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-[#1a091a]/60 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-14 flex flex-col items-center justify-center text-center shadow-2xl">
                <div className="w-24 h-24 bg-brand-primary rounded-tabi-card flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(113,40,111,0.4)] animate-bounce">
                  <Globe size={44} strokeWidth={2.5} />
                </div>
                <h4 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {t("cardTitle")}
                </h4>
                <p className="text-white text-base md:text-lg mb-10 max-w-xs opacity-90 font-medium leading-relaxed">
                  {t("cardText")}
                </p>
                <Button
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto bg-brand-primary hover:bg-white hover:text-[#2D102D] text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1"
                >
                  {t("cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {modalOpen && <CityRequestModal onClose={() => setModalOpen(false)} />}
      </div>
    </section>
  );
}
