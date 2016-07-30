'use strict';

/* eslint-disable no-console */
var userConfig = require('./combined_config.js');
var log = require('./../index')(userConfig);
require('./_testcases.js')(log);
