"use client";
import { motion } from "framer-motion";
import { C } from "../shared";

export function X({ onClose }: { onClose: () => void }) {
  return (
    <motion.button
      onClick={onClose}
      aria-label="Close"
      whileHover={{ background: C.surface }}
      whileTap={{ scale: 0.9 }}
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150"
      style={{ color: C.subtle }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M1 1l10 10M11 1L1 11"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </motion.button>
  );
}
