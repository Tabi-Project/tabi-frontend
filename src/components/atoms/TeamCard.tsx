import Image from "next/image";
import { CMSTeamMember } from "@/lib/cms";

interface TeamCardProps {
  member: CMSTeamMember;
  onClick: () => void;
}

export default function TeamCard({ member, onClick }: TeamCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center text-center w-full cursor-pointer"
    >
      <div
        className="relative rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "clamp(160px, 42vw, 282px)",
          height: "clamp(160px, 42vw, 282px)",
          background: member.bgColor ?? "#f0f0f0"
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 480px) 160px, (max-width: 816px) 42vw, 282px"
        />
      </div>
      <p className="text-2xl font-bold text-[#121212] leading-snug mb-1 group-hover:text-brand-primary transition-colors duration-200">
        {member.name}
      </p>
      <p className="text-base font-normal leading-loose tracking-normal uppercase text-[#444444]">
        {member.role}
      </p>
    </button>
  );
}
