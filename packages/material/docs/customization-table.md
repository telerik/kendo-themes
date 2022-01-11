---
title: Customizing Table
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_table
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
    <td>$table-border-width</td>
    <td></td>
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
    <td>$table-cell-vertical-border-width</td>
    <td></td>
<td>


`$grid-cell-vertical-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-horizontal-border-width</td>
    <td></td>
<td>


`$grid-cell-horizontal-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$table-font-size</td>
    <td></td>
<td>


`$font-size`

</td>
<td>

`14px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-padding-x</td>
    <td></td>
<td>


`24px`

</td>
<td>

`24px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-padding-y</td>
    <td></td>
<td>


`10px`

</td>
<td>

`10px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-bg</td>
    <td></td>
<td>


`$grid-bg`

</td>
<td>

`map-get($theme, component-bg)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-text</td>
    <td></td>
<td>


`$grid-text`

</td>
<td>

`map-get($theme, component-text)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-border</td>
    <td></td>
<td>


`$grid-border`

</td>
<td>

`map-get($theme, component-border)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-bg</td>
    <td></td>
<td>


`$grid-header-bg`

</td>
<td>

`map-get($theme, component-bg)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-text</td>
    <td></td>
<td>


`$grid-header-text`

</td>
<td>

`if($theme-type == dark, $light-secondary-text, $dark-secondary-text)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-border</td>
    <td></td>
<td>


`$grid-header-border`

</td>
<td>

`map-get($theme, component-border)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-bg</td>
    <td></td>
<td>


`$grid-footer-bg`

</td>
<td>

`map-get($theme, component-bg)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-text</td>
    <td></td>
<td>


`$grid-footer-text`

</td>
<td>

`if($theme-type == dark, $light-secondary-text, $dark-secondary-text)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-border</td>
    <td></td>
<td>


`$grid-footer-border`

</td>
<td>

`map-get($theme, component-border)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-bg</td>
    <td></td>
<td>


`$table-header-bg`

</td>
<td>

`map-get($theme, component-bg)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-text</td>
    <td></td>
<td>


`$table-header-text`

</td>
<td>

`if($theme-type == dark, $light-secondary-text, $dark-secondary-text)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-border</td>
    <td></td>
<td>


`$table-header-border`

</td>
<td>

`map-get($theme, component-border)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-alt-row-bg</td>
    <td></td>
<td>


`$grid-alt-bg`

</td>
<td>

`transparent`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-alt-row-text</td>
    <td></td>
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
    <td>$table-alt-row-border</td>
    <td></td>
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
    <td>$table-hover-bg</td>
    <td></td>
<td>


`$grid-hovered-bg`

</td>
<td>

`rgba( contrast-wcag( $grid-bg ), .07 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-hover-text</td>
    <td></td>
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
    <td>$table-hover-border</td>
    <td></td>
<td>


`$grid-hovered-border`

</td>
<td>

`map-get($theme, component-border)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-focus-bg</td>
    <td></td>
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
    <td>$table-focus-text</td>
    <td></td>
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
    <td>$table-focus-border</td>
    <td></td>
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
    <td>$table-focus-shadow</td>
    <td></td>
<td>


`$grid-focused-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-selected-bg</td>
    <td></td>
<td>


`$grid-selected-bg`

</td>
<td>

`rgba( contrast-wcag( $grid-bg ), .04 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-selected-text</td>
    <td></td>
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
    <td>$table-selected-border</td>
    <td></td>
<td>


`$grid-selected-border`

</td>
<td>

`map-get($theme, component-border)`

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

