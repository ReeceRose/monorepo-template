// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['ui']);

module.exports = withTM({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    concurrentFeatures: true,
  },
  // https://github.com/vercel/next.js/pull/33240
  // https://github.com/vercel/next.js/pull/33702
  // swcMinify: true,
  // relay: {
  //   language: 'typescript',
  // },
});
