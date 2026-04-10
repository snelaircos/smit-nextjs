import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "smit-installatie-techniek.nl" }],
        destination: "https://www.smit-installatie-techniek.nl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
