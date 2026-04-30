import { getTranslations } from "next-intl/server";
import { getAllTeamMembers } from "@/lib/cms";
import TeamGrid from "@/components/organisms/TeamGrid";

export default async function TheTeam({ locale }: { locale: string }) {
  const t = await getTranslations("About.TheTeam");
  const members = getAllTeamMembers(locale);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-350 px-6 sm:px-12 lg:px-20 py-20 lg:py-28">
        <div className="mb-12">
          <span
            className="inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-brand-primary"
            style={{ background: "#F3E8FF" }}
          >
            {t("badge")}
          </span>
        </div>
        <TeamGrid members={members} />
      </div>
    </section>
  );
}
