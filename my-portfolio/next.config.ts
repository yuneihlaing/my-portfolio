import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: 'https', hostname: 'escholarship.org' },
    ],
  },
  output: "export",
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/"
};

export default nextConfig;
