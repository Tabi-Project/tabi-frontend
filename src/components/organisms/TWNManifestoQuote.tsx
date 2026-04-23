// components/organisms/TWNManifestoQuote.tsx
import { Sparkles } from "lucide-react";

export default function TWNManifestoQuote() {
  return (
    <section className="py-40 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Sparkles className="w-16 h-16 text-brand-primary/20 mx-auto mb-12" />
        <h2 className="text-4xl md:text-6xl font-bold text-[#2D102D] leading-[1.1] mb-10 tracking-tight">
          The Tabi Women Network is where{" "}
          <span className="text-brand-primary font-serif italic">access</span>{" "}
          meets{" "}
          <span className="relative inline-block">
            opportunity.
            <div className="absolute bottom-2 left-0 w-full h-3 bg-brand-primary/10 -z-10" />
          </span>
        </h2>
        <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium italic">
          &quot;We are building a decentralized ecosystem for African women
          leaders. No gatekeepers. No fluff. Just the technology, governance,
          and social capital needed to build global legacies.&quot;
        </p>
      </div>
    </section>
  );
}
