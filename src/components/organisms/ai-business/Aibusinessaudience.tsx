"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Briefcase, Building2, Rocket } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import SectionHeading from "@/components/molecules/SectionHeading";
import RegistrationModal from "@/components/molecules/RegistrationModal";

interface ProfileTranslation {
  label: string;
  hook: string;
  description: string;
  traits: string[];
}

const PROFILES = [
  { id: "owner", icon: Building2, tint: "bg-tabi-pink", iconInk: "text-brand-primary" },
  { id: "professional", icon: Briefcase, tint: "bg-tabi-mint", iconInk: "text-[#2F8F5B]" },
  { id: "founder", icon: Rocket, tint: "bg-tabi-cream", iconInk: "text-[#B9772E]" }
] as const;

export default function AIBusinessAudience() {
  const t = useTranslations("AIBusiness.audience");
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <section className="w-full overflow-hidden bg-white">
        <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <SectionHeading
            align="center"
            eyebrow={t("badge")}
            title={t("heading")}
            description={t("description")}
            className="mb-14 lg:mb-16"
          />

          <Stagger className="grid grid-cols-1 gap-5 lg:grid-cols-3" stagger={0.12}>
            {PROFILES.map(({ id, icon: Icon, tint, iconInk }) => {
              const p = t.raw(`profiles.${id}`) as ProfileTranslation;
              return (
                <StaggerItem key={id} className="h-full">
                  <article
                    tabIndex={0}
                    className={`group relative isolate flex h-full flex-col overflow-hidden rounded-[2rem] p-8 outline-none transition-transform duration-500 hover:-translate-y-1.5 focus-visible:-translate-y-1.5 sm:p-9 ${tint}`}
                  >
                    {/* Ink flood — grows out of the icon on hover */}
                    <span
                      aria-hidden
                      className="absolute left-[3.75rem] top-[3.75rem] -z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-brand-primary transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[22] group-focus-visible:scale-[22]"
                    />

                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500 group-hover:rotate-[-8deg] group-hover:bg-white/15 group-hover:text-white group-focus-visible:text-white ${iconInk}`}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </span>

                    <p className="mt-8 text-sm font-medium text-brand-primary transition-colors duration-500 group-hover:text-tabi-tan group-focus-visible:text-tabi-tan">
                      {p.label}
                    </p>
                    <h3 className="mt-2 text-xl font-bold leading-snug text-tabi-ink transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                      {p.hook}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-[1.8] text-tabi-body transition-colors duration-500 group-hover:text-white/75 group-focus-visible:text-white/75">
                      {p.description}
                    </p>

                    <ul className="mt-8 flex flex-wrap gap-2">
                      {p.traits.map((trait, i) => (
                        <li
                          key={trait}
                          className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-tabi-ink transition-all duration-500 group-hover:bg-white/10 group-hover:text-white group-hover:ring-1 group-hover:ring-white/20"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          {trait}
                        </li>
                      ))}
                    </ul>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal className="mt-14" y={24}>
            <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-tabi-blush p-8 md:flex-row md:p-12">
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-tabi-ink">{t("cta.heading")}</h4>
                <p className="mt-3 max-w-md text-base leading-relaxed text-tabi-body">{t("cta.description")}</p>
              </div>
              <Button variant="primary" size="lg" onClick={() => setFormOpen(true)}>
                {t("cta.button")}
                <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-base text-tabi-body">
              {t("footerLine")} <GradientText className="font-bold">{t("footerHighlight")}</GradientText>
            </p>
          </Reveal>
        </div>
      </section>
      {formOpen && <RegistrationModal onClose={() => setFormOpen(false)} />}
    </>
  );
}
