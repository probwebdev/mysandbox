import acme from '@acme/eslint-config';

export default [
  ...acme.configs['flat/recommended'],
  ...acme.configs['flat/react'],
  ...acme.configs['flat/typescript'],
  {
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
    ignores: [
      'out',
      '.next',
      '*.setup.js',
      '*Mock.js',
      'coverage',
      'next-env.d.ts',
    ],
  },
];
