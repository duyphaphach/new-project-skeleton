const { teardown: teardownPuppeteer } = require('jest-puppeteer-docker/lib');

module.exports = async function globalTeardown() {
  global.server.close();
  await teardownPuppeteer();

  console.log(__dirname);
};
