'use strict';
var path = require('path');

var defaultConfig = (function defaultConfig() {
  return {
    console: {
      enabled: true
    },
    db: {
      enabled: false
    },
    file: {
      enabled: false,
      level: 'info',
      filename: path.join(process.cwd(), 'log', 'info.log'),
      maxsize: 10 * 1024 * 1024, // bytes
      maxFiles: 20,
      json: false,
      prettyPrint: true,
      depth: 2,
      tailable: true,
      zippedArchive: true
    }
  };
})();
module.exports = defaultConfig;
