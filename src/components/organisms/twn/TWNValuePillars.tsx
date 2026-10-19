"use client";

import { useTranslations } from "next-intl";
import { Coffee, MoveRight, Sparkles } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/atoms/Reveal";

const ICONS = [Coffee, Sparkles, MoveRight];
const TINTS = [
  { card: "bg-tabi-pink", ink: "text-brand-primary" },
  { card: "bg-tabi-mint", ink: "text-[#2F8F5B]" },
  { card: "bg-tabi-cream", ink: "text-[#B9772E]" }
];

export default function TWNValuePillars() {
  const t = useTranslations("TWN.valuePillars");
  const pillars = t.raw("pillars") as Array<{ title: string; desc: string }>;

  return (
    <section className="bg-tabi-blush py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Stagger className="grid gap-5 md:grid-cols-3" stagger={0.12}>
          {pillars.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            const tint = TINTS[i % TINTS.length];
            return (
              <StaggerItem key={item.title} className="h-full" hoverLift={8}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] bg-white p-8 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgba(113,40,111,0.5)] sm:p-9">
                  <span className={`absolute -right-10 -top-10 h-36 w-36 rounded-full transition-transform duration-700 group-hover:scale-125 ${tint.card}`} />
                  <span className={`relative flex h-16 w-16 items-center justify-center rounded-full shadow-sm transition-all duration-500 group-hover:-rotate-6 group-hover:bg-brand-primary group-hover:text-white ${tint.card} ${tint.ink}`}>
                    <Icon size={28} strokeWidth={1.6} />
                  </span>
                  <h3 className="relative mt-10 text-2xl font-bold text-tabi-ink">{item.title}</h3>
                  <p className="relative mt-3 text-base leading-[1.8] text-tabi-body">{item.desc}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
