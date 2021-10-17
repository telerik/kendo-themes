---
title: Customization
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap
position: 9
---

# Customization

The following table lists the available variables for customizing the Bootstrap theme.

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
    <td>$border-radius</td>
    <td></td>
    <td>$border-radius</td>
    <td>$border-radius</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$base-bg</td>
    <td></td>
    <td>$gray-100</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-border</td>
    <td></td>
    <td>try-shade( $base-bg, 1 )</td>
    <td>try-shade( $base-bg, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-bg</td>
    <td></td>
    <td>$gray-200</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-text</td>
    <td></td>
    <td>$base-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-border</td>
    <td></td>
    <td>try-shade( $hovered-bg, 1 )</td>
    <td>try-shade( $hovered-bg, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-bg</td>
    <td></td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-text</td>
    <td></td>
    <td>contrast-wcag( $selected-bg )</td>
    <td>contrast-wcag( $selected-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-border</td>
    <td></td>
    <td>try-shade( $selected-bg, 1 )</td>
    <td>try-shade( $selected-bg, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
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
    <td>$kendo-button-border-width</td>
    <td></td>
    <td>$btn-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td></td>
    <td>$btn-border-radius</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x</td>
    <td></td>
    <td>$btn-padding-x</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y</td>
    <td></td>
    <td>$btn-padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td></td>
    <td>$btn-font-family</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size</td>
    <td></td>
    <td>$btn-font-size</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height</td>
    <td></td>
    <td>$btn-line-height</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td></td>
    <td>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} + #{$kendo-button-border-width * 2} )</td>
    <td>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} + #{$kendo-button-border-width * 2} )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td></td>
    <td>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} )</td>
    <td>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated inner height of the button. Without the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
    <td></td>
    <td>map-merge((base: #e4e7eb), $theme-colors )</td>
    <td>map-merge((base: #e4e7eb), $theme-colors )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #e4e7eb"></span>#e4e7eb</td>
    <td><span class="color-preview" style="background-color: #e4e7eb"></span>#e4e7eb</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td></td>
    <td>contrast-wcag( $kendo-button-bg, $gray-900 )</td>
    <td>contrast-wcag( $kendo-button-bg, $gray-900 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td></td>
    <td>$kendo-button-bg</td>
    <td><span class="color-preview" style="background-color: #e4e7eb"></span>#e4e7eb</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td></td>
    <td>try-darken( $kendo-button-bg, 7.5% )</td>
    <td>try-darken( $kendo-button-bg, 7.5% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td></td>
    <td>try-darken( $kendo-button-border, 10% )</td>
    <td>try-darken( $kendo-button-border, 10% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td></td>
    <td>try-darken( $kendo-button-bg, 10% )</td>
    <td>try-darken( $kendo-button-bg, 10% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td></td>
    <td>try-darken( $kendo-button-border, 12.5% )</td>
    <td>try-darken( $kendo-button-border, 12.5% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-bg</td>
    <td></td>
    <td>try-darken( $primary, 10% )</td>
    <td>try-darken( $primary, 10% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td></td>
    <td>contrast-wcag( $kendo-button-selected-bg )</td>
    <td>contrast-wcag( $kendo-button-selected-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-border</td>
    <td></td>
    <td>try-darken( $primary, 12.5% )</td>
    <td>try-darken( $primary, 12.5% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of selected buttons</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-shadow</td>
    <td></td>
    <td>0 0 0 3px rgba( $kendo-button-border, .5 )</td>
    <td>0 0 0 3px rgba( $kendo-button-border, .5 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of disabled buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-hover-opacity</td>
    <td></td>
    <td>.08</td>
    <td>.08</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of hovered flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-opacity</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of focused flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-active-opacity</td>
    <td></td>
    <td>.16</td>
    <td>.16</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of active flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-selected-opacity</td>
    <td></td>
    <td>.2</td>
    <td>.2</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of selected flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-color-transition</td>
    <td></td>
    <td>$transition</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transition of the button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Charts

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
    <td>$series-a</td>
    <td></td>
    <td>$teal</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-b</td>
    <td></td>
    <td>$blue</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-c</td>
    <td></td>
    <td>$purple</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-d</td>
    <td></td>
    <td>$red</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-e</td>
    <td></td>
    <td>$yellow</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-f</td>
    <td></td>
    <td>$green</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-1</td>
    <td></td>
    <td>$series-a</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$chart-major-lines</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .08 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$chart-minor-lines</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .04 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (minor).</div></div>
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
    <td>$accent</td>
    <td>Color</td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Will be removed in v5. Use `$primary` variable instead.</div></div><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.</div></div>
    </td>
</tr>
<tr>
    <td>$accent-contrast</td>
    <td>Color</td>
    <td>contrast-wcag( $accent )</td>
    <td>contrast-wcag( $accent )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Will be removed in v5. Use `$primary-contrast` variable instead.</div></div><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $primary.</div></div>
    </td>
</tr>
<tr>
    <td>$primary</td>
    <td>Color</td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$primary-contrast</td>
    <td>Color</td>
    <td>contrast-wcag( $primary )</td>
    <td>contrast-wcag( $primary )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary</td>
    <td>Color</td>
    <td>$secondary</td>
    <td>$secondary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary-contrast</td>
    <td>Color</td>
    <td>contrast-wcag( $secondary )</td>
    <td>contrast-wcag( $secondary )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary</td>
    <td>Color</td>
    <td>$purple</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary-contrast</td>
    <td>Color</td>
    <td>contrast-wcag( $tertiary )</td>
    <td>contrast-wcag( $tertiary )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$info</td>
    <td>Color</td>
    <td>$info</td>
    <td>$info</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$success</td>
    <td>Color</td>
    <td>$success</td>
    <td>$success</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$warning</td>
    <td>Color</td>
    <td>$warning</td>
    <td>$warning</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$error</td>
    <td>Color</td>
    <td>$danger</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$dark</td>
    <td>Color</td>
    <td>$dark</td>
    <td>$dark</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$light</td>
    <td>Color</td>
    <td>$light</td>
    <td>$light</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$inverse</td>
    <td></td>
    <td>if( $dark-theme, $light, $dark )</td>
    <td>if( $dark-theme, $light, $dark )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or lught, it will be light or dark</div></div>
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
    <td></td>
    <td>$body-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$grid-bg: $component-bg !defualt;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$grid-text: component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-border</td>
    <td></td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$grid-border: component-border !default;`.</div></div>
    </td>
</tr>
</tbody>
</table>

### Grid

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
    <td>$grid-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-text</td>
    <td></td>
    <td>$component-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-border</td>
    <td></td>
    <td>$component-border</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-bg</td>
    <td></td>
    <td>$header-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-text</td>
    <td></td>
    <td>$header-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-border</td>
    <td></td>
    <td>$header-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-gradient</td>
    <td></td>
    <td>$header-gradient</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-bg</td>
    <td></td>
    <td>$grid-header-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-text</td>
    <td></td>
    <td>$grid-header-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-border</td>
    <td></td>
    <td>$grid-header-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .08 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-bg</td>
    <td></td>
    <td>rgba( $selected-bg, .25 )</td>
    <td>rgba( $selected-bg, .25 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-text</td>
    <td></td>
    <td>$grid-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in grid</div></div>
    </td>
</tr>
</tbody>
</table>

### Icons

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
    <td>$icon-font-url</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The URL to the icon font that will be used by the theme<br />The default value of `null` embeds the package font with a `data:` URL</div></div>
    </td>
</tr>
</tbody>
</table>

### Tabstrip

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
    <td>$tabstrip-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-text</td>
    <td></td>
    <td>$component-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-border</td>
    <td></td>
    <td>$component-border</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-x</td>
    <td></td>
    <td>$nav-item-padding-x</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-y</td>
    <td></td>
    <td>$nav-item-padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-radius</td>
    <td></td>
    <td>map-get( $spacing, 1 )</td>
    <td>map-get( $spacing, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-gap</td>
    <td></td>
    <td>$nav-item-margin</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-text</td>
    <td></td>
    <td>$link-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-text</td>
    <td></td>
    <td>$link-hover-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-border</td>
    <td></td>
    <td>$gray-200</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-text</td>
    <td></td>
    <td>$component-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-border</td>
    <td></td>
    <td>$component-border</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-padding-x</td>
    <td></td>
    <td>$tabstrip-item-padding-x</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-padding-y</td>
    <td></td>
    <td>$tabstrip-item-padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-width</td>
    <td></td>
    <td>$tabstrip-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-text</td>
    <td></td>
    <td>$component-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border</td>
    <td></td>
    <td>$component-border</td>
    <td>contrast-wcag( $component-bg, $gray-300, $gray-700 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-focused</td>
    <td></td>
    <td>$component-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip focused content</div></div>
    </td>
</tr>
</tbody>
</table>

### Toolbar

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
    <td>$toolbar-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the container.</div></div>
    </td>
</tr>
<tr>
    <td>$toolbar-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the container.</div></div>
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
    <td>$enable-typography</td>
    <td></td>
    <td>false</td>
    <td>false</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Global typography styles for the Kendo Bootstrap theme.</div></div>
    </td>
</tr>
<tr>
    <td>$font-size</td>
    <td></td>
    <td>$font-size-base</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family</td>
    <td></td>
    <td>$font-family-sans-serif</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family-monospace</td>
    <td></td>
    <td>$font-family-monospace</td>
    <td>$font-family-monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
<tr>
    <td>$line-height</td>
    <td></td>
    <td>$line-height-base</td>
    <td></td>
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

