export default {
  '*.{md,mdx,html,json}': 'pnpm prettier --write',
  '*.css': ['pnpm stylelint --fix', 'pnpm prettier --write'],
  '*.{js,mjs,cjs}': ['pnpm eslint --fix', 'pnpm prettier --write'],
  '*.{jsx,tsx}': ['pnpm eslint --fix', 'pnpm prettier --write'],
  '*.{ts}': ['pnpm eslint --fix', 'pnpm prettier --write'],
};
