const path = require('path');

module.exports = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8080,
  srcPath: path.resolve(process.cwd(), 'src'),
  nodeModulesPath: path.join(process.cwd(), 'node_modules'),
  buildPath: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
};
