---
title: Customizing ColorPalette
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_color-palette
position: 9
---

# Customizing ColorPalette

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
    <td>$kendo-color-palette-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-color-palette-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-color-palette-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-line-height, 0 )</code></td>
    <td><code>var(--kendo-color-palette-line-height, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-outline-width, 1px )</code></td>
    <td><code>var(--kendo-color-palette-tile-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-outline-style, solid )</code></td>
    <td><code>var(--kendo-color-palette-tile-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-outline, transparent )</code></td>
    <td><code>var(--kendo-color-palette-tile-outline, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-width</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-width, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-height</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-height, #{$kendo-color-palette-tile-width} )</code></td>
    <td><code>var(--kendo-color-palette-tile-height, var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-sm-tile-width</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-sm-tile-width, #{k-spacing(5.5)} )</code></td>
    <td><code>var(--kendo-color-palette-sm-tile-width, var(--kendo-spacing-5\.5, 1.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-sm-tile-height</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-sm-tile-height, #{$kendo-color-palette-sm-tile-width} )</code></td>
    <td><code>var(--kendo-color-palette-sm-tile-height, var(--kendo-color-palette-sm-tile-width, var(--kendo-spacing-5\.5, 1.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-md-tile-width</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-md-tile-width, #{$kendo-color-palette-tile-width} )</code></td>
    <td><code>var(--kendo-color-palette-md-tile-width, var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-md-tile-height</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-md-tile-height, #{$kendo-color-palette-tile-height} )</code></td>
    <td><code>var(--kendo-color-palette-md-tile-height, var(--kendo-color-palette-tile-height, var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-lg-tile-width</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-lg-tile-width, #{k-spacing(8)} )</code></td>
    <td><code>var(--kendo-color-palette-lg-tile-width, var(--kendo-spacing-8, 2rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-lg-tile-height</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-lg-tile-height, #{$kendo-color-palette-lg-tile-width} )</code></td>
    <td><code>var(--kendo-color-palette-lg-tile-height, var(--kendo-color-palette-lg-tile-width, var(--kendo-spacing-8, 2rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-focus-outline, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-color-palette-tile-focus-outline, var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-focus-shadow, inset 0 0 0 2px #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-color-palette-tile-focus-shadow, inset 0 0 0 2px var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-outline</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-hover-outline, #{color-mix(in srgb, k-color(border) 10%, transparent)} )</code></td>
    <td><code>var(--kendo-color-palette-tile-hover-outline, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-hover-shadow, inset 0 0 0 2px #{$kendo-color-palette-tile-hover-outline}, inset 0 0 0 4px #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-color-palette-tile-hover-shadow, inset 0 0 0 2px var(--kendo-color-palette-tile-hover-outline, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent)), inset 0 0 0 4px var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-outline</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-selected-outline, #{$kendo-color-palette-tile-hover-outline} )</code></td>
    <td><code>var(--kendo-color-palette-tile-selected-outline, var(--kendo-color-palette-tile-hover-outline, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette selected tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-selected-shadow, #{$kendo-color-palette-tile-hover-shadow} )</code></td>
    <td><code>var(--kendo-color-palette-tile-selected-shadow, var(--kendo-color-palette-tile-hover-shadow, inset 0 0 0 2px var(--kendo-color-palette-tile-hover-outline, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent)), inset 0 0 0 4px var(--kendo-color-app-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette selected tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-hover-outline</td>
    <td>String</td>
    <td><code>var( --kendo-color-palette-tile-selected-hover-outline, #{$kendo-color-palette-tile-focus-outline} )</code></td>
    <td><code>var(--kendo-color-palette-tile-selected-hover-outline, var(--kendo-color-palette-tile-focus-outline, var(--kendo-color-base-emphasis, #605e5c)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette selected hover tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        width: $kendo-color-palette-sm-tile-width,
        height: $kendo-color-palette-sm-tile-height
    ),
    md: (
        width: $kendo-color-palette-md-tile-width,
        height: $kendo-color-palette-md-tile-height
    ),
    lg: (
        width: $kendo-color-palette-lg-tile-width,
        height: $kendo-color-palette-lg-tile-height
    )
)</code></td>
    <td><ul><li>sm: "width":"var(--kendo-color-palette-sm-tile-width, var(--kendo-spacing-5\\.5, 1.375rem))","height":"var(--kendo-color-palette-sm-tile-height, var(--kendo-color-palette-sm-tile-width, var(--kendo-spacing-5\\.5, 1.375rem)))"</li><li>md: "width":"var(--kendo-color-palette-md-tile-width, var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem)))","height":"var(--kendo-color-palette-md-tile-height, var(--kendo-color-palette-tile-height, var(--kendo-color-palette-tile-width, var(--kendo-spacing-6, 1.5rem))))"</li><li>lg: "width":"var(--kendo-color-palette-lg-tile-width, var(--kendo-spacing-8, 2rem))","height":"var(--kendo-color-palette-lg-tile-height, var(--kendo-color-palette-lg-tile-width, var(--kendo-spacing-8, 2rem)))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorPalette.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

