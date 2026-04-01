import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const trimmed =
    typeof requested === "string" ? requested.trim() : "";
  const candidate = trimmed.length > 0 ? trimmed : undefined;
  const locale =
    candidate !== undefined && hasLocale(routing.locales, candidate)
      ? candidate
      : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: "Europe/Istanbul"
  };
});
