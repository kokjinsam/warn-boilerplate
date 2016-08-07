/**
 * Server production configuration for Webpack
 */

const path = require('path');
const validate = require('webpack-validator');
const createWebpackConfig = require('./base.babel');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('../../configs/server');

module.exports = validate(createWebpackConfig({
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    path.join(webpackConfig.srcPath, 'index.js'),
  ],
  output: {
    filename: 'server.js',
  },
  plugins: [
    new CleanWebpackPlugin(webpackConfig.buildPath, {
      root: process.cwd(),
    }),
  ],
}));
