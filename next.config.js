/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
  },
  poweredByHeader: false,
  basePath: "/app",
};

module.exports = nextConfig;
