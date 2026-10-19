"use client";

import type { ReactNode } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Reveal } from "@/components/atoms/Reveal";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  eyebrowTone?: "pink" | "white" | "peach" | "mint" | "plum";
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Light text for use on plum / dark surfaces. */
  inverted?: boolean;
  as?: "h1" | "h2" | "h3";
  size?: "md" | "lg" | "xl";
  className?: string;
  descriptionClassName?: string;
  /** Extra content (e.g. buttons) placed under the description. */
  children?: ReactNode;
};

const SIZES = {
  md: "text-[clamp(1.75rem,3.2vw,2.5rem)]",
  lg: "text-[clamp(2rem,4.2vw,3.25rem)]",
  xl: "text-[clamp(2.4rem,5.4vw,4rem)]"
};

/**
 * Figma section header: soft pill eyebrow, Lato bold title (with optional
 * <GradientText> highlight) and a muted supporting paragraph.
 */
export default function SectionHeading({
  eyebrow,
  eyebrowTone = "pink",
  title,
  description,
  align = "left",
  inverted = false,
  as: Tag = "h2",
  size = "lg",
  className = "",
  descriptionClassName = "",
  children
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {eyebrow && (
        <Reveal y={12} className="mb-5">
          <Eyebrow tone={inverted ? "plum" : eyebrowTone}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <Tag
          className={`${SIZES[size]} font-bold leading-[1.12] tracking-[-0.01em] ${inverted ? "text-white" : "text-tabi-ink"}`}
        >
          {title}
        </Tag>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 text-base leading-[1.75] ${inverted ? "text-white/70" : "text-tabi-body"} ${centered ? "mx-auto max-w-2xl" : "max-w-xl"} ${descriptionClassName}`}
          >
            {description}
          </p>
        </Reveal>
      )}
      {children && (
        <Reveal delay={0.18} className="mt-8">
          {children}
        </Reveal>
      )}
    </div>
  );
}
