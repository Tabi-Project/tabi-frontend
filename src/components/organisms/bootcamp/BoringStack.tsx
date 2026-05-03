"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/* ── Tech Logo SVGs ─────────────────────────────────────────────── */
function VueLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.87}
      viewBox="0 0 261.76 226.69"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.688L261.742.001z"
        fill="#41b883"
      />
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.525 136.01L209.4.001z"
        fill="#34495e"
      />
    </svg>
  );
}

function TailwindLogo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <Image
        src="/tailwind.svg" // or withBasePath("/tailwind.svg")
        alt="Tailwind CSS"
        fill
        className="object-contain"
      />
    </div>
  );
}

function InertiaLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#9553E9" />
      <path d="M10 11h6l6 5-6 5h-6l6-5z" fill="white" />
    </svg>
  );
}

function SailsLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2 L38 38 L2 38 Z" fill="#71286F" />
      <path d="M20 2 L38 38 L20 30 Z" fill="#c040a0" opacity="0.8" />
      <line
        x1="20"
        y1="2"
        x2="20"
        y2="38"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}

export default function BoringStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Bootcamp.boringStack");
  const items = t.raw("items") as Array<{ role: string; desc: string }>;

  const STACK = [
    {
      Logo: VueLogo,
      name: "Vue.js",
      version: "v3",
      color: "#41b883",
      bg: "rgba(65,184,131,0.06)",
      border: "rgba(65,184,131,0.2)"
    },
    {
      Logo: SailsLogo,
      name: "Sails.js",
      version: "v1",
      color: "#71286F",
      bg: "rgba(113,40,111,0.06)",
      border: "rgba(113,40,111,0.2)"
    },
    {
      Logo: InertiaLogo,
      name: "Inertia.js",
      version: "v2",
      color: "#9553E9",
      bg: "rgba(149,83,233,0.06)",
      border: "rgba(149,83,233,0.2)"
    },
    {
      Logo: TailwindLogo,
      name: "Tailwind CSS",
      version: "v4",
      color: "#38bdf8",
      bg: "rgba(56,189,248,0.06)",
      border: "rgba(56,189,248,0.2)"
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="px-6 sm:px-10 lg:px-16 max-w-350 mx-auto" ref={ref}>
        {/* Header row */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end mb-16">
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
                {t("headingHighlight")}
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-base text-[#666] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t("description") }}
            />
          </motion.div>
        </div>

        {/* Stack cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STACK.map((tech, i) => {
            const trans = items[i];
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
                className="group rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                style={{ background: tech.bg, borderColor: tech.border }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <tech.Logo size={32} />
                  <div>
                    <p
                      className="text-[9px] uppercase tracking-[0.2em] font-black"
                      style={{ color: tech.color }}
                    >
                      {trans?.role}
                    </p>
                    <p className="font-bold text-[#1a1a2e] text-base leading-tight">
                      {tech.name}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#777] leading-relaxed">
                  {trans?.desc}
                </p>
                <div className="absolute top-4 right-4">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: `${tech.color}18`, color: tech.color }}
                  >
                    {tech.version}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat band */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65 }}
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(113,40,111,0.06), rgba(192,64,160,0.04))",
            border: "1px solid rgba(113,40,111,0.12)"
          }}
        >
          <div>
            <p className="text-5xl md:text-7xl font-extrabold text-[#1a1a2e] leading-none">
              {t("bottomStatLine1")}
            </p>
            <p
              className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent leading-none"
              style={{
                backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
              }}
            >
              {t("bottomStatLine2")}
            </p>
          </div>
          <div className="max-w-xs">
            <p className="text-base text-[#555] leading-relaxed">
              {t("bottomStatDesc")}
            </p>
          </div>
          <div className="flex gap-4">
            <VueLogo size={40} />
            <SailsLogo size={40} />
            <InertiaLogo size={40} />
            <TailwindLogo size={40} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}