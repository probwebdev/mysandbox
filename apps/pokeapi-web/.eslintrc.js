module.exports = {
  parserOptions: { tsconfigRootDir: __dirname },
  extends: [
    '@acme/eslint-config',
    'plugin:@next/next/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['./pages/**/*.{ts,tsx}', '*.d.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: ['./**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/naming-convention': 0,
        'import/no-extraneous-dependencies': [2, { packageDir: __dirname }],
        'import/extensions': [0, 'never', { css: 'always' }],
        'react/prop-types': 0,
        'react/function-component-definition': [
          2,
          {
            namedComponents: 'arrow-function',
            unnamedComponents: 'function-expression',
          },
        ],
        'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-curly-brace-presence': 2,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'tailwindcss/no-custom-classname': 0,
      },
    },
  ],
};
