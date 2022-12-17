/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    SERVER_HOST: process.env.SERVER_HOST,
  },
};

module.exports = nextConfig;
