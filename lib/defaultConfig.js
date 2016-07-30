'use strict';
// Defined within your component

var defaultConfig = (function defaultConfig(){
  return {
    console: {
      enabled: true
    },
    db: {
      enabled: false
    },
    file: {
      enabled: false
    }
  };
})();
module.exports = defaultConfig;
