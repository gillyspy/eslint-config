# README

this is intended to be used by project templates that Suitecoders are using

# installation
`npm install @suitegeezus/eslint-config`

# configuration
You will probably want to do something like this (particularly the `'root' : true` if you are in a monorepo/sub-repo situation

## Basic Example via package.json

```json

{
    "root": true,
    "extends": [
      "@suitegeezus/eslint-config"
    ]
  }
```
