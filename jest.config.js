module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts?(x)',
    '!<rootDir>/src/**/index.ts?(x)',
  ],
  coverageReporters: ['html', 'text'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/**/*.test.ts?(x)'],
  transform: {
    '\\.tsx?$': 'esbuild-runner/jest',
  },
};
