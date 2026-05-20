// src/components/molecules/SLAWebinarModal.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { LuChevronDown } from "react-icons/lu";
import { useTranslations } from "next-intl";

interface SLAWebinarModalProps {
  onClose: () => void;
}

export default function SLAWebinarModal({ onClose }: SLAWebinarModalProps) {
  const t = useTranslations("AIBusiness.SLAWebinar.SLAWebinarModal");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const industries = [
    { key: "retail", label: t("industry.options.retail") },
    { key: "service", label: t("industry.options.service") },
    { key: "creative", label: t("industry.options.creative") },
    { key: "tech", label: t("industry.options.tech") },
    { key: "others", label: t("industry.options.others") }
  ];

  const experienceLevels = [
    { key: "beginner", label: t("experience.options.beginner") },
    { key: "intermediate", label: t("experience.options.intermediate") },
    { key: "advanced", label: t("experience.options.advanced") }
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    industry: t("industry.options.retail"),
    otherIndustry: "",
    experience: t("experience.options.beginner")
  });

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/sla-webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone, 
          industry:
            formData.industry === t("industry.options.others")
              ? formData.otherIndustry
              : formData.industry,
          experience: formData.experience
        })
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || t("errors.generic"));
      }
    } catch {
      setError(t("errors.network"));
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "", 
        industry: t("industry.options.retail"),
        otherIndustry: "",
        experience: t("experience.options.beginner")
      });
    }, 300);
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.phone.trim() !== "" && 
    (formData.industry !== t("industry.options.others") ||
      formData.otherIndustry.trim() !== "");

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-[#2D102D]/90 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md bg-white rounded-tabi-card p-8 md:p-10 shadow-2xl text-gray-900"
      >
        {submitted ? (
          <div className="flex flex-col items-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 size={36} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{t("success.title")}</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-xs">
              {t("success.message")}
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-colors"
            >
              {t("success.close")}
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold mb-1">{t("title")}</h3>
            <p className="text-sm text-gray-500 mb-8">{t("subtitle")}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label={t("firstName")}
                  placeholder={t("firstNamePlaceholder")}
                  value={formData.firstName}
                  onChange={(v) => setFormData({ ...formData, firstName: v })}
                />
                <Input
                  label={t("lastName")}
                  placeholder={t("lastNamePlaceholder")}
                  value={formData.lastName}
                  onChange={(v) => setFormData({ ...formData, lastName: v })}
                />
              </div>
              <Input
                label={t("email")}
                type="email"
                placeholder={t("emailPlaceholder")}
                value={formData.email}
                onChange={(v) => setFormData({ ...formData, email: v })}
              />

              <Input
                label={t("phone.label")}
                type="tel"
                placeholder={t("phone.placeholder")}
                value={formData.phone}
                onChange={(v) => setFormData({ ...formData, phone: v })}
              />

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#444444]">
                  {t("industry.label")}
                </label>
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between rounded-full border border-[#e5e5e5] px-5 py-3 text-sm text-left focus:outline-none focus:border-brand-primary transition-colors"
                  >
                    <span className="text-[#333]">
                      {formData.industry === t("industry.options.others") &&
                      formData.otherIndustry
                        ? formData.otherIndustry
                        : formData.industry}
                    </span>
                    <LuChevronDown
                      size={16}
                      className={`text-[#999] transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 py-1 max-h-56 overflow-y-auto">
                      {industries.map((item) => (
                        <div key={item.key}>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({
                                ...formData,
                                industry: item.label
                              });
                              if (item.key !== "others") setDropdownOpen(false);
                            }}
                            className={`w-full text-left px-5 py-3 text-sm hover:bg-gray-50 transition-colors ${
                              formData.industry === item.label
                                ? "text-brand-primary font-bold"
                                : "text-[#555]"
                            }`}
                          >
                            {item.label}
                          </button>
                          {item.key === "others" &&
                            formData.industry ===
                              t("industry.options.others") && (
                              <div className="px-5 pb-3">
                                <input
                                  type="text"
                                  autoFocus
                                  placeholder={t("industry.othersPlaceholder")}
                                  value={formData.otherIndustry}
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      otherIndustry: e.target.value
                                    })
                                  }
                                  className="w-full rounded-lg border border-[#e5e5e5] px-3 py-2 text-sm focus:border-brand-primary outline-none"
                                />
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#444444]">
                  {t("experience.label")}
                </label>
                <div className="flex gap-2">
                  {experienceLevels.map((lvl) => (
                    <button
                      key={lvl.key}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, experience: lvl.label })
                      }
                      className={`flex-1 py-2.5 rounded-full border text-[10px] font-bold transition-all ${
                        formData.experience === lvl.label
                          ? "bg-brand-primary text-white border-brand-primary"
                          : "border-gray-200 text-gray-400"
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <button
                disabled={loading || !isFormValid}
                className={`w-full py-4 rounded-full font-bold shadow-lg transition-all flex items-center justify-center gap-2
        ${
          !isFormValid || loading
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-brand-primary text-white hover:shadow-brand-primary/30"
        }`}
              >
                {loading ? <Loader2 className="animate-spin" /> : t("cta")}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

// Input component (unchanged)
function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-[#444444]">
        {label}
      </label>
      <input
        type={type}
        required
        value={value}
        placeholder={placeholder} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-[#e5e5e5] px-5 py-3 text-sm text-left focus:outline-none focus:border-brand-primary transition-colors"
      />
    </div>
  );
}