---
title: Customizing Button
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_button
position: 9
---

# Customizing Button

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
    <td>$kendo-button-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-button-border-width, 1px )</code></td>
    <td><code>var(--kendo-button-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-button-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-button-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-button-sm-padding-x, k-spacing(2) )</code></td>
    <td><code>var(--kendo-button-sm-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-button-md-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-button-md-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-button-lg-padding-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-button-lg-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>calc(var( --kendo-button-sm-padding-y, #{k-spacing(0.5)} ) + 1px)</code></td>
    <td><code>calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5, 0.125rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-padding-y</td>
    <td>Calculation</td>
    <td><code>calc(var( --kendo-button-md-padding-y, #{k-spacing(1)} ) + 1px)</code></td>
    <td><code>calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-padding-y</td>
    <td>Calculation</td>
    <td><code>calc(var( --kendo-button-lg-padding-y, #{k-spacing(2)} ) + 1px)</code></td>
    <td><code>calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2, 0.5rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the small Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the medium Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height used along with the $kendo-font-size variable of the large Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-semibold, normal )</code></td>
    <td><code>var(--kendo-font-weight-semibold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( ( #{$kendo-button-md-line-height} * 1em ) + ( #{$kendo-button-md-padding-y} * 2 ) + ( #{$kendo-button-border-width} * 2 ) )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( ( #{$kendo-button-md-line-height} * 1em ) + ( #{$kendo-button-md-padding-y} * 2 ) )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2)</code></td>
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
    <td><ul><li>sm: "padding-x":"var(--kendo-button-sm-padding-x, var(--kendo-spacing-2, 0.5rem))","padding-y":"calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\\.5, 0.125rem)) + 1px)","font-size":"var(--kendo-font-size-sm, inherit)","line-height":"var(--kendo-line-height-lg, normal)"</li><li>md: "padding-x":"var(--kendo-button-md-padding-x, var(--kendo-spacing-3, 0.75rem))","padding-y":"calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)","font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)"</li><li>lg: "padding-x":"var(--kendo-button-lg-padding-x, var(--kendo-spacing-4, 1rem))","padding-y":"calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2, 0.5rem)) + 1px)","font-size":"var(--kendo-font-size-lg, inherit)","line-height":"var(--kendo-line-height-sm, normal)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-button-focus-outline-width, 2px )</code></td>
    <td><code>var(--kendo-button-focus-outline-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Outline width of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-button-focus-outline-style, solid )</code></td>
    <td><code>var(--kendo-button-focus-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-focus-offset</td>
    <td>String</td>
    <td><code>var( --kendo-button-flat-focus-offset, 1px )</code></td>
    <td><code>var(--kendo-button-flat-focus-offset, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the flat focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-link-focus-offset</td>
    <td>String</td>
    <td><code>var( --kendo-button-link-focus-offset, 0 )</code></td>
    <td><code>var(--kendo-button-link-focus-offset, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the link focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-pulsing-opacity</td>
    <td>String</td>
    <td><code>var( --kendo-button-pulsing-opacity, .6 )</code></td>
    <td><code>var(--kendo-button-pulsing-opacity, 0.6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the pulsing animation for the generating Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
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
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark))
)</code></td>
    <td><ul><li>base: var(--kendo-color-base, #ffffff)</li><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li><li>tertiary: var(--kendo-color-tertiary, #c239b3)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>success: var(--kendo-color-success, #107c10)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-bg, k-color(base) )</code></td>
    <td><code>var(--kendo-button-bg, var(--kendo-color-base, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-text, k-color(on-base) )</code></td>
    <td><code>var(--kendo-button-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-button-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-gradient</td>
    <td>String</td>
    <td><code>linear-gradient( var( --kendo-button-gradient, transparent, transparent ) )</code></td>
    <td><code>linear-gradient(var(--kendo-button-gradient, transparent, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background gradient of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-button-shadow, none )</code></td>
    <td><code>var(--kendo-button-shadow, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of the Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-hover-bg, k-color(base-hover) )</code></td>
    <td><code>var(--kendo-button-hover-bg, var(--kendo-color-base-hover, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-hover-text, k-color(on-base) )</code></td>
    <td><code>var(--kendo-button-hover-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-hover-border, color-mix( in srgb, k-color(border) 34%, transparent ) )</code></td>
    <td><code>var(--kendo-button-hover-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the hovered Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-focus-border, k-color(border-alt) )</code></td>
    <td><code>var(--kendo-button-focus-border, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-button-focus-outline, k-color(on-base) )</code></td>
    <td><code>var(--kendo-button-focus-outline, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base outline color of the focused Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-active-bg, k-color(base-active) )</code></td>
    <td><code>var(--kendo-button-active-bg, var(--kendo-color-base-active, #ebebeb))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-active-text, k-color(on-base) )</code></td>
    <td><code>var(--kendo-button-active-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-active-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-active-border, $kendo-button-border )</code></td>
    <td><code>var(--kendo-button-active-border, var(--kendo-button-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the active Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 7%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 7%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-text, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-border, color-mix(in srgb, k-color(on-app-surface) 14%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-outline-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-bg, initial )</code></td>
    <td><code>var(--kendo-button-disabled-bg, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the disabled outline Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-outline-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-text, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled outline Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-outline-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-border, color-mix(in srgb, k-color(on-app-surface) 14%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled outline Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-bg, initial )</code></td>
    <td><code>var(--kendo-button-disabled-bg, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background of the disabled flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-text, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-button-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled flat Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-button-disabled-border, initial )</code></td>
    <td><code>var(--kendo-button-disabled-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled flat Button.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

