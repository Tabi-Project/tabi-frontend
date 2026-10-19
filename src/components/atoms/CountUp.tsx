"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type CountUpProps = {
  /** Any display value, e.g. "10K+", "₦5k", "100%", "2 Weeks", "1:1". */
  value: string | number;
  className?: string;
  duration?: number;
};

/**
 * Animates the first number found in `value` from 0 when it scrolls into view,
 * keeping any prefix / suffix ("₦", "K+", "%", " Weeks") intact.
 * Values with no number, or with several (e.g. "1:1"), render as-is.
 */
export function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const text = String(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  const matches = text.match(/\d[\d,]*(\.\d+)?/g);
  const animatable = matches?.length === 1;
  const raw = animatable ? matches![0] : "";
  const target = animatable ? parseFloat(raw.replace(/,/g, "")) : 0;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const useGrouping = raw.includes(",");
  const [prefix, suffix] = animatable ? text.split(raw) : [text, ""];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!animatable || !inView || reduced) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setCurrent
    });
    return () => controls.stop();
  }, [animatable, inView, reduced, target, duration]);

  if (!animatable) return <span className={className}>{text}</span>;

  const shown = reduced || !inView ? (inView ? target : 0) : current;
  const formatted = shown.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping
  });

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden className="tabular-nums">
        {prefix}
        {formatted}
        {suffix}
      </span>
    </span>
  );
}
