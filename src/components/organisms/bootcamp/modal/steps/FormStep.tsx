"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("Bootcamp.modal.form");
  const [f, setF] = useState<FormData>(BLANK);
  const [e, setE] = useState<Partial<Record<keyof FormData, string>>>({});
  const [st, setSt] = useState<ApiStatus>("idle");
  const [apiErr, setApiErr] = useState("");

  // Stable submission ID to prevent duplicate sheet writes on retry
  const [submissionId] = useState(
    () =>
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
    if (!f.firstName.trim()) n.firstName = t("validation.firstName");
    if (!f.lastName.trim()) n.lastName = t("validation.lastName");
    if (!f.email.trim()) n.email = t("validation.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()))
      n.email = t("validation.emailInvalid");
    if (!f.phone.trim()) n.phone = t("validation.phone");
    if (!f.location.trim()) n.location = t("validation.location");
    if (!f.experienceLevel) n.experienceLevel = t("validation.experienceLevel");
    if (!f.languages.length) n.languages = t("validation.languages");
    if (!f.whyJoin.trim()) n.whyJoin = t("validation.whyJoin");
    if (!f.canCommit) n.canCommit = t("validation.canCommit");
    if (!f.acceptsFee) n.acceptsFee = t("validation.acceptsFee");
    if (!f.acceptsRequirement)
      n.acceptsRequirement = t("validation.acceptsRequirement");
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
          submissionId
        })
      });
      const json = await res.json();
      if (json.success) {
        onSuccess(f);
      } else {
        setSt("error");
        setApiErr(json.error ?? t("apiError.generic"));
        setTimeout(() => setSt("idle"), 5000);
      }
    } catch {
      setSt("error");
      setApiErr(t("apiError.connection"));
      setTimeout(() => setSt("idle"), 5000);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <Back onClick={onBack} label={t("backLabel")} />
        <X onClose={onClose} />
      </div>
      <StepBar step="form" />
      <div className="mb-6">
        <h2
          className="font-extrabold tracking-tight mb-1.5"
          style={{ fontSize: "1.25rem", color: C.ink }}
        >
          {t("title")}
        </h2>
        <p className="text-sm" style={{ color: C.muted }}>
          {t("subtitle")}
        </p>
      </div>

      <div className="space-y-4">
        <Group>
          <SectionHead>{t("sections.details")}</SectionHead>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>{t("fields.firstName")}</FieldLabel>
              <input
                placeholder={t("placeholders.firstName")}
                value={f.firstName}
                type="text"
                onChange={(ev) => set("firstName", ev.target.value)}
                className={icls(e.firstName)}
              />
              <Err msg={e.firstName} />
            </div>
            <div>
              <FieldLabel>{t("fields.lastName")}</FieldLabel>
              <input
                placeholder={t("placeholders.lastName")}
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
              <FieldLabel>{t("fields.email")}</FieldLabel>
              <input
                placeholder={t("placeholders.email")}
                value={f.email}
                type="email"
                onChange={(ev) => set("email", ev.target.value)}
                className={icls(e.email)}
              />
              <Err msg={e.email} />
            </div>
            <div>
              <FieldLabel>{t("fields.phone")}</FieldLabel>
              <input
                placeholder={t("placeholders.phone")}
                value={f.phone}
                type="tel"
                onChange={(ev) => set("phone", ev.target.value)}
                className={icls(e.phone)}
              />
              <Err msg={e.phone} />
            </div>
          </div>
          <div>
            <FieldLabel>{t("fields.location")}</FieldLabel>
            <input
              placeholder={t("placeholders.location")}
              value={f.location}
              type="text"
              onChange={(ev) => set("location", ev.target.value)}
              className={icls(e.location)}
            />
            <Err msg={e.location} />
          </div>
        </Group>

        <Group>
          <SectionHead>{t("sections.codingBackground")}</SectionHead>
          <div>
            <FieldLabel>{t("fields.experienceLevel")}</FieldLabel>
            <div className="space-y-2 mt-1">
              {LEVELS.map((lv) => {
                const on = f.experienceLevel === lv.id;
                const levelKey = `experienceLevels.${lv.id}` as const;
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
                        {t(`${levelKey}.title`)}
                      </p>
                      <p className="text-xs" style={{ color: C.subtle }}>
                        {t(`${levelKey}.hint`)}
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
            <FieldLabel>{t("fields.languages")}</FieldLabel>
            <p className="text-xs mb-3" style={{ color: C.subtle }}>
              {t("languagesHint")}
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
            <FieldLabel optional>{t("fields.portfolio")}</FieldLabel>
            <input
              placeholder={t("placeholders.portfolio")}
              value={f.portfolio}
              type="url"
              onChange={(ev) => set("portfolio", ev.target.value)}
              className={icls()}
            />
          </div>
        </Group>

        <Group>
          <SectionHead>{t("sections.moreAboutYou")}</SectionHead>
          <div>
            <FieldLabel>{t("fields.whyJoin")}</FieldLabel>
            <p className="text-xs mb-2" style={{ color: C.subtle }}>
              {t("whyJoinHint")}
            </p>
            <textarea
              rows={4}
              placeholder={t("placeholders.whyJoin")}
              value={f.whyJoin}
              onChange={(ev) => set("whyJoin", ev.target.value)}
              className={tcls(e.whyJoin)}
            />
            <Err msg={e.whyJoin} />
          </div>
          <div>
            <FieldLabel>{t("fields.canCommit")}</FieldLabel>
            <p className="text-xs mb-2.5" style={{ color: C.subtle }}>
              {t("canCommitHint")}
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
                    {t(`canCommitOptions.${v}`)}
                  </motion.button>
                );
              })}
            </div>
            <Err msg={e.canCommit} />
          </div>
        </Group>

        <div className="space-y-3.5 px-0.5">
          <SectionHead>{t("sections.confirmations")}</SectionHead>
          <Check
            checked={f.acceptsFee}
            onChange={() => set("acceptsFee", !f.acceptsFee)}
            error={e.acceptsFee}
          >
            {t("confirmations.acceptsFee")}
          </Check>
          <Check
            checked={f.acceptsRequirement}
            onChange={() => set("acceptsRequirement", !f.acceptsRequirement)}
            error={e.acceptsRequirement}
          >
            {t("confirmations.acceptsRequirement")}
          </Check>
        </div>

        {st === "error" && (
          <p className="text-xs text-center" style={{ color: C.error }}>
            {apiErr}
          </p>
        )}

        <div className="pt-1">
          <Cta onClick={submit} loading={st === "loading"}>
            {t("cta")}
          </Cta>
          <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
            {t("footnote")}
          </p>
        </div>
      </div>
    </div>
  );
}
