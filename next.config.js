/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'destroy-msk.ru' },
      { protocol: 'https', hostname: 'static.tildacdn.com' },
      { protocol: 'https', hostname: 'optim.tildacdn.com' }
    ]
  }
};

module.exports = nextConfig;
