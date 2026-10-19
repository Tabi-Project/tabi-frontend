import type { ReactNode } from "react";

type EyebrowTone = "pink" | "white" | "peach" | "mint" | "plum";

const TONES: Record<EyebrowTone, string> = {
  pink: "bg-tabi-pink text-brand-primary",
  white: "bg-white text-brand-primary shadow-[0_2px_10px_rgba(113,40,111,0.08)]",
  peach: "bg-tabi-peach text-tabi-brown",
  mint: "bg-tabi-green text-[#2F8F5B]",
  plum: "bg-white/10 text-white ring-1 ring-white/15"
};

type EyebrowProps = {
  children: ReactNode;
  tone?: EyebrowTone;
  /** Show a small status dot before the label. */
  dot?: boolean;
  className?: string;
};

/** The soft pill label from the Figma ("The Team", "Mission", event tags). */
export function Eyebrow({ children, tone = "pink", dot = false, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium leading-none ${TONES[tone]} ${className}`}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-40" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
