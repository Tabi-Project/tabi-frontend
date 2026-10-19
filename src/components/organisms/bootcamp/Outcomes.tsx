"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Bot, CreditCard, FolderOpen, Rocket, Route } from "lucide-react";
import { useTranslations } from "next-intl";
import BootcampApplyModal from "@/components/organisms/bootcamp/BootcampApplyModal";
import { Button } from "@/components/atoms/Button";
import { GradientText } from "@/components/atoms/GradientText";
import { Reveal, Stagger, StaggerItem } from "@/components/atoms/Reveal";
import { Sparkle } from "@/components/atoms/Sparkle";
import SectionHeading from "@/components/molecules/SectionHeading";

const ICONS = [Rocket, Bot, CreditCard, FolderOpen, Route, Award];

const IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  "https://images.unsplash.com/photo-1596843720750-7de9329da5d7?w=600",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
  "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&q=80",
  "https://images.unsplash.com/photo-1638636241638-aef5120c5153?q=80&w=870"
];

export default function Outcomes() {
  const t = useTranslations("Bootcamp.outcomes");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;
  const [modalOpen, setModalOpen] = useState(false);
  const reduced = useReducedMotion();
  const bandRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="w-full overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20">
        <div className="mb-14 grid items-end gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow={t("badge")}
            title={
              <>
                {t("heading")} <GradientText>{t("highlight")}</GradientText>
              </>
            }
          />
          <Reveal delay={0.12}>
            <p className="text-base leading-[1.8] text-tabi-body">{t("description")}</p>
          </Reveal>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={item.title} className="h-full" hoverLift={6}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] bg-tabi-card/70 p-3 transition-shadow duration-500 hover:shadow-[0_24px_50px_-30px_rgba(113,40,111,0.55)]">
                  <div className="relative h-44 overflow-hidden rounded-[1.35rem] border-[3px] border-brand-primary">
                    <Image
                      src={IMAGES[i % IMAGES.length]}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/70 to-brand-primary/10" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-primary shadow-md transition-transform duration-500 group-hover:rotate-[-10deg] group-hover:scale-110">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <span className="absolute bottom-3 right-4 text-4xl font-bold text-white/40">0{i + 1}</span>
                  </div>
                  <div className="px-4 pb-4 pt-5">
                    <h3 className="text-lg font-bold leading-snug text-tabi-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-tabi-body">{item.desc}</p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Closing band with a parallax photo behind */}
        <div ref={bandRef} className="relative mt-12 overflow-hidden rounded-[2.5rem]">
          <motion.div className="absolute inset-[-15%_0]" style={reduced ? undefined : { y: bgY }}>
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/95 via-brand-primary/85 to-brand-magenta/75" />
          <Sparkle className="absolute left-[8%] top-8" size={30} />
          <Reveal className="relative px-6 py-16 text-center sm:py-20">
            <p className="mx-auto max-w-3xl text-[clamp(1.9rem,4vw,3rem)] font-bold leading-tight text-white">
              {t("closingTitle")} <span className="text-tabi-tan">{t("closingHighlight")}</span>
            </p>
            <p className="mx-auto mt-4 max-w-md text-base text-white/75">{t("closingDesc")}</p>
            <Button variant="white" size="lg" className="mt-8" onClick={() => setModalOpen(true)}>
              {t("ctaButton")}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </div>

      {modalOpen && <BootcampApplyModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
