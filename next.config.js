/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'omo-oss-image.thefastimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.thefastimg.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
