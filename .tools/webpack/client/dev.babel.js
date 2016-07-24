/**
 * Client development configuration for Webpack
 */
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const createWebpackConfig = require('./base.babel');
const webpackConfig = require('../../configs/client');

const devServerPath = `webpack-dev-server/client?http://${webpackConfig.hostname}:${webpackConfig.port}`;

module.exports = validate(createWebpackConfig({
  devtool: 'eval',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      devServerPath,
      path.join(webpackConfig.srcPath, 'index.js'),
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
    new FlowStatusWebpackPlugin(),
  ],
}));
