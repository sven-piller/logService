'use strict';
var winston = require('winston');
require('winston-daily-rotate-file');
var _ = require('lodash');
var path = require('path');

var filenameLog = path.join(process.cwd(), 'log', 'info.log');
var filenameLog2 = path.join(process.cwd(), 'log', 'info2.log');
var exceptionLog = path.join(process.cwd(), 'log', 'exception.json');
var maxsizeLog = 10 * 1024 * 1024; // bytes
// var maxsizeLog = 3 * 1024; // bytes
var maxFilesLog = 20;

// Set up logger
var customColors = {
  trace: 'white',
  debug: 'green',
  info: 'green',
  warn: 'yellow',
  error: 'red',
  fatal: 'red'
};

var logger = new (winston.Logger)({
  colors: customColors,
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
  },
  transports: [
    new (winston.transports.File)({
      level: 'info',
      filename: filenameLog,
      maxsize: maxsizeLog,
      maxFiles: maxFilesLog,
      json: false,
      prettyPrint: true,
      depth: 2,
      tailable: true,
      zippedArchive: true
    })/* ,
    new (winston.transports.DailyRotateFile)({
      level: 'info',
      filename: filenameLog2,
      maxsize: maxsizeLog,
      maxFiles: maxFilesLog,
      json: false,
      prettyPrint: true,
      depth: 2,
      tailable: true,
      zippedArchive: true,
      prepend: true
    })*/
  ]
});

winston.addColors(customColors);

winston.handleExceptions(new winston.transports.File({
  filename: exceptionLog
}));

// Extend logger object to properly log 'Error' types
var origLog = logger.log;

logger.log = function (level, msg) {
  if (msg instanceof Error) {
    var args = Array.prototype.slice.call(arguments);
    args[1] = msg.stack;
    origLog.apply(logger, args);
  } else {
    origLog.apply(logger, arguments);
  }
};

/* LOGGER EXAMPLES
    app.logger.trace('testing');
    app.logger.debug('testing');
    app.logger.info('testing');
    app.logger.warn('testing');
    app.logger.crit('testing');
    app.logger.fatal('testing');
    */

module.exports = logger;
