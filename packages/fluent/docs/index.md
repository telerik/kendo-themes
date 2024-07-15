---
title: Overview
description: "Preview and install the Kendo UI Fluent theme and style the Kendo UI components in Angular, React and Vue projects."
slug: preview_kendothemefluent
position: 1
---

# Fluent Theme Overview

{% platform_content angular %}
The Kendo UI for Angular Fluent theme is part of the Kendo UI for Angular library of UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}
{% platform_content react %}
The KendoReact Fluent theme is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}
{% platform_content vue %}
The Kendo UI for Vue Fluent theme is part of the Kendo UI for Vue library of UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}

## Installation

1. Download and install the Kendo UI Fluent theme package.

    ```sh
    npm install --save @progress/kendo-theme-fluent
    ```

1. For the next steps that include alternative approaches for theme installation, refer to the instructions in the [article on styling in Kendo UI]({% slug themesandstyles %}).

## Dependencies

For the Kendo UI Fluent theme to closely implement the [Fluent Design System](https://www.microsoft.com/design/fluent/#/), provide the Segoe UI font family.

By default, the Fluent theme uses the Segoe UI font family but the font itself is not included in the theme package.

To include the Segoe UI font in your project, follow these steps:

1. Download the Segoe UI font from [Microsoft](https://aka.ms/webfluentfonts). The download includes the Segoe UI Regular, Segoe UI Italic, Segoe UI Bold, and Segoe UI Bold Italic font files.
2. Add the downloaded font files to your project's assets folder. {% platform_content angular %}For Angular, make sure that the folder is included in the assets section of the `angular.json` file.{% endplatform_content %}{% platform_content react %} For React, make sure that the folder is included in the `public` directory.{% endplatform_content %}{% platform_content vue %} For Vue, make sure that the folder is included in the `public` directory.{% endplatform_content %}
3. In your HTML file or global style sheet, add the following code to include the font:

```html
<style>
  @font-face {
    font-family: 'Segoe UI';
    src: url('/src/assets/segoeui.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
</style>
```

{% platform_content angular %}
The `@font-face` rule should be added to the `styles.css` or `style.scss` file in the `src` folder of your Angular project.
{% endplatform_content %}

Make sure to replace the path in the `url` property with the actual path to the downloaded font file in your project.

4. Finally, update the CSS code in your file to use the Segoe UI font:

```html
<style>
  body { font-family: "Segoe UI", sans-serif; }
</style>
```

That's it! The Segoe UI font will now be applied to your project.

## Dynamic customization

The Kendo UI Fluent theme utilizes [CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) which allows for dynamic customization without needing to recompile the theme.

The Kendo UI Fluent theme exposes root variables that are globally available:

```html
<style>
  :root { --kendo-font-size: 20px; }
</style>
```

As well as variables targeting specific components:

```html
<style>
  .k-button { --kendo-button-bg: hotpink; }
</style>
```

All of the custom properties available with the Kendo UI Fluent theme are prefixed with `--kendo` to avoid conflicts with third party libraries.

## Preview

To apply the Fluent theme to any of the examples on this website, use the theme chooser drop-down at the top-right corner of the example. The {% platform_content angular %}Default{% endplatform_content %}{% platform_content react %}Material{% endplatform_content %}{% platform_content vue %}Material{% endplatform_content %} theme styling is loaded by default.

To simultaneously preview multiple components from different packages, to build your own theme, or to customize any of the available Kendo UI ones, use the capabilities of the [Kendo UI Theme Builder](https://themebuilder.telerik.com/) web application.

## Suggested Links

* [Fluent Design System](https://www.microsoft.com/design/fluent/#/)
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
