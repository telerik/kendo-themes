---
title: Overview
description: "Preview and install the Kendo UI Material theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemematerial
position: 1
---

# Material Theme Overview

{% platform_content angular %}
The Kendo UI for Angular Material theme is part of the Kendo UI for Angular library of UI components. It is distributed through NPM under the [kendo-theme-material package](https://www.npmjs.com/package/@progress/kendo-theme-material).
{% endplatform_content %}
{% platform_content react %}
The KendoReact Material theme is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-theme-material package](https://www.npmjs.com/package/@progress/kendo-theme-material).
{% endplatform_content %}

## Installation

1. Download and install the Kendo UI Material theme package.

    ```sh
    npm install --save @progress/kendo-theme-material
    ```

1. For the next steps that include alternative approaches for theme installation, refer to the instructions in the [article on styling in Kendo UI]({% slug themesandstyles %}).

## Dependencies

For the Kendo UI Material theme to closely implement the [Material Design Guidelines](https://material.io/guidelines/), provide [the Roboto font family](#toc-fonts) and [configure additional modules](#toc-additional-configuration) in your application.

By default, the Material theme uses the Roboto font family but the font itself is not included in the theme package.

You can add the font to the page from Google Fonts in the following way:

```html-no-run
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
<style>
  body { font-family: Roboto, sans-serif; }
</style>
```

{% platform_content angular %}
### Additional Configuration

The following additional configuration improves the look and feel of the theme in your application:

* Use a [Ripple effect]({% slug overview_ripple %})&mdash;Available through the `kendoRippleContainer` directive from the `@progress/kendo-angular-ripple` NPM module. The `kendoRippleContainer` directive provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for Angular and is fully compatible with all available Kendo UI themes.
* Use the [Floating label component]({% slug overview_floatinglabel %})&mdash;with [HTML Input elements]({% slug overview_floatinglabel %}#toc-using-with-html-input-elements) and with Kendo UI for Angular components from the [inputs]({% slug overview_floatinglabel %}#toc-using-with-kendo-ui-for-angular-inputs), [dateinputs]({% slug overview_floatinglabel %}#toc-using-with-kendo-ui-for-angular-date-inputs) or [dropdowns]({% slug overview_floatinglabel %}#toc-using-with-kendo-ui-for-angular-dropdowns) packages.
{% endplatform_content %}

{% platform_content react %}
### Additional Configuration

The following additional configuration improves the look and feel of the theme in your application:

* Use a [Ripple effect]({% slug overview_ripple %})&mdash;Available through the `Ripple` component from the `@progress/kendo-react-ripple` NPM module. The `Ripple` component provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for React and is fully compatible with all available Kendo UI themes.
* Use the `floatingLabel` property on components from the [Inputs]({% slug overview_inputs %}) and [Dropdowns]({% slug overview_dropdowns %}) packages for React.
{% endplatform_content %}

## Preview

To apply the Material theme to any of the examples on this website, use the theme chooser drop-down at the top-right corner of the example. The {% platform_content angular %}Default{% endplatform_content %}{% platform_content react %}Material{% endplatform_content %}{% platform_content vue %}Material{% endplatform_content %} theme styling is loaded by default.

To simultaneously preview multiple components from different packages, to build your own theme, or to customize any of the available Kendo UI ones, use the capabilities of the [Kendo UI Theme Builder](https://themebuilder.telerik.com/) web application.

## Suggested Links

{% platform_content angular %}
* [Material Design Guidelines](https://material.io/guidelines/)
* [Kendo UI Ripple for Angular]({% slug overview_ripple %})
* [Kendo UI TextBox for Angular]({% slug overview_textbox %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
{% endplatform_content %}

{% platform_content react %}
* [Material Design Guidelines](https://material.io/guidelines/)
* [Kendo UI Ripple for React]({% slug overview_ripple %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
{% endplatform_content %}

{% platform_content vue %}
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
{% endplatform_content %}
