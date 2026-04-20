import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["en", "fr"] as const;
export const defaultLocale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return { locale, messages, timeZone: "Europe/London" };
  } catch {
    notFound();
  }
});

export type Messages = typeof import("../messages/en.json");
