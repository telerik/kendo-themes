---
title: Customizing Table
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_table
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
    <td><code>1px</code></td>
    <td><code>1px</code></td>
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
    <td>$kendo-table-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-line-height</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sm-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sm-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-md-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-md-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-lg-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-lg-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Table cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-sm-cell-padding-x,
        cell-padding-y: $kendo-table-sm-cell-padding-y
    ),
    md: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-md-cell-padding-x,
        cell-padding-y: $kendo-table-md-cell-padding-y
    ),
    lg: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, normal ),
        cell-padding-x: $kendo-table-lg-cell-padding-x,
        cell-padding-y: $kendo-table-lg-cell-padding-y
    )
)</code></td>
    <td><ul><li>sm: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)","cell-padding-x":"var(--kendo-spacing-2, 0.5rem)","cell-padding-y":"var(--kendo-spacing-2, 0.5rem)"</li><li>md: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)","cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","cell-padding-y":"var(--kendo-spacing-3, 0.75rem)"</li><li>lg: "font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)","cell-padding-x":"var(--kendo-spacing-4, 1rem)","cell-padding-y":"var(--kendo-spacing-4, 1rem)"</li></ul></td>
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
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface, #F7F3FA)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-gradient</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #F7F3FA)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #F7F3FA)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 8%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #1D1B20) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>var(--kendo-color-border, rgba(29, 27, 32, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>(inset 0 0 0 2px color-mix(in srgb, var(--kendo-color-on-app-surface, #1D1B20) 20%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary) 20%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #65558F) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-highlighted-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(warning) 20%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-warning, #F5CA47) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-highlighted-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-semibold, normal )</code></td>
    <td><code>var(--kendo-font-weight-semibold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-highlighted-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, color-mix(in srgb, k-color(primary), k-color(warning)) 36%, transparent)</code></td>
    <td><code>color-mix(in srgb, color-mix(in srgb, var(--kendo-color-primary, #65558F), var(--kendo-color-warning, #F5CA47)) 36%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected highlighted rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-row-span-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-table-border</code></td>
    <td><code>(inset 0 0 0 1px var(--kendo-color-border, rgba(29, 27, 32, 0.12)))</code></td>
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

