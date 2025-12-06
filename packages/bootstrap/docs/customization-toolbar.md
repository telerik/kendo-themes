---
title: Customizing Toolbar
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_toolbar
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
    <td>$kendo-toolbar-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-button-md-calc-size</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1\.5, 0.375rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-separator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-button-sm-calc-size</code></td>
    <td><code>calc(1.4285714286 * 1em + var(--kendo-spacing-1, 0.25rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-separator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-toolbar-separator-height</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1\.5, 0.375rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-separator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-button-lg-calc-size</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large Toolbar button separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
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
    <td>List</td>
    <td><code>$kendo-toolbar-bg, color-mix(in srgb, k-color(app-surface) 0%, transparent)</code></td>
    <td><code>(var(--kendo-color-surface, #f8f9fa), color-mix(in srgb, var(--kendo-color-app-surface, #ffffff) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-text</td>
    <td>String</td>
    <td><code>$kendo-button-text</code></td>
    <td><code>var(--kendo-color-on-base, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 50%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 50%, transparent)</code></td>
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
    <td>Number</td>
    <td><code>$kendo-toolbar-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-outline-scroll-overlay</td>
    <td>List</td>
    <td><code>k-color(app-surface), color-mix(in srgb, k-color(app-surface) 0%, transparent)</code></td>
    <td><code>(var(--kendo-color-app-surface, #ffffff), color-mix(in srgb, var(--kendo-color-app-surface, #ffffff) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the outline Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-border</td>
    <td>String</td>
    <td><code>$kendo-toolbar-border</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
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
    <td>List</td>
    <td><code>k-color(app-surface), color-mix(in srgb, k-color(app-surface) 0%, transparent)</code></td>
    <td><code>(var(--kendo-color-app-surface, #ffffff), color-mix(in srgb, var(--kendo-color-app-surface, #ffffff) 0%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left and right scroll overlay of the flat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the separator border of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px color-mix(in srgb, k-color(primary) 25%, transparent)</code></td>
    <td><code>(inset 0 0 0 2px color-mix(in srgb, var(--kendo-color-primary, #0d6efd) 25%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-container-font-size</td>
    <td>String</td>
    <td><code>$kendo-menu-popup-md-font-size</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar overflow container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-container-line-height</td>
    <td>String</td>
    <td><code>$kendo-menu-popup-md-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the Toolbar overflow container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-button-padding-y</td>
    <td>String</td>
    <td><code>$kendo-menu-popup-md-item-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Toolbar overflow button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-overflow-button-padding-x</td>
    <td>String</td>
    <td><code>$kendo-menu-popup-md-item-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
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
    <td><ul><li>sm: "padding-x":"var(--kendo-spacing-1, 0.25rem)","padding-y":"var(--kendo-spacing-1, 0.25rem)","spacing":"var(--kendo-spacing-1\\.5, 0.375rem)","separator-height":"calc(1.4285714286 * 1em + var(--kendo-spacing-1, 0.25rem) * 2 + 1px * 2)"</li><li>md: "padding-x":"var(--kendo-spacing-2, 0.5rem)","padding-y":"var(--kendo-spacing-2, 0.5rem)","spacing":"var(--kendo-spacing-2, 0.5rem)","separator-height":"calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1\\.5, 0.375rem) * 2 + 1px * 2)"</li><li>lg: "padding-x":"var(--kendo-spacing-2\\.5, 0.625rem)","padding-y":"var(--kendo-spacing-2\\.5, 0.625rem)","spacing":"var(--kendo-spacing-2\\.5, 0.625rem)","separator-height":"calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 1px * 2)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

