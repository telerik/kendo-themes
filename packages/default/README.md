[![Build Status](https://travis-ci.org/telerik/kendo-theme-default.svg?branch=master)](https://travis-ci.org/telerik/kendo-theme-default)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-theme-default.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-theme-default)


# Default theme for Kendo UI

A SCSS-based theme for Kendo UI components. Currently available for **Kendo UI for React** and **Kendo UI for Angular 2**.

## Usage

### With Kendo UI for Angular 2 / React

See [`docs/index.md`](docs/index.md) for more information.

### With Kendo UI jQuery

Use with the jQuery widgets is **currently not supported**, but is planned for future versions of the theme.

## Customization

The theme can be customized in one swoop via the colors defined in the [`styles/_variables.scss` file](styles/_variables.scss). Any change in this file is propagated to every component. To style specific components, use the variables used in their specific scss file.

The theme can be built via `npm run build`. The file `dist/all.css` will contain the complete theme, which can be used in your project.

## Development

Styles are split into components, and dependencies are managed by the [`import-once` mixin](styles/mixins/_import-once.scss). Styles must be defined within an `import-once` block, so that they are bundled once when required from multiple files.

During development, the SCSS files are linted on every `commit` and built at `push`. The theme package can be tested against a component by linking the theme in the components package.

Upon build, browser-specific properties are generated via [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).
