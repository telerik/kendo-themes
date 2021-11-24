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
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-spacing</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-y</td>
    <td></td>
    <td>$kendo-chip-padding-x</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-line-height</td>
    <td></td>
    <td>$line-height-xs</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the chip that are connected to the $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td></td>
    <td>(
    sm: ( font-size: $kendo-chip-font-size-sm, line-height: $kendo-chip-line-height-sm, padding: $kendo-chip-padding-x-sm ),
    md: ( font-size: $kendo-chip-font-size-md, line-height: $kendo-chip-line-height-md, padding: $kendo-chip-padding-x-md ),
    lg: ( font-size: $kendo-chip-font-size-lg, line-height: $kendo-chip-line-height-lg, padding: $kendo-chip-padding-x-lg )
)</td>
    <td>(
    sm: ( font-size: $kendo-chip-font-size-sm, line-height: $kendo-chip-line-height-sm, padding: $kendo-chip-padding-x-sm ),
    md: ( font-size: $kendo-chip-font-size-md, line-height: $kendo-chip-line-height-md, padding: $kendo-chip-padding-x-md ),
    lg: ( font-size: $kendo-chip-font-size-lg, line-height: $kendo-chip-line-height-lg, padding: $kendo-chip-padding-x-lg )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td></td>
    <td>map-merge(
    ( "base": $black ),
    (
        "error": map-get( $theme-colors, "error" ),
        "info": map-get( $theme-colors, "info" ),
        "warning": map-get( $theme-colors, "warning" ),
        "success": map-get( $theme-colors, "success" )
    )
)</td>
    <td>map-merge(
    ( "base": $black ),
    (
        "error": map-get( $theme-colors, "error" ),
        "info": map-get( $theme-colors, "info" ),
        "warning": map-get( $theme-colors, "warning" ),
        "success": map-get( $theme-colors, "success" )
    )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-base-bg</td>
    <td></td>
    <td>$black</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-bg</td>
    <td></td>
    <td>rgba( $kendo-chip-base-bg, .08 )</td>
    <td>rgba( $kendo-chip-base-bg, .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-text</td>
    <td></td>
    <td>$kendo-chip-base-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-border</td>
    <td></td>
    <td>rgba( $kendo-chip-solid-bg, .3 )</td>
    <td>rgba( $kendo-chip-solid-bg, .3 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-bg</td>
    <td></td>
    <td>rgba( $kendo-chip-solid-bg, .08 )</td>
    <td>rgba( $kendo-chip-solid-bg, .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of focused solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of focused solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-bg</td>
    <td></td>
    <td>rgba( $kendo-chip-solid-bg, .16 )</td>
    <td>rgba( $kendo-chip-solid-bg, .16 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of hovered solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-bg</td>
    <td></td>
    <td>rgba( $kendo-chip-solid-bg, .24 )</td>
    <td>rgba( $kendo-chip-solid-bg, .24 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected solid chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-text</td>
    <td></td>
    <td>$kendo-chip-base-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-border</td>
    <td></td>
    <td>$kendo-chip-base-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-bg</td>
    <td></td>
    <td>$kendo-chip-base-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of hovered outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-text</td>
    <td></td>
    <td>contrast-wcag( $kendo-chip-base-bg )</td>
    <td>contrast-wcag( $kendo-chip-base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of hovered outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-bg</td>
    <td></td>
    <td>$kendo-chip-outline-hover-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of selected outline chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-text</td>
    <td></td>
    <td>$kendo-chip-outline-hover-text</td>
    <td>contrast-wcag( $kendo-chip-base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of selected outline chip.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

