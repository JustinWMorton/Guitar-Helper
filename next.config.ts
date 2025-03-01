/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/Guitar-Helper',
  assetPrefix: '/Guitar-Helper',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
