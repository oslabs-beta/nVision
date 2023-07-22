/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      }, 
    ],
  },
  experimental: {
    instrumentationHook: true
  },
}

module.exports = nextConfig
