export const INTERESTS = [
  "Software Development",
  "UI/UX Design",
  "Data Science & AI",
  "Cybersecurity",
  "Product Management",
  "Digital Marketing",
  "Entrepreneurship",
  "Community Building",
  "Education & Mentorship",
  "Others"
] as const;

export const MAX_INTERESTS = 2;

export type SubmitStatus = "idle" | "loading" | "duplicate" | "error";
