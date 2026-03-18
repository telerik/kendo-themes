---
title: Customizing Tooltip
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_tooltip
position: 9
---

# Customizing Tooltip

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
    <td>$kendo-tooltip-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
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
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-font-size</td>
    <td>Calculation</td>
    <td><code>calc( ( var( --kendo-font-size, .875rem ) * 1.25 ) )</code></td>
    <td><code>calc(var(--kendo-font-size, 0.875rem) * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-xs, normal )</code></td>
    <td><code>var(--kendo-line-height-xs, normal)</code></td>
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
    <td>String</td>
    <td><code>k-color(inverse)</code></td>
    <td><code>var(--kendo-color-inverse, oklch(32% 0 0deg))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default background of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-text</td>
    <td>String</td>
    <td><code>k-color(on-inverse)</code></td>
    <td><code>var(--kendo-color-on-inverse, oklch(100% 0 0deg))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default text color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border</td>
    <td>String</td>
    <td><code>$kendo-tooltip-bg</code></td>
    <td><code>var(--kendo-color-inverse, oklch(32% 0 0deg))</code></td>
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
    <td>List</td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverse")</code></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "inverse")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme</td>
    <td>Map</td>
    <td><code>tooltip-theme( $kendo-tooltip-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-on-inverse, oklch(100% 0 0deg))","background-color":"var(--kendo-color-inverse, oklch(32% 0 0deg))","border":"var(--kendo-color-inverse, oklch(32% 0 0deg))"</li><li>error: "color":"var(--kendo-color-on-error, oklch(from var(--kendo-color-error) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-error, oklch(61.07% 0.2435 30.2deg))","border":"var(--kendo-color-error, oklch(61.07% 0.2435 30.2deg))"</li><li>warning: "color":"var(--kendo-color-on-warning, oklch(from var(--kendo-color-warning) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-warning, oklch(84.22% 0.1727 84.58deg))","border":"var(--kendo-color-warning, oklch(84.22% 0.1727 84.58deg))"</li><li>success: "color":"var(--kendo-color-on-success, oklch(from var(--kendo-color-success) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-success, oklch(67.45% 0.2171 139.99deg))","border":"var(--kendo-color-success, oklch(67.45% 0.2171 139.99deg))"</li><li>info: "color":"var(--kendo-color-on-info, oklch(from var(--kendo-color-info) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-info, oklch(51.78% 0.2301 261.43deg))","border":"var(--kendo-color-info, oklch(51.78% 0.2301 261.43deg))"</li><li>tertiary: "color":"var(--kendo-color-on-tertiary, oklch(from var(--kendo-color-tertiary) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-tertiary, oklch(72.46% 0.1727 310.67deg))","border":"var(--kendo-color-tertiary, oklch(72.46% 0.1727 310.67deg))"</li><li>secondary: "color":"var(--kendo-color-on-secondary, oklch(from var(--kendo-color-secondary) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-secondary, oklch(54.53% 0.2124 275.85deg))","border":"var(--kendo-color-secondary, oklch(54.53% 0.2124 275.85deg))"</li><li>primary: "color":"var(--kendo-color-on-primary, oklch(from var(--kendo-color-primary) clamp(0.10, (0.6 - l) * 99999, 0.98) 0.01 h))","background-color":"var(--kendo-color-primary, oklch(37.17% 0.0392 257.29deg))","border":"var(--kendo-color-primary, oklch(37.17% 0.0392 257.29deg))"</li><li>base: "color":"var(--kendo-color-on-base, oklch(from var(--kendo-color-base) clamp(0.15, (0.6 - l) * 99999, 0.95) 0 h))","background-color":"var(--kendo-color-base, oklch(96.92% 0.0034 247.86deg))","border":"var(--kendo-color-base, oklch(96.92% 0.0034 247.86deg))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Tooltip.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

