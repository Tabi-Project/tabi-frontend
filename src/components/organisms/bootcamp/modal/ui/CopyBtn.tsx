"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { C } from "../shared";

export function CopyBtn({
  value,
  label = "Copy"
}: {
  value: string;
  label?: string;
}) {
  const [done, setDone] = useState(false);
  function copy() {
    navigator.clipboard.writeText(value);
    setDone(true);
    setTimeout(() => setDone(false), 2200);
  }
  return (
    <motion.button
      onClick={copy}
      whileTap={{ scale: 0.92 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 cursor-pointer"
      style={{
        background: done ? C.brand : `rgba(113,40,111,0.08)`,
        color: done ? "white" : C.brand
      }}
    >
      {done ? (
        <>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path
              d="M1 4.5l2.5 2.5 4.5-4.5"
              stroke="white"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <rect
              x="3"
              y="3"
              width="5.5"
              height="5.5"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M2.5 6H2A1 1 0 011 5V2a1 1 0 011-1h3a1 1 0 011 1v.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
          {label}
        </>
      )}
    </motion.button>
  );
}
