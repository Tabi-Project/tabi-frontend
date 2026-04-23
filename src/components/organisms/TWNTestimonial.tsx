// components/organisms/TWNTestimonial.tsx
import { Quote } from "lucide-react";

export default function TWNTestimonial() {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-16 h-16 text-brand-primary/20 mx-auto mb-10" />
        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
          &quot;The ideas and timelines placed to bring growth to the business
          is one that I didn&apos;t have prior to the meetings.&quot;
        </h3>
        <div className="space-y-2">
          <p className="font-bold text-brand-primary text-lg">
            — Participant, Lagos Cohort
          </p>
          <p className="text-white/20 text-[10px] uppercase font-black tracking-[0.4em]">
            Strategic Session 2026
          </p>
        </div>
      </div>
    </section>
  );
}
