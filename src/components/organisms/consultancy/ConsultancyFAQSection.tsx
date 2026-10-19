"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import FaqAccordion from "@/components/molecules/FaqAccordion";
import SectionHeading from "@/components/molecules/SectionHeading";

export default function ConsultancyFAQSection() {
  const t = useTranslations("Consultancy.FAQSection");
  const faqs = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="w-full bg-tabi-blush">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.8fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={t("badge")} eyebrowTone="white" title={t("heading")} description={t("description")} />
            <Reveal delay={0.2} className="mt-8">
              <Link href="#apply">
                <Button variant="primary" size="lg">
                  {t("cta").replace(/\s*→\s*$/, "")}
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </Reveal>
          </div>

          <div className="[&_li]:bg-white [&_li:hover]:bg-white">
            <FaqAccordion items={faqs.map((f) => ({ q: f.question, a: f.answer }))} />
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-tabi-body/70">{t("footer")}</p>
      </div>
    </section>
  );
}
