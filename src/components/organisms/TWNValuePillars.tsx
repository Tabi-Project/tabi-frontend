// components/organisms/TWNValuePillars.tsx
import { MoveRight, Coffee, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: <Coffee size={32} />,
    title: "Curated Networking",
    desc: "Strategic seat mapping with leaders who align specifically with your industry."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Knowledge Equity",
    desc: "A private, high-trust space to exchange the 'unspoken' rules of Tech and Business."
  },
  {
    icon: <MoveRight size={32} />,
    title: "Open Doors",
    desc: "Direct access to collaboration across our global database."
  }
];

export default function TWNValuePillars() {
  return (
    <section className="py-32 bg-brand-surface/30 border-t border-purple-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {PILLARS.map((item, i) => (
            <div key={i} className="group">
              <div className="w-20 h-20 rounded-4xl bg-white shadow-sm flex items-center justify-center text-brand-primary mb-10 transition-all duration-500 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-xl group-hover:-rotate-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#2D102D] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
