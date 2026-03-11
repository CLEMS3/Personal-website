/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Your repository name on GitHub
  basePath: '/Personal-website',
  // Disable server-side image optimization, required for GitHub Pages
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
