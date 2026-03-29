/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Production-ready configuration */
  
  // Performance optimization (removed swcMinify for Turbopack compatibility)
  compress: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.discord.com',
      },
      {
        protocol: 'https',
        hostname: '**.discordapp.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  // Redirects for old pages
  async redirects() {
    return [
      // Add old route to new route redirects here
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },

  // Rewrite for API
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_BOT_NAME: 'Nothing',
  },

  // Turbopack configuration (compatible with Next.js 16)
  turbopack: {},
};

export default nextConfig;
