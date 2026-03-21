import { getFeaturedTestimonial } from "@/lib/cms";
import TestimonialStrip from "@/components/molecules/TestimonialStrip";

export default function TestimonialStripServer() {
  const testimonial = getFeaturedTestimonial();
  return <TestimonialStrip testimonial={testimonial} />;
}
