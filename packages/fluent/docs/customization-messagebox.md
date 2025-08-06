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
    <td><code>var( --kendo-message-box-padding-y, k-spacing(2) )</code></td>
    <td><code>var(--kendo-message-box-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-border-width, 0 )</code></td>
    <td><code>var(--kendo-message-box-border-width, 0)</code></td>
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
    <td><code>var( --kendo-message-box-line-height, var(--kendo-line-height-sm, normal) )</code></td>
    <td><code>var(--kendo-message-box-line-height, var(--kendo-line-height-sm, normal))</code></td>
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
    <td><code>var(--kendo-message-box-link-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-message-box-link-hover-text, k-color(primary-hover) )</code></td>
    <td><code>var(--kendo-message-box-link-hover-text, var(--kendo-color-primary-hover, #106ebe))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the message box links.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

