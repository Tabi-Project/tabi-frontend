import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import SlotsAvailableBadge from "@/components/atoms/SlotsAvailableBadge";
import { SLOTS_REMAINING, TOTAL_SLOTS } from "@/constants/consultancy";
import { withBasePath } from "@/constants/paths";

export default function ConsultancyHero() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-16 lg:pt-24">
        {/* Breadcrumb
        <p className="text-sm text-[#666] mb-10">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <span className="mx-2 text-[#ccc]">&gt;&gt;</span>
          <span className="text-brand-primary font-medium">
            Business Consultancy
          </span>
        </p> */}

        {/* ── Two-column hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center pb-20 lg:pb-28">
          {/* Left — copy */}
          <div>
            <div className="mb-6">
              <SlotsAvailableBadge
                remaining={SLOTS_REMAINING}
                total={TOTAL_SLOTS}
              />
            </div>

            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-[#1a1a2e] leading-[1.15] mb-6">
              Free Business{" "}
              <span className="text-brand-primary">Consultancy</span> — Built
              for African Entrepreneurs
            </h1>

            <p className="text-base sm:text-lg text-[#555] leading-relaxed mb-8">
              Every month, TEE Foundation opens 5 free one-on-one consultancy
              sessions for businesses and entrepreneurs who need strategic
              support to grow. No cost, no catch — just expert guidance tailored
              to where you are right now.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "5", label: "Free slots monthly" },
                { value: "60m", label: "Per session" },
                { value: "100%", label: "Free, always" }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-brand-primary leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#888] font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link href="#apply">
              <Button variant="primary" size="md">
                Apply for a Free Session
              </Button>
            </Link>
          </div>

          {/* Right — visual card */}
          <div className="relative">
            {/* Main image card */}
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 w-full">
              <Image
                src={withBasePath("/consultancy/hero.jpg")}
                alt="Business consultancy session"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating stat card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-xs text-[#888] font-medium mb-0.5">
                    Next available slot
                  </p>
                  <p className="text-sm font-bold text-[#1a1a2e]">
                    This month · Apply now
                  </p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#F3E8FF" }}
                >
                  <span className="text-lg">📅</span>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex flex-col items-center justify-center text-center shadow-xl z-10"
              style={{ background: "#71286F" }}
            >
              <span className="text-white text-2xl font-extrabold leading-none">
                5
              </span>
              <span className="text-white/80 text-[10px] font-semibold leading-tight px-1">
                slots this month
              </span>
            </div>

            {/* Decorative dot grid behind the card */}
            <div
              className="absolute -bottom-6 -left-6 w-40 h-40 -z-10 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #71286F 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
