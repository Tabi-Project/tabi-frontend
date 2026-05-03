"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import RegistrationModal from "@/components/molecules/RegistrationModal";

// Define the expected shape of a profile from translations
interface ProfileTranslation {
  label: string;
  hook: string;
  description: string;
  traits: string[];
}

export default function AIBusinessAudience() {
  const t = useTranslations("AIBusiness.audience");
  const [hovered, setHovered] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);

  const PROFILES = [
    {
      id: "owner",
      ...(t.raw("profiles.owner") as ProfileTranslation),
      emoji: "🏢",
      accent: "#a855f7",
      bg: "linear-gradient(135deg, #1a0a2e 0%, #2d1045 100%)",
      border: "rgba(168,85,247,0.2)",
      tagBg: "rgba(168,85,247,0.12)"
    },
    {
      id: "professional",
      ...(t.raw("profiles.professional") as ProfileTranslation),
      emoji: "💼",
      accent: "#f472b6",
      bg: "linear-gradient(135deg, #2d0a1e 0%, #450a2e 100%)",
      border: "rgba(244,114,182,0.2)",
      tagBg: "rgba(244,114,182,0.12)"
    },
    {
      id: "founder",
      ...(t.raw("profiles.founder") as ProfileTranslation),
      emoji: "🚀",
      accent: "#34d399",
      bg: "linear-gradient(135deg, #0a2e1a 0%, #0a3d24 100%)",
      border: "rgba(52,211,153,0.2)",
      tagBg: "rgba(52,211,153,0.12)"
    }
  ];

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-[#fdf7ff] px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              {t("badge")}
            </span>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
              {t("heading")}
            </h2>
            <p className="mt-4 max-w-lg text-base text-[#666] leading-relaxed">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PROFILES.map((profile) => {
              const isHovered = hovered === profile.id;
              return (
                <div
                  key={profile.id}
                  onMouseEnter={() => setHovered(profile.id)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative flex flex-col rounded-3xl overflow-hidden cursor-default transition-all duration-500"
                  style={{
                    background: isHovered ? profile.bg : "#f9f5ff",
                    border: `1px solid ${isHovered ? profile.border : "#ede8f5"}`,
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? `0 24px 60px ${profile.accent}22`
                      : "0px 4px 12px 2px #3737371F"
                  }}
                >
                  <div
                    className="h-1 w-full transition-all duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, ${profile.accent}, transparent)`
                        : "transparent"
                    }}
                  />
                  <div className="flex flex-col flex-1 p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-colors duration-300 shrink-0"
                        style={{
                          background: isHovered ? profile.tagBg : "white",
                          boxShadow: isHovered
                            ? "none"
                            : "0 2px 8px rgba(0,0,0,0.06)"
                        }}
                      >
                        {profile.emoji}
                      </div>
                      <h3
                        className="text-lg font-extrabold transition-colors duration-300"
                        style={{ color: isHovered ? "white" : "#1a1a2e" }}
                      >
                        {profile.label}
                      </h3>
                    </div>
                    <p
                      className="text-base font-semibold leading-snug mb-3 transition-colors duration-300"
                      style={{ color: isHovered ? profile.accent : "#1a1a2e" }}
                    >
                      {profile.hook}
                    </p>
                    <p
                      className="text-sm leading-relaxed mb-8 flex-1 transition-colors duration-300"
                      style={{
                        color: isHovered ? "rgba(255,255,255,0.55)" : "#666"
                      }}
                    >
                      {profile.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.traits.map((trait: string) => (
                        <span
                          key={trait}
                          className="text-[11px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full transition-colors duration-300"
                          style={{
                            background: isHovered ? profile.tagBg : "white",
                            color: isHovered ? profile.accent : "#888",
                            border: isHovered
                              ? `1px solid ${profile.accent}30`
                              : "1px solid #e5e5e5"
                          }}
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-tabi-card bg-[#fdf7ff] border border-brand-primary/10">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-bold text-[#1a1a2e] mb-3">
                {t("cta.heading")}
              </h4>
              <p className="text-[#666] text-sm md:text-base max-w-md">
                {t("cta.description")}
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="px-10"
              onClick={() => setFormOpen(true)}
            >
              {t("cta.button")}
            </Button>
          </div>

          <p className="text-center text-sm text-[#aaa] mt-12">
            {t("footerLine")}{" "}
            <span className="text-brand-primary font-semibold">
              {t("footerHighlight")}
            </span>
          </p>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
