"use client";

import { useState } from "react";
import { Mail, UserCheck, Globe, Copy, Check } from "lucide-react";
import { Button } from "@/components/atoms/Button";

interface ModalProps {
  onClose: () => void;
  initialTab?: "local" | "intl";
}

export default function PaymentMethodModal({
  onClose,
  initialTab = "local"
}: ModalProps) {
  const [activeTab, setActiveTab] = useState<"local" | "intl">(initialTab);
  const [copied, setCopied] = useState(false);
  const accountNo = "3003408026";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Container Updates: 
          - max-h-[90vh] keeps it from bleeding off the screen.
          - overflow-y-auto allows internal scrolling.
      */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl p-8 transition-all duration-300 max-h-[90vh] overflow-y-auto">
        {/* Sticky Header: Remains visible while scrolling */}
        <div className="sticky top-0 bg-white z-20 pb-4 flex items-center justify-between mb-2">
          <h2 className="text-xl font-extrabold text-[#1a1a2e]">
            Select Payment Method
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-colors p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex p-1 bg-brand-surface border border-brand-primary/10 rounded-2xl mb-8">
          <button
            onClick={() => setActiveTab("local")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "local"
                ? "bg-white text-brand-primary shadow-sm"
                : "text-[#888]"
            }`}
          >
            Local Transfer (NGN)
          </button>
          <button
            onClick={() => setActiveTab("intl")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === "intl"
                ? "bg-white text-brand-primary shadow-sm"
                : "text-[#888]"
            }`}
          >
            International Options
          </button>
        </div>

        {activeTab === "local" ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Bank Details Card */}
            <div className="bg-[#fdf7ff] border border-brand-primary/10 rounded-2xl p-6 space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-purple-100 pb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Bank Name
                </span>
                <span className="text-sm font-bold text-[#1a1a2e]">
                  Kuda Bank
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-purple-100 pb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Account Name
                </span>
                <span className="text-xs font-bold text-[#1a1a2e] text-right max-w-[200px]">
                  Tabi Empowerment and Educational Foundation
                </span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Account Number
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-brand-primary tracking-tight">
                    {accountNo}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary active:scale-95 transition-all border border-brand-primary/5"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mandatory Next Steps */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-[#1a1a2e] uppercase tracking-[0.2em] px-1">
                Important Next Steps
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {/* Step 1: Proof of Payment */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50 border border-blue-100/50">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={16} className="text-blue-600" />
                  </div>
                  <p className="text-[13px] leading-relaxed text-gray-700">
                    Email your <strong>transaction receipt</strong> to{" "}
                    <span className="text-blue-700 font-bold">
                      hello@tabiproject.com
                    </span>{" "}
                    to confirm your enrollment.
                  </p>
                </div>

                {/* Step 2: Third Party Narration */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-orange-50 border border-orange-100/50">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <UserCheck size={16} className="text-orange-600" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-black text-orange-800 uppercase tracking-wider">
                      Third-Party Notice
                    </p>
                    <p className="text-[13px] leading-relaxed text-gray-700">
                      If the transfer is done from an account that{" "}
                      <strong>doesn&apos;t bear your name</strong>, include your{" "}
                      <strong>full name</strong> in the payment description.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              className="w-full mt-8 py-6 rounded-2xl"
              onClick={onClose}
            >
              I have made the transfer
            </Button>
          </div>
        ) : (
          <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="w-16 h-16 bg-brand-surface rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Globe className="text-brand-primary" size={24} />
            </div>
            <h3 className="font-bold text-[#1a1a2e] mb-2">
              Tailored International Payments
            </h3>
            <p className="text-sm text-[#666] leading-relaxed mb-8 max-w-[280px] mx-auto">
              For students outside Nigeria, we provide secure custom payment
              links via email.
            </p>
            <Button
              variant="primary"
              className="w-full rounded-2xl py-6"
              onClick={() =>
                (window.location.href = "mailto:hello@tabiproject.com")
              }
            >
              Email hello@tabiproject.com
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
