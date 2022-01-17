---
title: Customizing Treeview
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_treeview
position: 9
---

# Customizing Treeview

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
    <td>$kendo-treeview-font-family</td>
    <td></td>
<td>


`$font-family`

</td>
<td>

`inherit`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size</td>
    <td></td>
<td>


`$font-size-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td></td>
<td>


`$line-height-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td></td>
<td>


`16px`

</td>
<td>

`16px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Indentation of child groups in treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x</td>
    <td></td>
<td>


`map-get( $spacing, 2 )`

</td>
<td>

`map-get( $spacing, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td></td>
<td>


`map-get( $spacing, 1 )`

</td>
<td>

`map-get( $spacing, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td></td>
<td>


`0px`

</td>
<td>

`0px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td></td>
<td>


`$border-radius`

</td>
<td>

`map-get( $spacing, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td></td>
<td>


`(
    sm: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 ) - map-get( $spacing, thin )
    ),
    md: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 )
    ),
    lg: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 ) + map-get( $spacing, thin )
    )
)`

</td>
<td>

`(
    sm: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 ) - map-get( $spacing, thin )
    ),
    md: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 )
    ),
    lg: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 1 ) + map-get( $spacing, thin )
    )
)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td></td>
<td>


`$component-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td></td>
<td>


`$hovered-bg`

</td>
<td>

`try-shade( $base-bg, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td></td>
<td>


`$hovered-text`

</td>
<td>

`$base-text`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td></td>
<td>


`$hovered-border`

</td>
<td>

`try-shade( $hovered-bg, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td></td>
<td>


`$hovered-gradient`

</td>
<td>

`$base-gradient`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td></td>
<td>


`$selected-bg`

</td>
<td>

`$primary`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td></td>
<td>


`$selected-text`

</td>
<td>

`contrast-wcag( $selected-bg )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td></td>
<td>


`$selected-border`

</td>
<td>

`try-shade( $selected-bg, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td></td>
<td>


`$selected-gradient`

</td>
<td>

`$base-gradient`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td></td>
<td>


`$focused-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td></td>
<td>


`transparent`

</td>
<td>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td></td>
<td>


`$link-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td></td>
<td>


`transparent`

</td>
<td>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td></td>
<td>


`$link-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td></td>
<td>


`transparent`

</td>
<td>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td></td>
<td>


`$link-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td></td>
<td>


`$kendo-treeview-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of a focused load more.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

