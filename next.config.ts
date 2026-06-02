import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // WebP only (the default). AVIF compresses ~20% smaller but encodes ~20%
    // slower — on a low-traffic site the optimizer cache goes cold often, so
    // that slower first-request transcode is paid repeatedly. WebP keeps the
    // first paint of each image fast.
    //
    // Keep optimized variants cached at the edge for 31 days so the slow
    // transcode happens rarely instead of every time the cache expires. Safe
    // because these images are static and content-addressed by URL.
    minimumCacheTTL: 2678400,
    // Remote hosts allowed for next/image optimization (writing-page article covers).
    remotePatterns: [
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "substack-post-media.s3.amazonaws.com" },
      { protocol: "https", hostname: "miro.medium.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
