"use client";
import { motion, AnimatePresence } from "framer-motion";
import { C } from "../shared";
import { Err } from "./Err";

export function Check({
  checked,
  onChange,
  children,
  error
}: {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="flex items-start gap-3 cursor-pointer">
        <motion.div
          onClick={onChange}
          animate={{
            background: checked ? C.brand : "white",
            borderColor: error ? C.error : checked ? C.brand : C.border
          }}
          transition={{ duration: 0.15 }}
          className="mt-0.5 w-[18px] h-[18px] min-w-[18px] rounded-md border-2 flex items-center justify-center cursor-pointer"
        >
          <AnimatePresence>
            {checked && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
              >
                <path
                  d="M1 4.5l2.5 2.5 4.5-4.5"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
        <span className="text-sm leading-relaxed" style={{ color: C.body }}>
          {children}
        </span>
      </label>
      <Err msg={error} />
    </div>
  );
}
