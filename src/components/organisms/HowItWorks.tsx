import ProcessStepCard from "@/components/atoms/ProcessStepCard";
import { PROCESS_STEPS } from "@/constants/consultancy";

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary mb-5"
            style={{ background: "#F3E8FF" }}
          >
            How It Works
          </span>
          <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-[#1a1a2e] leading-snug">
            Three simple steps
          </h2>
        </div>

        {/* Steps with connector lines */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {/* Connector line — desktop only */}
          <div
            className="hidden sm:block absolute top-7 left-[calc(16.66%+1.75rem)] right-[calc(16.66%+1.75rem)] h-px"
            style={{ background: "#ede8f5" }}
          />

          {PROCESS_STEPS.map((step) => (
            <ProcessStepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
