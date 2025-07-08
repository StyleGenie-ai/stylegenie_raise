import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['img.ssensemedia.com', 'replicate.delivery'],
  },
};

export default nextConfig;
