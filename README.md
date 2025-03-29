# Angular Template

![Angular Version](https://img.shields.io/badge/Angular-19.2.4-dd0031)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8)
![PrimeNG](https://img.shields.io/badge/PrimeNG-19.0-6366f1)

A modern, feature-rich Angular 19 template with signal-based state management, comprehensive UI components, and best practices for building scalable web applications.

## 🚀 Features

- **Angular 19** - Latest Angular framework with standalone components
- **Signal-based State Management** - Modern reactive state management using Angular signals
- **PrimeNG Integration** - Comprehensive UI component library
- **Tailwind CSS v4** - Utility-first CSS framework with custom configurations
- **Lucide Icons** - Beautiful, consistent SVG icon library
- **Storybook** - Component documentation and development environment
- **Comprehensive Form System** - Reusable form components with validation
- **Accessibility (a11y)** - WCAG 2.1 AA standards compliance
- **Internationalization (i18n)** - Multi-language support
- **Robust Testing** - Unit and integration testing setup
- **Comprehensive Linting** - ESLint, TypeScript, Prettier, and more
- **Git Hooks** - Husky, Commitlint, and Lint-Staged for code quality

## 📋 Project Structure

```
angular-template/
├── src/
│   ├── app/
│   │   ├── shared/           # Shared modules, components, and utilities
│   │   │   └── ui-kit/       # Reusable UI components
│   │   │       └── button/   # Example component with stories and types
│   │   ├── store/            # Signal-based state management
│   │   ├── features/         # Feature modules
│   │   ├── core/             # Core services, guards, and interceptors
│   │   ├── app.component.ts  # Root component
│   │   ├── app.config.ts     # Application configuration
│   │   └── app.routes.ts     # Application routes
│   ├── assets/               # Static assets
│   └── styles.css            # Global styles
├── .husky/                   # Git hooks
├── .storybook/               # Storybook configuration
└── ...                       # Configuration files
```

## 🔧 Technologies Used

### Core Framework

- **Angular**: Version 19.2.4 for building the frontend framework
- **TypeScript**: Strongly typed programming language (v5.8)
- **RxJS**: For reactive programming and handling asynchronous data streams
- **Zone.js**: To manage asynchronous operations in Angular applications

### UI & Styling

- **PrimeNG**: Comprehensive UI component library
- **Tailwind CSS v4**: Utility-first CSS framework with custom configurations
- **Lucide Icons**: Preferred icon library for consistent, beautiful SVG icons
- **Angular CDK**: Component Dev Kit for building reusable UI components

### Development Tools

- **Storybook**: Component documentation and development environment
- **ESLint**: For linting and maintaining code quality
- **Prettier**: Code formatter to ensure consistent code style
- **CSpell**: Spell checking for code and documentation
- **Compodoc**: Documentation generation tool

### Testing

- **Jasmine**: Testing framework for unit tests
- **Karma**: Test runner for Angular applications

### DevOps

- **Husky**: Git hooks for code quality
- **Commitlint**: Enforce conventional commit messages
- **Lint-Staged**: Run linters on staged files

## 🎨 UI Components

The template includes a comprehensive UI kit with reusable components:

- **Button**: Customizable button component with variants, sizes, and icon support
- **Form Components**: Input, select, checkbox, radio, and more
- **Layout Components**: Card, panel, grid, and more

### Icon Library Usage

Lucide Icons is the preferred icon library for this project:

```typescript
// How to import and use Lucide icons
import { LucideAngularModule } from "@lucide/angular";
import { LucideHome, LucideSettings, LucideUser } from "@lucide/angular/icons";

@Component({
  // ...
  imports: [LucideAngularModule.pick({ LucideHome, LucideSettings, LucideUser })],
  // ...
})
export class MyComponent {
  // Component implementation
}
```

## 📊 Signal-based State Management

The template uses Angular's signal-based state management for reactive, efficient state handling:

- Feature-based store organization
- Typed signal interfaces
- Computed signals for derived state
- Effect signals for side effects
- Immutable update patterns

## 🌐 Getting Started

### Prerequisites

- Node.js 20.10.0 or higher
- npm 10 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd angular-template
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:4200`

4. **Run Storybook**

   ```bash
   npm run storybook
   ```

   Storybook will be available at `http://localhost:6006`

## 🛠️ Development Scripts

- `npm start` - Runs the application in development mode
- `npm run build` - Builds the application for production
- `npm test` - Runs unit tests
- `npm run test:ci` - Runs tests in CI mode
- `npm run lint` - Lints the codebase using ESLint
- `npm run lint:fix` - Fixes linting issues automatically
- `npm run format` - Formats the code using Prettier
- `npm run storybook` - Runs Storybook for component development
- `npm run build-storybook` - Builds Storybook for deployment
- `npm run compodoc` - Generates documentation with Compodoc
- `npm run check-spelling` - Checks spelling in the codebase

## 🛡️ Quality Assurance Tools

This project includes a comprehensive set of tools to ensure code quality, maintainability, and adherence to best practices.

> [!TIP]
> Run all quality checks with a single command:
>
> ```sh
> npm run lint:all
> ```

> [!IMPORTANT]
> While these tools help maintain code quality, they complement (not replace) the best practices outlined in the Angular guides for [Style](https://angular.dev/style-guide), [Security](https://angular.dev/best-practices/security), [Accessibility](https://angular.dev/best-practices/a11y), and [Performance](https://angular.dev/best-practices/runtime-performance).

### TypeScript Configuration

The project uses strict TypeScript configuration to ensure type safety and code quality:

- `"strict": true` - Enables all strict type checking options
- Angular's template checking set to 'Strict Mode'
- Additional compiler options for enhanced type safety:
  - [`exactOptionalPropertyTypes`](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes) - Ensures optional properties are handled correctly
  - [`noUnusedLocals`](https://www.typescriptlang.org/tsconfig#noUnusedLocals) - Prevents unused variables
  - [`noUnusedParameters`](https://www.typescriptlang.org/tsconfig#noUnusedParameters) - Prevents unused function parameters
  - [`noUncheckedIndexedAccess`](https://www.typescriptlang.org/tsconfig#noUncheckedIndexedAccess) - Enforces explicit handling of potentially undefined values

**TypeScript Validation Commands:**

```sh
# Check app files
npm run lint:tsc:app

# Check test files
npm run lint:tsc:spec

# Check all TypeScript files
npm run lint:tsc:all
```

### ESLint Integration

[ESLint](https://eslint.org/) is configured to lint JavaScript, TypeScript, HTML, and JSON files with comprehensive rule sets:

- **[@angular-eslint](https://github.com/angular-eslint/angular-eslint)** - Angular-specific linting rules
  - [TypeScript rules](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin/README.md)
  - [Template rules](https://github.com/angular-eslint/angular-eslint/blob/main/packages/eslint-plugin-template/README.md)
- **[@typescript-eslint](https://typescript-eslint.io/)** - TypeScript-specific linting
  - Uses [strict-type-checked](https://typescript-eslint.io/linting/configs#strict-type-checked) and [stylistic-type-checked](https://typescript-eslint.io/linting/configs#stylistic-type-checked) rule sets
- **[eslint-plugin-jasmine](https://github.com/tlvince/eslint-plugin-jasmine)** - Test-specific linting
- **[eslint-plugin-jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc)** - JSON file linting
- **[eslint-plugin-rxjs](https://github.com/cartant/eslint-plugin-rxjs)** - RxJS-specific linting rules
- **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)** - Prevents conflicts with Prettier

**Linting Command:**

```sh
npm run lint     # Check for issues
npm run lint:fix # Fix automatically fixable issues
```

### Accessibility (a11y) Enforcement

The project enforces accessibility best practices through linting rules:

- All accessibility rules from @angular-eslint are enabled by default
- Covers critical areas like image alt text, form labels, ARIA attributes, and more
- Helps maintain WCAG 2.1 AA compliance throughout development

Refer to the [Accessibility in Angular guide](https://angular.dev/best-practices/a11y) for best practices.

### Code Formatting with Prettier

[Prettier](https://prettier.io/) ensures consistent code formatting across the project with several plugins:

- **[prettier-plugin-sh](https://github.com/un-ts/prettier/tree/master/packages/sh)** - Shell script formatting
- **[prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order)** - CSS property organization
- **[prettier-plugin-organize-imports](https://github.com/trivago/prettier-plugin-sort-imports)** - Import organization

Configuration in `.prettierrc.json` includes optimized settings for Angular templates.

**Formatting Commands:**

```sh
npm run format      # Format all files
npm run lint:format # Check formatting without making changes
```

### Spell Checking with CSpell

[CSpell](https://github.com/streetsidesoftware/cspell) provides comprehensive spell checking for all project files to ensure consistent terminology and prevent typos in code, comments, and documentation.

- Configuration in `.cspell.json` with project-specific dictionary
- Integration with VS Code via the [Code Spell Checker Extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- Support for multiple specialized dictionaries: bash, companies, css, html, typescript, and more
- Quick fix options to add words to project dictionary

**Spell Checking Command:**

```sh
npm run lint:spelling
```

### Storybook Integration

[Storybook](https://storybook.js.org/) is integrated to provide an isolated development environment for UI components:

- Interactive component documentation
- Visual testing and development
- Component showcase with various states and configurations
- Addon support for enhanced functionality

**Storybook Commands:**

```sh
npm run storybook       # Start Storybook development server
npm run build-storybook # Build static Storybook for deployment
```

### Documentation Generation

[Compodoc](https://compodoc.app/) is integrated to generate comprehensive documentation for the project:

- Automatic documentation from TypeScript code
- Component visualization
- Module dependencies
- Code coverage reports

**Documentation Command:**

```sh
npm run compodoc
```

## 🧰 Development Environment

### VS Code Integration

The project includes optimized VS Code configuration for an enhanced development experience:

**Recommended Extensions ([.vscode/extensions.json](.vscode/extensions.json)):**

- **[Angular](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)** - Enhanced Angular template support
- **[Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)** - Consistent coding styles
- **[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** - Code formatting
- **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)** - Integrated linting
- **[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)** - Spell checking

**Workspace Settings ([.vscode/settings.json](.vscode/settings.json)):**

- Prettier configured as default formatter
- Format on save enabled
- Auto-fix linting errors on save
- Auto-save with 3-second delay
- Optimized CSS/SCSS linting with Stylelint

## 🔄 Git Workflow

### Git Hooks with Husky

The project uses [Husky](https://typicode.github.io/husky/) to enforce code quality standards through Git hooks:

- **[pre-commit](.husky/pre-commit)**: Runs linters and formatters on staged files
- **[commit-msg](.husky/commit-msg)**: Validates commit messages against conventional commit format
- **[pre-push](.husky/pre-push)**: Runs tests to prevent pushing failing code

### Conventional Commits

[Commitlint](https://commitlint.js.org/#/) enforces the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format for all commit messages using [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint) with additional configuration in [commitlint.config.js](./commitlint.config.js):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Types include: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, etc.

### Lint-Staged

[Lint-staged](https://github.com/lint-staged/lint-staged) runs quality checks only on staged files to ensure efficient pre-commit validation:

- TypeScript type checking with [tsc-files](https://github.com/gustavopch/tsc-files)
- ESLint for linting
- Prettier for formatting
- CSpell for spell checking
- Configuration in [.lintstagedrc.json](.lintstagedrc.json)
