---
title: Customizing Tooltip
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_tooltip
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
    <td><code>var(--kendo-border-radius-md, 0.375rem)</code></td>
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
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-font-size</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-font-size-sm, #{$kendo-font-size-sm} ) * 1.25 )</code></td>
    <td><code>calc(var(--kendo-font-size-sm, 0.75rem) * 1.25)</code></td>
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
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Tooltip callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-bg</td>
    <td>String</td>
    <td><code>k-color(inverse)</code></td>
    <td><code>var(--kendo-color-inverse, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default background of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-text</td>
    <td>String</td>
    <td><code>k-color(on-inverse)</code></td>
    <td><code>var(--kendo-color-on-inverse, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default text color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border</td>
    <td>String</td>
    <td><code>$kendo-tooltip-bg</code></td>
    <td><code>var(--kendo-color-inverse, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border color of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0px 2px 7px rgba(0, 0, 0, 0.075))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box-shadow of the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary),
    "secondary": k-color(secondary),
    "tertiary": k-color(tertiary),
    "info": k-color(info),
    "success": k-color(success),
    "warning": k-color(warning),
    "error": k-color(error),
    "dark": k-color(dark),
    "light": k-color(light),
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark))
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary, #0d6efd)</li><li>secondary: var(--kendo-color-secondary, #6c757d)</li><li>tertiary: var(--kendo-color-tertiary, #6f42c1)</li><li>info: var(--kendo-color-info, #0dcaf0)</li><li>success: var(--kendo-color-success, #198754)</li><li>warning: var(--kendo-color-warning, #ffc107)</li><li>error: var(--kendo-color-error, #dc3545)</li><li>dark: var(--kendo-color-dark, #212529)</li><li>light: var(--kendo-color-light, #f8f9fa)</li><li>inverse: var(--kendo-color-dark, #212529)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme</td>
    <td>Map</td>
    <td><code>tooltip-theme( $kendo-tooltip-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-on-inverse, #ffffff)","background-color":"var(--kendo-color-dark, #212529)","border":"var(--kendo-color-dark, #212529)"</li><li>light: "color":"var(--kendo-color-on-light, #000000)","background-color":"var(--kendo-color-light, #f8f9fa)","border":"var(--kendo-color-light, #f8f9fa)"</li><li>dark: "color":"var(--kendo-color-on-dark, #ffffff)","background-color":"var(--kendo-color-dark, #212529)","border":"var(--kendo-color-dark, #212529)"</li><li>error: "color":"var(--kendo-color-on-error, #ffffff)","background-color":"var(--kendo-color-error, #dc3545)","border":"var(--kendo-color-error, #dc3545)"</li><li>warning: "color":"var(--kendo-color-on-warning, #000000)","background-color":"var(--kendo-color-warning, #ffc107)","border":"var(--kendo-color-warning, #ffc107)"</li><li>success: "color":"var(--kendo-color-on-success, #ffffff)","background-color":"var(--kendo-color-success, #198754)","border":"var(--kendo-color-success, #198754)"</li><li>info: "color":"var(--kendo-color-on-info, #000000)","background-color":"var(--kendo-color-info, #0dcaf0)","border":"var(--kendo-color-info, #0dcaf0)"</li><li>tertiary: "color":"var(--kendo-color-on-tertiary, #ffffff)","background-color":"var(--kendo-color-tertiary, #6f42c1)","border":"var(--kendo-color-tertiary, #6f42c1)"</li><li>secondary: "color":"var(--kendo-color-on-secondary, #ffffff)","background-color":"var(--kendo-color-secondary, #6c757d)","border":"var(--kendo-color-secondary, #6c757d)"</li><li>primary: "color":"var(--kendo-color-on-primary, #ffffff)","background-color":"var(--kendo-color-primary, #0d6efd)","border":"var(--kendo-color-primary, #0d6efd)"</li></ul></td>
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

