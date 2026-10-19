import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  variant?: "brand" | "warm";
};

/** Highlighted heading word — the purple → orchid gradient from the Figma. */
export function GradientText({ children, className = "", variant = "brand" }: GradientTextProps) {
  return (
    <span
      className={`${variant === "warm" ? "text-gradient-warm" : "text-gradient-brand"} ${className}`}
    >
      {children}
    </span>
  );
}
