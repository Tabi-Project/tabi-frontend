"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";

const AMOUNTS = ["5,000 NGN", "10,000 NGN", "20,000 NGN", "50,000 NGN"];
const FREQUENCY_KEYS = [
  "One-Time",
  "Monthly",
  "Quarterly",
  "Annually"
] as const;

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface DonationModalProps {
  onClose: () => void;
}

function formatAmount(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  return Number(digits).toLocaleString("en-NG") + " NGN";
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="30"
        strokeDashoffset="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1.5 ml-4 font-medium">{msg}</p>;
}

export default function DonationModal({ onClose }: DonationModalProps) {
  const t = useTranslations("DonationModal");
  const tFreq = useTranslations("DonationModal.frequencies");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const [customRaw, setCustomRaw] = useState("");
  const displayAmount =
    selectedAmount ?? (customRaw ? formatAmount(customRaw) : "");

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t("form.validation.nameRequired");
    if (!email.trim()) newErrors.email = t("form.validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = t("form.validation.emailInvalid");
    if (!displayAmount) newErrors.amount = t("form.validation.amountRequired");
    if (!frequency)
      newErrors.frequency = t("form.validation.frequencyRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleDonate() {
    if (!validate()) return;
    setSubmitStatus("loading");
    setSubmitError("");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          amount: displayAmount,
          frequency: frequency || "One-Time"
        })
      });
      const json = await res.json();
      if (json.success) {
        setSubmitStatus("success");
        setErrors({});
        setShowBankDetails(true);
      } else {
        setSubmitStatus("error");
        setSubmitError(json.error || t("form.error.generic"));
        setTimeout(() => setSubmitStatus("idle"), 4000);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitError(t("form.error.network"));
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  }

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("3003408026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputClass =
    "w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
        {showBankDetails ? (
          <>
            {/* Bank Details Screen */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => {
                  setShowBankDetails(false);
                  setSubmitStatus("idle");
                }}
                className="flex items-center gap-2 text-sm text-[#888] hover:text-brand-primary transition-colors duration-200 cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M10 3L5 8l5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t("bankTransfer.back")}
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-surface text-[#888] hover:text-brand-primary transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center mb-8">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                style={{ background: "#f3e8ff" }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="4"
                    y="12"
                    width="24"
                    height="16"
                    rx="3"
                    fill="#71286F"
                    opacity="0.15"
                  />
                  <rect
                    x="4"
                    y="12"
                    width="24"
                    height="16"
                    rx="3"
                    stroke="#71286F"
                    strokeWidth="1.8"
                  />
                  <path d="M4 17h24" stroke="#71286F" strokeWidth="1.8" />
                  <path
                    d="M8 22h4"
                    stroke="#71286F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 8l4-4 4 4"
                    stroke="#71286F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 4v8"
                    stroke="#71286F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-extrabold text-[#1a1a2e] mb-2">
                {t("bankTransfer.title")}
              </h2>
              <p className="text-sm text-[#888] max-w-xs mx-auto leading-relaxed">
                {t("bankTransfer.description")}
              </p>
            </div>

            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: "#fdf7ff", border: "1px solid #ede8f5" }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest">
                    {t("bankTransfer.bankNameLabel")}
                  </span>
                  <span className="text-sm font-bold text-[#1a1a2e]">
                    KudaBank
                  </span>
                </div>
                <div className="h-px bg-[#ede8f5]" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest shrink-0">
                    {t("bankTransfer.accountNameLabel")}
                  </span>
                  <span className="text-sm font-bold text-[#1a1a2e] text-right leading-snug">
                    Tabi Empowerment and Educational Foundation
                  </span>
                </div>
                <div className="h-px bg-[#ede8f5]" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest">
                    {t("bankTransfer.accountNumberLabel")}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-extrabold text-brand-primary tracking-wider">
                      3003408026
                    </span>
                    <button
                      onClick={copyAccountNumber}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
                      style={{
                        background: copied ? "#71286F" : "#f3e8ff",
                        color: copied ? "white" : "#71286F"
                      }}
                    >
                      {copied ? (
                        <>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6l3 3 5-5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {t("bankTransfer.copied")}
                        </>
                      ) : (
                        <>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <rect
                              x="4"
                              y="4"
                              width="7"
                              height="7"
                              rx="1.5"
                              stroke="currentColor"
                              strokeWidth="1.4"
                            />
                            <path
                              d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                            />
                          </svg>
                          {t("bankTransfer.copyButton")}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {displayAmount && (
              <div
                className="rounded-xl px-4 py-3 mb-6 flex items-center gap-3"
                style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 8l2 2 4-4"
                    stroke="#16a34a"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-sm text-[#166534]">
                  {t("bankTransfer.transferReminder", {
                    amount: displayAmount,
                    frequency: frequency
                  }).replace(/\s+/g, " ")}
                </p>
              </div>
            )}

            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              {t("bankTransfer.done")}
            </Button>
          </>
        ) : (
          <>
            {/* Donation Form */}
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-extrabold text-[#1a1a2e]">
                {t("title")}
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-surface text-[#888] hover:text-brand-primary transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3l10 10M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-[#333] mb-2">
                  {t("form.donorName")}
                </label>
                <input
                  type="text"
                  placeholder={t("form.donorName")}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((p) => ({ ...p, name: "" }));
                  }}
                  className={`${inputClass} ${errors.name ? "border-red-400" : ""}`}
                />
                <FieldError msg={errors.name} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] mb-2">
                  {t("form.emailAddress")}
                </label>
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((p) => ({ ...p, email: "" }));
                  }}
                  className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                />
                <FieldError msg={errors.email} />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#333] mb-3">
                {t("form.selectAmount")}
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomRaw("");
                      setCustomAmount("");
                      setErrors((p) => ({ ...p, amount: "" }));
                    }}
                    className="rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 active:scale-95 cursor-pointer"
                    style={{
                      background:
                        selectedAmount === amt ? "#71286F" : "#FDF8F8",
                      color: selectedAmount === amt ? "white" : "#555",
                      borderColor:
                        selectedAmount === amt ? "#71286F" : "#e5e5e5"
                    }}
                  >
                    {amt}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="number"
                  placeholder={t("form.customAmountPlaceholder")}
                  value={customRaw}
                  onChange={(e) => {
                    setCustomRaw(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className={inputClass}
                  min="0"
                  style={{ appearance: "none", MozAppearance: "textfield" }}
                />
                {customRaw && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-brand-primary font-semibold pointer-events-none">
                    = {formatAmount(customRaw)}
                  </span>
                )}
              </div>
              <FieldError msg={errors.amount} />
            </div>

            <div className="mb-8">
              <label className="block text-xs font-semibold text-[#333] mb-3">
                {t("form.frequency")}
              </label>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between rounded-full border border-[#E1E3EA] px-4 py-3 text-sm text-left transition-colors duration-200 focus:outline-none focus:border-brand-primary cursor-pointer"
                  style={{ color: frequency ? "#333" : "#bbb" }}
                >
                  {frequency
                    ? tFreq(frequency as any)
                    : t("form.frequencyPlaceholder")}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="transition-transform duration-200 shrink-0"
                    style={{
                      transform: dropdownOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }}
                  >
                    <path
                      d="M4 6l5 5 5-5"
                      stroke="#aaa"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-10">
                    {FREQUENCY_KEYS.map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          setFrequency(f);
                          setDropdownOpen(false);
                          setErrors((p) => ({ ...p, frequency: "" }));
                        }}
                        className="w-full text-left px-5 py-3.5 text-sm transition-colors duration-150 hover:bg-brand-surface cursor-pointer"
                        style={{
                          background: frequency === f ? "#fdf7ff" : "white",
                          color: frequency === f ? "#71286F" : "#333",
                          fontWeight: frequency === f ? 600 : 400
                        }}
                      >
                        {tFreq(f)}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <FieldError msg={errors.frequency} />
            </div>

            {submitStatus === "error" && (
              <p className="text-xs text-red-500 font-medium mb-4 text-center">
                {submitError}
              </p>
            )}

            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" size="md" onClick={onClose}>
                {t("form.cancel")}
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleDonate}
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Spinner /> {t("form.processing")}
                  </span>
                ) : (
                  t("form.donateNow")
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
