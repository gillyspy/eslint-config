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
            'ignores': ['^cust', '\\W+']
          }
        ],
        'jsonc/no-template-literals': 'error',
        'jsonc/no-regexp-literals': 'error',
        'jsonc/no-undefined-value': 'warn',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': [
          'error',
          {
            beforeColon: false,
            afterColon: true,
            mode: 'strict'
          }
        ],
        'jsonc/object-property-newline': ['error']
      }
    },
    {
      files: 'package.json',

      rules: {
        'jsonc/sort-keys': [
          'warn',
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
              'contributors',
              'type',
              'files',
              'directories',
              'main',
              'module',
              'types',
              'exports',
              'imports',
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
              'eslintConfig',
              'targets'
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
