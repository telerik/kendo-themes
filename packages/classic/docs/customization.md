---
title: Customization
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic
position: 9
---

# Customization




## Variables

The following table lists the available variables for customizing the Classic theme.

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
<tbody><tr>
    <td>$kendo-border-radius</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>Color</td>
    <td><code>$kendo-body-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-base-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>List</td>
    <td><code>rgba( white, .1 ), rgba( white, 0 )</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-base-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-hover-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #bababa"></span><code>#bababa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-selected-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-selected-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
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
<tbody><tr>
    <td>$kendo-avatar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-map-get( $kendo-spacing, 4 ),
    md: k-map-get( $kendo-spacing, 8 ),
    lg: k-map-get( $kendo-spacing, 16 )
)</code></td>
    <td><code>(sm: 16px, md: 32px, lg: 64px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #f35800, "secondary": #e9e9e9, "tertiary": #03a9f4, "info": #2498bc, "success": #3ea44e, "warning": #ff9800, "error": #d92800, "dark": #404040, "light": #ebebeb, "inverse": #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map of the avatar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Badge

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
<tbody><tr>
    <td>$kendo-badge-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-line-height * 1em} + #{$kendo-badge-padding-y * 2} + #{$kendo-badge-border-width * 2})</code></td>
    <td><code>calc( 1em + 8px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Badge min width used for circle badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-badge-sm-padding-x,
        padding-y: $kendo-badge-sm-padding-y,
        font-size: $kendo-badge-sm-font-size,
        line-height: $kendo-badge-sm-line-height,
        min-width: $kendo-badge-sm-min-width
    ),
    md: (
        padding-x: $kendo-badge-md-padding-x,
        padding-y: $kendo-badge-md-padding-y,
        font-size: $kendo-badge-md-font-size,
        line-height: $kendo-badge-md-line-height,
        min-width: $kendo-badge-md-min-width
    ),
    lg: (
        padding-x: $kendo-badge-lg-padding-x,
        padding-y: $kendo-badge-lg-padding-y,
        font-size: $kendo-badge-lg-font-size,
        line-height: $kendo-badge-lg-line-height,
        min-width: $kendo-badge-lg-min-width
    )
)</code></td>
    <td><code>(sm: (padding-x: 2px, padding-y: 2px, font-size: 10px, line-height: 1, min-width: calc( 1em + 4px + 2px )), md: (padding-x: 4px, padding-y: 4px, font-size: 10px, line-height: 1, min-width: calc( 1em + 8px + 2px )), lg: (padding-x: 6px, padding-y: 6px, font-size: 10px, line-height: 1, min-width: calc( 1em + 12px + 2px )))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the badge.</div></div>
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
<tbody><tr>
    <td>$kendo-button-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} + #{$kendo-button-border-width * 2} )</code></td>
    <td><code>calc( 1.4285714286em + 8px + 2px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} )</code></td>
    <td><code>calc( 1.4285714286em + 8px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated inner height of the Button excluding the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-button-sm-padding-x,
        padding-y: $kendo-button-sm-padding-y,
        font-size: $kendo-button-sm-font-size,
        line-height: $kendo-button-sm-line-height
    ),
    md: (
        padding-x: $kendo-button-md-padding-x,
        padding-y: $kendo-button-md-padding-y,
        font-size: $kendo-button-md-font-size,
        line-height: $kendo-button-md-line-height
    ),
    lg: (
        padding-x: $kendo-button-lg-padding-x,
        padding-y: $kendo-button-lg-padding-y,
        font-size: $kendo-button-lg-font-size,
        line-height: $kendo-button-lg-line-height
    )
)</code></td>
    <td><code>(sm: (padding-x: 8px, padding-y: 2px, font-size: 14px, line-height: 1.4285714286), md: (padding-x: 8px, padding-y: 4px, font-size: 14px, line-height: 1.4285714286), lg: (padding-x: 12px, padding-y: 8px, font-size: 16px, line-height: 1.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
    <td>Map</td>
    <td><code>k-map-merge(
    $kendo-theme-colors,
    ( "base": $kendo-base-bg )
)</code></td>
    <td><code>("primary": #f35800, "secondary": #e9e9e9, "tertiary": #03a9f4, "info": #2498bc, "success": #3ea44e, "warning": #ff9800, "error": #d92800, "dark": #404040, "light": #ebebeb, "inverse": #404040, "base": #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-button-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-button-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-button-bg, 3 )</code></td>
    <td><span class="color-preview" style="background-color: #b6b6b6"></span><code>#b6b6b6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-button-bg, 2 )</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-button-bg, 4 )</code></td>
    <td><span class="color-preview" style="background-color: #a3a3a3"></span><code>#a3a3a3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-button-selected-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-button-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-active-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-active-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 4px 0 rgba( $kendo-button-border, .75 )</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-hover-opacity</td>
    <td>Number</td>
    <td><code>.08</code></td>
    <td><code>0.08</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the hovered flat Button. Used to create a background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-opacity</td>
    <td>Number</td>
    <td><code>.12</code></td>
    <td><code>0.12</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the focused flat Button. Used to create a background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-active-opacity</td>
    <td>Number</td>
    <td><code>.16</code></td>
    <td><code>0.16</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the active flat Button. Used to create background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-selected-opacity</td>
    <td>Number</td>
    <td><code>.2</code></td>
    <td><code>0.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the selected flat Button. Used to create background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-ring-opacity</td>
    <td>Number</td>
    <td><code>.12</code></td>
    <td><code>0.12</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the flat Button focus ring. Used to create a border for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-transition</td>
    <td>List</td>
    <td><code>color .2s ease-in-out</code></td>
    <td><code>color 0.2s ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transition of the flat Button.</div></div>
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
<tbody><tr>
    <td>$kendo-series-a</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffd246"></span><code>#ffd246</code></td>
    <td><span class="color-preview" style="background-color: #ffd246"></span><code>#ffd246</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #78d237"></span><code>#78d237</code></td>
    <td><span class="color-preview" style="background-color: #78d237"></span><code>#78d237</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #28b4c8"></span><code>#28b4c8</code></td>
    <td><span class="color-preview" style="background-color: #28b4c8"></span><code>#28b4c8</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #2d73f5"></span><code>#2d73f5</code></td>
    <td><span class="color-preview" style="background-color: #2d73f5"></span><code>#2d73f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #aa46be"></span><code>#aa46be</code></td>
    <td><span class="color-preview" style="background-color: #aa46be"></span><code>#aa46be</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td>Color</td>
    <td><code>$kendo-series-a</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td>Color</td>
    <td><code>rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>Color</td>
    <td><code>rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .04 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
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
<tbody><tr>
    <td>$kendo-checkbox-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 5 )</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3.5 )</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4.5 )</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-sm-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a small CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-md-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a medium CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-lg-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a large CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-checkbox-checked-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-text</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba( black, .06 )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-checked-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba( $kendo-color-primary, .3 )</code></td>
    <td><code>0 0 0 2px rgba(243, 88, 0, 0.3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled and checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-text</td>
    <td>Color</td>
    <td><code>$kendo-invalid-text</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indicator-type</td>
    <td>String</td>
    <td><code>image</code></td>
    <td><code>image</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-glyph-font-family</td>
    <td>List</td>
    <td><code>"WebComponentsIcons", monospace</code></td>
    <td><code>"WebComponentsIcons", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the CheckBox indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-glyph</td>
    <td>String</td>
    <td><code>"\e118"</code></td>
    <td><code>"\e118"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-glyph</td>
    <td>String</td>
    <td><code>"\e121"</code></td>
    <td><code>"\e121"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the indeterminate CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-checked-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='white' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image for a checked CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-indeterminate-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M4,8 h8'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23f35800' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M4,8 h8'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image for a indeterminate CheckBox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-label-margin-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the CheckBox inside a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in a horizontal CheckBox list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the CheckBox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-list-md-item-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the CheckBox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-bg</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the CheckBox' ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-opacity</td>
    <td>Number</td>
    <td><code>.25</code></td>
    <td><code>0.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the CheckBox' ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chip

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
<tbody><tr>
    <td>$kendo-chip-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chip-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-chip-line-height * 1em} + #{$kendo-chip-padding-y * 2} + #{$kendo-chip-border-width * 2} )</code></td>
    <td><code>calc( 1em + 8px + 2px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-chip-sm-padding-x,
        padding-y: $kendo-chip-sm-padding-y,
        font-size: $kendo-chip-sm-font-size,
        line-height: $kendo-chip-sm-line-height
    ),
    md: (
        padding-x: $kendo-chip-md-padding-x,
        padding-y: $kendo-chip-md-padding-y,
        font-size: $kendo-chip-md-font-size,
        line-height: $kendo-chip-md-line-height
    ),
    lg: (
        padding-x: $kendo-chip-lg-padding-x,
        padding-y: $kendo-chip-lg-padding-y,
        font-size: $kendo-chip-lg-font-size,
        line-height: $kendo-chip-lg-line-height
    )
)</code></td>
    <td><code>(sm: (padding-x: 4px, padding-y: 2px, font-size: 14px, line-height: 1), md: (padding-x: 4px, padding-y: 4px, font-size: 14px, line-height: 1), lg: (padding-x: 4px, padding-y: 6px, font-size: 14px, line-height: 1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-base-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "base": $kendo-chip-base-bg,
    "error": k-map-get( $kendo-theme-colors, "error" ),
    "info": k-map-get( $kendo-theme-colors, "info" ),
    "warning": k-map-get( $kendo-theme-colors, "warning" ),
    "success": k-map-get( $kendo-theme-colors, "success" )
)</code></td>
    <td><code>("base": #f0f0f0, "error": #d92800, "info": #2498bc, "warning": #ff9800, "success": #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-bg</td>
    <td>Color</td>
    <td><code>$kendo-chip-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .16 ) )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.16)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-gradient</td>
    <td>List</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base gradient of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-active-bg</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected solid Chip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the selected solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-text</td>
    <td>Color</td>
    <td><code>$kendo-chip-solid-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-border</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .16 ) )</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.16)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-chip-outline-hover-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-hover-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the selected outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-map-get( $kendo-spacing, 1 ),
    md: k-map-get( $kendo-spacing, 1 ),
    lg: k-map-get( $kendo-spacing, 1 )
)</code></td>
    <td><code>(sm: 4px, md: 4px, lg: 4px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the Chip list.</div></div>
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
<tbody><tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-color-primary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #e9e9e9"></span><code>#e9e9e9</code></td>
    <td><span class="color-preview" style="background-color: #e9e9e9"></span><code>#e9e9e9</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-secondary )</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #03a9f4"></span><code>#03a9f4</code></td>
    <td><span class="color-preview" style="background-color: #03a9f4"></span><code>#03a9f4</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-tertiary )</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #2498bc"></span><code>#2498bc</code></td>
    <td><span class="color-preview" style="background-color: #2498bc"></span><code>#2498bc</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #3ea44e"></span><code>#3ea44e</code></td>
    <td><span class="color-preview" style="background-color: #3ea44e"></span><code>#3ea44e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ff9800"></span><code>#ff9800</code></td>
    <td><span class="color-preview" style="background-color: #ff9800"></span><code>#ff9800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>Color</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><span class="color-preview" style="background-color: #404040"></span><code>#404040</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
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
<tbody><tr>
    <td>$kendo-component-bg</td>
    <td>Color</td>
    <td><code>$kendo-body-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$kendo-grid-bg: $kendo-component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-text</td>
    <td>Color</td>
    <td><code>$kendo-body-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dialog

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
<tbody><tr>
    <td>$kendo-dialog-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": #f35800, "light": #ebebeb, "dark": #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Floating-action-button

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
<tbody><tr>
    <td>$kendo-fab-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-icon-padding-x</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB icon spacing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB items horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB items vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item text horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-item-text-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item text vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td>Number</td>
    <td><code>1.2</code></td>
    <td><code>1.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 ) + $kendo-fab-icon-padding-x</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item icon horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-item-icon-padding-x</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item icon vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the FAB item icon border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #f35800, "secondary": #e9e9e9, "tertiary": #03a9f4, "info": #2498bc, "success": #3ea44e, "warning": #ff9800, "error": #d92800, "dark": #404040, "light": #ebebeb, "inverse": #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-fab-sm-padding-x,
        padding-y: $kendo-fab-sm-padding-y
    ),
    md: (
        padding-x: $kendo-fab-md-padding-x,
        padding-y: $kendo-fab-md-padding-y
    ),
    lg: (
        padding-x: $kendo-fab-lg-padding-x,
        padding-y: $kendo-fab-lg-padding-y
    )
)</code></td>
    <td><code>(sm: (padding-x: 8px, padding-y: 8px), md: (padding-x: 16px, padding-y: 16px), lg: (padding-x: 24px, padding-y: 24px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-shadow</td>
    <td>List</td>
    <td><code>0 6px 10px rgba( black, .14 ), 0 1px 18px rgba( black, .12 ), 0 3px 5px rgba( black, .2 )</code></td>
    <td><code>0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-shadow</td>
    <td>List</td>
    <td><code>0 6px 10px k-try-tint( rgba( black, .14 ), .5 ), 0 1px 18px k-try-tint( rgba( black, .12 ), .5 ), 0 3px 5px k-try-tint( rgba( black, .2 ), .5 )</code></td>
    <td><code>0 6px 10px rgba(91, 91, 91, 0.1744), 0 1px 18px rgba(101, 101, 101, 0.1552), 0 3px 5px rgba(70, 70, 70, 0.232)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled shadow of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-active-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active shadow of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-outline-width</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-shadow</td>
    <td>List</td>
    <td><code>$kendo-fab-shadow</code></td>
    <td><code>0 6px 10px rgba(0, 0, 0, 0.14), 0 1px 18px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-disabled-shadow</td>
    <td>List</td>
    <td><code>$kendo-fab-disabled-shadow</code></td>
    <td><code>0 6px 10px rgba(91, 91, 91, 0.1744), 0 1px 18px rgba(101, 101, 101, 0.1552), 0 3px 5px rgba(70, 70, 70, 0.232)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled shadow of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-shadow</td>
    <td>Null</td>
    <td><code>$kendo-fab-active-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active shadow of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-width</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-outline-color</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .08)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the FAB item.</div></div>
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
<tbody><tr>
    <td>$kendo-grid-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-table-md-cell-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-table-md-cell-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-header-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-grid-header-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-grid-grouping-header-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-grid-filter-cell-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-grid-cell-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid edit cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-y</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid edit cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-text</td>
    <td>Color</td>
    <td><code>$kendo-table-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>Color</td>
    <td><code>$kendo-table-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-gradient</td>
    <td>List</td>
    <td><code>$kendo-table-header-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-footer-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>Color</td>
    <td><code>$kendo-table-footer-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>Color</td>
    <td><code>$kendo-table-footer-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-alt-row-bg</code></td>
    <td><span class="color-preview" style="background-color: whitesmoke"></span><code>whitesmoke</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-text</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-border</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: rgba(243, 88, 0, 0.25)"></span><code>rgba(243, 88, 0, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-border</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-bg</td>
    <td>Color</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>Color</td>
    <td><code>$kendo-grid-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>Color</td>
    <td><code>$kendo-grid-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border-width</td>
    <td>Number</td>
    <td><code>$kendo-grid-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the selection aggregates items</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-line-height</td>
    <td>Number</td>
    <td><code>$kendo-grid-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-font-weight</td>
    <td>Number</td>
    <td><code>$kendo-font-weight-bold</code></td>
    <td><code>700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-hover-bg</td>
    <td>Color</td>
    <td><code>rgba( k-contrast-color( $kendo-grid-bg ), .12 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.12)"></span><code>rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid row resize indicator</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-active-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Active background color of the grid row resize indicator</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-height</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, .5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the grid row resize indicator</div></div>
    </td>
</tr>
</tbody>
</table>

### Input

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
<tbody><tr>
    <td>$kendo-input-default-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-input-sm-padding-x,
        padding-y: $kendo-input-sm-padding-y,
        font-size: $kendo-input-sm-font-size,
        line-height: $kendo-input-sm-line-height,
        button-padding-x: $kendo-input-sm-padding-y,
        button-padding-y: $kendo-input-sm-padding-y
    ),
    md: (
        padding-x: $kendo-input-md-padding-x,
        padding-y: $kendo-input-md-padding-y,
        font-size: $kendo-input-md-font-size,
        line-height: $kendo-input-md-line-height,
        button-padding-x: $kendo-input-md-padding-y,
        button-padding-y: $kendo-input-md-padding-y
    ),
    lg: (
        padding-x: $kendo-input-lg-padding-x,
        padding-y: $kendo-input-lg-padding-y,
        font-size: $kendo-input-lg-font-size,
        line-height: $kendo-input-lg-line-height,
        button-padding-x: $kendo-input-lg-padding-y,
        button-padding-y: $kendo-input-lg-padding-y
    )
)</code></td>
    <td><code>(sm: (padding-x: 8px, padding-y: 2px, font-size: 14px, line-height: 1.4285714286, button-padding-x: 2px, button-padding-y: 2px), md: (padding-x: 8px, padding-y: 4px, font-size: 14px, line-height: 1.4285714286, button-padding-x: 4px, button-padding-y: 4px), lg: (padding-x: 12px, padding-y: 8px, font-size: 16px, line-height: 1.5, button-padding-x: 8px, button-padding-y: 8px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-button-hover-border</code></td>
    <td><span class="color-preview" style="background-color: #b6b6b6"></span><code>#b6b6b6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-border</td>
    <td>Color</td>
    <td><code>rgba( black, .1 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.1)"></span><code>rgba(0, 0, 0, 0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-shadow</td>
    <td>List</td>
    <td><code>0 2px 4px 0 rgba( black, .03 ), 0 4px 5px 0 rgba( black, .04 )</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-selected-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td>Color</td>
    <td><code>rgba( $kendo-button-text, .5)</code></td>
    <td><span class="color-preview" style="background-color: rgba(39, 39, 39, 0.5)"></span><code>rgba(39, 39, 39, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-border</td>
    <td>Color</td>
    <td><code>rgba( $kendo-button-text, .8)</code></td>
    <td><span class="color-preview" style="background-color: rgba(39, 39, 39, 0.8)"></span><code>rgba(39, 39, 39, 0.8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-input-focus-shadow</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-text</td>
    <td>Color</td>
    <td><code>$kendo-input-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-input-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-input-hover-border</code></td>
    <td><span class="color-preview" style="background-color: #b6b6b6"></span><code>#b6b6b6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-input-focus-shadow</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-opacity</td>
    <td>Number</td>
    <td><code>.5</code></td>
    <td><code>0.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-values-margin-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-values-margin-x</td>
    <td>Number</td>
    <td><code>$kendo-input-values-margin-y</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-spinner-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-spinner-icon-offset</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon offset of the Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-separator-color</td>
    <td>Color</td>
    <td><code>$kendo-input-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-separator-opacity</td>
    <td>Number</td>
    <td><code>.5</code></td>
    <td><code>0.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-shadow</td>
    <td>Null</td>
    <td><code>$kendo-invalid-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the invalid Input components.</div></div>
    </td>
</tr>
</tbody>
</table>

### List

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
<tbody><tr>
    <td>$kendo-list-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the List components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List component, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List component, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border-width</td>
    <td>List</td>
    <td><code>0 0 1px</code></td>
    <td><code>0 0 1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List header, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-weight</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the List group items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the List group items, when no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border-width</td>
    <td>List</td>
    <td><code>1px 0 0</code></td>
    <td><code>1px 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the List group items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the List group items, if no size is set.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-weight</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of a List group item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-list-sm-font-size,
        line-height: $kendo-list-sm-line-height,
        header-padding-x: $kendo-list-sm-header-padding-x,
        header-padding-y: $kendo-list-sm-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-sm-item-padding-x,
        item-padding-y: $kendo-list-sm-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-sm-group-item-padding-x,
        group-item-padding-y: $kendo-list-sm-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    md: (
        font-size: $kendo-list-md-font-size,
        line-height: $kendo-list-md-line-height,
        header-padding-x: $kendo-list-md-header-padding-x,
        header-padding-y: $kendo-list-md-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-md-item-padding-x,
        item-padding-y: $kendo-list-md-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-md-group-item-padding-x,
        group-item-padding-y: $kendo-list-md-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    lg: (
        font-size: $kendo-list-lg-font-size,
        line-height: $kendo-list-lg-line-height,
        header-padding-x: $kendo-list-lg-header-padding-x,
        header-padding-y: $kendo-list-lg-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-lg-item-padding-x,
        item-padding-y: $kendo-list-lg-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-lg-group-item-padding-x,
        group-item-padding-y: $kendo-list-lg-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    )
)</code></td>
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, header-padding-x: 8px, header-padding-y: 2px, header-font-size: null, header-line-height: null, item-padding-x: 8px, item-padding-y: 2px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 2px, group-item-font-size: null, group-item-line-height: null), md: (font-size: 14px, line-height: 1.4285714286, header-padding-x: 8px, header-padding-y: 4px, header-font-size: null, header-line-height: null, item-padding-x: 8px, item-padding-y: 4px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 4px, group-item-font-size: null, group-item-line-height: null), lg: (font-size: 16px, line-height: 1.5, header-padding-x: 8px, header-padding-y: 6px, header-font-size: null, header-line-height: null, item-padding-x: 12px, item-padding-y: 8px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 6px, group-item-font-size: null, group-item-line-height: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the List.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the List header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba( black, .12 )</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the List group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-no-data-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the 'No Data' text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-option-label-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the 'Option Label' text.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listbox

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
<tbody><tr>
    <td>$kendo-listbox-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between the listbox elements.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-button-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between the listbox buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-default-height</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inline item padding of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Block item padding of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu

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
<tbody><tr>
    <td>$kendo-menu-popup-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popup-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-bg</td>
    <td>Color</td>
    <td><code>$kendo-popup-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-text</td>
    <td>Color</td>
    <td><code>$kendo-popup-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td>Color</td>
    <td><code>$kendo-popup-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-end</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-menu-popup-item-padding-x * 2} + #{$kendo-icon-size} )</code></td>
    <td><code>calc( 16px + 16px )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-start</td>
    <td>Number</td>
    <td><code>$kendo-menu-popup-sm-item-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-end</td>
    <td>Calculation</td>
    <td><code>calc( -1 * (#{$kendo-menu-popup-sm-item-padding-end} - #{k-math-div( $kendo-menu-popup-sm-item-padding-x, 2 )}) )</code></td>
    <td><code>calc(-1 * (calc( 16px + 16px ) - 4px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-spacing</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the menu items in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-menu-item-focus-shadow</code></td>
    <td><code>inset 0 0 3px 1px rgba(39, 39, 39, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused menu item in popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu-button

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
<tbody><tr>
    <td>$kendo-menu-button-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the arrow button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Notification

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
<tbody><tr>
    <td>$kendo-notification-padding-x</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the notification container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-shadow</td>
    <td>List</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>Number</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal spacing of the notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #f35800, "secondary": #e9e9e9, "tertiary": #03a9f4, "info": #2498bc, "success": #3ea44e, "warning": #ff9800, "error": #d92800, "dark": #404040, "light": #ebebeb, "inverse": #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors of the notification.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pager

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
<tbody><tr>
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

### Picker

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
<tbody><tr>
    <td>$kendo-picker-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-gradient</td>
    <td>List</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-button-hover-border</code></td>
    <td><span class="color-preview" style="background-color: #b6b6b6"></span><code>#b6b6b6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-shadow</td>
    <td>Null</td>
    <td><code>$kendo-button-hover-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-bg</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-text</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-border</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-gradient</td>
    <td>Null</td>
    <td><code>$kendo-button-focus-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-border</td>
    <td>Color</td>
    <td><code>rgba( $kendo-picker-outline-text, .5)</code></td>
    <td><span class="color-preview" style="background-color: rgba(39, 39, 39, 0.5)"></span><code>rgba(39, 39, 39, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-picker-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-text</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-picker-outline-hover-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-picker-outline-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-picker-focus-shadow</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the outline focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-bg</td>
    <td>Color</td>
    <td><code>rgba( $kendo-button-text, .04 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(39, 39, 39, 0.04)"></span><code>rgba(39, 39, 39, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-border</td>
    <td>Color</td>
    <td><code>rgba( $kendo-button-border, .16 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(202, 202, 202, 0.16)"></span><code>rgba(202, 202, 202, 0.16)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-picker-focus-shadow</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the flat focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered and focused Picker components.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popup

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
<tbody><tr>
    <td>$kendo-popup-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-shadow</td>
    <td>List</td>
    <td><code>0 2px 4px 0 rgba( black, .03 ), 0 4px 5px 0 rgba( black, .04 )</code></td>
    <td><code>0 2px 4px 0 rgba(0, 0, 0, 0.03), 0 4px 5px 0 rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Progressbar

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
<tbody><tr>
    <td>$kendo-progressbar-height</td>
    <td>Number</td>
    <td><code>22px</code></td>
    <td><code>22px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-horizontal-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal width of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-animation-timing</td>
    <td>List</td>
    <td><code>1s linear infinite</code></td>
    <td><code>1s linear infinite</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Animation timing of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-component-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress background color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy( $kendo-progressbar-value-bg )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress text color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-progressbar-value-bg )</code></td>
    <td><span class="color-preview" style="background-color: #e05100"></span><code>#e05100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress border color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress background gradient of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-bg</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-text</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-border</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-chunk-border</td>
    <td>Color</td>
    <td><code>$kendo-body-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the chunk progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-arc-stroke</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Arc stroke color of the circular progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-scale-stroke</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scale stroke background color of the circular progressbar.</div></div>
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
<tbody><tr>
    <td>$kendo-radio-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 5 )</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3.5 )</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-glyph-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4.5 )</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-ripple-size</td>
    <td>Number</td>
    <td><code>300%</code></td>
    <td><code>300%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        size: $kendo-radio-sm-size,
        glyph-size: $kendo-radio-sm-glyph-size,
        ripple-size: $kendo-radio-sm-ripple-size
    ),
    md: (
        size: $kendo-radio-md-size,
        glyph-size: $kendo-radio-md-glyph-size,
        ripple-size: $kendo-radio-md-ripple-size
    ),
    lg: (
        size: $kendo-radio-lg-size,
        glyph-size: $kendo-radio-lg-glyph-size,
        ripple-size: $kendo-radio-lg-ripple-size
    )
)</code></td>
    <td><code>(sm: (size: 12px, glyph-size: 10px, ripple-size: 300%), md: (size: 16px, glyph-size: 14px, ripple-size: 300%), lg: (size: 20px, glyph-size: 18px, ripple-size: 300%))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different RadioButton sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-checked-border</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-checkbox-focus-shadow</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-checked-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-shadow</td>
    <td>List</td>
    <td><code>$kendo-checkbox-focus-checked-shadow</code></td>
    <td><code>0 0 0 2px rgba(243, 88, 0, 0.3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-disabled-checked-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-invalid-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-invalid-text</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #d92800"></span><code>#d92800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-type</td>
    <td>String</td>
    <td><code>image</code></td>
    <td><code>image</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td>List</td>
    <td><code>"WebComponentsIcons", monospace</code></td>
    <td><code>"WebComponentsIcons", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the RadioButton indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td>String</td>
    <td><code>"\e308"</code></td>
    <td><code>"\e308"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><circle cx='50%' cy='50%' r='4' fill='#{$kendo-radio-checked-text}'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3e%3ccircle cx='50%25' cy='50%25' r='4' fill='white'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-image</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the disabled and checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-margin-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the RadioButton inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-list-md-item-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-bg</td>
    <td>Color</td>
    <td><code>$kendo-radio-checked-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td>Number</td>
    <td><code>.25</code></td>
    <td><code>0.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the RadioButton ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Split-button

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
<tbody><tr>
    <td>$kendo-split-button-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the SplitButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sm-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-sm-padding-y</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-lg-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sm-arrow-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-button-sm-padding-y</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-button-lg-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large arrow Button.</div></div>
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
<tbody><tr>
    <td>$kendo-switch-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td>String</td>
    <td><code>inline</code></td>
    <td><code>inline</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The display of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: ( font-size: 12px, track-width: 48px, track-height: 26px, thumb-width: 20px, thumb-height: 20px, thumb-offset: 3px, label-offset: 4px ),
    md: ( font-size: 12px, track-width: 56px, track-height: 30px, thumb-width: 24px, thumb-height: 24px, thumb-offset: 3px, label-offset: 6px ),
    lg: ( font-size: 12px, track-width: 64px, track-height: 34px, thumb-width: 28px, thumb-height: 28px, thumb-offset: 3px, label-offset: 8px )
)</code></td>
    <td><code>(sm: (font-size: 12px, track-width: 48px, track-height: 26px, thumb-width: 20px, thumb-height: 20px, thumb-offset: 3px, label-offset: 4px), md: (font-size: 12px, track-width: 56px, track-height: 30px, thumb-width: 24px, thumb-height: 24px, thumb-offset: 3px, label-offset: 6px), lg: (font-size: 12px, track-width: 64px, track-height: 34px, thumb-width: 28px, thumb-height: 28px, thumb-offset: 3px, label-offset: 8px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different Switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-ring</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .25 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-switch-off-track-bg )</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td>Color</td>
    <td><code>$kendo-switch-off-track-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-switch-off-thumb-bg )</code></td>
    <td><span class="color-preview" style="background-color: #d8d8d8"></span><code>#d8d8d8</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-switch-off-thumb-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track wen the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-ring</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .25 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track wen the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-switch-on-thumb-bg )</code></td>
    <td><span class="color-preview" style="background-color: #e05100"></span><code>#e05100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-switch-on-thumb-bg )</code></td>
    <td><span class="color-preview" style="background-color: #e05100"></span><code>#e05100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-switch-on-thumb-hover-bg )</code></td>
    <td><span class="color-preview" style="background-color: #ce4b00"></span><code>#ce4b00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
</tbody>
</table>

### Table

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
<tbody><tr>
    <td>$kendo-table-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-font-size-md,
        line-height: $kendo-line-height-md,
        cell-padding-x: $kendo-table-sm-cell-padding-x,
        cell-padding-y: $kendo-table-sm-cell-padding-y
    ),
    md: (
        font-size: $kendo-font-size-md,
        line-height: $kendo-line-height-md,
        cell-padding-x: $kendo-table-md-cell-padding-x,
        cell-padding-y: $kendo-table-md-cell-padding-y
    ),
    lg: (
        font-size: $kendo-font-size-md,
        line-height: $kendo-line-height-md,
        cell-padding-x: $kendo-table-lg-cell-padding-x,
        cell-padding-y: $kendo-table-lg-cell-padding-y
    )
)</code></td>
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 4px, cell-padding-y: 4px), md: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 8px), lg: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 10px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-gradient</td>
    <td>List</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-table-bg, .5 )</code></td>
    <td><span class="color-preview" style="background-color: whitesmoke"></span><code>whitesmoke</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade( $kendo-table-bg, 1 )</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>Color</td>
    <td><code>rgba( $kendo-selected-bg, .25 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(243, 88, 0, 0.25)"></span><code>rgba(243, 88, 0, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
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
<tbody><tr>
    <td>$kendo-tabstrip-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gap</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-hover-border</code></td>
    <td><span class="color-preview" style="background-color: #bababa"></span><code>#bababa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-gradient</td>
    <td>Bool</td>
    <td><code>false</code></td>
    <td><code>false</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-focus-border</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
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
<tbody><tr>
    <td>$kendo-toolbar-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the toolbar tools.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: #cacaca"></span><code>#cacaca</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the border around the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the separator border of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 4px 0 rgba(202, 202, 202, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-toolbar-sm-padding-x,
        padding-y: $kendo-toolbar-sm-padding-y,
        spacing: $kendo-toolbar-sm-spacing
    ),
    md: (
        padding-x: $kendo-toolbar-md-padding-x,
        padding-y: $kendo-toolbar-md-padding-y,
        spacing: $kendo-toolbar-md-spacing
    ),
    lg: (
        padding-x: $kendo-toolbar-lg-padding-x,
        padding-y: $kendo-toolbar-lg-padding-y,
        spacing: $kendo-toolbar-lg-spacing
    )
)</code></td>
    <td><code>(sm: (padding-x: 4px, padding-y: 4px, spacing: 6px), md: (padding-x: 8px, padding-y: 8px, spacing: 8px), lg: (padding-x: 10px, padding-y: 10px, spacing: 10px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Treeview

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
<tbody><tr>
    <td>$kendo-treeview-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Indentation of child groups in treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-treeview-sm-font-size,
        line-height: $kendo-treeview-sm-line-height,
        item-padding-x: $kendo-treeview-sm-item-padding-x,
        item-padding-y: $kendo-treeview-sm-item-padding-y
    ),
    md: (
        font-size: $kendo-treeview-md-font-size,
        line-height: $kendo-treeview-md-line-height,
        item-padding-x: $kendo-treeview-md-item-padding-x,
        item-padding-y: $kendo-treeview-md-item-padding-y
    ),
    lg: (
        font-size: $kendo-treeview-lg-font-size,
        line-height: $kendo-treeview-lg-line-height,
        item-padding-x: $kendo-treeview-lg-item-padding-x,
        item-padding-y: $kendo-treeview-lg-item-padding-y
    )
)</code></td>
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 2px), md: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 4px), lg: (font-size: 16px, line-height: 1.5, item-padding-x: 12px, item-padding-y: 8px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #dddddd"></span><code>#dddddd</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-hover-border</code></td>
    <td><span class="color-preview" style="background-color: #bababa"></span><code>#bababa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-hover-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-selected-border</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td>List</td>
    <td><code>$kendo-selected-gradient</code></td>
    <td><code>rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #f35800"></span><code>#f35800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #cc4a00"></span><code>#cc4a00</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-treeview-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of a focused load more.</div></div>
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
<tbody><tr>
    <td>$kendo-font-size</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans-serif</td>
    <td>List</td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td>List</td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height</td>
    <td>Number</td>
    <td><code>k-math-div( 20, 14 )</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $kendo-font-size.</div></div>
    </td>
</tr>
</tbody>
</table>

### Window

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
<tbody><tr>
    <td>$kendo-window-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": #f35800, "light": #ebebeb, "dark": #404040)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the window.</div></div>
    </td>
</tr>
</tbody>
</table>








## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
