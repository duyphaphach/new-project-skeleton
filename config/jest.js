module.exports = {
  preset: 'jest-puppeteer-docker',
  rootDir: './..',
  testMatch: ['<rootDir>/**/*.test.js'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/setup.js',
  globalSetup: '<rootDir>/config/jest/setup.js',
  globalTeardown: '<rootDir>/config/jest/teardown.js',
  timers: 'fake',
};
