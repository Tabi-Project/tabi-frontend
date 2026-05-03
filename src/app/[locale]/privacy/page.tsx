// import LegalPageLayout from "@/components/organisms/legal/LegalPageLayout";
// import { PRIVACY_SECTIONS, PRIVACY_META } from "@/data/privacy";
// import { privacyMetadata } from "@/seo/page-metadata";

// export const metadata = privacyMetadata;

// export default function PrivacyPage() {
//   return (
//     <LegalPageLayout
//       label={PRIVACY_META.title}
//       title={PRIVACY_META.organization}
//       effectiveDate={PRIVACY_META.effectiveDate}
//       lastUpdated={PRIVACY_META.lastUpdated}
//       footerNote={PRIVACY_META.footerNote}
//       sections={PRIVACY_SECTIONS}
//       breadcrumbHref="/privacy"
//       breadcrumbLabel="Privacy Policy"
//     />
//   );
// }

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
  const t = await getTranslations({ locale, namespace: "Privacy.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "https://tabiproject.com/privacy" }
  };
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  const sections = t.raw("sections") as LegalSection[];

  return (
    <LegalPageLayout
      label={t("label")}
      title={t("title")}
      effectiveDate={t("effectiveDate")}
      lastUpdated={t("lastUpdated")}
      footerNote={t("footerNote")}
      sections={sections}
      breadcrumbHref="/privacy"
      breadcrumbLabel={t("breadcrumb.label")}
      breadcrumbHomeLabel={t("breadcrumb.home")}
    />
  );
}