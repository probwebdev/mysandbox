const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();
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
  const plugins = [withVanillaExtract, withBundleAnalyzer];

  return plugins.reduce((acc, plugin) => plugin(acc), nextConfig);
};
