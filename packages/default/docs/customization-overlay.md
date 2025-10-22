---
title: Customizing Overlay
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_overlay
position: 9
---

# Customizing Overlay

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
    <td>$kendo-overlay-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary),
    "secondary": k-color(secondary),
    "tertiary": k-color(tertiary),
    "info": k-color(info),
    "success": k-color(success),
    "warning": k-color(warning),
    "error": k-color(error),
    "dark": k-color(dark),
    "light": k-color(light),
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark)),
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary, #ff6358)</li><li>secondary: var(--kendo-color-secondary, #666666)</li><li>tertiary: var(--kendo-color-tertiary, #03a9f4)</li><li>info: var(--kendo-color-info, #0058e9)</li><li>success: var(--kendo-color-success, #37b400)</li><li>warning: var(--kendo-color-warning, #ffc000)</li><li>error: var(--kendo-color-error, #f31700)</li><li>dark: var(--kendo-color-dark, #3d3d3d)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #3d3d3d)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-overlay-bg</td>
    <td>String</td>
    <td><code>k-color(inverse)</code></td>
    <td><code>var(--kendo-color-inverse, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-overlay-opacity</td>
    <td>Number</td>
    <td><code>.5</code></td>
    <td><code>0.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Overlay.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

