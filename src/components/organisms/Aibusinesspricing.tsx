"use client";

import { useState } from "react";
import { Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import PaymentMethodModal from "@/components/molecules/PaymentMethodModal";

export default function AIBusinessPricing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="mb-4 inline-flex items-center rounded-full border border-brand-primary/30 bg-brand-surface px-4 py-1.5 text-xs font-semibold text-brand-primary tracking-wide uppercase">
            Investment & Access
          </span>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-tight text-[#1a1a2e] max-w-2xl leading-tight">
            50% Off Limited Time Offer
          </h2>
          <p className="mt-4 max-w-xl text-base text-[#666]">
            We’ve discounted the standard tuition by 50% for this cohort to
            support more African women in tech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-surface border border-brand-primary/20 rounded-[3rem] p-8 md:p-16 shadow-xl shadow-brand-primary/5 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Pricing Details */}
            <div>
              <p className="text-[#888] font-bold uppercase tracking-widest text-xs mb-2">
                Tuition Fee
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <h3 className="text-6xl font-black text-[#1a1a2e]">₦50,000</h3>
                <span className="text-xl text-[#aaa] line-through font-medium">
                  ₦100,000
                </span>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Full Course Access",
                  "Professional Certification",
                  "Lifetime Alumni Community"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#555] font-medium"
                  >
                    <CheckCircle2 size={16} className="text-green-600" /> {item}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-brand-primary text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-brand-primary/20"
              >
                Proceed to Payment <ArrowRight size={18} />
              </button>
            </div>

            {/* Right: Support Note */}
            <div className="bg-white/50 border border-brand-primary/10 rounded-3xl p-8">
              <Globe className="text-brand-primary mb-4" size={28} />
              <h4 className="font-bold text-[#1a1a2e] mb-2">Not in Nigeria?</h4>
              <p className="text-sm text-[#666] leading-relaxed mb-6">
                We provide tailored payment links for international students to
                ensure a seamless enrollment process.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="text-brand-primary font-bold text-sm hover:underline"
              >
                View International Options →
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && <PaymentMethodModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
