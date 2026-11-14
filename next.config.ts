import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // A lockfile outside this repo was making Turbopack treat ~/Sites as the root.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
