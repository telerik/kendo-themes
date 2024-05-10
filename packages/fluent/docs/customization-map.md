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
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, normal )</code></td>
    <td><code>var(--kendo-font-family, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-bg</td>
    <td>String</td>
    <td><code>var( --kendo-component-bg, transparent )</code></td>
    <td><code>var(--kendo-component-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-text</td>
    <td>String</td>
    <td><code>var( --kendo-component-text, inherit )</code></td>
    <td><code>var(--kendo-component-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td><code>var(--kendo-color-border, #8a8886)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-height</td>
    <td>Number</td>
    <td><code>600px</code></td>
    <td><code>600px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator horizontal margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator vertical margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-padding</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-width</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-icon-size) * 3 + calc( #{$kendo-map-navigator-padding} * 2) )</code></td>
    <td><code>calc(var(--kendo-icon-size) * 3 + var(--kendo-spacing-0\.5, 0.125rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-height</td>
    <td>Calculation</td>
    <td><code>$kendo-map-navigator-width</code></td>
    <td><code>calc(var(--kendo-icon-size) * 3 + var(--kendo-spacing-0\.5, 0.125rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator height.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-get-theme-color-var( neutral-190 ))</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td><code>var(--kendo-color-border, #8a8886)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-margin</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-x</td>
    <td>String</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-y</td>
    <td>String</td>
    <td><code>$kendo-map-zoom-control-button-padding-x</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-x</td>
    <td>String</td>
    <td><code>$kendo-padding-sm-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-y</td>
    <td>String</td>
    <td><code>$kendo-padding-sm-y</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-font-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-map-font-size} * .75 )</code></td>
    <td><code>calc(var(--kendo-font-size, inherit) * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution font size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-marker-fill</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td><code>var(--kendo-color-primary, #0078d4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map marker fill color.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

