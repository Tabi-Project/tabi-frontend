import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import SlotsAvailableBadge from "@/components/atoms/SlotsAvailableBadge";
import { SLOTS_REMAINING, TOTAL_SLOTS } from "@/constants/consultancy";

export default function ConsultancyTeaser() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ background: "#F5F5F5" }}
        >
          {/* Dot pattern */}
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #71286F 1px, transparent 1px)",
              backgroundSize: "14px 14px"
            }}
          />

          <div className="relative z-10 max-w-xl">
            <div className="mb-4">
              <SlotsAvailableBadge
                remaining={SLOTS_REMAINING}
                total={TOTAL_SLOTS}
              />
            </div>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-[#1a1a2e] leading-snug mb-3">
              Free Business Consultancy — 5 Slots Monthly
            </h2>
            <p className="text-base text-[#666] leading-relaxed">
              Get a free one-on-one session with an expert who can help you grow
              your business, sharpen your strategy, and navigate your next steps
              with clarity.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link href="/consultancy#apply">
              <Button variant="primary" size="md">
                Apply for a Free Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
