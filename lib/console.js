'use strict';
var cursor = require('ansi')(process.stdout);
var columnHeading = 12;

/**
 * Logs to console with color based on log level.
 *
 * @param  {String} message   Message text to log
 * @param  {String} level     Log level
 * @param  {String} heading   Heading of this message
 */
exports.log = function log(message, level, heading) {
  message = message || '';
  level = level || '';
  heading = heading || '';

  switch (level) {
    case 'info':
      cursor
        .write(level)
        .horizontalAbsolute(columnHeading)
        .brightCyan()
        .write(heading)
        .white()
        .write('\t')
        .write(message);
      break;
    case 'warn':
      cursor
        .brightYellow()
        .write(level)
        .horizontalAbsolute(columnHeading)
        .brightCyan()
        .write(heading)
        .write('\t')
        .brightYellow()
        .write(message);
      break;
    case 'error':
      cursor
        .brightRed()
        .write(level)
        .horizontalAbsolute(columnHeading)
        .write(heading)
        .write('\t')
        .write(message);
      break;
    case 'exception':
      cursor
        .bg
        .white()
        .red()
        .write(level)
        .horizontalAbsolute(columnHeading)
        .write(heading)
        .write('\t')
        .write(message)
        .bg.reset();
      break;
    default:
      cursor
        .grey()
        .write(level)
        .horizontalAbsolute(columnHeading)
        .write(heading)
        .write('\t')
        .write(message);
      break;
  }
  cursor
    .write('\n')
    .reset()
    .bg.reset();
};
