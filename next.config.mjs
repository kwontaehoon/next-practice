import withTwin from './withTwin.js';

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
});

export default nextConfig;
