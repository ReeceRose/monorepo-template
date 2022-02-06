module.exports = {
  ...require('config/jest-nextjs'),
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/layouts/(.*)$': '<rootDir>/layouts/$1',
    '^@/graphql/(.*)$': '<rootDir>/graphql/$1',
    '^@/generated/(.*)$': '<rootDir>/generated/$1',
    '^ui/(.*)$': '<rootDir>/../../packages/ui/$1'
  },
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setupTests.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
}