"use client";
import { motion } from "framer-motion";
import { GRAD } from "../shared";
import { Spin } from "./Spin";

export function Cta({
  onClick,
  loading,
  children,
  icon
}: {
  onClick?: () => void;
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={loading}
      whileHover={
        loading
          ? {}
          : { scale: 1.012, boxShadow: "0 8px 28px rgba(113,40,111,0.35)" }
      }
      whileTap={loading ? {} : { scale: 0.988 }}
      className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
      style={{
        background: GRAD,
        boxShadow: "0 4px 18px rgba(113,40,111,0.24)"
      }}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2.5">
          <Spin /> Saving…
        </span>
      ) : (
        <span className="inline-flex items-center gap-2.5">
          {icon}
          {children}
        </span>
      )}
    </motion.button>
  );
}
