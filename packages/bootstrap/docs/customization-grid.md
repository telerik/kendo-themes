---
title: Customizing Grid
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_grid
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
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
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
    <td><code>$kendo-table-md-cell-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-y</code></td>
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
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
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
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid edit cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
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
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>String</td>
    <td><code>$kendo-table-border</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>String</td>
    <td><code>$kendo-table-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>String</td>
    <td><code>$kendo-table-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>String</td>
    <td><code>$kendo-table-header-border</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>String</td>
    <td><code>$kendo-table-footer-bg</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>String</td>
    <td><code>$kendo-table-footer-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>String</td>
    <td><code>$kendo-table-footer-border</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>String</td>
    <td><code>$kendo-table-alt-row-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 4%, transparent)</code></td>
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
    <td>$kendo-grid-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-table-hover-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 8%, transparent)</code></td>
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
    <td>$kendo-grid-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-table-selected-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #0d6efd) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td>String</td>
    <td><code>$kendo-table-selected-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-highlighted-bg</td>
    <td>String</td>
    <td><code>$kendo-table-highlighted-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-warning, #ffc107) 25%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-highlighted-font-weight</td>
    <td>String</td>
    <td><code>$kendo-table-highlighted-font-weight</code></td>
    <td><code>var(--kendo-font-weight-bold, bold)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-highlighted-bg</td>
    <td>String</td>
    <td><code>$kendo-table-selected-highlighted-bg</code></td>
    <td><code>color-mix(in srgb, color-mix(in srgb, var(--kendo-color-primary, #0d6efd), var(--kendo-color-warning, #ffc107)) 44%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-bg</td>
    <td>String</td>
    <td><code>$kendo-grid-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>String</td>
    <td><code>$kendo-grid-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>String</td>
    <td><code>$kendo-grid-border</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
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
    <td><code>var( --kendo-font-weight-bold, normal )!default</code></td>
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
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #212529) 20%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-active-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
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
<tr>
    <td>$kendo-grid-stack-cell-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid stack layout cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid stack layout cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-column-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The column gap of the Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-editable-column-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The column gap of the editable Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-hierarchy-col-width</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the hierarchy column in the Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight-bold, bold )</code></td>
    <td><code>var(--kendo-font-weight-bold, bold)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-expandable-shadow-height</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid stack layout expandable row shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-color</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #565e64)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-focus-outline</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 15%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 15%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Grid stack layout focused cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-expandable-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2, 0px 2px 7px rgba(0, 0, 0, 0.075))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Grid stack layout expandable row shadow.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

