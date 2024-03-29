const vanillaJsdocRules = {
  // Jsdoc
  'jsdoc/check-access': 1, // Recommended
  'jsdoc/check-alignment': 1, // Recommended
  // 'jsdoc/check-examples': 1,
  'jsdoc/check-indentation': 1,
  'jsdoc/check-line-alignment': 1,
  'jsdoc/check-param-names': 1, // Recommended
  'jsdoc/check-property-names': 1, // Recommended
  'jsdoc/check-syntax': 1,
  'jsdoc/check-tag-names': 1, // Recommended
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
    'jsdoc/require-description'                  : [2, {
    descriptionStyle: 'any',
    exemptedBy : ['inheritdoc', 'private', 'deprecated', 'see','file']
  }],
  'jsdoc/require-description-complete-sentence': 1,
  'jsdoc/require-example'                      : [
    1,
    {
      enableFixer      : false,
      exemptedBy       : ['inheritdoc', 'private', 'deprecated', 'see'],
      exemptNoArguments: true,
      checkGetters     : false,
      checkSetters     : false
    }
  ],
  'jsdoc/require-file-overview'                : ['error',
    {
      "tags": {
        "author": {"initialCommentsOnly": false, "mustExist": true, "preventDuplicates": false},
        "file"  : {"initialCommentsOnly": true, "mustExist": true, "preventDuplicates": true}
      }
    }
  ],
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
  'jsdoc/valid-types': 1 // Recommended
};

const suitescriptJsdocRules = Object.assign(vanillaJsdocRules, {
  'jsdoc/check-tag-names': [
    1,
    {
      'definedTags': ['appliestorecord', 'appliedtorecord', 'governance', 'NAmdConfig', 'NApiVersion', 'NModuleScope', 'NScriptType']
    }
  ] // Recommended
});

module.exports = {
  configs: {
    ssJsdoc: {
      plugins: ['jsdoc'],
      env: {
        browser: true,
        amd: true,
        es6: true, // enable es6 globals
        node: true
      },
      rules: suitescriptJsdocRules
    },
    vanillaJsdoc: {
      plugins: ['jsdoc'],
      env: {
        browser: true,
        amd: true,
        es6: true, // enable es6 globals
        node: true
      },
      rules: vanillaJsdocRules
    }
  }
};
