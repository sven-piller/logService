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
npm install logService --save
```


## Usage

```javascript
var log = require('logservice');

// include custom config
log.config(configObject);

// log events
log.info('infoText');
log.warn('warnText');
log.error('errorText');
log.debug('debugText');
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

* 0.2.0 Improvements
* 0.1.0 Initial release
