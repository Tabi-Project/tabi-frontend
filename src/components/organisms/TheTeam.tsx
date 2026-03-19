import { getAllTeamMembers } from "@/lib/cms";
import TeamGrid from "@/components/organisms/TeamGrid";

export default function TheTeam() {
  const members = getAllTeamMembers();

  return (
    <>
      <section className="w-full bg-white">
        <div className="flex mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
          <div className="mb-12">
            <span
              className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary"
              style={{ background: "#F3E8FF" }}
            >
              The Team
            </span>
          </div>

          {/* Client boundary — TeamGrid handles interactivity */}
          <TeamGrid members={members} />
        </div>
      </section>
    </>
  );
}
