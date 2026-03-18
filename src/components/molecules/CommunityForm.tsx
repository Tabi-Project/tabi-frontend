"use client";

import { Button } from "@/components/atoms/Button";
import InterestDropdown from "@/components/molecules/InterestDropdown";
import { useCommunityForm } from "@/hooks/useCommunityForm";

interface CommunityFormProps {
  onSuccess: () => void;
}

export default function CommunityForm({ onSuccess }: CommunityFormProps) {
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

  const isLoading = status === "loading";
  const othersSelected = selected.includes("Others");

  return (
    <div
      className="bg-[#fbfbfc] rounded-2xl p-6 flex flex-col gap-4"
      style={{ boxShadow: "0px 4px 12px 2px #ededed" }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#444444] mb-2">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#444444] mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="abcd@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full rounded-full border border-[#e5e5e5] px-4 py-2.5 text-sm placeholder-[#bbb] focus:outline-none focus:border-brand-primary transition-colors disabled:opacity-50"
          />
        </div>
      </div>

      <InterestDropdown
        selected={selected}
        othersText={othersText}
        dropdownOpen={dropdownOpen}
        dropdownRef={dropdownRef}
        atMax={atMax}
        disabled={isLoading}
        onToggle={toggleInterest}
        onDropdownToggle={() => setDropdownOpen((o) => !o)}
        onOthersTextChange={setOthersText}
      />

      {status === "duplicate" && (
        <p className="text-xs font-medium text-yellow-600">
          You&apos;re already in the community.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs font-medium text-red-500">{errorMsg}</p>
      )}

      <div className="flex justify-end">
        <Button
          variant="outline"
          size="md"
          onClick={handleJoin}
          disabled={
            !name.trim() ||
            !email.trim() ||
            selected.length === 0 ||
            (othersSelected && !othersText.trim()) ||
            isLoading
          }
        >
          {isLoading ? "Joining..." : "Join Now"}
        </Button>
      </div>
    </div>
  );
}
