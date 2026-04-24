"use client";

import { useTranslations } from "next-intl";
import { MoveRight, Coffee, Sparkles } from "lucide-react";

export default function TWNValuePillars() {
  const t = useTranslations("TWN.valuePillars");

  // Get pillars from translations
  const pillarsData = t.raw("pillars") as Array<{
    title: string;
    desc: string;
  }>;

  // Predefined icons (cannot be stored in JSON)
  const icons = [
    <Coffee size={32} key="coffee" />,
    <Sparkles size={32} key="sparkles" />,
    <MoveRight size={32} key="moveright" />
  ];

  return (
    <section className="py-32 bg-brand-surface/30 border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {pillarsData.map((item, i) => (
            <div key={i} className="group">
              <div className="w-20 h-20 rounded-4xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-10 transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-xl group-hover:-rotate-6">
                {icons[i]}
              </div>
              <h3 className="text-2xl font-bold text-[#2D102D] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
