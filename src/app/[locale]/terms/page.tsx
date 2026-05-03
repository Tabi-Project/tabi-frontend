import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import LegalPageLayout from "@/components/organisms/legal/LegalPageLayout";
import { LegalSection } from "@/types/legal";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "https://tabiproject.com/terms" }
  };
}

export default async function TermsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });
  const sections = t.raw("sections") as LegalSection[];

  return (
    <LegalPageLayout
      label={t("label")}
      title={t("title")}
      effectiveDate={t("effectiveDate")}
      lastUpdated={t("lastUpdated")}
      footerNote={t("footerNote")}
      sections={sections}
      breadcrumbHref="/terms"
      breadcrumbLabel={t("breadcrumb.label")}
      breadcrumbHomeLabel={t("breadcrumb.home")}
    />
  );
}
