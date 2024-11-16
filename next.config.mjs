// next.config.mjs

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/sdash' : '',
  assetPrefix: isProd ? '/sdash/' : '',
  images: {
    unoptimized: true, // Important for static exports
  },
};

export default nextConfig;
