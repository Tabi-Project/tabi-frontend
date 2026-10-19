"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { GradientText } from "@/components/atoms/GradientText";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal, EASE_TABI } from "@/components/atoms/Reveal";

// Each category gets one of the Figma chip tints
const CATEGORY_STYLES: Record<string, { chip: string; dot: string; icon: string }> = {
  Training: { chip: "bg-tabi-pink text-brand-primary", dot: "bg-brand-primary", icon: "bg-tabi-pink text-brand-primary" },
  Support: { chip: "bg-tabi-cream text-[#9A5B1E]", dot: "bg-[#D9932F]", icon: "bg-tabi-cream text-[#9A5B1E]" },
  Materials: { chip: "bg-tabi-lilac/70 text-brand-primary", dot: "bg-tabi-mauve", icon: "bg-tabi-lilac/70 text-brand-primary" },
  Certification: { chip: "bg-tabi-green text-[#2F8F5B]", dot: "bg-[#3CB371]", icon: "bg-tabi-green text-[#2F8F5B]" },
  Community: { chip: "bg-tabi-peach text-tabi-brown", dot: "bg-tabi-brown", icon: "bg-tabi-peach text-tabi-brown" }
};

export default function AIBusinessInclusions() {
  const t = useTranslations("AIBusiness.inclusions");
  const inclusions = t.raw("items") as Array<{ text: string; category: string }>;
  const categories = Object.keys(CATEGORY_STYLES);
  const [filter, setFilter] = useState<string | null>(null);

  const visible = filter ? inclusions.filter((i) => i.category === filter) : inclusions;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          {/* Sticky intro + category filter */}
          <div className="lg:sticky lg:top-32">
            <Reveal y={12}>
              <Eyebrow>{t("badge")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-6 text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.1] text-tabi-ink">
                {t("headingLine1")} {t("headingLine2")}
                <br />
                <GradientText>
                  {t("headingLine3")} {t("headingLine4")}
                </GradientText>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-sm text-base leading-[1.8] text-tabi-body">{t("freeToolsNote")}</p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8">
              <LayoutGroup id="inclusion-filter">
                <div className="flex flex-wrap gap-2" role="toolbar" aria-label={t("badge")}>
                  {[null, ...categories].map((cat) => {
                    const isActive = filter === cat;
                    const count = cat ? inclusions.filter((i) => i.category === cat).length : inclusions.length;
                    return (
                      <button
                        key={cat ?? "all"}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setFilter(cat)}
                        className={`relative cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                          isActive ? "text-white" : "text-tabi-body ring-1 ring-brand-primary/15 hover:ring-brand-primary/40"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="inclusion-pill"
                            className="absolute inset-0 rounded-full bg-brand-primary"
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative flex items-center gap-2">
                          {cat && <span className={`h-2 w-2 rounded-full ${isActive ? "bg-white" : CATEGORY_STYLES[cat].dot}`} />}
                          {cat ? t(`categories.${cat}`) : t("allLabel")}
                          <span className={`text-xs ${isActive ? "text-white/70" : "text-tabi-body/50"}`}>{count}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </LayoutGroup>
            </Reveal>
          </div>

          {/* Checklist */}
          <motion.ul layout className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((item, i) => {
                const s = CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.Training;
                return (
                  <motion.li
                    layout
                    key={item.text}
                    initial={{ opacity: 0, y: 24, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: EASE_TABI }}
                    className="group flex items-start gap-4 rounded-[1.5rem] bg-tabi-card/70 p-5 transition-colors duration-300 hover:bg-tabi-blush"
                  >
                    <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${s.icon}`}>
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-snug text-tabi-ink sm:text-[0.95rem]">{item.text}</p>
                      <span className={`mt-2.5 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium ${s.chip}`}>
                        {t(`categories.${item.category}`)}
                      </span>
                    </div>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </div>

        <Reveal className="mt-14" y={20}>
          <div className="flex flex-col items-start justify-between gap-4 rounded-[2rem] bg-tabi-green/60 px-7 py-6 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#2F8F5B] shadow-sm">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="font-bold text-tabi-ink">{t("bottomBanner.title")}</p>
                <p className="mt-0.5 text-sm text-tabi-body">{t("bottomBanner.description")}</p>
              </div>
            </div>
            <span className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#2F8F5B]">
              {t("bottomBanner.badge")}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
