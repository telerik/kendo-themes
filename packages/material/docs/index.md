---
title: Overview
description: "Preview and install the Kendo UI Material theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemematerial
position: 1
---

# Material Theme Overview

The Kendo UI Material theme is available through the @progress/kendo-theme-material NPM module.

## Installation

1. Download and install the package of the Material theme.

    ```sh
    npm install --save @progress/kendo-theme-material
    ```

1. Include the Material theme in your application according to the instructions in the article on [styling]({% slug themesandstyles %}).

## Dependencies

For the Kendo UI Material theme to closely implement the [Material Design Guidelines](https://material.io/guidelines/), provide [the Roboto font family](#toc-fonts) and [configure additional modules](#toc-additional-configuration) in your application.

By default, the Material theme uses the Roboto font family but the font itself is not included in the theme package.

You can add the font to the page from Google Fonts in the following way:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" />
<style>
  body { font-family: Roboto, sans-serif; }
</style>
```

{% platform_content angular %}
### Additional Configuration

The following additional configuration improves the look and feel of the theme in your application:

* Use a [Ripple effect]({% slug overview_ripple %})&mdash;Available through the `kendoRippleContainer` directive from the `@progress/kendo-angular-ripple` NPM module. The `kendoRippleContainer` directive provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for Angular and is fully compatible with all available Kendo UI themes.
* Use the [Floating labels]({% slug overview_textbox %}#toc-implementing-floating-labels)&mdash;Available through the `kendo-textbox-container` component from the `@progress/kendo-angular-inputs` NPM module. The [TextBox]({% slug overview_textbox %}) enables you to provide floating labels to `input` elements and Kendo UI components.
{% endplatform_content %}

{% platform_content react %}
### Additional Configuration

The following additional configuration improves the look and feel of the theme in your application:

* Use a [Ripple effect]({% slug overview_ripple %})&mdash;Available through the `Ripple` component from the `@progress/kendo-react-ripple` NPM module. The `Ripple` component provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for React and is fully compatible with all available Kendo UI themes.
* Use the `floatingLabel` property on components from the [Inputs]({% slug overview_inputs %}) and [DropDowns]({% slug overview_dropdowns %}) packages for React.
{% endplatform_content %}

## Preview

{% platform_content angular %}
The following example previews Kendo UI components which are styled with the Material theme.
{% endplatform_content %}
{% platform_content vue %}
The following example previews Kendo UI components which are styled with the Material theme.
{% endplatform_content %}
{% platform_content react %}
You can apply the Material theme to all Kendo UI for React examples, which demonstrate the behavior of a component, by selecting the theme from the theme-chooser at the top-right corner of the page.
{% endplatform_content %}

{% platform_content angular %}
{% theme_preview theme:material %}
<script async src="{% asset_path theme-preview.js %}"></script>
{% endplatform_content %}
{% platform_content vue %}
{% theme_preview theme:material %}
<script async src="{% asset_path vue-theme-preview.js %}"></script>
{% endplatform_content %}

## Suggested Links

{% platform_content angular %}
* [Material Design Guidelines](https://material.io/guidelines/)
* [Kendo UI Ripple for Angular]({% slug overview_ripple %})
* [Kendo UI TextBox for Angular]({% slug overview_textbox %})
{% endplatform_content %}

{% platform_content react %}
* [Material Design Guidelines](https://material.io/guidelines/)
* [Kendo UI Ripple for React]({% slug overview_ripple %})
{% endplatform_content %}

{% platform_content vue %}
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
{% endplatform_content %}
