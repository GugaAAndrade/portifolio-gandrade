import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Supabase Storage public URLs:
      // https://<project-ref>.supabase.co/storage/v1/object/public/<bucket>/<path>
      { protocol: "https", hostname: "*.supabase.co" as unknown as string },
    ],
  },
};

export default nextConfig;
