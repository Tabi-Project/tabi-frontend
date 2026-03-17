import { withBasePath } from "@/constants/paths";

export type EventMode = "In-Person" | "Online" | "Hybrid";
export type EventCategory = "BootCamp" | "Webinar" | "Workshop" | "Conference";

export type Event = {
  id: number;
  slug: string;
  title: string;
  category: EventCategory;
  mode: EventMode;
  location: string;
  address?: string;
  date: string;
  month: string; // e.g. "JUL"
  day: string; // e.g. "28"
  time: string;
  timezone: string;
  image: string;
  featured?: boolean;
  ctaLabel?: "Register" | "More Info";
  eventUrl?: string;
  description?: string;
  tags?: string[];
};

export const EVENTS: Event[] = [
  {
    id: 1,
    slug: "tech-law-fusion-bootcamp",
    title:
      "Foundational Bootcamp to Equip Law Students in Technology Law Club and ADR UNN with Relevant Tech Skills",
    category: "BootCamp",
    mode: "In-Person",
    location: "Enugu, Nigeria",
    address:
      "UNEC New Science Auditorium, No 24, Kenyatta Street, along Shoprite Road, Enugu, Nigeria.",
    date: "July 10, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm WAT",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    featured: true,
    ctaLabel: "Register",
    eventUrl: "https://tabi.academy/events/tech-law-fusion-bootcamp",
    tags: ["In-Person", "Students", "Bootcamp", "UNN", "Tech Law"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology. This symposium aims to provide law students with insights into how technological advancements are transforming the legal landscape and to equip them with the knowledge and skills needed to thrive in this evolving field."
  },
  {
    id: 2,
    slug: "tech-law-fusion-2",
    title: "Tech Law Fusion",
    category: "BootCamp",
    mode: "In-Person",
    location: "Enugu, Nigeria",
    date: "July 28, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    ctaLabel: "Register",
    eventUrl: "https://tabi.academy/events/tech-law-fusion-2",
    tags: ["In-Person", "Students", "Bootcamp"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology."
  },
  {
    id: 3,
    slug: "tech-law-fusion-3",
    title: "Tech Law Fusion",
    category: "BootCamp",
    mode: "In-Person",
    location: "Enugu, Nigeria",
    date: "July 28, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    ctaLabel: "More Info",
    tags: ["In-Person", "Bootcamp"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology."
  },
  {
    id: 4,
    slug: "tech-law-fusion-4",
    title: "Tech Law Fusion",
    category: "BootCamp",
    mode: "In-Person",
    location: "Enugu, Nigeria",
    date: "July 28, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    ctaLabel: "More Info",
    eventUrl: "https://tabi.academy/events/tech-law-fusion-4",
    tags: ["In-Person", "Bootcamp", "UNN"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology."
  },
  {
    id: 5,
    slug: "tech-law-fusion-5",
    title: "Tech Law Fusion",
    category: "BootCamp",
    mode: "In-Person",
    location: "Enugu, Nigeria",
    date: "July 28, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    ctaLabel: "More Info",
    tags: ["In-Person", "Workshop"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology."
  },
  {
    id: 6,
    slug: "tech-law-fusion-6",
    title: "Tech Law Fusion",
    category: "BootCamp",
    mode: "Online",
    location: "Enugu, Nigeria",
    date: "July 28, 2024",
    month: "JUL",
    day: "28",
    time: "8:00 am - 12:00 pm",
    timezone: "WAT +1",
    image: withBasePath("/events/tech-law-fusion.png"),
    ctaLabel: "More Info",
    eventUrl: "https://tabi.academy/events/tech-law-fusion-6",
    tags: ["Online", "Bootcamp", "Tech Law"],
    description:
      "Join us for an enlightening day dedicated to exploring the intersection of law and technology."
  }
];

export const FEATURED_EVENTS = EVENTS.filter((e) => e.featured);
export const ALL_EVENTS = EVENTS.filter((e) => !e.featured);
