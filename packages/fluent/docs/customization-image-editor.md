---
title: Customizing ImageEditor
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_image-editor
position: 9
---

# Customizing ImageEditor

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
    <td>$kendo-image-editor-resize-top-offset</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-resize-top-offset, calc( #{$kendo-image-editor-resize-handle-size} / 2 ) )</code></td>
    <td><code>var(--kendo-image-editor-resize-top-offset, calc(var(--kendo-image-editor-resize-handle-size, var(--kendo-spacing-4)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle top offset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-left-offset</td>
    <td>String</td>
    <td><code>var( --kendo-image-editor-resize-left-offset, calc( #{$kendo-image-editor-resize-handle-size} / 2 ) )</code></td>
    <td><code>var(--kendo-image-editor-resize-left-offset, calc(var(--kendo-image-editor-resize-handle-size, var(--kendo-spacing-4)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle left offset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-margin-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-margin-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-margin-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-padding-y, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-padding-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border-radius</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-border-radius, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-font-family</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border-width</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-y, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-padding-x, var(--kendo-spacing-3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-width, calc(270px + 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor crop area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-border-style</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-border-style, dashed)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the ImageEditor crop area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-handle-margin-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-resize-handle-margin-x, var(--kendo-spacing-1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ImageEditor resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-handle-margin-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-resize-handle-margin-y, var(--kendo-spacing-1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ImageEditor resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-handle-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-resize-handle-border-width, 0 2px 2px 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ImageEditor resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-resize-handle-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-resize-handle-size, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the ImageEditor resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-content-bg, color-mix(in srgb, var(--kendo-color-on-app-surface) 23%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-content-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-content-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-content-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-action-pane-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-action-pane-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor action pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor crop area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ImageEditor crop area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-border, var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ImageEditor crop area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-image-editor-crop-overlay-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-image-editor-crop-overlay-bg, rgba(0, 0, 0, 0.3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ImageEditor crop overlay.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

