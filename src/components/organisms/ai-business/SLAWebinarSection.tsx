"use client";

import { useState, useEffect, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";
import Image from "next/image";
import SLAWebinarModal from "@/components/molecules/SLAWebinarModal";
import { usePathname } from "@/i18n/navigation";
import { withBasePath } from "@/constants/paths";
import { Reveal, Stagger, StaggerItem, EASE_TABI } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";

export const SLAWebinarSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("AIBusiness.SLAWebinar");
  const agendaItems = t.raw("agendaItems") as Array<{
    time: string;
    text: string;
  }>;
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.endsWith("/sla")) {
      setTimeout(() => {
        document.getElementById("sla")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname]);

  return (
    <section id="sla" className="relative overflow-hidden bg-tabi-night py-24 text-white lg:py-28">
      {/* plum glow + halftone */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_20%,rgba(208,96,176,0.35)_0%,transparent_60%),radial-gradient(50%_60%_at_0%_100%,rgba(113,40,111,0.6)_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1.5px)] [background-size:14px_14px] [mask-image:radial-gradient(circle_at_top_left,#000,transparent_70%)]"
      />
      <Sparkle className="absolute right-[10%] top-16" size={30} />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal y={12}>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-lg">
                <Image
                  src={withBasePath("/footer-logo.svg")}
                  alt="Tabi Academy"
                  width={60}
                  height={24}
                  className="h-7 w-auto object-contain"
                />
                <span className="text-lg font-bold text-tabi-ink">×</span>
                <Image
                  src={withBasePath("/partners/sla.png")}
                  alt="She Leads Africa"
                  width={80}
                  height={24}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.12]">
                {t("headline")}{" "}
                <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                  {t("headlineHighlight")}
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-lg text-lg leading-[1.75] text-white/70">{t("description")}</p>
            </Reveal>

            <Stagger className="mt-9 grid gap-3 sm:grid-cols-3" stagger={0.08} delay={0.15}>
              <InfoItem icon={<Calendar size={18} />} label={t("dateLabel")} value={t("dateValue")} />
              <InfoItem icon={<Clock size={18} />} label={t("timeLabel")} value={t("timeValue")} />
              <InfoItem icon={<Video size={18} />} label={t("platformLabel")} value={t("platformValue")} />
            </Stagger>

            <Reveal delay={0.25} className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-brand-primary shadow-[0_14px_34px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-tabi-pink active:scale-95"
              >
                {t("cta")}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>

          {/* Agenda as a vertical timeline */}
          <Reveal x={30} y={0} delay={0.1}>
            <div className="rounded-[2rem] bg-white/[0.06] p-8 ring-1 ring-white/10 backdrop-blur-md sm:p-10">
              <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.2em] text-white/60">{t("agendaTitle")}</h3>
              <ol className="relative">
                <motion.span
                  aria-hidden
                  className="absolute bottom-3 left-[3.15rem] top-3 w-px origin-top bg-gradient-to-b from-tabi-tan via-brand-orchid to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.4, ease: EASE_TABI }}
                />
                {agendaItems.map((item, i) => (
                  <motion.li
                    key={item.text}
                    className="relative flex items-center gap-6 py-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: EASE_TABI }}
                  >
                    <span className="w-14 shrink-0 text-right font-mono text-xs font-bold text-tabi-tan">{item.time}</span>
                    <span className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-white ring-4 ring-tabi-night" />
                    <p className="text-sm text-white/85">{item.text}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>

      {isModalOpen && <SLAWebinarModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

const InfoItem = ({ icon, label, value }: { icon: ReactNode; label: string; value: string }) => (
  <StaggerItem>
    <div className="flex h-full flex-col gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-tabi-tan">{icon}</span>
      <span>
        <span className="block text-[11px] uppercase tracking-widest text-white/50">{label}</span>
        <span className="mt-0.5 block text-sm font-bold">{value}</span>
      </span>
    </div>
  </StaggerItem>
);

export default SLAWebinarSection;
