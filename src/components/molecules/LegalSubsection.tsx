import LegalParagraph from "@/components/atoms/LegalParagraph";
import LegalBulletList from "@/components/atoms/LegalBulletList";

interface LegalSubsectionProps {
  number: string;
  title: string;
  text?: string;
  bullets?: string[];
}

export default function LegalSubsection({
  number,
  title,
  text,
  bullets
}: LegalSubsectionProps) {
  return (
    <div className="mb-6">
      <h4 className="text-[15px] font-bold text-[#121212] mb-2">
        <span className="text-brand-primary mr-1">{number}</span>
        {title}
      </h4>
      {text && <LegalParagraph text={text} />}
      {bullets && <LegalBulletList items={bullets} />}
    </div>
  );
}
