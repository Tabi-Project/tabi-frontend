"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees. */
  max?: number;
};

/** Gently tilts toward the pointer in 3D, with a moving glare highlight. */
export function TiltCard({ children, className = "", max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 20 });
  const sy = useSpring(py, { stiffness: 180, damping: 20 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const glare = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.55) 0%, transparent 55%)`
  );

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          px.set((e.clientX - r.left) / r.width);
          py.set((e.clientY - r.top) / r.height);
        }}
        onPointerLeave={() => {
          px.set(0.5);
          py.set(0.5);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {children}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{ background: glare }}
        />
      </motion.div>
    </div>
  );
}
