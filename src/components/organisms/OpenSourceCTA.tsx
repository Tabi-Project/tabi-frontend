"use client";
import { useTranslations } from "next-intl";
import { Github } from "lucide-react";

export default function CaseStudiesCTA() {
  const t = useTranslations("OpenSource.cta");

  return (
    <section
      className="py-32 text-center text-white"
      style={{
        background: "linear-gradient(160deg, #0f0a1a 0%, #71286F 100%)"
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl lg:text-7xl font-black mb-8">
          {t("headingPart1")}{" "}
          <span className="opacity-40">{t("headingHighlight")}</span>
        </h2>
        <p className="text-white/60 mb-12">{t("description")}</p>
        <a
          href="https://github.com/tabi-project"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
        >
          <Github size={20} /> {t("button")}
        </a>
      </div>
    </section>
  );
}
