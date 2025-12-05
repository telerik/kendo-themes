---
title: Customizing Pivotgrid
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_pivotgrid
position: 9
---

# Customizing Pivotgrid

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
    <td>$kendo-pivotgrid-spacer</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-spacer, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-pivotgrid-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-pivotgrid-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-pivotgrid-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-border-width, 1px )</code></td>
    <td><code>var(--kendo-pivotgrid-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-icon-spacing, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-pivotgrid-icon-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon spacing of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pivotgrid-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-alt-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-alt-border, #{$kendo-pivotgrid-border} )</code></td>
    <td><code>var(--kendo-pivotgrid-alt-border, var(--kendo-pivotgrid-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The alt border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-row-header-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-row-header-width, 300px )</code></td>
    <td><code>var(--kendo-pivotgrid-row-header-width, 300px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the PivotGrid row header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-column-header-height</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-column-header-height, 75px )</code></td>
    <td><code>var(--kendo-pivotgrid-column-header-height, 75px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the PivotGrid column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-cell-padding-x, #{$kendo-table-md-cell-padding-x} )</code></td>
    <td><code>var(--kendo-pivotgrid-cell-padding-x, var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-cell-padding-y, #{$kendo-table-md-cell-padding-y} )</code></td>
    <td><code>var(--kendo-pivotgrid-cell-padding-y, var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-cell-border-width, 1px )</code></td>
    <td><code>var(--kendo-pivotgrid-cell-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-headers-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-headers-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-headers-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-headers-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-headers-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pivotgrid-headers-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-total-bg, #{k-color(base-subtle)} )</code></td>
    <td><code>var(--kendo-pivotgrid-total-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-total-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-total-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-total-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pivotgrid-total-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-hover-bg, #{k-color(base-hover)} )</code></td>
    <td><code>var(--kendo-pivotgrid-hover-bg, var(--kendo-color-base-hover, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-hover-text, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-hover-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-hover-border, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-selected-bg, #{k-color(base-active)} )</code></td>
    <td><code>var(--kendo-pivotgrid-selected-bg, var(--kendo-color-base-active, #ebebeb))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-selected-text, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-selected-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-selected-border, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-selected-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-focus-shadow, #{$kendo-list-item-focus-shadow} )</code></td>
    <td><code>var(--kendo-pivotgrid-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt, #000000)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-border-width, 1px )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-padding-x, #{$kendo-pivotgrid-spacer} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-padding-x, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-padding-y, #{$kendo-pivotgrid-configurator-header-padding-x} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-padding-y, var(--kendo-pivotgrid-configurator-header-padding-x, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-font-size, calc( var( --kendo-font-size-xl, 2rem ) * .9 ) )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-font-size, calc(var(--kendo-font-size-xl, 2rem) * 0.9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-font-weight, var( --kendo-font-weight-bold, bold ) )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-font-weight, var(--kendo-font-weight-bold, bold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-content-padding-x, #{$kendo-pivotgrid-spacer} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-content-padding-x, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid configurator content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-content-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-content-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid configurator content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-fields-margin-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-fields-margin-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-fields-margin-y, calc( #{$kendo-pivotgrid-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-fields-margin-y, calc(var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-gap</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-fields-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-fields-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-vertical-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-vertical-width, 320px )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-vertical-width, 320px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the PivotGrid vertical configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-horizontal-height</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-horizontal-height, 420px )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-horizontal-height, 420px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the PivotGrid horizontal configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-header-border, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-header-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-button-padding-x, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-button-padding-x, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-button-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-button-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-button-border-width, 1px )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-button-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-size</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-button-size, calc( calc( #{$kendo-pivotgrid-line-height} * 1em ) + calc( #{$kendo-pivotgrid-configurator-button-padding-y} * 2 ) + calc( #{$kendo-pivotgrid-configurator-button-border-width} * 2 ) ) )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-button-size, calc(var(--kendo-pivotgrid-line-height, var(--kendo-line-height, normal)) * 1em + var(--kendo-pivotgrid-configurator-button-padding-y, var(--kendo-spacing-1, 0.25rem)) * 2 + var(--kendo-pivotgrid-configurator-button-border-width, 1px) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-configurator-button-icon-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-pivotgrid-configurator-button-icon-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon spacing of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-padding-x, #{$kendo-pivotgrid-spacer} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-padding-x, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-padding-y, #{$kendo-pivotgrid-spacer} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-padding-y, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-border-width, 1px )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-gap</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-gap, #{$kendo-pivotgrid-spacer} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-gap, var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-header-bg, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-header-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-header-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-header-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-calculated-field-header-border, inherit )</code></td>
    <td><code>var(--kendo-pivotgrid-calculated-field-header-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-treeview-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-treeview-padding-x, calc( #{$kendo-pivotgrid-spacer} / 2 ) )</code></td>
    <td><code>var(--kendo-pivotgrid-treeview-padding-x, calc(var(--kendo-pivotgrid-spacer, var(--kendo-spacing-3, 0.75rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the PivotGrid treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-treeview-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-treeview-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-pivotgrid-treeview-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the PivotGrid treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-alt-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><code>var(--kendo-grid-header-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-alt-text</td>
    <td>String</td>
    <td><code>$kendo-grid-header-text</code></td>
    <td><code>var(--kendo-grid-header-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-chrome-border</td>
    <td>String</td>
    <td><code>$kendo-grid-border</code></td>
    <td><code>var(--kendo-grid-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-row-headers-bg</td>
    <td>String</td>
    <td><code>var( --kendo-pivotgrid-row-headers-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-pivotgrid-row-headers-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the PivotGrid row.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

