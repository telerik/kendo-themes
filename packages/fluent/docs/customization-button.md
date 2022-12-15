---
title: Customizing Button
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_button
position: 9
---

# Customizing Button

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
    <td>$kendo-actions-button-spacing</td>
    <td></td>
<td>

`map-get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-width</td>
    <td></td>
<td>

`map-get( $kendo-spacing, hair )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x-sm</td>
    <td></td>
<td>

`map-get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y-sm</td>
    <td></td>
<td>

`map-get( $kendo-spacing, 1  )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td></td>
<td>

`calc( ( #{$kendo-button-line-height-md} * 1em ) + ( #{$kendo-button-padding-y-md} * 2 ) + ( #{$kendo-button-border-width} * 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td></td>
<td>

`calc( ( #{$kendo-button-line-height-md} * 1em ) + ( #{$kendo-button-padding-y-md} * 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated inner height of the button. Without the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-button-padding-x-sm,
        padding-y: $kendo-button-padding-y-sm,
        font-size: $kendo-button-font-size-sm,
        line-height: $kendo-button-line-height-sm
    ),
    md: (
        padding-x: $kendo-button-padding-x-md,
        padding-y: $kendo-button-padding-y-md,
        font-size: $kendo-button-font-size-md,
        line-height: $kendo-button-line-height-md
    ),
    lg: (
        padding-x: $kendo-button-padding-x-lg,
        padding-y: $kendo-button-padding-y-lg,
        font-size: $kendo-button-font-size-lg,
        line-height: $kendo-button-line-height-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-spacing</td>
    <td></td>
<td>

`map-get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Content spacing of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-offset</td>
    <td></td>
<td>

`map-get( $kendo-spacing, thin )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-width</td>
    <td></td>
<td>

`map-get( $kendo-spacing, hair )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-focus-offset</td>
    <td></td>
<td>

`map-get( $kendo-spacing, hair )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the flat focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-focus-outline-width</td>
    <td></td>
<td>

`map-get( $kendo-spacing, thin )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the flat focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-link-focus-offset</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the link focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-link-focus-outline-width</td>
    <td></td>
<td>

`map-get( $kendo-spacing, hair )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the flat focused button.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

