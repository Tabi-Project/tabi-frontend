"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the element's pass through the viewport. Negative moves up faster. */
  offset?: number;
  /** Optional rotation (deg) across the same range. */
  rotate?: number;
};

/** Moves its children at a different speed to the page as it scrolls by. */
export function Parallax({
  children,
  className,
  offset = 60,
  rotate = 0
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const y = useTransform(smooth, [0, 1], [offset, -offset]);
  const r = useTransform(smooth, [0, 1], [-rotate, rotate]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={reduced ? undefined : { y, rotate: rotate ? r : undefined }}
    >
      {children}
    </motion.div>
  );
}
