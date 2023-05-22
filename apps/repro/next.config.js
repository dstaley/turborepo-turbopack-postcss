/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@localhostonly/button",
    "@hashicorp/platform-product-meta",
    "@hashicorp/react-alert-banner",
    "@hashicorp/react-inline-svg",
    "@hashicorp/platform-util",
  ],
  experimental: {
    turbo: {
      loaders: {
        ".graphql": ["raw-loader"],
      },
    },
  },
};

module.exports = nextConfig;
