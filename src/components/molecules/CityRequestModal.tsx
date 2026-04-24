"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";

interface CityRequestModalProps {
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function CityRequestModal({ onClose }: CityRequestModalProps) {
  const t = useTranslations("TWN.cityRequestModal");
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
    city: ""
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return t("errors.nameRequired");
    if (!form.email.trim()) return t("errors.emailRequired");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return t("errors.emailInvalid");
    if (!form.mobile.trim()) return t("errors.mobileRequired");
    if (!form.city.trim()) return t("errors.cityRequired");
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/city-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setTimeout(() => onClose(), 2000);
      } else {
        setStatus("error");
        setErrorMsg(json.error || t("errors.generic"));
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setErrorMsg(t("errors.network"));
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-primary transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-[#2D102D] mb-2">{t("title")}</h2>
        <p className="text-gray-500 text-sm mb-6">{t("subtitle")}</p>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold">{t("successTitle")}</h3>
            <p className="text-gray-500 mt-2">{t("successMessage", { city: form.city })}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{t("labels.name")}</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{t("labels.email")}</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{t("labels.mobile")}</label>
              <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{t("labels.linkedin")}</label>
              <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} className={inputClass} placeholder="https://linkedin.com/in/..." />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{t("labels.city")}</label>
              <input type="text" name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder={t("labels.cityPlaceholder")} required />
            </div>
            {errorMsg && <p className="text-red-500 text-xs">{errorMsg}</p>}
            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" size="md" onClick={onClose} className="flex-1">
                {t("cancel")}
              </Button>
              <Button type="submit" variant="primary" size="md" disabled={status === "loading"} className="flex-1">
                {status === "loading" ? t("sending") : t("submit")}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}