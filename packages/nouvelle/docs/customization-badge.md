---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle_badge
position: 9
---

# Customizing Badge

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
    <td>$kendo-badge-border-width</td>
    <td>Number</td>
<td>

`1px`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-family</td>
    <td>Null</td>
<td>

`$kendo-font-family`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-weight</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-x</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 0.5 )`

</td>
<td>

`0.125rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-y</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 0.5 )`

</td>
<td>

`0.125rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-font-size</td>
    <td>Number</td>
<td>

`$kendo-font-size-xs`

</td>
<td>

`0.75rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-line-height</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-min-width</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-badge-sm-line-height} * 1em + #{$kendo-badge-sm-padding-y} * 2 + #{$kendo-badge-border-width} * 2 )`

</td>
<td>

`calc(  * 1em + 0.125rem * 2 + 1px * 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Badge min width used for circle badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td>Map</td>
<td>

`(
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
)`

</td>
<td>

`(sm: (padding-x: 0.125rem, padding-y: 0.125rem, font-size: 0.75rem, line-height: null, min-width: calc(  * 1em + 0.125rem * 2 + 1px * 2 )), md: (padding-x: 0.25rem, padding-y: 0.25rem, font-size: 0.875rem, line-height: null, min-width: calc(  * 1em + 0.25rem * 2 + 1px * 2 )), lg: (padding-x: 0.375rem, padding-y: 0.375rem, font-size: 1rem, line-height: null, min-width: calc(  * 1em + 0.375rem * 2 + 1px * 2 )))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size map for the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-theme</td>
    <td>Map</td>
<td>

`k-process-variant-matrices(
    $kendo-badge-theme-matrix,
    $kendo-badge-palette-matrix
)`

</td>
<td>

`(solid-neutral: (bg: #ededed, text: #494949, border: #ededed, gradient: null, shadow: null, outline: null), solid-inverse: (bg: #494949, text: #ffffff, border: #494949, gradient: null, shadow: null, outline: null), solid-primary: (bg: #622331, text: #ffffff, border: #622331, gradient: null, shadow: null, outline: null), solid-info: (bg: #0969da, text: #ffffff, border: #0969da, gradient: null, shadow: null, outline: null), solid-success: (bg: #1a7f37, text: #ffffff, border: #1a7f37, gradient: null, shadow: null, outline: null), solid-warning: (bg: #bc4c00, text: #ffffff, border: #bc4c00, gradient: null, shadow: null, outline: null), solid-error: (bg: #cf222e, text: #ffffff, border: #cf222e, gradient: null, shadow: null, outline: null), outline-neutral: (bg: transparent, text: #767676, border: #767676, gradient: null, shadow: null, outline: null), outline-inverse: (bg: transparent, text: #494949, border: #494949, gradient: null, shadow: null, outline: null), outline-primary: (bg: transparent, text: #622331, border: #622331, gradient: null, shadow: null, outline: null), outline-info: (bg: transparent, text: #0969da, border: #0969da, gradient: null, shadow: null, outline: null), outline-success: (bg: transparent, text: #1a7f37, border: #1a7f37, gradient: null, shadow: null, outline: null), outline-warning: (bg: transparent, text: #bc4c00, border: #bc4c00, gradient: null, shadow: null, outline: null), outline-error: (bg: transparent, text: #cf222e, border: #cf222e, gradient: null, shadow: null, outline: null))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map of the badge.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

