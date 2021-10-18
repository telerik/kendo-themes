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

### Checkbox

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
    <td>$kendo-checkbox-sizes</td>
    <td></td>
    <td>(
    sm: map-get( $spacing, 3 ),
    md: map-get( $spacing, 4 ),
    lg: map-get( $spacing, 6 )
)</td>
    <td>(
    sm: map-get( $spacing, 3 ),
    md: map-get( $spacing, 4 ),
    lg: map-get( $spacing, 6 )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The  border width of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-line-height</td>
    <td></td>
    <td>calc( #{map-get( $kendo-checkbox-sizes, "md" )} + #{$kendo-checkbox-border-width} )</td>
    <td>calc( #{map-get( $kendo-checkbox-sizes, "md" )} + #{$kendo-checkbox-border-width} )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td>$body-bg</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border</td>
    <td></td>
    <td>contrast-wcag( $input-bg, $gray-400, $gray-600 )</td>
    <td>contrast-wcag( $input-bg, $gray-400, $gray-600 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-bg</td>
    <td></td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-text</td>
    <td></td>
    <td>contrast-wcag( $kendo-checkbox-checked-bg )</td>
    <td>contrast-wcag( $kendo-checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-bg</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td></td>
    <td>$kendo-checkbox-checked-bg</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-text</td>
    <td></td>
    <td>$kendo-checkbox-checked-text</td>
    <td>contrast-wcag( $kendo-checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td></td>
    <td>try-tint( $primary, 50% )</td>
    <td>try-tint( $primary, 50% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td></td>
    <td>0 0 0 .25rem rgba( $primary, .25 )</td>
    <td>0 0 0 .25rem rgba( $primary, .25 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td></td>
    <td>$kendo-checkbox-focus-shadow</td>
    <td>0 0 0 .25rem rgba( $primary, .25 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-text</td>
    <td></td>
    <td>$invalid-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-border</td>
    <td></td>
    <td>$invalid-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-icon-type</td>
    <td></td>
    <td>image</td>
    <td>image</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon type of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-glyph-font-family</td>
    <td></td>
    <td>"WebComponentsIcons", monospace</td>
    <td>"WebComponentsIcons", monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph font family of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-glyph</td>
    <td></td>
    <td>"\e118"</td>
    <td>"\e118"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-glyph</td>
    <td></td>
    <td>"\e121"</td>
    <td>"\e121"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-checked-text}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-checked-text}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-label-margin-x</td>
    <td></td>
    <td>map-get( $spacing, 1 )</td>
    <td>map-get( $spacing, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the checkbox inside a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-margin</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The list margin checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-padding</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The list padding checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-x</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-y</td>
    <td></td>
    <td>$list-item-padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-horizontal-item-margin-x</td>
    <td></td>
    <td>32px</td>
    <td>32px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of list item of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-size</td>
    <td></td>
    <td>(
    sm: (map-get( $kendo-checkbox-sizes, "sm" ) * 3),
    md: (map-get( $kendo-checkbox-sizes, "md" ) * 3),
    lg: (map-get( $kendo-checkbox-sizes, "lg" ) * 3)
)</td>
    <td>(
    sm: (map-get( $kendo-checkbox-sizes, "sm" ) * 3),
    md: (map-get( $kendo-checkbox-sizes, "md" ) * 3),
    lg: (map-get( $kendo-checkbox-sizes, "lg" ) * 3)
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-margin</td>
    <td></td>
    <td>(
    sm: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "sm" )} + #{$kendo-checkbox-border-width})),
    md: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "md" )} + #{$kendo-checkbox-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "lg" )} + #{$kendo-checkbox-border-width}))
)</td>
    <td>(
    sm: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "sm" )} + #{$kendo-checkbox-border-width})),
    md: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "md" )} + #{$kendo-checkbox-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "lg" )} + #{$kendo-checkbox-border-width}))
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple margin of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-opacity</td>
    <td></td>
    <td>.3</td>
    <td>.3</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple opacity of checkbox.</div></div>
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

### Switch

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
    <td>$kendo-switch-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>$font-family-sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-line-height</td>
    <td></td>
    <td>$line-height</td>
    <td>$line-height-base</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text transform of the switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td></td>
    <td>none</td>
    <td>none</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Display of the switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td></td>
    <td>(
    sm: 36px,
    md: 56px,
    lg: 76px
)</td>
    <td>(
    sm: 36px,
    md: 56px,
    lg: 76px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-font-sizes</td>
    <td></td>
    <td>(
    sm: 8px,
    md: $font-size-xs,
    lg: $font-size-sm
)</td>
    <td>(
    sm: 8px,
    md: $font-size-xs,
    lg: $font-size-sm
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the font sizes for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-padding-x-sizes</td>
    <td></td>
    <td>(
    sm: 1px,
    md: 2px,
    lg: 4px
)</td>
    <td>(
    sm: 1px,
    md: 2px,
    lg: 4px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the horizontal padding of the switch track for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-padding-y-sizes</td>
    <td></td>
    <td>(
    sm: 1px,
    md: 2px,
    lg: 4px
)</td>
    <td>(
    sm: 1px,
    md: 2px,
    lg: 4px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the vertical padding of the switch track for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-diff-sizes</td>
    <td></td>
    <td>(
    sm: 0px,
    md: 0px,
    lg: 0px
)</td>
    <td>(
    sm: 0px,
    md: 0px,
    lg: 0px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the height difference of the switch track for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-sizes</td>
    <td></td>
    <td>(
    sm: 16px,
    md: 24px,
    lg: 32px
)</td>
    <td>(
    sm: 16px,
    md: 24px,
    lg: 32px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the different switch thumb sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-offset-sizes</td>
    <td></td>
    <td>(
    sm: 2px,
    md: 3px,
    lg: 4px
)</td>
    <td>(
    sm: 2px,
    md: 3px,
    lg: 4px
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the offset of the switch thumb for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-offset-sizes</td>
    <td></td>
    <td>(
    sm: null,
    md: null,
    lg: null
)</td>
    <td>(
    sm: null,
    md: null,
    lg: null
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the offset of the switch label for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-width-sizes</td>
    <td></td>
    <td>(
    sm: null,
    md: null,
    lg: null
)</td>
    <td>(
    sm: null,
    md: null,
    lg: null
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the width of the switch label for the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-hover-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the switch track when the switch is hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-focus-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the switch track when the switch is focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-bg</td>
    <td></td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-border</td>
    <td></td>
    <td>$primary</td>
    <td>$primary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the hovered switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the hovered switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the focused switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-focus-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the focused switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-focus-shadow</td>
    <td></td>
    <td>$input-focused-shadow</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused switch when checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td></td>
    <td>white</td>
    <td>white</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-bg</td>
    <td></td>
    <td>$input-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-border</td>
    <td></td>
    <td>$gray-500</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the hovered switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the hovered switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the focused switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-focus-border</td>
    <td></td>
    <td>$input-focused-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-focus-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the focused switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-focus-shadow</td>
    <td></td>
    <td>$input-focused-shadow</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused switch when not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td></td>
    <td>$gray-500</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered switch is not checked.</div></div>
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

