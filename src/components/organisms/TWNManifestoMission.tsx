// components/organisms/TWNManifestoMission.tsx
import Image from "next/image";
import { Quote } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Intentionality over volume",
    desc: "Every woman in the room is there for a reason. Quality over quantity, always."
  },
  {
    title: "Warmth over formality",
    desc: "Never stiff, never performative. This is a table, not a stage."
  },
  {
    title: "Authenticity as standard",
    desc: "Show up as you are. Honesty and vulnerability are welcome here."
  },
  {
    title: "Sisterhood with substance",
    desc: "From introduction to genuine relationship — with structure and intention."
  },
  {
    title: "Excellence in execution",
    desc: "Time is respected. Promises are kept. The experience is consistent."
  },
  {
    title: "Pan‑African in vision",
    desc: "Built to span the continent, connecting women across borders and sectors."
  }
];

export default function TWNManifestoMission() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- PART 1: THE MANIFESTO (Visual & Story) --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="relative">
            <div className="aspect-square md:aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl relative">
              <Image
                src="/community/woman-teaching.jpg"
                alt="The Tabi Table"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2D102D]/80 via-transparent to-transparent" />
            </div>

            {/* Overlay Quote - Repositioned for balance */}
            <div className="absolute -bottom-6 left-6 right-6 md:-right-12 md:left-auto bg-brand-primary p-8 rounded-tabi-card shadow-2xl max-w-sm border-[6px] border-white">
              <Quote
                className="text-white/20 mb-4"
                size={32}
                fill="currentColor"
              />
              <p className="text-white font-bold text-lg md:text-xl leading-tight">
                &quot;The most powerful thing a woman can do for another woman is put
                her in the right room.&quot;
              </p>
              <p className="text-white/60 text-[10px] mt-6 uppercase font-black tracking-[0.2em]">
                — Sophia Ahuoyiza
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-primary/5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">
                The Manifesto
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-extrabold text-[#1a1a2e] leading-none tracking-tighter">
              This is not a <br />
              conference. <br />
              <span className="italic text-brand-primary font-serif font-normal lowercase tracking-normal">
                This is a table.
              </span>
            </h2>

            <div className="space-y-6 text-gray-500 text-lg md:text-xl leading-relaxed">
              <p>
                Tabi Women Network was born from a simple belief: when the right
                women are in the same room, real things happen—partnerships
                form, ideas sharpen, and doors open.
              </p>
              <p>
                We are a pan-African community of executives, founders, and
                changemakers. We don&apos;t do performative networking or crowded
                summits. Instead, we curate intimate, invite-only gatherings of
                10 to 15 women designed to move you from a simple introduction
                to a genuine relationship in a single afternoon.
              </p>
            </div>
          </div>
        </div>

        {/* --- PART 2: THE OPERATING PRINCIPLES (The Foundation) --- */}
        <div className="pt-24 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e] tracking-tight">
                Our Operating Principles
              </h3>
              <p className="text-gray-500 mt-4 text-lg">
                These are not aspirational statements. They are the principles
                that shape every decision we make.
              </p>
            </div>
            <div className="hidden md:block h-px grow bg-gray-100 mx-12 mb-4" />
            <span className="text-brand-primary font-serif italic text-2xl">
              06 Pillars
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {PRINCIPLES.map((item, idx) => (
              <div key={item.title} className="group space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-brand-primary font-serif italic text-2xl">
                    0{idx + 1}
                  </span>
                  <div className="h-px w-8 bg-gray-200 group-hover:w-12 group-hover:bg-brand-primary transition-all duration-500" />
                </div>
                <h4 className="font-black text-[#1a1a2e] text-base uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
