---
title: Customizing Toolbar
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_toolbar
position: 9
---

# Customizing Toolbar

## Variables

The following table lists the available variables for customization.

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody>
        <tr>
    <td>$kendo-toolbar-item-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-toolbar-item-focus-outline-width, 1px )</code></td>
    <td><code>var(--kendo-toolbar-item-focus-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-toolbar-item-focus-outline-style, solid )</code></td>
    <td><code>var(--kendo-toolbar-item-focus-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-focus-outline-color</td>
    <td>String</td>
    <td><code>var( --kendo-toolbar-item-focus-outline-color, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-toolbar-item-focus-outline-color, var(--kendo-color-base-emphasis))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-default-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-default-fill-mode</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"solid"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default fill mode of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-x</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-sm-padding-x, var(--kendo-spacing-2)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-x</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-x, var(--kendo-spacing-3)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-x</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-lg-padding-x, var(--kendo-spacing-4\.5)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-sm-padding-y, var(--kendo-spacing-1\.5)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-y</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-y, var(--kendo-spacing-1\.5)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-y</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-toolbar-lg-padding-y, var(--kendo-spacing-1\.5)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-spacing</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-sm-spacing, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-spacing</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-md-spacing, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-spacing</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-lg-spacing, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-separator-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-sm-separator-height, calc(var(--kendo-line-height-lg) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-separator-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-md-separator-height, calc(var(--kendo-line-height) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-separator-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-lg-separator-height, calc(var(--kendo-line-height-sm) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-bg, var(--kendo-color-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-scroll-overlay</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-scroll-overlay, var(--kendo-toolbar-bg, var(--kendo-color-surface)), color-mix(in srgb, var(--kendo-color-app-surface) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-outline-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-outline-border, var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-outline-border-width, var(--kendo-toolbar-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-scroll-overlay</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-outline-scroll-overlay, var(--kendo-color-app-surface), color-mix(in srgb, var(--kendo-color-app-surface) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-flat-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-flat-border, transparent transparent color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-scroll-overlay</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-flat-scroll-overlay, var(--kendo-color-app-surface), color-mix(in srgb, var(--kendo-color-app-surface) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-separator-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the separator border of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-input-width, 10em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-smart-box-min-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-toolbar-smart-box-min-width, 350px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Smart ToolBox in the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-container-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar overflow container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-container-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the Toolbar overflow container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-button-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Toolbar overflow button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-button-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Toolbar overflow button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-toolbar-sm-padding-x,
        padding-y: $kendo-toolbar-sm-padding-y,
        spacing: $kendo-toolbar-sm-spacing,
        separator-height: $kendo-toolbar-sm-separator-height
    ),
    md: (
        padding-x: $kendo-toolbar-md-padding-x,
        padding-y: $kendo-toolbar-md-padding-y,
        spacing: $kendo-toolbar-md-spacing,
        separator-height: $kendo-toolbar-md-separator-height
    ),
    lg: (
        padding-x: $kendo-toolbar-lg-padding-x,
        padding-y: $kendo-toolbar-lg-padding-y,
        spacing: $kendo-toolbar-lg-spacing,
        separator-height: $kendo-toolbar-lg-separator-height
    )
)</code></td>
    <td><ul><li>sm: "padding-x":"calc(var(--kendo-toolbar-sm-padding-x, var(--kendo-spacing-2)) + 1px)","padding-y":"calc(var(--kendo-toolbar-sm-padding-y, var(--kendo-spacing-1\\.5)) + 1px)","spacing":"var(--kendo-toolbar-sm-spacing, var(--kendo-spacing-3))","separator-height":"var(--kendo-toolbar-sm-separator-height, calc(var(--kendo-line-height-lg) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\\.5)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))"</li><li>md: "padding-x":"calc(var(--kendo-toolbar-md-padding-x, var(--kendo-spacing-3)) + 1px)","padding-y":"calc(var(--kendo-toolbar-md-padding-y, var(--kendo-spacing-1\\.5)) + 1px)","spacing":"var(--kendo-toolbar-md-spacing, var(--kendo-spacing-3))","separator-height":"var(--kendo-toolbar-md-separator-height, calc(var(--kendo-line-height) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))"</li><li>lg: "padding-x":"calc(var(--kendo-toolbar-lg-padding-x, var(--kendo-spacing-4\\.5)) + 1px)","padding-y":"calc(var(--kendo-toolbar-lg-padding-y, var(--kendo-spacing-1\\.5)) + 1px)","spacing":"var(--kendo-toolbar-lg-spacing, var(--kendo-spacing-3))","separator-height":"var(--kendo-toolbar-lg-separator-height, calc(var(--kendo-line-height-sm) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the ToolBar.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

