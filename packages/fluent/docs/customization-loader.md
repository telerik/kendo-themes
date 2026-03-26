---
title: Customizing Loader
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_loader
position: 9
---

# Customizing Loader

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
    <td>$kendo-loader-default-size</td>
    <td>String</td>
    <td><code>"md"</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-default-theme-color</td>
    <td>String</td>
    <td><code>"primary"</code></td>
    <td><code>"primary"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default theme color of the Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-segment-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-loader-segment-border-radius, 50% )</code></td>
    <td><code>var(--kendo-loader-segment-border-radius, 50%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the small Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the medium Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-segment-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the large Loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-padding-x, calc( #{$kendo-loader-sm-segment-size} / 2 ) )</code></td>
    <td><code>var(--kendo-loader-sm-padding-x, calc(var(--kendo-spacing-1) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-padding-x, calc( #{$kendo-loader-md-segment-size} / 2 ) )</code></td>
    <td><code>var(--kendo-loader-md-padding-x, calc(var(--kendo-spacing-2) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-padding-x, calc( #{$kendo-loader-lg-segment-size} / 2 ) )</code></td>
    <td><code>var(--kendo-loader-lg-padding-x, calc(var(--kendo-spacing-4) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-padding-y, calc( #{$kendo-loader-sm-segment-size} / 2 ) )</code></td>
    <td><code>var(--kendo-loader-sm-padding-y, calc(var(--kendo-spacing-1) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-padding-y, calc( #{$kendo-loader-md-segment-size} / 2 ) )</code></td>
    <td><code>var(--kendo-loader-md-padding-y, calc(var(--kendo-spacing-2) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-padding-y, calc( #{$kendo-loader-lg-segment-size} /2 ) )</code></td>
    <td><code>var(--kendo-loader-lg-padding-y, calc(var(--kendo-spacing-4) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-equilateral-height</td>
    <td>Number</td>
    <td><code>.8660</code></td>
    <td><code>0.866</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The equilateral height of the Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-sm-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-1) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-md-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-lg-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-sm-spinner-3-width} * #{$kendo-loader-equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-1) * 4) * 0.866)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-md-spinner-3-width} * #{$kendo-loader-equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-2) * 4) * 0.866)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-3-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-lg-spinner-3-width} * #{$kendo-loader-equilateral-height} )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-4) * 4) * 0.866)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-3 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-sm-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-1) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-md-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-loader-lg-segment-size} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-4) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-sm-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-1) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-md-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-2) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-spinner-4-height</td>
    <td>Calculation</td>
    <td><code>$kendo-loader-lg-spinner-4-width</code></td>
    <td><code>calc(var(--kendo-spacing-4) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large spinner-4 Loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-loader-container-panel-border-width, 1px )</code></td>
    <td><code>var(--kendo-loader-container-panel-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-loader-container-panel-border-style, solid )</code></td>
    <td><code>var(--kendo-loader-container-panel-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-color</td>
    <td>String</td>
    <td><code>var( --kendo-loader-container-panel-border-color, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-loader-container-panel-border-color, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-loader-container-panel-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-loader-container-panel-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-bg</td>
    <td>String</td>
    <td><code>var( --kendo-loader-container-panel-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-loader-container-panel-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-container-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-loader-sm-container-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-container-padding-x, #{k-spacing(5)} )</code></td>
    <td><code>var(--kendo-loader-md-container-padding-x, var(--kendo-spacing-5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-container-padding-x, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-loader-lg-container-padding-x, var(--kendo-spacing-6))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-container-padding-y, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-loader-sm-container-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-container-padding-y, #{k-spacing(5)} )</code></td>
    <td><code>var(--kendo-loader-md-container-padding-y, var(--kendo-spacing-5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-container-padding-y, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-loader-lg-container-padding-y, var(--kendo-spacing-6))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-gap</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-container-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-loader-sm-container-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-gap</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-container-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-loader-md-container-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-gap</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-container-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-loader-lg-container-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-sm-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-loader-sm-container-font-size, var(--kendo-font-size-md) )</code></td>
    <td><code>var(--kendo-loader-sm-container-font-size, var(--kendo-font-size-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-md-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-loader-md-container-font-size, var(--kendo-font-size-lg) )</code></td>
    <td><code>var(--kendo-loader-md-container-font-size, var(--kendo-font-size-lg))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-lg-container-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-loader-lg-container-font-size, var(--kendo-font-size-xl) )</code></td>
    <td><code>var(--kendo-loader-lg-container-font-size, var(--kendo-font-size-xl))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-theme-colors</td>
    <td>List</td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
    <td><code>("base", "primary", "secondary", "tertiary", "info", "success", "warning", "error", "dark", "light", "inverse")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Loader.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

