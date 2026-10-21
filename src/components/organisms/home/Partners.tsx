"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { withBasePath } from "@/constants/paths";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const PARTNERSHIP_EMAIL = "hello@tabiproject.com";

type Partner = {
  id: "yip" | "gutsy" | "yebox" | "genesys" | "risevest" | "cchub" | "sailscast";
  src: string;
  /** Intrinsic file size in px. */
  size: [number, number];
  /** The artwork inside the file as [x, y, width, height] px — the padding around it is cropped away. */
  crop: [number, number, number, number];
  /** Optical correction on top of the area-based size (airy marks read small, heavy ones large). */
  scale?: number;
  className?: string;
};

// Lifts an off-white file background to pure white so it melts into the tile
const WHITEN = "brightness-103 contrast-104";

const PARTNERS: Partner[] = [
  { id: "yip", src: "/partners/yip.png", size: [1000, 544], crop: [158, 55, 759, 396], scale: 1.2, className: WHITEN },
  { id: "gutsy", src: "/partners/gutsy-woman.png", size: [448, 643], crop: [44, 12, 390, 612], scale: 0.88 },
  { id: "yebox", src: "/partners/yebox.png", size: [704, 704], crop: [15, 237, 635, 227] },
  { id: "genesys", src: "/partners/genesys.png", size: [1184, 400], crop: [190, 93, 882, 217] },
  { id: "risevest", src: "/partners/rise.png", size: [299, 168], crop: [63, 56, 173, 56], scale: 0.82 },
  { id: "cchub", src: "/partners/cchub.jpeg", size: [1600, 535], crop: [0, 0, 1600, 535], scale: 1.05, className: WHITEN },
  { id: "sailscast", src: "/partners/sailscast-full-rm.png", size: [542, 195], crop: [44, 52, 451, 85] }
];

// Rounded so server and client serialise identical strings (avoids hydration mismatch)
const round = (n: number) => Math.round(n * 100) / 100;
const pct = (n: number) => `${round(n * 100)}%`;

const TILE = "aspect-[3/2] rounded-[1.75rem] lg:aspect-[8/5]";

/**
 * Crops a logo to its artwork and sizes it by area (width ∝ √aspect), so a wide
 * wordmark and a tall emblem carry the same visual weight.
 */
function PartnerLogo({ partner, alt }: { partner: Partner; alt: string }) {
  const [fileW, fileH] = partner.size;
  const [x, y, w, h] = partner.crop;

  return (
    <div
      className="relative overflow-hidden transition-transform duration-500 ease-tabi group-hover:scale-105"
      style={{
        width: `min(80%, calc(var(--logo-scale) * ${round(Math.sqrt(w / h) * (partner.scale ?? 1))}))`,
        aspectRatio: `${w} / ${h}`
      }}
    >
      <Image
        src={withBasePath(partner.src)}
        alt={alt}
        width={fileW}
        height={fileH}
        sizes="256px"
        className={`absolute max-w-none ${partner.className ?? ""}`}
        style={{ width: pct(fileW / w), height: "auto", left: pct(-x / w), top: pct(-y / h) }}
      />
    </div>
  );
}

export default function Partners() {
  const t = useTranslations("Partners");
  const mailto = `mailto:${PARTNERSHIP_EMAIL}?subject=${encodeURIComponent(t("cta.subject"))}`;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <Reveal y={40} scale={0.98}>
          <div className="relative overflow-hidden rounded-tabi-card bg-tabi-blush px-5 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_at_top_right,#000,transparent_55%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-brand-orchid/15 blur-[110px]"
            />
            <Sparkle className="absolute bottom-4 right-16 hidden sm:block lg:bottom-5" size={26} />
            <Sparkle className="absolute bottom-10 right-8 hidden sm:block lg:bottom-12" size={12} delay={1.4} />

            {/* ── Header ── */}
            <div className="relative flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between xl:gap-16">
              <SectionHeading
                eyebrow={t("eyebrow")}
                eyebrowTone="white"
                size="md"
                className="max-w-xl"
                title={t.rich("title", {
                  highlight: (chunks) => <GradientText>{chunks}</GradientText>
                })}
              />
              <Reveal delay={0.15} className="max-w-md">
                <p className="text-base leading-[1.75] text-tabi-body">{t("description")}</p>
              </Reveal>
            </div>

            {/* ── Logo wall ── */}
            <Stagger
              as="ul"
              stagger={0.06}
              className="relative mt-10 grid grid-cols-2 gap-3 [--logo-scale:34%] sm:gap-4 lg:mt-14 lg:grid-cols-4 lg:[--logo-scale:29%]"
            >
              {PARTNERS.map((partner) => (
                <StaggerItem key={partner.id} as="li" hoverLift={6}>
                  <div
                    className={`group flex items-center justify-center bg-white shadow-[0_1px_2px_rgba(113,40,111,0.05)] ring-1 ring-brand-plum/8 transition-shadow duration-500 ease-tabi hover:shadow-[0_24px_48px_-24px_rgba(113,40,111,0.4)] hover:ring-brand-plum/15 ${TILE}`}
                  >
                    <PartnerLogo partner={partner} alt={t(`logos.${partner.id}`)} />
                  </div>
                </StaggerItem>
              ))}

              <StaggerItem as="li" hoverLift={6}>
                <a
                  href={mailto}
                  className={`group relative flex flex-col justify-between overflow-hidden bg-gradient-brand p-4 text-white shadow-[0_24px_48px_-28px_rgba(113,40,111,0.7)] sm:p-5 xl:p-6 ${TILE}`}
                >
                  <Sparkle className="absolute right-4 top-4" size={20} delay={0.6} />
                  {/* Only where the tile is roomy: 2-up on tablets, 4-up from xl */}
                  <span className="relative hidden pr-8 text-sm font-medium leading-snug text-white/75 sm:block lg:hidden xl:block">
                    {t("cta.label")}
                  </span>
                  <span className="relative mt-auto flex items-end justify-between gap-2">
                    <span className="text-[15px] font-bold leading-tight sm:text-lg lg:text-base xl:text-xl">
                      {t("cta.title")}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-brand-primary transition-transform duration-500 ease-tabi group-hover:rotate-45 sm:h-10 sm:w-10">
                      <ArrowUpRight size={18} />
                    </span>
                  </span>
                </a>
              </StaggerItem>
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
