"use client";

import Image from "next/image";

import { withBasePath } from "@/constants/paths";

const PARTNERS = [
  {
    id: "yip",
    src: withBasePath("/partners/yip.png"),
    alt: "YIP – Yebox Internship Program"
  },
  {
    id: "gutsy",
    src: withBasePath("/partners/gutsy-woman.png"),
    alt: "GIV The Gutsy Woman"
  },
  {
    id: "yebox",
    src: withBasePath("/partners/yebox.png"),
    alt: "Yebox Technologies"
  },
  {
    id: "genesys",
    src: withBasePath("/partners/genesys.png"),
    alt: "Genesys"
  }
];

export default function Partners() {
  return (
    <section className="w-full bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-350 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
        {/* ── Left: label ── */}
        <p className="shrink-0 max-w-96 text-2xl font-semibold text-black leading-relaxed text-center sm:text-left">
          Partners with Tabi Empowerment and Education (TEE) Foundation
        </p>

        {/* thin vertical divider – desktop only */}
        <div className="hidden sm:block h-12 w-px bg-white/10 shrink-0" />

        {/* ── Right: logo row ── */}
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8 sm:gap-12 flex-1">
          {PARTNERS.map((p) => (
            <div
              key={p.id}
              className="relative h-14 w-28 sm:h-16 sm:w-32 grayscale brightness-150 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image src={p.src} alt={p.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
