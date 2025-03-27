# Angular Template

## Technologies Used

- **Angular**: Version 19.2.4 for building the frontend framework.
- **RxJS**: For reactive programming and handling asynchronous data streams.
- **Tailwind CSS**: Utility-first CSS framework for styling with custom configurations.
- **Nx**: Monorepo management tool to organize and manage the workspace efficiently.
- **Jest**: Testing framework for unit tests.
- **Playwright**: For end-to-end testing automation.
- **ESLint**: For linting and maintaining code quality.
- **TypeScript**: Strongly typed programming language for enhancing JavaScript with type definitions.
- **Zone.js**: To manage asynchronous operations in Angular applications.

## Additional Tools

- **Angular CDK**: Component Dev Kit for building reusable UI components.
- **Tailwind CSS Animate**: For adding animations using Tailwind CSS.
- **Prettier**: Code formatter to ensure consistent code style.
- **Nx Cloud**: For distributed computing and caching to speed up builds and tests.

## Development Scripts

- `start`: Runs the application in development mode using Nx.
- `build`: Builds the application for production.
- `test`: Runs unit tests using Jest.
- `lint`: Lints the codebase using ESLint.
- `format`: Formats the code using Prettier.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the Application**

   ```bash
   npm start
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Run Tests**

   ```bash
   npm test
   ```

5. **Lint the Codebase**

   ```bash
   npm run lint
   ```

6. **Format the Code**
   ```bash
   npm run format
   ```

## Dev Tools Implemented

This section outlines how each tool is configured, and how they can be leveraged to ensure clean and maintainable code.

Use this script to run all checks against all project files:

```sh
npm run lint:all
```

> [!CAUTION]
> These tools are not perfect and they are not a substitute for learning and utilizing the best practices outlined in the Angular guides for [Style](https://angular.dev/style-guide), [Security](https://angular.dev/best-practices/security), [Accessibility](https://angular.dev/best-practices/a11y), and [Performance](https://angular.dev/best-practices/runtime-performance).

### TypeScript

In addition to setting `"strict": true`, Angular's template checking is set to 'Strict Mode' in [tsconfig.json](tsconfig.json).

These compiler options have also been added to ensure strict type-checking for optional properties, eliminate unused variables
and parameters to reduce clutter, and enforce explicit handling of potentially undefined values in arrays or objects:

- [exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes)
- [noUnusedLocals](https://www.typescriptlang.org/tsconfig#noUnusedLocals)
- [noUnusedParameters](https://www.typescriptlang.org/tsconfig#noUnusedParameters)
- [noUncheckedIndexedAccess](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess)

To check for errors in \*.ts app files:

```
npm run lint:tsc:app
```

To check for errors in \*.spec.ts test files:

```
npm run lint:tsc:spec
```

To check for errors in all TypeScript files:

```
npm run lint:tsc:all
```

### ESLint

[ESLint](https://eslint.org/) is used for linting JavaScript, TypeScript, HTML, and JSON files in the project. The linting configuration is set in [eslint.config.js](./eslint.config.js), with specific overrides for the following file types: `*.js`, `*.ts`, `*.spec.ts`, `*.html`, and `*.json`.

To ensure effective linting for all project files, the following ESLint plugins are used:

- [@angular-eslint](https://github.com/angular-eslint/angular-eslint)
  - Enables all TypeScript and template rules unless explicitly disabled or modified.
  - [@angular-eslint rules configuration matrix](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md).
  - [@angular-eslint/template rules configuration matrix](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/README.md).
- [@typescript-eslint](https://typescript-eslint.io/)
  - Uses both [strict-type-checked](https://typescript-eslint.io/linting/configs#strict-type-checked) and [stylistic-type-checked](https://typescript-eslint.io/linting/configs#stylistic-type-checked) rule sets.
  - [typescript-eslint rules configuration matrix](https://typescript-eslint.io/rules/).
- [eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)
  - Uses `recommended` rule set.
  - [eslint-plugin-jasmine rules configuration matrix](https://typescript-eslint.io/rules/).
- [eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)
  - Uses `recommended` rule set.
  - [eslint-plugin-jsonc rules configuration matrix](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/).
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - Disables rules that may conflict with Prettier formatting.

To lint all relevant files in the project (not just those in src/):

```sh
npm run lint
```

ESLint output is formatted using [eslint-formatter-mo](https://github.com/fengzilong/eslint-formatter-mo). To use normal formatting, remove the `-f mo` option from the `lint` script in [package.json](package.json):

```json
"lint": "eslint -f mo \"**/*.{js,ts,html,json}\"",
```

> [!TIP]
> Suppress the urge to immediately set rules to "off" or "warn". First, look up the rule and the problem it is correcting for and discuss the rule with other developers on the project.

#### Accessibility (a11y)

This project enables all the accessibility rules provided by angular-eslint by default (denoted by :accessibility: in the @angular-eslint/template rules configuration matrix linked above).

Includes rules for image alt text, form labels, no autofocus, valid ARIA, and more.

These rules are easier to work with if enabled _early_ in the development process and early adoption of these rules is also very helpful for avoiding common accessibility antipatterns.

The [Accessibility in Angular guide](https://angular.dev/best-practices/a11y) is a great place to start learning about accessibility in Angular, and it provides resources on the topic of accessibility.

### Prettier

[Prettier](https://prettier.io/) is used to enforce consistent code formatting, reducing diffs by minimizing formatting changes.

In [.prettierrc.json](./.prettierrc.json), the `htmlWhitespaceSensitivity` option is set to `ignore` to better format templates. This setting trims unnecessary whitespace around and inside HTML elements. Use `&nbsp;` (non-breaking space) when you need to explicitly maintain spacing between inline elements.

The following Prettier plugins are used:

- [prettier-plugin-sh](https://github.com/un-ts/prettier/tree/master/packages/sh): Formats shell scripts, such as Git hooks.
- [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order): Automatically organizes SCSS/CSS properties using [concentric-css](https://github.com/brandon-rhodes/Concentric-CSS)
- [prettier-plugin-organize-imports](https://github.com/trivago/prettier-plugin-sort-imports): Automatically organizes, arranges, and removes unused imports.

To format files within the project:

```sh
npm run format
```

To check if all files are properly formatted:

```sh
npm run lint:format
```

### CSpell

[CSpell](https://github.com/streetsidesoftware/cspell) is used for spell checking for all project files.

To add project-specific words, update [.cspell.json](.cspell.json).

The [Code Spell Checker Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) allows you to quickly add misspelled words to the configuration by selecting "Add to config: .cspell.json" from the 'Quick Fix' menu.

The following dictionaries have been enabled: bash, companies, cpp, csharp, css, filetypes, fonts, go, html, latex, misc, node,npm, php, powershell, python,softwareTerms, and typescript.

To find misspelled words in all files within the project:

```sh
npm run lint:spelling
```

### VSCode

The following VSCode extensions will be recommended when opening the project ([.vscode/extensions.json](.vscode/extensions.json)):

- [Angular](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

The following VSCode settings have been set in [.vscode/settings.json](.vscode/settings.json):

- Set Prettier as default formatter.
- Turn on format on save
- Turn on [fix linting errors on save](https://github.com/microsoft/vscode-eslint?tab=readme-ov-file#version-204).
- Turn on auto-save and set delay for 3 seconds (doesn't format or fix errors).
- [Disable VSCode linter for CSS/SCSS](https://github.com/stylelint/vscode-stylelint?tab=readme-ov-file#disable-vs-codes-built-in-linters-optional).
- [Enable Stylelint linter CSS & SCSS](https://github.com/stylelint/vscode-stylelint?tab=readme-ov-file#%EF%B8%8F-only-css-and-postcss-are-validated-by-default).

### Husky, Commitlint, tsc-files, and Lint-Staged (Git hooks)

[Husky](https://typicode.github.io/husky/) is used to manage the [pre-commit](.husky/pre-commit), [pre-push](.husky/pre-push), and [commit-msg](.husky/commit-msg) git hooks.

[Commitlint](https://commitlint.js.org/#/) is used to enforce good commit messages according to the [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint) configuration in the commit-msg git hook. Additional Commitlint configuration is kept in [commitlint.config.js](./commitlint.config.js).

[Lint-staged](https://github.com/lint-staged/lint-staged) is used to run Prettier, ESLint, Stylelint, CSpell, and [tsc-files](https://github.com/gustavopch/tsc-files) in the pre-commit git hook against all staged files. Lint-staged configuration is kept in [.lintstagedrc.json](.lintstagedrc.json)
