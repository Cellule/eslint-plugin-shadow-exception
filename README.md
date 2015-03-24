# ESLint-plugin-shadow-exception

## Description
This plugin allows you to have the ESLint rule `no-shadow` with a whitelist of variable names.
While it is highly encouraged to not shadow any variables, I believe it is better to allow some exception than to force developpers to plainly disable the rule if they have some cases where they don't care.

You can see an interesting discussion about this on [ESLint #1613](https://github.com/eslint/eslint/issues/1613)

## Installation
Install [ESLint](https://github.com/eslint/eslint) either locally or globally
```bash
$ npm install eslint
```
The plugin must be installed globally if ESLint is installed globally too.
```bash
$ npm install eslint-plugin-shadow-exception
```

## Configuration
Add `plugins` sections and specify ESLint-plugin-shadow-exception as a plugin.
```js
{
  "plugins": [
    "shadow-exception"
  ]
}
```
Then configure the rule. Note you must disable ESLint "no-shadow" rule.
```js
{
  "rules": {
    "shadow-exception/no-shadow": [2, {
      //default values
      "exceptions": {
        "err": true
      }
    }],
    "no-shadow": 0
  }
}
```
`"err": false` will forbid shadowing of variables named `err`.

The options is structured this way so you can overwrite/add variable names depending on the location of your .eslintrc
