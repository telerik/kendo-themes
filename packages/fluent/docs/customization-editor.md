---
title: Customizing Editor
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_editor
position: 9
---

# Customizing Editor

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
    <td>$kendo-editor-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-text</td>
    <td>String</td>
    <td><code>var( --kendo-input-placeholder-text, #{$kendo-input-placeholder-text} )</code></td>
    <td><code>var(--kendo-input-placeholder-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Еditor's placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-opacity</td>
    <td>String</td>
    <td><code>var( --kendo-input-placeholder-opacity, #{$kendo-input-placeholder-opacity} )</code></td>
    <td><code>var(--kendo-input-placeholder-opacity, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Editor's placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-content-outline-color</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-export-tool-icon-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Editor's export tool icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-width</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-text</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0078d4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-highlighted-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary) 55%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #0078d4) 55%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The highlighted background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-size</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-color</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0078d4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-td-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Inline Editor data cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-hover-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the Inline Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$ct-cell-size</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cell in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-text</td>
    <td>String</td>
    <td><code>k-color(on-base)</code></td>
    <td><code>var(--kendo-color-on-base, #323130)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected cells in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-bg</td>
    <td>String</td>
    <td><code>k-color(base-active)</code></td>
    <td><code>var(--kendo-color-base-active, #edebe9)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected cells in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border-alt) 76%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border-alt, #323130) 76%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected cells in the Insert table popup.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

