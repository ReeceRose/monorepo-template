module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
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
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    '@typescript-eslint/no-inferrable-types': 'off',
  },
};
