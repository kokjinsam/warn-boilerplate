/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

const wds = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8080,
};

module.exports = require('./webpack.base.babel')({
  devtool: 'eval',
  devServer: {
    publicPath: `http://${wds.hostname}:${wds.port}/`,
    hot: true,
    historyApiFallback: true,
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    // filename: '[name].js',
    // chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    hotUpdateMainFilename: 'update/[hash]/update.json',
    hotUpdateChunkFilename: 'update/[hash]/[id].update.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  cssLoaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
  postcssPlugins: [
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10'],
    }),
    postcssReporter({
      clearMessages: true,
    }),
  ],
});
