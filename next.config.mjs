/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Disables ESLint during the build process
    },
    typescript: {
      ignoreBuildErrors: true, // Optional: Disables TypeScript errors during build if needed
    },
  };
  
  export default nextConfig;
  