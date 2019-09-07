const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { setup: setupPuppeteer } = require('jest-puppeteer-docker/lib');
const config = require('../webpack.js');

console.log('Starting the dev web server...');
const port = 8080;

const options = {
  disableHostCheck: true,
  hot: true,
  stats: { colors: true },
};

module.exports = async () => {
  global.server = new WebpackDevServer(webpack(config), options);

  global.server.listen(port, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('WebpackDevServer listening at localhost:', port);
  });

  await setupPuppeteer();
};
