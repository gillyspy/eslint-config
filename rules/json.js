module.exports = {
  ignorePatterns: ['package-lock.json'],

  overrides: [
    {
      files: '*.{json,json5,jsonc}',

      parser: 'jsonc-eslint-parser',

      plugins: ['jsonc'],

      rules: {
        'jsonc/key-name-casing': [
          'error',
          {
            'camelCase': true,
            'SCREAMING_SNAKE_CASE': true,
            'PascalCase': false,
            'kebab-case': true,
            'snake_case': false,
            'ignores': ['^cust']
          }
        ],
        'jsonc/no-template-literal': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-undefined-value': 'warning',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/indent': ['error', '2'],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
          }
        ],
        'jsonc/object-property-newline': ['error', { 'consistent': true }]
      }
    },
    {
      files: 'package.json',

      rules: {
        'jsonc/sort-keys': [
          'warning',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'publishConfig',
              'description',
              'keywords',
              'license',
              'repository',
              'funding',
              'author',
              'type',
              'files',
              'main',
              'module',
              'types',
              'exports',
              'bin',
              'unpkg',
              'scripts',
              'husky',
              'lint-staged',
              'peerDependencies',
              'peerDependenciesMeta',
              'dependencies',
              'optionalDependencies',
              'devDependencies',
              'bundledDependencies',
              'bundleDependencies',
              'overrides',
              'eslintConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?Dependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    }
  ]
};
