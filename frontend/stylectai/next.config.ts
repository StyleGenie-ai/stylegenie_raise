import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during the build process
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during the build process
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['img.ssensemedia.com', 'replicate.delivery'],
  },
};

export default nextConfig;
