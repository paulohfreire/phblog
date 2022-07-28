/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.vercel.com", "images.prismic.io"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
