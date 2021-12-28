# Kendo UI Default Theme

The Kendo UI Default Theme is a SCSS-based theme for the Kendo UI components.

* [Quick start](#quick-start)
* [Customizing](#customizing)
* [Integrating with third party frameworks](#integrating-with-third-party-frameworks)
* [Bug reports and feature requests](#bug-reports-and-feature-requests)
* [Versioning](#versioning)
* [License](#license)

## Quick start

Kendo UI Default Theme is available as an npm package.

If you don't need to apply any [customization](#customizing) to the theme, you can can reference the precompiled CSS directly from unpkg CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@progress/kendo-theme-default/dist/all.css" />
```

While using the precompiled CSS file is faster than compiling the theme from the source code, the approach has the two drawbacks: it includes CSS for all components; it does not provide options for theme customization through SCSS variables (which is possible when you build the theme from the source code) because the theme is already compiled.

If you prefer, or you need to customize the theme, you can install it:

```sh
npm install --save @progress/kendo-theme-default
```

and then import it in your project styles:

```scss
// Import the entire theme
@import "~@progress/kendo-theme-default/dist/all.scss";
```

For more information on how to implement the Default theme in your project, refer to the following articles:

* [Using the Default Theme in Angular Projects](https://www.telerik.com/kendo-angular-ui/components/styling/theme-default/)
* [Using the Default Theme in React Projects](https://www.telerik.com/kendo-react-ui/components/styling/theme-default/)
* [Using the Default Theme in jQuery Projects](http://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

## Customizing

You can customize Kendo UI Default Theme both in terms of what gets compiled and how the theme will look.

### Importing

In your custom scss file, you can import the entirety of the theme, by importing `dist/all.scss` or pick just the styles for the components you need. The files for individual components are in `scss/` folder:

```scss
// Import only PanelBar and Grid styles
@import "~@progress/kendo-theme-default/scss/panelbar/_index.scss";
@import "~@progress/kendo-theme-default/scss/grid/_index.scss";
```

### SCSS Variables

Kendo UI Default Theme provides many variables for customization. There are variables that control globally used theme colors like `$primary`, `$secondary`, `$success`, `$error` etc.; variables for all components such as `$component-text`, `$component-bg`; as well as variables for individual components such as `$grid-bg`, `$tabstrip-font-size` and so on.

Most component variables link to higher abstracted generic variables. For instance, the background of the grid component can be customized both from `$component-bg` and `$grid-bg`, with the latter referencing the former.

We have more than 2000 variables, so it's hard to list them all. We've tried to make variable names as coherent as possible. For instance, all variables ending in `-bg` control background color; all variables ending in `-text` control text color.

Here is a quick example on how to customize:

```scss
// Make all inputs components with a different background color
$input-bg: #f0f0f0;

// Make the border of the grid black and slightly ticker
$grid-border-width: 2px;
$grid-border: #000000;

// When you are finished with your customization, import the theme
@import "@progress/kendo-theme-default/dist/all.scss";

// Note: the variables bellow this point will not take effect,
// because the theme is already imported

$grid-border: red;

```

## Integrating with third party frameworks

CSS can be complicated due to cascades (that's what C stands for). If there are multiple frameworks loaded on a single page, it is quite possible that their styles will interfere with one another.

To avoid that, we've prefixed all our class names with `k-` e.g. `k-grid`, `k-hidden` etc., with the exception of handling for `hidden` attribute, which will hide the element that has it.

Some frameworks, like Bootstrap and Tailwind, touch global styles to establish a sort of baseline -- we call that normalizing. One such styles is the following bit, which makes dimensions (width and height) behave in a specific way:

```css
*, ::after, ::before {
    box-sizing: border-box;
}
```

We've ensured that our themes work correctly with both those styles being present and absent.

However, even when being cautious, neglecting the scope and cascade of CSS, that may result in unexpected side effects. Oddly enough, most of the cases when that happens, everything is expected, at least from CSS point of view, but it can be still frustrating.

For instance, it cannot be expected that adding `form-control` from Bootstrap to a Kendo UI Combobox will make the component behave and look like a Bootstrap form component. The scope and cascade are different -- `form-control` is intended to be added to pure `input` elements, where as a Kendo UI Combobox has a different structure and styles will not be applied correctly.

Another example is adding `bg-red-400` from Tailwind to a Kendo UI Button, depending on the exact stylesheet order that class may or may not be applied.

As a general rule, it should not be expected that mixing at matching classes from different frameworks will yield the desired results.

## Bug reports and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, please open a new [bug report](https://github.com/telerik/kendo-themes/issues/new?labels=bug,T:Default&template=bug_report.md) or [feature request](https://github.com/telerik/kendo-themes/issues/new?labels=Enhancement,T:Default&template=feature_request.md).

## Versioning

To ensure version predictability, we use [Semantic Versioning](https://semver.org/): we try to add only features for minor versions and bugfixes (or smaller features) for patch version.

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [KendoReact](http://www.telerik.com/kendo-react-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

*Copyright © 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
