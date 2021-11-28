---
title: Customizing Checkbox
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_checkbox
position: 9
---

# Customizing Checkbox

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
    <td>$white</td>
    <td></td>
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
    <td>$base-border</td>
    <td>try-shade( $base-bg, 2 )</td>
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
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
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
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td></td>
    <td>$kendo-checkbox-bg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-text</td>
    <td></td>
    <td>$kendo-checkbox-checked-bg</td>
    <td><span class="color-preview" style="background-color: #f35800"></span>#f35800</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td></td>
    <td>$kendo-checkbox-border</td>
    <td>try-shade( $base-bg, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td></td>
    <td>0 0 0 2px rgba( 0, 0, 0, .06 )</td>
    <td>0 0 0 2px rgba( 0, 0, 0, .06 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td></td>
    <td>0 0 0 2px rgba( $primary, .3 )</td>
    <td>0 0 0 2px rgba( $primary, .3 )</td>
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
    <td>glyph</td>
    <td>glyph</td>
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
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-image</td>
    <td></td>
    <td>null</td>
    <td>null</td>
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
    sm: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "sm" )} + 2 * #{$kendo-checkbox-border-width})),
    md: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "md" )} + 2 * #{$kendo-checkbox-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "lg" )} + 2 * #{$kendo-checkbox-border-width}))
)</td>
    <td>(
    sm: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "sm" )} + 2 * #{$kendo-checkbox-border-width})),
    md: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "md" )} + 2 * #{$kendo-checkbox-border-width})),
    lg: calc(-1 * (#{map-get( $kendo-checkbox-sizes, "lg" )} + 2 * #{$kendo-checkbox-border-width}))
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

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

