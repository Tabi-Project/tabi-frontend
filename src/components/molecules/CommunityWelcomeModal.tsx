"use client";

import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface CommunityWelcomeModalProps {
  name: string;
  onClose: () => void;
  whatsappUrl?: string;
}

export default function CommunityWelcomeModal({
  name,
  onClose,
  whatsappUrl = "https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo"
}: CommunityWelcomeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* ── Top decorative band ── */}
        <div
          className="relative h-36 flex items-center justify-center overflow-hidden"
          style={{ background: "#F5EFE8" }}
        >
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8B6340 1px, transparent 1px)",
              backgroundSize: "14px 14px"
            }}
          />
          {/* Celebration icon */}
          <div
            className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-md"
            style={{ background: "white" }}
          >
            <span className="text-4xl select-none">🎉</span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#888] hover:bg-black/10 transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* ── Content ── */}
        <div className="px-8 pb-8 pt-6 text-center">
          <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-2">
            Welcome to the Community
            {name ? `, ${name.split(" ")[0]}` : ""}!
          </h2>
          <p className="text-sm text-[#666] leading-relaxed mb-6">
            Your details have been saved. You&apos;re now part of the TEE
            Foundation community — stay connected for the latest initiatives,
            events, and opportunities.
          </p>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-6" />

          <p className="text-xs font-semibold text-[#888] uppercase tracking-widest mb-4">
            Join our WhatsApp Community
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all active:scale-95 shadow-sm"
            style={{ background: "#25D366" }}
          >
            <FaWhatsapp size={20} />
            Join WhatsApp Group
          </a>

          <button
            onClick={onClose}
            className="mt-3 w-full py-3 rounded-full text-sm font-medium text-[#888] hover:text-[#1a1a2e] transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
