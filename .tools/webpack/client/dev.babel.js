/**
 * Client development configuration for Webpack
 */
const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      'babel-polyfill',
      path.join(webpackConfig.srcPath, 'index.js'),
    ],
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: webpackConfig.indexHtmlLocation,
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin(),
  ],
}));
