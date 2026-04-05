"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import {
  APPLICATION_DEADLINE,
  SLOTS_REMAINING,
  TOTAL_SLOTS
} from "@/constants/consultancy";
import { motion, Variants } from "framer-motion";

export default function ConsultancyTeaser() {
  // Container will choreograph text and button to appear one after another
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const textBlockVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const ctaBlockVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ background: "#1a1a2e" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Dot pattern */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #C084E8 1px, transparent 1px)",
              backgroundSize: "14px 14px"
            }}
          />

          {/* Decorative large "FREE" text */}
          <motion.span
            className="absolute right-12 bottom-0 text-[8rem] font-extrabold leading-none select-none pointer-events-none hidden lg:block"
            style={{ color: "rgba(255,255,255,0.04)" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1, ease: "easeOut" }
              }
            }}
          >
            FREE
          </motion.span>

          {/* Left Text Block */}
          <motion.div
            className="relative z-10 max-w-xl"
            variants={textBlockVariants}
          >
            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-extrabold tracking-widest uppercase px-4 py-2 rounded-full border-2"
                style={{
                  borderColor: "#C084E8",
                  color: "#C084E8",
                  background: "rgba(192,132,232,0.1)"
                }}
              >
                ✦ 100% Free
              </span>
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: "rgba(113,40,111,0.4)", color: "#E4B8F5" }}
              >
                Closes {APPLICATION_DEADLINE}
              </span>
            </div>

            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold text-white leading-snug mb-3">
              Free Business Consultancy to{" "}
              <span style={{ color: "#C084E8" }}>5 Women-Led Businesses</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              We&apos;ll help solve challenges in Marketing, Finance, Tech,
              Strategy and Sales. Only {SLOTS_REMAINING} of {TOTAL_SLOTS} slots
              available this month.
            </p>

            {/* Focus area pills */}
            <div className="flex flex-wrap gap-2">
              {["Marketing", "Finance", "Tech", "Strategy", "Sales"].map(
                (area) => (
                  <span
                    key={area}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(113,40,111,0.35)",
                      color: "#E4B8F5"
                    }}
                  >
                    {area}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right CTA Block */}
          <motion.div
            className="relative z-10 shrink-0 flex flex-col items-start gap-3"
            variants={ctaBlockVariants}
          >
            <Link href="/consultancy#apply">
              <Button variant="primary" size="md">
                Apply for a Free Session →
              </Button>
            </Link>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              T&Cs Apply
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
