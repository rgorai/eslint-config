# Ron Gorai's Configuration for ESlint, Stylelint, and Prettier

Designed to be used for React, SCSS, Node.js, and TypeScript.

## Steps to use:
### `yarn add -D @rgorai/eslint-config`
Install the package as a dev dependency. It is recommended to reload the window in VS Code for the ESlint and Stylelint extensions (if you have them) to properly utilize the installed config files.

### Add the following to your package.json. 
Feel free to add your own config options here as well.
```
{
  "eslintConfig": {
    "extends": "@rgorai/eslint-config/.eslintrc"
  },
  "prettier": "@rgorai/eslint-config/.prettierrc.js",
  "stylelint": {
    "extends": "@rgorai/eslint-config/.stylelintrc"
  },

  // if you use lint-staged
  "lint-staged": {
    "*": "yarn lint"
  }
}
```

### `yarn lint`
Lint all .tsx, .ts, .jsx, .js, and .scss files in your folder at once
