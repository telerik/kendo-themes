---
title: Customizing Map
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_map
position: 9
---

# Customizing Map

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
    <td>$kendo-map-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-map-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-map-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-map-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-map-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-map-font-family, var( --kendo-font-family, normal ) )</code></td>
    <td><code>var(--kendo-map-font-family, var(--kendo-font-family, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-bg</td>
    <td>String</td>
    <td><code>var( --kendo-map-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-map-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-text</td>
    <td>String</td>
    <td><code>var( --kendo-map-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-map-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border</td>
    <td>String</td>
    <td><code>var( --kendo-map-border, k-color(border) )</code></td>
    <td><code>var(--kendo-map-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-map-border-width, 0px )</code></td>
    <td><code>var(--kendo-map-border-width, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-height</td>
    <td>String</td>
    <td><code>var( --kendo-map-height, 600px )</code></td>
    <td><code>var(--kendo-map-height, 600px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-margin-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-map-navigator-margin-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-margin-y, k-spacing(4) )</code></td>
    <td><code>var(--kendo-map-navigator-margin-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-padding</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-padding, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-map-navigator-padding, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-width</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-width, calc( var( --kendo-icon-size, 1rem) * 3 + calc( #{$kendo-map-navigator-padding} * 2) ) )</code></td>
    <td><code>var(--kendo-map-navigator-width, calc(var(--kendo-icon-size, 1rem) * 3 + var(--kendo-map-navigator-padding, var(--kendo-spacing-0\.5, 0.125rem)) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-border-width, 1px )</code></td>
    <td><code>var(--kendo-map-navigator-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-bg</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-map-navigator-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-text</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-map-navigator-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border</td>
    <td>String</td>
    <td><code>var( --kendo-map-navigator-border, k-color(border) )</code></td>
    <td><code>var(--kendo-map-navigator-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-margin</td>
    <td>String</td>
    <td><code>var( --kendo-map-zoom-control-margin, k-spacing(4) )</code></td>
    <td><code>var(--kendo-map-zoom-control-margin, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Map zoom control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-map-attribution-padding-x, k-spacing(1) )</code></td>
    <td><code>var(--kendo-map-attribution-padding-x, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-map-attribution-padding-y, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-map-attribution-padding-y, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-map-attribution-font-size, calc( #{$kendo-map-font-size} * .75 ) )</code></td>
    <td><code>var(--kendo-map-attribution-font-size, calc(var(--kendo-map-font-size, var(--kendo-font-size, inherit)) * 0.75))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-bg</td>
    <td>String</td>
    <td><code>var( --kendo-map-attribution-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-map-attribution-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-marker-fill</td>
    <td>String</td>
    <td><code>var( --kendo-map-marker-fill, k-color(primary) )</code></td>
    <td><code>var(--kendo-map-marker-fill, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fill color of the Map marker.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

