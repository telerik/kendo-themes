---
title: Customizing Chip
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_chip
position: 9
---

# Customizing Chip

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
    <td>$kendo-chip-border-width</td>
    <td>Number</td>
<td>

`1px`

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
    <td>$kendo-chip-spacing</td>
    <td>Number</td>
<td>

`k-map-get( $spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-x</td>
    <td>Number</td>
<td>

`k-map-get( $spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-y</td>
    <td>Number</td>
<td>

`k-map-get( $spacing, 1 )`

</td>
<td>

`4px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-size</td>
    <td>Number</td>
<td>

`$font-size-md`

</td>
<td>

`14px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-line-height</td>
    <td>Number</td>
<td>

`(18 / 14)`

</td>
<td>

`1.2857142857`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the chip that are connected to the $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-calc-size</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-chip-line-height * 1em} + #{$kendo-chip-padding-y * 2} + #{$kendo-chip-border-width * 2} )`

</td>
<td>

`calc( 1.2857142857em + 8px + 2px )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td>Map</td>
<td>

`(
    sm: (
        padding-x: $kendo-chip-padding-x-sm,
        padding-y: $kendo-chip-padding-y-sm,
        font-size: $kendo-chip-font-size-sm,
        line-height: $kendo-chip-line-height-sm
    ),
    md: (
        padding-x: $kendo-chip-padding-x-md,
        padding-y: $kendo-chip-padding-y-md,
        font-size: $kendo-chip-font-size-md,
        line-height: $kendo-chip-line-height-md
    ),
    lg: (
        padding-x: $kendo-chip-padding-x-lg,
        padding-y: $kendo-chip-padding-y-lg,
        font-size: $kendo-chip-font-size-lg,
        line-height: $kendo-chip-line-height-lg
    )
)`

</td>
<td>

`(sm: (padding-x: 4px, padding-y: 2px, font-size: 14px, line-height: 1.2857142857), md: (padding-x: 4px, padding-y: 4px, font-size: 14px, line-height: 1.2857142857), lg: (padding-x: 4px, padding-y: 6px, font-size: 14px, line-height: 1.2857142857))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-base-bg</td>
    <td>Color</td>
<td>

`if( $dark-theme, $white, $black)`

</td>
<td>

<span class="color-preview" style="background-color: #000000"></span>

`#000000`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td>Map</td>
<td>

`(
    "base": $kendo-chip-base-bg,
    "error": k-map-get( $kendo-theme-colors, "error" ),
    "info": k-map-get( $kendo-theme-colors, "info" ),
    "warning": k-map-get( $kendo-theme-colors, "warning" ),
    "success": k-map-get( $kendo-theme-colors, "success" )
)`

</td>
<td>

`("base": #000000, "error": #f31700, "info": #0058e9, "warning": #ffc000, "success": #37b400)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-bg</td>
    <td>Color</td>
<td>

`if( $dark-theme, $kendo-button-bg, k-try-tint( $kendo-chip-base-bg, 92% ))`

</td>
<td>

<span class="color-preview" style="background-color: #ebebeb"></span>

`#ebebeb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-text</td>
    <td>Color</td>
<td>

`$kendo-button-text`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.87)"></span>

`rgba(0, 0, 0, 0.87)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-border</td>
    <td>Color</td>
<td>

`$kendo-chip-solid-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ebebeb"></span>

`#ebebeb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-gradient</td>
    <td>Null</td>
<td>

`$kendo-button-gradient`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base gradient of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-bg</td>
    <td>Color</td>
<td>

`k-try-tint( $kendo-chip-base-bg, 80% )`

</td>
<td>

<span class="color-preview" style="background-color: #cccccc"></span>

`#cccccc`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of focused solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of focused solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-bg</td>
    <td>Color</td>
<td>

`k-try-tint( $kendo-chip-base-bg, 84% )`

</td>
<td>

<span class="color-preview" style="background-color: #d6d6d6"></span>

`#d6d6d6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of hovered solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-bg</td>
    <td>Color</td>
<td>

`k-try-tint( $kendo-chip-base-bg, 76% )`

</td>
<td>

<span class="color-preview" style="background-color: #c2c2c2"></span>

`#c2c2c2`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-bg</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-text</td>
    <td>Color</td>
<td>

`$kendo-chip-solid-text`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.87)"></span>

`rgba(0, 0, 0, 0.87)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-border</td>
    <td>Color</td>
<td>

`$kendo-chip-outline-text`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.87)"></span>

`rgba(0, 0, 0, 0.87)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-bg</td>
    <td>Color</td>
<td>

`k-try-tint( $kendo-chip-base-bg, 92% )`

</td>
<td>

<span class="color-preview" style="background-color: #ebebeb"></span>

`#ebebeb`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of hovered outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-text</td>
    <td>Color</td>
<td>

`k-contrast-color( $kendo-chip-outline-hover-bg )`

</td>
<td>

<span class="color-preview" style="background-color: black"></span>

`black`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-bg</td>
    <td>Color</td>
<td>

`k-try-tint( $kendo-chip-base-bg, 84% )`

</td>
<td>

<span class="color-preview" style="background-color: #d6d6d6"></span>

`#d6d6d6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-text</td>
    <td>Color</td>
<td>

`$kendo-chip-outline-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: black"></span>

`black`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td>Map</td>
<td>

`(
    sm: k-map-get( $spacing, 1 ),
    md: k-map-get( $spacing, 1 ),
    lg: k-map-get( $spacing, 1 )
)`

</td>
<td>

`(sm: 4px, md: 4px, lg: 4px)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the chip list.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

