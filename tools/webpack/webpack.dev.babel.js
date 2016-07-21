/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const createWebpackConfig = require('./webpack.base.babel');

module.exports = validate(createWebpackConfig({
  devtool: 'eval',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      path.join(process.cwd(), 'src/index.js'),
    ],
  },
  output: {
    // filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}));
