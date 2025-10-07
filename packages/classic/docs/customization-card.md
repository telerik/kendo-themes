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
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
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
    <td>String</td>
    <td><code>k-border-radius(lg)</code></td>
    <td><code>var(--kendo-border-radius-lg, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-inner-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-card-border-radius} - #{$kendo-card-border-width} )</code></td>
    <td><code>calc(var(--kendo-border-radius-lg, 0.375rem) - 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inner border radius of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-gap</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Cards in the Card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
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
    <td>String</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
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
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-x</td>
    <td>String</td>
    <td><code>$kendo-card-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-y</td>
    <td>String</td>
    <td><code>$kendo-card-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
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
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
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
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-normal, normal )</code></td>
    <td><code>var(--kendo-font-weight-normal, normal)</code></td>
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
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
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
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-normal, normal )</code></td>
    <td><code>var(--kendo-font-weight-normal, normal)</code></td>
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
    <td><code>k-color(subtle)</code></td>
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
    <td>$kendo-card-avatar-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Avatar and the text in the Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the Card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
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

