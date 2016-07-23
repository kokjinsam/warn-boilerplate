/**
 * This will start a Webpack development
 * server for front-end
 *
 * To change settings of this server,
 * go to tools/configs/webpack.js
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./dev.babel');
const configs = require('../../configs/client');

/* eslint-disable no-console */
new WebpackDevServer(webpack(webpackConfig), {
  publicPath: `http://${configs.hostname}:${configs.port}/`,
  hot: true,
  historyApiFallback: true,
  contentBase: configs.srcPath,
}).listen(configs.port, configs.hostname, (err) => {
  if (err) {
    console.log(`
      Oops! There is error!

      ${err}
    `);
    return;
  }

  console.log(`
    Webpack Dev Server started at http://${configs.hostname}:${configs.port}/
    Happy hacking!
  `);
});
