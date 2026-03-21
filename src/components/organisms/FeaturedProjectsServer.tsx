import { getAllProjects } from "@/lib/cms";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";

export default function FeaturedProjectsServer() {
  // Safe fallback — returns [] if content/projects folder is empty or missing
  const projects = getAllProjects() ?? [];
  return <FeaturedProjects projects={projects} />;
}
