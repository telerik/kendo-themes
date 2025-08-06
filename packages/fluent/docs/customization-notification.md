---
title: Customizing Notification
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_notification
position: 9
---

# Customizing Notification

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
    <td>$kendo-notification-group-gap</td>
    <td>String</td>
    <td><code>var( --kendo-notification-group-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-notification-group-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row-gap between the elements in the Notification group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary-subtle),
    "secondary": k-color(secondary-subtle),
    "tertiary": k-color(tertiary-subtle),
    "info": k-color(info-subtle),
    "success": k-color(success-subtle),
    "warning": k-color(warning-subtle),
    "error": k-color(error-subtle),
    "dark": k-color(dark),
    "light": k-color(light),
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark))
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary-subtle, #deecf9)</li><li>secondary: var(--kendo-color-secondary-subtle, #faf9f8)</li><li>tertiary: var(--kendo-color-tertiary-subtle, #deecf9)</li><li>info: var(--kendo-color-info-subtle, #cee5ff)</li><li>success: var(--kendo-color-success-subtle, #dff6dd)</li><li>warning: var(--kendo-color-warning-subtle, #fff4ce)</li><li>error: var(--kendo-color-error-subtle, #fde7e9)</li><li>dark: var(--kendo-color-dark, #323130)</li><li>light: var(--kendo-color-light, #d2d0ce)</li><li>inverse: var(--kendo-color-dark, #323130)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Notification variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme</td>
    <td>Map</td>
    <td><code>notification-theme( $kendo-notification-theme-colors )</code></td>
    <td><ul><li>inverse: "color":"var(--kendo-color-on-inverse, #ffffff)","background-color":"var(--kendo-color-dark, #323130)","border":"var(--kendo-color-dark, #323130)"</li><li>light: "color":"var(--kendo-color-on-light, #323130)","background-color":"var(--kendo-color-light, #d2d0ce)","border":"var(--kendo-color-light, #d2d0ce)"</li><li>dark: "color":"var(--kendo-color-on-dark, #ffffff)","background-color":"var(--kendo-color-dark, #323130)","border":"var(--kendo-color-dark, #323130)"</li><li>error: "color":"var(--kendo-color-on-error, #ffffff)","background-color":"var(--kendo-color-error-subtle, #fde7e9)","border":"var(--kendo-color-error-subtle, #fde7e9)"</li><li>warning: "color":"var(--kendo-color-on-warning, #323130)","background-color":"var(--kendo-color-warning-subtle, #fff4ce)","border":"var(--kendo-color-warning-subtle, #fff4ce)"</li><li>success: "color":"var(--kendo-color-on-success, #ffffff)","background-color":"var(--kendo-color-success-subtle, #dff6dd)","border":"var(--kendo-color-success-subtle, #dff6dd)"</li><li>info: "color":"var(--kendo-color-on-info, #ffffff)","background-color":"var(--kendo-color-info-subtle, #cee5ff)","border":"var(--kendo-color-info-subtle, #cee5ff)"</li><li>tertiary: "color":"var(--kendo-color-on-tertiary, #ffffff)","background-color":"var(--kendo-color-tertiary-subtle, #deecf9)","border":"var(--kendo-color-tertiary-subtle, #deecf9)"</li><li>secondary: "color":"var(--kendo-color-on-secondary, #ffffff)","background-color":"var(--kendo-color-secondary-subtle, #faf9f8)","border":"var(--kendo-color-secondary-subtle, #faf9f8)"</li><li>primary: "color":"var(--kendo-color-on-primary, #ffffff)","background-color":"var(--kendo-color-primary-subtle, #deecf9)","border":"var(--kendo-color-primary-subtle, #deecf9)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The generated theme colors map for the Notification.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

