import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { withBasePath } from "@/constants/paths";

interface DonateCardProps {
  onDonateClick: () => void;
}

export default function DonateCard({ onDonateClick }: DonateCardProps) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-90"
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
          Make a<br />
          Lasting Impact
        </h3>
        <p className="text-base text-[#444444] leading-relaxed max-w-xs mb-8">
          Your donation supports young minds in their pursuit of technology,
          providing crucial tools and support for their success.
        </p>
        <Button variant="primary" size="md" onClick={onDonateClick}>
          Donate Now
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
