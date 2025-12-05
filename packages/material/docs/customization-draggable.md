---
title: Customizing Draggable
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_draggable
position: 9
---

# Customizing Draggable

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
    <td>$kendo-drag-hint-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(4)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-border-radius</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-bg</td>
    <td>String</td>
    <td><code>k-color(base-subtle)</code></td>
    <td><code>var(--kendo-color-base-subtle, #DED8E0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-border</td>
    <td>String</td>
    <td><code>unset</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-shadow</td>
    <td>String</td>
    <td><code>k-elevation(3)</code></td>
    <td><code>var(--kendo-elevation-3, 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-hint-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-arrow-size</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the drop hint arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-arrow-spacing</td>
    <td>Number</td>
    <td><code>math.div( $kendo-drop-hint-arrow-size, 2 )</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the drop hint arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-h-width</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the horizontal drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-h-height</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the horizontal drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-v-width</td>
    <td>Number</td>
    <td><code>$kendo-drop-hint-line-h-height</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the vertical drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-v-height</td>
    <td>Number</td>
    <td><code>$kendo-drop-hint-line-h-width</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the vertical drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #65558F)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

