---
title: Customizing Otp
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_otp
position: 9
---

# Customizing Otp

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
    <td>$kendo-otp-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        gap: $kendo-otp-sm-gap,
        separator-padding-x: $kendo-otp-sm-separator-padding-x,
        input-width: $kendo-otp-sm-input-width
    ),
    md: (
        gap: $kendo-otp-md-gap,
        separator-padding-x: $kendo-otp-md-separator-padding-x,
        input-width: $kendo-otp-md-input-width
    ),
    lg: (
        gap: $kendo-otp-lg-gap,
        separator-padding-x: $kendo-otp-lg-separator-padding-x,
        input-width: $kendo-otp-lg-input-width
    )
)</code></td>
    <td><ul><li>sm: "gap":"var(--kendo-otp-sm-gap, var(--kendo-spacing-1, 0.25rem))","separator-padding-x":"var(--kendo-otp-sm-separator-padding-x, var(--kendo-otp-sm-gap, var(--kendo-spacing-1, 0.25rem)))","input-width":"var(--kendo-otp-sm-input-width, calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-spacing-0\\.5, 0.125rem) + 1px) * 2 + 1px * 2))"</li><li>md: "gap":"var(--kendo-otp-md-gap, var(--kendo-otp-gap, var(--kendo-spacing-1\\.5, 0.375rem)))","separator-padding-x":"var(--kendo-otp-md-separator-padding-x, var(--kendo-otp-separator-padding-x, var(--kendo-otp-gap, var(--kendo-spacing-1\\.5, 0.375rem))))","input-width":"var(--kendo-otp-md-input-width, var(--kendo-otp-input-width, calc(var(--kendo-input-line-height, var(--kendo-line-height, normal)) * 1em + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + 1px * 2)))"</li><li>lg: "gap":"var(--kendo-otp-lg-gap, var(--kendo-spacing-2, 0.5rem))","separator-padding-x":"var(--kendo-otp-lg-separator-padding-x, var(--kendo-otp-lg-gap, var(--kendo-spacing-2, 0.5rem)))","input-width":"var(--kendo-otp-lg-input-width, calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 1px * 2))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the OTP.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

