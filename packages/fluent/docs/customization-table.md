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
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
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
    <td><ul><li>sm: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","cell-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","group-label-padding-x":"var(--kendo-spacing-0\\.5, 0.125rem)","group-label-padding-y":"var(--kendo-spacing-0\\.5, 0.125rem)","group-label-font-size":"var(--kendo-font-size-xs, inherit)"</li><li>md: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","cell-padding-y":"var(--kendo-spacing-3, 0.75rem)","group-label-padding-x":"var(--kendo-spacing-1, 0.25rem)","group-label-padding-y":"var(--kendo-spacing-1, 0.25rem)","group-label-font-size":"var(--kendo-font-size-xs, inherit)"</li><li>lg: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, inherit)","cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","cell-padding-y":"var(--kendo-spacing-3\\.5, 0.875rem)","group-label-padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","group-label-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","group-label-font-size":"var(--kendo-font-size-xs, inherit)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>String</td>
    <td><code>$kendo-table-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-text</td>
    <td>String</td>
    <td><code>$kendo-list-header-text</code></td>
    <td><code>var(--kendo-color-primary, #0078d4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-bg</td>
    <td>String</td>
    <td><code>$kendo-list-header-bg</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-border</td>
    <td>String</td>
    <td><code>$kendo-list-header-border</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-shadow</td>
    <td>String</td>
    <td><code>$kendo-list-header-shadow</code></td>
    <td><code>var(--kendo-elevation-3, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-text</td>
    <td>String</td>
    <td><code>$kendo-list-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-bg</td>
    <td>String</td>
    <td><code>$kendo-list-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>String</td>
    <td><code>initial</code></td>
    <td><code>initial</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>String</td>
    <td><code>$kendo-table-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>String</td>
    <td><code>k-color(base-hover)</code></td>
    <td><code>var(--kendo-color-base-hover, #f3f2f1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-base)</code></td>
    <td><code>var(--kendo-color-on-base, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>(inset 0 0 0 1px var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary) 13%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #0078d4) 13%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>String</td>
    <td><code>$kendo-table-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary) 26%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #0078d4) 26%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-table-selected-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-border</td>
    <td>String</td>
    <td><code>$kendo-table-selected-border</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-row-span-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-table-border</code></td>
    <td><code>(inset 0 0 0 1px color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
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

