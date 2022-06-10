const { configs } = require('./jsdoc');
// might include test
module.exports = {
  overrides: [
    {
      files: ['**/FileCabinet/**/!(*.test).{js,ss,ssp,ts}', 'FileCabinet/**/!(*.test).{js,ss,ssp,ts}'],
      plugins: ['requirejs', 'suitescript', 'import', 'jsdoc'],
      env: {
        amd: true,
        browser: true,
        node: true
      },
      parserOptions: {
        ecmaFeatures: 'impliedStrict'
      },
      rules: {
        ...configs.ssJsdoc.rules,
        // import
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
