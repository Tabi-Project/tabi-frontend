"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BLANK, LEVELS, LANGUAGES, C, icls, tcls } from "../shared";
import type { FormData, ApiStatus } from "../shared";

import {
  Back,
  X,
  Err,
  FieldLabel,
  SectionHead,
  Cta,
  Check,
  Group
} from "../ui";
import { StepBar } from "../StepBar";

interface FormStepProps {
  onBack: () => void;
  onSuccess: (d: FormData) => void;
  onClose: () => void;
}

export function FormStep({ onBack, onSuccess, onClose }: FormStepProps) {
  const [f, setF] = useState<FormData>(BLANK);
  const [e, setE] = useState<Partial<Record<keyof FormData, string>>>({});
  const [st, setSt] = useState<ApiStatus>("idle");
  const [apiErr, setApiErr] = useState("");

  // Stable submission ID to prevent duplicate sheet writes on retry
const [submissionId] = useState(() =>
  crypto.randomUUID?.() ??
  `${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`
);

  const set = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setF((p) => ({ ...p, [k]: v }));
    setE((p) => ({ ...p, [k]: "" }));
  };
  const toggleLang = (l: string) =>
    set(
      "languages",
      f.languages.includes(l)
        ? f.languages.filter((x) => x !== l)
        : [...f.languages, l]
    );

  function validate() {
    const n: typeof e = {};
    if (!f.firstName.trim()) n.firstName = "We'd love to know your first name";
    if (!f.lastName.trim()) n.lastName = "And your last name?";
    if (!f.email.trim()) n.email = "We'll need your email to reach you";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
      n.email = "That doesn't look quite right";
    if (!f.phone.trim()) n.phone = "A phone number helps us stay in touch";
    if (!f.location.trim()) n.location = "Where are you based?";
    if (!f.experienceLevel)
      n.experienceLevel = "Pick the level that feels most honest";
    if (!f.languages.length)
      n.languages = "Select at least one you've worked with";
    if (!f.whyJoin.trim())
      n.whyJoin = "We'd love to hear your story — even a sentence or two";
    if (!f.canCommit) n.canCommit = "Let us know about your availability";
    if (!f.acceptsFee)
      n.acceptsFee = "Just so we're on the same page about the fee";
    if (!f.acceptsRequirement)
      n.acceptsRequirement = "Please confirm your coding background";
    setE(n);
    return Object.keys(n).length === 0;
  }

  async function submit() {
    if (!validate()) return;
    setSt("loading");
    setApiErr("");
    try {
      const res = await fetch("/api/bootcamp-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...f,
          firstName: f.firstName.trim(),
          lastName: f.lastName.trim(),
          email: f.email.trim(),
          phone: f.phone.trim(),
          location: f.location.trim(),
          portfolio: f.portfolio.trim(),
          whyJoin: f.whyJoin.trim(),
          languages: f.languages.join(", "),
          submissionId,  
        })
      });
      const json = await res.json();
      if (json.success) {
        onSuccess(f);
      } else {
        setSt("error");
        setApiErr(
          json.error ?? "Something didn't go through — please try again."
        );
        setTimeout(() => setSt("idle"), 5000);
      }
    } catch {
      setSt("error");
      setApiErr(
        "A connection error occurred. Please check your internet and try again."
      );
      setTimeout(() => setSt("idle"), 5000);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Back onClick={onBack} label="Overview" />
        <X onClose={onClose} />
      </div>
      <StepBar step="form" />
      <div className="mb-6">
        <h2
          className="font-extrabold tracking-tight mb-1.5"
          style={{ fontSize: "1.25rem", color: C.ink }}
        >
          Tell us about yourself
        </h2>
        <p className="text-sm" style={{ color: C.muted }}>
          Our team reads every application personally. Just be genuine.
        </p>
      </div>

      <div className="space-y-4">
        <Group>
          <SectionHead>Your details</SectionHead>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>First name</FieldLabel>
              <input
                placeholder="Ada"
                value={f.firstName}
                type="text"
                onChange={(ev) => set("firstName", ev.target.value)}
                className={icls(e.firstName)}
              />
              <Err msg={e.firstName} />
            </div>
            <div>
              <FieldLabel>Last name</FieldLabel>
              <input
                placeholder="Okafor"
                value={f.lastName}
                type="text"
                onChange={(ev) => set("lastName", ev.target.value)}
                className={icls(e.lastName)}
              />
              <Err msg={e.lastName} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>Email address</FieldLabel>
              <input
                placeholder="ada@gmail.com"
                value={f.email}
                type="email"
                onChange={(ev) => set("email", ev.target.value)}
                className={icls(e.email)}
              />
              <Err msg={e.email} />
            </div>
            <div>
              <FieldLabel>Phone number</FieldLabel>
              <input
                placeholder="+234 801…"
                value={f.phone}
                type="tel"
                onChange={(ev) => set("phone", ev.target.value)}
                className={icls(e.phone)}
              />
              <Err msg={e.phone} />
            </div>
          </div>
          <div>
            <FieldLabel>Where are you based?</FieldLabel>
            <input
              placeholder="Lagos, Nigeria"
              value={f.location}
              type="text"
              onChange={(ev) => set("location", ev.target.value)}
              className={icls(e.location)}
            />
            <Err msg={e.location} />
          </div>
        </Group>

        <Group>
          <SectionHead>Your coding background</SectionHead>
          <div>
            <FieldLabel>How would you describe your experience?</FieldLabel>
            <div className="space-y-2 mt-1">
              {LEVELS.map((lv) => {
                const on = f.experienceLevel === lv.id;
                return (
                  <motion.button
                    key={lv.id}
                    type="button"
                    onClick={() => set("experienceLevel", lv.id)}
                    whileHover={{ x: on ? 0 : 2 }}
                    className="w-full text-left px-4 py-3 rounded-xl border flex items-center justify-between transition-all duration-150"
                    style={{
                      background: on ? `rgba(113,40,111,0.07)` : "white",
                      borderColor: on ? C.brand : C.border
                    }}
                  >
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: on ? C.brand : C.ink }}
                      >
                        {lv.title}
                      </p>
                      <p className="text-xs" style={{ color: C.subtle }}>
                        {lv.hint}
                      </p>
                    </div>
                    <AnimatePresence>
                      {on && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: C.brand }}
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                          >
                            <path
                              d="M1.5 4l2 2 3-3"
                              stroke="white"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
            <Err msg={e.experienceLevel} />
          </div>

          <div>
            <FieldLabel>Languages you've worked with</FieldLabel>
            <p className="text-xs mb-3" style={{ color: C.subtle }}>
              Select everything that applies — no need to be an expert.
            </p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((l) => {
                const on = f.languages.includes(l);
                return (
                  <motion.button
                    key={l}
                    type="button"
                    onClick={() => toggleLang(l)}
                    whileTap={{ scale: 0.93 }}
                    className="px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-150"
                    style={{
                      background: on ? C.brand : "white",
                      color: on ? "white" : C.body,
                      borderColor: on ? C.brand : C.border
                    }}
                  >
                    {l}
                  </motion.button>
                );
              })}
            </div>
            <Err msg={e.languages} />
          </div>

          <div>
            <FieldLabel optional>GitHub or Portfolio</FieldLabel>
            <input
              placeholder="https://github.com/…"
              value={f.portfolio}
              type="url"
              onChange={(ev) => set("portfolio", ev.target.value)}
              className={icls()}
            />
          </div>
        </Group>

        <Group>
          <SectionHead>A little more about you</SectionHead>
          <div>
            <FieldLabel>Why do you want to join this programme?</FieldLabel>
            <p className="text-xs mb-2" style={{ color: C.subtle }}>
              Be genuine — we value real motivation over polished answers.
            </p>
            <textarea
              rows={4}
              placeholder="Tell us what you're hoping to build, change, or achieve…"
              value={f.whyJoin}
              onChange={(ev) => set("whyJoin", ev.target.value)}
              className={tcls(e.whyJoin)}
            />
            <Err msg={e.whyJoin} />
          </div>
          <div>
            <FieldLabel>
              Can you join Mon · Wed · Fri sessions (June 11 – July 4)?
            </FieldLabel>
            <p className="text-xs mb-2.5" style={{ color: C.subtle }}>
              Each session is 2.5 hrs · Google Meet · Live instruction.
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {(["yes", "no"] as const).map((v) => {
                const on = f.canCommit === v;
                return (
                  <motion.button
                    key={v}
                    type="button"
                    onClick={() => set("canCommit", v)}
                    whileTap={{ scale: 0.96 }}
                    className="py-3 rounded-xl border text-sm font-semibold transition-all duration-150"
                    style={{
                      background: on
                        ? v === "yes"
                          ? `rgba(113,40,111,0.08)`
                          : "rgba(220,68,68,0.06)"
                        : "white",
                      color: on ? (v === "yes" ? C.brand : "#dc4444") : C.body,
                      borderColor: on
                        ? v === "yes"
                          ? C.brand
                          : "#f08080"
                        : C.border
                    }}
                  >
                    {v === "yes" ? "Yes, I'm in" : "No, I can't"}
                  </motion.button>
                );
              })}
            </div>
            <Err msg={e.canCommit} />
          </div>
        </Group>

        <div className="space-y-3.5 px-0.5">
          <SectionHead>Two quick confirmations</SectionHead>
          <Check
            checked={f.acceptsFee}
            onChange={() => set("acceptsFee", !f.acceptsFee)}
            error={e.acceptsFee}
          >
            I'm aware of the ₦5,000 registration fee that follows this form.
          </Check>
          <Check
            checked={f.acceptsRequirement}
            onChange={() => set("acceptsRequirement", !f.acceptsRequirement)}
            error={e.acceptsRequirement}
          >
            I have prior coding experience and understand this is an intensive,
            fast-paced programme.
          </Check>
        </div>

        {st === "error" && (
          <p className="text-xs text-center" style={{ color: C.error }}>
            {apiErr}
          </p>
        )}

        <div className="pt-1">
          <Cta onClick={submit} loading={st === "loading"}>
            Save & continue →
          </Cta>
          <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
            Your details are saved before you move to payment
          </p>
        </div>
      </div>
    </div>
  );
}
