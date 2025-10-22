---
title: Customizing Grid
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_grid
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
    <td>$kendo-grid-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-border-width, 1px )</code></td>
    <td><code>var(--kendo-grid-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-grid-border-style, solid )</code></td>
    <td><code>var(--kendo-grid-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-grid-font-family, var(--kendo-font-family, inherit) )</code></td>
    <td><code>var(--kendo-grid-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-font-size, var(--kendo-font-size, inherit) )</code></td>
    <td><code>var(--kendo-grid-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-grid-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-x</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-y</td>
    <td>String</td>
    <td><code>$kendo-table-md-cell-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-x</td>
    <td>Calculation</td>
    <td><code>$kendo-toolbar-md-padding-x</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-x, var(--kendo-spacing-3, 0.75rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-toolbar-md-padding-y</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-y, var(--kendo-spacing-1\.5, 0.375rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-filter-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
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
    <td>$kendo-grid-group-drop-hint-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-drop-hint-size, 6px )</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-size, 6px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-drop-hint-line-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-drop-hint-line-size, 1px )</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-line-size, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line size of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-drop-hint-dot-size</td>
    <td>String</td>
    <td><code>$kendo-grid-group-drop-hint-size</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-size, 6px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dot size of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-drop-hint-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-drop-hint-height, calc( #{$kendo-chip-calc-size} + #{$kendo-grid-group-drop-hint-size} ) )</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-height, calc(calc(var(--kendo-chip-line-height, var(--kendo-line-height-lg, normal)) * 1em + calc(var(--kendo-chip-padding-y, var(--kendo-spacing-1\.5, 0.375rem)) / 2) * 2 + var(--kendo-chip-border-width, 1px) * 2) + var(--kendo-grid-group-drop-hint-size, 6px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-drop-hint-top</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-drop-hint-top, 2px )</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-top, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top offset of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-grouping-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-grouping-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-grouping-header-padding-x</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-edit-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-x</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-edit-cell-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-group-dropclue-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-chip-sm-calc-size} + #{$kendo-grid-group-drop-hint-size})</code></td>
    <td><code>calc(calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-spacing-0\.5, 0.125rem) / 2) * 2 + var(--kendo-chip-border-width, 1px) * 2) + var(--kendo-grid-group-drop-hint-size, 6px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-selection-aggregates-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sm-selection-aggregates-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-header-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-header-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-header-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-header-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-grouping-header-padding-x</td>
    <td>Calculation</td>
    <td><code>$kendo-grid-grouping-header-padding-x</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-x, var(--kendo-spacing-3, 0.75rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-grouping-header-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-grid-grouping-header-padding-y</code></td>
    <td><code>calc(var(--kendo-toolbar-md-padding-y, var(--kendo-spacing-1\.5, 0.375rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-cell-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-filter-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-filter-cell-padding-y</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-edit-cell-padding-x</td>
    <td>String</td>
    <td><code>$kendo-grid-edit-cell-padding-x</code></td>
    <td><code>var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-edit-cell-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-grid-edit-cell-padding-y</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-group-dropclue-height</td>
    <td>String</td>
    <td><code>$kendo-grid-group-drop-hint-height</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-height, calc(calc(var(--kendo-chip-line-height, var(--kendo-line-height-lg, normal)) * 1em + calc(var(--kendo-chip-padding-y, var(--kendo-spacing-1\.5, 0.375rem)) / 2) * 2 + var(--kendo-chip-border-width, 1px) * 2) + var(--kendo-grid-group-drop-hint-size, 6px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-selection-aggregates-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-md-selection-aggregates-padding-y</td>
    <td>String</td>
    <td><code>$kendo-grid-md-selection-aggregates-padding-x</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        header-padding-x: $kendo-grid-sm-header-padding-x,
        header-padding-y: $kendo-grid-sm-header-padding-y,
        grouping-header-padding-x: $kendo-grid-sm-grouping-header-padding-x,
        grouping-header-padding-y: $kendo-grid-sm-grouping-header-padding-y,
        cell-padding-x: $kendo-grid-sm-cell-padding-x,
        cell-padding-y: $kendo-grid-sm-cell-padding-y,
        filter-cell-padding-x: $kendo-grid-sm-filter-cell-padding-x,
        filter-cell-padding-y: $kendo-grid-sm-filter-cell-padding-y,
        edit-cell-padding-x: $kendo-grid-sm-edit-cell-padding-x,
        edit-cell-padding-y: $kendo-grid-sm-edit-cell-padding-y,
        button-padding-y: $kendo-button-sm-padding-y,
        button-calc-size: $kendo-button-sm-calc-size,
        group-dropclue-height: $kendo-grid-sm-group-dropclue-height,
        selection-aggregates-padding-x: $kendo-grid-sm-selection-aggregates-padding-x,
        selection-aggregates-padding-y: $kendo-grid-sm-selection-aggregates-padding-y
    ),
    md: (
        header-padding-x: $kendo-grid-md-header-padding-x,
        header-padding-y: $kendo-grid-md-header-padding-y,
        grouping-header-padding-x: $kendo-grid-md-grouping-header-padding-x,
        grouping-header-padding-y: $kendo-grid-md-grouping-header-padding-y,
        cell-padding-x: $kendo-grid-md-cell-padding-x,
        cell-padding-y: $kendo-grid-md-cell-padding-y,
        filter-cell-padding-x: $kendo-grid-md-filter-cell-padding-x,
        filter-cell-padding-y: $kendo-grid-md-filter-cell-padding-y,
        edit-cell-padding-x: $kendo-grid-md-edit-cell-padding-x,
        edit-cell-padding-y: $kendo-grid-md-edit-cell-padding-y,
        button-padding-y: $kendo-button-md-padding-y,
        button-calc-size: $kendo-button-md-calc-size,
        group-dropclue-height: $kendo-grid-md-group-dropclue-height,
        selection-aggregates-padding-x: $kendo-grid-md-selection-aggregates-padding-x,
        selection-aggregates-padding-y: $kendo-grid-md-selection-aggregates-padding-y
    ),
)</code></td>
    <td><ul><li>sm: "header-padding-x":"var(--kendo-spacing-3, 0.75rem)","header-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","grouping-header-padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","grouping-header-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","cell-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","filter-cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","filter-cell-padding-y":"var(--kendo-spacing-2, 0.5rem)","edit-cell-padding-x":"var(--kendo-spacing-3, 0.75rem)","edit-cell-padding-y":"var(--kendo-spacing-0\\.5, 0.125rem)","button-padding-y":"calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\\.5, 0.125rem)) + 1px)","button-calc-size":"calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\\.5, 0.125rem)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2)","group-dropclue-height":"calc(calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-spacing-0\\.5, 0.125rem) / 2) * 2 + var(--kendo-chip-border-width, 1px) * 2) + var(--kendo-grid-group-drop-hint-size, 6px))","selection-aggregates-padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","selection-aggregates-padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)"</li><li>md: "header-padding-x":"var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","header-padding-y":"var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","grouping-header-padding-x":"calc(var(--kendo-toolbar-md-padding-x, var(--kendo-spacing-3, 0.75rem)) + 1px)","grouping-header-padding-y":"calc(var(--kendo-toolbar-md-padding-y, var(--kendo-spacing-1\\.5, 0.375rem)) + 1px)","cell-padding-x":"var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","cell-padding-y":"var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","filter-cell-padding-x":"var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","filter-cell-padding-y":"var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","edit-cell-padding-x":"var(--kendo-table-md-cell-padding-x, var(--kendo-spacing-2, 0.5rem))","edit-cell-padding-y":"calc(var(--kendo-spacing-2\\.5, 0.625rem) / 2)","button-padding-y":"calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)","button-calc-size":"calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + var(--kendo-button-border-width, 1px) * 2)","group-dropclue-height":"var(--kendo-grid-group-drop-hint-height, calc(calc(var(--kendo-chip-line-height, var(--kendo-line-height-lg, normal)) * 1em + calc(var(--kendo-chip-padding-y, var(--kendo-spacing-1\\.5, 0.375rem)) / 2) * 2 + var(--kendo-chip-border-width, 1px) * 2) + var(--kendo-grid-group-drop-hint-size, 6px)))","selection-aggregates-padding-x":"var(--kendo-spacing-2, 0.5rem)","selection-aggregates-padding-y":"var(--kendo-spacing-2, 0.5rem)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-bg, #{$kendo-table-bg} )</code></td>
    <td><code>var(--kendo-grid-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-text, #{$kendo-table-text} )</code></td>
    <td><code>var(--kendo-grid-text, var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-border, #{$kendo-table-border} )</code></td>
    <td><code>var(--kendo-grid-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-grid-focus-shadow, #{$kendo-list-item-focus-shadow} )</code></td>
    <td><code>var(--kendo-grid-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt, #000000)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-alt-bg, #{$kendo-table-alt-row-bg} )</code></td>
    <td><code>var(--kendo-grid-alt-bg, var(--kendo-table-alt-row-bg, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of alternating rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-hover-bg, #{$kendo-table-hover-bg} )</code></td>
    <td><code>var(--kendo-grid-hover-bg, var(--kendo-table-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 5%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hover rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-hover-text, #{$kendo-table-hover-text} )</code></td>
    <td><code>var(--kendo-grid-hover-text, var(--kendo-table-hover-text, var(--kendo-color-on-base, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hover rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-hover-border, #{$kendo-table-hover-border} )</code></td>
    <td><code>var(--kendo-grid-hover-border, var(--kendo-table-hover-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hover rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selected-bg, #{$kendo-table-selected-bg} )</code></td>
    <td><code>var(--kendo-grid-selected-bg, var(--kendo-table-selected-bg, color-mix(in srgb, var(--kendo-color-primary, #0f6cbd) 8%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selected-text, #{$kendo-table-selected-text} )</code></td>
    <td><code>var(--kendo-grid-selected-text, var(--kendo-table-selected-text, var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selected-border, #{$kendo-table-selected-border} )</code></td>
    <td><code>var(--kendo-grid-selected-border, var(--kendo-table-selected-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected rows in Grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-highlighted-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-highlighted-bg, #{$kendo-table-highlighted-bg} )</code></td>
    <td><code>var(--kendo-grid-highlighted-bg, var(--kendo-table-highlighted-bg, color-mix(in srgb, var(--kendo-color-warning, #f7630c) 8%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-highlighted-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-grid-highlighted-font-weight, #{$kendo-table-highlighted-font-weight} )</code></td>
    <td><code>var(--kendo-grid-highlighted-font-weight, var(--kendo-table-highlighted-font-weight, var(--kendo-font-weight-semibold, bold)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-highlighted-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selected-highlighted-bg, #{$kendo-table-selected-highlighted-bg} )</code></td>
    <td><code>var(--kendo-grid-selected-highlighted-bg, var(--kendo-table-selected-highlighted-bg, color-mix(in srgb, color-mix(in srgb, var(--kendo-color-primary, #0f6cbd), var(--kendo-color-warning, #f7630c)) 23%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected highlighted Grid rows.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border-width-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-border-width-y, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-header-border-width-y, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical border width of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border-width-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-border-width-x, 0px )</code></td>
    <td><code>var(--kendo-grid-header-border-width-x, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal border width of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-font-size, inherit )</code></td>
    <td><code>var(--kendo-grid-header-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-font-weight, var(--kendo-font-weight-normal, normal) )</code></td>
    <td><code>var(--kendo-grid-header-font-weight, var(--kendo-font-weight-normal, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-menu-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-menu-spacing, var(--kendo-icon-spacing, .5rem) )</code></td>
    <td><code>var(--kendo-grid-header-menu-spacing, var(--kendo-icon-spacing, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The menu spacing of the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-first-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-first-border-width, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-header-first-border-width, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the first cell in the Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-bg, #{$kendo-table-header-bg} )</code></td>
    <td><code>var(--kendo-grid-header-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-text, #{$kendo-table-header-text} )</code></td>
    <td><code>var(--kendo-grid-header-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-header-border, #{$kendo-table-header-border} )</code></td>
    <td><code>var(--kendo-grid-header-border, var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-footer-bg, #{$kendo-table-footer-bg} )</code></td>
    <td><code>var(--kendo-grid-footer-bg, var(--kendo-table-footer-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-footer-text, #{$kendo-table-footer-text} )</code></td>
    <td><code>var(--kendo-grid-footer-text, var(--kendo-table-footer-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-footer-border, #{$kendo-table-footer-border} )</code></td>
    <td><code>var(--kendo-grid-footer-border, var(--kendo-table-footer-border, var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-bg, #{$kendo-toolbar-bg} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-text, #{$kendo-grid-text} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-text, var(--kendo-grid-text, var(--kendo-table-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-border, #{$kendo-grid-border} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-border, var(--kendo-grid-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-border-width, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-border-width, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Grid selection aggregates items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-line-height, #{$kendo-grid-line-height} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-line-height, var(--kendo-grid-line-height, var(--kendo-line-height, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selection-aggregates-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-grid-selection-aggregates-font-weight, #{$kendo-font-weight-bold} )</code></td>
    <td><code>var(--kendo-grid-selection-aggregates-font-weight, 700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid selection aggregates container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-header-bg, #{$kendo-toolbar-bg} )</code></td>
    <td><code>var(--kendo-grid-grouping-header-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-header-text, #{$kendo-toolbar-text} )</code></td>
    <td><code>var(--kendo-grid-grouping-header-text, var(--kendo-toolbar-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-header-border, #{$kendo-toolbar-border} )</code></td>
    <td><code>var(--kendo-grid-grouping-header-border, var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-border-width-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-row-border-width-y, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-grouping-row-border-width-y, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical border width of the Grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-row-bg, #{$kendo-table-group-row-bg} )</code></td>
    <td><code>var(--kendo-grid-grouping-row-bg, var(--kendo-table-group-row-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-row-text, #{$kendo-table-group-row-text} )</code></td>
    <td><code>var(--kendo-grid-grouping-row-text, var(--kendo-table-group-row-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-grouping-row-border, #{$kendo-table-group-row-border} )</code></td>
    <td><code>var(--kendo-grid-grouping-row-border, var(--kendo-table-group-row-border, var(--kendo-table-header-border, var(--kendo-table-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-filter-cell-padding-x, #{$kendo-grid-padding-y} )</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-filter-cell-padding-y, #{$kendo-grid-filter-cell-padding-x} )</code></td>
    <td><code>var(--kendo-table-md-cell-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-toolbar-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-toolbar-border-width, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-toolbar-border-width, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-border-width-y</td>
    <td>String</td>
    <td><code>$kendo-grid-border-width</code></td>
    <td><code>var(--kendo-grid-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical border width of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-border-width-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal border width of the Grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sort-index-font-size, var(--kendo-font-size-sm, inherit) )</code></td>
    <td><code>var(--kendo-grid-sort-index-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-spacing-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sort-index-spacing-x, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-grid-sort-index-spacing-x, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the Grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sort-icon-spacing, var(--kendo-icon-lg-spacing, .5rem) )</code></td>
    <td><code>var(--kendo-grid-sort-icon-spacing, var(--kendo-icon-lg-spacing, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Grid sort icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-indicator-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sort-indicator-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-grid-sort-indicator-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid sort indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-indicator-order-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sort-indicator-order-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-grid-sort-indicator-order-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid sort order indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sorted-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sorted-bg, rgba(0, 0, 0, 0.04) )</code></td>
    <td><code>var(--kendo-grid-sorted-bg, rgba(0, 0, 0, 0.04))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the sorted Grid cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-command-cell-button-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-grid-command-cell-button-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-command-cell-button-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid command cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-footer-border-width-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-footer-border-width-y, 1px )</code></td>
    <td><code>var(--kendo-grid-group-footer-border-width-y, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal border width of the Grid group footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-footer-border-width-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-footer-border-width-x, 0px )</code></td>
    <td><code>var(--kendo-grid-group-footer-border-width-x, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical border width of the Grid group footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-drop-hint-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-group-drop-hint-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-grid-group-drop-hint-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-cell-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-cell-border-width, #{$kendo-grid-border-width} )</code></td>
    <td><code>var(--kendo-grid-sticky-cell-border-width, var(--kendo-grid-border-width, 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-grid-sticky-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-border, color-mix(in srgb, #{k-color(border)} 80%, transparent) )</code></td>
    <td><code>var(--kendo-grid-sticky-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 80%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-alt-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-alt-bg, #{$kendo-grid-sticky-bg} )</code></td>
    <td><code>var(--kendo-grid-sticky-alt-bg, var(--kendo-grid-sticky-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The alt background color of the Grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-hover-bg, k-color(base-hover) )</code></td>
    <td><code>var(--kendo-grid-sticky-hover-bg, var(--kendo-color-base-hover, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-header-bg, #{$kendo-grid-header-bg} )</code></td>
    <td><code>var(--kendo-grid-sticky-header-bg, var(--kendo-grid-header-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-header-text, #{$kendo-grid-header-text} )</code></td>
    <td><code>var(--kendo-grid-sticky-header-text, var(--kendo-grid-header-text, var(--kendo-table-header-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-header-border, #{$kendo-grid-sticky-border} )</code></td>
    <td><code>var(--kendo-grid-sticky-header-border, var(--kendo-grid-sticky-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 80%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-footer-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-sticky-footer-bg, #{$kendo-grid-header-bg} )</code></td>
    <td><code>var(--kendo-grid-sticky-footer-bg, var(--kendo-grid-header-bg, var(--kendo-table-header-bg, var(--kendo-table-bg, var(--kendo-color-surface-alt, #ffffff)))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid sticky footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-menu-container-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-filter-menu-container-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-filter-menu-container-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid filter menu container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-menu-container-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-filter-menu-container-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-filter-menu-container-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid filter menu container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-width, 230px )</code></td>
    <td><code>var(--kendo-grid-column-menu-width, 230px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-max-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-max-width, 320px )</code></td>
    <td><code>var(--kendo-grid-column-menu-max-width, 320px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The max width of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-shadow, var(--kendo-box-shadow-depth-4, none) )</code></td>
    <td><code>var(--kendo-grid-column-menu-shadow, var(--kendo-box-shadow-depth-4, none))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-grid-column-menu-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-multicheck-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-multicheck-font-size, #{$kendo-list-md-font-size} )</code></td>
    <td><code>var(--kendo-grid-column-menu-multicheck-font-size, var(--kendo-list-md-font-size, var(--kendo-font-size, inherit)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid column menu checkbox container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-multicheck-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-multicheck-line-height, #{$kendo-list-md-line-height} )</code></td>
    <td><code>var(--kendo-grid-column-menu-multicheck-line-height, var(--kendo-list-md-line-height, var(--kendo-line-height, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Grid column menu checkbox container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-items-wrap-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-items-wrap-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-items-wrap-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid column menu items wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-items-wrap-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-items-wrap-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-items-wrap-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid column menu items wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-padding-y, #{$kendo-list-md-item-padding-y} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-padding-y, var(--kendo-list-md-item-padding-y, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-padding-x, #{$kendo-list-md-item-padding-x} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-padding-x, var(--kendo-list-md-item-padding-x, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-gap</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-gap, #{$kendo-list-md-item-padding-x} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-gap, var(--kendo-list-md-item-padding-x, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-bg, #{$kendo-list-item-bg} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-bg, var(--kendo-list-item-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-text, #{$kendo-list-item-text} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-text, var(--kendo-list-item-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-item-icon-text, #{$kendo-list-item-icon-text} )</code></td>
    <td><code>var(--kendo-grid-column-menu-item-icon-text, var(--kendo-list-item-icon-text, var(--kendo-color-primary, #0f6cbd)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid column menu item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-padding-y, #{$kendo-grid-column-menu-item-padding-y} )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-padding-y, var(--kendo-grid-column-menu-item-padding-y, var(--kendo-list-md-item-padding-y, var(--kendo-spacing-1\.5, 0.375rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-padding-x, #{$kendo-grid-column-menu-item-padding-x} )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-padding-x, var(--kendo-grid-column-menu-item-padding-x, var(--kendo-list-md-item-padding-x, var(--kendo-spacing-1\.5, 0.375rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-border-width, 1px )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-border-style, solid )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-font-size, var(--kendo-font-size-sm, inherit) )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-font-weight, var(--kendo-font-weight-bold, normal) )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-font-weight, var(--kendo-font-weight-bold, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The mine height of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-text-transform</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-text-transform, uppercase )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-text-transform, uppercase)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-group-header-border, color-mix(in srgb, #{k-color(border)} 16%, transparent) )</code></td>
    <td><code>var(--kendo-grid-column-menu-group-header-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-tabbed-tabstrip-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-tabbed-tabstrip-content-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-tabbed-tabstrip-content-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabstrip content in the Grid tabbed column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-tabbed-tabstrip-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-tabbed-tabstrip-content-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-grid-column-menu-tabbed-tabstrip-content-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the tabstrip content in the Grid tabbed column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-tabbed-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-column-menu-tabbed-bg, k-color(surface) )</code></td>
    <td><code>var(--kendo-grid-column-menu-tabbed-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid tabbed column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-drag-cell-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-drag-cell-width, calc( var( --kendo-icon-size, 1rem ) * 2.25 ) )</code></td>
    <td><code>var(--kendo-grid-drag-cell-width, calc(var(--kendo-icon-size, 1rem) * 2.25))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Grid drag cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hierarchy-col-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-hierarchy-col-width, calc( var( --kendo-icon-size, 1rem ) * 2 ) )</code></td>
    <td><code>var(--kendo-grid-hierarchy-col-width, calc(var(--kendo-icon-size, 1rem) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Grid hierarchy cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-row-resizer-hover-bg, color-mix(in srgb, #{k-color(on-app-surface)} 46%, transparent) )</code></td>
    <td><code>var(--kendo-grid-row-resizer-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-grid-row-resizer-active-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-grid-row-resizer-active-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-row-resizer-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-row-resizer-height, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-grid-row-resizer-height, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid row resize indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-cell-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-stack-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Grid stack layout cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-cell-padding-y, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-grid-stack-cell-padding-y, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Grid stack layout cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-column-gap</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-column-gap, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-grid-stack-column-gap, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The column gap of the Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-editable-column-gap</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-editable-column-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-stack-editable-column-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The column gap of the editable Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-hierarchy-col-width</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-hierarchy-col-width, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-grid-stack-hierarchy-col-width, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the hierarchy column in the Grid stack layout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-header-font-size, var(--kendo-font-size-sm, inherit) )</code></td>
    <td><code>var(--kendo-grid-stack-header-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-header-font-weight, var(--kendo-font-weight-bold, inherit) )</code></td>
    <td><code>var(--kendo-grid-stack-header-font-weight, var(--kendo-font-weight-bold, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-expandable-shadow-height</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-expandable-shadow-height, #{k-spacing(2.5)} )</code></td>
    <td><code>var(--kendo-grid-stack-expandable-shadow-height, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Grid stack layout expandable row shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-header-color</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-header-color, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-grid-stack-header-color, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Grid stack layout column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-focus-outline, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-grid-stack-focus-outline, var(--kendo-color-base-emphasis, #d1d1d1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Grid stack layout focused cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-stack-expandable-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-grid-stack-expandable-shadow, #{k-elevation(2)} )</code></td>
    <td><code>var(--kendo-grid-stack-expandable-shadow, var(--kendo-elevation-2, 0 1px 2px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)))</code></td>
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

