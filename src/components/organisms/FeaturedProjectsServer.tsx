import { getAllProjects, getTestimonialByOrder } from "@/lib/cms";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";

interface FeaturedProjectsServerProps {
  locale: string;
}

export default function FeaturedProjectsServer({
  locale
}: FeaturedProjectsServerProps) {
  const projects = getAllProjects(locale) ?? [];

  // Attach a matching testimonial to each project that has `hasTestimonial: true`
  const projectsWithTestimonials = projects.map((project) => ({
    ...project,
    testimonial: project.hasTestimonial
      ? getTestimonialByOrder(project.order, locale)
      : undefined
  }));

  return <FeaturedProjects projects={projectsWithTestimonials} />;
}
