---
title: Customizing List
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_list
position: 9
---

# Customizing List

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
    <td>$list-font-size</td>
    <td></td>
<td>


`$font-size-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-line-height</td>
    <td></td>
<td>


`$line-height-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-padding-x</td>
    <td></td>
<td>


`map-get( $spacing, 2 )`

</td>
<td>

`map-get( $spacing, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-padding-y</td>
    <td></td>
<td>


`map-get( $spacing, 1 )`

</td>
<td>

`map-get( $spacing, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-bg</td>
    <td></td>
<td>


`$component-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-text</td>
    <td></td>
<td>


`$component-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-border</td>
    <td></td>
<td>


`$component-border`

</td>
<td>

`rgba( if( $dark-theme, $white, $black ), .08 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-bg</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-text</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-border</td>
    <td></td>
<td>


`inherit`

</td>
<td>

`inherit`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-shadow</td>
    <td></td>
<td>


`0 5px 10px 0 rgba(0, 0, 0, .06)`

</td>
<td>

`0 5px 10px 0 rgba(0, 0, 0, .06)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-bg</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-text</td>
    <td></td>
<td>


`$component-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-hovered-bg</td>
    <td></td>
<td>


`$hovered-bg`

</td>
<td>

`try-shade( $base-bg, .5 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-hovered-text</td>
    <td></td>
<td>


`$hovered-text`

</td>
<td>

`$base-text`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-bg</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-text</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-shadow</td>
    <td></td>
<td>


`inset 0 0 0 2px rgba(0, 0, 0, .12)`

</td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, .12)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-selected-bg</td>
    <td></td>
<td>


`$selected-bg`

</td>
<td>

`$primary`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-selected-text</td>
    <td></td>
<td>


`$selected-text`

</td>
<td>

`contrast-wcag( $selected-bg )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-no-data-text</td>
    <td></td>
<td>


`$subtle-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the 'No Data' text.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

