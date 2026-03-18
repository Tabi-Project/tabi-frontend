import LegalPageLayout from "@/components/organisms/LegalPageLayout";
import { PRIVACY_SECTIONS, PRIVACY_META } from "@/data/privacy";

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      label={PRIVACY_META.title}
      title={PRIVACY_META.organization}
      effectiveDate={PRIVACY_META.effectiveDate}
      lastUpdated={PRIVACY_META.lastUpdated}
      footerNote={PRIVACY_META.footerNote}
      sections={PRIVACY_SECTIONS}
      breadcrumbHref="/privacy"
      breadcrumbLabel="Privacy Policy"
    />
  );
}
