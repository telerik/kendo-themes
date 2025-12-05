---
title: Customizing Messagebox
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_messagebox
position: 9
---

# Customizing Messagebox

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
    <td>$kendo-message-box-margin</td>
    <td>List</td>
    <td><code>0 0 k-spacing(4) 0</code></td>
    <td><code>(0 0 var(--kendo-spacing-4, 1rem) 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-width</td>
    <td>List</td>
    <td><code>0 0 0 4px</code></td>
    <td><code>(0 0 0 4px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-bg-level</td>
    <td>Number</td>
    <td><code>-10</code></td>
    <td><code>-10</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color level of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-text-level</td>
    <td>Number</td>
    <td><code>6</code></td>
    <td><code>6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color level of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-level</td>
    <td>Number</td>
    <td><code>-9</code></td>
    <td><code>-9</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color level of the MessageBox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-font-style</td>
    <td>String</td>
    <td><code>normal</code></td>
    <td><code>normal</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the MessageBox link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-text-decoration</td>
    <td>String</td>
    <td><code>underline</code></td>
    <td><code>underline</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text decoration of the MessageBox link.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-theme-colors</td>
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
    <td><ul><li>primary: var(--kendo-color-primary, #0d6efd)</li><li>secondary: var(--kendo-color-secondary, #6c757d)</li><li>tertiary: var(--kendo-color-tertiary, #6f42c1)</li><li>info: var(--kendo-color-info, #0dcaf0)</li><li>success: var(--kendo-color-success, #198754)</li><li>warning: var(--kendo-color-warning, #ffc107)</li><li>error: var(--kendo-color-error, #dc3545)</li><li>dark: var(--kendo-color-dark, #212529)</li><li>light: var(--kendo-color-light, #f8f9fa)</li><li>inverse: var(--kendo-color-dark, #212529)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the MessageBox.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

