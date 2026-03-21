import Image from "next/image";
import { withBasePath } from "@/constants/paths";

const TESTIMONIAL = {
  avatar: withBasePath("/testimonial-image-1.jpg"),
  quote:
    '"Tabi Empowerment and Educational Foundation transformed my perspective on learning. Their dedication to innovative education initiatives is truly inspiring! I feel empowered and inspired every day, knowing that I\'m part of a community that truly cares about making a positive impact."',
  name: "Clarrise M. Ochieng",
  role: "Head of Operations at Yebox"
};

export default function TestimonialStrip() {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 bg-[#FFF5FF] py-14 sm:py-20 my-6">
      <div className="mx-auto max-w-3xl px-6 sm:px-12 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
        {/* Avatar — Figma dimensions: 189×264, border-radius 126px */}
        <div
          className="shrink-0 relative overflow-hidden"
          style={{
            width: 189,
            height: 264,
            borderRadius: 126,
            minWidth: 189
          }}
        >
          <Image
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.name}
            fill
            sizes="189px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Quote */}
        <div className="flex flex-col justify-center">
          <p className="text-sm sm:text-base text-[#444] leading-relaxed mb-6">
            {TESTIMONIAL.quote}
          </p>
          <p className="text-sm font-bold text-[#121212]">
            {TESTIMONIAL.name},{" "}
            <span className="">{TESTIMONIAL.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
