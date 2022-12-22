---
title: Customizing Pager
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_pager
position: 9
---

# Customizing Pager

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
    <td>$kendo-pager-padding-x</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 2 )`

</td>
<td>

`0.5rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the pager according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-padding-y</td>
    <td>Number</td>
<td>

`$kendo-pager-padding-x`

</td>
<td>

`0.5rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the pager according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-min-width-sm</td>
    <td>Calculation</td>
<td>

`$kendo-button-calc-size-sm`

</td>
<td>

`calc( 1.4285714286em + 0.5rem + 2px )`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum width of the pager items according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-group-spacing-sm</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 3.5 )`

</td>
<td>

`0.875rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between pager item groups according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td>Number</td>
<td>

`1px`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td>List</td>
<td>

`$font-family`

</td>
<td>

`system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td>Number</td>
<td>

`$font-size`

</td>
<td>

`1rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td>Number</td>
<td>

`$line-height`

</td>
<td>

`1.5`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td>Color</td>
<td>

`$header-bg`

</td>
<td>

<span class="color-preview" style="background-color: #f8f9fa"></span>

`#f8f9fa`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td>Color</td>
<td>

`$header-text`

</td>
<td>

<span class="color-preview" style="background-color: #212529"></span>

`#212529`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td>Color</td>
<td>

`$header-border`

</td>
<td>

<span class="color-preview" style="background-color: #dee2e6"></span>

`#dee2e6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-shadow</td>
    <td>List</td>
<td>

`inset 0 0 0 2px rgba( 0, 0, 0, .08)`

</td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, 0.08)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-section-spacing</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 4 )`

</td>
<td>

`1rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the pager sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-width</td>
    <td>Number</td>
<td>

`1px`

</td>
<td>

`1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td>Number</td>
<td>

`k-map-get( $kendo-spacing, 1 )`

</td>
<td>

`0.25rem`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td>Number</td>
<td>

`(-1 * $kendo-pager-item-border-width)`

</td>
<td>

`-1px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-bg</td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-text</td>
    <td>Color</td>
<td>

`$link-text`

</td>
<td>

<span class="color-preview" style="background-color: #0d6efd"></span>

`#0d6efd`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border</td>
    <td>Color</td>
<td>

`$component-border`

</td>
<td>

<span class="color-preview" style="background-color: #dee2e6"></span>

`#dee2e6`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-bg</td>
    <td>Color</td>
<td>

`$hovered-bg`

</td>
<td>

<span class="color-preview" style="background-color: #e9ecef"></span>

`#e9ecef`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-text</td>
    <td>Color</td>
<td>

`$link-hover-text`

</td>
<td>

<span class="color-preview" style="background-color: #0a58ca"></span>

`#0a58ca`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-border</td>
    <td>Color</td>
<td>

`$hovered-border`

</td>
<td>

<span class="color-preview" style="background-color: #d6d9dc"></span>

`#d6d9dc`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-bg</td>
    <td>Color</td>
<td>

`$selected-bg`

</td>
<td>

<span class="color-preview" style="background-color: #0d6efd"></span>

`#0d6efd`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-text</td>
    <td>Color</td>
<td>

`$selected-text`

</td>
<td>

<span class="color-preview" style="background-color: white"></span>

`white`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-border</td>
    <td>Color</td>
<td>

`$kendo-pager-item-selected-bg`

</td>
<td>

<span class="color-preview" style="background-color: #0d6efd"></span>

`#0d6efd`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-opacity</td>
    <td>Null</td>
<td>

`null`

</td>
<td>

`null`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-bg</td>
    <td>Color</td>
<td>

`$kendo-pager-item-bg`

</td>
<td>

<span class="color-preview" style="background-color: #ffffff"></span>

`#ffffff`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-shadow</td>
    <td>List</td>
<td>

`0 0 0 3px rgba($primary, .25)`

</td>
<td>

`0 0 0 3px rgba(13, 110, 253, 0.25)`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-number-border-radius</td>
    <td>Number</td>
<td>

`0px`

</td>
<td>

`0px`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the pager numbers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td>Number</td>
<td>

`5em`

</td>
<td>

`5em`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-dropdown-width-sm</td>
    <td>Number</td>
<td>

`5em`

</td>
<td>

`5em`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager dropdowns according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes</td>
    <td>Map</td>
<td>

`(
    sm: (
        padding-x: $kendo-pager-padding-x-sm,
        padding-y: $kendo-pager-padding-y-sm,
        item-group-spacing: $kendo-pager-item-group-spacing-sm,
        item-min-width: $kendo-pager-item-min-width-sm,
        pager-dropdown-width: $kendo-pager-dropdown-width-sm
    ),
    md: (
        padding-x: $kendo-pager-padding-x-md,
        padding-y: $kendo-pager-padding-y-md,
        item-group-spacing: $kendo-pager-item-group-spacing-md,
        item-min-width: $kendo-pager-item-min-width-md,
        pager-dropdown-width: $kendo-pager-dropdown-width-md
    ),
    lg: (
        padding-x: $kendo-pager-padding-x-lg,
        padding-y: $kendo-pager-padding-y-lg,
        item-group-spacing: $kendo-pager-item-group-spacing-lg,
        item-min-width: $kendo-pager-item-min-width-lg,
        pager-dropdown-width: $kendo-pager-dropdown-width-lg
    )
)`

</td>
<td>

`(sm: (padding-x: 0.25rem, padding-y: 0.25rem, item-group-spacing: 0.875rem, item-min-width: calc( 1.4285714286em + 0.5rem + 2px ), pager-dropdown-width: 5em), md: (padding-x: 0.5rem, padding-y: 0.5rem, item-group-spacing: 1rem, item-min-width: calc( 1.5em + 0.75rem + 2px ), pager-dropdown-width: 5em), lg: (padding-x: 0.625rem, padding-y: 0.625rem, item-group-spacing: 1.125rem, item-min-width: calc( 1.5em + 1rem + 2px ), pager-dropdown-width: 6em))`

</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map of the pager.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

