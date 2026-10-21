import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is prerendered at build time, so ship plain static files (out/) that any host can serve.
  output: "export",
};

export default nextConfig;
