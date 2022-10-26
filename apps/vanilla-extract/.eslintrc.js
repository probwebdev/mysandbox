module.exports = {
  extends: ['@mywebentry/eslint-config', 'plugin:@next/next/recommended'],
  parserOptions: { tsconfigRootDir: __dirname },
  settings: {},
  rules: {
    'import/no-extraneous-dependencies': [2, { packageDir: __dirname }],
  },
};
