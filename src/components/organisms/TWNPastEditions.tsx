// components/organisms/TWNPastEditions.tsx
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { ArrowRight } from "lucide-react";

export default function TWNPastEditions() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-primary/10 rounded-[3.5rem] -z-10" />
            <div className="relative aspect-4/5 md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/tfwwl.png"
                alt="Tabi Women Network Enugu Edition"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#2D102D]/90 via-[#2D102D]/20 to-transparent flex flex-col justify-end p-10">
                <span className="bg-brand-primary text-white text-[10px] font-black px-4 py-2 rounded-full w-fit mb-4 tracking-widest uppercase">
                  Past Edition
                </span>
                <h4 className="text-white text-2xl font-bold">
                  Enugu, Nigeria
                </h4>
                <p className="text-white/70 text-sm">March 2026 Cohort</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2D102D] leading-[1.1] tracking-tight">
              Refining Leadership in the <br />
              <span className="text-brand-primary font-serif italic text-5xl md:text-7xl">
                Coal City.
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
              Our inaugural edition in Enugu performed deep-dive digital audits
              and infrastructure roadmaps for every member in the room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-brand-primary text-white rounded-full px-10 py-7 font-bold hover:shadow-2xl transition-all"
                onClick={() => window.open("https://yourlink.com", "_blank")}
              >
                Read the Enugu Report <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
