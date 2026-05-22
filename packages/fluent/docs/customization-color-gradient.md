---
title: Customizing ColorGradient
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_color-gradient
position: 9
---

# Customizing ColorGradient

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
    <td>$kendo-color-gradient-shadow</td>
    <td>String</td>
    <td><code>k-elevation(2)</code></td>
    <td><code>var(--kendo-elevation-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-border-width, 0)</code></td>
    <td><code>var(--kendo-color-gradient-canvas-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-border, color-mix(in srgb, k-color(border) 16%, transparent))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-border-width, 0)</code></td>
    <td><code>var(--kendo-color-gradient-slider-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-border, color-mix(in srgb, k-color(border) 16%, transparent))</code></td>
    <td><code>var(--kendo-color-gradient-slider-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-offset-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-y, calc( -1 * ( $kendo-color-gradient-draghandle-height / 2 ) ))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-y, calc(-1 * var(--kendo-color-gradient-draghandle-height, 20px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-offset-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-x, calc( -1 * ( $kendo-color-gradient-draghandle-width / 2 ) ))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-x, calc(-1 * var(--kendo-color-gradient-draghandle-width, 20px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-label-font-size, var(--kendo-font-size-sm))</code></td>
    <td><code>var(--kendo-color-gradient-input-label-font-size, var(--kendo-font-size-sm))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-default-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-spacer</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-spacer, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-radius</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-gap</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-family</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-padding-y, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-padding-x, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-width, 236px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-width, 260px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-width, 362px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-gap, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-gap, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-gap, var(--kendo-spacing-4\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-focus-border, color-mix(in srgb, var(--kendo-color-border) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-border-radius</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-canvas-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-canvas-gap, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-height, 184px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the small ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the medium ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the large ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-canvas-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-canvas-gap, var(--kendo-color-gradient-canvas-gap, var(--kendo-spacing-2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the small ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-canvas-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-canvas-gap, var(--kendo-color-gradient-canvas-gap, var(--kendo-spacing-2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the medium ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-canvas-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-canvas-gap, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the large ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-track-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-slider-track-size, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-radius</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-slider-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-draghandle-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient slider drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-vertical-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-slider-vertical-size, var(--kendo-color-gradient-canvas-rectangle-height, 184px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-horizontal-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-slider-horizontal-size, 100%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient horizontal slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-alpha-bgr</td>
    <td>String</td>
    <td><code>"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC"</code></td>
    <td><code>"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background image of the ColorGradient alpha slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-slider-vertical-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-slider-vertical-size, var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-slider-vertical-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-slider-vertical-size, var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-slider-vertical-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-slider-vertical-size, var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-width, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-height, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-border, var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-shadow</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-focus-shadow, var(--kendo-color-border-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-hover-shadow</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-hover-shadow, var(--kendo-color-base-emphasis))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-elevation-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-y, calc(-1 * var(--kendo-color-gradient-draghandle-height, 20px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-draghandle-margin-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-canvas-draghandle-offset-x, calc(-1 * var(--kendo-color-gradient-draghandle-width, 20px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-input-width, 48px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-input-gap, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-gap</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-input-label-gap, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs and their labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-input-label-text, var(--kendo-color-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-input-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-sm-input-width, 43px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-input-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-md-input-width, var(--kendo-color-gradient-input-width, 48px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-input-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-lg-input-width, 68px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-ratio-font-weight</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-gradient-contrast-ratio-font-weight, var(--kendo-font-weight-bold))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the ColorGradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-spacer</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the ColorGradient contrast tool.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        width: $kendo-color-gradient-sm-width,
        vertical-slider-height: $kendo-color-gradient-sm-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-sm-canvas-rectangle-height,
        input-width: $kendo-color-gradient-sm-input-width,
        gap: $kendo-color-gradient-sm-gap,
        canvas-gap: $kendo-color-gradient-sm-canvas-gap,
        padding-x: $kendo-color-gradient-sm-padding-x,
        padding-y: $kendo-color-gradient-sm-padding-y
    ),
    md: (
        width: $kendo-color-gradient-md-width,
        vertical-slider-height: $kendo-color-gradient-md-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-md-canvas-rectangle-height,
        input-width: $kendo-color-gradient-md-input-width,
        gap: $kendo-color-gradient-md-gap,
        canvas-gap: $kendo-color-gradient-md-canvas-gap,
        padding-x: $kendo-color-gradient-md-padding-x,
        padding-y: $kendo-color-gradient-md-padding-y
    ),
    lg: (
        width: $kendo-color-gradient-lg-width,
        vertical-slider-height: $kendo-color-gradient-lg-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-lg-canvas-rectangle-height,
        input-width: $kendo-color-gradient-lg-input-width,
        gap: $kendo-color-gradient-lg-gap,
        canvas-gap: $kendo-color-gradient-lg-canvas-gap,
        padding-x: $kendo-color-gradient-lg-padding-x,
        padding-y: $kendo-color-gradient-lg-padding-y
    )
)</code></td>
    <td><ul><li>sm: "width":"var(--kendo-color-gradient-sm-width, 236px)","vertical-slider-height":"var(--kendo-color-gradient-sm-slider-vertical-size, var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px))","rectangle-height":"var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px)","input-width":"var(--kendo-color-gradient-sm-input-width, 43px)","gap":"var(--kendo-color-gradient-sm-gap, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))","canvas-gap":"var(--kendo-color-gradient-sm-canvas-gap, var(--kendo-color-gradient-canvas-gap, var(--kendo-spacing-2)))","padding-x":"var(--kendo-color-gradient-sm-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 2))","padding-y":"var(--kendo-color-gradient-sm-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))"</li><li>md: "width":"var(--kendo-color-gradient-md-width, 260px)","vertical-slider-height":"var(--kendo-color-gradient-md-slider-vertical-size, var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px)))","rectangle-height":"var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px))","input-width":"var(--kendo-color-gradient-md-input-width, var(--kendo-color-gradient-input-width, 48px))","gap":"var(--kendo-color-gradient-md-gap, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))","canvas-gap":"var(--kendo-color-gradient-md-canvas-gap, var(--kendo-color-gradient-canvas-gap, var(--kendo-spacing-2)))","padding-x":"var(--kendo-color-gradient-md-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)) / 2))","padding-y":"var(--kendo-color-gradient-md-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4)))"</li><li>lg: "width":"var(--kendo-color-gradient-lg-width, 362px)","vertical-slider-height":"var(--kendo-color-gradient-lg-slider-vertical-size, var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px))","rectangle-height":"var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px)","input-width":"var(--kendo-color-gradient-lg-input-width, 68px)","gap":"var(--kendo-color-gradient-lg-gap, var(--kendo-spacing-4\\.5))","canvas-gap":"var(--kendo-color-gradient-lg-canvas-gap, var(--kendo-spacing-4))","padding-x":"var(--kendo-color-gradient-lg-padding-x, var(--kendo-spacing-4))","padding-y":"var(--kendo-color-gradient-lg-padding-y, var(--kendo-spacing-4))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map of the ColorGradient.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

