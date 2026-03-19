"use client";

import { useState } from "react";
import { Button } from "@/components/atoms/Button";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ConsultancyForm() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit() {
    if (
      !name.trim() ||
      !businessName.trim() ||
      !email.trim() ||
      !challenge.trim()
    )
      return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/consultancy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          businessName: businessName.trim(),
          email: email.trim(),
          challenge: challenge.trim()
        })
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setName("");
        setBusinessName("");
        setEmail("");
        setChallenge("");
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  const isLoading = status === "loading";
  const inputClass =
    "w-full rounded-xl border border-[#e5e5e5] px-4 py-3 text-sm text-[#333] placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50 bg-white";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl"
          style={{ background: "#F0FDF4" }}
        >
          ✅
        </div>
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">
          Application received!
        </h3>
        <p className="text-sm text-[#666] leading-relaxed max-w-sm">
          Thank you for applying. Our team will review your application and
          reach out within 2–3 business days with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Name + Business name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#444] mb-2">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#444] mb-2">
            Business Name
          </label>
          <input
            type="text"
            placeholder="Your business or idea name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            disabled={isLoading}
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-[#444] mb-2">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className={inputClass}
        />
      </div>

      {/* Challenge */}
      <div>
        <label className="block text-xs font-semibold text-[#444] mb-2">
          What do you need help with?
        </label>
        <textarea
          placeholder="Briefly describe the challenge or area you'd like support with..."
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          disabled={isLoading}
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error feedback */}
      {status === "error" && (
        <p className="text-xs font-medium text-red-500">{errorMsg}</p>
      )}

      <div className="flex justify-end pt-2">
        <Button
          variant="primary"
          size="md"
          onClick={handleSubmit}
          disabled={
            !name.trim() ||
            !businessName.trim() ||
            !email.trim() ||
            !challenge.trim() ||
            isLoading
          }
        >
          {isLoading ? "Submitting..." : "Apply for a Free Session"}
        </Button>
      </div>
    </div>
  );
}
