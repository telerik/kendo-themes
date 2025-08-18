---
title: Customizing Table
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_table
position: 9
---

# Customizing Table

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
    <td>$kendo-table-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-table-border-width, 1px )</code></td>
    <td><code>var(--kendo-table-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-table-cell-vertical-border-width, 0px )</code></td>
    <td><code>var(--kendo-table-cell-vertical-border-width, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-table-cell-horizontal-border-width, 1px )</code></td>
    <td><code>var(--kendo-table-cell-horizontal-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sm-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-table-sm-cell-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-table-sm-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table for small size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sm-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-table-sm-cell-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-table-sm-cell-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table for small size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-md-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-table-md-cell-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table for medium size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-md-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-table-md-cell-padding-y, #{k-spacing(2.5)} )</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table for medium size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-lg-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-table-lg-cell-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-table-lg-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table for large size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-lg-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-table-lg-cell-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-table-lg-cell-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table for large size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-table-header-font-weight, var( --kendo-font-weight-normal, normal ) )</code></td>
    <td><code>var(--kendo-table-header-font-weight, var(--kendo-font-weight-normal, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the table header cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-sm-cell-padding-x,
        cell-padding-y: $kendo-table-sm-cell-padding-y,
        group-label-padding-x: $kendo-list-item-group-label-sm-padding-x,
        group-label-padding-y: $kendo-list-item-group-label-sm-padding-y,
        group-label-font-size: $kendo-list-item-group-label-sm-font-size
    ),
    md: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-md-cell-padding-x,
        cell-padding-y: $kendo-table-md-cell-padding-y,
        group-label-padding-x: $kendo-list-item-group-label-md-padding-x,
        group-label-padding-y: $kendo-list-item-group-label-md-padding-y,
        group-label-font-size: $kendo-list-item-group-label-md-font-size
    ),
    lg: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-lg-cell-padding-x,
        cell-padding-y: $kendo-table-lg-cell-padding-y,
        group-label-padding-x: $kendo-list-item-group-label-lg-padding-x,
        group-label-padding-y: $kendo-list-item-group-label-lg-padding-y,
        group-label-font-size: $kendo-list-item-group-label-lg-font-size
    )
)</code></td>
    <td><ul><li>sm: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-table-sm-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","cell-padding-y":"var(--kendo-table-sm-cell-padding-y, var(--kendo-spacing-2, 0.5rem))","group-label-padding-x":"var(--kendo-list-item-group-label-sm-padding-x, var(--kendo-spacing-0\\.5, 0.125rem))","group-label-padding-y":"var(--kendo-list-item-group-label-sm-padding-y, var(--kendo-spacing-0\\.5, 0.125rem))","group-label-font-size":"var(--kendo-list-item-group-label-sm-font-size, var(--kendo-font-size-xs, inherit))"</li><li>md: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","cell-padding-y":"var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","group-label-padding-x":"var(--kendo-list-item-group-label-md-padding-x, var(--kendo-spacing-1, 0.25rem))","group-label-padding-y":"var(--kendo-list-item-group-label-md-padding-y, var(--kendo-spacing-1, 0.25rem))","group-label-font-size":"var(--kendo-list-item-group-label-md-font-size, var(--kendo-font-size-xs, inherit))"</li><li>lg: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-table-lg-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","cell-padding-y":"var(--kendo-table-lg-cell-padding-y, var(--kendo-spacing-3, 0.75rem))","group-label-padding-x":"var(--kendo-list-item-group-label-lg-padding-x, var(--kendo-spacing-1\\.5, 0.375rem))","group-label-padding-y":"var(--kendo-list-item-group-label-lg-padding-y, var(--kendo-spacing-1\\.5, 0.375rem))","group-label-font-size":"var(--kendo-list-item-group-label-lg-font-size, var(--kendo-font-size-xs, inherit))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-header-bg, #{$kendo-table-bg} )</code></td>
    <td><code>var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-header-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-header-border, #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-sticky-header-text, #{$kendo-list-header-text} )</code></td>
    <td><code>var(--kendo-table-sticky-header-text, var(--kendo-list-header-text, var(--kendo-color-primary, #0f6cbd)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-sticky-header-bg, #{$kendo-list-header-bg} )</code></td>
    <td><code>var(--kendo-table-sticky-header-bg, var(--kendo-list-header-bg, var(--kendo-color-app-surface, #fafafa)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-sticky-header-border, #{$kendo-list-header-border} )</code></td>
    <td><code>var(--kendo-table-sticky-header-border, var(--kendo-list-header-border, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-table-sticky-header-shadow, #{$kendo-list-header-shadow} )</code></td>
    <td><code>var(--kendo-table-sticky-header-shadow, var(--kendo-list-header-shadow, var(--kendo-elevation-3, none)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-footer-bg, #{$kendo-table-header-bg} )</code></td>
    <td><code>var(--kendo-table-footer-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-footer-text, #{$kendo-table-header-text} )</code></td>
    <td><code>var(--kendo-table-footer-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-footer-border, #{$kendo-table-header-border} )</code></td>
    <td><code>var(--kendo-table-footer-border, var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-group-row-bg, #{$kendo-table-header-bg} )</code></td>
    <td><code>var(--kendo-table-group-row-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-group-row-text, #{$kendo-table-header-text} )</code></td>
    <td><code>var(--kendo-table-group-row-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-group-row-border, #{$kendo-table-header-border} )</code></td>
    <td><code>var(--kendo-table-group-row-border, var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-group-label-text, #{$kendo-list-bg} )</code></td>
    <td><code>var(--kendo-table-group-label-text, var(--kendo-list-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-group-label-bg, #{$kendo-list-text} )</code></td>
    <td><code>var(--kendo-table-group-label-bg, var(--kendo-list-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-alt-row-bg, initial )</code></td>
    <td><code>var(--kendo-table-alt-row-bg, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-alt-row-text, #{$kendo-table-text} )</code></td>
    <td><code>var(--kendo-table-alt-row-text, var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-alt-row-border, #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-table-alt-row-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-hover-bg, #{color-mix(in srgb, k-color(on-app-surface) 5%, transparent)} )</code></td>
    <td><code>var(--kendo-table-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 5%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-hover-text, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-table-hover-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-hover-border, #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-table-hover-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-focus-bg, inherit )</code></td>
    <td><code>var(--kendo-table-focus-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-focus-text, inherit )</code></td>
    <td><code>var(--kendo-table-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-focus-border, inherit )</code></td>
    <td><code>var(--kendo-table-focus-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-table-focus-shadow, #{$kendo-list-item-focus-shadow} )</code></td>
    <td><code>var(--kendo-table-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt, #000000)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-selected-bg, #{color-mix(in srgb, k-color(primary) 8%, transparent)} )</code></td>
    <td><code>var(--kendo-table-selected-bg, color-mix(in srgb, var(--kendo-color-primary, #0f6cbd) 8%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-table-selected-text, #{$kendo-table-text} )</code></td>
    <td><code>var(--kendo-table-selected-text, var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-table-selected-border, #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-table-selected-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-highlighted-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-highlighted-bg, #{color-mix(in srgb, k-color(warning) 8%, transparent)} )</code></td>
    <td><code>var(--kendo-table-highlighted-bg, color-mix(in srgb, var(--kendo-color-warning, #f7630c) 8%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-highlighted-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-table-highlighted-font-weight, var( --kendo-font-weight-semibold, bold ) )</code></td>
    <td><code>var(--kendo-table-highlighted-font-weight, var(--kendo-font-weight-semibold, bold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-highlighted-bg</td>
    <td>String</td>
    <td><code>var( --kendo-table-selected-highlighted-bg, #{color-mix(in srgb, color-mix(in srgb, k-color(primary), k-color(warning)) 23%, transparent)} )</code></td>
    <td><code>var(--kendo-table-selected-highlighted-bg, color-mix(in srgb, color-mix(in srgb, var(--kendo-color-primary, #0f6cbd), var(--kendo-color-warning, #f7630c)) 23%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-row-span-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-table-cell-row-span-shadow, inset 0 0 0 1px #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-table-cell-row-span-shadow, inset 0 0 0 1px var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the row spanned cells.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

