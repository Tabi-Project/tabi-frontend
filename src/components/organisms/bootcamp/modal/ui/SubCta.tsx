"use client";
import { motion } from "framer-motion";
import { C } from "../shared";

export function SubCta({
  onClick,
  href,
  children
}: {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) {
  const cls =
    "w-full py-[13px] rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer";
  const style = {
    color: C.brand,
    border: `1px solid rgba(113,40,111,0.18)`,
    background: `rgba(113,40,111,0.04)`
  };
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ background: "rgba(113,40,111,0.08)" }}
          className={cls}
          style={style}
        >
          {children}
        </motion.div>
      </a>
    );
  }
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ background: "rgba(113,40,111,0.08)" }}
      className={cls}
      style={style}
    >
      {children}
    </motion.button>
  );
}
