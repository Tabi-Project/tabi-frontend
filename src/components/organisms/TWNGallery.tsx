// components/organisms/TWNGallery.tsx
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users } from "lucide-react";

export default function TWNGallery() {
  return (
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
              A glimpse into the high-growth atmosphere of our cohorts. View our
              full history in the community archive.
            </p>
          </div>
          <Link
            href="/community"
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
              src="/events/enugu-group-shot.jpeg"
              alt="Networking Session"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
          <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6">
            <div className="relative rounded-tabi-card overflow-hidden shadow-xl group">
              <Image
                src="/events/tw-side.jpeg"
                alt="Collaborative Session"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div
              className="relative rounded-tabi-card overflow-hidden bg-brand-primary p-10 text-white flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-[#2D102D] transition-colors"
              onClick={() => (window.location.href = "/community")}
            >
              <Users size={40} className="mb-4 opacity-50" />
              <h4 className="text-xl font-bold mb-2">+ More Photos</h4>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Visit Community Archive
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
