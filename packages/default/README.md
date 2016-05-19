# Default theme for Kendo UI

A SCSS-based theme for Kendo UI components. Currently available for **Kendo UI for React** and **Kendo UI for AngularJS**.

## Usage

### As a pre-built theme

Clone the repo and build it via `npm run build`. This will output CSS files in the `dist/` folder. The file `dist/main.css` will contain the complete theme, which can be used in your project.

### Via webpack

The `webpackThemeConfig` function from the [@telerik/kendo-common-tasks module](https://github.com/telerik/kendo-common-tasks) embeds the recommended theme configuration options in a given webpack config. See a preconfigured [webpack.config.js for React](examples/react/webpack.config.js).

### With Kendo UI jQuery

Use with the jQuery widgets is currently **not supported**, as this theme is focused on the React / AngularJS offering, and requires changes in order to work with the jQuery widgets.

## Customization

The theme can be customized in one swoop via the colors defined in the [`styles/_variables.scss` file](styles/_variables.scss). Any change in this file is propagated to every component. To style specific components, use the variables used in their specific scss file.

## Development

Styles are split into components, and dependencies are managed by the [`import-once` mixin](styles/mixins/_import-once.scss). Styles must be defined within an `import-once` block, so that they are bundled once when required from multiple files.

During development, the SCSS files are linted on every `commit` and built at `push`. The theme package can be tested against a component by linking the theme in the components package.

Class names are prefixed with `k-` during builds. Browser-specific properties are generated via [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).
