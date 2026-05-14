"use client";
import { motion } from "framer-motion";
import { C, WA_NUMBER, SUPPORT_EMAIL } from "../shared";
import { StepBar } from "../StepBar";
import { X } from "../ui/X";
import { SectionHead } from "../ui/SectionHead";
import { SubCta } from "../ui";
// import { X, SubCta, SectionHead, StepBar } from "../ui";

interface ConfirmStepProps {
  onNext: () => void;
  onClose: () => void;
  refId: string;
  firstName: string;
  lastName?: string; 
}

export function ConfirmationStep({
  onNext,
  onClose,
  refId,
  firstName,
  lastName
}: ConfirmStepProps) {
  const fullName =
    [firstName, lastName].filter(Boolean).join(" ").trim() || "there";
  const waMsg = encodeURIComponent(
    `Hi! I've completed my registration for the Tabi JS Bootcamp (Cohort 1).\n\nName: ${fullName}\nReference ID: ${refId}\n\nAttaching my payment receipt now.`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;
  const mailSub = encodeURIComponent(`Bootcamp Payment — ${refId}`);
  const mailBdy = encodeURIComponent(
    `Hi Tabi Team,\n\nI've completed my registration for Cohort 1.\n\nName: ${fullName}\nReference: ${refId}\n\nPayment receipt is attached.\n\nThank you!`
  );
  const mailUrl = `mailto:${SUPPORT_EMAIL}?subject=${mailSub}&body=${mailBdy}`;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div />
        <X onClose={onClose} />
      </div>
      <StepBar step="confirmation" />
      <div className="mb-7">
        <h2
          className="font-extrabold tracking-tight mb-1.5"
          style={{ fontSize: "1.25rem", color: C.ink }}
        >
          One last step
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: C.body }}>
          Send us your payment receipt so we can verify it and officially
          confirm your place. It takes less than a minute.
        </p>
      </div>

      <div
        className="rounded-2xl p-5 mb-5"
        style={{ background: C.surface, border: `1px solid ${C.border}` }}
      >
        <SectionHead>What to send us</SectionHead>
        <div className="space-y-3">
          {[
            { icon: "👤", text: `Your full name — ${fullName}` },
            { icon: "🔖", text: `Your reference ID — ${refId}` },
            { icon: "📸", text: "A screenshot of your payment confirmation" }
          ].map((it, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-base shrink-0">{it.icon}</span>
              <p className="text-sm" style={{ color: C.body }}>
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-3"
      >
        <motion.div
          whileHover={{
            scale: 1.012,
            boxShadow: "0 8px 28px rgba(37,211,102,0.3)"
          }}
          whileTap={{ scale: 0.988 }}
          className="w-full py-[14px] rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2.5 cursor-pointer"
          style={{
            background: "#25D366",
            boxShadow: "0 4px 18px rgba(37,211,102,0.22)"
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.137.563 4.14 1.534 5.875L0 24l6.292-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.673-.502-5.21-1.378l-.374-.217-3.737.895.944-3.641-.244-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Send via WhatsApp
        </motion.div>
      </motion.a>

      <SubCta href={mailUrl}>
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
          <rect
            x="1"
            y="3"
            width="12"
            height="8"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M1 4l6 4 6-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        Send via email instead
      </SubCta>

      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px" style={{ background: C.border }} />
        <span className="text-[11px]" style={{ color: C.subtle }}>
          already sent?
        </span>
        <div className="flex-1 h-px" style={{ background: C.border }} />
      </div>

      <motion.button
        onClick={onNext}
        whileHover={{ color: C.brand }}
        className="w-full py-3 rounded-xl text-sm font-medium transition-colors duration-150 cursor-pointer"
        style={{ color: C.muted }}
      >
        I've sent my receipt ✓
      </motion.button>
    </div>
  );
}
