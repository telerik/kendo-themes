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
    <td>$kendo-interactive-bg</td>
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
    <td>$kendo-interactive-text</td>
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
    <td>$kendo-interactive-border</td>
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
    <td>$kendo-interactive-gradient</td>
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

`k-color-shade( $kendo-component-bg, .5 )`

</td>
<td>

<span class="color-preview" style="background-color: whitesmoke"></span>

`whitesmoke`

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

`$kendo-component-text`

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
    <td>$kendo-hover-border</td>
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
    <td>$kendo-hover-gradient</td>
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
    <td>$kendo-selected-bg</td>
    <td>Color</td>
<td>

`$kendo-primary`

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
    <td>$kendo-selected-text</td>
    <td>Color</td>
<td>

`k-contrast-color( $kendo-selected-bg )`

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
    <td>$kendo-selected-gradient</td>
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

### Actions

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
    <td>$kendo-actions-padding-x</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 2 )`

</td>
<td>

`0.5rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-padding-y</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 2 )`

</td>
<td>

`0.5rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-border-width</td>
    <td>List</td>
<td>

`0 0 0 0`

</td>
<td>

`0 0 0 0`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of actions container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-spacing</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 2 )`

</td>
<td>

`0.5rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between items in actions container</div></div>
    </td>
</tr>
</tbody>
</table>

### Actions-list

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
    <td>$kendo-actions-list-spacing</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`0.25rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between items in actions list</div></div>
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

`$kendo-interactive-bg`

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

`$kendo-interactive-text`

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

`$kendo-interactive-border`

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

`$kendo-interactive-gradient`

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
    <td>$kendo-component-bg</td>
    <td>Color</td>
<td>

`$kendo-body-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$kendo-grid-bg: $kendo-component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-text</td>
    <td>Color</td>
<td>

`$kendo-body-text`

</td>
<td>

<span class="color-preview" style="background-color: #656565"></span>

`#656565`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
</tbody>
</table>

### Icon

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
    <td>$kendo-icon-size</td>
    <td>Number</td>
<td>

`1rem`

</td>
<td>

`1rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-md</td>
    <td>Number</td>
<td>

`1rem`

</td>
<td>

`1rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-lg</td>
    <td>Number</td>
<td>

`1.25rem`

</td>
<td>

`1.25rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the large icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-spacing</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`0.25rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the icons.</div></div>
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

`$kendo-component-bg`

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

`$kendo-component-text`

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

`$kendo-component-border`

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
    <td>$kendo-popup-bg</td>
    <td>Color</td>
<td>

`$kendo-component-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-text</td>
    <td>Color</td>
<td>

`$kendo-component-text`

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
    <td>$kendo-popup-border</td>
    <td>Color</td>
<td>

`$kendo-component-border`

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
    <td>$kendo-font-size-xs</td>
    <td>Number</td>
<td>

`.75rem`

</td>
<td>

`0.75rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
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
    <td>$kendo-font-family-monospace</td>
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
    <td>$kendo-line-height-sm</td>
    <td>Number</td>
<td>

`1.25rem`

</td>
<td>

`1.25rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $font-size.</div></div>
    </td>
</tr>
</tbody>
</table>




## Mixins

### `exports`
Outputs a module once, no matter how many times it is included.


#### Parameters
- name : `String` - The name of the exported module.



## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

