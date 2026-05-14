"use client";
import { motion } from "framer-motion";
import { C } from "../shared";

export function Back({
  onClick,
  label = "Back"
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: -2 }}
      className="flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors duration-150"
      style={{ color: C.subtle }}
      onMouseEnter={(e) => (e.currentTarget.style.color = C.brand)}
      onMouseLeave={(e) => (e.currentTarget.style.color = C.subtle)}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M8 2L3.5 6 8 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </motion.button>
  );
}
