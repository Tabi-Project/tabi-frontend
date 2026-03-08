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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
        {/* Header */}
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
                  background: selectedAmount === amt ? "#71286F" : "#FDF8F8",
                  color: selectedAmount === amt ? "white" : "#555",
                  borderColor: selectedAmount === amt ? "#71286F" : "#e5e5e5"
                }}
              >
                {amt}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Amount"
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
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
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
          <Button variant="primary" size="md">
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
}
