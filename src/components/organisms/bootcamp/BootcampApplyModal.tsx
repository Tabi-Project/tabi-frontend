"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WelcomeStep } from "./modal/steps/WelcomeStep";
import { FormStep } from "./modal/steps/FormStep";
import { PaymentStep } from "./modal/steps/PaymentStep";
import { ConfirmationStep } from "./modal/steps/ConfirmationStep";
import { SuccessStep } from "./modal/steps/SuccessStep";
import { STEPS, BLANK, genRef, slide, slideTx } from "./modal/shared";
import type { Step, FormData } from "./modal/shared";

interface Props {
  onClose: () => void;
}

export default function BootcampApplyModal({ onClose }: Props) {
  const [step, setStep] = useState<Step>("welcome");
  const [dir, setDir] = useState<1 | -1>(1);
  const [data, setData] = useState<FormData>(BLANK);
  const [ref] = useState(genRef);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const fn = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const go = useCallback(
    (next: Step) => {
      setDir(STEPS.indexOf(next) > STEPS.indexOf(step) ? 1 : -1);
      setStep(next);
    },
    [step]
  );

  return (
    <AnimatePresence>
      <motion.div
        key="bd"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
        style={{
          background: "rgba(16,6,16,0.55)",
          backdropFilter: "blur(10px)"
        }}
        onClick={(ev) => {
          if (ev.target === ev.currentTarget) onClose();
        }}
      >
        <motion.div
          key="card"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 32 }}
          className="relative w-full bg-white sm:rounded-3xl rounded-t-3xl overflow-hidden"
          style={{
            maxWidth: "480px",
            maxHeight: "93vh",
            boxShadow:
              "0 32px 80px rgba(113,40,111,0.18), 0 0 0 1px rgba(113,40,111,0.07)"
          }}
        >
          <div
            className="h-0.75 w-full shrink-0"
            style={{
              background: "linear-gradient(90deg, #71286F, #c040a0, #71286F)"
            }}
          />
          <div className="flex justify-center pt-3 sm:hidden">
            <div
              className="w-9 h-1 rounded-full"
              style={{ background: "#ede5ed" }}
            />
          </div>
          <div
            className="overflow-y-auto"
            style={{ maxHeight: "calc(93vh - 3px)" }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="show"
                exit="exit"
                transition={slideTx}
                className="px-6 pt-5 pb-8 sm:px-7 sm:pt-6"
              >
                {step === "welcome" && (
                  <WelcomeStep onNext={() => go("form")} onClose={onClose} />
                )}
                {step === "form" && (
                  <FormStep
                    onBack={() => go("welcome")}
                    onSuccess={(d) => {
                      setData(d);
                      go("payment");
                    }}
                    onClose={onClose}
                  />
                )}
                {step === "payment" && (
                  <PaymentStep
                    onBack={() => go("form")}
                    onNext={() => go("confirmation")}
                    onClose={onClose}
                    refId={ref}
                  />
                )}
                {step === "confirmation" && (
                  <ConfirmationStep
                    onNext={() => go("success")}
                    onClose={onClose}
                    refId={ref}
                    firstName={data.firstName}
                  />
                )}
                {step === "success" && (
                  <SuccessStep
                    onClose={onClose}
                    firstName={data.firstName}
                    refId={ref}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}