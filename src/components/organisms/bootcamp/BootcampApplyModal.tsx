// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/atoms/Button";

// /* ─── Types ─────────────────────────────────────────────────────── */
// type Step = "payment" | "form" | "success";
// type SubmitStatus = "idle" | "loading" | "error";

// interface Props {
//   onClose: () => void;
// }

// /* ─── Helpers ───────────────────────────────────────────────────── */
// function FieldError({ msg }: { msg?: string }) {
//   if (!msg) return null;
//   return <p className="text-xs text-red-500 mt-1.5 ml-1 font-medium">{msg}</p>;
// }

// function Spinner() {
//   return (
//     <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
//       <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2"
//         strokeDasharray="30" strokeDashoffset="10" strokeLinecap="round" />
//     </svg>
//   );
// }

// const inputClass =
//   "w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200 bg-white";

// const textareaClass =
//   "w-full rounded-2xl border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200 bg-white resize-none";

// const EXPERIENCE_LEVELS = [
//   "Beginner (< 6 months)",
//   "Intermediate (6 months – 2 years)",
//   "Experienced (2+ years)",
// ];

// const LANGUAGES = [
//   "JavaScript", "Python", "PHP", "Java", "C/C++",
//   "Ruby", "Go", "TypeScript", "Rust", "Other",
// ];

// /* ─── Step indicators ───────────────────────────────────────────── */
// function StepBar({ step }: { step: Step }) {
//   const steps: Step[] = ["payment", "form", "success"];
//   const labels = ["Pay Fee", "Apply", "Done"];
//   const current = steps.indexOf(step);
//   return (
//     <div className="flex items-center justify-center gap-2 mb-7">
//       {steps.map((s, i) => (
//         <div key={s} className="flex items-center gap-2">
//           <div className="flex flex-col items-center gap-1">
//             <div
//               className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black transition-all duration-300"
//               style={{
//                 background: i <= current ? "#71286F" : "#f0e8f0",
//                 color: i <= current ? "white" : "#bbb",
//               }}
//             >
//               {i < current ? (
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               ) : (i + 1)}
//             </div>
//             <span className="text-[9px] uppercase tracking-widest font-semibold"
//               style={{ color: i <= current ? "#71286F" : "#ccc" }}>
//               {labels[i]}
//             </span>
//           </div>
//           {i < steps.length - 1 && (
//             <div className="w-10 h-px mb-4 transition-all duration-300"
//               style={{ background: i < current ? "#71286F" : "#e5e5e5" }} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// /* ─── STEP 1: Payment details ────────────────────────────────────── */
// function PaymentStep({ onNext, onClose }: { onNext: () => void; onClose: () => void }) {
//   const [copied, setCopied] = useState(false);

//   function copy() {
//     navigator.clipboard.writeText("3003408026");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   }

//   return (
//     <>
//       {/* Header */}
//       <div className="flex items-center justify-between mb-2">
//         <h2 className="text-xl font-extrabold text-[#1a1a2e]">Apply for Cohort 1</h2>
//         <button onClick={onClose}
//           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#fdf7ff] text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//           </svg>
//         </button>
//       </div>

//       <StepBar step="payment" />

//       {/* Intro */}
//       <div className="text-center mb-7">
//         <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
//           style={{ background: "#fdf7ff", border: "1px solid #f0e8f0" }}>
//           <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
//             <rect x="3" y="10" width="22" height="15" rx="3" fill="#71286F" opacity="0.12" />
//             <rect x="3" y="10" width="22" height="15" rx="3" stroke="#71286F" strokeWidth="1.6" />
//             <path d="M3 15h22" stroke="#71286F" strokeWidth="1.6" />
//             <path d="M7 20h5" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
//             <path d="M14 5l3-3 3 3" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M17 2v8" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
//           </svg>
//         </div>
//         <h3 className="font-extrabold text-[#1a1a2e] text-lg mb-2">Pay the Registration Fee First</h3>
//         <p className="text-sm text-[#777] leading-relaxed max-w-xs mx-auto">
//           Transfer <span className="font-bold text-[#1a1a2e]">₦5,000</span> to the account below, then screenshot your receipt. You&apos;ll upload it in the next step.
//         </p>
//       </div>

//       {/* Bank details card */}
//       <div className="rounded-2xl p-5 mb-5" style={{ background: "#fdf7ff", border: "1px solid #ede8f5" }}>
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Bank</span>
//             <span className="text-sm font-bold text-[#1a1a2e]">KudaBank</span>
//           </div>
//           <div className="h-px bg-[#ede8f5]" />
//           <div className="flex items-start justify-between gap-4">
//             <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest shrink-0 mt-0.5">Account Name</span>
//             <span className="text-sm font-bold text-[#1a1a2e] text-right leading-snug">
//               Tabi Empowerment and Educational Foundation
//             </span>
//           </div>
//           <div className="h-px bg-[#ede8f5]" />
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Account Number</span>
//             <div className="flex items-center gap-3">
//               <span className="text-xl font-extrabold tracking-wider" style={{ color: "#71286F" }}>3003408026</span>
//               <button onClick={copy}
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 cursor-pointer"
//                 style={{ background: copied ? "#71286F" : "#f3e8ff", color: copied ? "white" : "#71286F" }}>
//                 {copied ? (
//                   <><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg> Copied!</>
//                 ) : (
//                   <><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg> Copy</>
//                 )}
//               </button>
//             </div>
//           </div>
//           <div className="h-px bg-[#ede8f5]" />
//           <div className="flex items-center justify-between">
//             <span className="text-[10px] font-black text-[#aaa] uppercase tracking-widest">Amount</span>
//             <span className="text-sm font-black" style={{ color: "#71286F" }}>₦5,000</span>
//           </div>
//         </div>
//       </div>

//       {/* Note */}
//       <div className="rounded-xl px-4 py-3 mb-7 flex items-start gap-3"
//         style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
//         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
//           <circle cx="8" cy="8" r="7" stroke="#d97706" strokeWidth="1.4" />
//           <path d="M8 5v4" stroke="#d97706" strokeWidth="1.6" strokeLinecap="round" />
//           <circle cx="8" cy="11.5" r="0.75" fill="#d97706" />
//         </svg>
//         <p className="text-xs text-[#92400e] leading-relaxed">
//           <span className="font-bold">Important:</span> Screenshot your payment receipt before continuing. You&apos;ll need to upload it as proof of payment in the application form.
//         </p>
//       </div>

//       <Button variant="primary" size="md" className="w-full" onClick={onNext}>
//         I&apos;ve Paid — Continue to Application →
//       </Button>
//     </>
//   );
// }

// /* ─── STEP 2: Application form ───────────────────────────────────── */
// function FormStep({
//   onBack, onSuccess, onClose,
// }: {
//   onBack: () => void;
//   onSuccess: () => void;
//   onClose: () => void;
// }) {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [location, setLocation] = useState("");
//   const [experienceLevel, setExperienceLevel] = useState("");
//   const [languages, setLanguages] = useState<string[]>([]);
//   const [portfolio, setPortfolio] = useState("");
//   const [whyJoin, setWhyJoin] = useState("");
//   const [canCommit, setCanCommit] = useState<"yes" | "no" | "">("");
//   const [acceptsFee, setAcceptsFee] = useState(false);
//   const [acceptsRequirement, setAcceptsRequirement] = useState(false);
//   const [paymentFile, setPaymentFile] = useState<File | null>(null);
//   const [paymentPreview, setPaymentPreview] = useState<string | null>(null);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
//   const [submitError, setSubmitError] = useState("");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   function toggleLanguage(lang: string) {
//     setLanguages(prev =>
//       prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
//     );
//     setErrors(p => ({ ...p, languages: "" }));
//   }

//   function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.size > 5 * 1024 * 1024) {
//       setErrors(p => ({ ...p, paymentFile: "File must be under 5MB" }));
//       return;
//     }
//     setPaymentFile(file);
//     setErrors(p => ({ ...p, paymentFile: "" }));
//     const reader = new FileReader();
//     reader.onload = ev => setPaymentPreview(ev.target?.result as string);
//     reader.readAsDataURL(file);
//   }

//   function validate(): boolean {
//     const e: Record<string, string> = {};
//     if (!firstName.trim()) e.firstName = "First name is required";
//     if (!lastName.trim()) e.lastName = "Last name is required";
//     if (!email.trim()) e.email = "Email is required";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
//     if (!phone.trim()) e.phone = "Phone number is required";
//     if (!location.trim()) e.location = "Location is required";
//     if (!experienceLevel) e.experienceLevel = "Select your experience level";
//     if (languages.length === 0) e.languages = "Select at least one language";
//     if (!whyJoin.trim()) e.whyJoin = "Please answer this question";
//     if (!canCommit) e.canCommit = "Please confirm your availability";
//     if (!acceptsFee) e.acceptsFee = "You must confirm the registration fee";
//     if (!acceptsRequirement) e.acceptsRequirement = "You must confirm prior experience";
//     if (!paymentFile) e.paymentFile = "Payment screenshot is required";
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   }

//   async function handleSubmit() {
//     if (!validate()) return;
//     setSubmitStatus("loading");
//     setSubmitError("");

//     try {
//       // Convert file to base64 for submission
//       const fileBase64 = await new Promise<string>((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result as string);
//         reader.onerror = reject;
//         reader.readAsDataURL(paymentFile!);
//       });

//       const res = await fetch("/api/bootcamp-apply", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           firstName: firstName.trim(),
//           lastName: lastName.trim(),
//           email: email.trim(),
//           phone: phone.trim(),
//           location: location.trim(),
//           experienceLevel,
//           languages: languages.join(", "),
//           portfolio: portfolio.trim(),
//           whyJoin: whyJoin.trim(),
//           canCommit,
//           acceptsFee,
//           acceptsRequirement,
//           paymentScreenshot: fileBase64,
//           fileName: paymentFile!.name,
//         }),
//       });

//       const json = await res.json();
//       if (json.success) {
//         onSuccess();
//       } else {
//         setSubmitStatus("error");
//         setSubmitError(json.error || "Something went wrong. Please try again.");
//         setTimeout(() => setSubmitStatus("idle"), 5000);
//       }
//     } catch {
//       setSubmitStatus("error");
//       setSubmitError("Network error. Please check your connection and try again.");
//       setTimeout(() => setSubmitStatus("idle"), 5000);
//     }
//   }

//   return (
//     <>
//       {/* Header */}
//       <div className="flex items-center justify-between mb-2">
//         <button onClick={onBack}
//           className="flex items-center gap-2 text-sm text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//           Back to payment
//         </button>
//         <button onClick={onClose}
//           className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#fdf7ff] text-[#888] hover:text-brand-primary transition-colors cursor-pointer">
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//           </svg>
//         </button>
//       </div>

//       <StepBar step="form" />

//       <div className="space-y-5">

//         {/* Name row */}
//         <div className="grid grid-cols-2 gap-3">
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">First Name <span className="text-red-400">*</span></label>
//             <input type="text" placeholder="Ada" value={firstName}
//               onChange={e => { setFirstName(e.target.value); setErrors(p => ({ ...p, firstName: "" })); }}
//               className={`${inputClass} ${errors.firstName ? "border-red-400" : ""}`} />
//             <FieldError msg={errors.firstName} />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">Last Name <span className="text-red-400">*</span></label>
//             <input type="text" placeholder="Okafor" value={lastName}
//               onChange={e => { setLastName(e.target.value); setErrors(p => ({ ...p, lastName: "" })); }}
//               className={`${inputClass} ${errors.lastName ? "border-red-400" : ""}`} />
//             <FieldError msg={errors.lastName} />
//           </div>
//         </div>

//         {/* Email + Phone */}
//         <div className="grid grid-cols-2 gap-3">
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">Email Address <span className="text-red-400">*</span></label>
//             <input type="email" placeholder="ada@gmail.com" value={email}
//               onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: "" })); }}
//               className={`${inputClass} ${errors.email ? "border-red-400" : ""}`} />
//             <FieldError msg={errors.email} />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">Phone Number <span className="text-red-400">*</span></label>
//             <input type="tel" placeholder="+234 801 234 5678" value={phone}
//               onChange={e => { setPhone(e.target.value); setErrors(p => ({ ...p, phone: "" })); }}
//               className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`} />
//             <FieldError msg={errors.phone} />
//           </div>
//         </div>

//         {/* Location */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">Location (City, Country) <span className="text-red-400">*</span></label>
//           <input type="text" placeholder="Lagos, Nigeria" value={location}
//             onChange={e => { setLocation(e.target.value); setErrors(p => ({ ...p, location: "" })); }}
//             className={`${inputClass} ${errors.location ? "border-red-400" : ""}`} />
//           <FieldError msg={errors.location} />
//         </div>

//         {/* Experience level */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">Programming Experience Level <span className="text-red-400">*</span></label>
//           <div className="flex flex-col gap-2">
//             {EXPERIENCE_LEVELS.map(level => (
//               <button key={level} type="button"
//                 onClick={() => { setExperienceLevel(level); setErrors(p => ({ ...p, experienceLevel: "" })); }}
//                 className="w-full text-left px-4 py-3 rounded-full border text-sm transition-all duration-150"
//                 style={{
//                   background: experienceLevel === level ? "#71286F" : "white",
//                   color: experienceLevel === level ? "white" : "#555",
//                   borderColor: experienceLevel === level ? "#71286F" : "#e5e5e5",
//                   fontWeight: experienceLevel === level ? 600 : 400,
//                 }}>
//                 {level}
//               </button>
//             ))}
//           </div>
//           <FieldError msg={errors.experienceLevel} />
//         </div>

//         {/* Languages */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">Programming Languages Known <span className="text-red-400">*</span></label>
//           <div className="flex flex-wrap gap-2">
//             {LANGUAGES.map(lang => (
//               <button key={lang} type="button"
//                 onClick={() => toggleLanguage(lang)}
//                 className="px-3 py-1.5 rounded-full border text-sm transition-all duration-150 active:scale-95"
//                 style={{
//                   background: languages.includes(lang) ? "#71286F" : "white",
//                   color: languages.includes(lang) ? "white" : "#555",
//                   borderColor: languages.includes(lang) ? "#71286F" : "#e5e5e5",
//                   fontWeight: languages.includes(lang) ? 600 : 400,
//                 }}>
//                 {lang}
//               </button>
//             ))}
//           </div>
//           <FieldError msg={errors.languages} />
//         </div>

//         {/* Portfolio */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">GitHub / Portfolio Link <span className="text-[#bbb] font-normal">(optional)</span></label>
//           <input type="url" placeholder="https://github.com/yourusername" value={portfolio}
//             onChange={e => setPortfolio(e.target.value)}
//             className={inputClass} />
//         </div>

//         {/* Why join */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">Why do you want to join this programme? <span className="text-red-400">*</span></label>
//           <textarea rows={4} placeholder="Tell us what you're hoping to build, achieve, or change about your situation..."
//             value={whyJoin}
//             onChange={e => { setWhyJoin(e.target.value); setErrors(p => ({ ...p, whyJoin: "" })); }}
//             className={`${textareaClass} ${errors.whyJoin ? "border-red-400" : ""}`} />
//           <FieldError msg={errors.whyJoin} />
//         </div>

//         {/* Commit to schedule */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">
//             Can you commit to Mon, Wed & Fri sessions (2.5hrs each) from June 11 – July 4? <span className="text-red-400">*</span>
//           </label>
//           <div className="grid grid-cols-2 gap-3">
//             {(["yes", "no"] as const).map(val => (
//               <button key={val} type="button"
//                 onClick={() => { setCanCommit(val); setErrors(p => ({ ...p, canCommit: "" })); }}
//                 className="py-3 rounded-full border text-sm font-semibold transition-all duration-150 capitalize"
//                 style={{
//                   background: canCommit === val ? (val === "yes" ? "#71286F" : "#ef4444") : "white",
//                   color: canCommit === val ? "white" : "#555",
//                   borderColor: canCommit === val ? (val === "yes" ? "#71286F" : "#ef4444") : "#e5e5e5",
//                 }}>
//                 {val === "yes" ? "✓ Yes, I can commit" : "✕ No, I can't"}
//               </button>
//             ))}
//           </div>
//           <FieldError msg={errors.canCommit} />
//         </div>

//         {/* ── Separator ── */}
//         <div className="h-px bg-[#f0e8f0]" />

//         {/* Confirmations */}
//         <div className="space-y-3">
//           <p className="text-xs font-black text-[#333] uppercase tracking-widest">Confirmations</p>

//           {/* Fee confirmation */}
//           <label className="flex items-start gap-3 cursor-pointer group">
//             <div
//               onClick={() => { setAcceptsFee(p => !p); setErrors(pr => ({ ...pr, acceptsFee: "" })); }}
//               className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-150"
//               style={{
//                 background: acceptsFee ? "#71286F" : "white",
//                 borderColor: errors.acceptsFee ? "#ef4444" : acceptsFee ? "#71286F" : "#d1d5db",
//               }}>
//               {acceptsFee && (
//                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                   <path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               )}
//             </div>
//             <span className="text-sm text-[#555] leading-relaxed">
//               I understand the <span className="font-semibold text-[#1a1a2e]">₦5,000 registration fee</span> is non-refundable and confirms my place in the cohort.
//             </span>
//           </label>
//           <FieldError msg={errors.acceptsFee} />

//           {/* Experience requirement */}
//           <label className="flex items-start gap-3 cursor-pointer group">
//             <div
//               onClick={() => { setAcceptsRequirement(p => !p); setErrors(pr => ({ ...pr, acceptsRequirement: "" })); }}
//               className="mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-150"
//               style={{
//                 background: acceptsRequirement ? "#71286F" : "white",
//                 borderColor: errors.acceptsRequirement ? "#ef4444" : acceptsRequirement ? "#71286F" : "#d1d5db",
//               }}>
//               {acceptsRequirement && (
//                 <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                   <path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               )}
//             </div>
//             <span className="text-sm text-[#555] leading-relaxed">
//               I confirm I have <span className="font-semibold text-[#1a1a2e]">prior programming experience</span> (loops, functions, basic logic) and understand this is not a beginner course.
//             </span>
//           </label>
//           <FieldError msg={errors.acceptsRequirement} />
//         </div>

//         {/* ── Payment screenshot upload ── */}
//         <div>
//           <label className="block text-xs font-semibold text-[#333] mb-2">
//             Payment Receipt Screenshot <span className="text-red-400">*</span>
//           </label>

//           {paymentPreview ? (
//             /* Preview */
//             <div className="relative rounded-2xl overflow-hidden border-2 border-[#71286F]/30"
//               style={{ background: "#fdf7ff" }}>
//               <img src={paymentPreview} alt="Payment receipt" className="w-full max-h-40 object-contain" />
//               <button
//                 onClick={() => { setPaymentFile(null); setPaymentPreview(null); if (fileInputRef.current) fileInputRef.current.value = ""; }}
//                 className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-md text-[#888] hover:text-red-500 transition-colors">
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M2 2l8 8M10 2L2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//                 </svg>
//               </button>
//               <div className="px-4 py-2 flex items-center gap-2">
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <circle cx="6" cy="6" r="5" stroke="#16a34a" strokeWidth="1.3" />
//                   <path d="M3.5 6l2 2 3-3" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//                 <p className="text-xs text-[#166534] font-medium truncate">{paymentFile?.name}</p>
//               </div>
//             </div>
//           ) : (
//             /* Drop zone */
//             <button type="button" onClick={() => fileInputRef.current?.click()}
//               className="w-full rounded-2xl border-2 border-dashed py-8 flex flex-col items-center gap-3 transition-all duration-200 hover:border-[#71286F] hover:bg-[#fdf7ff] group"
//               style={{ borderColor: errors.paymentFile ? "#ef4444" : "#e5e5e5", background: "white" }}>
//               <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
//                 style={{ background: "#fdf7ff" }}>
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <path d="M10 3v10M6 7l4-4 4 4" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//                   <path d="M3 14v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#71286F" strokeWidth="1.6" strokeLinecap="round" />
//                 </svg>
//               </div>
//               <div className="text-center">
//                 <p className="text-sm font-semibold text-[#333]">Upload payment screenshot</p>
//                 <p className="text-xs text-[#aaa] mt-0.5">PNG, JPG or JPEG · Max 5MB</p>
//               </div>
//             </button>
//           )}

//           <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
//           <FieldError msg={errors.paymentFile} />
//         </div>

//         {/* Error */}
//         {submitStatus === "error" && (
//           <p className="text-xs text-red-500 font-medium text-center py-2">{submitError}</p>
//         )}

//         {/* Submit */}
//         <div className="flex gap-3 pt-1">
//           <Button variant="outline" size="md" onClick={onBack}>
//             Back
//           </Button>
//           <Button variant="primary" size="md" className="flex-1"
//             onClick={handleSubmit}
//             disabled={submitStatus === "loading"}>
//             {submitStatus === "loading" ? (
//               <span className="flex items-center justify-center gap-2"><Spinner /> Submitting...</span>
//             ) : (
//               "Submit Application →"
//             )}
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }

// /* ─── STEP 3: Success ────────────────────────────────────────────── */
// function SuccessStep({ onClose }: { onClose: () => void }) {
//   return (
//     <div className="text-center py-4">
//       <StepBar step="success" />

//       {/* Checkmark animation */}
//       <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
//         style={{ background: "linear-gradient(135deg, #71286F, #c040a0)", boxShadow: "0 8px 32px rgba(113,40,111,0.3)" }}>
//         <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
//           <path d="M8 18l7 7 13-13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </div>

//       <h3 className="font-extrabold text-[#1a1a2e] text-xl mb-3">Application Received!</h3>
//       <p className="text-[#666] text-sm leading-relaxed max-w-xs mx-auto mb-3">
//         Thank you for applying to the Full-Stack JavaScript Bootcamp, Cohort 1.
//       </p>
//       <p className="text-[#888] text-sm leading-relaxed max-w-xs mx-auto mb-8">
//         Your application and payment screenshot have been submitted. The team will review your application and notify you by{" "}
//         <span className="font-semibold text-[#1a1a2e]">June 3, 2026</span>.
//       </p>

//       <div className="rounded-2xl p-5 mb-8 text-left space-y-2"
//         style={{ background: "#fdf7ff", border: "1px solid #f0e8f0" }}>
//         <p className="text-[10px] font-black text-[#bbb] uppercase tracking-widest mb-3">What happens next</p>
//         {[
//           "Your application is reviewed personally by the programme team",
//           "Accepted applicants are notified by June 3rd with onboarding details",
//           "Those who don't qualify will be directed to preparation resources",
//         ].map((item, i) => (
//           <div key={i} className="flex items-start gap-3">
//             <span className="text-xs font-black shrink-0 mt-0.5" style={{ color: "#71286F" }}>0{i + 1}</span>
//             <p className="text-xs text-[#555] leading-relaxed">{item}</p>
//           </div>
//         ))}
//       </div>

//       <Button variant="primary" size="md" className="w-full" onClick={onClose}>
//         Done
//       </Button>
//     </div>
//   );
// }

// /* ─── Main modal shell ───────────────────────────────────────────── */
// export default function BootcampApplyModal({ onClose }: Props) {
//   const [step, setStep] = useState<Step>("payment");

//   // Prevent body scroll while modal is open
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = ""; };
//   }, []);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(5px)" }}
//       onClick={e => e.target === e.currentTarget && onClose()}
//     >
//       <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto">
//         <div className="p-7">
//           {step === "payment" && (
//             <PaymentStep onNext={() => setStep("form")} onClose={onClose} />
//           )}
//           {step === "form" && (
//             <FormStep onBack={() => setStep("payment")} onSuccess={() => setStep("success")} onClose={onClose} />
//           )}
//           {step === "success" && (
//             <SuccessStep onClose={onClose} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// //VERSION 2
// "use client";

// import { useState, useEffect, useCallback, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform
// } from "framer-motion";

// /* ══════════════════════════════════════════════════════════════════
//    TYPES
// ══════════════════════════════════════════════════════════════════ */
// type Step = "welcome" | "form" | "payment" | "confirmation" | "success";
// type Dir = 1 | -1;
// type ApiStatus = "idle" | "loading" | "error";

// interface Props {
//   onClose: () => void;
// }

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   location: string;
//   experienceLevel: string;
//   languages: string[];
//   portfolio: string;
//   whyJoin: string;
//   canCommit: "yes" | "no" | "";
//   acceptsFee: boolean;
//   acceptsRequirement: boolean;
// }

// const BLANK: FormData = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   location: "",
//   experienceLevel: "",
//   languages: [],
//   portfolio: "",
//   whyJoin: "",
//   canCommit: "",
//   acceptsFee: false,
//   acceptsRequirement: false
// };

// /* ══════════════════════════════════════════════════════════════════
//    CONSTANTS
// ══════════════════════════════════════════════════════════════════ */
// const STEPS: Step[] = ["welcome", "form", "payment", "confirmation", "success"];

// const STEP_META: Record<Step, { label: string; short: string }> = {
//   welcome: { label: "Welcome", short: "Hi!" },
//   form: { label: "Application", short: "Apply" },
//   payment: { label: "Reserve Spot", short: "Pay" },
//   confirmation: { label: "Confirmation", short: "Confirm" },
//   success: { label: "All Done", short: "Done" }
// };

// const LEVELS = [
//   { id: "beginner", title: "Beginner", hint: "Less than 6 months" },
//   { id: "intermediate", title: "Intermediate", hint: "6 months – 2 years" },
//   { id: "experienced", title: "Experienced", hint: "2+ years of coding" }
// ];

// const LANGUAGES = [
//   "JavaScript",
//   "Python",
//   "PHP",
//   "Java",
//   "C / C++",
//   "Ruby",
//   "Go",
//   "TypeScript",
//   "Rust",
//   "Other"
// ];

// const WA_NUMBER = "2348012345678"; // ← real Tabi WA
// const SUPPORT_EMAIL = "hello@tabiproject.com";

// /* ══════════════════════════════════════════════════════════════════
//    UTILS
// ══════════════════════════════════════════════════════════════════ */
// function genRef(): string {
//   return `TABI-JS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
// }

// /* ══════════════════════════════════════════════════════════════════
//    DESIGN TOKENS
// ══════════════════════════════════════════════════════════════════ */
// const C = {
//   brand: "#71286F",
//   brandMid: "#9a2e92",
//   brandLt: "#c040a0",
//   surface: "#fdf8fe",
//   border: "#ede5ed",
//   muted: "#a888a8",
//   subtle: "#d4c0d4",
//   ink: "#1c0f1c",
//   body: "#6a4a6a",
//   error: "#d95555"
// } as const;

// const GRAD = `linear-gradient(135deg, ${C.brand} 0%, ${C.brandLt} 100%)`;

// /* ══════════════════════════════════════════════════════════════════
//    ANIMATION PRESETS
// ══════════════════════════════════════════════════════════════════ */
// const slide = {
//   enter: (d: Dir) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
//   show: { x: 0, opacity: 1 },
//   exit: (d: Dir) => ({ x: d > 0 ? -60 : 60, opacity: 0 })
// };
// const slideTx = { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

// const fadeUp = {
//   hidden: { opacity: 0, y: 10 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
//   })
// };

// /* ══════════════════════════════════════════════════════════════════
//    ATOMS
// ══════════════════════════════════════════════════════════════════ */
// function X({ onClose }: { onClose: () => void }) {
//   return (
//     <motion.button
//       onClick={onClose}
//       aria-label="Close"
//       whileHover={{ background: C.surface }}
//       whileTap={{ scale: 0.9 }}
//       className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-colors duration-150"
//       style={{ color: C.subtle }}
//     >
//       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//         <path
//           d="M1 1l10 10M11 1L1 11"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//         />
//       </svg>
//     </motion.button>
//   );
// }

// function Back({
//   onClick,
//   label = "Back"
// }: {
//   onClick: () => void;
//   label?: string;
// }) {
//   return (
//     <motion.button
//       onClick={onClick}
//       whileHover={{ x: -2 }}
//       className="flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-colors duration-150"
//       style={{ color: C.subtle }}
//       onMouseEnter={(e) => (e.currentTarget.style.color = C.brand)}
//       onMouseLeave={(e) => (e.currentTarget.style.color = C.subtle)}
//     >
//       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//         <path
//           d="M8 2L3.5 6 8 10"
//           stroke="currentColor"
//           strokeWidth="1.8"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//       {label}
//     </motion.button>
//   );
// }

// function Err({ msg }: { msg?: string }) {
//   if (!msg) return null;
//   return (
//     <motion.p
//       initial={{ opacity: 0, y: -4 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-xs mt-1.5 ml-0.5"
//       style={{ color: C.error }}
//     >
//       {msg}
//     </motion.p>
//   );
// }

// function Spin() {
//   return (
//     <svg
//       className="animate-spin"
//       width="14"
//       height="14"
//       viewBox="0 0 14 14"
//       fill="none"
//     >
//       <circle
//         cx="7"
//         cy="7"
//         r="5"
//         stroke="white"
//         strokeWidth="2"
//         strokeDasharray="20"
//         strokeDashoffset="6"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function Tag({ children }: { children: React.ReactNode }) {
//   return (
//     <span
//       className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.16em]"
//       style={{ background: `rgba(113,40,111,0.09)`, color: C.brand }}
//     >
//       {children}
//     </span>
//   );
// }

// /* ── Inputs ── */
// const BASE_INPUT =
//   "w-full border text-sm focus:outline-none transition-all duration-200 bg-white rounded-xl px-4 py-[11px]";
// const BASE_TA =
//   "w-full border text-sm focus:outline-none transition-all duration-200 bg-white resize-none rounded-2xl px-4 py-3";

// function icls(e?: string) {
//   const ring = e
//     ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-50"
//     : `border-[${C.border}] focus:border-[${C.brand}] focus:ring-2 focus:ring-[rgba(113,40,111,0.07)]`;
//   return `${BASE_INPUT} ${ring} placeholder-[#cbb8cb]`;
// }
// function tcls(e?: string) {
//   const ring = e
//     ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-50"
//     : `border-[${C.border}] focus:border-[${C.brand}] focus:ring-2 focus:ring-[rgba(113,40,111,0.07)]`;
//   return `${BASE_TA} ${ring} placeholder-[#cbb8cb]`;
// }

// function FieldLabel({
//   children,
//   optional
// }: {
//   children: React.ReactNode;
//   optional?: boolean;
// }) {
//   return (
//     <label
//       className="block text-xs font-semibold mb-1.5"
//       style={{ color: C.body }}
//     >
//       {children}
//       {optional ? (
//         <span className="font-normal ml-1" style={{ color: C.subtle }}>
//           (optional)
//         </span>
//       ) : (
//         <span style={{ color: C.brandLt }}> *</span>
//       )}
//     </label>
//   );
// }

// function Divider() {
//   return <div className="h-px my-5" style={{ background: C.border }} />;
// }

// function SectionHead({ children }: { children: React.ReactNode }) {
//   return (
//     <p
//       className="text-[10px] font-black uppercase tracking-[0.24em] mb-4"
//       style={{ color: C.subtle }}
//     >
//       {children}
//     </p>
//   );
// }

// /* ── Primary CTA ── */
// function Cta({
//   onClick,
//   loading,
//   children,
//   icon
// }: {
//   onClick?: () => void;
//   loading?: boolean;
//   children: React.ReactNode;
//   icon?: React.ReactNode;
// }) {
//   return (
//     <motion.button
//       onClick={onClick}
//       disabled={loading}
//       whileHover={
//         loading
//           ? {}
//           : { scale: 1.012, boxShadow: "0 8px 28px rgba(113,40,111,0.35)" }
//       }
//       whileTap={loading ? {} : { scale: 0.988 }}
//       className="w-full py-[14px] rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
//       style={{
//         background: GRAD,
//         boxShadow: "0 4px 18px rgba(113,40,111,0.24)"
//       }}
//     >
//       {loading ? (
//         <>
//           <Spin /> Saving…
//         </>
//       ) : (
//         <>
//           {icon}
//           {children}
//         </>
//       )}
//     </motion.button>
//   );
// }

// /* ── Subtle CTA ── */
// function SubCta({
//   onClick,
//   href,
//   children
// }: {
//   onClick?: () => void;
//   href?: string;
//   children: React.ReactNode;
// }) {
//   const cls =
//     "w-full py-[13px] rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer";
//   const style = {
//     color: C.brand,
//     border: `1px solid rgba(113,40,111,0.18)`,
//     background: `rgba(113,40,111,0.04)`
//   };
//   if (href) {
//     return (
//       <a href={href} target="_blank" rel="noopener noreferrer">
//         <motion.div
//           whileHover={{ background: "rgba(113,40,111,0.08)" }}
//           className={cls}
//           style={style}
//         >
//           {children}
//         </motion.div>
//       </a>
//     );
//   }
//   return (
//     <motion.button
//       onClick={onClick}
//       whileHover={{ background: "rgba(113,40,111,0.08)" }}
//       className={cls}
//       style={style}
//     >
//       {children}
//     </motion.button>
//   );
// }

// /* ── Copy button ── */
// function CopyBtn({ value, label = "Copy" }: { value: string; label?: string }) {
//   const [done, setDone] = useState(false);
//   function copy() {
//     navigator.clipboard.writeText(value);
//     setDone(true);
//     setTimeout(() => setDone(false), 2200);
//   }
//   return (
//     <motion.button
//       onClick={copy}
//       whileTap={{ scale: 0.92 }}
//       className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 cursor-pointer"
//       style={{
//         background: done ? C.brand : `rgba(113,40,111,0.08)`,
//         color: done ? "white" : C.brand
//       }}
//     >
//       {done ? (
//         <>
//           <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
//             <path
//               d="M1 4.5l2.5 2.5 4.5-4.5"
//               stroke="white"
//               strokeWidth="1.7"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           Copied
//         </>
//       ) : (
//         <>
//           <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
//             <rect
//               x="3"
//               y="3"
//               width="5.5"
//               height="5.5"
//               rx="1"
//               stroke="currentColor"
//               strokeWidth="1.3"
//             />
//             <path
//               d="M2.5 6H2A1 1 0 011 5V2a1 1 0 011-1h3a1 1 0 011 1v.5"
//               stroke="currentColor"
//               strokeWidth="1.3"
//               strokeLinecap="round"
//             />
//           </svg>
//           {label}
//         </>
//       )}
//     </motion.button>
//   );
// }

// /* ── Checkbox ── */
// function Check({
//   checked,
//   onChange,
//   children,
//   error
// }: {
//   checked: boolean;
//   onChange: () => void;
//   children: React.ReactNode;
//   error?: string;
// }) {
//   return (
//     <div>
//       <label className="flex items-start gap-3 cursor-pointer">
//         <motion.div
//           onClick={onChange}
//           animate={{
//             background: checked ? C.brand : "white",
//             borderColor: error ? C.error : checked ? C.brand : C.border
//           }}
//           transition={{ duration: 0.15 }}
//           className="mt-0.5 w-[18px] h-[18px] min-w-[18px] rounded-md border-2 flex items-center justify-center cursor-pointer"
//         >
//           <AnimatePresence>
//             {checked && (
//               <motion.svg
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0 }}
//                 width="9"
//                 height="9"
//                 viewBox="0 0 9 9"
//                 fill="none"
//               >
//                 <path
//                   d="M1 4.5l2.5 2.5 4.5-4.5"
//                   stroke="white"
//                   strokeWidth="1.7"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </motion.svg>
//             )}
//           </AnimatePresence>
//         </motion.div>
//         <span className="text-sm leading-relaxed" style={{ color: C.body }}>
//           {children}
//         </span>
//       </label>
//       <Err msg={error} />
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    PROGRESS BAR STEPPER
// ══════════════════════════════════════════════════════════════════ */
// function Stepper({ step }: { step: Step }) {
//   const idx = STEPS.indexOf(step);
//   const pct = (idx / (STEPS.length - 1)) * 100;

//   return (
//     <div className="mb-7">
//       {/* Track */}
//       <div
//         className="relative h-1 rounded-full mb-3"
//         style={{ background: C.border }}
//       >
//         <motion.div
//           className="absolute left-0 top-0 h-full rounded-full"
//           style={{ background: GRAD }}
//           animate={{ width: `${pct}%` }}
//           transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
//         />
//         {/* Step dots */}
//         <div className="absolute inset-0 flex items-center justify-between px-0">
//           {STEPS.map((s, i) => {
//             const done = i < idx;
//             const active = i === idx;
//             return (
//               <motion.div
//                 key={s}
//                 animate={{
//                   width: active ? 10 : 8,
//                   height: active ? 10 : 8,
//                   background: done || active ? C.brand : "white",
//                   borderColor: done || active ? C.brand : C.border,
//                   boxShadow: active ? `0 0 0 3px rgba(113,40,111,0.18)` : "none"
//                 }}
//                 transition={{ duration: 0.25 }}
//                 className="rounded-full border-2 -translate-y-0"
//                 style={{ minWidth: active ? 10 : 8 }}
//               />
//             );
//           })}
//         </div>
//       </div>
//       {/* Labels */}
//       <div className="flex items-center justify-between">
//         {STEPS.map((s, i) => {
//           const active = i === idx;
//           const done = i < idx;
//           return (
//             <span
//               key={s}
//               className="text-[9px] font-semibold uppercase tracking-wide transition-colors duration-200"
//               style={{ color: active ? C.brand : done ? C.muted : C.subtle }}
//             >
//               {STEP_META[s].short}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    STEP 1 — WELCOME
// ══════════════════════════════════════════════════════════════════ */
// const PROCESS = [
//   {
//     icon: "📋",
//     n: "01",
//     title: "Tell us about yourself",
//     body: "A short form so we can get to know your background and goals."
//   },
//   {
//     icon: "💳",
//     n: "02",
//     title: "Reserve your place",
//     body: "A ₦5,000 commitment fee confirms your spot after you've applied."
//   },
//   {
//     icon: "💬",
//     n: "03",
//     title: "Send your payment receipt",
//     body: "Drop it in our WhatsApp and we'll confirm your place right away."
//   }
// ];

// function WelcomeStep({
//   onNext,
//   onClose
// }: {
//   onNext: () => void;
//   onClose: () => void;
// }) {
//   return (
//     <div>
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex flex-col gap-1.5">
//           <Tag>Cohort 1 · June 2026</Tag>
//         </div>
//         <X onClose={onClose} />
//       </div>

//       <Stepper step="welcome" />

//       {/* Headline */}
//       <motion.div
//         variants={fadeUp}
//         custom={0}
//         initial="hidden"
//         animate="show"
//         className="mb-6"
//       >
//         <h2
//           className="font-extrabold leading-[1.15] tracking-tight mb-2.5"
//           style={{ fontSize: "clamp(1.35rem, 4vw, 1.55rem)", color: C.ink }}
//         >
//           You're one step away from
//           <br />
//           <span
//             style={{
//               background: GRAD,
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent"
//             }}
//           >
//             building something real.
//           </span>
//         </h2>
//         <p className="text-sm leading-relaxed" style={{ color: C.body }}>
//           The Full-Stack JS Bootcamp is a 4-week live programme for developers
//           ready to go from consuming tutorials to shipping real products.
//         </p>
//       </motion.div>

//       {/* Process cards */}
//       <div className="space-y-2.5 mb-6">
//         {PROCESS.map((p, i) => (
//           <motion.div
//             key={p.n}
//             variants={fadeUp}
//             custom={i + 1}
//             initial="hidden"
//             animate="show"
//             className="flex items-start gap-3.5 px-4 py-3.5 rounded-2xl"
//             style={{ background: C.surface, border: `1px solid ${C.border}` }}
//           >
//             {/* Icon */}
//             <div
//               className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
//               style={{
//                 background: "white",
//                 border: `1px solid ${C.border}`,
//                 boxShadow: "0 1px 6px rgba(113,40,111,0.07)"
//               }}
//             >
//               {p.icon}
//             </div>
//             <div className="flex-1 min-w-0">
//               <p
//                 className="font-semibold text-sm leading-snug mb-0.5"
//                 style={{ color: C.ink }}
//               >
//                 {p.title}
//               </p>
//               <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
//                 {p.body}
//               </p>
//             </div>
//             <span
//               className="text-[10px] font-black shrink-0 pt-0.5"
//               style={{ color: C.subtle }}
//             >
//               {p.n}
//             </span>
//           </motion.div>
//         ))}
//       </div>

//       {/* Trust note */}
//       <motion.div
//         variants={fadeUp}
//         custom={4}
//         initial="hidden"
//         animate="show"
//         className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
//         style={{ background: C.surface, border: `1px solid ${C.border}` }}
//       >
//         <span className="shrink-0 text-base">🛡️</span>
//         <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
//           Every application is reviewed personally by the Tabi team. No bots, no
//           automated filtering.
//         </p>
//       </motion.div>

//       <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show">
//         <Cta onClick={onNext}>Let's get started →</Cta>
//         <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
//           About 5 minutes · No payment needed to start
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    STEP 2 — FORM
// ══════════════════════════════════════════════════════════════════ */
// function FormStep({
//   onBack,
//   onSuccess,
//   onClose
// }: {
//   onBack: () => void;
//   onSuccess: (d: FormData) => void;
//   onClose: () => void;
// }) {
//   const [f, setF] = useState<FormData>(BLANK);
//   const [e, setE] = useState<Partial<Record<keyof FormData, string>>>({});
//   const [st, setSt] = useState<ApiStatus>("idle");
//   const [apiErr, setApiErr] = useState("");

//   const set = <K extends keyof FormData>(k: K, v: FormData[K]) => {
//     setF((p) => ({ ...p, [k]: v }));
//     setE((p) => ({ ...p, [k]: "" }));
//   };
//   const toggleLang = (l: string) =>
//     set(
//       "languages",
//       f.languages.includes(l)
//         ? f.languages.filter((x) => x !== l)
//         : [...f.languages, l]
//     );

//   function validate() {
//     const n: typeof e = {};
//     if (!f.firstName.trim()) n.firstName = "We'd love to know your first name";
//     if (!f.lastName.trim()) n.lastName = "And your last name?";
//     if (!f.email.trim()) n.email = "We'll need your email to reach you";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
//       n.email = "That doesn't look quite right";
//     if (!f.phone.trim()) n.phone = "A phone number helps us stay in touch";
//     if (!f.location.trim()) n.location = "Where are you based?";
//     if (!f.experienceLevel)
//       n.experienceLevel = "Pick the level that feels most honest";
//     if (!f.languages.length)
//       n.languages = "Select at least one you've worked with";
//     if (!f.whyJoin.trim())
//       n.whyJoin = "We'd love to hear your story — even a sentence or two";
//     if (!f.canCommit) n.canCommit = "Let us know about your availability";
//     if (!f.acceptsFee)
//       n.acceptsFee = "Just so we're on the same page about the fee";
//     if (!f.acceptsRequirement)
//       n.acceptsRequirement = "Please confirm your coding background";
//     setE(n);
//     return Object.keys(n).length === 0;
//   }

//   async function submit() {
//     if (!validate()) return;
//     setSt("loading");
//     setApiErr("");
//     try {
//       const res = await fetch("/api/bootcamp-apply", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...f,
//           firstName: f.firstName.trim(),
//           lastName: f.lastName.trim(),
//           email: f.email.trim(),
//           phone: f.phone.trim(),
//           location: f.location.trim(),
//           portfolio: f.portfolio.trim(),
//           whyJoin: f.whyJoin.trim(),
//           languages: f.languages.join(", ")
//         })
//       });
//       const json = await res.json();
//       if (json.success) {
//         onSuccess(f);
//       } else {
//         setSt("error");
//         setApiErr(
//           json.error ?? "Something didn't go through — please try again."
//         );
//         setTimeout(() => setSt("idle"), 5000);
//       }
//     } catch {
//       setSt("error");
//       setApiErr(
//         "A connection error occurred. Please check your internet and try again."
//       );
//       setTimeout(() => setSt("idle"), 5000);
//     }
//   }

//   const Group = ({ children }: { children: React.ReactNode }) => (
//     <div
//       className="rounded-2xl p-5 space-y-4"
//       style={{ background: C.surface, border: `1px solid ${C.border}` }}
//     >
//       {children}
//     </div>
//   );

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-6">
//         <Back onClick={onBack} label="Overview" />
//         <X onClose={onClose} />
//       </div>

//       <Stepper step="form" />

//       <div className="mb-6">
//         <h2
//           className="font-extrabold tracking-tight mb-1.5"
//           style={{ fontSize: "1.25rem", color: C.ink }}
//         >
//           Tell us about yourself
//         </h2>
//         <p className="text-sm" style={{ color: C.muted }}>
//           Our team reads every application personally. Just be genuine.
//         </p>
//       </div>

//       <div className="space-y-4">
//         {/* Part A */}
//         <Group>
//           <SectionHead>Your details</SectionHead>
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <FieldLabel>First name</FieldLabel>
//               <input
//                 placeholder="Ada"
//                 value={f.firstName}
//                 type="text"
//                 onChange={(ev) => set("firstName", ev.target.value)}
//                 className={icls(e.firstName)}
//               />
//               <Err msg={e.firstName} />
//             </div>
//             <div>
//               <FieldLabel>Last name</FieldLabel>
//               <input
//                 placeholder="Okafor"
//                 value={f.lastName}
//                 type="text"
//                 onChange={(ev) => set("lastName", ev.target.value)}
//                 className={icls(e.lastName)}
//               />
//               <Err msg={e.lastName} />
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <FieldLabel>Email address</FieldLabel>
//               <input
//                 placeholder="ada@gmail.com"
//                 value={f.email}
//                 type="email"
//                 onChange={(ev) => set("email", ev.target.value)}
//                 className={icls(e.email)}
//               />
//               <Err msg={e.email} />
//             </div>
//             <div>
//               <FieldLabel>Phone number</FieldLabel>
//               <input
//                 placeholder="+234 801…"
//                 value={f.phone}
//                 type="tel"
//                 onChange={(ev) => set("phone", ev.target.value)}
//                 className={icls(e.phone)}
//               />
//               <Err msg={e.phone} />
//             </div>
//           </div>
//           <div>
//             <FieldLabel>Where are you based?</FieldLabel>
//             <input
//               placeholder="Lagos, Nigeria"
//               value={f.location}
//               type="text"
//               onChange={(ev) => set("location", ev.target.value)}
//               className={icls(e.location)}
//             />
//             <Err msg={e.location} />
//           </div>
//         </Group>

//         {/* Part B */}
//         <Group>
//           <SectionHead>Your coding background</SectionHead>

//           {/* Level */}
//           <div>
//             <FieldLabel>How would you describe your experience?</FieldLabel>
//             <div className="space-y-2 mt-1">
//               {LEVELS.map((lv) => {
//                 const on = f.experienceLevel === lv.id;
//                 return (
//                   <motion.button
//                     key={lv.id}
//                     type="button"
//                     onClick={() => set("experienceLevel", lv.id)}
//                     whileHover={{ x: on ? 0 : 2 }}
//                     className="w-full text-left px-4 py-3 rounded-xl border flex items-center justify-between transition-all duration-150"
//                     style={{
//                       background: on ? `rgba(113,40,111,0.07)` : "white",
//                       borderColor: on ? C.brand : C.border
//                     }}
//                   >
//                     <div>
//                       <p
//                         className="text-sm font-semibold"
//                         style={{ color: on ? C.brand : C.ink }}
//                       >
//                         {lv.title}
//                       </p>
//                       <p className="text-xs" style={{ color: C.subtle }}>
//                         {lv.hint}
//                       </p>
//                     </div>
//                     <AnimatePresence>
//                       {on && (
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           exit={{ scale: 0 }}
//                           className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
//                           style={{ background: C.brand }}
//                         >
//                           <svg
//                             width="8"
//                             height="8"
//                             viewBox="0 0 8 8"
//                             fill="none"
//                           >
//                             <path
//                               d="M1.5 4l2 2 3-3"
//                               stroke="white"
//                               strokeWidth="1.6"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.button>
//                 );
//               })}
//             </div>
//             <Err msg={e.experienceLevel} />
//           </div>

//           {/* Languages */}
//           <div>
//             <FieldLabel>Languages you've worked with</FieldLabel>
//             <p className="text-xs mb-3" style={{ color: C.subtle }}>
//               Select everything that applies — no need to be an expert.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {LANGUAGES.map((l) => {
//                 const on = f.languages.includes(l);
//                 return (
//                   <motion.button
//                     key={l}
//                     type="button"
//                     onClick={() => toggleLang(l)}
//                     whileTap={{ scale: 0.93 }}
//                     className="px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-150"
//                     style={{
//                       background: on ? C.brand : "white",
//                       color: on ? "white" : C.body,
//                       borderColor: on ? C.brand : C.border
//                     }}
//                   >
//                     {l}
//                   </motion.button>
//                 );
//               })}
//             </div>
//             <Err msg={e.languages} />
//           </div>

//           {/* Portfolio */}
//           <div>
//             <FieldLabel optional>GitHub or Portfolio</FieldLabel>
//             <input
//               placeholder="https://github.com/…"
//               value={f.portfolio}
//               type="url"
//               onChange={(ev) => set("portfolio", ev.target.value)}
//               className={icls()}
//             />
//           </div>
//         </Group>

//         {/* Part C */}
//         <Group>
//           <SectionHead>A little more about you</SectionHead>

//           <div>
//             <FieldLabel>Why do you want to join this programme?</FieldLabel>
//             <p className="text-xs mb-2" style={{ color: C.subtle }}>
//               Be genuine — we value real motivation over polished answers.
//             </p>
//             <textarea
//               rows={4}
//               placeholder="Tell us what you're hoping to build, change, or achieve…"
//               value={f.whyJoin}
//               onChange={(ev) => set("whyJoin", ev.target.value)}
//               className={tcls(e.whyJoin)}
//             />
//             <Err msg={e.whyJoin} />
//           </div>

//           <div>
//             <FieldLabel>
//               Can you join Mon · Wed · Fri sessions (June 11 – July 4)?
//             </FieldLabel>
//             <p className="text-xs mb-2.5" style={{ color: C.subtle }}>
//               Each session is 2.5 hrs · Google Meet · Live instruction.
//             </p>
//             <div className="grid grid-cols-2 gap-2.5">
//               {(["yes", "no"] as const).map((v) => {
//                 const on = f.canCommit === v;
//                 return (
//                   <motion.button
//                     key={v}
//                     type="button"
//                     onClick={() => set("canCommit", v)}
//                     whileTap={{ scale: 0.96 }}
//                     className="py-3 rounded-xl border text-sm font-semibold transition-all duration-150"
//                     style={{
//                       background: on
//                         ? v === "yes"
//                           ? `rgba(113,40,111,0.08)`
//                           : "rgba(220,68,68,0.06)"
//                         : "white",
//                       color: on ? (v === "yes" ? C.brand : "#dc4444") : C.body,
//                       borderColor: on
//                         ? v === "yes"
//                           ? C.brand
//                           : "#f08080"
//                         : C.border
//                     }}
//                   >
//                     {v === "yes" ? "Yes, I'm in" : "No, I can't"}
//                   </motion.button>
//                 );
//               })}
//             </div>
//             <Err msg={e.canCommit} />
//           </div>
//         </Group>

//         {/* Confirmations */}
//         <div className="space-y-3.5 px-0.5">
//           <SectionHead>Two quick confirmations</SectionHead>
//           <Check
//             checked={f.acceptsFee}
//             onChange={() => set("acceptsFee", !f.acceptsFee)}
//             error={e.acceptsFee}
//           >
//             I'm aware of the ₦5,000 registration fee that follows this form.
//           </Check>
//           <Check
//             checked={f.acceptsRequirement}
//             onChange={() => set("acceptsRequirement", !f.acceptsRequirement)}
//             error={e.acceptsRequirement}
//           >
//             I have prior coding experience and understand this is an intensive,
//             fast-paced programme.
//           </Check>
//         </div>

//         {/* API error */}
//         {st === "error" && (
//           <p className="text-xs text-center" style={{ color: C.error }}>
//             {apiErr}
//           </p>
//         )}

//         <div className="pt-1">
//           <Cta onClick={submit} loading={st === "loading"}>
//             Save & continue →
//           </Cta>
//           <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
//             Your details are saved before you move to payment
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    STEP 3 — PAYMENT
// ══════════════════════════════════════════════════════════════════ */
// function PaymentStep({
//   onBack,
//   onNext,
//   onClose,
//   refId
// }: {
//   onBack: () => void;
//   onNext: () => void;
//   onClose: () => void;
//   refId: string;
// }) {
//   return (
//     <div>
//       <div className="flex items-center justify-between mb-6">
//         <Back onClick={onBack} label="Application" />
//         <X onClose={onClose} />
//       </div>

//       <Stepper step="payment" />

//       <div className="mb-6">
//         <h2
//           className="font-extrabold tracking-tight mb-1.5"
//           style={{ fontSize: "1.25rem", color: C.ink }}
//         >
//           Reserve your spot
//         </h2>
//         <p className="text-sm leading-relaxed" style={{ color: C.body }}>
//           Your application is saved. Complete the ₦5,000 commitment fee below to
//           secure your place in Cohort 1.
//         </p>
//       </div>

//       {/* Ref ID */}
//       <div
//         className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl mb-5"
//         style={{
//           background: `rgba(113,40,111,0.06)`,
//           border: `1px solid rgba(113,40,111,0.14)`
//         }}
//       >
//         <div>
//           <p
//             className="text-[10px] font-black uppercase tracking-[0.2em] mb-0.5"
//             style={{ color: C.muted }}
//           >
//             Your application reference
//           </p>
//           <p
//             className="font-extrabold tracking-widest text-base"
//             style={{ color: C.brand }}
//           >
//             {refId}
//           </p>
//           <p className="text-[10px] mt-0.5" style={{ color: C.subtle }}>
//             Include this when sending your receipt
//           </p>
//         </div>
//         <CopyBtn value={refId} label="Copy ref" />
//       </div>

//       {/* Bank card */}
//       <div
//         className="rounded-2xl p-5 mb-5"
//         style={{ background: C.surface, border: `1px solid ${C.border}` }}
//       >
//         <SectionHead>Bank transfer details</SectionHead>
//         <div className="space-y-3.5">
//           {[
//             { k: "Bank", v: "KudaBank" },
//             {
//               k: "Account name",
//               v: "Tabi Empowerment and Educational Foundation"
//             }
//           ].map((row) => (
//             <div key={row.k}>
//               <div className="flex items-start justify-between gap-4">
//                 <span
//                   className="text-[10px] font-black uppercase tracking-widest shrink-0 mt-0.5"
//                   style={{ color: C.subtle }}
//                 >
//                   {row.k}
//                 </span>
//                 <span
//                   className="text-sm font-semibold text-right leading-snug"
//                   style={{ color: C.ink }}
//                 >
//                   {row.v}
//                 </span>
//               </div>
//               <div className="h-px mt-3.5" style={{ background: C.border }} />
//             </div>
//           ))}
//           <div className="flex items-center justify-between">
//             <span
//               className="text-[10px] font-black uppercase tracking-widest"
//               style={{ color: C.subtle }}
//             >
//               Account number
//             </span>
//             <div className="flex items-center gap-2.5">
//               <span
//                 className="font-extrabold text-lg tracking-wider"
//                 style={{ color: C.brand }}
//               >
//                 3003408026
//               </span>
//               <CopyBtn value="3003408026" />
//             </div>
//           </div>
//           <div className="h-px" style={{ background: C.border }} />
//           <div className="flex items-center justify-between">
//             <span
//               className="text-[10px] font-black uppercase tracking-widest"
//               style={{ color: C.subtle }}
//             >
//               Amount
//             </span>
//             <span
//               className="font-extrabold text-base"
//               style={{ color: C.brand }}
//             >
//               ₦5,000
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Tip */}
//       <div
//         className="flex items-start gap-3 px-4 py-3.5 rounded-xl mb-7"
//         style={{ background: C.surface, border: `1px solid ${C.border}` }}
//       >
//         <span className="shrink-0 mt-0.5">💡</span>
//         <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
//           Once you've made the transfer, save a screenshot of your receipt.
//           You'll share it with us via WhatsApp in the next step — include your
//           reference <strong style={{ color: C.brand }}>{refId}</strong>.
//         </p>
//       </div>

//       <Cta onClick={onNext}>I've made the payment →</Cta>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    STEP 4 — CONFIRMATION
// ══════════════════════════════════════════════════════════════════ */
// function ConfirmStep({
//   onNext,
//   onClose,
//   refId,
//   firstName
// }: {
//   onNext: () => void;
//   onClose: () => void;
//   refId: string;
//   firstName: string;
// }) {
//   const name = firstName || "there";
//   const waMsg = encodeURIComponent(
//     `Hi! I've completed my registration for the Tabi JS Bootcamp (Cohort 1).\n\nName: ${name}\nReference ID: ${refId}\n\nAttaching my payment receipt now.`
//   );
//   const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

//   const mailSub = encodeURIComponent(`Bootcamp Payment — ${refId}`);
//   const mailBdy = encodeURIComponent(
//     `Hi Tabi Team,\n\nI've completed my registration for Cohort 1.\n\nName: ${name}\nReference: ${refId}\n\nPayment receipt is attached.\n\nThank you!`
//   );
//   const mailUrl = `mailto:${SUPPORT_EMAIL}?subject=${mailSub}&body=${mailBdy}`;

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-6">
//         <div />
//         <X onClose={onClose} />
//       </div>

//       <Stepper step="confirmation" />

//       <div className="mb-7">
//         <h2
//           className="font-extrabold tracking-tight mb-1.5"
//           style={{ fontSize: "1.25rem", color: C.ink }}
//         >
//           One last step
//         </h2>
//         <p className="text-sm leading-relaxed" style={{ color: C.body }}>
//           Send us your payment receipt so we can verify it and officially
//           confirm your place. It takes less than a minute.
//         </p>
//       </div>

//       {/* What to include */}
//       <div
//         className="rounded-2xl p-5 mb-5"
//         style={{ background: C.surface, border: `1px solid ${C.border}` }}
//       >
//         <SectionHead>What to send us</SectionHead>
//         <div className="space-y-3">
//           {[
//             { icon: "👤", text: `Your full name — ${name}` },
//             { icon: "🔖", text: `Your reference ID — ${refId}` },
//             { icon: "📸", text: "A screenshot of your payment confirmation" }
//           ].map((it, i) => (
//             <div key={i} className="flex items-center gap-3">
//               <span className="text-base shrink-0">{it.icon}</span>
//               <p className="text-sm" style={{ color: C.body }}>
//                 {it.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* WhatsApp */}
//       <motion.a
//         href={waUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block mb-3"
//       >
//         <motion.div
//           whileHover={{
//             scale: 1.012,
//             boxShadow: "0 8px 28px rgba(37,211,102,0.3)"
//           }}
//           whileTap={{ scale: 0.988 }}
//           className="w-full py-[14px] rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 cursor-pointer"
//           style={{
//             background: "#25D366",
//             boxShadow: "0 4px 18px rgba(37,211,102,0.22)"
//           }}
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
//             <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.563 4.14 1.534 5.875L0 24l6.292-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.673-.502-5.21-1.378l-.374-.217-3.737.895.944-3.641-.244-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
//           </svg>
//           Send via WhatsApp
//         </motion.div>
//       </motion.a>

//       <SubCta href={mailUrl}>
//         <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
//           <rect
//             x="1"
//             y="3"
//             width="12"
//             height="8"
//             rx="1.5"
//             stroke="currentColor"
//             strokeWidth="1.4"
//           />
//           <path
//             d="M1 4l6 4 6-4"
//             stroke="currentColor"
//             strokeWidth="1.4"
//             strokeLinecap="round"
//           />
//         </svg>
//         Send via email instead
//       </SubCta>

//       {/* Divider */}
//       <div className="flex items-center gap-3 my-5">
//         <div className="flex-1 h-px" style={{ background: C.border }} />
//         <span className="text-[11px]" style={{ color: C.subtle }}>
//           already sent?
//         </span>
//         <div className="flex-1 h-px" style={{ background: C.border }} />
//       </div>

//       <motion.button
//         onClick={onNext}
//         whileHover={{ color: C.brand }}
//         className="w-full py-3 rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer"
//         style={{ color: C.muted }}
//       >
//         I've sent my receipt ✓
//       </motion.button>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    STEP 5 — SUCCESS
// ══════════════════════════════════════════════════════════════════ */
// function SuccessStep({
//   onClose,
//   firstName,
//   refId
// }: {
//   onClose: () => void;
//   firstName: string;
//   refId: string;
// }) {
//   return (
//     <div className="text-center py-2">
//       <Stepper step="success" />

//       {/* Checkmark */}
//       <motion.div
//         initial={{ scale: 0.5, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 280,
//           damping: 22,
//           delay: 0.05
//         }}
//         className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
//         style={{
//           background: GRAD,
//           boxShadow: "0 12px 36px rgba(113,40,111,0.26)"
//         }}
//       >
//         <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
//           <motion.path
//             d="M6 15l6.5 6.5L24 8"
//             stroke="white"
//             strokeWidth="2.6"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{
//               delay: 0.25,
//               duration: 0.5,
//               ease: [0.22, 1, 0.36, 1]
//             }}
//           />
//         </svg>
//       </motion.div>

//       <motion.h2
//         variants={fadeUp}
//         custom={0}
//         initial="hidden"
//         animate="show"
//         className="font-extrabold tracking-tight mb-2"
//         style={{ fontSize: "1.4rem", color: C.ink }}
//       >
//         You're all in{firstName ? `, ${firstName}` : ""}! 🎉
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         custom={1}
//         initial="hidden"
//         animate="show"
//         className="text-sm leading-relaxed mb-1.5 max-w-xs mx-auto"
//         style={{ color: C.body }}
//       >
//         Your application has been received and your spot is being held. We'll be
//         in touch soon.
//       </motion.p>

//       <motion.p
//         variants={fadeUp}
//         custom={2}
//         initial="hidden"
//         animate="show"
//         className="text-xs mb-7"
//         style={{ color: C.subtle }}
//       >
//         Reference: <strong style={{ color: C.brand }}>{refId}</strong>
//       </motion.p>

//       {/* What's next */}
//       <motion.div
//         variants={fadeUp}
//         custom={3}
//         initial="hidden"
//         animate="show"
//         className="rounded-2xl p-5 mb-7 text-left"
//         style={{ background: C.surface, border: `1px solid ${C.border}` }}
//       >
//         <SectionHead>What happens next</SectionHead>
//         <div className="space-y-4">
//           {[
//             {
//               icon: "👀",
//               text: "Our team reviews every application personally — no shortcuts."
//             },
//             {
//               icon: "📩",
//               text: "Accepted applicants hear back by June 3rd with onboarding details."
//             },
//             {
//               icon: "🤝",
//               text: "If it's not the right fit yet, we'll guide you toward the best next step."
//             }
//           ].map((it, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <span className="text-base shrink-0 mt-0.5">{it.icon}</span>
//               <p className="text-xs leading-relaxed" style={{ color: C.body }}>
//                 {it.text}
//               </p>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//       <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show">
//         <Cta onClick={onClose}>Close</Cta>
//       </motion.div>
//     </div>
//   );
// }

// /* ══════════════════════════════════════════════════════════════════
//    ROOT MODAL
// ══════════════════════════════════════════════════════════════════ */
// export default function BootcampApplyModal({ onClose }: Props) {
//   const [step, setStep] = useState<Step>("welcome");
//   const [dir, setDir] = useState<Dir>(1);
//   const [data, setData] = useState<FormData>(BLANK);
//   const [ref] = useState(genRef);

//   /* Lock scroll */
//   useEffect(() => {
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = prev;
//     };
//   }, []);

//   /* ESC key */
//   useEffect(() => {
//     const fn = (ev: KeyboardEvent) => {
//       if (ev.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", fn);
//     return () => window.removeEventListener("keydown", fn);
//   }, [onClose]);

//   const go = useCallback(
//     (next: Step) => {
//       setDir(STEPS.indexOf(next) > STEPS.indexOf(step) ? 1 : -1);
//       setStep(next);
//     },
//     [step]
//   );

//   return (
//     <AnimatePresence>
//       {/* Backdrop */}
//       <motion.div
//         key="bd"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.22 }}
//         className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
//         style={{
//           background: "rgba(16,6,16,0.55)",
//           backdropFilter: "blur(10px)"
//         }}
//         onClick={(ev) => {
//           if (ev.target === ev.currentTarget) onClose();
//         }}
//       >
//         {/* Card */}
//         <motion.div
//           key="card"
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 40, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 340, damping: 32 }}
//           className="relative w-full bg-white sm:rounded-3xl rounded-t-3xl overflow-hidden"
//           style={{
//             maxWidth: "480px",
//             maxHeight: "93vh",
//             boxShadow:
//               "0 32px 80px rgba(113,40,111,0.18), 0 0 0 1px rgba(113,40,111,0.07)"
//           }}
//         >
//           {/* Gradient accent bar */}
//           <div
//             className="h-[3px] w-full shrink-0"
//             style={{
//               background: "linear-gradient(90deg, #71286F, #c040a0, #71286F)"
//             }}
//           />

//           {/* Mobile handle */}
//           <div className="flex justify-center pt-3 sm:hidden">
//             <div
//               className="w-9 h-1 rounded-full"
//               style={{ background: C.border }}
//             />
//           </div>

//           {/* Scrollable content */}
//           <div
//             className="overflow-y-auto"
//             style={{ maxHeight: "calc(93vh - 3px)" }}
//           >
//             <AnimatePresence mode="wait" custom={dir}>
//               <motion.div
//                 key={step}
//                 custom={dir}
//                 variants={slide}
//                 initial="enter"
//                 animate="show"
//                 exit="exit"
//                 transition={slideTx}
//                 className="px-6 pt-5 pb-8 sm:px-7 sm:pt-6"
//               >
//                 {step === "welcome" && (
//                   <WelcomeStep onNext={() => go("form")} onClose={onClose} />
//                 )}
//                 {step === "form" && (
//                   <FormStep
//                     onBack={() => go("welcome")}
//                     onSuccess={(d) => {
//                       setData(d);
//                       go("payment");
//                     }}
//                     onClose={onClose}
//                   />
//                 )}
//                 {step === "payment" && (
//                   <PaymentStep
//                     onBack={() => go("form")}
//                     onNext={() => go("confirmation")}
//                     onClose={onClose}
//                     refId={ref}
//                   />
//                 )}
//                 {step === "confirmation" && (
//                   <ConfirmStep
//                     onNext={() => go("success")}
//                     onClose={onClose}
//                     refId={ref}
//                     firstName={data.firstName}
//                   />
//                 )}
//                 {step === "success" && (
//                   <SuccessStep
//                     onClose={onClose}
//                     firstName={data.firstName}
//                     refId={ref}
//                   />
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

//VERSION 3
"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeStep } from "./modal/steps/WelcomeStep";
import { FormStep } from "./modal/steps/FormStep";
import { PaymentStep } from "./modal/steps/PaymentStep";
import { ConfirmationStep } from "./modal/steps/ConfirmationStep";
import { SuccessStep } from "./modal/steps/SuccessStep";
import { STEPS, BLANK, genRef, slide, slideTx } from "./modal/shared";
import type { Step, FormData } from "./modal/shared";

interface Props {
  onClose: () => void;
}

export default function BootcampApplyModal({ onClose }: Props) {
  const [step, setStep] = useState<Step>("welcome");
  const [dir, setDir] = useState<1 | -1>(1);
  const [data, setData] = useState<FormData>(BLANK);
  const [ref] = useState(genRef);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const fn = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const go = useCallback(
    (next: Step) => {
      setDir(STEPS.indexOf(next) > STEPS.indexOf(step) ? 1 : -1);
      setStep(next);
    },
    [step]
  );

  return (
    <AnimatePresence>
      <motion.div
        key="bd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
        style={{
          background: "rgba(16,6,16,0.55)",
          backdropFilter: "blur(10px)"
        }}
        onClick={(ev) => {
          if (ev.target === ev.currentTarget) onClose();
        }}
      >
        <motion.div
          key="card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 32 }}
          className="relative w-full bg-white sm:rounded-3xl rounded-t-3xl overflow-hidden"
          style={{
            maxWidth: "480px",
            maxHeight: "93vh",
            boxShadow:
              "0 32px 80px rgba(113,40,111,0.18), 0 0 0 1px rgba(113,40,111,0.07)"
          }}
        >
          <div
            className="h-[3px] w-full shrink-0"
            style={{
              background: "linear-gradient(90deg, #71286F, #c040a0, #71286F)"
            }}
          />
          <div className="flex justify-center pt-3 sm:hidden">
            <div
              className="w-9 h-1 rounded-full"
              style={{ background: "#ede5ed" }}
            />
          </div>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(93vh - 3px)" }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="show"
                exit="exit"
                transition={slideTx}
                className="px-6 pt-5 pb-8 sm:px-7 sm:pt-6"
              >
                {step === "welcome" && (
                  <WelcomeStep onNext={() => go("form")} onClose={onClose} />
                )}
                {step === "form" && (
                  <FormStep
                    onBack={() => go("welcome")}
                    onSuccess={(d) => {
                      setData(d);
                      go("payment");
                    }}
                    onClose={onClose}
                  />
                )}
                {step === "payment" && (
                  <PaymentStep
                    onBack={() => go("form")}
                    onNext={() => go("confirmation")}
                    onClose={onClose}
                    refId={ref}
                  />
                )}
                {step === "confirmation" && (
                  <ConfirmationStep
                    onNext={() => go("success")}
                    onClose={onClose}
                    refId={ref}
                    firstName={data.firstName}
                  />
                )}
                {step === "success" && (
                  <SuccessStep
                    onClose={onClose}
                    firstName={data.firstName}
                    refId={ref}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}