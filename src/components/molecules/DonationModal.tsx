// "use client";

// import { useState } from "react";
// import { Button } from "@/components/atoms/Button";

// const AMOUNTS = ["500 NGN", "1000 NGN", "5000 NGN", "10,000 NGN"];
// const FREQUENCIES = ["One-Time", "Monthly", "Quarterly", "Annually"];

// interface DonationModalProps {
//   onClose: () => void;
// }

// export default function DonationModal({ onClose }: DonationModalProps) {
//   const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
//   const [customAmount, setCustomAmount] = useState("");
//   const [frequency, setFrequency] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4"
//       style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
//       onClick={(e) => e.target === e.currentTarget && onClose()}
//     >
//       <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-7">
//           <h2 className="text-xl font-extrabold text-[#1a1a2e]">
//             Donation Form
//           </h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-surface text-[#888] hover:text-brand-primary transition-colors duration-200"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path
//                 d="M3 3l10 10M13 3L3 13"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Name + Email */}
//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">
//               Donor Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-semibold text-[#333] mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               placeholder="abcd@gmail.com"
//               className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
//             />
//           </div>
//         </div>

//         {/* Amount */}
//         <div className="mb-6">
//           <label className="block text-xs font-semibold text-[#333] mb-3">
//             Select Amount
//           </label>
//           <div className="flex flex-wrap gap-2 mb-3">
//             {AMOUNTS.map((amt) => (
//               <button
//                 key={amt}
//                 onClick={() => {
//                   setSelectedAmount(amt);
//                   setCustomAmount("");
//                 }}
//                 className="rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 active:scale-95"
//                 style={{
//                   background: selectedAmount === amt ? "#71286F" : "#FDF8F8",
//                   color: selectedAmount === amt ? "white" : "#555",
//                   borderColor: selectedAmount === amt ? "#71286F" : "#e5e5e5"
//                 }}
//               >
//                 {amt}
//               </button>
//             ))}
//           </div>
//           <input
//             type="text"
//             placeholder="Amount"
//             value={customAmount}
//             onChange={(e) => {
//               setCustomAmount(e.target.value);
//               setSelectedAmount(null);
//             }}
//             className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
//           />
//         </div>

//         {/* Frequency */}
//         <div className="mb-8">
//           <label className="block text-xs font-semibold text-[#333] mb-3">
//             Donation Frequency
//           </label>
//           <div className="relative">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="w-full flex items-center justify-between rounded-full border border-[#E1E3EA] px-4 py-3 text-sm text-left transition-colors duration-200 focus:outline-none focus:border-brand-primary"
//               style={{ color: frequency ? "#333" : "#bbb" }}
//             >
//               {frequency || "Select frequency"}
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//                 fill="none"
//                 className="transition-transform duration-200 shrink-0"
//                 style={{
//                   transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
//                 }}
//               >
//                 <path
//                   d="M4 6l5 5 5-5"
//                   stroke="#aaa"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {dropdownOpen && (
//               <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-10">
//                 {FREQUENCIES.map((f) => (
//                   <button
//                     key={f}
//                     onClick={() => {
//                       setFrequency(f);
//                       setDropdownOpen(false);
//                     }}
//                     className="w-full text-left px-5 py-3.5 text-sm transition-colors duration-150 hover:bg-brand-surface"
//                     style={{
//                       background: frequency === f ? "#fdf7ff" : "white",
//                       color: frequency === f ? "#71286F" : "#333",
//                       fontWeight: frequency === f ? 600 : 400
//                     }}
//                   >
//                     {f}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex items-center justify-end gap-3">
//           <Button variant="outline" size="md" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" size="md">
//             Donate Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";

const AMOUNTS = ["500 NGN", "1000 NGN", "5000 NGN", "10,000 NGN"];
const FREQUENCIES = ["One-Time", "Monthly", "Quarterly", "Annually"];

interface DonationModalProps {
  onClose: () => void;
}

export default function DonationModal({ onClose }: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (!amount) return;
    setShowBankDetails(true);
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("3003408026");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        {/* ── Bank details screen ── */}
        {showBankDetails ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setShowBankDetails(false)}
                className="flex items-center gap-2 text-sm text-[#888] hover:text-brand-primary transition-colors duration-200"
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
                Back
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-surface text-[#888] hover:text-brand-primary transition-colors duration-200"
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

            {/* Bank transfer card */}
            <div className="text-center mb-8">
              {/* Icon */}
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
                Bank Transfer
              </h2>
              <p className="text-sm text-[#888] max-w-xs mx-auto leading-relaxed">
                Please transfer your donation to the account below and we&apos;ll
                confirm your contribution.
              </p>
            </div>

            {/* Account details card */}
            <div
              className="rounded-2xl p-6 mb-6"
              style={{ background: "#fdf7ff", border: "1px solid #ede8f5" }}
            >
              <div className="flex flex-col gap-4">
                {/* Bank name */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest">
                    Bank Name
                  </span>
                  <span className="text-sm font-bold text-[#1a1a2e]">
                    KudaBank
                  </span>
                </div>

                <div className="h-px bg-[#ede8f5]" />

                {/* Account name */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest shrink-0">
                    Account Name
                  </span>
                  <span className="text-sm font-bold text-[#1a1a2e] text-right leading-snug">
                    Tabi Empowerment and Educational Foundation
                  </span>
                </div>

                <div className="h-px bg-[#ede8f5]" />

                {/* Account number + copy */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#aaa] uppercase tracking-widest">
                    Account Number
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-extrabold text-brand-primary tracking-wider">
                      3003408026
                    </span>
                    <button
                      onClick={copyAccountNumber}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95"
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
                          Copied!
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
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation amount reminder */}
            {(selectedAmount || customAmount) && (
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
                  Please transfer{" "}
                  <span className="font-bold">
                    {selectedAmount || customAmount}
                  </span>
                  {frequency && <> ({frequency})</>} to the account above.
                </p>
              </div>
            )}

            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={onClose}
            >
              Done
            </Button>
          </>
        ) : (
          <>
            {/* ── Donation form ── */}
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-xl font-extrabold text-[#1a1a2e]">
                Donation Form
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-brand-surface text-[#888] hover:text-brand-primary transition-colors duration-200"
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

            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-[#333] mb-2">
                  Donor Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#333] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
                />
              </div>
            </div>

            {/* Amount */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#333] mb-3">
                Select Amount
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                    className="rounded-full px-4 py-2 text-sm font-medium border transition-all duration-200 active:scale-95"
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
              <input
                type="text"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full rounded-full border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors duration-200"
              />
            </div>

            {/* Frequency */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-[#333] mb-3">
                Donation Frequency
              </label>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full flex items-center justify-between rounded-full border border-[#E1E3EA] px-4 py-3 text-sm text-left transition-colors duration-200 focus:outline-none focus:border-brand-primary"
                  style={{ color: frequency ? "#333" : "#bbb" }}
                >
                  {frequency || "Select frequency"}
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
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#ede8f5] shadow-lg overflow-hidden z-10">
                    {FREQUENCIES.map((f) => (
                      <button
                        key={f}
                        onClick={() => {
                          setFrequency(f);
                          setDropdownOpen(false);
                        }}
                        className="w-full text-left px-5 py-3.5 text-sm transition-colors duration-150 hover:bg-brand-surface"
                        style={{
                          background: frequency === f ? "#fdf7ff" : "white",
                          color: frequency === f ? "#71286F" : "#333",
                          fontWeight: frequency === f ? 600 : 400
                        }}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3">
              <Button variant="outline" size="md" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
              >
                Donate Now
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}