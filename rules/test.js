module.exports = {
  overrides: [
    {
      files: '**/{test,tests,__tests__}/**',
      env: {
        jest: true
      },
      globals: {
        requireJsConfig: true
      }
    }
  ]
};
