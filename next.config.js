const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA(
  withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      domains: ["images.pokemontcg.io", "assets.pokemon.com"],
    },
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
    },
  })
);
