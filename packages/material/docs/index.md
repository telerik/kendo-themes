---
title: Overview
description: "Installation instructions and preview of the Kendo UI Material theme, used for styling the Kendo UI components for Angular."
slug: preview_kendothemematerial
position: 1
---

# Material Theme Overview

> The Material theme is under active development and is not supported by the whole suite. All components which are available for styling with the Material theme are included in the preview.

## Installation

1. Download and install the theme package:

```bash
npm install --save @progress/kendo-theme-material
```

2. Use the theme as described in the [styling overview topic]({% slug themesandstyles %}).

### Optional Dependencies

To enable style effects that follow the [Material Design Guidelines](https://https://material.io/guidelines/), the theme requires the following additional modules:

* [Ripple effect]({% slug overview_ripple %}) available through the `kendoRippleContainer` directive from the `@progress/kendo-angular-ripple` NPM module. The Ripple directive provides the [Material ink ripple effect](https://material.io/guidelines/motion/choreography.html#choreography-radial-reaction) for the Kendo UI components for Angular and is fully compatible with all available Kendo UI themes.
* [Floating labels]({% slug overview_textbox %}) available through the `kendo-textbox-container` component from the `@progress/kendo-angular-inputs` NPM module. The TextBox enables you to style and provide a floating label functionality to `input` elements. To implement the floating label functionality in an `input` element, use the [TextBox component](#toc-implementing-floating-labels).

## Preview

The following example previews Kendo UI components which are styled with the Material theme.

{% theme_preview theme:material %}
<script async src="{% asset_path theme-preview.js %}"></script>

## Suggested Links
* [Material Design Guidelines](https://https://material.io/guidelines/)
