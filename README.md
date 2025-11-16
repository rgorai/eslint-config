# Ron Gorai's Configuration for ESLint, Stylelint, and Prettier

Use my ESLint, Stylelint, and Prettier settings in your project and lint your codebase on demand with a simple CLI command.

## Prerequisites
This configuration is designed to be used for TypeScript, React, CSS, and Node.js, but could work for other configurations as well.

## Demo
Please visit <a href="https://rgorai-npm-packages.netlify.app/eslint-config">my NPM platform</a> to view a demo of this package.

## Steps to use:
### 1. `yarn add -D @rgorai/eslint-config`
Install the package as a dev dependency.

### 2. `yarn add -D typescript-eslint eslint eslint-config-prettier eslint-plugin-import eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier typescript`
Install peer dependencies.

If you need Stylelint, add the following: `stylelint stylelint-config-standard stylelint-prettier`

### 3. Apply the eslint config in your `eslint.config.mjs` file.

Feel free to spread your own config options here as well. It is recommended to reload your VS Code window after this step in order for the ESLint, Prettier, and Stylelint extensions (if you have them) to properly utilize the installed config files.

```
import rgoraiConfig from '@rgorai/eslint-config'

export default rgoraiConfig
```

If you are using Next.js ESLint plugins, then you must import the base config instead.
```
import { rgoraiConfigBase } from '@rgorai/eslint-config'

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...rgoraiConfigBase,
]
```

### 4. Apply the prettier and stylelint configs in your `package.json` file. 

```
"prettier": "@rgorai/eslint-config/.prettierrc.mjs",
"stylelint": {
  "extends": "@rgorai/eslint-config/.stylelintrc"
},

// if you use lint-staged
"lint-staged": {
  "**/*.{ts,tsx,js,jsx,mjs,cjs}": "yarn lint"
}
```

### 5. If you are using VS Code and the ESLint extension, it is recommended to add the following to your `settings.json` to disable highlighting for Prettier.
```
"eslint.rules.customizations": [
  {
    "rule": "prettier/prettier",
    "severity": "off"
  }
]
```

### 6. Run `yarn lint` to format manually.
Lint all `.tsx`, `.ts`, `.jsx`, `.js`, `.cjs`, and `.mjs` (plus `.css` if using stylelint) files in your NPM project at once.

If using Next.js, you must remove the existing script in your `package.json` to use this command.
