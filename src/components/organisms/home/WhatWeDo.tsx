"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"; 
import { Button } from "@/components/atoms/Button";
import { motion, Variants } from "framer-motion";
import { BookOpen, Users, Lightbulb, GraduationCap } from "lucide-react";

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

export default function WhatWeDo() {
  const t = useTranslations("WhatWeDo");

  const MISSIONS = [
    {
      id: "empower",
      icon: BookOpen,
      titleKey: "missions.empower.title",
      descriptionKey: "missions.empower.description"
    },
    {
      id: "unite",
      icon: Users,
      titleKey: "missions.unite.title",
      descriptionKey: "missions.unite.description"
    },
    {
      id: "innovate",
      icon: Lightbulb,
      titleKey: "missions.innovate.title",
      descriptionKey: "missions.innovate.description"
    },
    {
      id: "educate",
      icon: GraduationCap,
      titleKey: "missions.educate.title",
      descriptionKey: "missions.educate.description"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 flex pointer-events-none" aria-hidden>
        <div className="w-[64.17%] bg-brand-surface" />
        <div className="w-[35.76%] bg-white/75" />
      </div>

      {/* Subtle radial texture */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 50%, #e9d5f5 0%, transparent 70%)"
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-350 px-6 sm:px-10 lg:px-20 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="mb-6 inline-flex items-center rounded-full border border-brand-primary/40 bg-white px-4 py-1.5 text-xs font-medium text-brand-primary"
          >
            {t("badge")}
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold leading-none tracking-tight text-[#1a1a2e]"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-[#555] text-base leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link href="/about">
              <Button variant="outline" size="lg" className="bg-white">
                {t("cta")}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: 2×2 card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {MISSIONS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0px 10px 20px 2px #37373715" }}
                className="group relative flex flex-col items-center text-center rounded-4xl p-8 bg-[#FFF5FF99]/40 border border-white/40 backdrop-blur-3xl cursor-pointer transition-colors duration-300 hover:border-brand-primary/20"
                style={{
                  boxShadow: "0px 4px 12px 2px #3737371F"
                }}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {t(item.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
