---
title: Overview
description: "Preview and install the Kendo UI Material theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemematerial
position: 1
---

# Overview

{% platform_content angular %}
> The Material theme is under active development and is not supported by the whole suite. All components which are available for styling with the Material theme are included in the preview.

## Installation

1. Download and install the package of the Material theme.

    ```bash
    npm install --save @progress/kendo-theme-material
    ```

1. Apply the Material theme options according to the instructions in the article on [styling]({% slug themesandstyles %}).

## Dependencies

The following additional modules are optional and are required by projects which aim to implement the [Material Design Guidelines](https://material.io/guidelines/) style effects:

* [Ripple effect]({% slug overview_ripple %})&mdash;Available through the `kendoRippleContainer` directive from the `@progress/kendo-angular-ripple` NPM module. The `Ripple` directive provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for Angular and is fully compatible with all available Kendo UI themes.
* [Floating labels]({% slug overview_textbox %}#toc-implementing-floating-labels)&mdash;Available through the `kendo-textbox-container` component from the `@progress/kendo-angular-inputs` NPM module. The [TextBox]({% slug overview_textbox %}) enables you to style and provide a floating label functionality to `input` elements.

## Preview

The following example previews Kendo UI components which are styled with the Material theme.

{% theme_preview theme:material %}
<script async src="{% asset_path theme-preview.js %}"></script>

## Suggested Links

* [Material Design Guidelines](https://material.io/guidelines/)
* [Kendo UI Ripple for Angular]({% slug overview_ripple %})
* [Kendo UI TextBox for Angular]({% slug overview_textbox %})
{% endplatform_content %}

{% platform_content react %}
> The Material theme is under active development and is not yet supported by the Kendo UI suite for React. Once the Material theme becomes available, this article will be updated accordingly.
{% endplatform_content %}
