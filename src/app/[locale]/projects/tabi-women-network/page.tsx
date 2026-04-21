"use client";

import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import {
  MoveRight,
  Coffee,
  Sparkles,
  Quote,
  Zap,
  ArrowRight,
  MapPin,
  Users,
  Globe,
  Star,
  Calendar,
  ExternalLink
} from "lucide-react";
import { TWNHero } from "@/components/organisms/TWNHero";
import { TWNDirectory } from "@/components/organisms/TWNDirectory";
import Link from "next/link";

export default function TabiWomenNetworkPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/10">
      {/* 1. HERO SECTION */}
      <TWNHero />

      {/* 2. NEXT EDITION: BENIN REPUBLIC */}
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

      {/* 3. THE LIVING DIRECTORY (Centerpiece) */}
      <TWNDirectory />

      {/* 4. EVENT GALLERY (Pointer to Community Page) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D102D] mb-4">
                Captured{" "}
                <span className="text-brand-primary font-serif italic">
                  Moments.
                </span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                A glimpse into the high-growth atmosphere of our cohorts. View
                our full history in the community archive.
              </p>
            </div>
            {/* Pointer link to community page */}
            <Link
              to="/community"
              className="group flex items-center gap-4 text-brand-primary font-black uppercase text-xs tracking-[0.2em] bg-brand-surface px-8 py-5 rounded-full border border-brand-primary/5 hover:bg-brand-primary hover:text-white transition-all duration-500"
            >
              See Community Gallery{" "}
              <ExternalLink
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 h-150">
            <div className="col-span-12 md:col-span-8 h-full relative rounded-[3rem] overflow-hidden shadow-2xl group">
              <Image
                src="/events/tw-main.jpg"
                alt="Networking Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl group">
                <Image
                  src="/events/tw-side-1.jpg"
                  alt="Collaborative Session"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Interactive Pointer Card */}
              <div
                className="relative rounded-tabi-card overflow-hidden bg-brand-primary p-10 text-white flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-[#2D102D] transition-colors"
                onClick={() => (window.location.href = "/community")}
              >
                <Users size={40} className="mb-4 opacity-50" />
                <h4 className="text-xl font-bold mb-2">+ 450 More Photos</h4>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  Visit Community Archive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NETWORK IMPACT SUMMARY */}
      <section className="py-24 bg-brand-surface/30 border-y border-purple-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Network Applications", val: "26" },
              { label: "African Countries", val: "02" },
              { label: "Industry Sectors", val: "06" },
              { label: "Digital Success Rate", val: "100%" }
            ].map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-5xl font-black text-brand-primary tracking-tighter transition-transform group-hover:scale-110 duration-300">
                  {stat.val}
                </p>
                <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PAST EDITIONS: THE ENUGU REPORT */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-primary/10 rounded-[3.5rem] -z-10" />
              <div className="relative aspect-4/5 md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/events/enugu-edition.jpg"
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
                Our inaugural edition in Enugu performed deep-dive digital
                audits and infrastructure roadmaps for every member in the room.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  className="bg-brand-primary text-white rounded-full px-10 py-7 font-bold hover:shadow-2xl transition-all"
                  onClick={() => window.open("https://yourlink.com", "_blank")}
                >
                  Read the Enugu Report{" "}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CITY REQUEST FORM */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#2D102D] rounded-[4rem] p-8 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-125 h-125 bg-brand-primary/20 blur-[150px] rounded-full -mr-40 -mt-40 animate-pulse" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-brand-primary text-[10px] font-black uppercase tracking-[0.2em]">
                  <MapPin size={12} /> Crowd-Sourced Expansion
                </div>
                <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Where should Tabi <br />
                  <span className="text-brand-primary font-serif italic lowercase tracking-normal">
                    land next?
                  </span>
                </h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-md">
                  We don’t choose locations by chance. Vote for your city to
                  bring the TWN experience to your region.
                </p>
              </div>

              <div className="relative">
                <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 min-h-125 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-brand-primary/20 rounded-4xl flex items-center justify-center text-brand-primary mb-8 animate-bounce">
                    <Globe size={40} />
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-4">
                    City Voting Opening Soon
                  </h4>
                  <p className="text-white/40 text-sm mb-10 max-w-xs">
                    We are currently setting up the official polling
                    infrastructure. Check back shortly to cast your vote.
                  </p>
                  <div className="w-full max-w-sm flex bg-white/10 p-1.5 rounded-2xl border border-white/10 focus-within:border-brand-primary transition-all">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="bg-transparent border-none text-white text-sm px-4 py-3 outline-none w-full placeholder:text-white/20"
                    />
                    <button className="bg-brand-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-brand-primary transition-all shrink-0">
                      Notify Me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. THE MANIFESTO */}
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
          <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-medium italic italic">
            &quot;We are building a decentralized ecosystem for African women
            leaders. No gatekeepers. No fluff. Just the technology, governance,
            and social capital needed to build global legacies.&quot;
          </p>
        </div>
      </section>

      {/* 9. NETWORK VALUE PILLARS */}
      <section className="py-32 bg-brand-surface/30 border-t border-purple-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16">
            {[
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
            ].map((item, i) => (
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

      {/* 10. TESTIMONIAL FOOTNOTE */}
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
    </div>
  );
}
    