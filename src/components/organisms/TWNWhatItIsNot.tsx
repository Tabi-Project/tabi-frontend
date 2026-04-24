"use client";

import { useTranslations } from "next-intl";
import { CheckCircle2, XCircle, Sparkles, ArrowRight } from "lucide-react";

export default function TWNWhatItIsNot() {
  const t = useTranslations("TWN.whatItIsNot");

  const comparison = t.raw("comparison") as Array<{ is: string; not: string }>;
  const footerTags = t.raw("footerTags") as string[];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/5 text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} fill="currentColor" /> {t("badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] tracking-tight">
            {t("heading")}
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">{t("description")}</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-4 max-w-5xl mx-auto">
          {comparison.map((item, idx) => (
            <div
              key={idx}
              className="group grid md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 p-2"
            >
              {/* IT IS NOT */}
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 opacity-60 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                    <XCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500 font-medium text-lg italic">
                    {item.not}
                  </span>
                </div>
              </div>

              {/* CENTER DIVIDER */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-px h-8 bg-gray-100" />
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <ArrowRight size={16} />
                </div>
                <div className="w-px h-8 bg-gray-100" />
              </div>

              {/* IT IS */}
              <div className="bg-[#2D102D] rounded-3xl p-8 shadow-xl shadow-brand-primary/10 border border-brand-primary/20 relative overflow-hidden group-hover:-translate-y-1 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl rounded-full -mr-16 -mt-16" />
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg md:text-xl tracking-tight">
                    {item.is}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer reinforcement */}
        <div className="mt-20 text-center">
          <p className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
            {t("footerTagline")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {footerTags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 text-[#1a1a2e] font-bold"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
