import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for maximum performance and security
  output: "export",
  // Required for static export – images must be unoptimized (or use a custom loader)
  images: { unoptimized: true },
  reactCompiler: true,
  // Trailing slash keeps links consistent when served from a CDN / static hosting
  trailingSlash: true,
};

export default nextConfig;
