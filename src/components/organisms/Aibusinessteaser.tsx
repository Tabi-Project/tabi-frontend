"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Palette, Globe, Zap } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function AIBusinessTeaser() {
  const t = useTranslations("AIBusinessTeaser");

  // Define highlights with translation keys
  const HIGHLIGHTS = [
    {
      value: t("highlights.training.value"),
      label: t("highlights.training.label")
    },
    { value: t("highlights.tools.value"), label: t("highlights.tools.label") },
    {
      value: t("highlights.participants.value"),
      label: t("highlights.participants.label")
    },
    {
      value: t("highlights.handsOn.value"),
      label: t("highlights.handsOn.label")
    }
  ];

  // Define pillars with icons and translation keys
  const PILLARS = [
    {
      icon: Lightbulb,
      titleKey: "pillars.strategy.title",
      descriptionKey: "pillars.strategy.description"
    },
    {
      icon: Palette,
      titleKey: "pillars.design.title",
      descriptionKey: "pillars.design.description"
    },
    {
      icon: Globe,
      titleKey: "pillars.build.title",
      descriptionKey: "pillars.build.description"
    },
    {
      icon: Zap,
      titleKey: "pillars.automate.title",
      descriptionKey: "pillars.automate.description"
    }
  ];

  return (
    <section className="w-full bg-brand-surface overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* Top: Label + Heading + Subtext */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Left */}
          <motion.div variants={itemVariants}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              {t("badge")}
            </span>

            <h2 className="text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold tracking-tight text-[#1a1a2e] leading-[1.08] mt-4">
              {t("headlinePart1")}
              <br />
              <span className="text-brand-primary italic">
                {t("headlinePart2")}
              </span>
              <br />
              {t("headlinePart3")}
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex flex-col items-start lg:items-end gap-6"
            variants={itemVariants}
          >
            <p className="text-base text-[#666] leading-relaxed max-w-md lg:text-right">
              {t("description")}
            </p>
            <Link href="/ai-for-businesses">
              <Button variant="primary" size="lg">
                {t("cta.primary")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 rounded-3xl overflow-hidden border border-brand-primary/10 bg-white mb-12"
          style={{ boxShadow: "0px 4px 24px 0px #71286F0F" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.value}
              className={`flex flex-col items-center justify-center text-center px-6 py-7
                ${i < HIGHLIGHTS.length - 1 ? "border-r border-brand-primary/10" : ""}
                ${i < 2 ? "border-b md:border-b-0 border-brand-primary/10" : ""}
              `}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-none">
                {h.value}
              </p>
              <p className="mt-1.5 text-xs text-[#888] font-medium">
                {h.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.titleKey}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 20px 2px #37373715" }}
                className="group flex flex-col items-center text-center rounded-4xl p-8 bg-[#FFF5FF99]/40 border border-white/40 backdrop-blur-3xl transition-colors duration-300 hover:border-brand-primary/20 cursor-pointer"
                style={{
                  boxShadow: "0px 4px 12px 2px #3737371F"
                }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">
                  {t(pillar.titleKey)}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {t(pillar.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-12 rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{
            background: "linear-gradient(135deg, #71286F10 0%, #a855f710 100%)",
            border: "1px solid rgba(113,40,111,0.12)"
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-sm font-bold text-[#1a1a2e] mb-0.5">
              {t("footer.headline")}
            </p>
            <p className="text-xs text-[#888]">{t("footer.subtext")}</p>
          </div>
          <Link href="/ai-for-businesses">
            <Button variant="outline" size="md">
              {t("cta.secondary")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}