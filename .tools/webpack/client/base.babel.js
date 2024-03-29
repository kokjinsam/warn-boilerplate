const webpack = require('webpack');
const WebpackMD5Hash = require('webpack-md5-hash');
const DashboardPlugin = require('webpack-dashboard/plugin');
const webpackConfig = require('../../configs/client');

module.exports = (options) => ({
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true,
  entry: options.entry,
  output: Object.assign({
    path: webpackConfig.buildPath,
    publicPath: webpackConfig.publicPath,
  }, options.output),
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint',
      include: webpackConfig.srcPath,
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: webpackConfig.srcPath,
    }, {
      // transform node_modules css
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: webpackConfig.nodeModulesPath,
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=fonts.[name].[ext]',
    }, {
      test: /\.(jpg|jpeg|png|gif|ico)$/,
      loaders: [
        'file?name=[name].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
      ],
    }, {
      test: /\.html$/,
      loader: 'html',
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(mp4|webm)$/,
      loader: 'url?limit=10000',
    }],
    postLoaders: [

    ],
    noParse: /\.min\.js/,
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new WebpackMD5Hash(),
    new DashboardPlugin(),
  ]),
  eslint: {
    failOnWarning: false,
    failOnError: false,
  },
  resolve: {
    modulesDirectories: [
      webpackConfig.clientDirName,
      'node_modules',
    ],
    extensions: [
      '',
      '.json',
      '.js',
      '.jsx',
    ],
  },
});
