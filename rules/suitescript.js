// might include test
module.exports = {
  overrides: [
    {
      files: ['**/FileCabinet/**/*{js,ss,ssp}', '(!min)*'],
      plugins: ['requirejs', 'suitescript', 'import'],
      env: {
        amd: true,
        browser: true
      },
      rules: {
        'import/no-amd': 0,
        // AMD
        'requirejs/no-js-extension': 2,
        'requirejs/no-assign-require': 2,
        // suiteScript
        'suitescript/script-type': 1,
        'suitescript/no-log-module': 2,
        'suitescript/no-extra-modules': 1,
        'suitescript/no-amd-name': 1,
        'suitescript/no-invalid-modules': 1,
        'suitescript/api-version': 2,
        'suitescript/entry-points': 1
      },
      globals: {
        log: 'readonly',
        util: 'readonly',
        define: 'readonly'
      }
    }
  ]
};
