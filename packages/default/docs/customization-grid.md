---
title: Customizing Grid
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_grid
position: 9
---

# Customizing Grid

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
    <td>$kendo-grid-padding-x</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-y</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-grouping-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-filter-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid edit cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1\.5, 0.375rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-bg</td>
    <td>String</td>
    <td><code>$kendo-table-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-text</td>
    <td>String</td>
    <td><code>$kendo-table-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-table-header-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>String</td>
    <td><code>$kendo-grid-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>String</td>
    <td><code>$kendo-grid-header-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>String</td>
    <td><code>$kendo-table-alt-row-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #3d3d3d) 5%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-text</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-border</td>
    <td>Null</td>
    <td><code>$kendo-table-alt-row-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid alternating rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-table-hover-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #3d3d3d) 11%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-table-hover-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-table-selected-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #ff6358) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-border</td>
    <td>Null</td>
    <td><code>$kendo-table-selected-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>String</td>
    <td><code>$kendo-grid-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>String</td>
    <td><code>$kendo-grid-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border-width</td>
    <td>Number</td>
    <td><code>$kendo-grid-border-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the selection aggregates items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-line-height</td>
    <td>String</td>
    <td><code>$kendo-grid-line-height</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td><code>var(--kendo-font-weight-bold, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-base) 20%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #3d3d3d) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-active-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-height</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid row resize indicator.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

