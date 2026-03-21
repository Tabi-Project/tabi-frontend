import Image from "next/image";
import { withBasePath } from "@/constants/paths";

const TESTIMONIAL = {
  avatar: withBasePath("/testimonial-image.png"),
  quote:
    '"Tabi Empowerment and Educational Foundation transformed my perspective on learning. Their dedication to innovative education initiatives is truly inspiring! I feel empowered and inspired every day, knowing that I\'m part of a community that truly cares about making a positive impact."',
  name: "John Doe",
  role: "Head of Operations at Yebox",
};

export default function TestimonialStrip() {
  return (
    <div className="w-full bg-[#FFF5FF] py-10 sm:py-14 px-6 sm:px-16 lg:px-24 my-6">
      <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start gap-6">
        <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative border border-brand-primary/20">
          <Image
            src={TESTIMONIAL.avatar}
            alt={TESTIMONIAL.name}
            fill
            sizes="80px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm sm:text-base text-[#333] leading-relaxed">
            {TESTIMONIAL.quote}
          </p>
          <p className="mt-4 text-sm font-bold text-[#1a1a2e]">
            {TESTIMONIAL.name},{" "}
            <span className="font-normal text-[#555]">{TESTIMONIAL.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}