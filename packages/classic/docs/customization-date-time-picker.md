---
title: Customizing DateTimePicker
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_date-time-picker
position: 9
---

# Customizing DateTimePicker

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
    <td>$kendo-datetime-width</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-calendar-cell-size} * 8 ) + calc( #{$kendo-infinite-calendar-view-padding-x} * 2 ))</code></td>
    <td><code>calc(32px * 8 + var(--kendo-spacing-4, 1rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the DateTimePicker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-datetime-sm-width</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-calendar-sm-cell-size} * 8 ) + calc( #{$kendo-infinite-calendar-view-padding-x} * 2 ))</code></td>
    <td><code>calc(28px * 8 + var(--kendo-spacing-4, 1rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small DateTimePicker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-datetime-md-width</td>
    <td>Calculation</td>
    <td><code>$kendo-datetime-width</code></td>
    <td><code>calc(32px * 8 + var(--kendo-spacing-4, 1rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium DateTimePicker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-datetime-lg-width</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-calendar-lg-cell-size} * 8 ) + calc( #{$kendo-infinite-calendar-view-padding-x} * 2 ))</code></td>
    <td><code>calc(40px * 8 + var(--kendo-spacing-4, 1rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large DateTimePicker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-datetime-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        width: $kendo-datetime-sm-width
    ),
    md: (
        width: $kendo-datetime-md-width
    ),
    lg: (
        width: $kendo-datetime-lg-width
    )
)</code></td>
    <td><ul><li>sm: "width":"calc(28px * 8 + var(--kendo-spacing-4, 1rem) * 2)"</li><li>md: "width":"calc(32px * 8 + var(--kendo-spacing-4, 1rem) * 2)"</li><li>lg: "width":"calc(40px * 8 + var(--kendo-spacing-4, 1rem) * 2)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the DateTimePicker.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

