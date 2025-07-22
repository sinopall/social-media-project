import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // Enforces best practices for performance and security in development.
  reactStrictMode: true,
  // devIndicators: false,

  // Your redirect from the previous question to make /landing-page the default.
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing-page',
        permanent: true,
      },
    ];
  },
  // This is an example of how to set up rewrites for API calls.
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://sosmed-production-011e.up.railway.app/api/:path*',
  //     },
  //   ];
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com', // Replace with the hostname of your images
        port: '',
        pathname: '/images/**', // Be as specific as you need
      },
    ],
  },

  devIndicators: false,
};

export default nextConfig;
