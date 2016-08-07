/**
 * Server development configuration for Webpack
 */
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
const createWebpackConfig = require('./base.babel');
const webpackConfig = require('../../configs/server');

module.exports = validate(createWebpackConfig({
  devtool: 'eval',
  entry: {
    app: [
      'webpack/hot/poll?1000',
      'babel-polyfill',
      path.join(webpackConfig.srcPath, 'index.js'),
    ],
  },
  output: {
    filename: 'server.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin(),
  ],
}));
