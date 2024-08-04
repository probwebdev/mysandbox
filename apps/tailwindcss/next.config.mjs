import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const ContentSecurityPolicy = `
  default-src 'self' probablyweb.dev vitals.vercel-insights.com;
  img-src https://*;
  child-src 'none';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default (phase) => {
  const config = [withBundleAnalyzer].reduce(
    (acc, plugin) => plugin(acc),
    nextConfig
  );

  if (phase !== 'phase-development-server') {
    return {
      async headers() {
        return [
          {
            source: '/:path*',
            headers: securityHeaders,
          },
        ];
      },
      ...config,
    };
  }

  return config;
};
