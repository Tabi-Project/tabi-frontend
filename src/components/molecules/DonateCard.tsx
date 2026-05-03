"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";

interface DonateCardProps {
  onDonateClick: () => void;
}

export default function DonateCard({ onDonateClick }: DonateCardProps) {
  const t = useTranslations("GetInvolved.donateCard");

  return (
    <div
      className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between h-full"
      style={{ background: "#F5F5F5" }}
    >
      <div
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #71286F 1px, transparent 1px)",
          backgroundSize: "12px 12px"
        }}
      />

      <div className="relative z-10">
        <h3 className="text-4xl font-bold text-[#121212] leading-tight mb-4">
          {t("title")}
        </h3>
        <p className="text-base text-[#444444] leading-relaxed max-w-xs mb-8">
          {t("description")}
        </p>
        <Button variant="primary" size="md" onClick={onDonateClick}>
          {t("button")}
        </Button>
      </div>

      <div className="absolute bottom-0 right-0 h-48 w-40 sm:w-52 sm:h-64 pointer-events-none">
        <Image
          src={withBasePath("/donate-jar.png")}
          alt="Donation jar"
          fill
          className="object-contain object-bottom"
          loading="lazy"
          quality={75}
        />
      </div>
    </div>
  );
}
