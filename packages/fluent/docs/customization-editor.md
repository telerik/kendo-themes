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
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Еditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-text</td>
    <td></td>
    <td><code>var( --kendo-component-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-text</td>
    <td></td>
    <td><code>var( --kendo-input-placeholder-text, #{$kendo-input-placeholder-text} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Еditor's placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-opacity</td>
    <td></td>
    <td><code>var( --kendo-input-placeholder-opacity, #{$kendo-input-placeholder-opacity} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Editor's placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-content-outline-color</td>
    <td></td>
    <td><code>var( --kendo-body-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-export-tool-icon-margin-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Editor's export tool icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-highlighted-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( primary, true ), .55 ), k-get-theme-color-var( primary-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The highlighted background color of the Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-size</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), $kendo-color-black)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Editor's resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-color</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the Editor's selected node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-td-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Inline Editor data cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-hover-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the Inline Editor.</div></div>
    </td>
</tr>
<tr>
    <td>$ct-cell-size</td>
    <td></td>
    <td><code>20px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the cell in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-text</td>
    <td></td>
    <td><code>var( --kendo-selected-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected cells in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-bg</td>
    <td></td>
    <td><code>var( --kendo-selected-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected cells in the Insert table popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-ct-popup-border</td>
    <td></td>
    <td><code>var( --kendo-selected-border, initial )</code></td>
    <td></td>
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

