"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import RegistrationModal from "@/components/molecules/RegistrationModal";

export default function AIBusinessHero() {
  const t = useTranslations("AIBusiness.hero");
  const [formOpen, setFormOpen] = useState(false);

  const trustSignals = [
    t("trustSignals.noTech"),
    t("trustSignals.virtual"),
    t("trustSignals.certified")
  ];

const buildItems = [
  t("floatingCards.buildItems.liveWebsite"),
  t("floatingCards.buildItems.aiAgent"),
  t("floatingCards.buildItems.brandKit")
];

  return (
    <>
      <section
        className="relative w-full overflow-hidden bg-white"
        style={{ paddingTop: "var(--nav-height, 96px)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(113,40,111,0.06) 0%, transparent 70%)"
          }}
        />
        <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col items-start py-12 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs font-semibold text-brand-primary tracking-wide uppercase">
                  {t("badge")}
                </span>
              </div>

              <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-[#1a1a2e]">
                {t("headlinePart1")}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand-primary italic">
                    {t("headlinePart2")}
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                      stroke="#71286F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.5"
                    />
                  </svg>
                </span>
                <br />
                {t("headlinePart3")}
                <br />
                {t("headlinePart4")}
              </h1>

              <p className="mt-6 max-w-lg text-base sm:text-lg text-[#555] leading-relaxed">
                {t("description")}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setFormOpen(true)}
                >
                  {t("cta")}
                </Button>
                <p className="text-sm text-[#888] font-medium">
                  {t("cohortMessage")}{" "}
                  <span className="text-brand-primary font-semibold">
                    {t("cohortLimit")}
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {trustSignals.map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs text-[#777]"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="7"
                        fill="#71286F"
                        opacity="0.12"
                      />
                      <path
                        d="M4 7l2 2 4-4"
                        stroke="#71286F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center h-120">
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(113,40,111,0.1) 0%, transparent 70%)"
                }}
              />
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border border-brand-primary/20 z-20">
                <Image
                  src="/ai-business-hero-3.png"
                  alt="Women learning AI tools"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-primary/30 to-transparent" />
              </div>

              <div className="absolute top-8 right-4 z-30 bg-white rounded-2xl shadow-lg border border-[#ede8f5] px-5 py-4 w-48">
                <p className="text-[11px] text-[#888] font-medium uppercase tracking-wider mb-1">
                  {t("floatingCards.cohortSize")}
                </p>
                <p className="text-2xl font-extrabold text-[#1a1a2e] leading-none">
                  50
                </p>
                <p className="text-xs text-brand-primary font-semibold mt-0.5">
                  {t("floatingCards.participantsMax")}
                </p>
              </div>

              <div className="absolute bottom-16 left-0 z-30 bg-white rounded-2xl shadow-lg border border-[#ede8f5] px-5 py-4 w-52">
                <p className="text-[11px] text-[#888] font-medium uppercase tracking-wider mb-2">
                  {t("floatingCards.youWillBuild")}
                </p>
                <div className="flex flex-col gap-1.5">
                  {buildItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                      <span className="text-xs font-medium text-[#333]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-8 right-2 z-30 bg-brand-primary rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 w-44">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="14" cy="14" r="14" fill="white" opacity="0.15" />
                  <path
                    d="M14 6l2 5h5l-4 3 1.5 5L14 16l-4.5 3 1.5-5-4-3h5z"
                    fill="white"
                  />
                </svg>
                <div>
                  <p className="text-white text-xs font-bold leading-tight">
                    {t("floatingCards.certifiedOn")}
                  </p>
                  <p className="text-white/70 text-[10px]">
                    {t("floatingCards.completion")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
