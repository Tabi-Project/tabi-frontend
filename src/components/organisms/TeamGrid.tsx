"use client";

import { useState } from "react";
import { CMSTeamMember } from "@/lib/cms";
import TeamCard from "@/components/atoms/TeamCard";
import BiographyModal from "@/components/molecules/BiographyModal";

interface TeamGridProps {
  members: CMSTeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  const [selected, setSelected] = useState<CMSTeamMember | null>(null);
  const totalRows = Math.ceil(members.length / 3);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 flex-1">
        {members.map((member, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          return (
            <div
              key={member.slug}
              className="flex flex-col items-center pt-2 pb-12 px-6"
              style={{
                borderRight: col !== 2 ? "1px solid #E5E7EB" : "none",
                borderBottom: row < totalRows - 1 ? "1px solid #E5E7EB" : "none"
              }}
            >
              <TeamCard member={member} onClick={() => setSelected(member)} />
            </div>
          );
        })}
      </div>

      {selected && (
        <BiographyModal member={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
