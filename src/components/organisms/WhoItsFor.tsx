import { WHO_ITS_FOR } from "@/constants/consultancy";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export default function WhoItsFor() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#F3E8FF" }}
            >
              Who It&apos;s For
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a2e] leading-snug mb-6">
              Built for{" "}
              <span className="text-brand-primary">
                women who mean business
              </span>
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-8">
              Whether you&apos;re just starting out or already running a
              business that needs a breakthrough — this consultancy is designed
              for you.
            </p>
            <Link href="#apply">
              <Button variant="primary" size="md">
                Apply for Your Slot
              </Button>
            </Link>
          </div>

          {/* Right — checklist cards */}
          <div className="flex flex-col gap-3">
            {WHO_ITS_FOR.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl px-5 py-4 border border-[#F0E8F5] bg-[#FDF4FF] hover:border-brand-primary hover:bg-white transition-all duration-200"
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-extrabold"
                  style={{ background: "#71286F" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm font-medium text-[#333] leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
