---
title: Customizing Treeview
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle_treeview
position: 9
---

# Customizing Treeview

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
    <td>$kendo-treeview-font-family</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-font-size-sm,
        line-height: $kendo-line-height-sm,
        filter-padding-x: k-spacing(1),
        filter-padding-y: k-spacing(1),
        indent: k-spacing(4),
        icon-spacing: k-spacing(1),
        checkbox-spacing: k-spacing(1),
        item-padding-x: k-spacing(2),
        item-padding-y: k-spacing(1),
        item-border-radius: k-spacing(0.5)
    ),
    md: (
        font-size: $kendo-font-size-md,
        line-height: $kendo-line-height-md,
        filter-padding-x: k-spacing(2),
        filter-padding-y: k-spacing(2),
        indent: k-spacing(4),
        icon-spacing: k-spacing(1),
        checkbox-spacing: k-spacing(1),
        item-padding-x: k-map-get( $kendo-spacing, 2.5 ),
        item-padding-y: k-spacing(1.5),
        item-border-radius: k-spacing(1)
    ),
    lg: (
        font-size: $kendo-font-size-lg,
        line-height: $kendo-line-height-lg,
        filter-padding-x: k-spacing(3),
        filter-padding-y: k-spacing(3),
        indent: k-spacing(4),
        icon-spacing: k-spacing(1),
        checkbox-spacing: k-spacing(1),
        item-padding-x: k-spacing(3),
        item-padding-y: k-spacing(2),
        item-border-radius: k-spacing(2)
    )
)</code></td>
    <td><code>(sm: (font-size: 0.875rem, line-height: 1.25, filter-padding-x: var(--kendo-spacing-1, 0.25rem), filter-padding-y: var(--kendo-spacing-1, 0.25rem), indent: var(--kendo-spacing-4, 1rem), icon-spacing: var(--kendo-spacing-1, 0.25rem), checkbox-spacing: var(--kendo-spacing-1, 0.25rem), item-padding-x: var(--kendo-spacing-2, 0.5rem), item-padding-y: var(--kendo-spacing-1, 0.25rem), item-border-radius: var(--kendo-spacing-0\.5, 0.125rem)), md: (font-size: 1rem, line-height: 1.5, filter-padding-x: var(--kendo-spacing-2, 0.5rem), filter-padding-y: var(--kendo-spacing-2, 0.5rem), indent: var(--kendo-spacing-4, 1rem), icon-spacing: var(--kendo-spacing-1, 0.25rem), checkbox-spacing: var(--kendo-spacing-1, 0.25rem), item-padding-x: 0.625rem, item-padding-y: var(--kendo-spacing-1\.5, 0.375rem), item-border-radius: var(--kendo-spacing-1, 0.25rem)), lg: (font-size: 1.25rem, line-height: 1.75, filter-padding-x: var(--kendo-spacing-3, 0.75rem), filter-padding-y: var(--kendo-spacing-3, 0.75rem), indent: var(--kendo-spacing-4, 1rem), icon-spacing: var(--kendo-spacing-1, 0.25rem), checkbox-spacing: var(--kendo-spacing-1, 0.25rem), item-padding-x: var(--kendo-spacing-3, 0.75rem), item-padding-y: var(--kendo-spacing-2, 0.5rem), item-border-radius: var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

