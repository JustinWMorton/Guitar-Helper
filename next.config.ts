/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/Guitar-Helper',
  assetPrefix: '/Guitar-Helper/',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'export',
};

module.exports = nextConfig;
