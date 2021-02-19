---
title: Font icons
category: icons
slug: icons-overview
position: 1
---

# Font Icons
Kendo UI delivers more than 500 integrated font icons.

## What Are Icon Fonts
Icon fonts are fonts which contain vector glyphs instead of letters and numbers. You can style them with CSS by using all styling properties that can be applied to a regular text in a modern browser.

## Why Use Icon Fonts
The utilization of icon fonts in a user interface (UI) naturally succeeds the somehow outdated icon sprite technique. Font icons demonstrate significant benefits such as:

* Improved scalability—While icon sprites are bitmap raster images and do not scale well, icon fonts use vector graphics, look perfect on retina displays, and make scaling as easy as setting the font-size configuration option.
* Improved design capabilities—You can easily apply CSS effects on the fly by setting the text color, shadow, or other options for different interaction states. For example, on :hover.
* Improved browser support—Font icons are browser-agnostic and are supported by all modern browsers.
* Reduced number of HTTP requests—To load an icon font, you need a maximum of a few HTTP requests.
* Reduced file size—A 100KB file contains approximately 500 vector icons.

## Basic Usage

To use the Kendo UI font icons:

1. [Load]({% slug themesandstyles %}) a Kendo UI theme into your project.
2. Assign a `k-icon` CSS class that is followed by a predefined class from the [list of font icons](#toc-list-of-font-icons) to an HTML tag&mdash;for example, the `<span>` element as in `<span class="k-icon k-i-calendar"></span>`.

## Using Unicode Characters

Even though the web icon font comes with a [set of predefined CSS classes](#toc-list-of-font-icons), you might need to use the icons with a custom CSS class name. To achieve this, set a `:before` pseudo content value for the relevant icon.

```html
<span class="k-icon my-custom-icon-class"></span>

<style>
    .my-custom-icon-class:before {
        content: "\e13a"; /* Adds a glyph using the Unicode character number */
    }
</style>
```

## Making Visual Adjustments

You can modify the appearance of each icon by using:

* [Different sizes](#toc-sizes)
* [Icon colors](#toc-colors)
* [Icon flipping](#toc-flipping)

### Sizes
The default size of all Kendo UI icons is 16px (Font-size: 16px; Width: 16px; Height: 16px). However, Kendo UI provides the following predefined sizes for icons:
* `xsmall`&mdash;Font-size: 8px; Width: 8px; Height: 8px.
* `small`&mdash;Font-size: 12px; Width: 12px; Height: 12px.
* `medium`&mdash;Font-size: 32px; Width: 32px; Height: 32px.
* `large`&mdash;Font-size: 48px; Width: 48px; Height: 48px.
* `xlarge`&mdash;Font-size: 64px; Width: 64px; Height: 64px.

Each of them can be set by using the respective class - `k-icon-xs`, `k-icon-sm`, `k-icon-md`, `k-icon-lg`, `k-icon-xl`.
```html
<span class="k-icon k-i-gear k-icon-xs"></span>
<span class="k-icon k-i-gear k-icon-md"></span>
<span class="k-icon k-i-gear k-icon-xl"></span>
```

Also, any custom size can be applied by using the CSS `font-size` property.
```html
<span class="k-icon k-i-gear k-icon-24"></span>

<style>
    .k-icon-24 {
        font-size: 24px; /* Sets icon size to 24px */
    }
</style>
```

### Colors
Kendo UI provides the following predefined colors:
* `primary`&mdash;Applies coloring based on primary theme color.
* `secondary`&mdash;Applies coloring based on secondary theme color.
* `tertiary`&mdash; Applies coloring based on tertiary theme color.
* `info`&mdash;Applies coloring based on info theme color.
* `success`&mdash; Applies coloring based on success theme color.
* `warning`&mdash; Applies coloring based on warning theme color.
* `error`&mdash; Applies coloring based on error theme color.
* `dark`&mdash; Applies coloring based on dark theme color.
* `light`&mdash; Applies coloring based on light theme color.
* `inverse`&mdash; Applies coloring based on inverse theme color.

Each of them can be set by using the respective class - `k-color-primary`, `k-color-secondary`, `k-color-tertiary`, `k-color-info`, `k-color-success`, `k-color-warning`, `k-color-error`, `k-color-dark`, `k-color-light`, `k-color-inverse`.

```html
<span class="k-icon k-i-gear k-color-primary"></span>
<span class="k-icon k-i-gear k-color-info"></span>
<span class="k-icon k-i-gear k-color-light"></span>
```

Any custom color can be applied by using the CSS `color` property.

```html
<span class="k-icon k-i-gear" style="color: blue;"></span>
```

### Flipping
To better accommodate an icon in your application, flip it horizontaly, vertically or in both directions by using the `k-flip-h` or / and `k-flip-v` predefined CSS classes.

```html
<span class="k-icon k-i-pencil k-flip-h"></span>
<span class="k-icon k-i-pencil k-flip-v"></span>
<span class="k-icon k-i-pencil k-flip-h k-flip-v"></span>
```
