const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack/webpack.dev.babel');

const wds = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8080,
};

new WebpackDevServer(webpack(config), {
  publicPath: `http://${wds.hostname}:${wds.port}/`,
  hot: true,
  historyApiFallback: true,
}).listen(wds.port, wds.hostname, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`
    Listening at http://localhost:${wds.port}/
  `);
});
