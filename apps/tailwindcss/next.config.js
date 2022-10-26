const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = () => {
  const plugins = [withBundleAnalyzer];

  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};
