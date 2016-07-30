'use strict';
var _ = require('lodash');
var libConsole = require('./console');
var libWinston = require('./winston');
var defaultConfig = require('./defaultConfig');

var _self = null;

/**
 * Creates Logger
 *
 * @param {Object} [userConfig] configuration object
 */
function Logger(userConfig) {
  this.reinit(userConfig);
  this.trace('Logger initalisisert', 'Logger');
}

Logger.prototype.reinit = function reinit(userConfig) {
  this.config = _.defaultsDeep({}, userConfig, defaultConfig);
  if (this.config.file.enabled) {
    libWinston.addFile(this.config.file);
  } else {
    libWinston.removeFile();
  }
};

Logger.prototype.log = function log(message, level, heading, destiny) {
  if (this.config.console.enabled) {
    this.logConsole(message, level, heading);
  }
  if (this.config.file.enabled) {
    libWinston.log(level, message);
  }
};

Logger.prototype.logConsole = function logConsole(message, level, heading) {
  libConsole.log(message, level, heading);
};

Logger.prototype.trace = function trace(message, heading, destiny) {
  this.log(message, 'trace', heading, destiny);
};

Logger.prototype.debug = function debug(message, heading, destiny) {
  this.log(message, 'debug', heading, destiny);
};

Logger.prototype.info = function info(message, heading, destiny) {
  this.log(message, 'info', heading, destiny);
};

Logger.prototype.warn = function warn(message, heading, destiny) {
  this.log(message, 'warn', heading, destiny);
};

Logger.prototype.error = function error(message, heading, destiny) {
  this.log(message, 'error', heading, destiny);
};

Logger.prototype.exception = function exception(message, heading, destiny) {
  this.log(message, 'fatal', heading, destiny);
};

Logger.prototype.fatal = function fatal(message, heading, destiny) {
  this.log(message, 'fatal', heading, destiny);
};

/**
 * Returns Logger
 *
 * @param {Object} [cfg] configuration object
 * @returns {Object} Logger
 */
function constr(cfg) {
  // Singleton
  if (!_self) {
    _self = new Logger(cfg);
    return _self;
  } else {
    _self.reinit(cfg);
    return _self;
  }
  // Immutual
  // return new Logger(cfg);
}

// var logger = module.exports = exports = function(cfg) { return new Logger(cfg)}
var logger = module.exports = exports = constr;

