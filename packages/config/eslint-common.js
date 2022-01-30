module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
  },
  plugins: [],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/prop-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
