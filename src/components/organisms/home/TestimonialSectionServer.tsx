// components/organisms/TestimonialsSectionServer.tsx
// Server component — reads from CMS and passes to the client section.
// Drop this into any page layout where you want the section to appear.

import { getAllTestimonials } from "@/lib/cms";
import TestimonialsSection from "@/components/organisms/home/TestimonialSection";
import { getTranslations } from "next-intl/server";

interface Props {
  locale: string;
}

export default async function TestimonialsSectionServer({ locale }: Props) {
  const testimonials = getAllTestimonials(locale);
  const t = await getTranslations({ locale, namespace: "Testimonials" });

  return (
    <TestimonialsSection
      testimonials={testimonials}
      heading={t("heading")}
      subheading={t("subheading")}
    />
  );
}
