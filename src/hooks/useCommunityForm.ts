"use client";

import { useState, useRef, useEffect } from "react";
import { MAX_INTERESTS, SubmitStatus } from "@/constants/community";

export function useCommunityForm(onSuccess: () => void) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [othersText, setOthersText] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function toggleInterest(item: string) {
    setSelected((prev) => {
      if (prev.includes(item)) {
        if (item === "Others") setOthersText("");
        return prev.filter((i) => i !== item);
      }
      if (prev.length >= MAX_INTERESTS) return prev;
      return [...prev, item];
    });
  }

  function buildInterestString() {
    return selected
      .map((i) => (i === "Others" && othersText.trim() ? othersText.trim() : i))
      .join(", ");
  }

  function reset() {
    setName("");
    setEmail("");
    setSelected([]);
    setOthersText("");
    setStatus("idle");
    setErrorMsg("");
  }

  async function handleJoin() {
    if (!name.trim() || !email.trim() || selected.length === 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          interest: buildInterestString()
        })
      });

      const json = await res.json();

      if (json.success) {
        onSuccess();
        reset();
      } else if (json.error === "Already joined") {
        setStatus("duplicate");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return {
    // field values
    name,
    setName,
    email,
    setEmail,
    selected,
    othersText,
    setOthersText,
    // dropdown
    dropdownOpen,
    setDropdownOpen,
    dropdownRef,
    // derived
    atMax: selected.length >= MAX_INTERESTS,
    // actions
    toggleInterest,
    handleJoin,
    // status
    status,
    errorMsg
  };
}
