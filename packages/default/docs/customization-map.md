---
title: Customizing Map
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_map
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
    <td>$kendo-map-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-padding</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-width</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-icon-size} * 3 ) + calc( #{$kendo-map-navigator-padding} * 2 ) )</code></td>
    <td><code>calc(16px * 3 + var(--kendo-spacing-0\.5, 0.125rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-map-navigator-width</code></td>
    <td><code>calc(16px * 3 + var(--kendo-spacing-0\.5, 0.125rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Map navigator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-margin</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Map zoom control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Map zoom control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-y</td>
    <td>String</td>
    <td><code>$kendo-map-zoom-control-button-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Map zoom control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-font-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-map-font-size} * .75)</code></td>
    <td><code>calc(var(--kendo-font-size, inherit) * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(app-surface) 80%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-app-surface, #ffffff) 80%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Map attribution.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-marker-fill</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
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

