---
title: Customizing Component
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_component
position: 9
---

# Customizing Component

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
    <td>$component-bg</td>
    <td>Color</td>
<td>

`$body-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$kendo-grid-bg: $component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-text</td>
    <td>Color</td>
<td>

`$body-text`

</td>
<td>

<span class="color-preview" style="background-color: #212529"></span>

`#212529`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-border</td>
    <td>Color</td>
<td>

`if( k-is-light( $component-bg ), $gray-300, $gray-700 )`

</td>
<td>

<span class="color-preview" style="background-color: #dee2e6"></span>

`#dee2e6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: component-border !default;`.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

