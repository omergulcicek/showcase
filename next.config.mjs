import nextra from "nextra";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const withNextra = nextra({});

export default withNextIntl(withNextra({
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en'
  },
  trailingSlash: true,
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.js",
    },
  },
}));
