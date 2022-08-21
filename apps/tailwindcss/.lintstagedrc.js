module.exports = {
  ...require('@mywebentry/lint-staged-config'),
  '*.css': ['pnpm stylelint --fix', 'pnpm prettier --write'],
};
