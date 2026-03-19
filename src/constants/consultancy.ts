import { FocusArea, ProcessStep, FAQItem } from "@/types/consultancy";

export const TOTAL_SLOTS = 5;

export const SLOTS_REMAINING = 5; // update this dynamically via CMS later

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 1,
    title: "Business Strategy",
    description:
      "Clarify your vision, define your market positioning, and build a roadmap that turns your idea into a sustainable business."
  },
  {
    id: 2,
    title: "Technology & Digital Tools",
    description:
      "Identify the right tech stack, tools, and platforms to run your business efficiently and scale with confidence."
  },
  {
    id: 3,
    title: "Marketing & Brand Growth",
    description:
      "Craft a compelling brand story, develop a content strategy, and reach the customers who need what you offer."
  },
  {
    id: 4,
    title: "Financial Planning",
    description:
      "Understand your numbers, structure your pricing, and build financial habits that keep your business healthy."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Apply",
    description:
      "Fill out the short application form below. Tell us about your business and the challenge you'd like support with."
  },
  {
    number: "02",
    title: "Get Selected",
    description:
      "Our team reviews your application and matches you with the right consultant based on your needs and industry."
  },
  {
    number: "03",
    title: "Business Solution Session",
    description:
      "You'll receive a confirmation and a booking link to schedule your free one-on-one consultancy session."
  }
];

export const WHO_ITS_FOR = [
  "Women-led businesses at any stage",
  "Small and medium enterprises (SMEs) looking to grow",
  "Entrepreneurs navigating their first year in business",
  "Business owners looking to integrate technology into their operations",
  "Founders who need strategic clarity and direction"
];

export const FAQS: FAQItem[] = [
  {
    question: "How long is each consultancy session?",
    answer:
      "Each session is 60 minutes, conducted virtually via Google Meet or Zoom at a time that works for you."
  },
  {
    question: "Is this really free?",
    answer:
      "Yes, completely free. TEE Foundation offers 5 slots each month at no cost as part of our commitment to supporting businesses in Africa."
  },
  {
    question: "How are the 5 slots allocated?",
    answer:
      "Slots are allocated on a first-come, first-served basis each month. Once all 5 slots are filled, applications are held for consideration the following month."
  },
  {
    question: "Can I apply more than once?",
    answer:
      "You may apply once per month. If slots are full, your application will be considered in the next available cycle."
  },
  {
    question: "What happens after the session?",
    answer:
      "You'll receive a brief follow-up summary from your consultant with key takeaways and recommended next steps."
  }
];