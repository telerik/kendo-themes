---
title: Customizing Badge
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_badge
position: 9
---

# Customizing Badge

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
    <td>$kendo-badge-bg</td>
    <td>String</td>
    <td><code>var( --kendo-badge-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-badge-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-text</td>
    <td>String</td>
    <td><code>var( --kendo-badge-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-badge-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border</td>
    <td>String</td>
    <td><code>var( --kendo-badge-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-badge-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-badge-border-width, 1px )</code></td>
    <td><code>var(--kendo-badge-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-radius</td>
    <td>Null</td>
    <td><code>k-border-radius("md")</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-badge-font-weight, var( --kendo-font-weight-semibold, normal ) )</code></td>
    <td><code>var(--kendo-badge-font-weight, var(--kendo-font-weight-semibold, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-badge-padding-x, k-spacing(1.5) )</code></td>
    <td><code>var(--kendo-badge-padding-x, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-badge-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-badge-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-badge-font-size, var( --kendo-font-size-xs, inherit ) )</code></td>
    <td><code>var(--kendo-badge-font-size, var(--kendo-font-size-xs, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-xs, normal )</code></td>
    <td><code>var(--kendo-line-height-xs, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the small Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-badge-line-height, var( --kendo-line-height-xs, normal ) )</code></td>
    <td><code>var(--kendo-badge-line-height, var(--kendo-line-height-xs, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the medium Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the large Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sm-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-sm-line-height} * 1em + #{$kendo-badge-sm-padding-y} * 2 + #{$kendo-badge-border-width} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-xs, normal) * 1em + var(--kendo-spacing-0\.5, 0.125rem) * 2 + var(--kendo-badge-border-width, 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the small circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-md-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-md-line-height} * 1em + #{$kendo-badge-md-padding-y} * 2 + #{$kendo-badge-border-width} * 2 )</code></td>
    <td><code>calc(var(--kendo-badge-line-height, var(--kendo-line-height-xs, normal)) * 1em + var(--kendo-badge-padding-y, var(--kendo-spacing-1, 0.25rem)) * 2 + var(--kendo-badge-border-width, 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated minimum width of the medium circular Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-lg-min-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-badge-lg-line-height} * 1em + #{$kendo-badge-lg-padding-y} * 2 + #{$kendo-badge-border-width} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-1\.5, 0.375rem) * 2 + var(--kendo-badge-border-width, 1px) * 2)</code></td>
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
    <td><ul><li>sm: "padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","padding-y":"var(--kendo-spacing-0\\.5, 0.125rem)","font-size":"var(--kendo-font-size-xs, inherit)","line-height":"var(--kendo-line-height-xs, normal)","min-width":"calc(var(--kendo-line-height-xs, normal) * 1em + var(--kendo-spacing-0\\.5, 0.125rem) * 2 + var(--kendo-badge-border-width, 1px) * 2)"</li><li>md: "padding-x":"var(--kendo-badge-padding-x, var(--kendo-spacing-1\\.5, 0.375rem))","padding-y":"var(--kendo-badge-padding-y, var(--kendo-spacing-1, 0.25rem))","font-size":"var(--kendo-badge-font-size, var(--kendo-font-size-xs, inherit))","line-height":"var(--kendo-badge-line-height, var(--kendo-line-height-xs, normal))","min-width":"calc(var(--kendo-badge-line-height, var(--kendo-line-height-xs, normal)) * 1em + var(--kendo-badge-padding-y, var(--kendo-spacing-1, 0.25rem)) * 2 + var(--kendo-badge-border-width, 1px) * 2)"</li><li>lg: "padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","font-size":"var(--kendo-font-size-sm, inherit)","line-height":"var(--kendo-line-height-lg, normal)","min-width":"calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-1\\.5, 0.375rem) * 2 + var(--kendo-badge-border-width, 1px) * 2)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "base": k-color(base),
    "primary": k-color(primary),
    "secondary": k-color(secondary),
    "tertiary": k-color(tertiary),
    "info": k-color(info),
    "success": k-color(success),
    "warning": k-color(warning),
    "error": k-color(error),
    "dark": k-color(dark),
    "light": k-color(light),
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark)),
)</code></td>
    <td><ul><li>base: var(--kendo-color-base, #ffffff)</li><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li><li>tertiary: var(--kendo-color-tertiary, #c239b3)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>success: var(--kendo-color-success, #107c10)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Badge variations.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

