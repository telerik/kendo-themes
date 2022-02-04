---
title: Customizing Common
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_common
position: 9
---

# Customizing Common

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
    <td>$border-radius</td>
    <td>Number</td>
<td>

`map-get( $spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$base-bg</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #f0f0f0"></span>

`#f0f0f0`

</td>
<td>

<span class="color-preview" style="background-color: #f0f0f0"></span>

`#f0f0f0`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-text</td>
    <td>Color</td>
<td>

`$body-text`

</td>
<td>

<span class="color-preview" style="background-color: #272727"></span>

`#272727`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-border</td>
    <td>Color</td>
<td>

`try-shade( $base-bg, 2 )`

</td>
<td>

<span class="color-preview" style="background-color: #cacaca"></span>

`#cacaca`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-gradient</td>
    <td>List</td>
<td>

`rgba( white, .1 ), rgba( white, 0 )`

</td>
<td>

`rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-bg</td>
    <td>Color</td>
<td>

`try-shade( $base-bg, 1 )`

</td>
<td>

<span class="color-preview" style="background-color: #dddddd"></span>

`#dddddd`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-text</td>
    <td>Color</td>
<td>

`$base-text`

</td>
<td>

<span class="color-preview" style="background-color: #272727"></span>

`#272727`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-border</td>
    <td>Color</td>
<td>

`try-shade( $hovered-bg, 2 )`

</td>
<td>

<span class="color-preview" style="background-color: #bababa"></span>

`#bababa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-gradient</td>
    <td>List</td>
<td>

`$base-gradient`

</td>
<td>

`rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-bg</td>
    <td>Color</td>
<td>

`$primary`

</td>
<td>

<span class="color-preview" style="background-color: #f35800"></span>

`#f35800`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-text</td>
    <td>Color</td>
<td>

`contrast-wcag( $selected-bg )`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-border</td>
    <td>Color</td>
<td>

`try-shade( $selected-bg, 2 )`

</td>
<td>

<span class="color-preview" style="background-color: #cc4a00"></span>

`#cc4a00`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-gradient</td>
    <td>List</td>
<td>

`$base-gradient`

</td>
<td>

`rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

