# Utils

The Utils is SCSS-based library that provides utilities and functions for creating custom user interfaces. It is consumed by Telerik Kendo UI Themes, but can be used also separately for your individual projects.

## Quick start

1) Install the package
npm install @progress/kendo-theme-utils
2) Import to your projects

```scss
@use "~@progress/kendo-theme-utils/scss/all.scss";
```

## Customizing

### Importing

In your custom scss file, you can import the entirety of the Utils, by importing `scss/all.scss` or pick just the styles that you need. The style files of different properties groups are placed in `scss/`:

```scss
// Import only gird, sizing and spacing styles
@use "~@progress/kendo-theme-utils/scss/flex-gird/index.import.scss";
@use "~@progress/kendo-theme-utils/scss/sizing/index.import.scss";
@use "~@progress/kendo-theme-utils/scss/spacing/index.import.scss";
```

### SCSS Variables

Kendo UI Utils provides variables that can be customized. You can find them in the `scss/_variables.scss` file. To customize a variable, import the Utils file after your customization.

```scss
// include reset styles
$kendo-reset: true;

@use "~@progress/kendo-theme-utils/scss/all.scss";
```
