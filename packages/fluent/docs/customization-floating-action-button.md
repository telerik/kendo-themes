---
title: Customizing FloatingActionButton
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_floating-action-button
position: 9
---

# Customizing FloatingActionButton

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
    <td>$kendo-fab-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-fab-border-width, 1px )</code></td>
    <td><code>var(--kendo-fab-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-fab-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-fab-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-fab-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-fab-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-fab-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-fab-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-fab-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-fab-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-sm-padding-x, calc( #{$kendo-fab-padding-x} / 2 ) )</code></td>
    <td><code>var(--kendo-fab-sm-padding-x, calc(var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-md-padding-x, #{$kendo-fab-padding-x} )</code></td>
    <td><code>var(--kendo-fab-md-padding-x, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-lg-padding-x, calc( #{$kendo-fab-padding-x} * 1.5 ) )</code></td>
    <td><code>var(--kendo-fab-lg-padding-x, calc(var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)) * 1.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-padding-y, #{$kendo-fab-padding-x} )</code></td>
    <td><code>var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-sm-padding-y, calc( #{$kendo-fab-padding-y} / 2 ) )</code></td>
    <td><code>var(--kendo-fab-sm-padding-y, calc(var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-md-padding-y, #{$kendo-fab-padding-y} )</code></td>
    <td><code>var(--kendo-fab-md-padding-y, var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-lg-padding-y, calc( #{$kendo-fab-padding-y} * 1.5 ) )</code></td>
    <td><code>var(--kendo-fab-lg-padding-y, calc(var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))) * 1.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-offset</td>
    <td>String</td>
    <td><code>var( --kendo-fab-focus-offset, #{$kendo-button-focus-offset} )</code></td>
    <td><code>var(--kendo-fab-focus-offset, var(--kendo-button-focus-offset, var(--kendo-spacing-0\.5, 0.125rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-fab-focus-outline-width, #{$kendo-button-focus-outline-width} )</code></td>
    <td><code>var(--kendo-fab-focus-outline-width, var(--kendo-button-focus-outline-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-fab-focus-outline-style, #{$kendo-button-focus-outline-style} )</code></td>
    <td><code>var(--kendo-fab-focus-outline-style, var(--kendo-button-focus-outline-style, solid))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-icon-padding-x, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-fab-icon-padding-x, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-icon-padding-y, #{$kendo-fab-icon-padding-x} )</code></td>
    <td><code>var(--kendo-fab-icon-padding-y, var(--kendo-fab-icon-padding-x, var(--kendo-spacing-0\.5, 0.125rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-fab-icon-spacing, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-fab-icon-spacing, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-items-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-fab-items-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-items-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-fab-items-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-padding-x, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-fab-item-text-padding-x, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-fab-item-text-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-border-width, 1px )</code></td>
    <td><code>var(--kendo-fab-item-text-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-border-style, solid )</code></td>
    <td><code>var(--kendo-fab-item-text-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-fab-item-text-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-fab-item-text-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text-line-height, var( --kendo-line-height-sm, inherit ) )</code></td>
    <td><code>var(--kendo-fab-item-text-line-height, var(--kendo-line-height-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-offset</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-offset, #{$kendo-button-focus-offset} )</code></td>
    <td><code>var(--kendo-fab-item-focus-offset, var(--kendo-button-focus-offset, var(--kendo-spacing-0\.5, 0.125rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-outline-width, #{$kendo-button-focus-outline-width} )</code></td>
    <td><code>var(--kendo-fab-item-focus-outline-width, var(--kendo-button-focus-outline-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-outline-style, #{$kendo-button-focus-outline-style} )</code></td>
    <td><code>var(--kendo-fab-item-focus-outline-style, var(--kendo-button-focus-outline-style, solid))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-icon-padding-x, calc( #{k-spacing(2)} + #{$kendo-fab-icon-padding-x} ) )</code></td>
    <td><code>var(--kendo-fab-item-icon-padding-x, calc(var(--kendo-spacing-2, 0.5rem) + var(--kendo-fab-icon-padding-x, var(--kendo-spacing-0\.5, 0.125rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-icon-padding-y, #{$kendo-fab-item-icon-padding-x} )</code></td>
    <td><code>var(--kendo-fab-item-icon-padding-y, var(--kendo-fab-item-icon-padding-x, calc(var(--kendo-spacing-2, 0.5rem) + var(--kendo-fab-icon-padding-x, var(--kendo-spacing-0\.5, 0.125rem)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-icon-border-width, 1px )</code></td>
    <td><code>var(--kendo-fab-item-icon-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-icon-border-style, solid )</code></td>
    <td><code>var(--kendo-fab-item-icon-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-icon-border-radius, 50% )</code></td>
    <td><code>var(--kendo-fab-item-icon-border-radius, 50%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
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
    <td><ul><li>base: var(--kendo-color-base, #ffffff)</li><li>primary: var(--kendo-color-primary, #0078d4)</li><li>secondary: var(--kendo-color-secondary, #979593)</li><li>tertiary: var(--kendo-color-tertiary, #2b88d8)</li><li>info: var(--kendo-color-info, #0a7eff)</li><li>success: var(--kendo-color-success, #55a554)</li><li>warning: var(--kendo-color-warning, #ffc80a)</li><li>error: var(--kendo-color-error, #c2666b)</li><li>dark: var(--kendo-color-dark, #323130)</li><li>light: var(--kendo-color-light, #d2d0ce)</li><li>inverse: var(--kendo-color-dark, #323130)</li></ul></td>
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
    <td><ul><li>sm: "padding-x":"var(--kendo-fab-sm-padding-x, calc(var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)) / 2))","padding-y":"var(--kendo-fab-sm-padding-y, calc(var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))) / 2))"</li><li>md: "padding-x":"var(--kendo-fab-md-padding-x, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)))","padding-y":"var(--kendo-fab-md-padding-y, var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))))"</li><li>lg: "padding-x":"var(--kendo-fab-lg-padding-x, calc(var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem)) * 1.5))","padding-y":"var(--kendo-fab-lg-padding-y, calc(var(--kendo-fab-padding-y, var(--kendo-fab-padding-x, var(--kendo-spacing-4, 1rem))) * 1.5))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-fab-item-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-fab-item-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-border</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-fab-item-border, var(--kendo-color-border, #8a8886))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-hover-text, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-fab-item-hover-text, var(--kendo-color-on-base, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-hover-bg, #{k-color(base-hover)} )</code></td>
    <td><code>var(--kendo-fab-item-hover-bg, var(--kendo-color-base-hover, #f3f2f1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-hover-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-fab-item-hover-border, var(--kendo-color-border, #8a8886))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-fab-item-focus-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-fab-item-focus-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-focus-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-fab-item-focus-border, var(--kendo-color-border, #8a8886))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-active-text, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-fab-item-active-text, var(--kendo-color-on-base, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-active-bg, #{k-color(base-active)} )</code></td>
    <td><code>var(--kendo-fab-item-active-bg, var(--kendo-color-base-active, #edebe9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-border</td>
    <td>String</td>
    <td><code>var( --kendo-fab-item-active-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-fab-item-active-border, var(--kendo-color-border, #8a8886))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-fab-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 6%, transparent) )</code></td>
    <td><code>var(--kendo-fab-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 6%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the disabled FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-fab-disabled-text, color-mix(in srgb, k-color(on-app-surface) 46%, transparent) )</code></td>
    <td><code>var(--kendo-fab-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-fab-disabled-border, transparent )</code></td>
    <td><code>var(--kendo-fab-disabled-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-generating-opacity</td>
    <td>String</td>
    <td><code>var( --kendo-fab-generating-opacity, 60% )</code></td>
    <td><code>var(--kendo-fab-generating-opacity, 60%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Тhe opacity of the generating FAB.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

