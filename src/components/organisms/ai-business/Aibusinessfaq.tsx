"use client";

import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal } from "@/components/atoms/Reveal";
import FaqAccordion from "@/components/molecules/FaqAccordion";
import SectionHeading from "@/components/molecules/SectionHeading";

export default function AIBusinessFAQ() {
  const t = useTranslations("AIBusiness.faq");
  const faqs = t.raw("items") as Array<{ q: string; a: string; tag: string }>;

  return (
    <section id="faq" className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow={t("badge")}
              title={
                <>
                  {t("headingLine1")} {t("headingLine2")} <GradientText>{t("headingHighlight")}</GradientText>
                </>
              }
              description={t("contactMessage")}
            />
            <Reveal delay={0.2} className="mt-8">
              <a
                href={`mailto:${t("contactEmail")}`}
                className="group inline-flex items-center gap-3 rounded-full bg-tabi-pink py-2 pl-2 pr-5 text-sm font-medium text-brand-primary transition-colors duration-300 hover:bg-brand-primary hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-primary transition-transform duration-300 group-hover:rotate-[-12deg]">
                  <Mail size={16} />
                </span>
                {t("contactEmail")}
              </a>
            </Reveal>
          </div>

          <FaqAccordion items={faqs} tagLabel={(tag) => t(`tags.${tag}`)} />
        </div>
      </div>
    </section>
  );
}
