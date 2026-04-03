import nextra from "nextra";
import createNextIntlPlugin from "next-intl/plugin";

import { NEXTRA_I18N } from "./nextra-i18n.shared.mjs";

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
    // Ensure Nextra server chunks inline NEXTRA_* (fixes `getPageMap` / MDX 500 on Vercel).
    webpack(config, { webpack: webpackApi }) {
      const localesJson = JSON.stringify(NEXTRA_I18N.locales);
      config.plugins.push(
        new webpackApi.DefinePlugin({
          "process.env.NEXTRA_DEFAULT_LOCALE": JSON.stringify(
            NEXTRA_I18N.defaultLocale,
          ),
          "process.env.NEXTRA_LOCALES": JSON.stringify(localesJson),
        }),
      );
      return config;
    },
    trailingSlash: true,
    async redirects() {
      return [
        { source: "/en/labs", destination: "/en/roadmap", permanent: true },
        { source: "/en/labs/", destination: "/en/roadmap/", permanent: true },
        { source: "/tr/labs", destination: "/tr/roadmap", permanent: true },
        { source: "/tr/labs/", destination: "/tr/roadmap/", permanent: true },
        { source: "/en/support", destination: "/en/community", permanent: true },
        {
          source: "/en/support/",
          destination: "/en/community/",
          permanent: true,
        },
        { source: "/tr/support", destination: "/tr/community", permanent: true },
        {
          source: "/tr/support/",
          destination: "/tr/community/",
          permanent: true,
        },
      ];
    },
    output: "standalone",
    transpilePackages: ["nextra", "next-intl"],
    turbopack: {
      resolveAlias: {
        "next-mdx-import-source-file": "./mdx-components.js",
      },
    },
  }),
);
