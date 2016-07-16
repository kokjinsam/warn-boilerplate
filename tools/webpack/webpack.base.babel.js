const webpack = require('webpack');
const path = require('path');

module.exports = (options) => ({
  devtool: options.devtool,
  target: 'web',
  stats: false,
  progress: true,
  devServer: options.devServer,
  entry: options.entry,
  output: Object.assign({
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output),
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(process.cwd(), 'src'),
    }, {
      // Transform our own .css files with PostCSS and CSS-modules
      test: /\.css$/,
      exclude: /node_modules/,
      loader: options.cssLoaders,
    }, {
      test: /\.css$/,
      include: /node_modules/,
      loaders: ['style-loader', 'css-loader'],
    }],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports?self.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: {
    modulesDirectories: [
      'src',
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
