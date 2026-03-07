import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export default function AIBusinessHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ── Subtle background texture ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(113,40,111,0.06) 0%, transparent 70%)"
        }}
      />

      {/* ── Hero content ── */}
      <div className="relative mx-auto max-w-350 px-6 sm:px-12 lg:px-20 pt-24 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-xs font-semibold text-brand-primary tracking-wide uppercase">
                Tabi Academy · AI Training Programme
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-[#1a1a2e]">
              AI Tools for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-primary italic">
                  Business.
                </span>
                {/* underline squiggle */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0 4 Q25 0 50 4 Q75 8 100 4 Q125 0 150 4 Q175 8 200 4"
                    stroke="#71286F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
              <br />
              Two Weeks.
              <br />
              Real Results.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-lg text-base sm:text-lg text-[#555] leading-relaxed">
              A hands-on, live training programme that equips women in business
              with the AI skills to build faster, work smarter, and grow with
              confidence — no technical background required.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
              <p className="text-sm text-[#888] font-medium">
                Next cohort forming.{" "}
                <span className="text-brand-primary font-semibold">
                  Limited to 25 participants.
                </span>
              </p>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "No tech background needed",
                "Fully virtual & live",
                "Certified on completion"
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-[#777]"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <circle cx="7" cy="7" r="7" fill="#71286F" opacity="0.12" />
                    <path
                      d="M4 7l2 2 4-4"
                      stroke="#71286F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: visual card stack */}
          <div className="relative hidden lg:flex items-center justify-center h-120">
            {/* Background glow blob */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(113,40,111,0.1) 0%, transparent 70%)"
              }}
            />

            {/* Main image card */}
            <div className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border border-brand-primary/20 z-20">
              <Image
                src="/ai-business/hero-main.jpg"
                alt="Women learning AI tools"
                fill
                className="object-cover"
                priority
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
            </div>

            {/* Floating card — top right */}
            <div className="absolute top-8 right-4 z-30 bg-white rounded-2xl shadow-lg border border-[#ede8f5] px-5 py-4 w-48">
              <p className="text-[11px] text-[#888] font-medium uppercase tracking-wider mb-1">
                Cohort size
              </p>
              <p className="text-2xl font-extrabold text-[#1a1a2e] leading-none">
                25
              </p>
              <p className="text-xs text-brand-primary font-semibold mt-0.5">
                participants max
              </p>
            </div>

            {/* Floating card — bottom left */}
            <div className="absolute bottom-16 left-0 z-30 bg-white rounded-2xl shadow-lg border border-[#ede8f5] px-5 py-4 w-52">
              <p className="text-[11px] text-[#888] font-medium uppercase tracking-wider mb-2">
                You&apos;ll build
              </p>
              <div className="flex flex-col gap-1.5">
                {["Live website", "AI agent", "Brand kit"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0" />
                    <span className="text-xs font-medium text-[#333]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate badge — bottom right */}
            <div className="absolute bottom-8 right-2 z-30 bg-brand-primary rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 w-44">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                aria-hidden
              >
                <circle cx="14" cy="14" r="14" fill="white" opacity="0.15" />
                <path
                  d="M14 6l2 5h5l-4 3 1.5 5L14 16l-4.5 3 1.5-5-4-3h5z"
                  fill="white"
                />
              </svg>
              <div>
                <p className="text-white text-xs font-bold leading-tight">
                  Certified on
                </p>
                <p className="text-white/70 text-[10px]">completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
