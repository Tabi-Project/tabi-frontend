import Link from "next/link";

export default function AIBusinessPageFooter() {
  return (
    <section className="w-full bg-[#0d0d0d] border-t border-white/6">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ── Left: brand block ── */}
          <div>
            {/* Logo wordmark */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #71286F, #a855f7)"
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M9 2l2 5h5L12 10l1.5 5L9 13l-4.5 2L6 10 2 7h5z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-extrabold text-white leading-none">
                  Tabi Academy
                </p>
                <p className="text-[10px] text-white/30 font-medium mt-0.5">
                  by TEE Foundation
                </p>
              </div>
            </div>

            {/* Statement */}
            <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8">
              This programme is delivered by{" "}
              <span className="text-white/70 font-semibold">Tabi Academy</span>,
              a project of the{" "}
              <span className="text-white/70 font-semibold">
                Tabi Empowerment and Educational (TEE) Foundation
              </span>{" "}
              — committed to empowering women through technology, innovation,
              and education.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {["Women-led", "Tech for Good", "Education-first"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/30"
                  >
                    {badge}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ── Right: contact + links ── */}
          <div className="flex flex-col gap-6">
            {/* Email card */}
            <a
              href="mailto:academy@teefoundation.org"
              className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/[0.07] hover:border-white/15 px-6 py-5 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                style={{ background: "rgba(113,40,111,0.2)" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M2 5l7 5 7-5"
                    stroke="#c084fc"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1"
                    y="3.5"
                    width="16"
                    height="11"
                    rx="2"
                    stroke="#c084fc"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-white/30 uppercase tracking-wider font-semibold mb-0.5">
                  Questions? Email us
                </p>
                <p className="text-sm font-bold text-white/60 group-hover:text-white transition-colors duration-200 truncate">
                  academy@teefoundation.org
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 opacity-20 group-hover:opacity-60 group-hover:translate-x-1 transition-all duration-300"
                aria-hidden
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Quick links row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "TEE Foundation", href: "/" },
                { label: "Our Projects", href: "#projects" },
                { label: "Community", href: "#community" },
                { label: "About Us", href: "#about" }
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors duration-200 group"
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#c084fc] transition-colors duration-200 shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Legal line */}
            <p className="text-[11px] text-white/15 leading-relaxed pt-2 border-t border-white/5">
              © {new Date().getFullYear()} TEE Foundation Inc. · AI for
              Businesses programme · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
