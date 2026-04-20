"use client";

import { useTranslations } from "next-intl";

export default function AIBusinessStats() {
  const t = useTranslations("AIBusiness.stats");

  const STATS = [
    { value: t("training.value"), label: t("training.label") },
    { value: t("sessions.value"), label: t("sessions.label") },
    { value: t("tools.value"), label: t("tools.label") },
    { value: t("handsOn.value"), label: t("handsOn.label") }
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#ede8f5] rounded-3xl overflow-hidden bg-brand-surface/60">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center justify-center text-center px-6 py-8
                ${i % 2 === 0 && i !== STATS.length - 1 ? "border-b md:border-b-0" : ""}
                ${i < STATS.length - 1 ? "md:border-r border-[#ede8f5]" : ""}
                ${i === 0 ? "border-b border-r md:border-b-0" : ""}
                ${i === 1 ? "border-b md:border-b-0" : ""}
              `}
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-brand-primary leading-none">{stat.value}</p>
              <p className="mt-2 text-xs sm:text-sm text-[#777] font-medium max-w-[120px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}