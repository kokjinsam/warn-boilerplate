/**
 * This contains configurations for Node
 * development server
 */
const path = require('path');
const serverConfig = require('../../.warn/configs/server');

const serverDirName = serverConfig.serverDirName || 'server';

module.exports = {
  hostname: process.env.HOSTNAME || serverConfig.host || 'localhost',
  port: serverConfig.port || 8082,
  srcPath: path.resolve(process.cwd(), serverDirName),
  nodeModulesPath: path.join(process.cwd(), 'node_modules'),
  buildPath: path.resolve(process.cwd(), 'build/server'),
  publicPath: '/',
  serverDirName,
};
