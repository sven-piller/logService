'use strict';
var cursor = require('ansi')(process.stdout);
var util = require('util');
var columnHeading = 12;

/**
 * Formats a message object to a string
 *
 * @param {any} message
 * @returns {string} message
 */
function formatMessage(message) {
  if (!message) { return ''; }
  if (typeof message === 'string') { return message; }
  return util.inspect(message, false, 4);
}

/**
 * Logs to console with color based on log level.
 *
 * @param  {String} message   Message text to log
 * @param  {String} level     Log level
 * @param  {String} heading   Heading of this message
 */
exports.log = function log(message, level, heading) {
  message = formatMessage(message);
  level = level || '';
  heading = heading || '';

  switch (level) {
    case 'debug':
      cursor
        .white()
        .write(level)
        .horizontalAbsolute(columnHeading)
        .write(heading)
        .write('\t')
        .write(message);
      break;
    case 'info':
      cursor
        .write(level)
        .horizontalAbsolute(columnHeading)
        .brightGreen()
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
        .write(heading)
        .write('\t')
        // .white()
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
    case 'fatal':
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
