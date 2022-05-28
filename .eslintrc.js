const path = require('node:path'); // eslint-disable-line import/no-unresolved

const importAliases = {
  '@external': path.join(`${__dirname}/code/external`),
  '@root': path.join(`${__dirname}/.`),
  '@source': path.join(`${__dirname}/code`)
};

module.exports = {
  // https://dev.to/s2engineers/how-to-make-eslint-work-with-prettier-avoiding-conflicts-and-problems-57pi
  'extends': ['airbnb-base', 'prettier'],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: importAliases,
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    es6: true,
    node: true
  },
  plugins: ['prettier'],

  parserOptions: { ecmaVersion: latest },

  rules: {
    // compatbility w/ Prettier
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        useTabs: false,
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: 'always',
        printWidth: 160,
        quoteProps: 'preserve'
      }
    ],
    // extra

    'spaced-comment': ['error', 'always', { 'block': { 'exceptions': ['-*'] } }],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
    'wrap-iife': ['warn', 'inside'],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'off' }],
    'prefer-regex-literals': 1,
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': { 'consistent': true, 'multiline': true },
        'ObjectPattern': { 'consistent': true, 'multiline': true },
        'ImportDeclaration': 'never',
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
    _gat: false,
    badRequestError: true,
    CMS: true,
    log: readonly,
    util: readonly,
    requireJsConfig: true,
    module: 'readonly',
    console: true,
    context: true,
    customer: true,
    JSON: true,
    methodNotAllowedError: true,
    notFoundError: true,
    order: true,
    request: true,
    require: false,
    response: true,
    SC: false,
    session: true,
    unauthorizedError: true
  }
};
