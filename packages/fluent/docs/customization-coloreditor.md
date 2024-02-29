---
title: Customizing Coloreditor
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_coloreditor
position: 9
---

# Customizing Coloreditor

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
    <td>$kendo-color-editor-spacer</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-min-width</td>
    <td></td>
    <td><code>260px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-text</td>
    <td></td>
    <td><code>var( --kendo-component-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 10%, transparent), k-get-theme-color-var( neutral-20 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-focus-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-3, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorEditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-y</td>
    <td></td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-padding-x</td>
    <td></td>
    <td><code>$kendo-color-editor-header-padding-y</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-header-actions-spacing</td>
    <td></td>
    <td><code>math.div( $kendo-color-editor-spacer, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorEditor header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-width</td>
    <td></td>
    <td><code>34px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-preview-height</td>
    <td></td>
    <td><code>14px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-preview-spacing</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the colors in the ColorEditor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-y</td>
    <td></td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-padding-x</td>
    <td></td>
    <td><code>$kendo-color-editor-views-padding-y</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-views-spacing</td>
    <td></td>
    <td><code>$kendo-color-editor-spacer</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the ColorEditor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-footer-padding-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorEditor footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-footer-padding-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorEditor footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-color</td>
    <td></td>
    <td><code>rgba(0, 0, 0, 0.3)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-editor-color-gradient-focus-outline-offset</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused ColorGradient.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

