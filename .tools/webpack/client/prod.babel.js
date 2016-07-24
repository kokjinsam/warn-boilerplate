/**
 * Client production configuration for Webpack
 */

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const createWebpackConfig = require('./base.babel');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('../../configs/client');
const pkg = require('../../../package.json');
const pull = require('lodash.pull');

const dependencies = Object.keys(pkg.dependencies);
const vendors = pull(dependencies, ...webpackConfig.omittedVendors);

/* eslint-disable no-console */
console.log(`
  Dependencies that will be included in the front-end bundle:

  ${vendors}
`);

module.exports = validate(createWebpackConfig({
  devtool: 'source-map',
  entry: {
    app: [
      path.join(webpackConfig.srcPath, 'index.js'),
    ],
    vendor: vendors,
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  plugins: [
    new CleanWebpackPlugin(webpackConfig.buildPath, {
      root: process.cwd(),
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
}));
