/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  //* comment this for standard build
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
