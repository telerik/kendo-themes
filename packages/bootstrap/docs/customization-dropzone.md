---
title: Customizing Dropzone
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_dropzone
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
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-min-height</td>
    <td>Number</td>
    <td><code>220px</code></td>
    <td><code>220px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( surface ), if( k-is-light( $kendo-component-bg ), $gray-100, $gray-900 ))</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the DropZone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-spacing</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-try-tint( $kendo-dropzone-text, 8 ))</code></td>
    <td><code>var(--kendo-color-subtle, #606970)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered DropZone icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-size</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the DropZone hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-xs, inherit )</code></td>
    <td><code>var(--kendo-font-size-xs, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing below the DropZone note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-text</td>
    <td>String</td>
    <td><code>$kendo-subtle-text</code></td>
    <td><code>var(--kendo-color-subtle, #606970)</code></td>
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

