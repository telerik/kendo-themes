---
title: Customizing Pager
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_pager
position: 9
---

# Customizing Pager

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
    <td>$kendo-pager-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pager-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pager-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pager-sm-padding-x, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-pager-sm-padding-x, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pager-md-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pager-md-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pager-lg-padding-x, #{k-spacing(2.5)} )</code></td>
    <td><code>var(--kendo-pager-lg-padding-x, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pager-sm-padding-y, #{$kendo-pager-sm-padding-x} )</code></td>
    <td><code>var(--kendo-pager-sm-padding-y, var(--kendo-pager-sm-padding-x, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pager-md-padding-y, #{$kendo-pager-md-padding-x} )</code></td>
    <td><code>var(--kendo-pager-md-padding-y, var(--kendo-pager-md-padding-x, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pager-lg-padding-y, #{$kendo-pager-lg-padding-x} )</code></td>
    <td><code>var(--kendo-pager-lg-padding-y, var(--kendo-pager-lg-padding-x, var(--kendo-spacing-2\.5, 0.625rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pager-border-width, 1px )</code></td>
    <td><code>var(--kendo-pager-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-pager-font-family, var( --kendo-font-family, normal ) )</code></td>
    <td><code>var(--kendo-pager-font-family, var(--kendo-font-family, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-pager-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-pager-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-pager-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-pager-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pager-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-pager-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td>String</td>
    <td><code>var( --kendo-pager-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pager-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td>String</td>
    <td><code>var( --kendo-pager-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pager-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pager-focus-bg, #{$kendo-pager-bg} )</code></td>
    <td><code>var(--kendo-pager-focus-bg, var(--kendo-pager-bg, var(--kendo-color-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-pager-focus-text, #{$kendo-pager-text} )</code></td>
    <td><code>var(--kendo-pager-focus-text, var(--kendo-pager-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-pager-focus-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-pager-focus-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-pager-item-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-pager-item-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pager-item-spacing, null )</code></td>
    <td><code>var(--kendo-pager-item-spacing, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing around the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-group-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pager-sm-item-group-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pager-sm-item-group-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the item groups of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-item-group-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pager-md-item-group-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pager-md-item-group-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the item groups of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-item-group-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pager-lg-item-group-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pager-lg-item-group-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the item groups of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes-label-text</td>
    <td>String</td>
    <td><code>var( --kendo-pager-sizes-label-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pager-sizes-label-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pagers' sizes label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-info-label-text</td>
    <td>String</td>
    <td><code>var( --kendo-pager-info-label-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-pager-info-label-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pagers' info label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-pager-input-width, 5em )</code></td>
    <td><code>var(--kendo-pager-input-width, 5em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Inputs in the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-dropdown-width</td>
    <td>String</td>
    <td><code>var( --kendo-pager-dropdown-width, 5em )</code></td>
    <td><code>var(--kendo-pager-dropdown-width, 5em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-pager-sm-padding-x,
        padding-y: $kendo-pager-sm-padding-y,
        item-group-spacing: $kendo-pager-sm-item-group-spacing
    ),
    md: (
        padding-x: $kendo-pager-md-padding-x,
        padding-y: $kendo-pager-md-padding-y,
        item-group-spacing: $kendo-pager-md-item-group-spacing
    ),
    lg: (
        padding-x: $kendo-pager-lg-padding-x,
        padding-y: $kendo-pager-lg-padding-y,
        item-group-spacing: $kendo-pager-lg-item-group-spacing
    )
)</code></td>
    <td><ul><li>sm: "padding-x":"var(--kendo-pager-sm-padding-x, var(--kendo-spacing-1\\.5, 0.375rem))","padding-y":"var(--kendo-pager-sm-padding-y, var(--kendo-pager-sm-padding-x, var(--kendo-spacing-1\\.5, 0.375rem)))","item-group-spacing":"var(--kendo-pager-sm-item-group-spacing, var(--kendo-spacing-2, 0.5rem))"</li><li>md: "padding-x":"var(--kendo-pager-md-padding-x, var(--kendo-spacing-2, 0.5rem))","padding-y":"var(--kendo-pager-md-padding-y, var(--kendo-pager-md-padding-x, var(--kendo-spacing-2, 0.5rem)))","item-group-spacing":"var(--kendo-pager-md-item-group-spacing, var(--kendo-spacing-2, 0.5rem))"</li><li>lg: "padding-x":"var(--kendo-pager-lg-padding-x, var(--kendo-spacing-2\\.5, 0.625rem))","padding-y":"var(--kendo-pager-lg-padding-y, var(--kendo-pager-lg-padding-x, var(--kendo-spacing-2\\.5, 0.625rem)))","item-group-spacing":"var(--kendo-pager-lg-item-group-spacing, var(--kendo-spacing-2, 0.5rem))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Pager.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

