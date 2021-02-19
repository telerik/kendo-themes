---
title: Installation
category: getting-started
slug: installation
position: 2
---

# Installation
All Kendo Themes are available as NPM modules:

```sh
# Default theme
npm install --save @progress/kendo-theme-default

# Bootstrap theme
npm install --save @progress/kendo-theme-bootstrap

# Material theme
npm install --save @progress/kendo-theme-material
```

You can include `kendo-themes` in your project in one of the following ways:

- By using an external (CDN) link
- By using a precompiled CSS file
- By compiling the theme from the SCSS source files

## Using external (CDN) link
The simplest way is to paste a CDN link in the `head` element of your page. While we don't provide a CDN ourselves, a link can be extracted from [unpkg](https://unpkg.com).

```html
<!-- Default theme -->
<link rel="stylesheet" href="http://unpkg.com/@progress/kendo-theme-default/dist/all.css" />

<!-- Bootstrap theme -->
<link rel="stylesheet" href="http://unpkg.com/@progress/kendo-theme-bootstrap/dist/all.css" />

<!-- Material theme -->
<link rel="stylesheet" href="http://unpkg.com/@progress/kendo-theme-material/dist/all.css" />
```

## Using Precompiled CSS
Each Kendo theme includes a precompiled `dist/all.css` CSS file that contains the styles for all Kendo UI and Telerik UI components.

```sh
node_modules/@progress/kendo-theme-default/dist/all.css
```

While using the precompiled CSS file is faster than compiling the theme from the source code, the approach has the following drawbacks:

- It includes CSS for components that are not used in the application.
- It does not provide options for theme customization through SCSS variables because the theme is already compiled.

## Using the Build Process of the Application
You can include Kendo theme by importing the source SCSS file.

```scss
@import "~@progress/kendo-theme-default/dist/all.scss";
```

The `dist/all.scss` file adds the styles for all components that are available in the theme. To trim down the size of the generated CSS, import only the source for the components that you use in your application. Each of them can be found in the `scss/` folder.

```scss
// Import only the PanelBar and Grid styles using Node Sass
@import "~@progress/kendo-theme-default/scss/panelbar/_index.scss";
@import "~@progress/kendo-theme-default/scss/grid/_index.scss";

// Import only the PanelBar and Grid styles using Dart Sass
@import "~@progress/kendo-theme-default/scss/panelbar/";
@import "~@progress/kendo-theme-default/scss/grid/";
```

## Framework-specific Intructions
For more information on how to add one of the Kendo themes in your project, refer to the following articles:

* [Using the Kendo UI themes in Angular Projects](https://www.telerik.com/kendo-angular-ui/components/styling/)
* [Using the Kendo UI themes in React Projects](https://www.telerik.com/kendo-react-ui/components/styling/)
* [Using the Kendo UI themes in Vue Projects](https://www.telerik.com/kendo-vue-ui/components/styling/)
* [Using the Kendo UI themes in jQuery Projects](https://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)
* [Using the Kendo UI themes in Blazor](https://docs.telerik.com/blazor-ui/themes/overview)
