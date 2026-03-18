"use client";

import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface CommunityWelcomeModalProps {
  name: string;
  onClose: () => void;
  whatsappUrl?: string;
}

// ─── Confetti particle config ──────────────────────────────────────────────────
const PARTICLES = [
  { color: "#71286F", x: 50, delay: 0, size: 8, shape: "circle" },
  { color: "#E07A10", x: 30, delay: 0.1, size: 6, shape: "rect" },
  { color: "#25D366", x: 70, delay: 0.15, size: 7, shape: "circle" },
  { color: "#71286F", x: 20, delay: 0.2, size: 5, shape: "rect" },
  { color: "#F5A623", x: 80, delay: 0.05, size: 9, shape: "circle" },
  { color: "#1070C0", x: 45, delay: 0.25, size: 6, shape: "rect" },
  { color: "#71286F", x: 60, delay: 0.3, size: 5, shape: "circle" },
  { color: "#E07A10", x: 85, delay: 0.1, size: 7, shape: "rect" },
  { color: "#25D366", x: 15, delay: 0.2, size: 8, shape: "circle" },
  { color: "#F5A623", x: 55, delay: 0.35, size: 5, shape: "rect" },
  { color: "#1070C0", x: 35, delay: 0.15, size: 6, shape: "circle" },
  { color: "#71286F", x: 90, delay: 0.4, size: 7, shape: "rect" }
];

export default function CommunityWelcomeModal({
  name,
  onClose,
  whatsappUrl = "https://chat.whatsapp.com/CdOuCwdpNez6FgmckwojNo"
}: CommunityWelcomeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const firstName = name ? name.split(" ")[0] : null;

  return (
    <>
      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes confetti-fall {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 1; }
          100% { transform: translateY(130px) rotate(720deg); opacity: 0; }
        }
        @keyframes pop-in {
          0%   { transform: scale(0.5); opacity: 0; }
          60%  { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes emoji-bounce {
          0%, 100% { transform: scale(1) rotate(-5deg); }
          50%       { transform: scale(1.15) rotate(5deg); }
        }
        .confetti-particle {
          position: absolute;
          top: 0;
          animation: confetti-fall 1.4s ease-in forwards infinite;
        }
        .celebration-icon {
          animation: pop-in 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards,
          emoji-bounce 2s ease-in-out 0.5s infinite;
        }
      `}</style>

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          ref={modalRef}
          className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* ── Top decorative band with confetti ── */}
          <div
            className="relative h-36 flex items-center justify-center overflow-hidden"
            style={{ background: "#F5EFE8" }}
          >
            {/* Static dot pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #8B6340 1px, transparent 1px)",
                backgroundSize: "14px 14px"
              }}
            />

            {/* Confetti particles */}
            {PARTICLES.map((p, i) => (
              <span
                key={i}
                className="confetti-particle"
                style={{
                  left: `${p.x}%`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${1.2 + p.delay}s`,
                  width: p.size,
                  height: p.shape === "rect" ? p.size * 0.5 : p.size,
                  borderRadius: p.shape === "circle" ? "50%" : "2px",
                  background: p.color
                }}
              />
            ))}

            {/* Celebration emoji */}
            <div
              className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center shadow-md"
              style={{ background: "white" }}
            >
              <span className="celebration-icon text-4xl select-none inline-block">
                🎉
              </span>
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
            <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3">
              {firstName
                ? `You're in, ${firstName}! 🌟`
                : "You're officially in! 🌟"}
            </h2>

            <p className="text-sm text-[#555] leading-relaxed mb-2">
              We&apos;re so glad you&apos;re here. You&apos;ve just joined a
              growing circle of passionate women shaping the future of
              technology in Africa — and we can&apos;t wait for you to be part
              of it.
            </p>

            <p className="text-sm text-[#555] leading-relaxed mb-6">
              Stay close to everything happening at TEE Foundation — events,
              opportunities, stories, and more — by joining our WhatsApp
              community. Come say hello! 👋
            </p>

            <div className="h-px bg-gray-100 mb-6" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full text-white font-semibold text-sm transition-all active:scale-95 shadow-sm hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <FaWhatsapp size={20} />
              Join the WhatsApp Community
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
