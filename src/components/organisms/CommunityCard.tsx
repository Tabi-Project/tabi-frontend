import CommunityForm from "@/components/molecules/CommunityForm";

interface CommunityCardProps {
  onSuccess: () => void;
}

export default function CommunityCard({ onSuccess }: CommunityCardProps) {
  return (
    <div
      className="relative rounded-3xl p-10"
      style={{ background: "#F5EFE8", overflow: "visible" }}
    >
      <div
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle, #8B6340 1px, transparent 1px)",
          backgroundSize: "12px 12px"
        }}
      />

      <div className="relative z-10">
        <h3 className="text-4xl font-extrabold text-[#121212] leading-tight mb-2">
          Join our Community
        </h3>
        <p className="text-base text-[#444] leading-relaxed mb-8">
          Join us to stay updated on our latest initiatives, events, and
          opportunities.
        </p>

        <CommunityForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}
