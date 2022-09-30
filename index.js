const { configs: jsdocConfigs } = require('./rules/jsdoc');

module.exports = {
  // https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi
  'extends': [
    'airbnb-base',
    ...['json', 'markdown', 'suitescript', 'test', 'imports', 'typescript'].map((name) => require.resolve(`./rules/${name}`))
  ],
  env: {
    browser: true,
    es6: true, // enable es6 globals
    node: true
  },
  plugins: ['import', 'jsdoc'],

  parserOptions: { ecmaVersion: 'latest' }, // enable latest syntax

  ignorePatterns: ['**/node_modules/**', 'coverage/**', '**/tmp/**', '**/temp/**', '**/*.min.js'],

    overrides: [],
  settings: {
        "jsdoc": {
          "ignoreInternal": true
        }
    },
  rules: {
    ...jsdocConfigs.vanillaJsdoc.rules,
      // extra
      'curly' : ['error','multi','consistent'],
      'no-trailing-spaces': ["error", { "ignoreComments": true, "skipBlankLines": false }],
      'operator-linebreak': ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    'spaced-comment': ['error', 'always', { 'block': { 'exceptions': ['-*'] } }],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
    'wrap-iife': ['warn', 'inside'],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'prefer-regex-literals': 1,
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': { 'consistent': true, 'multiline': true },
        'ObjectPattern': { 'consistent': true, 'multiline': true },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 3 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
      }
    ],
    'key-spacing': [
      0,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true
        },
        multiLine: {
          beforeColon: false,
          afterColon: true
        },
        'align': {
          'beforeColon': false,
          'afterColon': false,
          'on': 'colon'
        }
      }
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }
    ],
    'no-console': 1,
    'no-confusing-arrow': ['error', { 'allowParens': true }],
    indent: ['error', 2, { 'SwitchCase': 1 }], // Changing AirBNB 2 spaces to 4
    'max-len': ['error', 160, 0], // Longer lines
    'no-useless-escape': ['warn'], // Lowering from error to warning
    complexity: ['warn', 12],
    'no-underscore-dangle': ['error', { allowAfterThis: true }], // Allow this._ , mostly because of _render
    'no-plusplus': ['off'], // Nothing wrong with ++ && --
    'no-param-reassign': ['error', { props: false }], // we need to reasign param props (prototype modifications!)
    'quote-props': ['error', 'as-needed', { keywords: true, unnecessary: false, numbers: true }], // mostly tweeaked for routers
    'no-throw-literal': ['off'], // we throw objects on backend services
    'new-cap': ['off'] // because of new nlobjColumn :(
  },
  globals: {
    context: false,
    customer: false,
    JSON: true,
    methodNotAllowedError: true,
    nlapiAttachRecord: false,
    nlapiCreateError: false,
    nlapiCreateForm: false,
    nlapiCreateRecord: false,
    nlapiCreateSearch: false,
    nlapiDateToString: false,
    nlapiDeleteFile: false,
    nlapiGetCache: false,
    nlapiGetContext: false,
    nlapiGetNewRecord: false,
    nlapiGetRecordId: false,
    nlapiGetRecordType: false,
    nlapiGetUser: false,
    nlapiLoadFile: false,
    nlapiLoadRecord: false,
    nlapiLogExecution: false,
    nlapiLookupField: false,
    nlapiRequestURL: false,
    nlapiResolveURL: false,
    nlapiSearchRecord: false,
    nlapiSelectNodes: false,
    nlapiSelectValue: false,
    nlapiSubmitField: false,
    nlapiSubmitFile: false,
    nlapiSubmitRecord: false,
    nlapiDeleteRecord: true,
    nlapiYieldScript: false,
    nlobjError: false,
    nlobjSearchColumn: false,
    nlobjSearchFilter: false,
    nsglobal: false,
    _gat: false,
    badRequestError: true,
    CMS: true,
    module: 'readonly',
    console: true,
    notFoundError: true,
    order: true,
    request: false,
    require: false,
    response: false,
    SC: false,
    session: false,
    unauthorizedError: false
  }
};
