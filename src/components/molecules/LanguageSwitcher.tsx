"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useState, useTransition } from "react";
import Flag from "react-world-flags";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // The router from next-intl handles the locale prefix automatically
      router.replace({ pathname }, { locale: newLocale });
      setIsOpen(false);
    });
  };

  const languages = [
    { code: "en", label: "English", countryCode: "GB" },
    { code: "fr", label: "Français", countryCode: "FR" }
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm hover:bg-gray-50 transition-all duration-200 shadow-sm"
        aria-label="Select language"
        disabled={isPending}
      >
        <Flag
          code={currentLanguage?.countryCode || "GB"}
          height="16"
          width="20"
          className="rounded-sm object-cover"
          alt="" // ✅ decorative image
        />
        <span className="text-sm font-medium text-gray-700">
          {locale === "en" ? "EN" : "FR"}
        </span>
        <svg
          className={`w-3 h-3 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-purple-50 transition-colors ${
                  locale === lang.code ? "bg-purple-50/50" : ""
                }`}
                disabled={isPending}
              >
                <Flag
                  code={lang.countryCode}
                  height="18"
                  width="24"
                  className="rounded-sm object-cover"
                  alt="" // ✅ decorative image
                />
                <span
                  className={`text-sm font-medium ${
                    locale === lang.code
                      ? "text-brand-primary"
                      : "text-gray-700"
                  }`}
                >
                  {lang.label}
                </span>
                {locale === lang.code && (
                  <span className="ml-auto text-brand-primary">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}