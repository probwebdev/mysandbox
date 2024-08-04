import globals from 'globals';
import eslint from '@eslint/js';
import { fixupPluginRules } from '@eslint/compat';
import stylistic from '@stylistic/eslint-plugin'
import node from 'eslint-plugin-n';
import importX from 'eslint-plugin-import-x';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import promise from 'eslint-plugin-promise'
import jest from 'eslint-plugin-jest';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescript from 'typescript-eslint';

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig} */
const commonConfig = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  plugins: {
    'import-x': importX,
    '@stylistic': stylistic,
  },
  rules: {
    'multiline-ternary': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-duplicate-imports': 0,
    '@stylistic/semi': 0,
    '@stylistic/quotes': [2, 'single', { allowTemplateLiterals: true }],
    '@stylistic/comma-dangle': [2, 'only-multiline'],
    '@stylistic/space-before-function-paren': [2, { named: 'never' }],
    '@stylistic/indent': 0,
    ...importX.configs.recommended.rules,
    'import-x/extensions': [2, 'never'],
    'import-x/prefer-default-export': 0,
    'import-x/no-default-export': 2,
    'import-x/no-duplicates': [2, { 'prefer-inline': true }],
    'import-x/order': [
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
            pattern: '~/css/**',
            group: 'internal',
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
            pattern: '~/types/**',
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
    // temporary-disable
    'n/no-missing-import': 0,
  },
  ignores: [
    'node_modules',
  ],
};

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig} */
const reactConfig = {
  files: ['**/*.{jsx,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: {
    react,
    'react-hooks': fixupPluginRules(reactHooks),
  },
  rules: {
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
    ...reactHooks.configs.recommended.rules,
  }
};

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig} */
const typescriptConfig = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    globals: {
      ...commonConfig.languageOptions.globals,
      __PATH_PREFIX__: true,
    },
    parser: typescript.parser,
    parserOptions: {
      project: './tsconfig.json',
      projectService: true,
      sourceType: 'module',
      ecmaVersion: 2021,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    ...commonConfig.settings,
    'import-x/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import-x/resolver': {
      typescript: true,
      node: true,
    },
  },
  plugins: {
    ...commonConfig.plugins,
    '@typescript-eslint': typescript.plugin,
  },
  rules: {
    ...commonConfig.rules,
    'react/prop-types': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': [2, { ignoreIIFE: true }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/consistent-type-exports': 2,
    '@typescript-eslint/consistent-type-imports': [
      2,
      { fixStyle: 'inline-type-imports' },
    ],
    '@typescript-eslint/no-import-type-side-effects': 2,
  },
};

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig} */
const testsConfig = {
  files: ['**/*.test.{ts,tsx}'],
  languageOptions: {
    globals: {
      ...commonConfig.languageOptions.globals,
      ...globals.jest,
    },
  },
  plugins: {
    jest,
  },
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
    ...jest.configs['flat/style'].rules,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};

/** @type {import('@typescript-eslint/utils/ts-eslint').FlatConfig.ConfigArray} */
export default {
  configs: {
    'flat/recommended': [
      eslint.configs.recommended,
      node.configs['flat/recommended'],
      promise.configs['flat/recommended'],
      prettier,
      commonConfig,
    ],
    'flat/react': [
      jsxA11y.flatConfigs.recommended,
      reactConfig,
    ],
    'flat/typescript': [
      importX.configs.typescript,
      ...typescript.configs.strict,
      ...typescript.configs.stylistic,
      typescriptConfig,
    ],
    'flat/tests': [
      testsConfig,
    ]
  }
};
