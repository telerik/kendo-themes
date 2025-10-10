---
title: Customizing Messagebox
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_messagebox
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
    <td>String</td>
    <td><code>var( --kendo-message-box-margin, 0 0 k-spacing(3) 0 )</code></td>
    <td><code>var(--kendo-message-box-margin, 0 0 var(--kendo-spacing-3, 0.75rem) 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin around the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-message-box-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-padding-y, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-message-box-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-border-width, 1px )</code></td>
    <td><code>var(--kendo-message-box-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-border-style, solid )</code></td>
    <td><code>var(--kendo-message-box-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-font-family, var(--kendo-font-family, inherit) )</code></td>
    <td><code>var(--kendo-message-box-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-font-size, var(--kendo-font-size-sm, inherit) )</code></td>
    <td><code>var(--kendo-message-box-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-line-height, var(--kendo-line-height-lg, normal) )</code></td>
    <td><code>var(--kendo-message-box-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-font-style</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-link-font-style, normal )</code></td>
    <td><code>var(--kendo-message-box-link-font-style, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font style of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-decoration</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-link-decoration, underline )</code></td>
    <td><code>var(--kendo-message-box-link-decoration, underline)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text decoration of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-text</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-link-text, k-color(primary) )</code></td>
    <td><code>var(--kendo-message-box-link-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-link-hover-text, k-color(primary-hover) )</code></td>
    <td><code>var(--kendo-message-box-link-hover-text, var(--kendo-color-primary-hover, #115ea3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-messagebox-theme-colors</td>
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
    <td><ul><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li><li>tertiary: var(--kendo-color-tertiary, #c239b3)</li><li>info: var(--kendo-color-info, #3a96dd)</li><li>success: var(--kendo-color-success, #107c10)</li><li>warning: var(--kendo-color-warning, #f7630c)</li><li>error: var(--kendo-color-error, #c50f1f)</li><li>dark: var(--kendo-color-dark, #242424)</li><li>light: var(--kendo-color-light, #ebebeb)</li><li>inverse: var(--kendo-color-dark, #242424)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors of the Messagebox.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

