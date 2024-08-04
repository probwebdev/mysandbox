import acme from '@acme/eslint-config';

export default [
  ...acme.configs['flat/recommended'],
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
];
