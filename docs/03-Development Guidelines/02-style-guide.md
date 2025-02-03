---
id: guidelines-style-guide
title: Style Guide
---

# Style Guide

This section explains how to configure pre-commit hooks using Husky, ESLint, Prettier, and lint-staged in the PEC application. These hooks help ensure code qulity by running checks before commits are made.

#### Prerequisites

Before setting up the hooks, ensure you have the following installed:

*   Node.js
*   Git

### Step 1: Install Dependencies

Navigate to your project directory and install the required development dependencies:

```
npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier prettier-plugin-tailwindcss @next/eslint-plugin-next lint-staged husky eslint-config-airbnb
```

#### Add Eslint Config.

The project already contains a filed named `.eslintrc.json`, replace its content with:

```
{
  "env": {
    "node": true,
    "es2021": true,
    "browser": true
  },
  "globals": {
    "React": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "next/typescript",
    "eslint:recommended",
    "next/core-web-vitals"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  "plugins": ["prettier"],
  "rules": {
    "no-shadow": "off",
    "arrow-body-style": "off",
    "import/extensions": "off",
    "curly": ["error", "multi"],
    "react/button-has-type": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "import/prefer-default-export": "warn",
    "semi": 0, // let it handle by prettier
    "react/function-component-definition": "off",
    "indent": "off", // let it handle by prettier
    "max-len": "off", // let it handle by prettier
    "comma-dangle": "off", // let it handle by prettier
    "no-redeclare": "off", // let it handle by TypeScript
    "react/jsx-indent": "off", // let it handle by prettier
    "no-unused-vars": "off", // let it handle by TypeScript
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "operator-linebreak": "off", // let it handle by prettier
    "object-curly-newline": "off", // let it handle by prettier
    "function-paren-newline": "off", // let it handle by prettier
    "implicit-arrow-linebreak": "off", // let it handle by prettier
    "react/require-default-props": "off", // let it handle by TypeScript
    "nonblock-statement-body-position": "off", // let it handle by prettier
    "react/jsx-one-expression-per-line": "off" // let it handle by prettier
  }
}
```

#### Add Prettier Config.
Create a Prettier config file with the name `.prettierrc` at the root level of of the project.

```
{
  "tabWidth": 2,
  "semi": false,
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Step 2: Initialize Husky

Run the following command to initialize Husky in the project:

```
npx husky install
```

This command creates a `.husky` directory in the project root, which will hold the Git hooks.

### Step 3: Create the Pre-Commit Hook
Create a pre-commit hook by running:

```
npx husky add .husky/pre-commit "npm run lint-staged"
```

This commant sets up a pre-commit hook that runs `lint-staged`, which will check for stged files before allowing a commit.

### Step 4: Configure Lint-Staged

Create a `lintstagedrc.js` file in project root with following content:

```
const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*/.(ts|tsx)': () => 'yarn tsc --noEmit',
  '*.{js,jsx,ts,tsx,json,md,prettierrc,css,scss}': 'prettier --write --config .prettierrc',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
```

### Step 5: Add NPM Scripts

Ensure you have the follwoing scripts in your `package.json` file:

```
{
  "scripts": {
    "check-format": "prettier --check .",
    "check-lint": "eslint .",
    "check-types": "tsc --noEmit",
    "build": "next build"
  }
}
```

### Steps 6: Testing Your Setup
1.  Make some changes in your code.
2.  Stage your changes using `git add .`.
3.  Attempt to commit using `git commit -m "Your commit message"`.

## Contacting Support

If you encounter any issues or have questions not covered in this documentation, our dedicated support team is here to assist you. Contact us at [techdept@premiumeventconsulting.co.za](mailto:techdept@premiumeventconsulting.co.za).