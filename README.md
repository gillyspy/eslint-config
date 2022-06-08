# README

This is intended to be used by project templates that SuiteCoders are using. 

It assumes that any suitescript files are:
- in FileCabinet
- end with extensions (js, ss, ssp)
- do not have .min in their name (minified)

If you have suitescripts in other folders that is fine -- consider extending 
`@suitegeezus/eslint-config/rules/suitescript.js` for those exceptions.

It assumes you are willing to write JS in the latest ecmaversion.  This is because you can transpile down to Chrome 
72. e.g. during a build step with Parcel, babel, etc. 
If you prefer ecmaversion 10 to be enforced then you will have to override that. 

# installation
`npm install @suitegeezus/eslint-config`

# configuration
You will probably want to do something like this (particularly the `'root' : true` IF you are in the root of a 
monorepo/sub-repo situation

## Basic Example via package.json

```json

{
    "root": true,
    "extends": [
      "@suitegeezus/eslint-config"
    ]
  }
```

# Features
- Optimal for SS2.1 targets
- Plugins included
  - jsdoc
  - jest
  - jsonc
  - markdown
  - prettier
  - requirejs
  - suitescript
  - import (and resolver)
  - airbnb
- aware of suitescript-related jsdoc tags e.g.'NApiVersion'
- opinionated about js, json, markdown
- more strict about suitescript code

## SuiteScript
it assumes suitescript and tests will be in a FileCabinet folder structure. 

## Tests
It assumes tests are in tests folder

## Conflicts with Tests / SuiteScript
if you're tests are in a FileCabinet structure mirroring Suitescript targets then both sets of rules could be applied.
To control this have your test filename end with something like `test.js` then the SuiteScript rules will not be 
applied. 
