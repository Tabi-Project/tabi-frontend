import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/request";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed"
});

export const config = {
  // matcher: ["/", "/(fr|en)/:path*"]
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
