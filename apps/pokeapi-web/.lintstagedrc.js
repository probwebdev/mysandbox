module.exports = {
  ...require('@acme/lint-staged-config'),
  '*.css': ['pnpm stylelint --fix', 'pnpm prettier --write'],
};
