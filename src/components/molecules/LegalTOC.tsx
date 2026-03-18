import { LegalSection } from "@/types/legal";

export default function LegalTOC({ sections }: { sections: LegalSection[] }) {
  return (
    <aside className="hidden lg:block w-60 shrink-0">
      <div className="sticky top-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#aaa] mb-5">
          Contents
        </p>
        <nav className="space-y-1">
          {sections.map((s) => (
            <a
              key={s.number}
              href={`#section-${s.number}`}
              className="flex items-start gap-2.5 py-1.5 text-sm text-[#666] hover:text-brand-primary transition-colors group"
            >
              <span className="text-brand-primary font-semibold shrink-0 w-5 text-xs mt-0.5">
                {s.number}.
              </span>
              <span className="leading-snug">{s.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
