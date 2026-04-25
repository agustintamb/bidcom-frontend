import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'static.bidcom.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'd1blmgc4psac6k.cloudfront.net',
      },
    ],
  },
}

export default nextConfig
