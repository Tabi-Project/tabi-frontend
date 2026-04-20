import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { MoveRight, Users } from "lucide-react"; // Import a modern arrow icon

export const TWNHero = () => {
  return (
  <section className="relative pt-32 pb-20 overflow-hidden border-b border-purple-100 bg-[#FDFCFE]">
    {/* Background Grid Pattern from Flyer */}
    <div
      className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(#5D255C 1px, transparent 1px), linear-gradient(90deg, #5D255C 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }}
    />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-surface text-brand-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Tabi Women Network
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-[#2D102D] leading-[0.95] tracking-tighter mb-8">
            A Table for <br />
            Women who <br />
            <span className="relative inline-block">
              Lead!
              {/* Hand-drawn circle effect from flyer */}
              <svg
                className="absolute -inset-2 w-[120%] h-[120%] text-brand-primary/40 -rotate-3"
                viewBox="0 0 100 40"
                fill="none"
              >
                <path
                  d="M5,20 Q15,5 50,5 Q85,5 95,20 Q85,35 50,35 Q15,35 5,20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed mb-10">
            An intimate private lunch for Executives, Founders, and Senior
            Leaders to align, collaborate, and open doors for one another.
          </p>

          <div className="flex flex-wrap gap-6">
            <Button
              size="lg"
              className="rounded-full px-12 shadow-lg shadow-brand-primary/20 font-semibold"
            >
              Apply for Q2 Cohort
            </Button>
            <button className="group flex items-center gap-3 font-bold text-gray-900 hover:text-brand-primary transition-colors border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50">
              Read March 2026 Report
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        {/* Founder Card: Profile layout inspired by flyer */}
        <div className="relative">
          <div className="relative aspect-4/5 rounded-tabi-card overflow-hidden shadow-2xl border-12 border-white">
            <Image
              src="/sophia-ahuoyiza.png"
              alt="Sophia Ahuoyiza - Founder of Tabi"
              fill
              className="object-cover"
            />
            {/* Glassmorphism Badge */}
            <div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/20 border border-white/30 p-6 rounded-3xl text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg leading-none mb-1">
                    Sophia Ahuoyiza
                  </h4>
                  <p className="text-xs text-white/80">
                    Software Engineer & Founder, Tabi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
