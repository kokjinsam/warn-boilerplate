const path = require('path');

module.exports = {
  hostname: process.env.HOSTNAME || 'localhost',
  port: 8080,
  path: {
    build: path.join(process.cwd(), 'build'),
  },
};
