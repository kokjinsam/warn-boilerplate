/**
 * PRODUCTION WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const createWebpackConfig = require('./webpack.base.babel');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../../package.json');

module.exports = validate(createWebpackConfig({
  devtool: 'source-map',
  entry: {
    app: [
      path.join(process.cwd(), 'src/index.js'),
    ],
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    filename: '[name].[hash]js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
    new CleanWebpackPlugin(path.resolve(process.cwd(), 'build'), {
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
  ],
}));
