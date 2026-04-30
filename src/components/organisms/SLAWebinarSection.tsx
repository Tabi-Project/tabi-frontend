"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Zap, ArrowRight } from "lucide-react";
import SLAWebinarModal from "@/components/molecules/SLAWebinarModal";

export const SLAWebinarSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("AIBusiness.SLAWebinar");
  const agendaItems = t.raw("agendaItems") as Array<{
    time: string;
    text: string;
  }>;

  useEffect(() => {
    if (window.location.hash === "#sla") {
      document.getElementById("sla")?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="sla"
      className="py-24 bg-[#2D102D] text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-bold mb-6 text-brand-primary-light">
              <Zap size={14} className="text-yellow-400" />
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("headline")} <br />
              <span className="text-brand-primary-light font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-brand-surface">
                {t("headlineHighlight")}
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              {t("description")}
            </p>
            <div className="space-y-4 mb-10">
              <InfoItem
                icon={<Calendar size={18} />}
                label={t("dateLabel")}
                value={t("dateValue")}
              />
              <InfoItem
                icon={<Clock size={18} />}
                label={t("timeLabel")}
                value={t("timeValue")}
              />
              <InfoItem
                icon={<Video size={18} />}
                label={t("platformLabel")}
                value={t("platformValue")}
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-[#2D102D] rounded-full font-bold hover:bg-brand-surface transition-all shadow-xl active:scale-95"
            >
              {t("cta")}{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-tabi-card backdrop-blur-md">
            <h3 className="text-lg font-bold mb-6 opacity-80 uppercase tracking-widest">
              {t("agendaTitle")}
            </h3>
            <div className="space-y-6 text-gray-300">
              {agendaItems.map((item) => (
                <AgendaItem key={item.text} time={item.time} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <SLAWebinarModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

const InfoItem = ({ icon, label, value }: any) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary-light">
      {icon}
    </div>
    <div>
      <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest leading-none mb-1">
        {label}
      </p>
      <p className="font-bold text-sm">{value}</p>
    </div>
  </div>
);

const AgendaItem = ({ time, text }: any) => (
  <div className="flex gap-4 items-start">
    <span className="text-brand-primary-light font-mono font-bold text-xs bg-white/5 px-2 py-1 rounded shrink-0">
      {time}
    </span>
    <p className="text-sm">{text}</p>
  </div>
);
