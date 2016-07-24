/**
 * This contains configurations for Webpack
 * development server
 */
const path = require('path');
const clientConfig = require('../../.warn/configs/client.js');

const clientDirName = clientConfig.clientDirName || 'client';

module.exports = {
  hostname: process.env.HOSTNAME || clientConfig.host || 'localhost',
  port: clientConfig.port || 8080,
  srcPath: path.resolve(process.cwd(), clientDirName),
  nodeModulesPath: path.join(process.cwd(), 'node_modules'),
  buildPath: path.resolve(process.cwd(), 'static'),
  publicPath: '/',
  clientDirName,
  omittedVendors: [
    'express',
    'apollo-server',
  ].concat(clientConfig.omittedVendors),
};
