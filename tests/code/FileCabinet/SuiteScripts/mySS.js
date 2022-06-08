/* eslint-disable suitescript/api-version */

/**
 * @NScriptType what
 * // eslint-disable-next-line suitescript/api-version
 * @NApiVersion 2.2
 */
// eslint-disable-next-line suitescript/no-log-module,requirejs/no-js-extension
define(['N/log', 'N/record', './mine.js', 'N/fake', 'module'], (log, record, mine, fake) => {
  log.debug({ title: 'hi', details: fake });

  // eslint-disable-next-line no-unused-vars
  const myO = {
    // eslint-disable-next-line jsdoc/require-returns
    /**
     *
     */
    get a() {
      return 'a';
    }
  };

  // eslint-disable-next-line jsdoc/require-returns
  /**
   *
   * @param a
   * @param b
   * @param c
   * @param d
   * @example
   */
  const aFn = (a, b, c, d) => ({ a, b, d });

  /**
   *
   * @example
   * @returns {undefined}
   */
  // eslint-disable-next-line no-unused-vars
  function hi() {
    return undefined;
  }

  // eslint-disable-next-line no-global-assign,requirejs/no-assign-require
  require = util;
  return { record, mine, aFn };
});
