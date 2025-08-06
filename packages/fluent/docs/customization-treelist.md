---
title: Customizing Treelist
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_treelist
position: 9
---

# Customizing Treelist

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
    <td>$kendo-treelist-footer-row-bg</td>
    <td>String</td>
    <td><code>var( --kendo-treelist-footer-row-bg, $kendo-grid-hover-bg )</code></td>
    <td><code>var(--kendo-treelist-footer-row-bg, var(--kendo-grid-hover-bg, var(--kendo-table-hover-bg, var(--kendo-color-base-hover, #f3f2f1))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TreeList footer row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treelist-footer-row-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-treelist-footer-row-border-width, 1px )</code></td>
    <td><code>var(--kendo-treelist-footer-row-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the TreeList footer row.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

