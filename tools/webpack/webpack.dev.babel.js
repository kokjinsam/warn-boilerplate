/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

const wds = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8080,
};

module.exports = require('./webpack.base.babel')({
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  devServer: {
    publicPath: `http://${wds.hostname}:${wds.port}/`,
    hot: true,
    historyApiFallback: true,
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    // filename: '[name].js',
    // chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
});
