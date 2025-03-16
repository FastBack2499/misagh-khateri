/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/misagh17.github.io',
  assetPrefix: '/misagh17.github.io/',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
