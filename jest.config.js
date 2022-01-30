const path = require('path')

const fromRoot = d => path.join(__dirname, d)

module.exports = {
  roots: [fromRoot('apps/web'), fromRoot('apps/docs'), , fromRoot('packages/ui')],
  collectCoverageFrom: ['<rootDir>/**/*.{js,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  // moduleNameMapper: {
  //   '@src/(.*)': fromRoot('apps/next-app/src/$1'),
  // },
}
