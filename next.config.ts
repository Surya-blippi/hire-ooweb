import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d233vxkpujhe36.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
