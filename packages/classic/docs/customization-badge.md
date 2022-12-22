---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_badge
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-radius</td>
    <td>Number</td>
<td>

`$kendo-border-radius-md`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size</td>
    <td>Number</td>
<td>

`$font-size-xs`

</td>
<td>

`10px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height</td>
    <td>Number</td>
<td>

`1`

</td>
<td>

`1`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-badge-line-height * 1em} + #{$kendo-badge-padding-y * 2} + #{$kendo-badge-border-width * 2})`

</td>
<td>

`calc( 1em + 8px + 2px)`

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
        padding-x: $kendo-badge-padding-x-sm,
        padding-y: $kendo-badge-padding-y-sm,
        font-size: $kendo-badge-font-size-sm,
        line-height: $kendo-badge-line-height-sm,
        min-width: $kendo-badge-min-width-sm
    ),
    md: (
        padding-x: $kendo-badge-padding-x-md,
        padding-y: $kendo-badge-padding-y-md,
        font-size: $kendo-badge-font-size-md,
        line-height: $kendo-badge-line-height-md,
        min-width: $kendo-badge-min-width-md
    ),
    lg: (
        padding-x: $kendo-badge-padding-x-lg,
        padding-y: $kendo-badge-padding-y-lg,
        font-size: $kendo-badge-font-size-lg,
        line-height: $kendo-badge-line-height-lg,
        min-width: $kendo-badge-min-width-lg
    )
)`

</td>
<td>

`(sm: (padding-x: 2px, padding-y: 2px, font-size: 10px, line-height: 1, min-width: calc( 1em + 4px + 2px )), md: (padding-x: 4px, padding-y: 4px, font-size: 10px, line-height: 1, min-width: calc( 1em + 8px + 2px )), lg: (padding-x: 6px, padding-y: 6px, font-size: 10px, line-height: 1, min-width: calc( 1em + 12px + 2px )))`

</td>
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

