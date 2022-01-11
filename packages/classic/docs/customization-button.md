---
title: Customizing Button
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_button
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
    <td>$button-border-width</td>
    <td></td>
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
    <td>$button-border-radius</td>
    <td></td>
<td>


`$border-radius`

</td>
<td>

`map-get( $spacing, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-x</td>
    <td></td>
<td>


`map-get( $spacing, 2 )`

</td>
<td>

`map-get( $spacing, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-y</td>
    <td></td>
<td>


`map-get( $spacing, 1 )`

</td>
<td>

`map-get( $spacing, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-font-family</td>
    <td></td>
<td>


`$font-family`

</td>
<td>

`inherit`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-font-size</td>
    <td></td>
<td>


`$font-size`

</td>
<td>

`14px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-line-height</td>
    <td></td>
<td>


`$line-height`

</td>
<td>

`(20 / 14)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$button-calc-size</td>
    <td></td>
<td>


`calc( #{$button-line-height * 1em} + #{$button-padding-y * 2} + #{$button-border-width * 2} )`

</td>
<td>

`calc( #{$button-line-height * 1em} + #{$button-padding-y * 2} + #{$button-border-width * 2} )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-inner-calc-size</td>
    <td></td>
<td>


`calc( #{$button-line-height * 1em} + #{$button-padding-y * 2} )`

</td>
<td>

`calc( #{$button-line-height * 1em} + #{$button-padding-y * 2} )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated inner height of the button. Without the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$button-theme-colors</td>
    <td></td>
<td>


`(
    "primary": map-get( $theme-colors, primary ),
    "secondary": map-get( $theme-colors, secondary ),
    "tertiary": map-get( $theme-colors, tertiary ),
    "info": map-get( $theme-colors, info ),
    "success": map-get( $theme-colors, success ),
    "warning": map-get( $theme-colors, warning ),
    "error": map-get( $theme-colors, error ),
    "dark": map-get( $theme-colors, dark ),
    "light": map-get( $theme-colors, light ),
    "inverse": map-get( $theme-colors, inverse )
)`

</td>
<td>

`(
    "primary": map-get( $theme-colors, primary ),
    "secondary": map-get( $theme-colors, secondary ),
    "tertiary": map-get( $theme-colors, tertiary ),
    "info": map-get( $theme-colors, info ),
    "success": map-get( $theme-colors, success ),
    "warning": map-get( $theme-colors, warning ),
    "error": map-get( $theme-colors, error ),
    "dark": map-get( $theme-colors, dark ),
    "light": map-get( $theme-colors, light ),
    "inverse": map-get( $theme-colors, inverse )
)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$button-bg</td>
    <td></td>
<td>


`$base-bg`

</td>
<td><span class="color-preview" style="background-color: #f0f0f0"></span>

`#f0f0f0`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-text</td>
    <td></td>
<td>


`$base-text`

</td>
<td>

`$body-text`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-border</td>
    <td></td>
<td>


`try-shade( $button-bg, 2 )`

</td>
<td>

`try-shade( $button-bg, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-gradient</td>
    <td></td>
<td>


`$base-gradient`

</td>
<td>

`rgba( white, .1 ), rgba( white, 0 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-bg</td>
    <td></td>
<td>


`try-shade( $button-bg, 1 )`

</td>
<td>

`try-shade( $button-bg, 1 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-text</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-border</td>
    <td></td>
<td>


`try-shade( $button-bg, 3 )`

</td>
<td>

`try-shade( $button-bg, 3 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-gradient</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-bg</td>
    <td></td>
<td>


`try-shade( $button-bg, 2 )`

</td>
<td>

`try-shade( $button-bg, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-text</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-border</td>
    <td></td>
<td>


`try-shade( $button-bg, 4 )`

</td>
<td>

`try-shade( $button-bg, 4 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-gradient</td>
    <td></td>
<td>


`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-bg</td>
    <td></td>
<td>


`$button-active-bg`

</td>
<td>

`try-shade( $button-bg, 2 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-text</td>
    <td></td>
<td>


`$button-active-text`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-border</td>
    <td></td>
<td>


`$button-active-border`

</td>
<td>

`try-shade( $button-bg, 4 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-gradient</td>
    <td></td>
<td>


`null`

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
    <td>$button-focused-shadow</td>
    <td></td>
<td>


`0 0 4px 0 rgba( $button-border, .75 )`

</td>
<td>

`0 0 4px 0 rgba( $button-border, .75 )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused buttons.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

