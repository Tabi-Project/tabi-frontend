import LegalPageLayout from "@/components/organisms/LegalPageLayout";
import { TERMS_SECTIONS, TERMS_META } from "@/data/terms";
import { termsMetadata } from "@/seo/page-metadata";

export const metadata = termsMetadata;

export default function TermsPage() {
  return (
    <LegalPageLayout
      label={TERMS_META.title}
      title={TERMS_META.organization}
      effectiveDate={TERMS_META.effectiveDate}
      lastUpdated={TERMS_META.lastUpdated}
      footerNote={TERMS_META.footerNote}
      sections={TERMS_SECTIONS}
      breadcrumbHref="/terms"
      breadcrumbLabel="Terms of Use"
    />
  );
}
