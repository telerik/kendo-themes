---
title: Customizing Button
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_button
position: 9
---

# Customizing Button

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
    <td>$kendo-button-border-width</td>
    <td>Number</td>
<td>

`$btn-border-width`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x</td>
    <td>Number</td>
<td>

`$btn-padding-x`

</td>
<td>

`0.75rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y</td>
    <td>Number</td>
<td>

`$btn-padding-y`

</td>
<td>

`0.375rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td>List</td>
<td>

`$font-family`

</td>
<td>

`system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size</td>
    <td>Number</td>
<td>

`$btn-font-size`

</td>
<td>

`1rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height</td>
    <td>Number</td>
<td>

`$btn-line-height`

</td>
<td>

`1.5`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} + #{$kendo-button-border-width * 2} )`

</td>
<td>

`calc( 1.5em + 0.75rem + 2px )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} )`

</td>
<td>

`calc( 1.5em + 0.75rem )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated inner height of the button. Without the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-arrow-padding-x</td>
    <td>Number</td>
<td>

`$kendo-button-padding-y`

</td>
<td>

`0.375rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the arrow button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-arrow-padding-y</td>
    <td>Number</td>
<td>

`$kendo-button-padding-y`

</td>
<td>

`0.375rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the arrow button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
    <td>Map</td>
<td>

`map-merge(
    $kendo-theme-colors,
    ( "base": #e4e7eb )
)`

</td>
<td>

`("primary": #0d6efd, "secondary": #6c757d, "tertiary": #6f42c1, "info": #0dcaf0, "success": #198754, "warning": #ffc107, "error": #dc3545, "dark": #212529, "light": #f8f9fa, "inverse": #212529, "base": #e4e7eb)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td>Color</td>
<td>

<span class="color-preview" style="background-color: #e4e7eb"></span>

`#e4e7eb`

</td>
<td>

<span class="color-preview" style="background-color: #e4e7eb"></span>

`#e4e7eb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>Color</td>
<td>

`contrast-wcag( $kendo-button-bg, $gray-900 )`

</td>
<td>

<span class="color-preview" style="background-color: #212529"></span>

`#212529`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>Color</td>
<td>

`$kendo-button-bg`

</td>
<td>

<span class="color-preview" style="background-color: #e4e7eb"></span>

`#e4e7eb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td>Color</td>
<td>

`try-darken( $kendo-button-bg, 7.5% )`

</td>
<td>

<span class="color-preview" style="background-color: #ced3db"></span>

`#ced3db`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td>Color</td>
<td>

`try-darken( $kendo-button-bg, 10% )`

</td>
<td>

<span class="color-preview" style="background-color: #c7cdd5"></span>

`#c7cdd5`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of hovered button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td>Color</td>
<td>

`try-darken( $kendo-button-bg, 10% )`

</td>
<td>

<span class="color-preview" style="background-color: #c7cdd5"></span>

`#c7cdd5`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td>Color</td>
<td>

`try-darken( $kendo-button-bg, 12.5% )`

</td>
<td>

<span class="color-preview" style="background-color: #bfc6d0"></span>

`#bfc6d0`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-bg</td>
    <td>Color</td>
<td>

`try-darken( $primary, 10% )`

</td>
<td>

<span class="color-preview" style="background-color: #0257d5"></span>

`#0257d5`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td>Color</td>
<td>

`contrast-wcag( $kendo-button-selected-bg )`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-border</td>
    <td>Color</td>
<td>

`try-darken( $primary, 12.5% )`

</td>
<td>

<span class="color-preview" style="background-color: #0252c9"></span>

`#0252c9`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-gradient</td>
    <td>Null</td>
<td>

`$kendo-button-active-gradient`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-shadow</td>
    <td>Null</td>
<td>

`$kendo-button-active-shadow`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-shadow</td>
    <td>List</td>
<td>

`0 0 0 .25rem rgba( $kendo-button-border, .5 )`

</td>
<td>

`0 0 0 0.25rem rgba(228, 231, 235, 0.5)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of disabled buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-hover-opacity</td>
    <td>Number</td>
<td>

`.08`

</td>
<td>

`0.08`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of hovered flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-opacity</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of focused flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-active-opacity</td>
    <td>Number</td>
<td>

`.16`

</td>
<td>

`0.16`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of active flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-selected-opacity</td>
    <td>Number</td>
<td>

`.2`

</td>
<td>

`0.2`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of selected flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-transition</td>
    <td>List</td>
<td>

`$transition`

</td>
<td>

`color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transition of the button.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

