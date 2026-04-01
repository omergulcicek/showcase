import { NEXTRA_I18N } from "./nextra-i18n.shared.mjs";

/**
 * Nextra reads `process.env.NEXTRA_*` from server bundles. Turbopack production
 * builds may not inline these into `node_modules/nextra` the same way webpack
 * DefinePlugin does, so Vercel can end up with undefined env at runtime and
 * throw during `getPageMap` / MDX load. Ensure defaults before any route code runs.
 */
export async function register() {
  if (process.env.NEXTRA_DEFAULT_LOCALE == null || process.env.NEXTRA_DEFAULT_LOCALE === "") {
    process.env.NEXTRA_DEFAULT_LOCALE = NEXTRA_I18N.defaultLocale;
  }
  if (process.env.NEXTRA_LOCALES == null || process.env.NEXTRA_LOCALES === "") {
    process.env.NEXTRA_LOCALES = JSON.stringify(NEXTRA_I18N.locales);
  }
}
