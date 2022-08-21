const nextJest = require('next/jest');

const createJestConfig = nextJest();
const ignorePatterns = ['node_modules', '<rootDir>/.next/', '<rootDir>/out/'];

module.exports = createJestConfig({
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['./config/jest.setup.js'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  coveragePathIgnorePatterns: ignorePatterns,
  testPathIgnorePatterns: ignorePatterns,
  collectCoverageFrom: [
    './src/**/*.{ts,tsx,js}',
    './pages/**/*.{ts,tsx,js}',
    '!./**/*.d.ts',
    '!./**/*types.ts',
    '!./**/*.config.*',
    '!./.eslintrc.js',
    '!./coverage/**',
    '!./config/**',
    '!./pages/**',
    '!./src/assets/**',
    '!./src/config/**',
    '!./src/pages/**',
    '!./src/theme/**',
    '!./src/types/**',
    '!./src/hooks/**',
    '!./src/components/FontFaceLoader/**',
    '!./src/components/Seo/**',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/config/mocks/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/config/mocks/fileMock.js`,

    // Handle module aliases
    '^~/(.*)$': '<rootDir>$1',
    '^~config(.*)$': '<rootDir>/src/config$1',
    '^~types(.*)$': '<rootDir>/src/types$1',
    '^~theme(.*)$': '<rootDir>/src/theme$1',
    '^~hooks(.*)$': '<rootDir>/src/hooks$1',
    '^~components(.*)$': '<rootDir>/src/components$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
});
