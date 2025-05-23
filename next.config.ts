import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fonts.gstatic.com"], // Agar external fonts ya images use ho rahe hain
    unoptimized: true, // Agar local images ke sath masla hai
  },
};

export default nextConfig;
