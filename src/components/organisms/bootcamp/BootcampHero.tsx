"use client";

import { useState } from "react";  
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";  // ← import


/* ── Inline SVG logos ─────────────────────────────────────────────── */
function VueLogo() {
  return (
    <svg
      viewBox="0 0 261.76 226.69"
      className="w-full h-full"
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

function NodeLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2L2 9.5v13L16 30l14-7.5v-13L16 2z" fill="#539E43" />
      <path
        d="M16 6.5L6 12v8l10 5.5 10-5.5v-8L16 6.5z"
        fill="#fff"
        opacity=".15"
      />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontWeight="bold"
        fontFamily="monospace"
      >
        JS
      </text>
    </svg>
  );
}

function SailsLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 4 L36 34 L4 34 Z" fill="#71286F" opacity="0.85" />
      <path d="M20 4 L36 34 L20 28 Z" fill="#c040a0" opacity="0.7" />
    </svg>
  );
}

export default function BootcampHero() {
  const t = useTranslations("Bootcamp.hero");
  const trust = t.raw("trust") as Array<{ value: string; label: string }>;
  const [modalOpen, setModalOpen] = useState(false); 

  return (
    <section className="relative w-full bg-white overflow-hidden pt-28 pb-0 md:pt-32">
      {/* background dots & gradient unchanged */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(113,40,111,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 60%, white 100%)"
        }}
      />

      <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-350 mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center min-h-[85vh] pb-16">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: "rgba(113,40,111,0.07)",
                  border: "1px solid rgba(113,40,111,0.18)",
                  color: "#71286F"
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                {t("badge")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-extrabold text-[clamp(2.8rem,5.5vw,4.5rem)] leading-tight tracking-tight text-[#1a1a2e] mb-6"
            >
              {t.rich("line1")}
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #71286F 0%, #c040a0 100%)"
                }}
              >
                {t("line2")}
              </span>
              <br />
              {t("line3")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-base text-[#555] leading-relaxed max-w-lg mb-2"
            >
              {t.rich("subheadline", {
                semibold: (chunks) => (
                  <span className="font-semibold text-[#1a1a2e]">{chunks}</span>
                )
              })}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.33 }}
              className="text-sm text-[#888] leading-relaxed max-w-md mb-10"
            >
              {t("schedule")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] hover:shadow-xl cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #71286F, #c040a0)",
                  boxShadow: "0 6px 24px rgba(113,40,111,0.35)",
                  color: "white"
                }}
              >
                {t("cta")}
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("curriculum")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-xl font-bold text-sm tracking-wide border-2 transition-all duration-200 hover:bg-[rgba(113,40,111,0.05)] cursor-pointer"
                style={{
                  color: "#71286F",
                  borderColor: "rgba(113,40,111,0.28)"
                }}
              >
                {t("ctaSecondary")}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-8 pt-8 border-t border-[#f0e8f0]"
            >
              {trust.map((tStat, i) => (
                <motion.div
                  key={tStat.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                >
                  <p className="text-2xl font-extrabold text-[#1a1a2e] leading-none">
                    {tStat.value}
                  </p>
                  <p className="text-[10px] text-[#999] uppercase tracking-widest mt-1 font-semibold">
                    {tStat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT – visual bento (unchanged except for translated texts) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                height: "520px",
                boxShadow: "0 32px 80px rgba(113,40,111,0.2)"
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573167101669-476636b96cea?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={t("heroImageAlt")}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(113,40,111,0.5) 0%, rgba(192,64,160,0.2) 100%)"
                }}
              />
              <div className="absolute bottom-4 left-0 right-0 p-7">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5">
                  <p
                    className="text-[10px] font-black uppercase tracking-widest mb-1"
                    style={{ color: "#71286F" }}
                  >
                    {t("heroCardLabel")}
                  </p>
                  <p className="text-[#1a1a2e] font-black text-xl leading-tight">
                    {t("heroCardDetails")}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-5 shadow-xl border border-[#f0e8f0]"
              style={{ minWidth: "160px" }}
            >
              <p
                className="text-[10px] font-black uppercase tracking-widest mb-2"
                style={{ color: "#71286F" }}
              >
                {t("floatingStartsLabel")}
              </p>
              <p className="text-[#1a1a2e] font-black text-2xl leading-none">
                {t("floatingStartsDate")}
              </p>
              <p className="text-[#aaa] text-xs mt-1">
                {t("floatingStartsSubtext")}
              </p>
            </motion.div>

            {/* Tech stack pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-7 -left-32 bg-white rounded-2xl px-5 py-4 shadow-xl border border-[#f0e8f0] flex items-center gap-3"
            >
              <div className="w-7 h-7">
                <VueLogo />
              </div>
              <div className="w-7 h-7">
                <NodeLogo />
              </div>
              <div className="relative w-10 h-5">
                <Image
                  src="/tailwind.svg"
                  alt="Tailwind CSS"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-6 h-6">
                <SailsLogo />
              </div>
              <span className="text-[11px] font-black text-[#888] ml-1">
                {t("stackLabel")}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Application modal */}
      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}