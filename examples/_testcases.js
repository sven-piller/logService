'use strict';

/* eslint-disable no-console*/

/**
 * Logs with logConsole
 *
 * @param {Logger} log
 */
function logConsole(log) {
  // could be called even if console is disabled
  log.logConsole('trace text message', 'trace', '[logConsole]', 'client');
  log.logConsole('debug text message', 'debug', '[logConsole]', 'client');
  log.logConsole('info text message', 'info', '[logConsole]', 'client');
  log.logConsole('warn text message', 'warn', '[logConsole]', 'client');
  log.logConsole('error text message', 'error', '[logConsole]', 'client');
  log.logConsole('fatal text message', 'fatal', '[logConsole]', 'client');
  log.logConsole('exception text message', 'exception', '[logConsole]', 'client');
}

/**
 * Logs with generic log method
 *
 * @param {Logger} log
 */
function logLog(log) {
  log.log('test text message', 'test', '[log]', 'client');
  log.log('silly text message', 'silly', '[log]', 'client');
  log.log('trace text message', 'trace', '[log]', 'client');
  log.log('debug text message', 'debug', '[log]', 'client');
  log.log('info text message', 'info', '[log]', 'client');
  log.log('warn text message', 'warn', '[log]', 'client');
  log.log('error text message', 'error', '[log]', 'client');
  log.log('fatal text message', 'fatal', '[log]', 'client');
  log.log('exception text message', 'exception', '[log]', 'client');
}

/**
 * Logs with log level methods
 *
 * @param {Logger} log
 */
function logLevels(log) {
  log.trace('trace text message', '[trace]', 'client');
  log.debug('text message', '[debug]', 'client');
  log.info('text message', '[info]', 'client');
  log.warn('text message', '[warn]', 'client');
  log.error('text message', '[error]', 'client');
  log.fatal('fatal text message', '[fatal]', 'client');
  log.exception('exception text message', '[exception]', 'client');
}

/**
 * logObjects
 *
 * @param {Logger} log
 */
function logObjects(log) {
  var simpleObject = {
    fullname: 'Barry Allen',
    employer: 'Central City Police Department',
    country: 'United States',
    skills: ['The Fastest Man Alive']
  };
  log.debug(simpleObject, '[JSON]', 'client');

  var complexObject = {
    name: {
      first: 'Barry',
      last: 'Allen'
    },
    employer: 'Central City Police Department',
    country: 'United States',
    skills: [
      'The Fastest Man Alive'
    ]
  };
  log.info(complexObject, '[JSON]', 'client');

  var verycomplexObject = [{
    name: {
      first: 'Barry',
      last: 'Allen'
    },
    employer: 'Central City Police Department',
    country: {
      US: {
        name: 'United States',
        code: 'en_us'
      }
    },
    skills: [
      'The Fastest Man Alive'
    ]
  }];
  log.warn(verycomplexObject, '[JSON]', 'client');
}

/**
 * log error objects
 *
 * @param {Logger} log
 */
function logErrors(log) {
  try {
    throw new Error('Fehler 1');
  } catch (err) {
    log.error(err, '[ERROR]', 'client');
  }

 // throw new Error('Fehler 2, unhandled', '[ERROR]', 'client');
}

module.exports = exports = function runTests(log) {
  log.logConsole(log.config, 'trace', '[userConfig]', 'client');
  // logConsole(log);
  logLog(log);
  logLevels(log);
  logObjects(log);
  logErrors(log);
};
