---
title: Customizing Table
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_table
position: 9
---

# Customizing Table

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
    <td>$kendo-table-border-width</td>
    <td>Number</td>
<td>

`1px`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td>Number</td>
<td>

`$grid-cell-vertical-border-width`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td>Number</td>
<td>

`$grid-cell-horizontal-border-width`

</td>
<td>

`0px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-font-size</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-line-height</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-x</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-y</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td>Map</td>
<td>

`(
    sm: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        cell-padding-x: map-get( $spacing, 2 ),
        cell-padding-y: map-get( $spacing, 2 ) - map-get( $spacing, thin )
    ),
    md: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        cell-padding-x: map-get( $spacing, 2 ),
        cell-padding-y: map-get( $spacing, 2 )
    ),
    lg: (
        font-size: $font-size-md,
        line-height: $line-height-md,
        cell-padding-x: map-get( $spacing, 2 ),
        cell-padding-y: map-get( $spacing, 2 ) + map-get( $spacing, thin )
    )
)`

</td>
<td>

`(sm: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 6px), md: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 8px), lg: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 10px))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td>Color</td>
<td>

`$grid-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td>Color</td>
<td>

`$grid-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>Color</td>
<td>

`$grid-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>Color</td>
<td>

`$grid-header-bg`

</td>
<td>

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>Color</td>
<td>

`$grid-header-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>Color</td>
<td>

`$grid-header-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>Color</td>
<td>

`$grid-footer-bg`

</td>
<td>

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>Color</td>
<td>

`$grid-footer-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>Color</td>
<td>

`$grid-footer-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>Color</td>
<td>

`$kendo-table-header-bg`

</td>
<td>

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>Color</td>
<td>

`$kendo-table-header-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>Color</td>
<td>

`$kendo-table-header-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>Color</td>
<td>

`$grid-alt-bg`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span>

`rgba(0, 0, 0, 0.04)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>Null</td>
<td>

`$grid-alt-text`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>Null</td>
<td>

`$grid-alt-border`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>Color</td>
<td>

`$grid-hovered-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ededed"></span>

`#ededed`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>Null</td>
<td>

`$grid-hovered-text`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>Null</td>
<td>

`$grid-hovered-border`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>List</td>
<td>

`$grid-focused-shadow`

</td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, 0.12)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>Color</td>
<td>

`$grid-selected-bg`

</td>
<td>

<span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span>

`rgba(255, 99, 88, 0.25)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>Null</td>
<td>

`$grid-selected-text`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>Null</td>
<td>

`$grid-selected-border`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

