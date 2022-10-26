module.exports = {
  extends: [
    '@mywebentry/eslint-config',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: { tsconfigRootDir: __dirname },
  rules: {
    'import/no-extraneous-dependencies': [2, { packageDir: __dirname }],
    'import/extensions': [0, 'never', { css: 'always' }],
    'tailwindcss/no-custom-classname': 0,
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
