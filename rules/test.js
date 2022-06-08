module.exports = {
  overrides: [
    {
      files: ['**/{test,tests,__tests__}/**/*.{js,ss,ssp,ts}', '{test,tests,__tests__}/**/*.{js,ss,ssp,ts}', '**/*test.{js,ss,ssp,ts}'],
      plugins: ['eslint-plugin-jest'],
      env: {
        jest: true
      },
      rules: {
        'jest/consistent-test-it': 2, // test outside, describe:it inside
        'jest/expect-expect': 2,
        'jest/max-nested-describe': [2, { 'max': 4 }],
        'jest/no-deprecated-functions': 2,
        'jest/no-done-callback': 1,
        'jest/no-export': 2,
        'jest/no-mocks-import': 1,
        'jest/prefer-todo': 2,
        'jest/require-top-level-describe': 1,
        'jest/valid-title': 2
      },
      globals: {
        requireJsConfig: true,
        log: 'readonly',
        util: 'readonly'
      }
    }
  ]
};
