import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(routing.locales, requestedLocale)
    ? requestedLocale
    : routing.defaultLocale;
  const messages =
    locale === "ka"
      ? (await import("../../messages/ka.json")).default
      : (await import("../../messages/en.json")).default;

  return { locale, messages };
});
