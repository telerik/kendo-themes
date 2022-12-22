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
    <td>String</td>
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
    <td>Number</td>
<td>

`$font-size-md`

</td>
<td>

`14px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td>Number</td>
<td>

`$line-height-md`

</td>
<td>

`1.4285714286`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td>Number</td>
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
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 2 )`

</td>
<td>

`8px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td>Number</td>
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
    <td>Number</td>
<td>

`$kendo-border-radius-md`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td>Map</td>
<td>

`(
    sm: (
        font-size: $kendo-treeview-font-size-sm,
        line-height: $kendo-treeview-line-height-sm,
        item-padding-x: $kendo-treeview-item-padding-x-sm,
        item-padding-y: $kendo-treeview-item-padding-y-sm
    ),
    md: (
        font-size: $kendo-treeview-font-size-md,
        line-height: $kendo-treeview-line-height-md,
        item-padding-x: $kendo-treeview-item-padding-x-md,
        item-padding-y: $kendo-treeview-item-padding-y-md
    ),
    lg: (
        font-size: $kendo-treeview-font-size-lg,
        line-height: $kendo-treeview-line-height-lg,
        item-padding-x: $kendo-treeview-item-padding-x-lg,
        item-padding-y: $kendo-treeview-item-padding-y-lg
    )
)`

</td>
<td>

`(sm: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 2px), md: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 4px), lg: (font-size: 16px, line-height: 1.5, item-padding-x: 12px, item-padding-y: 8px))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td>Null</td>
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
    <td>Color</td>
<td>

`$component-text`

</td>
<td>

<span class="color-preview" style="background-color: #272727"></span>

`#272727`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td>Null</td>
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
    <td>Color</td>
<td>

`$hovered-bg`

</td>
<td>

<span class="color-preview" style="background-color: #dddddd"></span>

`#dddddd`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td>Color</td>
<td>

`$hovered-text`

</td>
<td>

<span class="color-preview" style="background-color: #272727"></span>

`#272727`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td>Color</td>
<td>

`$hovered-border`

</td>
<td>

<span class="color-preview" style="background-color: #bababa"></span>

`#bababa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td>List</td>
<td>

`$hovered-gradient`

</td>
<td>

`rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td>Color</td>
<td>

`$selected-bg`

</td>
<td>

<span class="color-preview" style="background-color: #f35800"></span>

`#f35800`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td>Color</td>
<td>

`$selected-text`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td>Color</td>
<td>

`$selected-border`

</td>
<td>

<span class="color-preview" style="background-color: #cc4a00"></span>

`#cc4a00`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td>List</td>
<td>

`$selected-gradient`

</td>
<td>

`rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td>List</td>
<td>

`$focused-shadow`

</td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, 0.13)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td>Color</td>
<td>

`transparent`

</td>
<td>

<span class="color-preview" style="background-color: transparent"></span>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td>Color</td>
<td>

`$link-text`

</td>
<td>

<span class="color-preview" style="background-color: #f35800"></span>

`#f35800`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td>Null</td>
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
    <td>Color</td>
<td>

`transparent`

</td>
<td>

<span class="color-preview" style="background-color: transparent"></span>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td>Color</td>
<td>

`$link-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #cc4a00"></span>

`#cc4a00`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td>Null</td>
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
    <td>Color</td>
<td>

`transparent`

</td>
<td>

<span class="color-preview" style="background-color: transparent"></span>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td>Color</td>
<td>

`$link-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #cc4a00"></span>

`#cc4a00`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td>Null</td>
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
    <td>List</td>
<td>

`$kendo-treeview-item-focus-shadow`

</td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, 0.13)`

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

