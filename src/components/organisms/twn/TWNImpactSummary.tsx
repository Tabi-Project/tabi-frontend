"use client";

import { useTranslations } from "next-intl";

export default function TWNImpactSummary() {
  const t = useTranslations("TWN.impactSummary");
  const stats = t.raw("stats") as Array<{ label: string; value: string }>;

  return (
    <section className="py-24 bg-brand-surface/30 border-y border-purple-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <p className="text-5xl font-black text-brand-primary tracking-tighter transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
