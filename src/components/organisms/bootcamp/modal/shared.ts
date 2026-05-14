// No "use client" needed – pure data

// TYPES (move to a separate types.ts if you prefer, but keeping in shared is fine)
export type Step = "welcome" | "form" | "payment" | "confirmation" | "success";
export type Dir = 1 | -1;
export type ApiStatus = "idle" | "loading" | "error";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  experienceLevel: string;
  languages: string[];
  portfolio: string;
  whyJoin: string;
  canCommit: "yes" | "no" | "";
  acceptsFee: boolean;
  acceptsRequirement: boolean;
}

export const BLANK: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  location: "",
  experienceLevel: "",
  languages: [],
  portfolio: "",
  whyJoin: "",
  canCommit: "",
  acceptsFee: false,
  acceptsRequirement: false
};

export const STEPS: Step[] = [
  "welcome",
  "form",
  "payment",
  "confirmation",
  "success"
];

export const STEP_META: Record<Step, { label: string; short: string }> = {
  welcome: { label: "Welcome", short: "Hi!" },
  form: { label: "Application", short: "Apply" },
  payment: { label: "Reserve Spot", short: "Pay" },
  confirmation: { label: "Confirmation", short: "Confirm" },
  success: { label: "All Done", short: "Done" }
};

export const LEVELS = [
  { id: "beginner", title: "Beginner", hint: "Less than 6 months" },
  { id: "intermediate", title: "Intermediate", hint: "6 months – 2 years" },
  { id: "experienced", title: "Experienced", hint: "2+ years of coding" }
];

export const LANGUAGES = [
  "JavaScript",
  "Python",
  "PHP",
  "Java",
  "C / C++",
  "Ruby",
  "Go",
  "TypeScript",
  "Rust",
  "Other"
];

export const WA_NUMBER = "2347056033371";
export const SUPPORT_EMAIL = "hello@tabiproject.com";

export function genRef(): string {
  return `TABI-JS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
}

export const C = {
  brand: "#71286F",
  brandMid: "#9a2e92",
  brandLt: "#c040a0",
  surface: "#fdf8fe",
  border: "#ede5ed",
  muted: "#a888a8",
  subtle: "#d4c0d4",
  ink: "#1c0f1c",
  body: "#6a4a6a",
  error: "#d95555"
} as const;

export const GRAD = `linear-gradient(135deg, ${C.brand} 0%, ${C.brandLt} 100%)`;

export const slide = {
  enter: (d: Dir) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
  show: { x: 0, opacity: 1 },
  exit: (d: Dir) => ({ x: d > 0 ? -60 : 60, opacity: 0 })
};
export const slideTx = { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const };

export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export const BASE_INPUT =
  "w-full border text-sm focus:outline-none transition-all duration-200 bg-white rounded-xl px-4 py-[11px]";
export const BASE_TA =
  "w-full border text-sm focus:outline-none transition-all duration-200 bg-white resize-none rounded-2xl px-4 py-3";

export function icls(e?: string) {
  const ring = e
    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-50"
    : `border-[${C.border}] focus:border-[${C.brand}] focus:ring-2 focus:ring-[rgba(113,40,111,0.07)]`;
  return `${BASE_INPUT} ${ring} placeholder-[#cbb8cb]`;
}

export function tcls(e?: string) {
  const ring = e
    ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-50"
    : `border-[${C.border}] focus:border-[${C.brand}] focus:ring-2 focus:ring-[rgba(113,40,111,0.07)]`;
  return `${BASE_TA} ${ring} placeholder-[#cbb8cb]`;
}
