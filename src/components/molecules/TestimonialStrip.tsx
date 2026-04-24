"use client";

import Image from "next/image";
import type { CMSTestimonial } from "@/lib/cms";
import { motion } from "framer-motion";

interface TestimonialStripProps {
  testimonial?: CMSTestimonial;
}

export default function TestimonialStrip({
  testimonial
}: TestimonialStripProps) {
  if (!testimonial) return null;

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 bg-[#FFF5FF] py-14 sm:py-20 my-6 overflow-hidden">
      <motion.div
        className="mx-auto max-w-3xl px-6 sm:px-12 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {/* Avatar — Figma: 189×264, border-radius 126px */}
        <motion.div
          className="shrink-0 relative overflow-hidden"
          style={{ width: 189, height: 264, borderRadius: 126, minWidth: 189 }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
        >
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="189px"
              className="object-cover object-top"
              loading="lazy"
              quality={80}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "#F3E8FF" }}
            >
              <span className="text-3xl font-extrabold text-brand-primary opacity-30">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          )}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="flex flex-col justify-center "
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <p className="text-sm sm:text-base text-[#444] leading-relaxed mb-6">
            &ldquo;{testimonial.quote.replace(/^[""]|[""]$/g, "")}&rdquo;
          </p>

          <p className="text-sm font-bold text-[#121212]">
            {testimonial.name}, // <span className="">{testimonial.role}</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
