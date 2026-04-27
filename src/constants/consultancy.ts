// src/constants/consultancy.ts
import { FocusArea, ProcessStep, FAQItem } from "@/types/consultancy";

export const TOTAL_SLOTS = 5;

export const SLOTS_REMAINING = 5; // update this dynamically via CMS later

export const APPLICATION_DEADLINE = "Monday, 23rd March 2026";

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 1,
    title: "Marketing",
    description:
      "Build a brand that gets noticed. We'll help you craft a strategy that attracts the right customers and keeps them coming back."
  },
  {
    id: 2,
    title: "Finance",
    description:
      "Get your numbers working for you. From pricing to profit margins — we'll help you build financial habits that sustain growth."
  },
  {
    id: 3,
    title: "Tech",
    description:
      "Leverage the right tools and platforms to run your business more efficiently and confidently in the digital age."
  },
  {
    id: 4,
    title: "Strategy",
    description:
      "Gain clarity on where you're going and how to get there. We'll help you build a focused roadmap for sustainable growth."
  },
  {
    id: 5,
    title: "Sales",
    description:
      "Turn conversations into conversions. We'll help you develop a sales approach that feels natural and delivers real results."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Apply",
    description:
      "Fill out the short application form. Tell us about your business and the challenge you need support with."
  },
  {
    number: "02",
    title: "Get Selected",
    description:
      "Our team reviews all applications and selects 5 women-led businesses that will benefit most from a session."
  },
  {
    number: "03",
    title: "Business Solution Session",
    description:
      "Selected applicants get a dedicated one-on-one session with an expert consultant tailored to their specific needs."
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
    question: "Is this really free?",
    answer:
      "Yes — completely free. TEE Foundation offers 5 slots each month at no cost as part of our commitment to supporting women-led businesses in Africa."
  },
  {
    question: "How long is each consultancy session?",
    answer:
      "Each session is 60 minutes, conducted virtually via Google Meet or Zoom at a time that works for you."
  },
  {
    question: "How are the 5 slots allocated?",
    answer:
      "Slots are allocated on a first-come, first-served basis each month. Applications close on the stated deadline and selections are made shortly after."
  },
  {
    question: "Can I apply more than once?",
    answer:
      "You may apply once per month. If you are not selected, your application will be considered in the next available cycle."
  },
  {
    question: "What happens after the session?",
    answer:
      "You'll receive a brief follow-up summary from your consultant with key takeaways and recommended next steps to keep your momentum going."
  },
  {
    question: "Do T&Cs apply?",
    answer:
      "Yes. By applying you agree to Tabi's terms and conditions for the free consultancy programme. Please reach out via DM if you have any questions before applying."
  }
];