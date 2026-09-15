import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev server is reached via 127.0.0.1 (Cursor preview tunnel). Next.js 16
  // blocks /_next assets unless that hostname is an allowed origin.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
