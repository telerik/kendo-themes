---
title: Customizing Card
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_card
position: 9
---

# Customizing Card

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
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-inner-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-card-border-radius} - #{$kendo-card-border-width} )</code></td>
    <td><code>calc(8px - 1px)</code></td>
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
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-shadow</td>
    <td>String</td>
    <td><code>k-elevation(1)</code></td>
    <td><code>var(--kendo-elevation-1, 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
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
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12))</code></td>
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
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
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
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border</td>
    <td>String</td>
    <td><code>$kendo-component-header-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
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
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
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

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

