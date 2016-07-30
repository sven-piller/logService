# node-logservice-db-file-console

Service for logging in nodejs projects

[![Build Status](https://travis-ci.org/sven-piller/logService.png?branch=develop)](https://travis-ci.org/sven-piller/logService)
[![npm version](https://img.shields.io/npm/v/logService.svg)](https://www.npmjs.com/package/node-logservice-db-file-console)
[![Downloads/month](https://img.shields.io/npm/dm/logService.svg)](https://www.npmjs.com/package/node-logservice-db-file-console)
[![Dependency Status](https://david-dm.org/sven-piller/logService.svg)](https://david-dm.org/sven-piller/logService)
[![Coverage Status](https://coveralls.io/repos/github/sven-piller/logService/badge.svg?branch=master)](https://coveralls.io/github/sven-piller/logService?branch=master)

Configurable to log via winston-mongodb to database, via winston to files and/or to console.

## Install

```sh
npm install node-logservice-db-file-console --save
```


## Usage

```javascript
var log = require('node-logservice-db-file-console')(configObject);

// change custom config globally in project
log.reinit(configObject);

// log events
log.logConsole('debug text message', 'debug', '[TEST]', 'client');
log.logConsole('info text message', 'info', '[TEST]', 'client');
log.logConsole('warn text message', 'warn', '[TEST]', 'client');
log.logConsole('error text message', 'error', '[TEST]', 'client');
log.logConsole('exception text message', 'exception', '[TEST]', 'client');
log.debug('debug text message', '[TEST]', 'client');
log.info('info text message', '[TEST]', 'client');
log.warn('warn text message', '[TEST]', 'client');
log.error('error text message', '[TEST]', 'client');
log.exception('exception text message', '[TEST]', 'client');
```

### Example Output 
![Example Output](doc/console_output.png)


## Tests

```sh
npm test
```

## Contributing

Feel free and contribute

## Release History

* 0.2.0 Console logging
* 0.0.1 Initial release
