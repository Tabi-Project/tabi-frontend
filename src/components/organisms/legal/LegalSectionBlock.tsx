import { LegalSection } from "@/types/legal";
import LegalBlockRenderer from "@/components/molecules/LegalBlockRenderer";

export default function LegalSectionBlock({
  section
}: {
  section: LegalSection;
}) {
  return (
    <section id={`section-${section.number}`} className="scroll-mt-8">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-2xl font-extrabold text-brand-primary leading-none shrink-0">
          {section.number}.
        </span>
        <h2 className="text-xl font-bold text-brand-primary leading-snug">
          {section.title}
        </h2>
      </div>
      <div className="pl-5 border-l-2 border-[#ede8f5]">
        {section.content.map((block, i) => (
          <LegalBlockRenderer key={i} block={block} idx={i} />
        ))}
      </div>
    </section>
  );
}
