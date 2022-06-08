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
        // Jsdoc
        'jsdoc/check-access': 1, // Recommended
        'jsdoc/check-alignment': 1, // Recommended
        // 'jsdoc/check-examples': 1,
        'jsdoc/check-indentation': 1,
        'jsdoc/check-line-alignment': 1,
        'jsdoc/check-param-names': 1, // Recommended
        'jsdoc/check-property-names': 1, // Recommended
        'jsdoc/check-syntax': 1,
        'jsdoc/check-tag-names': [
          1,
          {
            'definedTags': ['appliestorecord', 'appliedtorecord', 'governance', 'NAmdConfig', 'NApiVersion', 'NModuleScope', 'NScriptType']
          }
        ], // Recommended
        'jsdoc/check-types': 1, // Recommended
        'jsdoc/check-values': 1, // Recommended
        'jsdoc/empty-tags': 1, // Recommended
        'jsdoc/implements-on-classes': 1, // Recommended
        'jsdoc/match-description': 1,
        'jsdoc/multiline-blocks': 1, // Recommended
        'jsdoc/newline-after-description': 1, // Recommended
        // "jsdoc/no-bad-blocks": 1,
        // "jsdoc/no-defaults": 1,
        // "jsdoc/no-missing-syntax": 1,
        'jsdoc/no-multi-asterisks': 1, // Recommended
        // "jsdoc/no-restricted-syntax": 1,
        // "jsdoc/no-types": 1,
        'jsdoc/no-undefined-types': 1, // Recommended
        'jsdoc/require-asterisk-prefix': 1,
        'jsdoc/require-description': [1, { descriptionStyle: 'any' }],
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-example': [1, { exemptNoArguments: true, checkGetters: false, checkSetters: false }],
        // 'jsdoc/require-file-overview': 1,
        // "jsdoc/require-hyphen-before-param-description": 1,
        'jsdoc/require-jsdoc': [
          2,
          {
            exemptEmptyFunctions: true,
            checkGetters: true,
            checkSetters: true,
            require: {
              ArrowFunctionExpression: true,
              FunctionDeclaration: true,
              FunctionExpression: true
            }
          }
        ], // Recommended
        'jsdoc/require-param': 1, // Recommended
        'jsdoc/require-param-description': 1, // Recommended
        'jsdoc/require-param-name': 1, // Recommended
        'jsdoc/require-param-type': 1, // Recommended
        'jsdoc/require-property': 1, // Recommended
        'jsdoc/require-property-description': 1, // Recommended
        'jsdoc/require-property-name': 1, // Recommended
        'jsdoc/require-property-type': 1, // Recommended
        'jsdoc/require-returns': [
          2,
          {
            contexts: ['ArrowFunctionExpression', 'ClassDeclaration', 'ClassExpression', 'FunctionDeclaration', 'FunctionExpression', 'MethodDefinition'],
            forceReturnsWithAsync: true,
            forceRequireReturn: true,
            checkGetters: true,
            checkConstructors: true
          }
        ], // Recommended
        'jsdoc/require-returns-check': 2, // Recommended
        'jsdoc/require-returns-description': 1, // Recommended
        'jsdoc/require-returns-type': 2, // Recommended
        // "jsdoc/require-throws": 1,
        'jsdoc/require-yields': 1, // Recommended
        // "jsdoc/require-yields-check": 1, // Recommended
        'jsdoc/tag-lines': 1, // Recommended
        'jsdoc/valid-types': 1, // Recommended
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
