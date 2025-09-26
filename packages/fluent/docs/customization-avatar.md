---
title: Customizing Avatar
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_avatar
position: 9
---

# Customizing Avatar

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
    <td>$kendo-avatar-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-avatar-border-width, 1px )</code></td>
    <td><code>var(--kendo-avatar-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-avatar-border-radius, k-border-radius(full) )</code></td>
    <td><code>var(--kendo-avatar-border-radius, var(--kendo-border-radius-full, 9999px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-avatar-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-avatar-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-avatar-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-avatar-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-avatar-line-height, var( --kendo-line-height, inherit ) )</code></td>
    <td><code>var(--kendo-avatar-line-height, var(--kendo-line-height, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-spacing(4),
    md: k-spacing(8),
    lg: k-spacing(16)
)</code></td>
    <td><ul><li>sm: var(--kendo-spacing-4, 1rem)</li><li>md: var(--kendo-spacing-8, 2rem)</li><li>lg: var(--kendo-spacing-16, 4rem)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "base": k-color(base),
    "primary": k-color(primary),
    "secondary": k-color(secondary),
    "tertiary": k-color(tertiary),
    "info": k-color(info),
    "success": k-color(success),
    "warning": k-color(warning),
    "error": k-color(error),
    "dark": k-color(dark),
    "light": k-color(light),
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark))
)</code></td>
    <td><ul><li>base: var(--kendo-color-base, #ffffff)</li><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li><li>tertiary: var(--kendo-color-tertiary, #c239b3)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>success: var(--kendo-color-success, #107c10)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Avatar variations.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

