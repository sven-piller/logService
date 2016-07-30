'use strict';

/* eslint-disable no-console*/

var log = require('./../index')();

console.log();
console.log('Output of "log.logConsole()"');
log.logConsole('debug text message', 'debug', '[TEST]', 'client');
log.logConsole('info text message', 'info', '[TEST]', 'client');
log.logConsole('warn text message', 'warn', '[TEST]', 'client');
log.logConsole('error text message', 'error', '[TEST]', 'client');
log.logConsole('exception text message', 'exception', '[TEST]', 'client');
log.logConsole('test text message', 'test', '[TEST]', 'client');
log.logConsole('silly text message', 'silly', '[TEST]', 'client');


console.log();
console.log('Output of "log.log()"');
log.log('debug text message', 'debug', '[TEST]', 'client');
log.log('info text message', 'info', '[TEST]', 'client');
log.log('warn text message', 'warn', '[TEST]', 'client');
log.log('error text message', 'error', '[TEST]', 'client');
log.log('exception text message', 'exception', '[TEST]', 'client');
log.log('test text message', 'test', '[TEST]', 'client');
log.log('silly text message', 'silly', '[TEST]', 'client');

console.log();
console.log('Output of "log.debug()"');
log.debug('text message', '[TEST]', 'client');
console.log('Output of "log.info()"');
log.info('text message', '[TEST]', 'client');
console.log('Output of "log.warn()"');
log.warn('text message', '[TEST]', 'client');
console.log('Output of "log.error()"');
log.error('text message', '[TEST]', 'client');
console.log('Output of "log.exception()"');
log.exception('text message', '[TEST]', 'client');


log.reinit({ console: { enabled: false } });


var log2 = require('./../index')({ test: 'a' });
log2.debug('text message', '[TEST]', 'client');
