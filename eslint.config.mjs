import acme from '@acme/eslint-config';

export default [
  ...acme.configs['flat/recommended'],
  {
    ignores: [
      'out',
      '.next',
      '.lintstagedrc.mjs',
      '*.config.mjs',
      '*.config.js',
      '*.setup.js',
      '*Mock.js',
      'coverage',
      '*d.ts',
      'node_modules',
      '.pnpm-store',
      'apps',
      'tooling',
      'packages',
    ],
  },
];
