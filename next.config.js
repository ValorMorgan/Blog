/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Blog",
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
