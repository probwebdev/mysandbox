module.exports = {
  extends: ['@acme/eslint-config', 'plugin:@next/next/recommended'],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    'import/no-extraneous-dependencies': [2, { packageDir: __dirname }],
  },
  overrides: [
    {
      files: ['./pages/**/*.{ts,tsx}', '*.d.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
};
