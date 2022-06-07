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
