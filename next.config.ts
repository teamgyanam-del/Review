import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Explicitly set the root so Turbopack doesn't confuse the workspace
    // root (parent dir) with this project's directory when multiple
    // package-lock.json files are detected.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
