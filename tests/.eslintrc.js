/**
 * @description intentionally start over with a new root for this tests folder
 */
const eslintrc = require('../index');

module.exports = Object.assign(eslintrc, { root: true });
