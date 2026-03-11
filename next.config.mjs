/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable server-side image optimization, required for static exports
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
