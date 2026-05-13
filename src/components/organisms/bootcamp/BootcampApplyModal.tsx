"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/atoms/Button";

/* ─── Types ─────────────────────────────────────────────────────── */
type Step = "payment" | "form" | "success";
type SubmitStatus = "idle" | "loading" | "error";

interface Props {
  onClose: () => void;
}

/* ─── Helpers ───────────────────────────────────────────────────── */
function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1.5 ml-1 font-medium">{msg}</p>;
}

function Spinner() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2"
        strokeDasharray="30" strokeDashoffset="10" strokeLinecap="round" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200 bg-white";

const textareaClass =
  "w-full rounded-2xl border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200 bg-white resize-none";

const EXPERIENCE_LEVELS = [
  "Beginner (< 6 months)",
  "Intermediate (6 months – 2 years)",
  "Experienced (2+ years)",
];

const LANGUAGES = [
  "JavaScript", "Python", "PHP", "Java", "C/C++",
  "Ruby", "Go", "TypeScript", "Rust", "Other",
];

/* ─── Step indicators ───────────────────────────────────────────── */
function StepBar({ step }: { step: Step }) {
  const steps: Step[] = ["payment", "form", "success"];
  const labels = ["Pay Fee", "Apply", "Done"];
  const current = steps.indexOf(step);
  return (
    <div className="flex items-center justify-center gap-2 mb-7">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-300"
              style={{
                background: i <= current ? "#71286F" : "#f0e8f0",
                color: i <= current ? "white" : "#bbb",
              }}
            >
              {i < current ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (i + 1)}
            </div>
            <span className="text-[9px] uppercase tracking-widest font-semibold"
              style={{ color: i <= current ? "#71286F" : "#ccc" }}>
              {labels[i]}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="w-10 h-px mb-4 transition-all duration-300"
              style={{ background: i < current ? "#71286F" : "#e5e5e5" }} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── STEP 1: Payment details ────────────────────────────────────── */
function PaymentStep({ onNext, onClose }: { onNext: () => void; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText("3003408026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-extrabold text-[#1a1a2e]">Apply for Cohort 1</h2>
        <button onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#fdf7ff] text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <StepBar step="payment" />

      {/* Intro */}
      <div className="text-center mb-7">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ background: "#fdf7ff", border: "1px solid #f0e8f0" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3" y="10" width="22" height="15" rx="3" fill="#71286F" opacity="0.12" />
            <rect x="3" y="10" width="22" height="15" rx="3" stroke="#71286F" strokeWidth="1.6" />
            <path d="M3 15h22" stroke="#71286F" strokeWidth="1.6" />
            <path d="M7 20h5" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M14 5l3-3 3 3" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 2v8" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="font-extrabold text-[#1a1a2e] text-lg mb-2">Pay the Registration Fee First</h3>
        <p className="text-sm text-[#777] leading-relaxed max-w-xs mx-auto">
          Transfer <span className="font-bold text-[#1a1a2e]">₦5,000</span> to the account below, then screenshot your receipt. You&apos;ll upload it in the next step.
        </p>
      </div>

      {/* Bank details card */}
      <div className="rounded-2xl p-5 mb-5" style={{ background: "#fdf7ff", border: "1px solid #ede8f5" }}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Bank</span>
            <span className="text-sm font-bold text-[#1a1a2e]">KudaBank</span>
          </div>
          <div className="h-px bg-[#ede8f5]" />
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest shrink-0 mt-0.5">Account Name</span>
            <span className="text-sm font-bold text-[#1a1a2e] text-right leading-snug">
              Tabi Empowerment and Educational Foundation
            </span>
          </div>
          <div className="h-px bg-[#ede8f5]" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Account Number</span>
            <div className="flex items-center gap-3">
              <span className="text-xl font-extrabold tracking-wider" style={{ color: "#71286F" }}>3003408026</span>
              <button onClick={copy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
                style={{ background: copied ? "#71286F" : "#f3e8ff", color: copied ? "white" : "#71286F" }}>
                {copied ? (
                  <><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg> Copied!</>
                ) : (
                  <><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg> Copy</>
                )}
              </button>
            </div>
          </div>
          <div className="h-px bg-[#ede8f5]" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Amount</span>
            <span className="text-sm font-black" style={{ color: "#71286F" }}>₦5,000</span>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="rounded-xl px-4 py-3 mb-7 flex items-start gap-3"
        style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
          <circle cx="8" cy="8" r="7" stroke="#d97706" strokeWidth="1.4" />
          <path d="M8 5v4" stroke="#d97706" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="11.5" r="0.75" fill="#d97706" />
        </svg>
        <p className="text-xs text-[#92400e] leading-relaxed">
          <span className="font-bold">Important:</span> Screenshot your payment receipt before continuing. You&apos;ll need to upload it as proof of payment in the application form.
        </p>
      </div>

      <Button variant="primary" size="md" className="w-full" onClick={onNext}>
        I&apos;ve Paid — Continue to Application →
      </Button>
    </>
  );
}

/* ─── STEP 2: Application form ───────────────────────────────────── */
function FormStep({
  onBack, onSuccess, onClose,
}: {
  onBack: () => void;
  onSuccess: () => void;
  onClose: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [portfolio, setPortfolio] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [canCommit, setCanCommit] = useState<"yes" | "no" | "">("");
  const [acceptsFee, setAcceptsFee] = useState(false);
  const [acceptsRequirement, setAcceptsRequirement] = useState(false);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [paymentPreview, setPaymentPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function toggleLanguage(lang: string) {
    setLanguages(prev =>
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
    setErrors(p => ({ ...p, languages: "" }));
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setErrors(p => ({ ...p, paymentFile: "File must be under 5MB" }));
      return;
    }
    setPaymentFile(file);
    setErrors(p => ({ ...p, paymentFile: "" }));
    const reader = new FileReader();
    reader.onload = ev => setPaymentPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = "First name is required";
    if (!lastName.trim()) e.lastName = "Last name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (!phone.trim()) e.phone = "Phone number is required";
    if (!location.trim()) e.location = "Location is required";
    if (!experienceLevel) e.experienceLevel = "Select your experience level";
    if (languages.length === 0) e.languages = "Select at least one language";
    if (!whyJoin.trim()) e.whyJoin = "Please answer this question";
    if (!canCommit) e.canCommit = "Please confirm your availability";
    if (!acceptsFee) e.acceptsFee = "You must confirm the registration fee";
    if (!acceptsRequirement) e.acceptsRequirement = "You must confirm prior experience";
    if (!paymentFile) e.paymentFile = "Payment screenshot is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setSubmitStatus("loading");
    setSubmitError("");

    try {
      // Convert file to base64 for submission
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(paymentFile!);
      });

      const res = await fetch("/api/bootcamp-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          location: location.trim(),
          experienceLevel,
          languages: languages.join(", "),
          portfolio: portfolio.trim(),
          whyJoin: whyJoin.trim(),
          canCommit,
          acceptsFee,
          acceptsRequirement,
          paymentScreenshot: fileBase64,
          fileName: paymentFile!.name,
        }),
      });

      const json = await res.json();
      if (json.success) {
        onSuccess();
      } else {
        setSubmitStatus("error");
        setSubmitError(json.error || "Something went wrong. Please try again.");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setSubmitError("Network error. Please check your connection and try again.");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  }

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <button onClick={onBack}
          className="flex items-center gap-2 text-sm text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to payment
        </button>
        <button onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#fdf7ff] text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <StepBar step="form" />

      <div className="space-y-5">

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#333] mb-2">First Name <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Ada" value={firstName}
              onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: "" })); }}
              className={`${inputClass} ${errors.firstName ? "border-red-400" : ""}`} />
            <FieldError msg={errors.firstName} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#333] mb-2">Last Name <span className="text-red-400">*</span></label>
            <input type="text" placeholder="Okafor" value={lastName}
              onChange={e => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: "" })); }}
              className={`${inputClass} ${errors.lastName ? "border-red-400" : ""}`} />
            <FieldError msg={errors.lastName} />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-[#333] mb-2">Email Address <span className="text-red-400">*</span></label>
            <input type="email" placeholder="ada@gmail.com" value={email}
              onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: "" })); }}
              className={`${inputClass} ${errors.email ? "border-red-400" : ""}`} />
            <FieldError msg={errors.email} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#333] mb-2">Phone Number <span className="text-red-400">*</span></label>
            <input type="tel" placeholder="+234 801 234 5678" value={phone}
              onChange={e => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: "" })); }}
              className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`} />
            <FieldError msg={errors.phone} />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">Location (City, Country) <span className="text-red-400">*</span></label>
          <input type="text" placeholder="Lagos, Nigeria" value={location}
            onChange={e => { setLocation(e.target.value); setErrors(p => ({ ...p, location: "" })); }}
            className={`${inputClass} ${errors.location ? "border-red-400" : ""}`} />
          <FieldError msg={errors.location} />
        </div>

        {/* Experience level */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">Programming Experience Level <span className="text-red-400">*</span></label>
          <div className="flex flex-col gap-2">
            {EXPERIENCE_LEVELS.map(level => (
              <button key={level} type="button"
                onClick={() => { setExperienceLevel(level); setErrors(p => ({ ...p, experienceLevel: "" })); }}
                className="w-full text-left px-4 py-3 rounded-full border text-sm transition-all duration-150"
                style={{
                  background: experienceLevel === level ? "#71286F" : "white",
                  color: experienceLevel === level ? "white" : "#555",
                  borderColor: experienceLevel === level ? "#71286F" : "#e5e5e5",
                  fontWeight: experienceLevel === level ? 600 : 400,
                }}>
                {level}
              </button>
            ))}
          </div>
          <FieldError msg={errors.experienceLevel} />
        </div>

        {/* Languages */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">Programming Languages Known <span className="text-red-400">*</span></label>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map(lang => (
              <button key={lang} type="button"
                onClick={() => toggleLanguage(lang)}
                className="px-3 py-1.5 rounded-full border text-sm transition-all duration-150 active:scale-95"
                style={{
                  background: languages.includes(lang) ? "#71286F" : "white",
                  color: languages.includes(lang) ? "white" : "#555",
                  borderColor: languages.includes(lang) ? "#71286F" : "#e5e5e5",
                  fontWeight: languages.includes(lang) ? 600 : 400,
                }}>
                {lang}
              </button>
            ))}
          </div>
          <FieldError msg={errors.languages} />
        </div>

        {/* Portfolio */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">GitHub / Portfolio Link <span className="text-[#bbb] font-normal">(optional)</span></label>
          <input type="url" placeholder="https://github.com/yourusername" value={portfolio}
            onChange={e => setPortfolio(e.target.value)}
            className={inputClass} />
        </div>

        {/* Why join */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">Why do you want to join this programme? <span className="text-red-400">*</span></label>
          <textarea rows={4} placeholder="Tell us what you're hoping to build, achieve, or change about your situation..."
            value={whyJoin}
            onChange={e => { setWhyJoin(e.target.value); setErrors(p => ({ ...p, whyJoin: "" })); }}
            className={`${textareaClass} ${errors.whyJoin ? "border-red-400" : ""}`} />
          <FieldError msg={errors.whyJoin} />
        </div>

        {/* Commit to schedule */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">
            Can you commit to Mon, Wed & Fri sessions (2.5hrs each) from June 11 – July 4? <span className="text-red-400">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(["yes", "no"] as const).map(val => (
              <button key={val} type="button"
                onClick={() => { setCanCommit(val); setErrors(p => ({ ...p, canCommit: "" })); }}
                className="py-3 rounded-full border text-sm font-semibold transition-all duration-150 capitalize"
                style={{
                  background: canCommit === val ? (val === "yes" ? "#71286F" : "#ef4444") : "white",
                  color: canCommit === val ? "white" : "#555",
                  borderColor: canCommit === val ? (val === "yes" ? "#71286F" : "#ef4444") : "#e5e5e5",
                }}>
                {val === "yes" ? "✓ Yes, I can commit" : "✕ No, I can't"}
              </button>
            ))}
          </div>
          <FieldError msg={errors.canCommit} />
        </div>

        {/* ── Separator ── */}
        <div className="h-px bg-[#f0e8f0]" />

        {/* Confirmations */}
        <div className="space-y-3">
          <p className="text-xs font-black text-[#333] uppercase tracking-widest">Confirmations</p>

          {/* Fee confirmation */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div
              onClick={() => { setAcceptsFee(p => !p); setErrors(pr => ({ ...pr, acceptsFee: "" })); }}
              className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-150"
              style={{
                background: acceptsFee ? "#71286F" : "white",
                borderColor: errors.acceptsFee ? "#ef4444" : acceptsFee ? "#71286F" : "#d1d5db",
              }}>
              {acceptsFee && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm text-[#555] leading-relaxed">
              I understand the <span className="font-semibold text-[#1a1a2e]">₦5,000 registration fee</span> is non-refundable and confirms my place in the cohort.
            </span>
          </label>
          <FieldError msg={errors.acceptsFee} />

          {/* Experience requirement */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div
              onClick={() => { setAcceptsRequirement(p => !p); setErrors(pr => ({ ...pr, acceptsRequirement: "" })); }}
              className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-150"
              style={{
                background: acceptsRequirement ? "#71286F" : "white",
                borderColor: errors.acceptsRequirement ? "#ef4444" : acceptsRequirement ? "#71286F" : "#d1d5db",
              }}>
              {acceptsRequirement && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span className="text-sm text-[#555] leading-relaxed">
              I confirm I have <span className="font-semibold text-[#1a1a2e]">prior programming experience</span> (loops, functions, basic logic) and understand this is not a beginner course.
            </span>
          </label>
          <FieldError msg={errors.acceptsRequirement} />
        </div>

        {/* ── Payment screenshot upload ── */}
        <div>
          <label className="block text-xs font-semibold text-[#333] mb-2">
            Payment Receipt Screenshot <span className="text-red-400">*</span>
          </label>

          {paymentPreview ? (
            /* Preview */
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#71286F]/30"
              style={{ background: "#fdf7ff" }}>
              <img src={paymentPreview} alt="Payment receipt" className="w-full max-h-40 object-contain" />
              <button
                onClick={() => { setPaymentFile(null); setPaymentPreview(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md text-[#888] hover:text-red-500 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
              <div className="px-4 py-2 flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="#16a34a" strokeWidth="1.3" />
                  <path d="M3.5 6l2 2 3-3" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-xs text-[#166534] font-medium truncate">{paymentFile?.name}</p>
              </div>
            </div>
          ) : (
            /* Drop zone */
            <button type="button" onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-2xl border-2 border-dashed py-8 flex flex-col items-center gap-3 transition-all duration-200 hover:border-[#71286F] hover:bg-[#fdf7ff] group"
              style={{ borderColor: errors.paymentFile ? "#ef4444" : "#e5e5e5", background: "white" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                style={{ background: "#fdf7ff" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3v10M6 7l4-4 4 4" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-[#333]">Upload payment screenshot</p>
                <p className="text-xs text-[#aaa] mt-0.5">PNG, JPG or JPEG · Max 5MB</p>
              </div>
            </button>
          )}

          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          <FieldError msg={errors.paymentFile} />
        </div>

        {/* Error */}
        {submitStatus === "error" && (
          <p className="text-xs text-red-500 font-medium text-center py-2">{submitError}</p>
        )}

        {/* Submit */}
        <div className="flex gap-3 pt-1">
          <Button variant="outline" size="md" onClick={onBack}>
            Back
          </Button>
          <Button variant="primary" size="md" className="flex-1"
            onClick={handleSubmit}
            disabled={submitStatus === "loading"}>
            {submitStatus === "loading" ? (
              <span className="flex items-center justify-center gap-2"><Spinner /> Submitting...</span>
            ) : (
              "Submit Application →"
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

/* ─── STEP 3: Success ────────────────────────────────────────────── */
function SuccessStep({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-4">
      <StepBar step="success" />

      {/* Checkmark animation */}
      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: "linear-gradient(135deg, #71286F, #c040a0)", boxShadow: "0 8px 32px rgba(113,40,111,0.3)" }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 18l7 7 13-13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h3 className="font-extrabold text-[#1a1a2e] text-xl mb-3">Application Received!</h3>
      <p className="text-[#666] text-sm leading-relaxed max-w-xs mx-auto mb-3">
        Thank you for applying to the Full-Stack JavaScript Bootcamp, Cohort 1.
      </p>
      <p className="text-[#888] text-sm leading-relaxed max-w-xs mx-auto mb-8">
        Your application and payment screenshot have been submitted. The team will review your application and notify you by{" "}
        <span className="font-semibold text-[#1a1a2e]">June 3, 2026</span>.
      </p>

      <div className="rounded-2xl p-5 mb-8 text-left space-y-2"
        style={{ background: "#fdf7ff", border: "1px solid #f0e8f0" }}>
        <p className="text-[10px] font-black text-[#bbb] uppercase tracking-widest mb-3">What happens next</p>
        {[
          "Your application is reviewed personally by the programme team",
          "Accepted applicants are notified by June 3rd with onboarding details",
          "Those who don't qualify will be directed to preparation resources",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-xs font-black shrink-0 mt-0.5" style={{ color: "#71286F" }}>0{i + 1}</span>
            <p className="text-xs text-[#555] leading-relaxed">{item}</p>
          </div>
        ))}
      </div>

      <Button variant="primary" size="md" className="w-full" onClick={onClose}>
        Done
      </Button>
    </div>
  );
}

/* ─── Main modal shell ───────────────────────────────────────────── */
export default function BootcampApplyModal({ onClose }: Props) {
  const [step, setStep] = useState<Step>("payment");

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="p-7">
          {step === "payment" && (
            <PaymentStep onNext={() => setStep("form")} onClose={onClose} />
          )}
          {step === "form" && (
            <FormStep onBack={() => setStep("payment")} onSuccess={() => setStep("success")} onClose={onClose} />
          )}
          {step === "success" && (
            <SuccessStep onClose={onClose} />
          )}
        </div>
      </div>
    </div>
  );
}