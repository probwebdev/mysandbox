require('@rushstack/eslint-patch/modern-module-resolution');

const common = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  settings: {
    jest: {
      version: 27,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
  ],
  plugins: [],
  rules: {
    'quotes': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'import/extensions': [2, 'never'],
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'import/order': [
      1,
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
          'unknown',
          'type',
        ],
        'pathGroups': [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '~{components,config,theme,hooks}/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '~/**',
            group: 'parent',
          },
          {
            pattern: '~types/**',
            group: 'type',
          },
        ],
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
        'warnOnUnassignedImports': true,
      },
    ],
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
  },
};

const typescript = {
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    ...common.settings,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  plugins: [...common.plugins, '@typescript-eslint'],
  extends: [
    ...common.extends,
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...common.rules,
    'comma-dangle': 0,
    'react/prop-types': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/comma-dangle': [2, 'only-multiline'],
    '@typescript-eslint/quotes': [2, 'single', { allowTemplateLiterals: true }],
    '@typescript-eslint/space-before-function-paren': [2, { named: 'never' }],
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': [2, { ignoreIIFE: true }],
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/consistent-type-imports': 2,
  },
};

const javascript = {
  files: ['**/*.{js,jsx}'],
  extends: [...common.extends],
};

const tests = {
  env: { ...common.env, jest: true },
  files: ['**/*.test.{ts,tsx}'],
  plugins: [...common.plugins, 'jest'],
  extends: [
    ...typescript.extends,
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  rules: {
    ...typescript.rules,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};

module.exports = {
  ...common,
  overrides: [
    typescript,
    javascript,
    tests,
    {
      files: ['./pages/**/*.{ts,tsx}', '*.d.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
};
