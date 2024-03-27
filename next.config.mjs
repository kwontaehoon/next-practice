import withTwin from './withTwin.js';

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
});

export default nextConfig;
