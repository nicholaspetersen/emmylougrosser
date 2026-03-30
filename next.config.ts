import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Sanity Studio to be embedded at /studio
  // The Studio uses its own React tree and doesn't need server components
};

export default nextConfig;
