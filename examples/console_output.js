'use strict';

/* eslint-disable no-console */
var userConfig = require('./console_config.js');
var log = require('./../index')(userConfig);
require('./_testcases.js')(log);


log.reinit({ console: { enabled: false } });

var log2 = require('./../index')({ test: 'a' });
log2.debug('text message', '[TEST]', 'client');
