---
title: Basic concepts
category: customization
slug: basic-concepts
position: 1
---

# Basic concepts
Each Kendo UI theme package includes the source files of the theme. You can modify the source files and rebuild the theme as part of your build process. For example, you can change the theme colors, include the CSS only of the components you use, or use specific theme colors to style your application. The theme source files are located in the `scss` folder of the theme package.

To build a custom theme by using the theme variables, apply either of the following approaches:

- **(Recommended) Use the build process of your application** — this approach simplifies upgrades to new theme package versions.
- **Use the build process of the themes** — this approach requires you to build the theme each time the theme packages are updated.

## Using the Build Process of the Application
With this setup, you can customize theme variables directly in your application. For example, you can change the default primary color from orange to pink with the following lines:

```scss
$primary: #ff69b4;

@import "~@progress/kendo-theme-default/dist/all.scss";
```

You can also customize individual components by overriding their variables.

```scss
$panelbar-bg: #1b56b8;
$grid-bg: #1bb822;

@import "~@progress/kendo-theme-default/scss/panelbar/_index.scss";
@import "~@progress/kendo-theme-default/scss/grid/_index.scss";
```

## Using the Build Process of the Themes
While each Kendo UI theme has a dedicated NPM package (for example, `@progress/kendo-theme-default`), the source code for all themes is located in the [kendo-themes](https://github.com/telerik/kendo-themes) repository. The repository contains a build task that compiles the theme sources to CSS. To customize a theme, modify the source code of the theme, and use the build task to produce a CSS file for your application. This approach avoids the need to set up a build configuration when you compile SCSS but may be harder to maintain as the process has to be repeated each time a theme is updated.
