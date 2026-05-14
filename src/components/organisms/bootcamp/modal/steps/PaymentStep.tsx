"use client";
import { C, WA_NUMBER } from "../shared";
import { Back, X, CopyBtn, SectionHead, Cta } from "../ui";
import { StepBar } from "../StepBar";

interface PaymentStepProps {
  onBack: () => void;
  onNext: () => void;
  onClose: () => void;
  refId: string;
}

export function PaymentStep({
  onBack,
  onNext,
  onClose,
  refId
}: PaymentStepProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Back onClick={onBack} label="Application" />
        <X onClose={onClose} />
      </div>
      <StepBar step="payment" />
      <div className="mb-6">
        <h2
          className="font-extrabold tracking-tight mb-1.5"
          style={{ fontSize: "1.25rem", color: C.ink }}
        >
          Reserve your spot
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: C.body }}>
          Your application is saved. Complete the ₦5,000 commitment fee below to
          secure your place in Cohort 1.
        </p>
      </div>

      <div
        className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl mb-5"
        style={{
          background: `rgba(113,40,111,0.06)`,
          border: `1px solid rgba(113,40,111,0.14)`
        }}
      >
        <div>
          <p
            className="text-[10px] font-black uppercase tracking-[0.2em] mb-0.5"
            style={{ color: C.muted }}
          >
            Your application reference
          </p>
          <p
            className="font-extrabold tracking-widest text-base"
            style={{ color: C.brand }}
          >
            {refId}
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: C.subtle }}>
            Include this when sending your receipt
          </p>
        </div>
        <CopyBtn value={refId} label="Copy ref" />
      </div>

      <div
        className="rounded-2xl p-5 mb-5"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <SectionHead>Bank transfer details</SectionHead>
        <div className="space-y-3.5">
          {[
            { k: "Bank", v: "KudaBank" },
            {
              k: "Account name",
              v: "Tabi Empowerment and Educational Foundation"
            }
          ].map((row) => (
            <div key={row.k}>
              <div className="flex items-start justify-between gap-4">
                <span
                  className="text-[10px] font-black uppercase tracking-widest shrink-0 mt-0.5"
                  style={{ color: C.subtle }}
                >
                  {row.k}
                </span>
                <span
                  className="text-sm font-semibold text-right leading-snug"
                  style={{ color: C.ink }}
                >
                  {row.v}
                </span>
              </div>
              <div className="h-px mt-3.5" style={{ background: C.border }} />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-black uppercase tracking-widest"
              style={{ color: C.subtle }}
            >
              Account number
            </span>
            <div className="flex items-center gap-2.5">
              <span
                className="font-extrabold text-lg tracking-wider"
                style={{ color: C.brand }}
              >
                3003408026
              </span>
              <CopyBtn value="3003408026" />
            </div>
          </div>
          <div className="h-px" style={{ background: C.border }} />
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-black uppercase tracking-widest"
              style={{ color: C.subtle }}
            >
              Amount
            </span>
            <span
              className="font-extrabold text-base"
              style={{ color: C.brand }}
            >
              ₦5,000
            </span>
          </div>
        </div>
      </div>

      <div
        className="flex items-start gap-3 px-4 py-3.5 rounded-xl mb-7"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <span className="shrink-0 mt-0.5">💡</span>
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          Once you've made the transfer, save a screenshot of your receipt.
          You'll share it with us via WhatsApp in the next step — include your
          reference <strong style={{ color: C.brand }}>{refId}</strong>.
        </p>
      </div>

      <Cta onClick={onNext}>I've made the payment →</Cta>
    </div>
  );
}
