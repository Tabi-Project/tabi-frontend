import { getAllProjects, getFeaturedTestimonial } from "@/lib/cms";
import FeaturedProjects from "@/components/organisms/FeaturedProjects";
import TestimonialStrip from "@/components/molecules/TestimonialStrip";

export default function FeaturedProjectsServer() {
  const projects = getAllProjects() ?? [];
  const testimonial = getFeaturedTestimonial();

  return (
    <FeaturedProjects
      projects={projects}
      testimonialSlot={<TestimonialStrip testimonial={testimonial} />}
    />
  );
}
