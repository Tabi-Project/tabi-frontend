"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";

export default function BootcampCTA() {
  const t = useTranslations("Bootcamp.cta");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="cta-section"
        className="relative py-28 overflow-hidden bg-[#fdf7ff]"
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(113,40,111,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(113,40,111,0.1) 0%, transparent 65%)"
          }}
        />

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-[10px] font-black uppercase tracking-[0.28em] mb-6"
              style={{ color: "#71286F" }}
            >
              {t("badge")}
            </p>

            <h2 className="font-extrabold tracking-tight text-[clamp(2.2rem,4.5vw,3.5rem)] text-[#1a1a2e] leading-tight mb-6">
              {t("heading")}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #71286F, #c040a0)"
                }}
              >
                {t("highlight")}
              </span>
            </h2>

            <p className="text-base text-[#555] leading-relaxed mb-10 max-w-md mx-auto font-light">
              {t("description")}
            </p>

            <div className="flex flex-col items-center gap-5">
              <button
                onClick={() => setModalOpen(true)}
                className="px-12 py-5 rounded-xl font-black text-sm tracking-wide text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #71286F, #c040a0)",
                  boxShadow: "0 8px 36px rgba(113,40,111,0.35)"
                }}
              >
                {t("button")}
              </button>
              <p className="text-sm text-[#aaa] font-light">{t("footnote")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application modal */}
      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
