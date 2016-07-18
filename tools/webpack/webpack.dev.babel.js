/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.babel')({
  devtool: 'eval',
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
    // hotUpdateMainFilename: 'update/[hash]/update.json',
    // hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
  ],
});
