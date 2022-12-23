---
title: Customizing Common
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_common
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
    <td>$kendo-border-radius</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

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

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

</td>
<td>

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

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

`$kendo-body-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

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

`rgba( black, .08 )`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

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

`rgba( black, 0 ), rgba( black, .02 )`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>Color</td>
<td>

`k-try-shade( $base-bg, .5 )`

</td>
<td>

<span class="color-preview" style="background-color: #f0f0f0"></span>

`#f0f0f0`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>Color</td>
<td>

`$base-text`

</td>
<td>

<span class="color-preview" style="background-color: #424242"></span>

`#424242`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>Color</td>
<td>

`$base-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>List</td>
<td>

`$base-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>Color</td>
<td>

`$kendo-color-primary`

</td>
<td>

<span class="color-preview" style="background-color: #ff6358"></span>

`#ff6358`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>Color</td>
<td>

`k-contrast-legacy( $kendo-selected-bg )`

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
    <td>$kendo-selected-border</td>
    <td>Color</td>
<td>

`$base-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>List</td>
<td>

`$base-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

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

