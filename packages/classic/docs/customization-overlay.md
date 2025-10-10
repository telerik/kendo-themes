---
title: Customizing Overlay
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_overlay
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
    <td><ul><li>primary: var(--kendo-color-primary, #f35800)</li><li>secondary: var(--kendo-color-secondary, #b6b6b6)</li><li>tertiary: var(--kendo-color-tertiary, #03a9f4)</li><li>info: var(--kendo-color-info, #007bc3)</li><li>success: var(--kendo-color-success, #3ea44e)</li><li>warning: var(--kendo-color-warning, #ffa41f)</li><li>error: var(--kendo-color-error, #d92800)</li><li>dark: var(--kendo-color-dark, #404040)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #404040)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-overlay-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-black</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
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

