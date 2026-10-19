import { LegalSection } from "@/types/legal";
import LegalBlockRenderer from "@/components/molecules/LegalBlockRenderer";

export default function LegalSectionBlock({
  section
}: {
  section: LegalSection;
}) {
  return (
    <section id={`section-${section.number}`} className="scroll-mt-32">
      <div className="mb-5 flex items-center gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tabi-pink text-base font-bold leading-none text-brand-primary">
          {section.number}
        </span>
        <h2 className="text-2xl font-bold leading-snug text-tabi-ink">
          {section.title}
        </h2>
      </div>
      <div className="ml-5 border-l-2 border-tabi-pink pl-9">
        {section.content.map((block, i) => (
          <LegalBlockRenderer key={i} block={block} idx={i} />
        ))}
      </div>
    </section>
  );
}
