/** @type {import('next').NextConfig} */
// const path = require('path');
// const webpack = require('webpack');

const nextConfig = {
  // webpack: (config) => {
  //(config, { isServer }) => {
  //   config.entry = {
  //     ...config.entry,
  //     tracing: './src/tracing.js',
  //   };

  //   // Other webpack configuration options can be added here
  //   return config;
  // },
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
    instrumentationHook: true,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/getSpans',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'false' },
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:8080' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
