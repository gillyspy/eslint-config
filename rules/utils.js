/**
 * @description Determines if a package is installed.
 * @param specifier Package Name.
 * @returns {boolean}
 * @example //
 */
exports.isInstalled = function isInstalled(specifier) {
  try {
    require.resolve(specifier);
    return true;
  } catch {
    //
  }

  return false;
};
