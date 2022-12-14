---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle_color-system
position: 9
---

# Customizing Color System

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
    <td>$kendo-primary</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #622331"></span>

`#622331`

</td>
<td>

<span class="color-preview" style="background-color: #622331"></span>

`#622331`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-primary-contrast</td>
    <td>Color</td>
<td>

`k-contrast-color( $kendo-primary )`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the accent color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-info</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #0969da"></span>

`#0969da`

</td>
<td>

<span class="color-preview" style="background-color: #0969da"></span>

`#0969da`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-success</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #1a7f37"></span>

`#1a7f37`

</td>
<td>

<span class="color-preview" style="background-color: #1a7f37"></span>

`#1a7f37`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-warning</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #bc4c00"></span>

`#bc4c00`

</td>
<td>

<span class="color-preview" style="background-color: #bc4c00"></span>

`#bc4c00`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-error</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #cf222e"></span>

`#cf222e`

</td>
<td>

<span class="color-preview" style="background-color: #cf222e"></span>

`#cf222e`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dark</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #404040"></span>

`#404040`

</td>
<td>

<span class="color-preview" style="background-color: #404040"></span>

`#404040`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-light</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #ebebeb"></span>

`#ebebeb`

</td>
<td>

<span class="color-preview" style="background-color: #ebebeb"></span>

`#ebebeb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inverse</td>
    <td>Color</td>
<td>

`if( $dark-theme, $kendo-light, $kendo-dark )`

</td>
<td>

<span class="color-preview" style="background-color: #404040"></span>

`#404040`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

