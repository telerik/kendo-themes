---
title: Customizing Cologradient
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_cologradient
position: 9
---

# Customizing Cologradient

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
    <td>$kendo-color-gradient-spacer</td>
    <td></td>
    <td><code>k-spacing(4)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-width</td>
    <td></td>
    <td><code>260px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-width</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-y</td>
    <td></td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-padding-x</td>
    <td></td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-spacing</td>
    <td></td>
    <td><code>$kendo-color-gradient-spacer</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-text</td>
    <td></td>
    <td><code>var( --kendo-component-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 10%, transparent), k-get-theme-color-var( neutral-20 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-3, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-width</td>
    <td></td>
    <td><code>0</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-spacing</td>
    <td></td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-height</td>
    <td></td>
    <td><code>180px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 16%, transparent), k-get-theme-color-var( neutral-30 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-track-size</td>
    <td></td>
    <td><code>20px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-width</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, 0, 1px)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 16%, transparent), k-get-theme-color-var( neutral-30 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-vertical-size</td>
    <td></td>
    <td><code>180px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-horizontal-size</td>
    <td></td>
    <td><code>100%</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient horizontal slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-alpha-bgr</td>
    <td></td>
    <td><code>"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC"</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background image of the ColorGradient alpha slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-width</td>
    <td></td>
    <td><code>20px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-height</td>
    <td></td>
    <td><code>20px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-width</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( border ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the focused ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-shadow</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( base-emphasis ), k-get-theme-color-var( neutral-130 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-hover-shadow</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( base-emphasis ), k-get-theme-color-var( neutral-130 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-offset-y</td>
    <td></td>
    <td><code>( -1 * math.div( $kendo-color-gradient-draghandle-height, 2 ) )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-offset-x</td>
    <td></td>
    <td><code>( -1 * math.div( $kendo-color-gradient-draghandle-width, 2 ) )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-width</td>
    <td></td>
    <td><code>48px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-spacing</td>
    <td></td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-spacing</td>
    <td></td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs and their labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-text</td>
    <td></td>
    <td><code>var( --kendo-subtle-text, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-ratio-font-weight</td>
    <td></td>
    <td><code>var( --kendo-font-weight-bold, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the ColorGradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-spacing</td>
    <td></td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 1.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the ColorGradient contrast tool.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

