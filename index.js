/**
 * Escape special characters in the given string of html.
 *
 * @param  {String} message
 * @param  {String} level
 * @param  {String} indicator
 * @param  {String} destiny
 * @return {String}
 */
module.exports = {
  log: function(message, level, indicator, destiny) {
    console.log(level + '  ' + indicator + '  ' + message);
  },

  /**
   * Escape special characters in the given string of html.
   *
   * @return {String}
   */
  log2: function() {
    console.log('log2');
  },

  /**
   * Escape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },

  /**
   * Unescape special characters in the given string of html.
   *
   * @param  {String} html
   * @return {String}
   */
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
}
