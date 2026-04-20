import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import {
  MoveRight,
  Coffee,
  Sparkles,
  Quote,
  Zap,
  ArrowRight
} from "lucide-react";
import { TWNHero } from "@/components/organisms/TWNHero";

/**
 * REFINED HERO: Blends the intimate flyer aesthetic with high-contrast UI
 */
<TWNHero />

export default function TabiWomenNetworkPage() {
  return (
    <div className="min-h-screen bg-white">
      <TWNHero />

      {/* 1. IMPACT SUMMARY */}
      <section className="py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Applications", val: "26" },
              { label: "Countries", val: "2" },
              { label: "Sectors", val: "6" },
              { label: "Digital Audit", val: "100%" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-5xl font-black text-brand-primary mb-2">
                  {stat.val}
                </p>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Real Strategy. Real{" "}
              <span className="text-brand-primary">Growth</span>.
            </h2>
            <p className="text-gray-600 mt-6 leading-relaxed text-lg">
              We selected seven businesses across{" "}
              <span className="text-gray-900 font-semibold">
                Lagos, Ibadan, and Accra
              </span>
              —each receiving custom digital infrastructure frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                sector: "Modest Fashion",
                city: "Lagos",
                img: "/events/fashion-consult.jpg",
                outcome:
                  "Brand identity defined; built quarterly digital magazine strategy & custom data tracking."
              },
              {
                sector: "B2B Talent",
                city: "Lagos",
                img: "/events/b2b-consult.jpg",
                outcome:
                  "Solved sales conversion via pricing model adjustment. Delivered metrics tracker."
              },
              {
                sector: "Agriculture",
                city: "Maiduguri",
                img: "/events/agri-consult.jpg",
                outcome:
                  "Focusing on future digitization for administrative record management."
              }
            ].map((biz, i) => (
              <div
                key={i}
                className="bg-white rounded-4xl p-6 shadow-sm border border-purple-100/50 hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={biz.img}
                    alt={biz.sector}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                    {biz.sector}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4 font-bold uppercase tracking-tighter">
                  <Zap size={14} className="text-brand-primary" /> {biz.city}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {biz.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="w-12 h-12 text-brand-primary/40 mx-auto mb-12" />
          <p className="text-3xl md:text-5xl font-bold leading-[1.15] mb-12 tracking-tight">
            &quot;The ideas and timelines placed to bring growth to the business
            is one that I didn&apos;t have prior to the meetings.&quot;
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-brand-primary text-lg italic">
              — Modest Fashion Business, Lagos
            </p>
            <p className="text-white/40 text-sm uppercase tracking-widest">
              March 2026 Cohort
            </p>
          </div>
        </div>
      </section>

      {/* 4. REFINED EVENT GALLERY */}
      <section className="py-24 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h3 className="text-4xl font-bold tracking-tight text-[#2D102D]">
              Moments from the Cohort
            </h3>
            <a
              href="#"
              className="group flex items-center gap-3 text-brand-primary font-bold"
            >
              Explore Full Gallery{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
          <div className="grid grid-cols-12 gap-6 h-175">
            <div className="col-span-12 md:col-span-7 h-full relative rounded-4xl overflow-hidden shadow-lg border-4 border-white">
              <Image
                src="/events/tw-1.jpg"
                alt="Mentorship"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
              <div className="relative rounded-4xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/events/tw-2.jpg"
                  alt="Networking"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-4xl overflow-hidden shadow-lg border-4 border-white bg-brand-primary p-10 text-white flex flex-col justify-end">
                <h4 className="text-2xl font-bold mb-2 text-white">
                  26 Applications
                </h4>
                <p className="text-white/70 text-sm">
                  Across Nigeria and Ghana in our first edition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE LUNCH EXPERIENCE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                icon: <Coffee />,
                title: "Curated Networking",
                desc: "Strategic seat mapping with leaders who align with your industry."
              },
              {
                icon: <Sparkles />,
                title: "Exchange Ideas",
                desc: "A private space to discuss challenges in Tech, Business, and Governance."
              },
              {
                icon: <MoveRight />,
                title: "Open Doors",
                desc: "Actionable collaboration and shared opportunities across the network."
              }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-surface flex items-center justify-center text-brand-primary">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
