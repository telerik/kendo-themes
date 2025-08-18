---
title: Customizing Common
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_common
position: 9
---

# Customizing Common

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
    <td>$kendo-card-theme-colors</td>
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
    "inverse": if($kendo-is-dark-theme, k-color(light), k-color(dark))
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li><li>tertiary: var(--kendo-color-tertiary, #c239b3)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>success: var(--kendo-color-success, #107c10)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the card variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "base": $kendo-chip-bg,
    "error": k-color(error),
    "info": k-color(info),
    "warning": k-color(warning),
    "success": k-color(success)
)</code></td>
    <td><ul><li>base: var(--kendo-chip-bg, var(--kendo-color-base-subtle, #f5f5f5))</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>success: var(--kendo-color-success, #107c10)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-1</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-1, none )</code></td>
    <td><code>var(--kendo-elevation-1, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for cards and grid item thumbnails.<br />Equivalent to fluent depth 4.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-2</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-2, none )</code></td>
    <td><code>var(--kendo-elevation-2, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for color gradient drag handle.<br />Equivalent to fluent depth 8.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-3</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-3, none )</code></td>
    <td><code>var(--kendo-elevation-3, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for focus card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-4</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-4, none )</code></td>
    <td><code>var(--kendo-elevation-4, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for panels.<br />Equivalent to fluent depth 16.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-5</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-5, none )</code></td>
    <td><code>var(--kendo-elevation-5, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for floating action button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-6</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-6, none )</code></td>
    <td><code>var(--kendo-elevation-6, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for pop up.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-7</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-7, none )</code></td>
    <td><code>var(--kendo-elevation-7, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-8</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-8, none )</code></td>
    <td><code>var(--kendo-elevation-8, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for dialogs and window.<br />Equivalent to fluent depth 64.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-9</td>
    <td>String</td>
    <td><code>var( --kendo-elevation-8, none )</code></td>
    <td><code>var(--kendo-elevation-8, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b><div class="theme-variables-description">Use the `$kendo-elevation` map instead.</div></div><div><b>Description</b><div class="theme-variables-description">Shadow for focus window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary),
    "light": k-color(light),
    "dark": k-color(dark)
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>dark: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary),
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
    <td><ul><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary-subtle, #f0f0f0)</li><li>tertiary: var(--kendo-color-tertiary-subtle, #fdf5fc)</li><li>info: var(--kendo-color-info-subtle, #f6fafe)</li><li>success: var(--kendo-color-success-subtle, #f1faf1)</li><li>warning: var(--kendo-color-warning-subtle, #fff9f5)</li><li>error: var(--kendo-color-error-subtle, #fdf3f4)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the tooltip variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-h5-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the fifth highest level heading.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-h6-line-height</td>
    <td>Number</td>
    <td><code>32px</code></td>
    <td><code>32px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the sixth highest level heading.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

