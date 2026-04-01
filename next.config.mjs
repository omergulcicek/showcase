import nextra from "nextra";
import createNextIntlPlugin from "next-intl/plugin";

/** Keep in sync with `i18n` below (Nextra `getPageMap` / runtime). */
const NEXTRA_I18N = {
  locales: ["en", "tr"],
  defaultLocale: "en",
};

const withNextIntl = createNextIntlPlugin();
const withNextra = nextra({});

export default withNextIntl(
  withNextra({
    i18n: {
      locales: NEXTRA_I18N.locales,
      defaultLocale: NEXTRA_I18N.defaultLocale,
    },
    env: {
      NEXTRA_DEFAULT_LOCALE: NEXTRA_I18N.defaultLocale,
      NEXTRA_LOCALES: JSON.stringify(NEXTRA_I18N.locales),
    },
    trailingSlash: true,
    output: "standalone",
    transpilePackages: ["nextra", "next-intl"],
    turbopack: {
      resolveAlias: {
        "next-mdx-import-source-file": "./mdx-components.js",
      },
    },
  }),
);
