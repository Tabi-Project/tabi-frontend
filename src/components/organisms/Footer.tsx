"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF
} from "react-icons/fa6";
import { FOOTER_LINKS } from "@/constants/footer";

const NAV_COLUMNS = [
  { heading: "Foundation", links: FOOTER_LINKS.foundation },
  { heading: "Legal & Compliance", links: FOOTER_LINKS.legal },
  { heading: "Projects", links: FOOTER_LINKS.projects }
];

const SOCIAL_LINKS = [
  { icon: FaYoutube, label: "YouTube", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaXTwitter, label: "X (Twitter)", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" }
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-white text-black">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-350 px-20 pt-16 pb-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left – brand + subscribe */}
        <div className="shrink-0 max-w-xs">
          <p className="text-[22px] font-light text-black/70 leading-snug tracking-tight">
            Tabi Empowerment and
          </p>
          <p className="text-[22px] font-light text-black/70 leading-snug tracking-tight">
            <span className="font-bold italic text-brand-primary">
              Educational
            </span>{" "}
            Foundation
          </p>

          {/* Email subscribe pill */}
          <div className="mt-8 flex items-center bg-white rounded-full overflow-hidden pl-4 pr-1 py-1 gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 min-w-0 bg-transparent text-sm text-gray-500 placeholder:text-gray-400 outline-none"
            />
            <button
              type="button"
              className="shrink-0 bg-brand-primary hover:bg-brand-secondary transition-colors text-white text-sm font-semibold rounded-full px-5 py-2.5 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Right – nav columns */}
        <div className="flex gap-16 flex-wrap">
          {NAV_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="min-w-30">
              <h4 className="text-sm font-semibold text-black mb-6 tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-4">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-black/70 hover:text-brand-primary transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-350 px-20">
        <hr className="border-white/10" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-350 px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/Footer-logo.svg"
            alt="TEE Foundation"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-black text-center">
          ©{new Date().getFullYear()} TEE Foundation Inc. All rights reserved.
          Various trademarks held by their respective owners.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4 shrink-0">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-black hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
