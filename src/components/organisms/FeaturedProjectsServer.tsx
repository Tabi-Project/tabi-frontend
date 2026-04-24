import { getAllProjects, getTestimonialByOrder } from "@/lib/cms";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";

export default function FeaturedProjectsServer() {
  const projects = getAllProjects() ?? [];

  // Attach a testimonial to each project that has `hasTestimonial: true`
  const projectsWithTestimonials = projects.map((project) => ({
    ...project,
    testimonial: project.hasTestimonial
      ? getTestimonialByOrder(project.order)
      : undefined
  }));

  return (
    <FeaturedProjects
      projects={projectsWithTestimonials}
    />
  );
}