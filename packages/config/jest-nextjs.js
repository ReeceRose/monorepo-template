module.exports = {
  ...require('./jest-common'),
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!ui)(.*)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testEnvironment: 'jest-environment-jsdom',
};
