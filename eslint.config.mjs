import acme from '@acme/eslint-config';

export default [
  ...acme.configs['flat/recommended'],
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: [
      'out',
      '.next',
      '*config.mjs',
      '*.config.js',
      '*.setup.js',
      '*Mock.js',
      'coverage',
      '*d.ts',
      'node_modules',
      '.pnpm-store',
      'apps',
    ],
  },
];
