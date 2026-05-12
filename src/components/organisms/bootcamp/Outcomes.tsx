"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Rocket,
  Bot,
  CreditCard,
  FolderOpen,
  Route,
  Award
} from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [
  <Rocket size={28} strokeWidth={1.5} key="rocket" />,
  <Bot size={28} strokeWidth={1.5} key="bot" />,
  <CreditCard size={28} strokeWidth={1.5} key="card" />,
  <FolderOpen size={28} strokeWidth={1.5} key="folder" />,
  <Route size={28} strokeWidth={1.5} key="route" />,
  <Award size={28} strokeWidth={1.5} key="award" />
];

const IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  "https://images.unsplash.com/photo-1596843720750-7de9329da5d7?w=500",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500",
  "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80",
  "https://images.unsplash.com/photo-1638636241638-aef5120c5153?q=80&w=870"
];

export default function Outcomes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Bootcamp.outcomes");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto">
        <div
          className="grid lg:grid-cols-[1fr_1fr] gap-12 items-end mb-16"
          ref={ref}
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-4"
            >
              {t("badge")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-extrabold tracking-tight text-[clamp(2rem,3.8vw,3rem)] text-[#1a1a2e] leading-tight"
            >
              {t("heading")}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
                }}
              >
                {t("highlight")}
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-[#666] leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.09 }}
              className="group rounded-2xl overflow-hidden border border-[#f0e8f0] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={IMAGES[i]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,26,46,0.7) 0%, rgba(113,40,111,0.2) 100%)"
                  }}
                />
                <span className="absolute top-4 left-4 text-white">
                  {ICONS[i]}
                </span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-[#1a1a2e] font-extrabold text-base mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 rounded-2xl overflow-hidden relative"
          style={{ height: "220px" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80"
            alt="Team of developers"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(113,40,111,0.88), rgba(192,64,160,0.75))"
            }}
          >
            <div className="text-center px-6">
              <p className="text-white font-extrabold text-3xl md:text-4xl leading-tight">
                {t("closingTitle")}{" "}
                <span className="text-white/70">{t("closingHighlight")}</span>
              </p>
              <p className="text-white/70 text-sm mt-2 font-light max-w-md mx-auto">
                {t("closingDesc")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
