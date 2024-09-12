import acme from '@acme/eslint-config';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  ...tailwind.configs['flat/recommended'],
  ...acme.configs['flat/recommended'],
  ...acme.configs['flat/react'],
  ...acme.configs['flat/typescript'],
  {
    name: 'acme/apps/tailwindcss',
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
      'import-x/extensions': [0, 'never', { css: 'always' }],
      'tailwindcss/no-custom-classname': 0,
    },
  },
  {
    name: 'acme/apps/tailwindcss/pages',
    files: ['pages/**/*.{ts,tsx}', '*.d.ts'],
    rules: {
      'import-x/no-default-export': 0,
    },
  },
  {
    name: 'acme/apps/tailwindcss/ignores',
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
