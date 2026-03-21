import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import {
  APPLICATION_DEADLINE,
  SLOTS_REMAINING,
  TOTAL_SLOTS
} from "@/constants/consultancy";

export default function ConsultancyTeaser() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ background: "#1a1a2e" }}
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
          <span
            className="absolute right-12 bottom-0 text-[8rem] font-extrabold leading-none select-none pointer-events-none hidden lg:block"
            style={{ color: "rgba(255,255,255,0.04)" }}
          >
            FREE
          </span>

          <div className="relative z-10 max-w-xl">
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
              We&apos;ll help solve challenges in Marketing, Finance, Tech, Strategy
              and Sales. Only {SLOTS_REMAINING} of {TOTAL_SLOTS} slots available
              this month.
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
          </div>

          <div className="relative z-10 shrink-0 flex flex-col items-start gap-3">
            <Link href="/consultancy#apply">
              <Button variant="primary" size="md">
                Apply for a Free Session →
              </Button>
            </Link>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              T&Cs Apply
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
