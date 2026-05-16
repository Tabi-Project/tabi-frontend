"use client";
import { motion } from "framer-motion";
import { C } from "../shared";

export function Err({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-xs mt-1.5 ml-0.5"
      style={{ color: C.error }}
    >
      {msg}
    </motion.p>
  );
}
