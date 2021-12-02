---
title: Customization
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial
position: 9
---

# Customization

The following table lists the available variables for customizing the Material theme.

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
    <td>2px</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$base-bg</td>
    <td></td>
    <td>map-get( $theme, base-bg )</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-text</td>
    <td></td>
    <td>map-get($theme, component-text)</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .08 )</td>
    <td>rgba( if($theme-type == dark, white, black), .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the components' chrome area.</div></div>
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
    <td>map-get( $theme, hover-bg )</td>
    <td>map-get( $theme, hover-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-text</td>
    <td></td>
    <td>$base-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .15 )</td>
    <td>rgba( if($theme-type == dark, white, black), .15 )</td>
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
    <td>$secondary</td>
    <td>material-color( $secondary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-text</td>
    <td></td>
    <td>$secondary-contrast</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .1 )</td>
    <td>rgba( if($theme-type == dark, white, black), .1 )</td>
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

### Avatar

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
    <td>$kendo-avatar-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td></td>
    <td>$line-height</td>
    <td>(28 / 14)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td></td>
    <td>(
    sm: map-get( $spacing, 4 ),
    md: map-get( $spacing, 8 ),
    lg: map-get( $spacing, 16 )
)</td>
    <td>(
    sm: map-get( $spacing, 4 ),
    md: map-get( $spacing, 8 ),
    lg: map-get( $spacing, 16 )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td></td>
    <td>$theme-colors</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map of the avatar.</div></div>
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
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td></td>
    <td>( map-get( $spacing, 1 ) / 2 )</td>
    <td>( map-get( $spacing, 1 ) / 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y</td>
    <td></td>
    <td>$kendo-button-padding-x / 2</td>
    <td>$kendo-button-padding-x / 2</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height</td>
    <td></td>
    <td>(20 / 14)</td>
    <td>(20 / 14)</td>
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
    <td>map-merge((base: $base-bg), $theme-colors )</td>
    <td>map-merge((base: $base-bg), $theme-colors )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td></td>
    <td>$base-bg</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td></td>
    <td>$base-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td></td>
    <td>$kendo-button-bg</td>
    <td>map-get( $theme, base-bg )</td>
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
    <td>$box-shadow-depth-2</td>
    <td>0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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
    <td>null</td>
    <td>null</td>
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
    <td>null</td>
    <td>null</td>
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
    <td>null</td>
    <td>null</td>
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
    <td>$box-shadow-depth-3</td>
    <td>0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of active button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-bg</td>
    <td></td>
    <td>$kendo-button-active-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td></td>
    <td>$kendo-button-active-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-border</td>
    <td></td>
    <td>$kendo-button-active-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of selected button.</div></div>
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
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td></td>
    <td>try-shade( $body-bg, 12% )</td>
    <td>try-shade( $body-bg, 12% )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of disabled button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td></td>
    <td>$disabled-text</td>
    <td></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of disabled button.</div></div>
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
    <td>none</td>
    <td>none</td>
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
    <td>.12</td>
    <td>.12</td>
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
    <td>.22</td>
    <td>.22</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of selected flat button. Used to create background for the flat button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-color-transition</td>
    <td></td>
    <td>box-shadow 280ms cubic-bezier(.4, 0, .2, 1)</td>
    <td>box-shadow 280ms cubic-bezier(.4, 0, .2, 1)</td>
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
    <td>get-base-hue( teal, 500 )</td>
    <td>get-base-hue( teal, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-b</td>
    <td></td>
    <td>get-base-hue( blue, 500 )</td>
    <td>get-base-hue( blue, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-c</td>
    <td></td>
    <td>get-base-hue( purple, 500 )</td>
    <td>get-base-hue( purple, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-d</td>
    <td></td>
    <td>get-base-hue( red, 500 )</td>
    <td>get-base-hue( red, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-e</td>
    <td></td>
    <td>get-base-hue( yellow, 500 )</td>
    <td>get-base-hue( yellow, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-f</td>
    <td></td>
    <td>get-base-hue( green, 500 )</td>
    <td>get-base-hue( green, 500 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-1</td>
    <td></td>
    <td>$series-a</td>
    <td>get-base-hue( teal, 500 )</td>
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
    <td>2px</td>
    <td>2px</td>
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
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-text</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
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
    <td>rgba( if( $dark-theme, $white, $black ), .87 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .87 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-bg</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
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
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td></td>
    <td>$kendo-checkbox-checked-bg</td>
    <td>material-color( $primary-palette, main )</td>
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
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td></td>
    <td>$kendo-checkbox-border</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td></td>
    <td>none</td>
    <td>none</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td></td>
    <td>none</td>
    <td>none</td>
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
    <td>try-shade( $component-bg, 4 )</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td></td>
    <td>$kendo-checkbox-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-text</td>
    <td></td>
    <td>contrast-wcag( $kendo-checkbox-disabled-checked-bg )</td>
    <td>contrast-wcag( $kendo-checkbox-disabled-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td>try-shade( $component-bg, 4 )</td>
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
    <td>$kendo-checkbox-indeterminate-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-width='3' d='M4 10h12'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-width='3' d='M4 10h12'/></svg>") )</td>
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
    <td>.38</td>
    <td>.38</td>
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
    <td>$primary</td>
    <td>Color</td>
    <td>material-color( $primary-palette, main )</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$primary-contrast</td>
    <td>Color</td>
    <td>material-color( $primary-palette, main-contrast )</td>
    <td>material-color( $primary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary</td>
    <td>Color</td>
    <td>material-color( $secondary-palette, main )</td>
    <td>material-color( $secondary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary-contrast</td>
    <td>Color</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary</td>
    <td>Color</td>
    <td>material-color($tertiary-palette, main)</td>
    <td>material-color($tertiary-palette, main)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary-contrast</td>
    <td>Color</td>
    <td>material-color($tertiary-palette, main-contrast)</td>
    <td>material-color($tertiary-palette, main-contrast)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span>#0058e9</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span>#0058e9</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #37b400"></span>#37b400</td>
    <td><span class="color-preview" style="background-color: #37b400"></span>#37b400</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span>#ffc000</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span>#ffc000</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f31700"></span>#f31700</td>
    <td><span class="color-preview" style="background-color: #f31700"></span>#f31700</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$dark</td>
    <td>Color</td>
    <td>get-base-hue( gray, 800 )</td>
    <td>get-base-hue( gray, 800 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$light</td>
    <td>Color</td>
    <td>get-base-hue( gray, 100 )</td>
    <td>get-base-hue( gray, 100 )</td>
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
    <td>map-get($theme, component-bg)</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$grid-bg: $component-bg !defualt;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-text</td>
    <td></td>
    <td>map-get($theme, component-text)</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$grid-text: component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-border</td>
    <td></td>
    <td>map-get($theme, component-border)</td>
    <td>map-get($theme, component-border)</td>
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
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-border</td>
    <td></td>
    <td>$component-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-bg</td>
    <td></td>
    <td>$grid-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-text</td>
    <td></td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-bg</td>
    <td></td>
    <td>$grid-header-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-text</td>
    <td></td>
    <td>$grid-header-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-border</td>
    <td></td>
    <td>$grid-header-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
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
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
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

### Radio

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
    <td>$kendo-radio-sizes</td>
    <td></td>
    <td>(
    sm: map-get( $spacing, 3),
    md: map-get( $spacing, 4),
    lg: map-get( $spacing, 6)
)</td>
    <td>(
    sm: map-get( $spacing, 3),
    md: map-get( $spacing, 4),
    lg: map-get( $spacing, 6)
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Sizes of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-radius</td>
    <td></td>
    <td>50%</td>
    <td>50%</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Border radius of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td></td>
    <td>2px</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Border width of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-line-height</td>
    <td></td>
    <td>calc( #{map-get( $kendo-radio-sizes, "md" )} + #{$kendo-radio-border-width} )</td>
    <td>calc( #{map-get( $kendo-radio-sizes, "md" )} + #{$kendo-radio-border-width} )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Line height of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Background of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Text of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td></td>
    <td>$kendo-checkbox-border</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Border of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td></td>
    <td>$kendo-checkbox-hover-border</td>
    <td>rgba( if( $dark-theme, $white, $black ), .87 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td></td>
    <td>$kendo-radio-checked-text</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-bg</td>
    <td></td>
    <td>$kendo-radio-checked-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of indeterminate radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-text</td>
    <td></td>
    <td>$kendo-radio-checked-text</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of indeterminate radio button</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-border</td>
    <td></td>
    <td>$kendo-radio-checked-border</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of indeterminate radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td></td>
    <td>$kendo-checkbox-border</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td></td>
    <td>$kendo-checkbox-focus-shadow</td>
    <td>none</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-shadow</td>
    <td></td>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td>none</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td></td>
    <td>try-shade( $component-bg, 4 )</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of diasbled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td></td>
    <td>$kendo-radio-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td></td>
    <td>$kendo-radio-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td></td>
    <td>$invalid-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td></td>
    <td>$invalid-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-icon-type</td>
    <td></td>
    <td>marker</td>
    <td>marker</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon type of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td></td>
    <td>"WebComponentsIcons", monospace</td>
    <td>"WebComponentsIcons", monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph font family of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-size</td>
    <td></td>
    <td>12px</td>
    <td>12px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td></td>
    <td>"\e308"</td>
    <td>"\e308"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The checked glyph of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The checked image of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-margin-x</td>
    <td></td>
    <td>map-get( $spacing, 1 )</td>
    <td>map-get( $spacing, 1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the radio button inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-margin</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The list margin of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-padding</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The list padding of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td></td>
    <td>$list-item-padding-y</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-horizontal-item-margin-x</td>
    <td></td>
    <td>32px</td>
    <td>32px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-size</td>
    <td></td>
    <td>(
    sm: (map-get( $kendo-radio-sizes, "sm" ) * 3),
    md: (map-get( $kendo-radio-sizes, "md" ) * 3),
    lg: (map-get( $kendo-radio-sizes, "lg" ) * 3)
)</td>
    <td>(
    sm: (map-get( $kendo-radio-sizes, "sm" ) * 3),
    md: (map-get( $kendo-radio-sizes, "md" ) * 3),
    lg: (map-get( $kendo-radio-sizes, "lg" ) * 3)
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of radio.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-margin</td>
    <td></td>
    <td>(
    sm: calc(-1 * (#{map-get( $kendo-radio-sizes, "sm" )} + 2 * #{$kendo-radio-border-width})),
    md: calc(-1 * (#{map-get( $kendo-radio-sizes, "md" )} + 2 * #{$kendo-radio-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-radio-sizes, "lg" )} + 2 * #{$kendo-radio-border-width}))
)</td>
    <td>(
    sm: calc(-1 * (#{map-get( $kendo-radio-sizes, "sm" )} + 2 * #{$kendo-radio-border-width})),
    md: calc(-1 * (#{map-get( $kendo-radio-sizes, "md" )} + 2 * #{$kendo-radio-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-radio-sizes, "lg" )} + 2 * #{$kendo-radio-border-width}))
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple margin of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td></td>
    <td>.3</td>
    <td>.3</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple opacity of radio button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Shadows

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
    <td>$elevation</td>
    <td></td>
    <td>map-get( $theme, elevation )</td>
    <td>map-get( $theme, elevation )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of shadows</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-1</td>
    <td></td>
    <td>0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )</td>
    <td>0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for switch.<br />Equivalent to material elevation 1.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-2</td>
    <td></td>
    <td>0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )</td>
    <td>0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for resting state of button, card and other widgets.<br />Equivalent to material elevation 2.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-3</td>
    <td></td>
    <td>0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )</td>
    <td>0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for menu, popups and raised state of button and card.<br />Equivalent to material elevation 8.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-4</td>
    <td></td>
    <td>0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )</td>
    <td>0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for drawers and other overlaying elements.<br />Equivalent to material elevation 16.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-5</td>
    <td></td>
    <td>0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )</td>
    <td>0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for window and dialog.<br />Equivalent to material elevation 24.</div></div>
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
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-line-height</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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
    sm: ( font-size: null, track-width: 20px, track-height:  8px, thumb-width: 12px, thumb-height: 12px, thumb-offset: -2px, label-offset: 0px ),
    md: ( font-size: null, track-width: 32px, track-height:  14px, thumb-width: 20px, thumb-height: 20px, thumb-offset: -3px, label-offset: 0px ),
    lg: ( font-size: null, track-width: 44px, track-height:  20px, thumb-width: 28px, thumb-height: 28px, thumb-offset: -4px, label-offset: 0px )
)</td>
    <td>(
    sm: ( font-size: null, track-width: 20px, track-height:  8px, thumb-width: 12px, thumb-height: 12px, thumb-offset: -2px, label-offset: 0px ),
    md: ( font-size: null, track-width: 32px, track-height:  14px, thumb-width: 20px, thumb-height: 20px, thumb-offset: -3px, label-offset: 0px ),
    lg: ( font-size: null, track-width: 44px, track-height:  20px, thumb-width: 28px, thumb-height: 28px, thumb-offset: -4px, label-offset: 0px )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .38 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .38 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-ring</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td></td>
    <td>if( $dark-theme, $black, $white )</td>
    <td>if( $dark-theme, $black, $white )</td>
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
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td></td>
    <td>rgba( $primary, .54 )</td>
    <td>rgba( $primary, .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-ring</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
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
    <td>$subtle-text</td>
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
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-x</td>
    <td></td>
    <td>24px</td>
    <td>24px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-y</td>
    <td></td>
    <td>14px</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-radius</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-gap</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
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
    <td>$subtle-text</td>
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
    <td>$hovered-bg</td>
    <td>map-get( $theme, hover-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradent of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-focused</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Global typography styles for the Kendo Material theme.</div></div>
    </td>
</tr>
<tr>
    <td>$font-size</td>
    <td></td>
    <td>14px</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family</td>
    <td></td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family-monospace</td>
    <td></td>
    <td>Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace</td>
    <td>Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
<tr>
    <td>$line-height</td>
    <td></td>
    <td>(28 / 14)</td>
    <td>(28 / 14)</td>
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

