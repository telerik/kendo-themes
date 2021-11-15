---
title: Customizing Radio
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_radio
position: 9
---

# Customizing Radio

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
    <td>1px</td>
    <td>1px</td>
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
    <td>$kendo-checkbox-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Background of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td></td>
    <td>$kendo-checkbox-text</td>
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
    <td>try-shade( $base-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Border of the radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td></td>
    <td>$kendo-checkbox-hover-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td></td>
    <td>$kendo-checkbox-hover-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of hovered radio button.hover</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td></td>
    <td>$kendo-checkbox-hover-border</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td></td>
    <td>$kendo-checkbox-checked-bg</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td></td>
    <td>$kendo-checkbox-checked-text</td>
    <td>contrast-wcag( $kendo-checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-bg</td>
    <td></td>
    <td>$kendo-radio-checked-bg</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of indeterminate radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-text</td>
    <td></td>
    <td>$kendo-radio-checked-text</td>
    <td>contrast-wcag( $kendo-checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of indeterminate radio button</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indeterminate-border</td>
    <td></td>
    <td>$kendo-radio-checked-border</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of indeterminate radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td></td>
    <td>$kendo-checkbox-hover-border</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td></td>
    <td>$kendo-checkbox-focus-shadow</td>
    <td>0 0 0 2px rgba( 0, 0, 0, .06 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-border</td>
    <td></td>
    <td>$kendo-checkbox-checked-border</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-shadow</td>
    <td></td>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td>0 0 0 2px rgba( $primary, .3 )</td>
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
    <td>null</td>
    <td>null</td>
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
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

