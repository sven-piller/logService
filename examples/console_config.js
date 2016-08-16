'use strict';
// Defined within your component

var userConfig = (function userConfig(){
  return {
    console: {
      enabled: true
    },
    db: {
      enabled: false
    },
    file: {
      enabled: false,
      path: 'log'
    }
  };
})();
module.exports = userConfig;
