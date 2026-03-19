import { WHO_ITS_FOR } from "@/constants/consultancy";

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
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1a1a2e] leading-snug mb-4">
              This is for you if&hellip;
            </h2>
            <p className="text-base text-[#666] leading-relaxed">
              Our consultancy is open to any entrepreneur or business owner who
              wants to grow — no matter what stage you&apos;re at.
            </p>
          </div>

          {/* Right — checklist */}
          <div className="flex flex-col gap-4">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "#F3E8FF" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#71286F"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p className="text-sm text-[#444] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
