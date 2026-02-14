const nextConfig = {
  output: "export" as const,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  trailingSlash: true,
  async rewrites() {
    return [
      { source: "/leaders", destination: "/api/ics/leaders" },
      { source: "/leaders/", destination: "/api/ics/leaders" },
      { source: "/battles", destination: "/api/ics/battles" },
      { source: "/battles/", destination: "/api/ics/battles" },
    ];
  },
};

export default nextConfig;
