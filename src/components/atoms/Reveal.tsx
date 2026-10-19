"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE_TABI = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Vertical offset to rise from (px). */
  y?: number;
  /** Horizontal offset to slide from (px). */
  x?: number;
  /** Starting scale. */
  scale?: number;
  /** Starting blur (px). */
  blur?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "section" | "li" | "span" | "article" | "header";
  id?: string;
};

/** Fades + rises its children into view once they scroll on screen. */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 32,
  x = 0,
  scale = 1,
  blur = 0,
  once = true,
  amount = 0.2,
  as = "div",
  id
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      id={id}
      className={className}
      initial={
        reduced
          ? { opacity: 0 }
          : {
              opacity: 0,
              y,
              x,
              scale,
              filter: blur ? `blur(${blur}px)` : undefined
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: blur ? "blur(0px)" : undefined
      }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE_TABI }}
    >
      {children}
    </MotionTag>
  );
}

const staggerContainer = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } }
});

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
};

/** Parent that reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.15,
  as = "div"
}: StaggerProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
  scale?: number;
  as?: "div" | "li" | "article" | "span";
  /** Lift on hover (px). */
  hoverLift?: number;
};

export function StaggerItem({
  children,
  className,
  y = 28,
  x = 0,
  scale = 1,
  as = "div",
  hoverLift
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];
  const variants: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y, x, scale },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: EASE_TABI }
    }
  };
  return (
    <MotionTag
      className={className}
      variants={variants}
      whileHover={
        hoverLift && !reduced
          ? { y: -hoverLift, transition: { duration: 0.3, ease: EASE_TABI } }
          : undefined
      }
    >
      {children}
    </MotionTag>
  );
}
