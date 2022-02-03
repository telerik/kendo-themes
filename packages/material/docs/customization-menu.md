---
title: Customizing Menu
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_menu
position: 9
---

# Customizing Menu

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
    <td>$kendo-menu-popup-padding-x</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-y</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border-width</td>
    <td>Number</td>
<td>

`$popup-border-width`

</td>
<td>

`0px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-font-size</td>
    <td>Number</td>
<td>

`$font-size-lg`

</td>
<td>

`16px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-line-height</td>
    <td>Number</td>
<td>

`1.25`

</td>
<td>

`1.25`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-bg</td>
    <td>Color</td>
<td>

`$popup-bg`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-text</td>
    <td>Color</td>
<td>

`$popup-text`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.87)"></span>

`rgba(0, 0, 0, 0.87)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td>Color</td>
<td>

`$popup-border`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.12)"></span>

`rgba(0, 0, 0, 0.12)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-x</td>
    <td>Number</td>
<td>

`map-get( $spacing, 4 )`

</td>
<td>

`16px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-y</td>
    <td>Number</td>
<td>

`map-get( $spacing, 2 )`

</td>
<td>

`8px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-end</td>
    <td>Calculation</td>
<td>

`calc( #{$kendo-menu-popup-item-padding-x * 2} + #{$icon-size} )`

</td>
<td>

`calc( 32px + 16px )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-margin-start-sm</td>
    <td>Number</td>
<td>

`$kendo-menu-popup-item-padding-x-sm`

</td>
<td>

`16px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-margin-end-sm</td>
    <td>Calculation</td>
<td>

`calc( -1 * (#{$kendo-menu-popup-item-padding-end-sm} - #{$kendo-menu-popup-item-padding-x-sm / 2}) )`

</td>
<td>

`calc(-1 * (calc( 32px + 16px ) - 8px))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-spacing</td>
    <td>Number</td>
<td>

`0px`

</td>
<td>

`0px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the menu items in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-text</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-bg</td>
    <td>Color</td>
<td>

`$kendo-list-item-hover-bg`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span>

`rgba(0, 0, 0, 0.04)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td>Color</td>
<td>

`$kendo-list-item-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: rgba(0, 0, 0, 0.87)"></span>

`rgba(0, 0, 0, 0.87)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-bg</td>
    <td>Color</td>
<td>

`$kendo-list-item-selected-bg`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-text</td>
    <td>Color</td>
<td>

`$kendo-list-item-selected-text`

</td>
<td>

<span class="color-preview" style="background-color: #e51a5f"></span>

`#e51a5f`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-border</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-gradient</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-shadow</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused menu item in popup.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

