---
title: Preview
description: "Preview the way the Kendo UI components for Angular look like when styled with the Kendo UI Material theme for Angular."
slug: preview_kendothemematerial
position: 1
---

# Preview

The following example previews Kendo UI components which are styled with the Material theme.

## Kendo UI Material theme (preview) is available through the `@progress/kendo-theme-material` NPM module.

> The Material theme is under active development and is not supported by the whole suite. All components which are available for styling with the Material theme are included in the preview.

{% theme_preview theme:material %}
<script async src="{% asset_path theme-preview.js %}"></script>

## Material Theme guidelines
* [Material ink](https://https://material.io/guidelines/)

## Dependencies

* [Ripple]({% slug overview_ripple %}) available through the `@progress/kendo-angular-ripple` NPM module.
* [TextBox]({% slug overview_textbox %}) available through the `@progress/kendo-angular-inputs` NPM module.

1. The Ripple directive provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for Angular and is fully compatible with all available Kendo UI themes.

2. The TextBox enables you to style and provide a floating label functionality to `input` elements. To implement the floating label functionality in an `input` element, use the [TextBox component](#toc-implementing-floating-labels).
