import { ProcessStep } from "@/types/consultancy";

export default function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shrink-0"
        style={{ background: "#F3E8FF" }}
      >
        <span className="text-xl font-extrabold text-brand-primary">
          {step.number}
        </span>
      </div>
      <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{step.title}</h3>
      <p className="text-sm text-[#666] leading-relaxed max-w-50">
        {step.description}
      </p>
    </div>
  );
}
