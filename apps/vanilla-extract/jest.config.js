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
    './src/components/**/*.{ts?x}',
    '!./src/components/FontFaceLoader/**',
    '!./src/components/Seo/**',
    '!./**/*.d.ts',
    '!./**/*types.ts',
    '!./**/*.config.*',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
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
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
});
