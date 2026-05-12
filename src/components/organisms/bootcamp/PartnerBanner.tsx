"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { withBasePath } from "@/constants/paths";
import { useTranslations } from "next-intl";

export default function PartnerBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const t = useTranslations("Bootcamp.partnerBanner");
  const benefits = t.raw("benefits") as string[];
  const stats = t.raw("stats") as Array<{ v: string; l: string }>;

  return (
    <section className="w-full bg-white py-20">
      <div className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto" ref={ref}>
        <div
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0 rounded-3xl overflow-hidden"
          style={{
            boxShadow: "0 16px 60px rgba(113,40,111,0.12)",
            border: "1px solid rgba(113,40,111,0.12)"
          }}
        >
          {/* Left: image panel */}
          <div className="relative" style={{ minHeight: "340px" }}>
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt="Partnership collaboration"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(113,40,111,0.85) 0%, rgba(192,64,160,0.65) 100%)"
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10">
              <div className="bg-white/95 rounded-2xl px-8 py-5 shadow-xl flex items-center gap-6">
                <div className="relative h-9 w-28">
                  <Image
                    src={withBasePath("/tabi-logo.svg")}
                    alt="Tabi Academy"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-px h-8 bg-[#eee]" />
                <div className="relative h-11 w-32">
                  <Image
                    src="/partners/sailscast-full-rm.png"
                    alt="Sailscasts"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-white/80 text-sm font-light text-center max-w-xs">
                {t("overlayText")}
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="bg-[#fdf7ff] p-10 md:p-14 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-semibold text-brand-primary uppercase tracking-wide mb-5"
            >
              {t("badge")}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 }}
              className="font-extrabold tracking-tight text-[clamp(1.6rem,2.8vw,2.4rem)] text-[#1a1a2e] leading-tight mb-5"
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

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-base text-[#666] leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="space-y-3 mb-8"
            >
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-sm font-bold text-brand-primary">
                    ✓
                  </span>
                  <p className="text-sm text-[#555] font-light">{item}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.38 }}
              className="grid grid-cols-3 gap-3"
            >
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="text-center py-4 px-3 rounded-xl border border-[#f0e8f0] bg-white"
                >
                  <p className="font-extrabold text-[#1a1a2e] text-sm">{s.v}</p>
                  <p className="text-[10px] text-[#999] uppercase tracking-widest mt-0.5 font-semibold">
                    {s.l}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
