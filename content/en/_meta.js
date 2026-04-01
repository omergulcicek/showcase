export default {
  "*": {
    theme: {
      sidebar: false,
      navbar: false,
      breadcrumb: false,
      // Disable git-based "last updated" (avoids prerender issues on Vercel shallow clones / bad timestamps).
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
