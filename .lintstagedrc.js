module.exports = {
  'apps/**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  'packages/ui/**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md}': ['prettier --write'],
};
