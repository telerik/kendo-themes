---
title: Customizing TileLayout
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_tile-layout
position: 9
---

# Customizing TileLayout

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
    <td>$kendo-tile-layout-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-border-width, 0px )</code></td>
    <td><code>var(--kendo-tile-layout-border-width, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-bg</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-tile-layout-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-tile-layout-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-padding-y, #{$kendo-tile-layout-padding-x} )</code></td>
    <td><code>var(--kendo-tile-layout-padding-y, var(--kendo-tile-layout-padding-x, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TileLayout</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-hint-border-width, 1px )</code></td>
    <td><code>var(--kendo-tile-layout-hint-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-hint-border-radius, var( --kendo-border-radius-lg, initial ) )</code></td>
    <td><code>var(--kendo-tile-layout-hint-border-radius, var(--kendo-border-radius-lg, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-hint-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-tile-layout-hint-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-bg</td>
    <td>String</td>
    <td><code>var( --kendo-tile-layout-hint-bg, rgba(255, 255, 255, .2) )</code></td>
    <td><code>var(--kendo-tile-layout-hint-bg, rgba(255, 255, 255, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout hint.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

