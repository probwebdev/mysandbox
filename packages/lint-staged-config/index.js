module.exports = {
  '*.{md,mdx,html,css,json}': 'pnpm prettier --write',
  '*.{js,jsx,ts,tsx}': ['pnpm eslint --fix', 'pnpm prettier --write'],
};
