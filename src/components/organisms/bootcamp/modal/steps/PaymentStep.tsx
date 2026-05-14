"use client";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Bootcamp.modal.payment");

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Back onClick={onBack} label={t("backLabel")} />
        <X onClose={onClose} />
      </div>
      <StepBar step="payment" />
      <div className="mb-6">
        <h2
          className="font-extrabold tracking-tight mb-1.5"
          style={{ fontSize: "1.25rem", color: C.ink }}
        >
          {t("title")}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: C.body }}>
          {t("body")}
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
            {t("reference.label")}
          </p>
          <p
            className="font-extrabold tracking-widest text-base"
            style={{ color: C.brand }}
          >
            {refId}
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: C.subtle }}>
            {t("reference.hint")}
          </p>
        </div>
        <CopyBtn value={refId} label="Copy ref" />
      </div>

      <div
        className="rounded-2xl p-5 mb-5"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <SectionHead>{t("bankDetails.sectionHead")}</SectionHead>
        <div className="space-y-3.5">
          {[
            {
              k: t("bankDetails.bank"),
              v: t("bankDetails.values.bankName")
            },
            {
              k: t("bankDetails.accountName"),
              v: t("bankDetails.values.accountNameValue")
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
              {t("bankDetails.accountNumber")}
            </span>
            <div className="flex items-center gap-2.5">
              <span
                className="font-extrabold text-lg tracking-wider"
                style={{ color: C.brand }}
              >
                {t("bankDetails.values.accountNumberValue")}
              </span>
              <CopyBtn value={t("bankDetails.values.accountNumberValue")} />
            </div>
          </div>
          <div className="h-px" style={{ background: C.border }} />
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] font-black uppercase tracking-widest"
              style={{ color: C.subtle }}
            >
              {t("bankDetails.amount")}
            </span>
            <span
              className="font-extrabold text-base"
              style={{ color: C.brand }}
            >
              {t("bankDetails.values.amountValue")}
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
          {t.rich("tip", {
            ref: (chunks) => (
              <strong style={{ color: C.brand }}>{chunks}</strong>
            ),
            refId
          })}
        </p>
      </div>

      <Cta onClick={onNext}>{t("cta")}</Cta>
    </div>
  );
}
