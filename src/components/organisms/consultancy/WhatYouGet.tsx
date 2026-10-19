"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Banknote, Handshake, Laptop, Lightbulb, Megaphone, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";

const ICON_MAP: Record<number, LucideIcon> = {
  1: Megaphone,
  2: Banknote,
  3: Laptop,
  4: Lightbulb,
  5: Handshake
};

const TINTS = [
  { card: "bg-tabi-pink", ink: "text-brand-primary" },
  { card: "bg-tabi-mint", ink: "text-[#2F8F5B]" },
  { card: "bg-tabi-cream", ink: "text-[#B9772E]" },
  { card: "bg-tabi-lilac/60", ink: "text-brand-primary" },
  { card: "bg-tabi-peach", ink: "text-tabi-brown" }
];

export default function WhatYouGet() {
  const t = useTranslations("Consultancy.WhatYouGet");
  const areas = t.raw("areas") as Array<{ id: number; title: string; description: string }>;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={t("badge")} title={t("heading")} />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-[1.8] text-tabi-body lg:text-right">{t("description")}</p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {areas.map((area, i) => {
            const Icon = ICON_MAP[area.id] ?? Megaphone;
            const tint = TINTS[i % TINTS.length];
            return (
              <StaggerItem key={area.id} className="h-full" hoverLift={8}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-6 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(113,40,111,0.5)] ${tint.card}`}
                >
                  <span className="pointer-events-none absolute -right-1 -top-3 select-none text-6xl font-bold text-black/[0.05] transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110 ${tint.ink}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-10 text-lg font-bold text-tabi-ink">{area.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tabi-body">{area.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-10" y={20}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-[1.75rem] bg-tabi-blush px-7 py-5 sm:flex-row">
            <p className="text-base text-tabi-body">
              <span className="font-bold text-tabi-ink">{t("bottomNote")}</span> {t("bottomHighlight")}
            </p>
            <a
              href="#apply"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-primary"
            >
              {t("applyLink").replace(/\s*→\s*$/, "")}
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
