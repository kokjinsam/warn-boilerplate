/**
 * Client production configuration for Webpack
 */

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const createWebpackConfig = require('./base.babel');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('../../configs/client');
const pkg = require('../../../package.json');
const _ = require('lodash');

const dependencies = Object.keys(pkg.dependencies);
const vendors = _.pull(dependencies, ...webpackConfig.omittedVendors);

/* eslint-disable no-console */
console.log(`
  Dependencies that will be included in the front-end bundle:

  ${vendors}
`);

module.exports = validate(createWebpackConfig({
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
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
    new HtmlWebpackPlugin({
      template: webpackConfig.indexHtmlLocation,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
}));
