import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-gh-pages-demo',
  assetPrefix: '/nextjs-gh-pages-demo',
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
