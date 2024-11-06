import withOptimizedImages from 'next-optimized-images';

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  output: 'export',
  images: {
    unoptimized: true,
  }
});

export default nextConfig;
