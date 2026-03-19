import ConsultancyForm from "@/components/molecules/ConsultancyForm";
import SlotsAvailableBadge from "@/components/atoms/SlotsAvailableBadge";
import { SLOTS_REMAINING, TOTAL_SLOTS } from "@/constants/consultancy";

export default function ConsultancyApplySection() {
  return (
    <section className="w-full bg-white" id="apply">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-10">
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
              style={{ background: "#F3E8FF" }}
            >
              Apply Now
            </span>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1a1a2e] leading-snug mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-base text-[#666] leading-relaxed mb-6">
              Fill out the short form and our team will be in touch within 2–3
              business days. Slots are limited — apply early to secure your spot
              this month.
            </p>
            <SlotsAvailableBadge
              remaining={SLOTS_REMAINING}
              total={TOTAL_SLOTS}
            />
          </div>

          {/* Right — form */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{ background: "#F5F5F5" }}
          >
            <ConsultancyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
