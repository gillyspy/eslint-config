/* eslint-disable suitescript/api-version */
/**
 * @NScriptType what
 * @NApiVersion 2.2
 *
 */
// eslint-disable-next-line suitescript/no-log-module,requirejs/no-js-extension
define(['N/log', 'N/record', './mine.js', 'N/fake', 'module'], (log, record, mine, fake) => {
  log.debug({ title: 'hi', details: fake });

  // eslint-disable-next-line no-global-assign,requirejs/no-assign-require
  require = util;
  return { record, mine };
});
