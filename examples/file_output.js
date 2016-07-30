'use strict';

/* eslint-disable no-console */
var userConfig = require('./file_config.js');
var log = require('./../index')(userConfig);
require('./_testcases.js')(log, userConfig);
