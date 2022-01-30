module.exports = {
  'apps/**/*.{js,ts,jsx,tsx}': ['prettier --write'],
  'packages/ui/**/*.{js,ts,jsx,tsx}': ['prettier --write'],
  '*.{json,md}': ['prettier --write'],
};
