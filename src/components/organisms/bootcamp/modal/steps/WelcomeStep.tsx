"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { C, GRAD, fadeUp } from "../shared";
import { X, Tag, Cta } from "../ui";
import { StepBar } from "../StepBar";
import {
  ClipboardList,
  CreditCard,
  MessageCircle,
  ShieldCheck
} from "lucide-react"; 

// Map icon keys to components
const iconMap: Record<string, React.ReactNode> = {
  form: <ClipboardList size={20} strokeWidth={1.5} />,
  payment: <CreditCard size={20} strokeWidth={1.5} />,
  receipt: <MessageCircle size={20} strokeWidth={1.5} />
};

export function WelcomeStep({
  onNext,
  onClose
}: {
  onNext: () => void;
  onClose: () => void;
}) {
  const t = useTranslations("Bootcamp.modal.welcome");
  const process = t.raw("process") as any[];

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col gap-1.5">
          <Tag>{t("tag")}</Tag>
        </div>
        <X onClose={onClose} />
      </div>
      <StepBar step="welcome" />

      <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        animate="show"
        className="mb-6"
      >
        <h2
          className="font-extrabold leading-[1.15] tracking-tight mb-2.5"
          style={{ fontSize: "clamp(1.35rem, 4vw, 1.55rem)", color: C.ink }}
        >
          {t("headline")}
          <br />
          <span
            style={{
              background: GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {t("highlight")}
          </span>
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: C.body }}>
          {t("body")}
        </p>
      </motion.div>

      <div className="space-y-2.5 mb-6">
        {process.map((p, i) => (
          <motion.div
            key={p.n}
            variants={fadeUp}
            custom={i + 1}
            initial="hidden"
            animate="show"
            className="flex items-start gap-3.5 px-4 py-3.5 rounded-2xl"
            style={{ background: C.surface, border: `1px solid ${C.border}` }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{
                background: "white",
                border: `1px solid ${C.border}`,
                boxShadow: "0 1px 6px rgba(113,40,111,0.07)",
                color: C.brand // tint the icon with brand color
              }}
            >
              {iconMap[p.iconKey] ?? p.iconKey}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-semibold text-sm leading-snug mb-0.5"
                style={{ color: C.ink }}
              >
                {p.title}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                {p.body}
              </p>
            </div>
            <span
              className="text-[10px] font-black shrink-0 pt-0.5"
              style={{ color: C.subtle }}
            >
              {p.n}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeUp}
        custom={4}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <ShieldCheck size={20} strokeWidth={1.5} style={{ color: C.brand }} />
        <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
          {t("trust")}
        </p>
      </motion.div>

      <motion.div variants={fadeUp} custom={5} initial="hidden" animate="show">
        <Cta onClick={onNext}>{t("cta")}</Cta>
        <p className="text-center text-xs mt-3" style={{ color: C.subtle }}>
          {t("footnote")}
        </p>
      </motion.div>
    </div>
  );
}
