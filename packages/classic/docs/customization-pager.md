---
title: Customizing Pager
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_pager
position: 9
---

# Customizing Pager

## Variables

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
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the pager according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-pager-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the pager according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-sm-calc-size</code></td>
    <td><code>calc( 1.4285714286em + 4px + 2px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum width of the pager items according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-group-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between pager item groups according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-section-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the pager sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the hovered pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-number-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the pager numbers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager dropdowns according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-pager-sm-padding-x,
        padding-y: $kendo-pager-sm-padding-y,
        item-group-spacing: $kendo-pager-sm-item-group-spacing,
        item-min-width: $kendo-pager-sm-item-min-width,
        pager-dropdown-width: $kendo-pager-sm-dropdown-width
    ),
    md: (
        padding-x: $kendo-pager-md-padding-x,
        padding-y: $kendo-pager-md-padding-y,
        item-group-spacing: $kendo-pager-md-item-group-spacing,
        item-min-width: $kendo-pager-md-item-min-width,
        pager-dropdown-width: $kendo-pager-md-dropdown-width
    ),
    lg: (
        padding-x: $kendo-pager-lg-padding-x,
        padding-y: $kendo-pager-lg-padding-y,
        item-group-spacing: $kendo-pager-lg-item-group-spacing,
        item-min-width: $kendo-pager-lg-item-min-width,
        pager-dropdown-width: $kendo-pager-lg-dropdown-width
    )
)</code></td>
    <td><code>(sm: (padding-x: 4px, padding-y: 4px, item-group-spacing: 12px, item-min-width: calc( 1.4285714286em + 4px + 2px ), pager-dropdown-width: 5em), md: (padding-x: 8px, padding-y: 8px, item-group-spacing: 14px, item-min-width: calc( 1.4285714286em + 8px + 2px ), pager-dropdown-width: 5em), lg: (padding-x: 10px, padding-y: 10px, item-group-spacing: 16px, item-min-width: calc( 1.5em + 16px + 2px ), pager-dropdown-width: 5em))</code></td>
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

