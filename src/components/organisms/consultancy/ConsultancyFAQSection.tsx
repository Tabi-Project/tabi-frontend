"use client";

import { useTranslations } from "next-intl";
import ConsultancyFAQItem from "@/components/molecules/ConsultancyFAQItem";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function ConsultancyFAQSection() {
  const t = useTranslations("Consultancy.FAQSection");
  const faqs = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="w-full" style={{ background: "#FDF4FF" }}>
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#EED9F7" }}
            >
              {t("badge")}
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a2e] leading-snug mb-4">
              {t("heading")}
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-8">
              {t("description")}
            </p>
            <Link href="#apply">
              <Button variant="primary" size="md">
                {t("cta")}
              </Button>
            </Link>
          </div>

          {/* Right — accordion */}
          <div className="bg-white rounded-3xl px-8 py-2 divide-y divide-gray-100 shadow-sm border border-[#EDD9F5]">
            {faqs.map((item, i) => (
              <ConsultancyFAQItem key={i} item={item} />
            ))}
          </div>
        </div>

        {/* T&Cs footer note */}
        <p className="text-center text-xs text-[#aaa] mt-16">
          {t("footer")}
        </p>
      </div>
    </section>
  );
}
