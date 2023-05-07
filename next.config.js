/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
};
