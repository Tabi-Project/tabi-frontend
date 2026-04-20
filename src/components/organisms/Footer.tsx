"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaTiktok
} from "react-icons/fa6";
import { FOOTER_LINKS } from "@/constants/footer";

type Status = "idle" | "loading" | "success" | "duplicate" | "error";

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <circle
        cx="7"
        cy="7"
        r="5"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="22"
        strokeDashoffset="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const currentYear = new Date().getFullYear();

  function validate(): boolean {
    if (!email.trim()) {
      setEmailError(t("validation.emailRequired"));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError(t("validation.emailInvalid"));
      return false;
    }
    setEmailError("");
    return true;
  }

  async function handleSubscribe() {
    if (!validate()) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "footer" })
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setEmail("");
        setEmailError("");
      } else if (json.error === "Already subscribed") {
        setStatus("duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  }

  const feedbackMessage: Partial<
    Record<Status, { text: string; color: string }>
  > = {
    success: { text: t("feedback.success"), color: "text-green-600" },
    duplicate: { text: t("feedback.duplicate"), color: "text-yellow-600" },
    error: { text: t("feedback.error"), color: "text-red-500" }
  };

  const feedback = feedbackMessage[status];
  const isLoading = status === "loading";

  const SOCIAL_LINKS = [
    {
      icon: FaLinkedinIn,
      label: t("social.linkedin"),
      href: "https://www.linkedin.com/company/tabi-academy/"
    },
    {
      icon: FaXTwitter,
      label: t("social.x"),
      href: "https://x.com/tabi_academy"
    },
    {
      icon: FaFacebookF,
      label: t("social.facebook"),
      href: "https://www.facebook.com/share/1FCmY31GJe/"
    },
    {
      icon: FaInstagram,
      label: t("social.instagram"),
      href: "https://www.instagram.com/tabi_academy?igsh=MTE4b24yMGJ6d29peA=="
    },
    { icon: FaTiktok, label: t("social.tiktok"), href: "#" }
  ];

  const NAV_COLUMNS = [
    { heading: t("columns.foundation"), links: FOOTER_LINKS.foundation },
    { heading: t("columns.projects"), links: FOOTER_LINKS.projects },
    { heading: t("columns.legal"), links: FOOTER_LINKS.legal }
  ];

  return (
    <footer className="w-full bg-white text-black">
      <div className="mx-auto max-w-350 px-6 sm:px-10 lg:px-16 pt-16 pb-12 flex flex-col lg:flex-row justify-between gap-12">
        {/* Left – brand + subscribe */}
        <div className="shrink-0 max-w-xs">
          <p className="text-2xl font-semibold text-black leading-snug tracking-tight">
            {t("brandLine1")}
          </p>
          <p className="text-2xl font-semibold text-black leading-snug tracking-tight">
            <span className="font-bold italic text-brand-primary">
              {t("brandLine2")}
            </span>{" "}
            {t("brandLine3")}
          </p>

          <a
            href="mailto:hello@tabiproject.com"
            className="inline-flex items-center gap-2 mt-4 mb-2 text-sm text-[#555] hover:text-brand-primary transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <rect
                x="1"
                y="3"
                width="14"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M1 5l7 5 7-5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            hello@tabiproject.com
          </a>

          <div
            className={`mt-8 flex items-center bg-white border rounded-full overflow-hidden pl-4 pr-1 py-1 gap-2 transition-all duration-300 ${
              emailError
                ? "border-red-400 ring-2 ring-red-100"
                : "border-gray-300 focus-within:border-brand-primary/50 focus-within:ring-4 focus-within:ring-brand-primary/5"
            }`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder={t("emailPlaceholder")}
              disabled={isLoading}
              className="flex-1 min-w-0 bg-transparent text-sm text-[#1a1a2e] placeholder:text-gray-400 outline-none disabled:opacity-50"
            />
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={isLoading}
              className="shrink-0 bg-brand-primary hover:bg-brand-secondary transition-colors text-white text-sm font-semibold rounded-full px-5 py-2.5 cursor-pointer shadow-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Spinner /> {t("subscribing")}
                </>
              ) : (
                t("subscribeButton")
              )}
            </button>
          </div>

          {emailError && (
            <p className="mt-2 text-xs font-medium text-red-500">
              {emailError}
            </p>
          )}

          {feedback && !emailError && (
            <p className={`mt-2 text-xs font-medium ${feedback.color}`}>
              {feedback.text}
            </p>
          )}
        </div>

        {/* Right – nav columns */}
        <div className="flex gap-16 flex-wrap">
          {NAV_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="min-w-30">
              <h4 className="text-sm font-semibold text-black mb-6 tracking-wide">
                {heading}
              </h4>
              <ul className="space-y-4">
                {links.map(({ labelKey, href }) => (
                  <li key={labelKey}>
                    <Link
                      href={href}
                      className="text-sm text-black/70 hover:text-brand-primary transition-colors"
                    >
                      {t(labelKey as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-350 px-20">
        <hr className="border-white/10" />
      </div>

      <div className="mx-auto max-w-350 px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="shrink-0">
          <Image
            src="/Footer-logo.svg"
            alt="TEE Foundation"
            width={100}
            height={50}
            className="object-contain"
            style={{ width: "auto", height: "50px" }}
          />
        </div>
        <p className="text-xs text-black text-center">
          {t("copyright", { year: currentYear })}
        </p>
        <div className="flex items-center gap-4 shrink-0">
          {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-black hover:text-brand-primary transition-colors"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
