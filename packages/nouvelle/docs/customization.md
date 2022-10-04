---
title: Customization
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle
position: 9
---

# Customization

The following table lists the available variables for customizing the Nouvelle theme.

## Variables

### Common

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
    <td>$interactive-bg</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$interactive-text</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$interactive-border</td>
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
    <td>$interactive-gradient</td>
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
    <td>$hover-bg</td>
    <td>Color</td>
<td>

`k-color-shade( $interactive-bg, .5 )`

</td>
<td>

<span class="color-preview" style="background-color: #ececec"></span>

`#ececec`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hover-text</td>
    <td>Color</td>
<td>

`$interactive-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hover items.</div></div>
    </td>
</tr>
<tr>
    <td>$hover-border</td>
    <td>Color</td>
<td>

`rgba( black, .15 )`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.15)"></span>

`rgba(0, 0, 0, 0.15)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hover items.</div></div>
    </td>
</tr>
<tr>
    <td>$hover-gradient</td>
    <td>List</td>
<td>

`rgba( black, 0 ), rgba( black, .02 )`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hover items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-bg</td>
    <td>Color</td>
<td>

`$primary`

</td>
<td>

<span class="color-preview" style="background-color: #622331"></span>

`#622331`

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

`k-contrast-color( $selected-bg )`

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

`rgba( black, .1 )`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1)"></span>

`rgba(0, 0, 0, 0.1)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-gradient</td>
    <td>String</td>
<td>

`none`

</td>
<td>

`none`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Autocomplete

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
    <td>$autocomplete-bg</td>
    <td>Color</td>
<td>

`$kendo-input-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-text</td>
    <td>Color</td>
<td>

`$kendo-input-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-border</td>
    <td>Color</td>
<td>

`$kendo-input-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-input-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-hover-text</td>
    <td>Color</td>
<td>

`$kendo-input-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-hover-border</td>
    <td>Color</td>
<td>

`$kendo-input-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-focus-text</td>
    <td>Color</td>
<td>

`$kendo-input-focus-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-input-focus-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus autocomplete.</div></div>
    </td>
</tr>
<tr>
    <td>$autocomplete-focus-border</td>
    <td>Color</td>
<td>

`$kendo-input-focus-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus autocomplete.</div></div>
    </td>
</tr>
</tbody>
</table>

### Button

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
    <td>$kendo-button-bg</td>
    <td>Color</td>
<td>

`$interactive-bg`

</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>Color</td>
<td>

`$interactive-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>Color</td>
<td>

`$interactive-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>List</td>
<td>

`$interactive-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td>Color</td>
<td>

`k-try-shade( $kendo-button-bg, .5 )`

</td>
<td>

<span class="color-preview" style="background-color: #ececec"></span>

`#ececec`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td>Color</td>
<td>

`$kendo-button-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td>Color</td>
<td>

`$kendo-button-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-gradient</td>
    <td>List</td>
<td>

`$kendo-button-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-button-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ececec"></span>

`#ececec`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-text</td>
    <td>Color</td>
<td>

`$kendo-button-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td>Color</td>
<td>

`$kendo-button-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-gradient</td>
    <td>List</td>
<td>

`$kendo-button-hover-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of focus buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td>Color</td>
<td>

`k-try-shade( $kendo-button-bg, 1 )`

</td>
<td>

<span class="color-preview" style="background-color: #e2e2e2"></span>

`#e2e2e2`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td>Color</td>
<td>

`$kendo-button-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td>Color</td>
<td>

`$kendo-button-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of pressed buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-gradient</td>
    <td>List</td>
<td>

`$kendo-button-gradient`

</td>
<td>

`rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of pressed buttons.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color System

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
    <td>$primary</td>
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
    <td>$primary-contrast</td>
    <td>Color</td>
<td>

`k-contrast-color( $primary )`

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
    <td>$secondary</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary-contrast</td>
    <td>Color</td>
<td>

`k-contrast-color( $secondary )`

</td>
<td>

<span class="color-preview" style="background-color: black"></span>

`black`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #03a9f4"></span>

`#03a9f4`

</td>
<td>

<span class="color-preview" style="background-color: #03a9f4"></span>

`#03a9f4`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary-contrast</td>
    <td>Color</td>
<td>

`k-contrast-color( $tertiary )`

</td>
<td>

<span class="color-preview" style="background-color: black"></span>

`black`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$info</td>
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
    <td>$success</td>
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
    <td>$warning</td>
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
    <td>$error</td>
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
    <td>$dark</td>
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
    <td>$light</td>
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
    <td>$inverse</td>
    <td>Color</td>
<td>

`if( $dark-theme, $light, $dark )`

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

### Combobox

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
    <td>$combobox-bg</td>
    <td>Color</td>
<td>

`$kendo-input-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-text</td>
    <td>Color</td>
<td>

`$kendo-input-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-border</td>
    <td>Color</td>
<td>

`$kendo-input-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-input-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-hover-text</td>
    <td>Color</td>
<td>

`$kendo-input-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-hover-border</td>
    <td>Color</td>
<td>

`$kendo-input-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-focus-text</td>
    <td>Color</td>
<td>

`$kendo-input-focus-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-input-focus-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus combobox.</div></div>
    </td>
</tr>
<tr>
    <td>$combobox-focus-border</td>
    <td>Color</td>
<td>

`$kendo-input-focus-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus combobox.</div></div>
    </td>
</tr>
</tbody>
</table>

### Component

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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$grid-bg: $component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-text</td>
    <td>Color</td>
<td>

`$body-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$grid-text: component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-border</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$grid-border: component-border !default;`.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropdownlist

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
    <td>$dropdownlist-bg</td>
    <td>Color</td>
<td>

`$kendo-button-bg`

</td>
<td>

<span class="color-preview" style="background-color: #f6f6f6"></span>

`#f6f6f6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-text</td>
    <td>Color</td>
<td>

`$kendo-button-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-border</td>
    <td>Color</td>
<td>

`$kendo-button-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-button-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ececec"></span>

`#ececec`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-hover-text</td>
    <td>Color</td>
<td>

`$kendo-button-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-hover-border</td>
    <td>Color</td>
<td>

`$kendo-button-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-focus-text</td>
    <td>Color</td>
<td>

`$kendo-button-active-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-button-active-bg`

</td>
<td>

<span class="color-preview" style="background-color: #e2e2e2"></span>

`#e2e2e2`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus dropdownlist.</div></div>
    </td>
</tr>
<tr>
    <td>$dropdownlist-focus-border</td>
    <td>Color</td>
<td>

`$kendo-button-active-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus dropdownlist.</div></div>
    </td>
</tr>
</tbody>
</table>

### Input

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
    <td>$kendo-input-bg</td>
    <td>Color</td>
<td>

`$component-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-text</td>
    <td>Color</td>
<td>

`$component-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>Color</td>
<td>

`$component-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-input-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-text</td>
    <td>Color</td>
<td>

`$kendo-input-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-border</td>
    <td>Color</td>
<td>

`k-try-shade( $kendo-input-border, 1 )`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-input-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-text</td>
    <td>Color</td>
<td>

`$kendo-input-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-border</td>
    <td>Color</td>
<td>

`$kendo-input-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus input.</div></div>
    </td>
</tr>
</tbody>
</table>

### List

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
    <td>$kendo-list-bg</td>
    <td>Color</td>
<td>

`$component-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-text</td>
    <td>Color</td>
<td>

`$component-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-border</td>
    <td>Color</td>
<td>

`$component-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the list.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popup

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
    <td>$popup-bg</td>
    <td>Color</td>
<td>

`k-color-mix( black, $component-bg, 2% )`

</td>
<td>

<span class="color-preview" style="background-color: #fafafa"></span>

`#fafafa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$popup-text</td>
    <td>Color</td>
<td>

`$component-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$popup-border</td>
    <td>Color</td>
<td>

`$component-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Textbox

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
    <td>$kendo-textbox-bg</td>
    <td>Color</td>
<td>

`$kendo-input-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-text</td>
    <td>Color</td>
<td>

`$kendo-input-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-border</td>
    <td>Color</td>
<td>

`$kendo-input-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span>

`rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-input-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-hover-text</td>
    <td>Color</td>
<td>

`$kendo-input-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-hover-border</td>
    <td>Color</td>
<td>

`$kendo-input-hover-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-focus-text</td>
    <td>Color</td>
<td>

`$kendo-input-focus-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focus textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-input-focus-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focus textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-textbox-focus-border</td>
    <td>Color</td>
<td>

`$kendo-input-focus-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1536)"></span>

`rgba(0, 0, 0, 0.1536)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of focus textbox.</div></div>
    </td>
</tr>
</tbody>
</table>

### Typography

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
    <td>$font-size</td>
    <td>Number</td>
<td>

`14px`

</td>
<td>

`14px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family</td>
    <td>String</td>
<td>

`inherit`

</td>
<td>

`inherit`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family-monospace</td>
    <td>List</td>
<td>

`SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace`

</td>
<td>

`SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
<tr>
    <td>$line-height</td>
    <td>Number</td>
<td>

`(20 / 14)`

</td>
<td>

`1.4285714286`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $font-size.</div></div>
    </td>
</tr>
</tbody>
</table>




## Mixins




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

