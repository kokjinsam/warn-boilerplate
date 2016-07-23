/**
 * This contains configurations for Node
 * development server
 */
const path = require('path');

const serverDirName = 'server';

module.exports = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8082,
  srcPath: path.resolve(process.cwd(), serverDirName),
  nodeModulesPath: path.join(process.cwd(), 'node_modules'),
  buildPath: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
  serverDirName,
};
