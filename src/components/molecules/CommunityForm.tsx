"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import InterestDropdown from "@/components/molecules/InterestDropdown";
import { useCommunityForm } from "@/hooks/useCommunityForm";

interface CommunityFormProps {
  onSuccess: () => void;
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="26"
        strokeDashoffset="8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-500 mt-1 ml-4 font-medium">{msg}</p>;
}

export default function CommunityForm({ onSuccess }: CommunityFormProps) {
  const t = useTranslations("GetInvolved.communityCard.form");
  const {
    name,
    setName,
    email,
    setEmail,
    selected,
    othersText,
    setOthersText,
    dropdownOpen,
    setDropdownOpen,
    dropdownRef,
    atMax,
    toggleInterest,
    handleJoin,
    status,
    errorMsg
  } = useCommunityForm(onSuccess);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const isLoading = status === "loading";
  const othersSelected = selected.includes("Others");

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = t("validation.nameRequired");
    if (!email.trim()) newErrors.email = t("validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = t("validation.emailInvalid");
    if (selected.length === 0)
      newErrors.interest = t("validation.interestRequired");
    if (othersSelected && !othersText.trim())
      newErrors.interest = t("validation.othersRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    handleJoin();
  }

  const inputBase =
    "w-full rounded-full border px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none transition-colors disabled:opacity-50";

  return (
    <div
      className="bg-[#fbfbfc] rounded-2xl p-6 flex flex-col gap-4"
      style={{ boxShadow: "0px 4px 12px 2px #ededed" }}
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-[#444444] mb-2">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            placeholder={t("namePlaceholder")}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((p) => ({ ...p, name: "" }));
            }}
            disabled={isLoading}
            className={`${inputBase} ${errors.name ? "border-red-400 focus:border-red-400" : "border-[#e5e5e5] focus:border-brand-primary"}`}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-[#444444] mb-2">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((p) => ({ ...p, email: "" }));
            }}
            disabled={isLoading}
            className={`${inputBase} ${errors.email ? "border-red-400 focus:border-red-400" : "border-[#e5e5e5] focus:border-brand-primary"}`}
          />
          <FieldError msg={errors.email} />
        </div>
      </div>

      {/* Interest Dropdown */}
      <div>
        <InterestDropdown
          selected={selected}
          othersText={othersText}
          dropdownOpen={dropdownOpen}
          dropdownRef={dropdownRef}
          atMax={atMax}
          disabled={isLoading}
          onToggle={(interest) => {
            toggleInterest(interest);
            setErrors((p) => ({ ...p, interest: "" }));
          }}
          onDropdownToggle={() => setDropdownOpen((o) => !o)}
          onOthersTextChange={(val) => {
            setOthersText(val);
            setErrors((p) => ({ ...p, interest: "" }));
          }}
        />
        <FieldError msg={errors.interest} />
      </div>

      {/* Status messages */}
      {status === "duplicate" && (
        <p className="text-xs font-medium text-yellow-600">
          {t("alreadyMember")}
        </p>
      )}
      {status === "error" && (
        <p className="text-xs font-medium text-red-500">{errorMsg}</p>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="md"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Spinner /> {t("joining")}
            </span>
          ) : (
            t("joinButton")
          )}
        </Button>
      </div>
    </div>
  );
}
