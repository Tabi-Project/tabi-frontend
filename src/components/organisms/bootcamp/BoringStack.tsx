"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

/* ── Tech Logo SVGs ─────────────────────────────────────────────── */
function VueLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.87}
      viewBox="0 0 261.76 226.69"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.688L261.742.001z"
        fill="#41b883"
      />
      <path
        d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.525 136.01L209.4.001z"
        fill="#34495e"
      />
    </svg>
  );
}

function TailwindLogo({ size = 36 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <Image
        src="/tailwind.svg" // or withBasePath("/tailwind.svg")
        alt="Tailwind CSS"
        fill
        className="object-contain"
      />
    </div>
  );
}

function InertiaLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#9553E9" />
      <path d="M10 11h6l6 5-6 5h-6l6-5z" fill="white" />
    </svg>
  );
}

function SailsLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2 L38 38 L2 38 Z" fill="#71286F" />
      <path d="M20 2 L38 38 L20 30 Z" fill="#c040a0" opacity="0.8" />
      <line
        x1="20"
        y1="2"
        x2="20"
        y2="38"
        stroke="white"
        strokeWidth="1.5"
        opacity="0.3"
      />
    </svg>
  );
}

export default function BoringStack() {
  const t = useTranslations("Bootcamp.boringStack");
  const items = t.raw("items") as Array<{ role: string; desc: string }>;

  const STACK = [
    { Logo: VueLogo, name: "Vue.js", version: "v3", color: "#2F8F5B", tint: "bg-tabi-mint" },
    { Logo: SailsLogo, name: "Sails.js", version: "v1", color: "#71286F", tint: "bg-tabi-pink" },
    { Logo: InertiaLogo, name: "Inertia.js", version: "v2", color: "#7A3FC4", tint: "bg-tabi-lilac/60" },
    { Logo: TailwindLogo, name: "Tailwind CSS", version: "v4", color: "#1E8DB8", tint: "bg-[#EAF6FC]" }
  ];

  return (
    <section className="w-full overflow-hidden bg-tabi-blush py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <SectionHeading
            eyebrow={t("badge")}
            eyebrowTone="white"
            title={
              <>
                {t("heading")} <GradientText>{t("headingHighlight")}</GradientText>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="text-base leading-[1.8] text-tabi-body">
              {t.rich("description", { strong: (chunks) => <strong className="text-tabi-ink">{chunks}</strong> })}
            </p>
          </Reveal>
        </div>

        <Stagger className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {STACK.map((tech, i) => {
            const trans = items[i];
            return (
              <StaggerItem key={tech.name} className="h-full" hoverLift={8}>
                <article className={`group relative h-full overflow-hidden rounded-[1.75rem] p-7 transition-shadow duration-500 hover:shadow-[0_24px_50px_-28px_rgba(113,40,111,0.5)] ${tech.tint}`}>
                  <span className="absolute right-5 top-5 rounded-full bg-white px-2.5 py-0.5 text-xs font-medium" style={{ color: tech.color }}>
                    {tech.version}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                    <tech.Logo size={28} />
                  </span>
                  <p className="mt-8 text-xs font-medium" style={{ color: tech.color }}>
                    {trans?.role}
                  </p>
                  <p className="mt-1 text-xl font-bold text-tabi-ink">{tech.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-tabi-body">{trans?.desc}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Bottom band — logos ride an orbit around the headline stat */}
        <Reveal scale={0.97} y={30}>
          <div className="relative flex flex-col items-center justify-between gap-10 overflow-hidden rounded-[2.5rem] bg-tabi-night p-8 text-white sm:p-12 md:flex-row">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_0%_0%,rgba(208,96,176,0.35)_0%,transparent_60%)]" />
            <div className="relative">
              <p className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none">{t("bottomStatLine1")}</p>
              <p className="text-[clamp(2.6rem,6vw,4.5rem)] font-bold leading-none">
                <span className="bg-gradient-to-r from-[#F9C8EE] via-[#F3A6D9] to-tabi-tan bg-clip-text text-transparent">
                  {t("bottomStatLine2")}
                </span>
              </p>
              <p className="mt-5 max-w-xs text-base leading-relaxed text-white/70">{t("bottomStatDesc")}</p>
            </div>

            <div className="relative h-56 w-56 shrink-0">
              <div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-white/20" />
              <div aria-hidden className="absolute inset-10 rounded-full border border-white/10" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[VueLogo, SailsLogo, InertiaLogo, TailwindLogo].map((Logo, i) => {
                  const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
                  return (
                    <motion.span
                      key={i}
                      className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
                      style={{ left: `${(50 + 50 * Math.cos(angle)).toFixed(2)}%`, top: `${(50 + 50 * Math.sin(angle)).toFixed(2)}%` }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    >
                      <Logo size={28} />
                    </motion.span>
                  );
                })}
              </motion.div>
              <Sparkle className="absolute inset-0 m-auto" size={44} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
