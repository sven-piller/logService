'use strict';
var winston = require('winston');
require('winston-mongodb').MongoDB; // eslint-disable-line
var path = require('path');

var exceptionLog = path.join(process.cwd(), 'log', 'exception.json');

winston.emitErrs = false;
winston.handleExceptions(new winston.transports.File({
  filename: exceptionLog
}));



var logger = new (winston.Logger)({});
logger.addConsole = function ac(config) {
  logger.add(winston.transports.Console, config);
};
logger.removeConsole = function rc() {
  if (winston.transports['console']) { // eslint-disable-line
    logger.remove(winston.transports.Console);
  }
};
logger.addFile = function af(config) {
  logger.add(winston.transports.File, config);
};
logger.removeFile = function rf() {
  if (winston.transports['file']) { // eslint-disable-line
    logger.remove(winston.transports.File);
  }
};


// Console entfernen, wird nicht benötigt
logger.removeConsole();

// Extend logger object to properly log 'Error' types
var origLog = logger.log;

logger.log = function log(level, msg) {
  if (msg instanceof Error) {
    var args = Array.prototype.slice.call(arguments);
    args[1] = msg.stack;
    origLog.apply(logger, args);
  } else {
    origLog.apply(logger, arguments);
  }
};

module.exports = logger;
