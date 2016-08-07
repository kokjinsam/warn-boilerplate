const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const webpackConfig = require('../../configs/server');

module.exports = (options) => ({
  devtool: options.devtool,
  cache: false,
  debug: false,
  target: 'node',
  stats: false,
  progress: true,
  entry: options.entry,
  output: Object.assign({
    path: webpackConfig.buildPath,
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
      test: /\.json$/,
      loader: 'json-loader',
    }],
    postLoaders: [

    ],
    noParse: /\.min\.js/,
  },
  externals: [nodeExternals({
    whitelist: [
      'webpack/hot/poll?1000',
    ],
  })],
  plugins: options.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  eslint: {
    failOnWarning: false,
    failOnError: false,
  },
  resolve: {
    modulesDirectories: [
      webpackConfig.serverDirName,
      'node_modules',
    ],
    extensions: [
      '',
      '.json',
      '.js',
      '.jsx',
    ],
  },
  node: {
    __dirname: true,
    fs: 'empty',
  },
});
