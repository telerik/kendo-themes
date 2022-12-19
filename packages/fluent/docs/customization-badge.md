---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_badge
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
    <td>$kendo-badge-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, hair )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, thin )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, thin )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size-xs, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height-xs, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width-sm</td>
    <td></td>
<td>

`calc( #{$kendo-badge-line-height-sm} * 1em + #{$kendo-badge-padding-y-sm} * 2 + #{$kendo-badge-border-width} * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Badge min width used for circle badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td></td>
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

