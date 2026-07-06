/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'destroy-msk.ru' },
      { protocol: 'https', hostname: 'static.tildacdn.com' },
      { protocol: 'https', hostname: 'optim.tildacdn.com' }
    ]
  }
};

module.exports = nextConfig;
