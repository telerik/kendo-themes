---
title: Customizing Dropzone
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_dropzone
position: 9
---

# Customizing Dropzone

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
    <td>$kendo-dropzone-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-dropzone-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-dropzone-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-border-width, 1px )</code></td>
    <td><code>var(--kendo-dropzone-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-min-height</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-min-height, 220px )</code></td>
    <td><code>var(--kendo-dropzone-min-height, 220px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-dropzone-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-dropzone-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-dropzone-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-bg</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-dropzone-bg, var(--kendo-color-surface, #faf9f8))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-text</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-dropzone-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-dropzone-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-icon-spacing, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-dropzone-icon-spacing, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-icon-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-dropzone-icon-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-icon-hover-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-dropzone-icon-hover-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the icon when the dropzone is hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-hint-font-size, inherit )</code></td>
    <td><code>var(--kendo-dropzone-hint-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-hint-font-weight, var( --kendo-font-weight-bold, bold ) )</code></td>
    <td><code>var(--kendo-dropzone-hint-font-weight, var(--kendo-font-weight-bold, bold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-hint-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-dropzone-hint-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-text</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-hint-text, #{$kendo-dropzone-text} )</code></td>
    <td><code>var(--kendo-dropzone-hint-text, var(--kendo-dropzone-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-note-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-dropzone-note-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-note-font-weight, inherit )</code></td>
    <td><code>var(--kendo-dropzone-note-font-weight, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-note-spacing, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-dropzone-note-spacing, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-text</td>
    <td>String</td>
    <td><code>var( --kendo-dropzone-note-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-dropzone-note-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone note.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

