---
title: Customization
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault
position: 9
---

# Customization




## Variables

The following table lists the available variables for customizing the Default theme.

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
    <td>$kendo-icon-size</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xs</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * .75 )</code></td>
    <td><code>calc(16px * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">xtra small icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-sm</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * .875 )</code></td>
    <td><code>calc(16px * 0.875)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-md</td>
    <td>Number</td>
    <td><code>$kendo-icon-size</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-lg</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 1.25 )</code></td>
    <td><code>calc(16px * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 1.5 )</code></td>
    <td><code>calc(16px * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Extra large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xxl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 2 )</code></td>
    <td><code>calc(16px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Double extra large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xxxl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 3 )</code></td>
    <td><code>calc(16px * 3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Triple extra large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-x</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-y</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-sm-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-sm-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-md-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-md-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-lg-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-lg-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large vertical padding.</div></div>
    </td>
</tr>
<tr>
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
    <td>$kendo-border-radius-sm</td>
    <td>Number</td>
    <td><code>$kendo-border-radius - k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small border radius.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>Number</td>
    <td><code>$kendo-border-radius</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium border radius.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Number</td>
    <td><code>$kendo-border-radius + k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large border radius.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-body-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-body-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-subtle-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Subtle text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links on hover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transition</td>
    <td>List</td>
    <td><code>color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out</code></td>
    <td><code>color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transition used across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>String</td>
    <td><code>grayscale(.1)</code></td>
    <td><code>grayscale(0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Filter used for disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Number</td>
    <td><code>.6</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity used for disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>Color</td>
    <td><code>$kendo-body-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>Color</td>
    <td><code>rgba(black, 0.08)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>List</td>
    <td><code>rgba(black, 0), rgba(black, 0.02)</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade($kendo-base-bg, 0.5)</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-selected-bg)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-bg</td>
    <td>Color</td>
    <td><code>k-try-shade($kendo-selected-bg, 0.5)</code></td>
    <td><span class="color-preview" style="background-color: #f55f54"></span><code>#f55f54</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #8f8f8f"></span><code>#8f8f8f</code></td>
    <td><span class="color-preview" style="background-color: #8f8f8f"></span><code>#8f8f8f</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Appbar

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
    <td>$kendo-appbar-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-zindex</td>
    <td>Number</td>
    <td><code>1000</code></td>
    <td><code>1000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The z-index of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the AppBar sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-light</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-light-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-light ), k-contrast-legacy( $kendo-color-light ))</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on light theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-dark</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the AppBar based on dark theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-dark-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-dark ), k-contrast-legacy( $kendo-color-dark ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the AppBar based on dark theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-box-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-bottom-box-shadow</td>
    <td>String</td>
    <td><code>$kendo-appbar-box-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the AppBar with bottom position.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Avatar.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #ff6358, "secondary": #666666, "tertiary": #03a9f4, "info": #0058e9, "success": #37b400, "warning": #ffc000, "error": #f31700, "dark": #424242, "light": #ebebeb, "inverse": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Avatar.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights used along with the $kendo-font-size variable.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-badge-line-height</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-line-height * 1em} + #{$kendo-badge-padding-y * 2} + #{$kendo-badge-border-width * 2})</code></td>
    <td><code>calc(1em + 8px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-sm-line-height * 1em} + #{$kendo-badge-sm-padding-y * 2} + #{$kendo-badge-border-width * 2} )</code></td>
    <td><code>calc(1em + 4px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the small circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-md-line-height * 1em} + #{$kendo-badge-md-padding-y * 2} + #{$kendo-badge-border-width * 2} )</code></td>
    <td><code>calc(1em + 8px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the medium circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-lg-line-height * 1em} + #{$kendo-badge-lg-padding-y * 2} + #{$kendo-badge-border-width * 2} )</code></td>
    <td><code>calc(1em + 12px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the large circular Badge.</div></div>
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
    <td><code>(sm: (padding-x: 2px, padding-y: 2px, font-size: 10px, line-height: 1, min-width: calc(1em + 4px + 2px)), md: (padding-x: 4px, padding-y: 4px, font-size: 10px, line-height: 1, min-width: calc(1em + 8px + 2px)), lg: (padding-x: 6px, padding-y: 6px, font-size: 10px, line-height: 1, min-width: calc(1em + 12px + 2px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Badge.</div></div>
    </td>
</tr>
</tbody>
</table>

### Bottom-navigation

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
    <td>$kendo-bottom-nav-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the BottomNavigation items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-border-width</td>
    <td>List</td>
    <td><code>1px 0px 0px 0px</code></td>
    <td><code>1px 0px 0px 0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td>String</td>
    <td><code>normal</code></td>
    <td><code>normal</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-letter-spacing</td>
    <td>Number</td>
    <td><code>.2px</code></td>
    <td><code>0.2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-width</td>
    <td>Number</td>
    <td><code>72px</code></td>
    <td><code>72px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-max-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size * 2.5} + #{$kendo-padding-md-x * 2} - #{$kendo-bottom-nav-padding-x * 2} )</code></td>
    <td><code>calc(40px + 16px - 8px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td>List</td>
    <td><code>0 k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>0 4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat BottomNavigation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Breadcrumb

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
    <td>$kendo-breadcrumb-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the small Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the medium Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the height Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 2px 1px rgba(0, 0, 0, .06)</code></td>
    <td><code>0 0 2px 1px rgba(0, 0, 0, 0.06)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-link-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-link-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-link-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-link-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-link-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-link-padding-y</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border-radius of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-icon-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-icon-link-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-icon-link-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sm-icon-link-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-sm-icon-link-padding-y</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-md-icon-link-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-icon-link-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-lg-icon-link-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-breadcrumb-lg-icon-link-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-initial-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-icon-spacing</td>
    <td>Number</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Breadcrumb link icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-breadcrumb-link-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-current-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the current Breadcrumb root link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        link-padding-x: $kendo-breadcrumb-sm-link-padding-x,
        link-padding-y: $kendo-breadcrumb-sm-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-sm-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-sm-icon-link-padding-y,
        font-size: $kendo-breadcrumb-sm-font-size,
        line-height: $kendo-breadcrumb-sm-line-height
    ),
    md: (
        link-padding-x: $kendo-breadcrumb-md-link-padding-x,
        link-padding-y: $kendo-breadcrumb-md-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-md-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-md-icon-link-padding-y,
        font-size: $kendo-breadcrumb-md-font-size,
        line-height: $kendo-breadcrumb-md-line-height
    ),
    lg: (
        link-padding-x: $kendo-breadcrumb-lg-link-padding-x,
        link-padding-y: $kendo-breadcrumb-lg-link-padding-y,
        icon-link-padding-x: $kendo-breadcrumb-lg-icon-link-padding-x,
        icon-link-padding-y: $kendo-breadcrumb-lg-icon-link-padding-y,
        font-size: $kendo-breadcrumb-lg-font-size,
        line-height: $kendo-breadcrumb-lg-line-height
    )
)</code></td>
    <td><code>(sm: (link-padding-x: 8px, link-padding-y: 4px, icon-link-padding-x: 6px, icon-link-padding-y: 6px, font-size: 14px, line-height: 1.4285714286), md: (link-padding-x: 8px, link-padding-y: 6px, icon-link-padding-x: 8px, icon-link-padding-y: 8px, font-size: 14px, line-height: 1.4285714286), lg: (link-padding-x: 8px, link-padding-y: 8px, icon-link-padding-x: 12px, icon-link-padding-y: 12px, font-size: 16px, line-height: 1.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Breadcrumb.</div></div>
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
    <td><code>$kendo-button-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
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
    <td><code>$kendo-button-padding-y</code></td>
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
    <td><code>$kendo-button-font-size</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size the.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size the of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-button-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size the of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size the of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} + #{$kendo-button-border-width * 2} )</code></td>
    <td><code>calc(1.4285714286em + 8px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-line-height * 1em} + #{$kendo-button-padding-y * 2} )</code></td>
    <td><code>calc(1.4285714286em + 8px)</code></td>
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
    <td><code>(sm: (padding-x: 8px, padding-y: 2px, font-size: 14px, line-height: 1.4285714286), md: (padding-x: 8px, padding-y: 4px, font-size: 14px, line-height: 1.4285714286), lg: (padding-x: 8px, padding-y: 8px, font-size: 16px, line-height: 1.5))</code></td>
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
    ( "base": if($kendo-enable-color-system, k-color( base ), #f5f5f5) )
)</code></td>
    <td><code>("primary": #ff6358, "secondary": #666666, "tertiary": #03a9f4, "info": #0058e9, "success": #37b400, "warning": #ffc000, "error": #f31700, "dark": #424242, "light": #ebebeb, "inverse": #424242, "base": #f5f5f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), #f5f5f5)</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-base ), #424242)</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), rgba( black, .08 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>List</td>
    <td><code>if($kendo-enable-color-system, null, (rgba( black, 0 ), rgba( black, .02 )))</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-button-bg, .5 ))</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( base-active ), k-try-shade( $kendo-button-bg, 1.5 ))</code></td>
    <td><span class="color-preview" style="background-color: #d8d8d8"></span><code>#d8d8d8</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-selected-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-button-selected-bg ))</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( $kendo-button-border, .08 ))</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>.04</code></td>
    <td><code>0.04</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The overlay opacity of the hovered flat Button. Used to create a background for the flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-flat-button-focus-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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

### Calendar

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
    <td>$kendo-calendar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-size</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-shadow</td>
    <td>List</td>
    <td><code>0 1px 3px 1px rgba(black, .1)</code></td>
    <td><code>0 1px 3px 1px rgba(0, 0, 0, 0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the header in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-nav-gap</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the navigation of the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the footer in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the footer in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-x</td>
    <td>Number</td>
    <td><code>.25em</code></td>
    <td><code>0.25em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-padding-x</code></td>
    <td><code>0.25em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-line-height</td>
    <td>Number</td>
    <td><code>$kendo-calendar-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-width</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-height</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-line-height</td>
    <td>Number</td>
    <td><code>2</code></td>
    <td><code>2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the header cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-height</td>
    <td>Number</td>
    <td><code>$kendo-calendar-cell-size</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-weight</td>
    <td>String</td>
    <td><code>bold</code></td>
    <td><code>bold</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the caption in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-width</td>
    <td>Number</td>
    <td><code>($kendo-calendar-cell-size * 8)</code></td>
    <td><code>256px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-height</td>
    <td>Number</td>
    <td><code>($kendo-calendar-cell-size * 7)</code></td>
    <td><code>224px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the Calendar view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the weekend cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the weekend cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-style</td>
    <td>String</td>
    <td><code>color</code></td>
    <td><code>color</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the current day in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-color</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the current day in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-text</td>
    <td>Color</td>
    <td><code>$kendo-calendar-header-cell-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the week number cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-text</td>
    <td>Color</td>
    <td><code>$kendo-calendar-header-cell-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-hover-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-selected-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f55f54"></span><code>#f55f54</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-hover-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba( $kendo-color-black, .08 )</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-calendar-cell-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected and focused cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-item-height</td>
    <td>Number</td>
    <td><code>2em</code></td>
    <td><code>2em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the items in the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-bg</td>
    <td>Color</td>
    <td><code>$kendo-calendar-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-text</td>
    <td>Color</td>
    <td><code>$kendo-calendar-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-border</td>
    <td>Color</td>
    <td><code>$kendo-calendar-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered items in the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the header in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the header in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-height</td>
    <td>Number</td>
    <td><code>( $kendo-calendar-cell-size * 9 )</code></td>
    <td><code>288px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Calendar view in the Infinite Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-cell-size</td>
    <td>Number</td>
    <td><code>28px</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cells in the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-cell-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sm-cell-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the small Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-cell-size</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cells in the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-cell-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-md-cell-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the medium Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-cell-size</td>
    <td>Number</td>
    <td><code>40px</code></td>
    <td><code>40px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cells in the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-cell-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-lg-cell-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the large Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-calendar-sm-font-size,
        line-height: $kendo-calendar-sm-line-height,
        cell-size: $kendo-calendar-sm-cell-size,
        cell-padding-x: $kendo-calendar-sm-cell-padding-y,
        cell-padding-y: $kendo-calendar-sm-cell-padding-x
    ),
    md: (
        font-size: $kendo-calendar-md-font-size,
        line-height: $kendo-calendar-md-line-height,
        cell-size: $kendo-calendar-md-cell-size,
        cell-padding-x: $kendo-calendar-md-cell-padding-y,
        cell-padding-y: $kendo-calendar-md-cell-padding-x
    ),
    lg: (
        font-size: $kendo-calendar-lg-font-size,
        line-height: $kendo-calendar-lg-line-height,
        cell-size: $kendo-calendar-lg-cell-size,
        cell-padding-x: $kendo-calendar-lg-cell-padding-y,
        cell-padding-y: $kendo-calendar-lg-cell-padding-x
    )
)</code></td>
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, cell-size: 28px, cell-padding-x: 2px, cell-padding-y: 2px), md: (font-size: 14px, line-height: 1.4285714286, cell-size: 32px, cell-padding-x: 4px, cell-padding-y: 4px), lg: (font-size: 16px, line-height: 1.5, cell-size: 40px, cell-padding-x: 8px, cell-padding-y: 8px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes Map of the Calendar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Captcha

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
    <td>$kendo-captcha-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-width</td>
    <td>Number</td>
    <td><code>280px</code></td>
    <td><code>280px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-gap</td>
    <td>Number</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-text</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-border</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-wrap-gap</td>
    <td>Number</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha image wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-controls-gap</td>
    <td>Number</td>
    <td><code>$kendo-captcha-spacer</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Captcha image controls.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-margin-top</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-captcha-spacer, 2 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Captcha validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Captcha validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-message-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Captcha validation message.</div></div>
    </td>
</tr>
</tbody>
</table>

### Card

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
    <td>$kendo-card-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-lg</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-inner-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-card-border-radius} - #{$kendo-card-border-width} )</code></td>
    <td><code>calc(6px - 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inner border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Cards in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-border</td>
    <td>Color</td>
    <td><code>rgba( black, .15 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.15)"></span><code>rgba(0, 0, 0, 0.15)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom border width of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-margin-bottom</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-size</td>
    <td>Number</td>
    <td><code>$kendo-h5-font-size</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-weight</td>
    <td>Number</td>
    <td><code>$kendo-font-weight-normal</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-margin-bottom</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-line-height</td>
    <td>String</td>
    <td><code>normal</code></td>
    <td><code>normal</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-weight</td>
    <td>Number</td>
    <td><code>$kendo-font-weight-normal</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-img-max-width</td>
    <td>Number</td>
    <td><code>100px</code></td>
    <td><code>100px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Card image.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-size</td>
    <td>Number</td>
    <td><code>45px</code></td>
    <td><code>45px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Avatar in the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-spacing</td>
    <td>Number</td>
    <td><code>$kendo-card-header-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Avatar and the text in the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scroll-button-radius</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the scroll button in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scroll-button-offset</td>
    <td>Number</td>
    <td><code>-$kendo-button-border-width</code></td>
    <td><code>-1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the scroll button in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-callout-width</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Card callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-callout-height</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Card callout.</div></div>
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
    <td><code>if($kendo-enable-color-system, k-color( series-a ), #ff6358)</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-b ), #ffe162)</code></td>
    <td><span class="color-preview" style="background-color: #ffe162"></span><code>#ffe162</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-c ), #4cd180)</code></td>
    <td><span class="color-preview" style="background-color: #4cd180"></span><code>#4cd180</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-d ), #4b5ffa)</code></td>
    <td><span class="color-preview" style="background-color: #4b5ffa"></span><code>#4b5ffa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-e ), #ac58ff)</code></td>
    <td><span class="color-preview" style="background-color: #ac58ff"></span><code>#ac58ff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-f ), #ff5892)</code></td>
    <td><span class="color-preview" style="background-color: #ff5892"></span><code>#ff5892</code></td>
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
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .04 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (minor).</div></div>
    </td>
</tr>
</tbody>
</table>

### Chat

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
    <td>$kendo-chat-padding-x</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-padding-y</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-width</td>
    <td>Number</td>
    <td><code>500px</code></td>
    <td><code>500px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-height</td>
    <td>Number</td>
    <td><code>600px</code></td>
    <td><code>600px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-x</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing between the items of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-y</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between the items of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-chat-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-chat-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-spacing</td>
    <td>Number</td>
    <td><code>$kendo-chat-item-spacing-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-font-size</td>
    <td>String</td>
    <td><code>smaller</code></td>
    <td><code>smaller</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-transform</td>
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-x</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-y</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-spacing</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-line-height</td>
    <td>Number</td>
    <td><code>18px</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius-sm</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Chat small bubble message</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-size</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Chat Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-spacing</td>
    <td>Number</td>
    <td><code>$kendo-chat-item-spacing-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-toolbar-md-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-toolbar-md-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-spacing</td>
    <td>Number</td>
    <td><code>$kendo-toolbar-md-spacing</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-bg</td>
    <td>Color</td>
    <td><code>$kendo-toolbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-text</td>
    <td>Color</td>
    <td><code>$kendo-toolbar-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-x</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-y</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-spacing</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-line-height</td>
    <td>Number</td>
    <td><code>$kendo-chat-bubble-line-height</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bg</td>
    <td>Color</td>
    <td><code>$kendo-app-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-text</td>
    <td>Color</td>
    <td><code>$kendo-app-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border</td>
    <td>Color</td>
    <td><code>$kendo-app-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border</td>
    <td>Color</td>
    <td><code>$kendo-chat-bubble-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-hover-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-selected-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected Chat bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-chat-alt-bubble-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-border</td>
    <td>Color</td>
    <td><code>$kendo-chat-alt-bubble-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-hover-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-selected-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-contrast</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Chat quick reply.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Chat quick reply.</div></div>
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
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-checkbox-checked-bg ))</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, .06)</code></td>
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
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 30%, transparent), rgba( $kendo-color-primary, .3 ))</code></td>
    <td><code>0 0 0 2px rgba(255, 99, 88, 0.3)</code></td>
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
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of an invalid CheckBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
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
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23ff6358' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M4,8 h8'/%3e%3c/svg%3e")</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><code>$kendo-chip-padding-x</code></td>
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
    <td><code>$kendo-chip-padding-y</code></td>
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
    <td><code>$kendo-chip-font-size</code></td>
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
    <td><code>calc(1em + 8px + 2px)</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), $kendo-button-bg)</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
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
    "error": k-map-get($kendo-theme-colors, "error"),
    "info": k-map-get($kendo-theme-colors, "info"),
    "warning": k-map-get($kendo-theme-colors, "warning"),
    "success": k-map-get($kendo-theme-colors, "success")
)</code></td>
    <td><code>("base": #f5f5f5, "error": #f31700, "info": #0058e9, "warning": #ffc000, "success": #37b400)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-bg</td>
    <td>Color</td>
    <td><code>$kendo-chip-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .08 ) ))</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-gradient</td>
    <td>List</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( base-subtle-hover ), $kendo-button-hover-bg)</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
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
    <td><span class="color-preview" style="background-color: #d8d8d8"></span><code>#d8d8d8</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected solid Chip.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-border</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), if( $kendo-is-dark-theme, rgba( $kendo-color-white, .16 ), rgba( $kendo-color-black, .08 ) ))</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-chip-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered outline Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-hover-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-contrast-legacy( $kendo-chip-outline-hover-bg ))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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

### Cologradient

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
    <td>$kendo-color-gradient-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-width</td>
    <td>Number</td>
    <td><code>272px</code></td>
    <td><code>272px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-color-gradient-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-gap</td>
    <td>Number</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-gap</td>
    <td>Number</td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-height</td>
    <td>Number</td>
    <td><code>180px</code></td>
    <td><code>180px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-track-size</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-radius</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-draghandle-border-width</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-vertical-size</td>
    <td>Number</td>
    <td><code>180px</code></td>
    <td><code>180px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-horizontal-size</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient horizontal slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-width</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-height</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border</td>
    <td>Color</td>
    <td><code>rgba( $kendo-color-white, .8)</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.8)"></span><code>rgba(255, 255, 255, 0.8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>Color</td>
    <td><code>rgba( $kendo-color-black, .5 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.5)"></span><code>rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-shadow</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-hover-shadow</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>Color</td>
    <td><code>k-elevation(2)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.5)"></span><code>rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-y</td>
    <td>Number</td>
    <td><code>- k-math-div( $kendo-color-gradient-draghandle-height, 2 )</code></td>
    <td><code>-7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-x</td>
    <td>Number</td>
    <td><code>- k-math-div( $kendo-color-gradient-draghandle-width, 2 )</code></td>
    <td><code>-7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-width</td>
    <td>Number</td>
    <td><code>46px</code></td>
    <td><code>46px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-color-gradient-spacer, 1.5 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-color-gradient-spacer, 3 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs and their labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-ratio-font-weight</td>
    <td>Number</td>
    <td><code>$kendo-font-weight-bold</code></td>
    <td><code>700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the ColorGradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-spacer</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-color-gradient-spacer, 1.5 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the ColorGradient contrast tool.</div></div>
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
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: #ffffff, on-app-surface: #3d3d3d, subtle: #666666, surface: #fafafa, surface-alt: #ffffff, border: rgba(0, 0, 0, 0.08), border-alt: rgba(0, 0, 0, 0.16), base-subtle: #ebebeb, base-subtle-hover: #e0e0e0, base-subtle-active: #d6d6d6, base: #f5f5f5, base-hover: #ebebeb, base-active: #d6d6d6, base-emphasis: #c2c2c2, base-on-subtle: #3d3d3d, on-base: #3d3d3d, base-on-surface: #3d3d3d, primary-subtle: #ffeceb, primary-subtle-hover: #ffdedb, primary-subtle-active: #ffc8c4, primary: #ff6358, primary-hover: #ea5a51, primary-active: #d45349, primary-emphasis: #ff9d97, primary-on-subtle: #5c201c, on-primary: #ffffff, primary-on-surface: #ff6358, secondary-subtle: #fafafa, secondary-subtle-hover: #f5f5f5, secondary-subtle-active: #ebebeb, secondary: #666666, secondary-hover: #525252, secondary-active: #3d3d3d, secondary-emphasis: #e0e0e0, secondary-on-subtle: #141414, on-secondary: #ffffff, secondary-on-surface: #292929, tertiary-subtle: #d8f1fd, tertiary-subtle-hover: #c5eafc, tertiary-subtle-active: #a3dffb, tertiary: #03a9f4, tertiary-hover: #039ae0, tertiary-active: #028ccb, tertiary-emphasis: #61c9f9, tertiary-on-subtle: #023f5c, on-tertiary: #ffffff, tertiary-on-surface: #028ccb, info-subtle: #d2e2fb, info-subtle-hover: #bdd4f8, info-subtle-active: #80acf4, info: #0058e9, info-hover: #0052d6, info-active: #004ac2, info-emphasis: #6098f2, info-on-subtle: #002259, on-info: #ffffff, info-on-surface: #004ac2, success-subtle: #dcf0d3, success-subtle-hover: #cbe9bf, success-subtle-active: #b7e1a5, success: #37b400, success-hover: #32a500, success-active: #2d9600, success-emphasis: #81d15f, success-on-subtle: #1c5a00, on-success: #ffffff, success-on-surface: #2d9600, warning-subtle: #fff4d3, warning-subtle-hover: #ffeebd, warning-subtle-active: #ffe79e, warning: #ffc000, warning-hover: #eaaf00, warning-active: #d49f00, warning-emphasis: #ffd760, warning-on-subtle: #5e4700, on-warning: #3d3d3d, warning-on-surface: #ffc000, error-subtle: #fcddda, error-subtle-hover: #fbc8c3, error-subtle-active: #f98b80, error: #f31700, error-hover: #df1600, error-active: #ca1400, error-emphasis: #f76f60, error-on-subtle: #7a0c00, on-error: #ffffff, error-on-surface: #ca1400, light-subtle: #fafafa, light-subtle-hover: #f5f5f5, light-subtle-active: #ebebeb, light: #ebebeb, light-hover: #e0e0e0, light-active: #d6d6d6, light-emphasis: #d6d6d6, light-on-subtle: #141414, on-light: #000000, light-on-surface: #e0e0e0, dark-subtle: #c2c2c2, dark-subtle-hover: #adadad, dark-subtle-active: #999999, dark: #3d3d3d, dark-hover: #292929, dark-active: #1f1f1f, dark-emphasis: #666666, dark-on-subtle: #1f1f1f, on-dark: #ffffff, dark-on-surface: #141414, inverse-subtle: #c2c2c2, inverse-subtle-hover: #adadad, inverse-subtle-active: #999999, inverse: #3d3d3d, inverse-hover: #292929, inverse-active: #1f1f1f, inverse-emphasis: #666666, inverse-on-subtle: #1f1f1f, on-inverse: #ffffff, inverse-on-surface: #141414, series-a: #ff6358, series-a-bold: #bf4a42, series-a-bolder: #80322c, series-a-subtle: #ffb1ac, series-a-subtler: #ff8a82, series-b: #ffe162, series-b-bold: #bfa94a, series-b-bolder: #807131, series-b-subtle: #fff0b1, series-b-subtler: #ffe989, series-c: #4cd180, series-c-bold: #399d60, series-c-bolder: #266940, series-c-subtle: #a6e8c0, series-c-subtler: #79dda0, series-d: #4b5ffa, series-d-bold: #3847bc, series-d-bolder: #26307d, series-d-subtle: #a5affd, series-d-subtler: #7887fb, series-e: #ac58ff, series-e-bold: #8142bf, series-e-bolder: #562c80, series-e-subtle: #d6acff, series-e-subtler: #c182ff, series-f: #ff5892, series-f-bold: #bf426e, series-f-bolder: #802c49, series-f-subtle: #ffacc9, series-f-subtler: #ff82ae)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-color-primary)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-legacy($kendo-color-secondary)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
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
    <td><code>k-contrast-legacy($kendo-color-tertiary)</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span><code>#0058e9</code></td>
    <td><span class="color-preview" style="background-color: #0058e9"></span><code>#0058e9</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span><code>#ffc000</code></td>
    <td><span class="color-preview" style="background-color: #ffc000"></span><code>#ffc000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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
    <td><code>if($kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark)</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
</tbody>
</table>

### Coloreditor

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
    <td>$kendo-color-editor-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-min-width</td>
    <td>Number</td>
    <td><code>272px</code></td>
    <td><code>272px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-color-editor-header-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-actions-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-color-editor-spacer, 1.5 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorEditor header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-width</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-height</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-preview-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-color-editor-views-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-gap</td>
    <td>Number</td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-color</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .3)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.3)"></span><code>rgba(0, 0, 0, 0.3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-offset</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused ColorGradient.</div></div>
    </td>
</tr>
</tbody>
</table>

### Colorpalette

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
    <td>$kendo-color-palette-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-line-height</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-width</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 6 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-height</td>
    <td>Number</td>
    <td><code>$kendo-color-palette-tile-width</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, .5 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-shadow</td>
    <td>List</td>
    <td><code>0 0 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, .8 )</code></td>
    <td><code>0 0 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.8)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-shadow</td>
    <td>List</td>
    <td><code>0 1px 3px 1px rgba( black, .3 ), inset 0 0 0 1px rgba( white, 1 )</code></td>
    <td><code>0 1px 3px 1px rgba(0, 0, 0, 0.3), inset 0 0 0 1px white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette selected tile.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>Color</td>
    <td><code>rgba(if($kendo-is-dark-theme, $kendo-color-white, $kendo-color-black), 0.08)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-text</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-text</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-border</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the valid items.</div></div>
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
    <td>$kendo-dialog-titlebar-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-button-spacing</td>
    <td>Number</td>
    <td><code>$kendo-actions-button-spacing</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": #ff6358, "light": #ebebeb, "dark": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dock-manager

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
    <td>$kendo-dock-manager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The width of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-width</td>
    <td>Number</td>
    <td><code>$kendo-dock-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The style of the border around the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the pane header in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-sm</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-title-font-weight</td>
    <td>Number</td>
    <td><code>$kendo-font-weight-normal</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the pane title in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-dock-manager-pane-header-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-pane-content-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-dock-manager-pane-header-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the pane content in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3.5 )</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-tabbed-pane-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabbed pane in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-width</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background-color of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-unpinned-container-shadow</td>
    <td>List</td>
    <td><code>4px 0px 5px 0px rgba(0, 0, 0, 0.04), 2px 0px 4px 0px rgba(0, 0, 0, 0.03)</code></td>
    <td><code>4px 0px 5px 0px rgba(0, 0, 0, 0.04), 2px 0px 4px 0px rgba(0, 0, 0, 0.03)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the unpinned pane container in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-outline</td>
    <td>Color</td>
    <td><code>$kendo-dock-indicator-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-shadow</td>
    <td>List</td>
    <td><code>drop-shadow( 0px 1px 18px rgba(0, 0, 0, 0.12) ) drop-shadow( 0px 6px 10px rgba(0, 0, 0, 0.14) ) drop-shadow( 0px 3px 5px rgba(0, 0, 0, 0.20) )</code></td>
    <td><code>drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.12)) drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The background color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-indicator-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered dock indicator in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-style</td>
    <td>String</td>
    <td><code>dashed</code></td>
    <td><code>dashed</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-sm</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 16%, transparent), rgba( $kendo-color-primary, .16 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.16)"></span><code>rgba(255, 99, 88, 0.16)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dock-manager-dock-preview-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the dropping area in the DockManager component.</div></div>
    </td>
</tr>
</tbody>
</table>

### Drawer

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
    <td>$kendo-drawer-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-width</td>
    <td>Number</td>
    <td><code>7px</code></td>
    <td><code>7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-color</td>
    <td>Color</td>
    <td><code>rgba(156, 156, 156, .7)</code></td>
    <td><span class="color-preview" style="background-color: rgba(156, 156, 156, 0.7)"></span><code>rgba(156, 156, 156, 0.7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #dedede"></span><code>#dedede</code></td>
    <td><span class="color-preview" style="background-color: #dedede"></span><code>#dedede</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer scrollbar thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-radius</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-hover-color</td>
    <td>Color</td>
    <td><code>rgba(156, 156, 156, 1)</code></td>
    <td><span class="color-preview" style="background-color: rgb(156, 156, 156)"></span><code>rgb(156, 156, 156)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-size</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-drawer-item-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item in each level.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-count</td>
    <td>Number</td>
    <td><code>5</code></td>
    <td><code>5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The count of the Drawer item levels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td>Calculation</td>
    <td><code>calc(2 * #{$kendo-drawer-item-padding-x} + #{$kendo-icon-size})</code></td>
    <td><code>calc(2 * 16px + 16px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial width of the mini Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-bg</td>
    <td>Color</td>
    <td><code>$kendo-drawer-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f55f54"></span><code>#f55f54</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-hover-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropdowntree

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
    <td>$kendo-dropdowntree-popup-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropdownTree popup</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropdowntree-popup-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropdownTree popup</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropzone

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
    <td>$kendo-dropzone-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-min-height</td>
    <td>Number</td>
    <td><code>220px</code></td>
    <td><code>220px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 6 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint( $kendo-dropzone-text, 4 ))</code></td>
    <td><span class="color-preview" style="background-color: #7e7e7e"></span><code>#7e7e7e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone note.</div></div>
    </td>
</tr>
</tbody>
</table>

### Editor

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
    <td>$kendo-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-text</td>
    <td>Color</td>
    <td><code>$kendo-input-placeholder-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Еditor placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-opacity</td>
    <td>Number</td>
    <td><code>$kendo-input-placeholder-opacity</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Editor placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary-contrast</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-highlighted-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle ), k-color-mix($kendo-color-primary, #ffffff, 20%))</code></td>
    <td><span class="color-preview" style="background-color: #ffe0de"></span><code>#ffe0de</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The highlighted background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-export-tool-icon-margin-x</td>
    <td>Number</td>
    <td><code>.25em</code></td>
    <td><code>0.25em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Editor's export tool icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-size</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The outline width of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-color</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #88ccff"></span><code>#88ccff</code></td>
    <td><span class="color-preview" style="background-color: #88ccff"></span><code>#88ccff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's selected node.</div></div>
    </td>
</tr>
</tbody>
</table>

### Expander

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
    <td>$kendo-expander-spacing-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hine height of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-text</td>
    <td>Color</td>
    <td><code>$kendo-expander-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-hover-bg</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .04)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-title-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-sub-title-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel sub-title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-margin-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ExpansionPanel indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filemanager

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
    <td>$kendo-file-manager-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The space between the FileManager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the FileManager Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-width</td>
    <td>Number</td>
    <td><code>20%</code></td>
    <td><code>20%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-navigation-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-bg</td>
    <td>Color</td>
    <td><code>$kendo-toolbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-breadcrumb-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-width</td>
    <td>Number</td>
    <td><code>120px</code></td>
    <td><code>120px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-height</td>
    <td>Number</td>
    <td><code>120px</code></td>
    <td><code>120px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint($kendo-file-manager-text, 4))</code></td>
    <td><span class="color-preview" style="background-color: #7e7e7e"></span><code>#7e7e7e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-listview-item-icon-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the FileManager selected ListView item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-grid-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-width</td>
    <td>Number</td>
    <td><code>20%</code></td>
    <td><code>20%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border-width</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-spacing</td>
    <td>Number</td>
    <td><code>$kendo-file-manager-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-column-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the columns in the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint($kendo-file-manager-text, 4))</code></td>
    <td><span class="color-preview" style="background-color: #7e7e7e"></span><code>#7e7e7e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the FileManager preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-file-manager-preview-icon-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the FileManager preview icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filter

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
    <td>$kendo-filter-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-bottom-margin</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-size</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the line that connects the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-operator-dropdown-width</td>
    <td>Number</td>
    <td><code>15em</code></td>
    <td><code>15em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the dropdown elements in the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-field-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-operator-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview operator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-toolbar-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba(0, 0, 0, .08)</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Filter toolbar.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-fab-padding-x, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-x</td>
    <td>Number</td>
    <td><code>( $kendo-fab-padding-x * 1.5 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-fab-padding-y, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-y</td>
    <td>Number</td>
    <td><code>( $kendo-fab-padding-y * 1.5 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-icon-padding-x</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-item-text-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-xs</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td>Number</td>
    <td><code>1.2</code></td>
    <td><code>1.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 ) + $kendo-fab-icon-padding-x</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-item-icon-padding-x</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item icon border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #ff6358, "secondary": #666666, "tertiary": #03a9f4, "info": #0058e9, "success": #37b400, "warning": #ffc000, "error": #f31700, "dark": #424242, "light": #ebebeb, "inverse": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the FAB.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-shadow</td>
    <td>String</td>
    <td><code>k-elevation(5)</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-shadow</td>
    <td>String</td>
    <td><code>k-elevation(5)</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-active-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the active FAB.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-shadow</td>
    <td>String</td>
    <td><code>$kendo-fab-shadow</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-disabled-shadow</td>
    <td>String</td>
    <td><code>$kendo-fab-disabled-shadow</code></td>
    <td><code>var(--kendo-elevation-5, 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the disabled FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-shadow</td>
    <td>Null</td>
    <td><code>$kendo-fab-active-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the active FAB item.</div></div>
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

### Floating-label

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
    <td>$kendo-floating-label-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-size</td>
    <td>Number</td>
    <td><code>$kendo-input-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-max-width</td>
    <td>Number</td>
    <td><code>90%</code></td>
    <td><code>90%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-line-height</td>
    <td>Number</td>
    <td><code>$kendo-input-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-line-height} * #{$kendo-floating-label-font-size} )</code></td>
    <td><code>calc(1.4285714286 * 14px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(8px + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-height} + #{$kendo-input-border-width} + #{$kendo-input-padding-y} )</code></td>
    <td><code>calc(calc(1.4285714286 * 14px) + 1px + 4px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-transition</td>
    <td>List</td>
    <td><code>.2s ease-out</code></td>
    <td><code>0.2s ease-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Floating Label.</div></div>
    </td>
</tr>
</tbody>
</table>

### Form

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
    <td>$kendo-form-spacer</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x * 2</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the inline Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height-em</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-form-line-height} * 1em )</code></td>
    <td><code>calc(1.4285714286 * 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form in em units.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-sm</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-margin</td>
    <td>List</td>
    <td><code>2em 0 0</code></td>
    <td><code>2em 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-padding</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-margin</td>
    <td>List</td>
    <td><code>0 0 1em</code></td>
    <td><code>0 0 1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-padding</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-width</td>
    <td>List</td>
    <td><code>0 0 2px</code></td>
    <td><code>0 0 2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-color</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-font-size</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-text-transform</td>
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text capitalization of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-margin-bottom</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Form label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-button-margin-x</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Form buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-size</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-margin-top</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-rows-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-md-rows-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3.5 )</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the medium Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-rows-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4.5 )</code></td>
    <td><code>18px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-margin</td>
    <td>List</td>
    <td><code>$kendo-form-md-rows-spacing 0 0</code></td>
    <td><code>14px 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-border-color</td>
    <td>Color</td>
    <td><code>$kendo-form-legend-border-color</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-padding-top</td>
    <td>Number</td>
    <td><code>5px</code></td>
    <td><code>5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-margin-x</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-align</td>
    <td>String</td>
    <td><code>flex-end</code></td>
    <td><code>flex-end</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal alignment of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-field-wrap-max-width</td>
    <td>Calculation</td>
    <td><code>calc( ( 100% - #{$kendo-horizontal-form-label-width} ) - #{$kendo-horizontal-form-label-margin-x} )</code></td>
    <td><code>calc(100% - 25% - 10px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the field wrap in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-element-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the inline Form element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-forms-invalid-color</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-margin-x</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-size</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-margin</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-font-size</td>
    <td>Number</td>
    <td><code>$kendo-h4-font-size</code></td>
    <td><code>22px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-try-shade( $kendo-body-text, 2 ))</code></td>
    <td><span class="color-preview" style="background-color: #373737"></span><code>#373737</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        form-rows-spacing: $kendo-form-sm-rows-spacing
    ),
    md: (
        form-rows-spacing: $kendo-form-md-rows-spacing
    ),
    lg: (
        form-rows-spacing: $kendo-form-lg-rows-spacing
    )
)</code></td>
    <td><code>(sm: (form-rows-spacing: 10px), md: (form-rows-spacing: 14px), lg: (form-rows-spacing: 18px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Form.</div></div>
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
    <td><code>12px</code></td>
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
    <td><code>12px</code></td>
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
    <td><code>12px</code></td>
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
    <td><code>12px</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid filter cell.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>Color</td>
    <td><code>$kendo-table-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-table-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>Color</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>Color</td>
    <td><code>$kendo-grid-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>Color</td>
    <td><code>$kendo-grid-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-alt-row-bg</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
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
    <td><span class="color-preview" style="background-color: #ededed"></span><code>#ededed</code></td>
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
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
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
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>Color</td>
    <td><code>$kendo-grid-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selection aggregates container</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>Color</td>
    <td><code>$kendo-grid-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 20%, transparent), rgba( k-contrast-color( $kendo-grid-bg ), .12 ))</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><code>$kendo-input-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
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
    <td><code>$kendo-input-padding-y</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Input components.</div></div>
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
    <td><code>$kendo-input-font-size</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Input components.</div></div>
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
    <td><code>$kendo-input-line-height</code></td>
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
    <td><code>(sm: (padding-x: 8px, padding-y: 2px, font-size: 14px, line-height: 1.4285714286, button-padding-x: 2px, button-padding-y: 2px), md: (padding-x: 8px, padding-y: 4px, font-size: 14px, line-height: 1.4285714286, button-padding-x: 4px, button-padding-y: 4px), lg: (padding-x: 8px, padding-y: 8px, font-size: 16px, line-height: 1.5, button-padding-x: 8px, button-padding-y: 8px))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), rgba( $kendo-input-border, .16 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.16)"></span><code>rgba(0, 0, 0, 0.16)</code></td>
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
    <td><code>$kendo-input-hover-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.16)"></span><code>rgba(0, 0, 0, 0.16)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( $kendo-input-focus-border, .08 ))</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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
    <td>Color</td>
    <td><code>$kendo-input-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 50%, transparent), rgba( $kendo-button-text, .5))</code></td>
    <td><span class="color-preview" style="background-color: rgba(66, 66, 66, 0.5)"></span><code>rgba(66, 66, 66, 0.5)</code></td>
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
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 80%, transparent), rgba( $kendo-button-text, .8))</code></td>
    <td><span class="color-preview" style="background-color: rgba(66, 66, 66, 0.8)"></span><code>rgba(66, 66, 66, 0.8)</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-input-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.16)"></span><code>rgba(0, 0, 0, 0.16)</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
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
    <td>Calculation</td>
    <td><code>$kendo-button-inner-calc-size</code></td>
    <td><code>calc(1.4285714286em + 8px)</code></td>
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
    <td>Calculation</td>
    <td><code>$kendo-button-inner-calc-size</code></td>
    <td><code>calc(1.4285714286em + 8px)</code></td>
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
    <td>$kendo-input-separator-text</td>
    <td>Color</td>
    <td><code>$kendo-input-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td>$kendo-input-prefix-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
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
    <td>Number</td>
    <td><code>$kendo-font-weight-bold</code></td>
    <td><code>700</code></td>
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
    <td>Number</td>
    <td><code>$kendo-font-weight-bold</code></td>
    <td><code>700</code></td>
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
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, header-padding-x: 8px, header-padding-y: 2px, header-font-size: null, header-line-height: null, item-padding-x: 8px, item-padding-y: 2px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 2px, group-item-font-size: null, group-item-line-height: null), md: (font-size: 14px, line-height: 1.4285714286, header-padding-x: 8px, header-padding-y: 4px, header-font-size: null, header-line-height: null, item-padding-x: 8px, item-padding-y: 4px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 4px, group-item-font-size: null, group-item-line-height: null), lg: (font-size: 16px, line-height: 1.5, header-padding-x: 8px, header-padding-y: 6px, header-font-size: null, header-line-height: null, item-padding-x: 8px, item-padding-y: 8px, item-font-size: null, item-line-height: null, group-item-padding-x: 8px, group-item-padding-y: 6px, group-item-font-size: null, group-item-line-height: null))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the List component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
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
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered List items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .12)</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the 'No Data' text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-option-label-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ListBox elements.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-button-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ListBox buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-default-height</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline padding of the ListBox item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-item-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block padding of the ListBox item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ListBox drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ListBox drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listview

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
    <td>$kendo-listview-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around bordered ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ListView items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loader

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
    <td>$kendo-loader-segment-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the small Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the medium Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-segment-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the large Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-sm-segment-size, 2 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-md-segment-size, 2 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-padding</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-loader-lg-segment-size, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-sm-segment-size * 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-md-segment-size * 4 )</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-width</td>
    <td>Number</td>
    <td><code>( $kendo-loader-lg-segment-size * 4 )</code></td>
    <td><code>64px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-sm-spinner-3-width * $equilateral-height )</code></td>
    <td><code>13.8564064608px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-md-spinner-3-width * $equilateral-height )</code></td>
    <td><code>27.7128129216px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-height</td>
    <td>Number</td>
    <td><code>( $kendo-loader-lg-spinner-3-width * $equilateral-height )</code></td>
    <td><code>55.4256258432px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-sm-segment-size * 4</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-md-segment-size * 4</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-width</td>
    <td>Number</td>
    <td><code>$kendo-loader-lg-segment-size * 4</code></td>
    <td><code>64px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-sm-spinner-4-width</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-md-spinner-4-width</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-height</td>
    <td>Number</td>
    <td><code>$kendo-loader-lg-spinner-4-width</code></td>
    <td><code>64px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-secondary-bg</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Loader based on the secondary theme color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-color</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 5 )</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-padding</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 6 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Loader container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loading

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
    <td>$kendo-loading-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Loading indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-text</td>
    <td>String</td>
    <td><code>currentColor</code></td>
    <td><code>currentColor</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Loading indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-opacity</td>
    <td>Number</td>
    <td><code>.3</code></td>
    <td><code>0.3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Loading indicator.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td>Color</td>
    <td><code>$kendo-popup-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>calc(16px + 16px)</code></td>
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
    <td><code>calc(-1 * (calc(16px + 16px) - 4px))</code></td>
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
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the button arrow in the Menu Button..</div></div>
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
    <td>$kendo-notification-group-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-shadow</td>
    <td>String</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td>Number</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #ff6358, "secondary": #666666, "tertiary": #03a9f4, "info": #0058e9, "success": #37b400, "warning": #ffc000, "error": #f31700, "dark": #424242, "light": #ebebeb, "inverse": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><code>("inverse": (color: white, background-color: #424242, border: #424242), "light": (color: black, background-color: #ebebeb, border: #ebebeb), "dark": (color: white, background-color: #424242, border: #424242), "error": (color: white, background-color: #f31700, border: #f31700), "warning": (color: black, background-color: #ffc000, border: #ffc000), "success": (color: white, background-color: #37b400, border: #37b400), "info": (color: white, background-color: #0058e9, border: #0058e9), "tertiary": (color: white, background-color: #03a9f4, border: #03a9f4), "secondary": (color: white, background-color: #666666, border: #666666), "primary": (color: white, background-color: #ff6358, border: #ff6358))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Notification.</div></div>
    </td>
</tr>
</tbody>
</table>

### Orgchart

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
    <td>$kendo-orgchart-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 6 )</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-padding-y</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-gap</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-group-gap</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-container-gap</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart node container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-node-group-padding-y</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-border</td>
    <td>Color</td>
    <td><code>$kendo-card-focus-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.15)"></span><code>rgba(0, 0, 0, 0.15)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-margin-bottom</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-orgchart-spacer, 3 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-sm</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-margin-bottom</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-spacer</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-width</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-orgchart-card-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-shadow</td>
    <td>Null</td>
    <td><code>$kendo-card-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-margin-bottom</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-margin-bottom</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-width</td>
    <td>List</td>
    <td><code>2px 0 0</code></td>
    <td><code>2px 0 0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-color</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-margin-right</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-orgchart-spacer, 2 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right margin of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-min-height</td>
    <td>Number</td>
    <td><code>$kendo-card-avatar-size</code></td>
    <td><code>45px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min height of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-size</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-fill</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fill color of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-v-height</td>
    <td>Number</td>
    <td><code>25px</code></td>
    <td><code>25px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the OrgChart connecting line.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-pager-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-pager-sm-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-pager-md-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-pager-lg-padding-x</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-sm-calc-size</code></td>
    <td><code>calc(1.4285714286em + 4px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-md-calc-size</code></td>
    <td><code>calc(1.4285714286em + 8px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the medium Pagers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-item-min-width</td>
    <td>Calculation</td>
    <td><code>$kendo-button-lg-calc-size</code></td>
    <td><code>calc(1.5em + 16px + 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the items in the large Pagers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-item-group-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-item-group-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3.5 )</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-item-group-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin between the item groups in the large Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing around the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-list-item-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-number-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Pager numbers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Inputs in the Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sm-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the small Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-md-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the medium Pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-lg-dropdown-width</td>
    <td>Number</td>
    <td><code>5em</code></td>
    <td><code>5em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DropDowns in the large Pager.</div></div>
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
    <td><code>(sm: (padding-x: 4px, padding-y: 4px, item-group-spacing: 12px, item-min-width: calc(1.4285714286em + 4px + 2px), pager-dropdown-width: 5em), md: (padding-x: 8px, padding-y: 8px, item-group-spacing: 14px, item-min-width: calc(1.4285714286em + 8px + 2px), pager-dropdown-width: 5em), lg: (padding-x: 10px, padding-y: 10px, item-group-spacing: 16px, item-min-width: calc(1.5em + 16px + 2px), pager-dropdown-width: 5em))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Pager.</div></div>
    </td>
</tr>
</tbody>
</table>

### Panelbar

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
    <td>$kendo-panelbar-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style around the the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-level-count</td>
    <td>Number</td>
    <td><code>4</code></td>
    <td><code>4</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum nesting of the PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-panelbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-panelbar-header-bg, .5 ))</code></td>
    <td><span class="color-preview" style="background-color: whitesmoke"></span><code>whitesmoke</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-panelbar-header-selected-bg ))</code></td>
    <td><span class="color-preview" style="background-color: #eb5b51"></span><code>#eb5b51</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected, hovered and focused PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-panelbar-bg, .5 ))</code></td>
    <td><span class="color-preview" style="background-color: whitesmoke"></span><code>whitesmoke</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.12)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-panelbar-item-selected-bg ))</code></td>
    <td><span class="color-preview" style="background-color: #eb5b51"></span><code>#eb5b51</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and hovered PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected, hovered and focused PanelBar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the expanded PanelBar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the expanded PanelBar header.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pdf-viewer

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
    <td>$kendo-pdf-viewer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the PDFViewer Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-bg</td>
    <td>Color</td>
    <td><code>$kendo-app-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-spacing</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-bg</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-toolbar-md-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-toolbar-md-padding-x} * 2 )</code></td>
    <td><code>calc(8px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-spacing</td>
    <td>Number</td>
    <td><code>$kendo-toolbar-md-spacing</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-radius</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-shadow</td>
    <td>String</td>
    <td><code>$kendo-window-shadow</code></td>
    <td><code>var(--kendo-elevation-8, 0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-matches-spacing</td>
    <td>Number</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the matches container in the PDFViewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-selection-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-sm</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PDFViewer selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-bg</td>
    <td>Color</td>
    <td><code>$kendo-body-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-mark-bg</td>
    <td>Color</td>
    <td><code>yellow</code></td>
    <td><span class="color-preview" style="background-color: yellow"></span><code>yellow</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PDFViewer highlight mark.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-icon-text</td>
    <td>Color</td>
    <td><code>$kendo-dropzone-icon-text</code></td>
    <td><span class="color-preview" style="background-color: #7e7e7e"></span><code>#7e7e7e</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PDFViewer icon.</div></div>
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
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-text</td>
    <td>Color</td>
    <td><code>$kendo-button-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-gradient</td>
    <td>List</td>
    <td><code>$kendo-button-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
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
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
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
    <td>Null</td>
    <td><code>$kendo-button-hover-border</code></td>
    <td><code>null</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 50%, transparent), rgba( $kendo-picker-outline-text, .5))</code></td>
    <td><span class="color-preview" style="background-color: rgba(66, 66, 66, 0.5)"></span><code>rgba(66, 66, 66, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-picker-outline-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-contrast-legacy( $kendo-picker-outline-hover-bg ))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 4%, transparent), rgba( $kendo-button-text, .04 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(66, 66, 66, 0.04)"></span><code>rgba(66, 66, 66, 0.04)</code></td>
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
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), rgba( $kendo-button-border, .16 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.16)"></span><code>rgba(0, 0, 0, 0.16)</code></td>
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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

### Popover

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
    <td>$kendo-popover-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-card-border-radius</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-family</td>
    <td>String</td>
    <td><code>$kendo-card-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-size</td>
    <td>Number</td>
    <td><code>$kendo-card-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-line-height</td>
    <td>Number</td>
    <td><code>$kendo-card-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-shadow</td>
    <td>String</td>
    <td><code>$kendo-popup-shadow</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-card-header-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-card-header-padding-y</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-header-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-text</td>
    <td>Color</td>
    <td><code>$kendo-card-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-bg</td>
    <td>Null</td>
    <td><code>$kendo-card-header-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border</td>
    <td>Color</td>
    <td><code>$kendo-card-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-card-body-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-card-body-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popover-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-width</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-width</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-height</td>
    <td>Number</td>
    <td><code>$kendo-card-callout-height</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-width</td>
    <td>Number</td>
    <td><code>$kendo-popover-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-style</td>
    <td>String</td>
    <td><code>$kendo-popover-border-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-bg</td>
    <td>Color</td>
    <td><code>$kendo-popover-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border</td>
    <td>Color</td>
    <td><code>$kendo-popover-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Popover callout.</div></div>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-shadow</td>
    <td>String</td>
    <td><code>k-elevation(4)</code></td>
    <td><code>var(--kendo-elevation-4, 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-horizontal-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal width of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-animation-timing</td>
    <td>List</td>
    <td><code>1s linear infinite</code></td>
    <td><code>1s linear infinite</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The animation timing of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-sm</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-try-shade( $kendo-component-bg, 1 ))</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-progressbar-value-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress text color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-progressbar-value-bg ))</code></td>
    <td><span class="color-preview" style="background-color: #eb5b51"></span><code>#eb5b51</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress border color of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The progress background gradient of the ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-bg</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-text</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-border</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the indeterminate ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-chunk-border</td>
    <td>Color</td>
    <td><code>$kendo-body-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chunk ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-arc-stroke</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The arc stroke color of the circular ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-scale-stroke</td>
    <td>Color</td>
    <td><code>$kendo-progressbar-bg</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The scale stroke background color of the circular ProgressBar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Prompt

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
    <td>$kendo-prompt-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-content-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text border of the Prompt content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-expander-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the Prompt content expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-bg</td>
    <td>Color</td>
    <td><code>$kendo-body-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Prompt suggestion container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-prompt-suggestion-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The elevation of the Prompt suggestion container.</div></div>
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
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td><code>0 0 0 2px rgba(255, 99, 88, 0.3)</code></td>
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
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td>Color</td>
    <td><code>$kendo-checkbox-invalid-border</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
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
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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

### Rating

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
    <td>$kendo-rating-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-container-margin-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Rating container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-margin-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-margin-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-label-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Rating label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-size</td>
    <td>Number</td>
    <td><code>($kendo-icon-size * 1.5)</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Rating icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-focus-selected-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused and selected Rating icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Scrollview

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
    <td>$kendo-scrollview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ScrollView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-size</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-border</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary background color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary border color of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ScrollView page button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-offset</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the ScrollView pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-spacing</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ScrollView pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the ScrollView pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-scrollview-pagebutton-size} + #{$kendo-scrollview-pager-item-border-width * 2} + #{$kendo-scrollview-pager-item-spacing * 2} )</code></td>
    <td><code>calc(10px + 0px + 40px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ScrollView pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-arrow-tap-highlight-color</td>
    <td>Color</td>
    <td><code>$kendo-color-rgba-transparent</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the highlight over the tapped ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-color</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-icon-shadow</td>
    <td>List</td>
    <td><code>rgba(0, 0, 0, .3) 0 0 15px</code></td>
    <td><code>rgba(0, 0, 0, 0.3) 0 0 15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-bg</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-default-opacity</td>
    <td>Number</td>
    <td><code>.7</code></td>
    <td><code>0.7</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-hover-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover opacity of the ScrollView navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-hover-span-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the ScrollView navigation arrows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-light-bg</td>
    <td>Color</td>
    <td><code>rgba(255, 255, 255, .4)</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.4)"></span><code>rgba(255, 255, 255, 0.4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView pager in light mode.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-dark-bg</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, .4)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.4)"></span><code>rgba(0, 0, 0, 0.4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ScrollView pager in dark mode.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-duration</td>
    <td>Number</td>
    <td><code>.3s</code></td>
    <td><code>0.3s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The duration of the ScrollView transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-timing-function</td>
    <td>String</td>
    <td><code>ease-in-out</code></td>
    <td><code>ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The timing function of the ScrollView transition.</div></div>
    </td>
</tr>
</tbody>
</table>

### Skeleton

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
    <td>$kendo-skeleton-text-transform</td>
    <td>String</td>
    <td><code>scale( 1, .6 )</code></td>
    <td><code>scale(1, 0.6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transform scale of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-text-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-rect-border-radius</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the rectangular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-circle-border-radius</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the circular Skeleton.</div></div>
    </td>
</tr>
</tbody>
</table>

### Slider

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
    <td>$kendo-slider-size</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-tick-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider tick.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-alt-size</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider's track wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-offset</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-size</td>
    <td>Number</td>
    <td><code>($kendo-slider-alt-size - 2)</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-spacing</td>
    <td>Number</td>
    <td><code>($kendo-slider-button-size + $kendo-slider-button-offset)</code></td>
    <td><code>38px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-button-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Slider Buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-thickness</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-size</td>
    <td>Number</td>
    <td><code>14px</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-active-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition scale of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-active-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-color-primary ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-color-primary , .5 ))</code></td>
    <td><span class="color-preview" style="background-color: #f55f54"></span><code>#f55f54</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-color-primary , 1.5 ))</code></td>
    <td><span class="color-preview" style="background-color: #e0574d"></span><code>#e0574d</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-try-shade( $kendo-color-primary , 1.5 ))</code></td>
    <td><span class="color-preview" style="background-color: #e0574d"></span><code>#e0574d</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-pressed-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the active Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 30%, transparent), rgba( $kendo-color-primary , .3 ))</code></td>
    <td><code>0 0 0 2px rgba(255, 99, 88, 0.3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-speed</td>
    <td>Number</td>
    <td><code>.3s</code></td>
    <td><code>0.3s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-function</td>
    <td>String</td>
    <td><code>ease-out</code></td>
    <td><code>ease-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-transition-speed</td>
    <td>Number</td>
    <td><code>.4s</code></td>
    <td><code>0.4s</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-draghandle-transition-function</td>
    <td>String</td>
    <td><code>cubic-bezier(.25, .8, .25, 1)</code></td>
    <td><code>cubic-bezier(0.25, 0.8, 0.25, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-subtle ), k-try-shade( $kendo-component-bg, 1 ))</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider's track selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-disabled-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
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
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
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

### Splitter

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
    <td>$kendo-splitter-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-splitbar-size</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-length</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The length of the Splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-thickness</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-icon-margin</td>
    <td>Number</td>
    <td><code>7px</code></td>
    <td><code>7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Splitter drag handle icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-collapse-icon-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the collapse icon in the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-collapse-icon-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, .5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the collapse icon in the Splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-splitbar-bg, .5 ))</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-splitbar-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Splitter split bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Splitter split bar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Spreadsheet

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
    <td>$kendo-spreadsheet-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-text</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-border</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-table-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-spreadsheet-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Spreadsheet table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-spreadsheet-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-font-family</td>
    <td>List</td>
    <td><code>Arial, Verdana, sans-serif</code></td>
    <td><code>Arial, Verdana, sans-serif</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-action-bar-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacings of the Spreadsheet action bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-bar-gap</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the Spreadsheet formula bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-input-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-input-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-formula-input-line-height</td>
    <td>Number</td>
    <td><code>$kendo-input-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet formula input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-view-font-family</td>
    <td>List</td>
    <td><code>Arial, Verdana, sans-serif</code></td>
    <td><code>Arial, Verdana, sans-serif</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Spreadsheet view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-view-font-size</td>
    <td>Number</td>
    <td><code>$kendo-spreadsheet-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Spreadsheet view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-border</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selection-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px #ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-single-selection-border</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet single selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-partial-selection-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet partial selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-active-cell-bg</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet active cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-active-cell-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px #ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet active cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-border</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-selected-bg</code></td>
    <td><code>inset 0 0 0 1px #ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet auto fill.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-auto-fill-punch-bg</td>
    <td>Color</td>
    <td><code>rgba( $kendo-spreadsheet-bg, .5 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.5)"></span><code>rgba(255, 255, 255, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet auto fill punch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-spreadsheet-cell-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-line-height</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-bg</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-text</td>
    <td>Color</td>
    <td><code>$kendo-spreadsheet-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-editor-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-resize-handle-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-comment-border</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell comment indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-cell-dirty-border</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet cell dirty indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-style</td>
    <td>String</td>
    <td><code>dashed</code></td>
    <td><code>dashed</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-text-margin-bottom</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Spreadsheet image Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-width</td>
    <td>Number</td>
    <td><code>355px</code></td>
    <td><code>355px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-height</td>
    <td>Number</td>
    <td><code>230px</code></td>
    <td><code>230px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-img</td>
    <td>String</td>
    <td><code>"image-default.png"</code></td>
    <td><code>"image-default.png"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2000px rgba(0, 0, 0, .5)</code></td>
    <td><code>inset 0 0 0 2000px rgba(0, 0, 0, 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet image Dialog preview overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-overlay-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Spreadsheet image Dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-width</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-height</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-outline-color</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-color</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-lg</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the Spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the Spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-anchor-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Spreadsheet drawing anchor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-dropzone-spacing-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Spreadsheet DropZone.</div></div>
    </td>
</tr>
</tbody>
</table>

### Stepper

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
    <td>$kendo-stepper-margin-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-margin-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-margin-x</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-x</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-y</td>
    <td>Number</td>
    <td><code>5px</code></td>
    <td><code>5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-x</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-y</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-width</td>
    <td>Number</td>
    <td><code>28px</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-height</td>
    <td>Number</td>
    <td><code>$kendo-stepper-indicator-width</code></td>
    <td><code>28px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the focused Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the focused Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-offset</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Stepper's focused indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-calc-offset</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-stepper-indicator-focus-border-width} + #{$kendo-stepper-indicator-focus-offset} )</code></td>
    <td><code>calc(1px + 3px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated offset of the Stepper's focused indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #cccccc"></span><code>#cccccc</code></td>
    <td><span class="color-preview" style="background-color: #cccccc"></span><code>#cccccc</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( base-hover ), k-try-shade( $kendo-stepper-indicator-bg ))</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 60%, transparent), $kendo-disabled-text)</code></td>
    <td><span class="color-preview" style="background-color: #8f8f8f"></span><code>#8f8f8f</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-border</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-try-shade( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><span class="color-preview" style="background-color: #eb5b51"></span><code>#eb5b51</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's hovered done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 60%, transparent), k-color-mix( $kendo-stepper-indicator-done-bg, $kendo-component-bg, 60%))</code></td>
    <td><span class="color-preview" style="background-color: #ffa19b"></span><code>#ffa19b</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-stepper-indicator-done-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-border</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-disabled-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffa19b"></span><code>#ffa19b</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's disabled done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-bg</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-text</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-border</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-border</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #eb5b51"></span><code>#eb5b51</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-stepper-indicator-done-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-stepper-indicator-done-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's hovered current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-bg</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-disabled-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffa19b"></span><code>#ffa19b</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-text</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-disabled-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-border</td>
    <td>Color</td>
    <td><code>$kendo-stepper-indicator-done-disabled-border</code></td>
    <td><span class="color-preview" style="background-color: #ffa19b"></span><code>#ffa19b</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Stepper's disabled current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-success-text</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-error-text</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error text color of the Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-hover-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-base ), k-try-shade( $kendo-stepper-text, 2 ))</code></td>
    <td><span class="color-preview" style="background-color: #373737"></span><code>#373737</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-disabled-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 60%, transparent), $kendo-disabled-text)</code></td>
    <td><span class="color-preview" style="background-color: #8f8f8f"></span><code>#8f8f8f</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional Stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-fill-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-fill-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Stepper ProgressBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-property</td>
    <td>String</td>
    <td><code>height</code></td>
    <td><code>height</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The property name of the Stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-duration</td>
    <td>Number</td>
    <td><code>300ms</code></td>
    <td><code>300ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The duration of the Stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-timing-function</td>
    <td>List</td>
    <td><code>cubic-bezier(.4, 0, .2, 1) 0ms</code></td>
    <td><code>cubic-bezier(0.4, 0, 0.2, 1) 0ms</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The timing function of the Stepper transition.</div></div>
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
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
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
    sm: ( font-size: 10px, track-width: 52px, track-height: 26px, thumb-width: 26px, thumb-height: 26px, thumb-offset: 0px, label-offset: 4px ),
    md: ( font-size: 10px, track-width: 60px, track-height: 30px, thumb-width: 30px, thumb-height: 30px, thumb-offset: 0px, label-offset: 6px ),
    lg: ( font-size: 10px, track-width: 68px, track-height: 34px, thumb-width: 34px, thumb-height: 34px, thumb-offset: 0px, label-offset: 8px )
)</code></td>
    <td><code>(sm: (font-size: 10px, track-width: 52px, track-height: 26px, thumb-width: 26px, thumb-height: 26px, thumb-offset: 0px, label-offset: 4px), md: (font-size: 10px, track-width: 60px, track-height: 30px, thumb-width: 30px, thumb-height: 30px, thumb-offset: 0px, label-offset: 6px), lg: (font-size: 10px, track-width: 68px, track-height: 34px, thumb-width: 34px, thumb-height: 34px, thumb-offset: 0px, label-offset: 8px))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-try-shade( $kendo-switch-off-track-bg, 8% ))</code></td>
    <td><span class="color-preview" style="background-color: #ebebeb"></span><code>#ebebeb</code></td>
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
    <td><code>2px solid if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ) , .08 ))</code></td>
    <td><code>2px solid rgba(0, 0, 0, 0.08)</code></td>
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
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-switch-on-track-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td>Color</td>
    <td><code>$kendo-switch-on-track-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-ring</td>
    <td>List</td>
    <td><code>2px solid if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba( $kendo-switch-on-track-border, .25 ))</code></td>
    <td><code>2px solid rgba(255, 99, 88, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused Switch is checked.</div></div>
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
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 4px), md: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 12px, cell-padding-y: 8px), lg: (font-size: 14px, line-height: 1.4285714286, cell-padding-x: 8px, cell-padding-y: 10px))</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>Color</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-component-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>Color</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>Color</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>Color</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 5%, transparent), rgba( k-contrast-legacy( $kendo-table-bg ), .04 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
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
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 11%, transparent), k-color-darken($kendo-table-bg, 7%))</code></td>
    <td><span class="color-preview" style="background-color: #ededed"></span><code>#ededed</code></td>
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
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 25%, transparent), rgba($kendo-selected-bg, .25))</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 99, 88, 0.25)"></span><code>rgba(255, 99, 88, 0.25)</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 3 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-focus-border</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip focused content</div></div>
    </td>
</tr>
</tbody>
</table>

### Taskboard

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
    <td>$kendo-taskboard-spacer</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-toolbar-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the TaskBoard Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-content-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-spacing-y</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-x</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-columns-container-gap</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard columns container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-width</td>
    <td>Number</td>
    <td><code>320px</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-base-border, 2.5 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.264)"></span><code>rgba(0, 0, 0, 0.264)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-y</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-column-header-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 4 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-actions-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-font-weight</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-gap</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-taskboard-spacer, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the TaskBoard column Card wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-width</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-column-width</code></td>
    <td><code>320px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-y</td>
    <td>Number</td>
    <td><code>( $kendo-taskboard-spacer * .75 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-weight</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-y</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-y</td>
    <td>Number</td>
    <td><code>( $kendo-taskboard-spacer * .75 )</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-spacer</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-card-padding-y</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-shadow</td>
    <td>Null</td>
    <td><code>$kendo-card-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-bg</td>
    <td>Color</td>
    <td><code>$kendo-card-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-text</td>
    <td>Color</td>
    <td><code>$kendo-card-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-border</td>
    <td>Color</td>
    <td><code>$kendo-card-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-category-border-width</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card category.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-hover-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-taskboard-card-border, 10% ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.172)"></span><code>rgba(0, 0, 0, 0.172)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border-alt ), k-try-shade( $kendo-taskboard-card-border, 18% ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.2456)"></span><code>rgba(0, 0, 0, 0.2456)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-emphasis ), k-color-tint( $kendo-color-primary-lighter, 5 ))</code></td>
    <td><span class="color-preview" style="background-color: #ffb0ab"></span><code>#ffb0ab</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected TaskBoard Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-text</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-hover-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), $kendo-color-primary-darker)</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-header-focus-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), $kendo-color-primary-darker)</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused TaskBoard Card header text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-taskboard-card-border-radius</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-bg</td>
    <td>Color</td>
    <td><code>rgba(255, 255, 255, .2)</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.2)"></span><code>rgba(255, 255, 255, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TaskBoard Card placeholder.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tilelayout

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
    <td>$kendo-tile-layout-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 4 )</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-tile-layout-padding-x</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TileLayout</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-border-width</td>
    <td>Number</td>
    <td><code>$kendo-card-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-focus-shadow</td>
    <td>Null</td>
    <td><code>$kendo-card-focus-shadow</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus box shadow of the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-lg</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-bg</td>
    <td>Color</td>
    <td><code>rgba(255, 255, 255, .2)</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.2)"></span><code>rgba(255, 255, 255, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Timeline

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
    <td>$kendo-timeline-spacing-x</td>
    <td>Number</td>
    <td><code>40px</code></td>
    <td><code>40px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-spacing-y</td>
    <td>Number</td>
    <td><code>40px</code></td>
    <td><code>40px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-items-padding</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding between the Timeline's track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-x</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-y</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-width</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-height</td>
    <td>Number</td>
    <td><code>30px</code></td>
    <td><code>30px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( base-subtle ) 60%, transparent), k-true-mix($kendo-button-bg, $kendo-body-bg, 65%))</code></td>
    <td><span class="color-preview" style="background-color: #f9f9f9"></span><code>#f9f9f9</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 60%, transparent), k-true-mix($kendo-button-text, $kendo-body-bg, 65%))</code></td>
    <td><span class="color-preview" style="background-color: #848484"></span><code>#848484</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-border</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-true-mix(#000000, $kendo-body-bg, 4.8%))</code></td>
    <td><span class="color-preview" style="background-color: #f3f3f3"></span><code>#f3f3f3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-size</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-wrap-padding-bottom</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-timeline-track-size, 2 )</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the Timeline's track wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-margin-bottom</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bottom-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{k-math-div( $kendo-timeline-track-arrow-height, 2 )} + #{$kendo-timeline-track-wrap-padding-bottom})</code></td>
    <td><code>calc(15px + 3px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-start-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-arrow-width} - 2 * #{$kendo-timeline-track-border-width})</code></td>
    <td><code>calc(30px - 2 * 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-end-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-arrow-width} - 2 * #{$kendo-timeline-track-border-width})</code></td>
    <td><code>calc(30px - 2 * 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bg</td>
    <td>Color</td>
    <td><code>$kendo-button-bg</code></td>
    <td><span class="color-preview" style="background-color: #f5f5f5"></span><code>#f5f5f5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-color</td>
    <td>Color</td>
    <td><code>$kendo-button-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-item-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Timeline's focused track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-event-offset</td>
    <td>Number</td>
    <td><code>36px</code></td>
    <td><code>36px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Timeline track event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-button-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-line-height</td>
    <td>Number</td>
    <td><code>$kendo-button-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-min-width</td>
    <td>Number</td>
    <td><code>80px</code></td>
    <td><code>80px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-max-width</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-flag-min-width} + 2 * #{$kendo-timeline-spacing-x})</code></td>
    <td><code>calc(80px + 2 * 40px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-flag-max-width</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-flag-min-width} + 2 * #{$kendo-timeline-mobile-spacing-x})</code></td>
    <td><code>calc(80px + 2 * 16px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the mobile Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-horizontal-flag-min-width</td>
    <td>Number</td>
    <td><code>60px</code></td>
    <td><code>60px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the horizontal Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-primary ), k-contrast-legacy( $kendo-timeline-flag-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-width</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-height</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-offset-bottom</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-margin-bottom-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-track-size} + 2 * #{$kendo-timeline-track-border-width} + #{$kendo-timeline-flag-offset-bottom} + #{$kendo-timeline-flag-callout-height})</code></td>
    <td><code>calc(6px + 2 * 1px + 4px + 10px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-width</td>
    <td>Number</td>
    <td><code>50px</code></td>
    <td><code>50px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-margin-bottom</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-spacing-x} + (#{$kendo-timeline-flag-min-width} - #{$kendo-timeline-track-size}) / 2)</code></td>
    <td><code>calc(40px + (80px - 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-vertical-padding-calc} + #{$kendo-timeline-date-width})</code></td>
    <td><code>calc(calc(40px + (80px - 6px) / 2) + 50px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-mobile-spacing-x} + (#{$kendo-timeline-flag-min-width} - #{$kendo-timeline-track-size}) / 2)</code></td>
    <td><code>calc(16px + (80px - 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc(#{$kendo-timeline-mobile-vertical-padding-calc} + #{$kendo-timeline-date-width})</code></td>
    <td><code>calc(calc(16px + (80px - 6px) / 2) + 50px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-width</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-height</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-primary</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-collapse-arrow-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline collapse arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-width</td>
    <td>Number</td>
    <td><code>400px</code></td>
    <td><code>400px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-height</td>
    <td>Number</td>
    <td><code>600px</code></td>
    <td><code>600px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-min-height-calc</td>
    <td>Calculation</td>
    <td><code>calc(2 * (#{$kendo-timeline-track-event-offset} - #{$kendo-card-border-width}))</code></td>
    <td><code>calc(2 * (36px - 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Timeline event.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Toolbar tools.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sm-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1.5 )</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the small Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-md-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the medium Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-lg-spacing</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2.5 )</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the tools of the large Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td>Color</td>
    <td><code>$kendo-base-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td>Color</td>
    <td><code>$kendo-base-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td>Color</td>
    <td><code>$kendo-base-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the separator border of the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td>Number</td>
    <td><code>10em</code></td>
    <td><code>10em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-shadow</td>
    <td>List</td>
    <td><code>$kendo-button-focus-shadow</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-flat-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the flat Toolbar.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tooltip

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
    <td>$kendo-tooltip-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-font-size</td>
    <td>Number</td>
    <td><code>($kendo-tooltip-font-size * 1.25)</code></td>
    <td><code>17.5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-line-height</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-callout-size</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Tooltip callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-bg</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), rgba( k-contrast-legacy( $kendo-body-bg ), .75 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.75)"></span><code>rgba(0, 0, 0, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default background of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-text</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), k-contrast-legacy( $kendo-tooltip-bg ))</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default text color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border</td>
    <td>Color</td>
    <td><code>$kendo-tooltip-bg</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.75)"></span><code>rgba(0, 0, 0, 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box-shadow of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme-colors</td>
    <td>Map</td>
    <td><code>$kendo-theme-colors</code></td>
    <td><code>("primary": #ff6358, "secondary": #666666, "tertiary": #03a9f4, "info": #0058e9, "success": #37b400, "warning": #ffc000, "error": #f31700, "dark": #424242, "light": #ebebeb, "inverse": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme</td>
    <td>Map</td>
    <td><code>tooltip-theme( $kendo-tooltip-theme-colors )</code></td>
    <td><code>("inverse": (color: white, background-color: #424242, border: #424242), "light": (color: black, background-color: #ebebeb, border: #ebebeb), "dark": (color: white, background-color: #424242, border: #424242), "error": (color: white, background-color: #f31700, border: #f31700), "warning": (color: black, background-color: #ffc000, border: #ffc000), "success": (color: white, background-color: #37b400, border: #37b400), "info": (color: white, background-color: #0058e9, border: #0058e9), "tertiary": (color: white, background-color: #03a9f4, border: #03a9f4), "secondary": (color: white, background-color: #666666, border: #666666), "primary": (color: white, background-color: #ff6358, border: #ff6358))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Tooltip.</div></div>
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
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-lg</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td>Number</td>
    <td><code>24px</code></td>
    <td><code>24px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The indentation of child groups in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 0.5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td>Number</td>
    <td><code>$kendo-border-radius-md</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-checkbox-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 1 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-checkbox-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-checkbox-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-x</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the checkbox in the large TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sm-checkbox-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, .5 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the small TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-md-checkbox-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-treeview-sm-checkbox-padding-y</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the medium TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-lg-checkbox-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the checkbox in the large TreeView.</div></div>
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
        item-padding-y: $kendo-treeview-sm-item-padding-y,
        checkbox-padding-x: $kendo-treeview-sm-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-sm-checkbox-padding-y
    ),
    md: (
        font-size: $kendo-treeview-md-font-size,
        line-height: $kendo-treeview-md-line-height,
        item-padding-x: $kendo-treeview-md-item-padding-x,
        item-padding-y: $kendo-treeview-md-item-padding-y,
        checkbox-padding-x: $kendo-treeview-md-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-md-checkbox-padding-y
    ),
    lg: (
        font-size: $kendo-treeview-lg-font-size,
        line-height: $kendo-treeview-lg-line-height,
        item-padding-x: $kendo-treeview-lg-item-padding-x,
        item-padding-y: $kendo-treeview-lg-item-padding-y,
        checkbox-padding-x: $kendo-treeview-lg-checkbox-padding-x,
        checkbox-padding-y: $kendo-treeview-lg-checkbox-padding-y
    )
)</code></td>
    <td><code>(sm: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 2px, checkbox-padding-x: 4px, checkbox-padding-y: 2px), md: (font-size: 14px, line-height: 1.4285714286, item-padding-x: 8px, item-padding-y: 4px, checkbox-padding-x: 4px, checkbox-padding-y: 2px), lg: (font-size: 16px, line-height: 1.5, item-padding-x: 8px, item-padding-y: 8px, checkbox-padding-x: 4px, checkbox-padding-y: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td>Color</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td>Color</td>
    <td><code>$kendo-selected-text</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of focused TreeView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Load More button in the TreeView</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td>Color</td>
    <td><code>$kendo-link-text</code></td>
    <td><span class="color-preview" style="background-color: #ff6358"></span><code>#ff6358</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Load More button in the TreeView</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Load More button in the TreeView</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Load More button in the TreeView</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td>Color</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><span class="color-preview" style="background-color: #d6534a"></span><code>#d6534a</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Load More button in the TreeView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-treeview-item-focus-shadow</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Load More button in the TreeView.</div></div>
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
    <td>$kendo-font-size-xs</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-sm</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-md</td>
    <td>Number</td>
    <td><code>$kendo-font-size</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-lg</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xl</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Extra large font size across all components.</div></div>
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
<tr>
    <td>$kendo-line-height-xs</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Extra small line height used along with $kendo-font-size-xs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-sm</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small line height used along with $kendo-font-size-sm.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-md</td>
    <td>Number</td>
    <td><code>$kendo-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium line height used along with $kendo-font-size-md.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-lg</td>
    <td>Number</td>
    <td><code>1.5</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large line height used along with $kendo-font-size-lg.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-light</td>
    <td>Number</td>
    <td><code>300</code></td>
    <td><code>300</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Light font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-normal</td>
    <td>Number</td>
    <td><code>400</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Normal font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-medium</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-semibold</td>
    <td>Number</td>
    <td><code>600</code></td>
    <td><code>600</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Semibold font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-bold</td>
    <td>Number</td>
    <td><code>700</code></td>
    <td><code>700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bold font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Letter spacing.</div></div>
    </td>
</tr>
</tbody>
</table>

### Upload

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
    <td>$kendo-upload-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-max-height</td>
    <td>Number</td>
    <td><code>300px</code></td>
    <td><code>300px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum height of the list with uploaded items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-border</td>
    <td>Color</td>
    <td><code>$kendo-upload-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-hover-bg</td>
    <td>Color</td>
    <td><code>$kendo-hover-bg</code></td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Upload status message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Upload status message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-x</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of an uploaded item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-y</td>
    <td>Number</td>
    <td><code>k-map-get( $kendo-spacing, 2 )</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of an uploaded item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-multiple-items-spacing</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between uploaded batch items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-validation-font-size</td>
    <td>Number</td>
    <td><code>11px</code></td>
    <td><code>11px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Upload validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-spacing</td>
    <td>Number</td>
    <td><code>$kendo-icon-spacing</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Upload status icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-color</td>
    <td>Color</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the uploaded items icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-thickness</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thickness of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-info</code></td>
    <td><span class="color-preview" style="background-color: #0058e9"></span><code>#0058e9</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-text</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-text</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error text color of the Upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-error</code></td>
    <td><span class="color-preview" style="background-color: #f31700"></span><code>#f31700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error background color of the Upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-focus-shadow</td>
    <td>List</td>
    <td><code>0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused Upload button, actions and uploaded items.</div></div>
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
    <td>$kendo-window-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border-radius</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-x</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-y</td>
    <td>Number</td>
    <td><code>12px</code></td>
    <td><code>12px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-width</td>
    <td>List</td>
    <td><code>0 0 1px</code></td>
    <td><code>0 0 1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-lg</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the title of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-line-height</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the title of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-actions-gap</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-hover-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered buttons in the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-x</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the content of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-y</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the content of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-bg</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-text</td>
    <td>Color</td>
    <td><code>$kendo-component-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border</td>
    <td>Color</td>
    <td><code>$kendo-component-border</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-shadow</td>
    <td>String</td>
    <td><code>k-elevation(8)</code></td>
    <td><code>var(--kendo-elevation-8, 0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-focus-shadow</td>
    <td>String</td>
    <td><code>k-elevation(9)</code></td>
    <td><code>var(--kendo-elevation-9, 0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-bg</td>
    <td>Color</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-text</td>
    <td>Color</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the Window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: 300px,
    md: 800px,
    lg: 1200px
)</code></td>
    <td><code>(sm: 300px, md: 800px, lg: 1200px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map of the width for the different Window sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": #ff6358, "light": #ebebeb, "dark": #424242)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Window.</div></div>
    </td>
</tr>
</tbody>
</table>

### Wizard

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
    <td>$kendo-wizard-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x * 2.5</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-wizard-padding-x</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-x * 4</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-padding-md-y * 8</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-buttons-margin-x</td>
    <td>Number</td>
    <td><code>10px</code></td>
    <td><code>10px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Wizard's Button container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>14px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-step-focus-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the focused Wizard step.</div></div>
    </td>
</tr>
</tbody>
</table>








## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
