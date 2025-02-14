import acme from '@acme/eslint-config';

export default [
  ...acme.configs['flat/recommended'],
  ...acme.configs['flat/react'],
  ...acme.configs['flat/typescript'],
  {
    name: 'acme/apps/vanilla-extract',
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'import-x/no-extraneous-dependencies': [
        2,
        { packageDir: import.meta.dirname },
      ],
    },
  },
  {
    files: ['pages/**/*.{ts,tsx}', '*.d.ts'],
    rules: {
      'import-x/no-default-export': 0,
    },
  },
  {
    name: 'acme/apps/vanilla-extract/ignores',
    ignores: [
      'out',
      '.next',
      '*.config.mjs',
      '.lintstagedrc.mjs',
      '*.setup.js',
      '*Mock.js',
      'coverage',
      'next-env.d.ts',
    ],
  },
];
