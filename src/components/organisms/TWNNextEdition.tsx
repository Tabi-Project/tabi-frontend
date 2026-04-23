// components/organisms/TWNNextEdition.tsx
import { Button } from "@/components/atoms/Button";
import { Star, Calendar } from "lucide-react";

export default function TWNNextEdition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-surface border border-brand-primary/10 rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-brand-primary rounded-3xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg shadow-brand-primary/20">
              <span className="text-[10px] font-black uppercase tracking-tighter">
                May
              </span>
              <span className="text-3xl font-black">04</span>
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-1">
                <Star size={12} fill="currentColor" /> Upcoming Edition
              </div>
              <h3 className="text-3xl font-bold text-[#2D102D]">
                Benin Republic
              </h3>
              <p className="text-gray-500 font-medium">
                Cotonou • Strategic Leadership Mixer
              </p>
            </div>
          </div>
          <Button className="w-full md:w-auto bg-[#2D102D] text-white px-10 py-6 rounded-2xl font-bold hover:bg-brand-primary transition-all flex items-center gap-3">
            Secure Your Seat <Calendar size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
