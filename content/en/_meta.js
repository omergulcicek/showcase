export default {
  "*": {
    theme: {
      sidebar: false,
      navbar: false,
      breadcrumb: false,
      // Avoid git timestamp + LastUpdated on Vercel shallow clones (set VERCEL_DEEP_CLONE=true to restore).
      timestamp: false,
    },
  },
  index: {
    display: "hidden",
  },
  "input-mask": {
    title: "Input Mask",
    type: "page",
  },
  "password-toggle": {
    title: "Password Toggle",
    type: "page",
  },
};
