---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_badge
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

`$badge-border-radius`

</td>
<td>

`0.375rem`

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

`$badge-padding-x`

</td>
<td>

`0.65em`

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

`$badge-padding-y`

</td>
<td>

`0.35em`

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

`$badge-font-size`

</td>
<td>

`0.75em`

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

`calc( 1em + 0.7em + 2px)`

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

`(sm: (padding-x: 0.325em, padding-y: 0.175em, font-size: 0.75em, line-height: 1, min-width: calc( 1em + 0.35em + 2px )), md: (padding-x: 0.65em, padding-y: 0.35em, font-size: 0.75em, line-height: 1, min-width: calc( 1em + 0.7em + 2px )), lg: (padding-x: 0.975em, padding-y: 0.525em, font-size: 0.75em, line-height: 1, min-width: calc( 1em + 1.05em + 2px )))`

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

