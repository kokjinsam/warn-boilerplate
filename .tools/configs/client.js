/**
 * This contains configurations for Webpack
 * development server
 */
const path = require('path');
const clientConfig = require('../../.warn/configs/client.js');

const clientDirName = clientConfig.clientDirName || 'client';
const indexHTMLFileName = clientConfig.indexHTMLFileName || 'index.html';

module.exports = {
  hostname: process.env.HOSTNAME || clientConfig.host || 'localhost',
  port: clientConfig.port || 8080,
  srcPath: path.resolve(process.cwd(), clientDirName),
  nodeModulesPath: path.join(process.cwd(), 'node_modules'),
  buildPath: path.resolve(process.cwd(), 'build/client'),
  publicPath: '/',
  clientDirName,
  omittedVendors: [
    'express',
    'apollo-server',
    'mongodb',
  ].concat(clientConfig.omittedVendors),
  indexHTMLFileName,
  indexHtmlLocation: path.join(clientDirName, indexHTMLFileName),
};
