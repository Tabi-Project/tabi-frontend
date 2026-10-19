import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  /** Fade the left / right edges into the background. */
  fade?: boolean;
};

/** Infinite horizontal ticker. Children are rendered twice for a seamless loop. */
export function Marquee({
  children,
  className = "",
  duration = 40,
  reverse = false,
  fade = true
}: MarqueeProps) {
  return (
    <div
      className={`relative flex overflow-hidden ${className}`}
      style={
        fade
          ? {
              maskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)"
            }
          : undefined
      }
    >
      <div
        className="flex w-max shrink-0 animate-marquee pause-on-hover"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
