'use strict';
// Defined within your component

var userConfig = (function userConfig(){
  return {
    console: {
      enabled: false
    },
    db: {
      enabled: false
    },
    file: {
      enabled: true,
      path: 'log'
    }
  };
})();
module.exports = userConfig;
