# Kendo UI Fluent Theme

The Kendo UI Fluent Theme is a SCSS-based theme for the Kendo UI components which is based on the [Fluent Design System](https://www.microsoft.com/design/fluent/#/).

* [Quick start](#quick-start)
* [Customizing](#customizing)
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Versioning](#versioning)
* [License](#license)

## Quick start

Kendo UI Fluent Theme is available as an npm package.

If you don't need to apply any [customization](#customizing) to the theme, you can can reference the precompiled CSS directly from unpkg CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-fluent/dist/all.css" />
```

While using the pre-compiled CSS file is faster than compiling the theme from the source code, the approach has the two drawbacks: it includes CSS for all components; it does not provide options for theme customization through SCSS variables (which is possible when you build the theme from the source code) because the theme is already compiled.

If you prefer, or you need to customize the theme, you can install it:

```sh
npm install --save @progress/kendo-theme-fluent
```

and then import it in your project styles:

```scss
// Import the entire theme
@use "~@progress/kendo-theme-fluent/scss/all.scss";
```

## Customizing

You can customize Kendo UI Fluent Theme both in terms of what gets compiled and how the theme will look.

### Importing

In your custom scss file, you can import the entirety of the theme, by importing `scss/all.scss` or pick just the styles for the components you need. The files for individual components:

```scss
// Import only Button and Grid styles
@use "~@progress/kendo-theme-fluent/scss/index.scss" as kendo-theme;

@include kendo-theme.config(
    $components: (
        "button",
        "grid"
    )
);
@include kendo-theme.styles();
```

## Bug reports and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, please open a new [bug report](https://github.com/telerik/kendo-themes/issues/new?labels=bug,T:Fluent&template=bug_report.md) or [feature request](https://github.com/telerik/kendo-themes/issues/new?labels=Enhancement,T:Fluent&template=feature_request.md).

## Versioning

To ensure version predictability, we use [Semantic Versioning](https://semver.org/): we try to add only features for minor versions and bugfixes (or smaller features) for patch version.

## License

This package is part of the following suites:

* [Kendo UI for Angular](https://www.telerik.com/kendo-angular-ui/)
* [KendoReact](https://www.telerik.com/kendo-react-ui/)
* [Kendo UI for Vue](https://www.telerik.com/kendo-vue-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

*Copyright © 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
