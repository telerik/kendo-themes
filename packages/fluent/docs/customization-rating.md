---
title: Customizing Rating
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_rating
position: 9
---

# Customizing Rating

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
    <td>$kendo-rating-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Content spacing of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Normal color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-text</td>
    <td></td>
<td>

`$kendo-rating-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline</td>
    <td></td>
<td>

`currentColor`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline color of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-selected-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected hover color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * #{$kendo-line-height-md} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size of the rating.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

