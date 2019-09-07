module.exports = {
  launch: {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  },
  server: {
    command: 'yarn run dev',
    port: 8080,
    launchTimeout: 30000,
  },
};
