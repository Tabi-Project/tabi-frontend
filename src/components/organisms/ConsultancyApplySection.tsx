import ConsultancyForm from "@/components/molecules/ConsultancyForm";
import {
  APPLICATION_DEADLINE,
  SLOTS_REMAINING,
  TOTAL_SLOTS
} from "@/constants/consultancy";

export default function ConsultancyApplySection() {
  return (
    <section className="w-full bg-white" id="apply">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-10">
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#F3E8FF" }}
            >
              Apply Now
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-[#1a1a2e] leading-snug mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-8">
              Fill out the form to apply for one of our 5 free consultancy slots
              this month. Applications are reviewed and selections made before
              the deadline.
            </p>

            {/* Deadline card */}
            <div
              className="rounded-2xl p-5 mb-6 border-l-4 border-brand-primary"
              style={{ background: "#FDF4FF", borderColor: "#71286F" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-1">
                Application Deadline
              </p>
              <p className="text-base font-extrabold text-[#1a1a2e]">
                {APPLICATION_DEADLINE}
              </p>
            </div>

            {/* Slots remaining */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full transition-all"
                    style={{
                      background: i < SLOTS_REMAINING ? "#71286F" : "#E5E7EB"
                    }}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-[#555]">
                <span className="text-brand-primary">{SLOTS_REMAINING}</span> of{" "}
                {TOTAL_SLOTS} slots remaining
              </p>
            </div>

            {/* Have questions */}
            <div
              className="flex items-center gap-3 rounded-xl px-5 py-4 border border-[#F0E8F5]"
              style={{ background: "#FAFAFA" }}
            >
              <span className="text-xl">✉️</span>
              <div>
                <p className="text-xs font-bold text-[#1a1a2e] mb-0.5">
                  Have any questions?
                </p>
                <p className="text-xs text-[#888]">
                  Send us a DM and we&apos;ll get back to you.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#aaa] mt-6">T&Cs Apply</p>
          </div>

          {/* Right — Google Form embed */}
          <div className="rounded-3xl overflow-hidden border border-[#F0E8F5] shadow-sm">
            <ConsultancyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
