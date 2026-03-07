const REQUIREMENTS = [
  {
    step: "01",
    title: "80% Attendance",
    detail: "Across all 4 live Week 1 sessions — 3 out of 4 days minimum.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="3"
          width="16"
          height="15"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M6 3V1M14 3V1M2 8h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    step: "02",
    title: "Daily Assignments",
    detail:
      "Completed and submitted from Days 1–3. They feed directly into your capstone.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 3h10a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 7h6M7 10h6M7 13h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    step: "03",
    title: "Capstone Project",
    detail:
      "Full written report + 10-minute live presentation to the panel on Day 9.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    step: "04",
    title: "Certification Exam",
    detail: "60 minutes, online, on Day 10. Auto-submits at the time limit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 6v4l3 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    step: "05",
    title: "Combined Score of 70%+",
    detail:
      "Capstone weighted at 60%, exam at 40%. Both must be submitted to qualify.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 14l4-4 3 3 5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    )
  }
];

export default function AIBusinessCertification() {
  return (
    <section className="w-full bg-[#fdf7ff] overflow-hidden">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Left: requirements ── */}
          <div>
            <span className="mb-5 inline-flex items-center rounded-full border border-brand-primary/30 bg-white px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
              Certification
            </span>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] leading-tight mb-5">
              Earn a Certificate
              <br />
              That Means Something
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-12 max-w-md">
              Certification isn&apos;t handed out. It&apos;s earned. To receive your
              verified AI for Business certificate, you need to show up, do the
              work, and demonstrate real capability.
            </p>

            {/* Steps */}
            <div className="flex flex-col gap-0">
              {REQUIREMENTS.map((req, i) => (
                <div key={req.step} className="flex gap-5 group">
                  {/* Timeline spine */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-primary/20 flex items-center justify-center text-brand-primary shadow-sm shrink-0 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                      {req.icon}
                    </div>
                    {i < REQUIREMENTS.length - 1 && (
                      <div className="w-px flex-1 bg-brand-primary/10 my-1.5" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-brand-primary/40 tracking-[0.2em] uppercase">
                        Step {req.step}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-[#1a1a2e] mb-1">
                      {req.title}
                    </p>
                    <p className="text-sm text-[#888] leading-relaxed">
                      {req.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: certificate visual ── */}
          <div className="flex flex-col gap-5">
            {/* Certificate mock */}
            <div
              className="relative rounded-3xl overflow-hidden p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #1a0a2e 0%, #2d1045 60%, #3d1560 100%)",
                border: "1px solid rgba(192,132,252,0.2)",
                boxShadow: "0 32px 80px rgba(113,40,111,0.25)"
              }}
            >
              {/* Decorative ring */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(192,132,252,0.15) 0%, transparent 70%)"
                }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-1">
                    Tabi Academy · TEE Foundation
                  </p>
                  <p className="text-xs font-semibold text-white/50">
                    Certificate of Completion
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2l2 6h6l-5 3.5 2 6L10 14l-5 3.5 2-6L2 8h6z"
                      fill="#c084fc"
                    />
                  </svg>
                </div>
              </div>

              {/* Name placeholder */}
              <div className="mb-2">
                <p className="text-[11px] text-white/30 uppercase tracking-wider mb-2">
                  Awarded to
                </p>
                <div className="h-px w-48 bg-white/10 mb-3" />
                <p className="text-2xl font-bold text-white/90 italic">
                  Your Name Here
                </p>
              </div>

              <p className="text-xs text-white/40 leading-relaxed mt-4 mb-8 max-w-xs">
                For successfully completing the AI for Businesses intensive
                programme and demonstrating applied competency across all four
                training domains.
              </p>

              {/* Score breakdown */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "Capstone", weight: "60%", score: "—" },
                  { label: "Exam", weight: "40%", score: "—" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl px-4 py-3"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <p className="text-[10px] text-white/30 uppercase tracking-wider mb-1">
                      {item.label} · {item.weight}
                    </p>
                    <p className="text-lg font-extrabold text-white/60">
                      {item.score}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verification bar */}
              <div
                className="flex items-center gap-3 rounded-xl px-4 py-3"
                style={{
                  background: "rgba(192,132,252,0.1)",
                  border: "1px solid rgba(192,132,252,0.2)"
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle
                    cx="7"
                    cy="7"
                    r="6"
                    stroke="#c084fc"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M4 7l2 2 4-4"
                    stroke="#c084fc"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[11px] text-white/40">
                  Digitally verified · Issued within 5 business days
                </p>
              </div>
            </div>

            {/* Retake note */}
            <div
              className="flex items-start gap-4 bg-white rounded-2xl border border-[#ede8f5] px-6 py-5"
              style={{ boxShadow: "0px 4px 12px 2px #3737371F" }}
            >
              <div className="w-9 h-9 rounded-xl bg-brand-surface flex items-center justify-center shrink-0 text-brand-primary">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 3v6l4 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.5 10A6 6 0 109 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1a1a2e] mb-0.5">
                  One free retake included
                </p>
                <p className="text-xs text-[#888] leading-relaxed">
                  Didn&apos;t pass first time? You have 14 days to retake the exam at
                  no extra cost. No pressure — just another shot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
