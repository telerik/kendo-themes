---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_badge
position: 9
---

# Customizing Badge

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
    <td>$kendo-badge-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-text</td>
    <td></td>
    <td><code>var( --kendo-component-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-weight</td>
    <td></td>
    <td><code>var( --kendo-font-weight, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height-xs, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-min-width</td>
    <td></td>
    <td><code>calc( #{$kendo-badge-sm-line-height} * 1em + #{$kendo-badge-sm-padding-y} * 2 + #{$kendo-badge-border-width} * 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Badge min width used for circle badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-badge-sm-padding-x,
        padding-y: $kendo-badge-sm-padding-y,
        font-size: $kendo-badge-sm-font-size,
        line-height: $kendo-badge-sm-line-height,
        min-width: $kendo-badge-sm-min-width
    ),
    md: (
        padding-x: $kendo-badge-md-padding-x,
        padding-y: $kendo-badge-md-padding-y,
        font-size: $kendo-badge-md-font-size,
        line-height: $kendo-badge-md-line-height,
        min-width: $kendo-badge-md-min-width
    ),
    lg: (
        padding-x: $kendo-badge-lg-padding-x,
        padding-y: $kendo-badge-lg-padding-y,
        font-size: $kendo-badge-lg-font-size,
        line-height: $kendo-badge-lg-line-height,
        min-width: $kendo-badge-lg-min-width
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the badge.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

