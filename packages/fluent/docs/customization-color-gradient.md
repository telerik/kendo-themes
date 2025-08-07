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
    <td>$kendo-color-gradient-spacer</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-spacer, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacer of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-width, 260px)</code></td>
    <td><code>var(--kendo-color-gradient-width, 260px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-border-width, 2px)</code></td>
    <td><code>var(--kendo-color-gradient-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border-radius</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-border-radius, k-border-radius(md))</code></td>
    <td><code>var(--kendo-color-gradient-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-spacing, $kendo-color-gradient-spacer)</code></td>
    <td><code>var(--kendo-color-gradient-spacing, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-family</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-font-family, var( --kendo-font-family, inherit ))</code></td>
    <td><code>var(--kendo-color-gradient-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-font-size, var( --kendo-font-size, inherit ))</code></td>
    <td><code>var(--kendo-color-gradient-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-line-height, var( --kendo-line-height, normal ))</code></td>
    <td><code>var(--kendo-color-gradient-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-text</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-text, k-color(on-app-surface))</code></td>
    <td><code>var(--kendo-color-gradient-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-bg</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-bg, k-color(surface-alt))</code></td>
    <td><code>var(--kendo-color-gradient-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-border, color-mix(in srgb, k-color(border) 16%, transparent))</code></td>
    <td><code>var(--kendo-color-gradient-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-2, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-padding-y, $kendo-color-gradient-spacer)</code></td>
    <td><code>var(--kendo-color-gradient-sm-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-padding-x, calc( #{$kendo-color-gradient-spacer} / 2 ))</code></td>
    <td><code>var(--kendo-color-gradient-sm-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-padding-y, $kendo-color-gradient-spacer)</code></td>
    <td><code>var(--kendo-color-gradient-md-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-padding-x, calc( #{$kendo-color-gradient-spacer} / 2 ))</code></td>
    <td><code>var(--kendo-color-gradient-md-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-padding-y</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-padding-y, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-gradient-lg-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-padding-x</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-padding-x, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-gradient-lg-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-width, 236px)</code></td>
    <td><code>var(--kendo-color-gradient-sm-width, 236px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-width, $kendo-color-gradient-width)</code></td>
    <td><code>var(--kendo-color-gradient-md-width, var(--kendo-color-gradient-width, 260px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-width, 362px)</code></td>
    <td><code>var(--kendo-color-gradient-lg-width, 362px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-spacing, $kendo-color-gradient-spacing)</code></td>
    <td><code>var(--kendo-color-gradient-sm-spacing, var(--kendo-color-gradient-spacing, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the small ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-spacing, $kendo-color-gradient-spacing)</code></td>
    <td><code>var(--kendo-color-gradient-md-spacing, var(--kendo-color-gradient-spacing, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the medium ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-spacing, k-spacing(4.5))</code></td>
    <td><code>var(--kendo-color-gradient-lg-spacing, var(--kendo-spacing-4\.5, 1.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the sections of the large ColorGradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-focus-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-focus-border, color-mix(in srgb, k-color(border) 10%, transparent))</code></td>
    <td><code>var(--kendo-color-gradient-focus-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ColorGradient.</div></div>
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
    <td>$kendo-color-gradient-canvas-border-radius</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-border-radius, k-border-radius(md))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-spacing, k-spacing(2))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-height, 184px)</code></td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-height, 184px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px)</code></td>
    <td><code>var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the small ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-canvas-rectangle-height, $kendo-color-gradient-canvas-rectangle-height)</code></td>
    <td><code>var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the medium ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-canvas-rectangle-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px)</code></td>
    <td><code>var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height the large ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-canvas-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-canvas-spacing, $kendo-color-gradient-canvas-spacing)</code></td>
    <td><code>var(--kendo-color-gradient-sm-canvas-spacing, var(--kendo-color-gradient-canvas-spacing, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the small ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-canvas-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-canvas-spacing, $kendo-color-gradient-canvas-spacing)</code></td>
    <td><code>var(--kendo-color-gradient-md-canvas-spacing, var(--kendo-color-gradient-canvas-spacing, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the medium ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-canvas-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-canvas-spacing, k-spacing(4))</code></td>
    <td><code>var(--kendo-color-gradient-lg-canvas-spacing, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the large ColorGradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-canvas-rectangle-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-border, color-mix(in srgb, k-color(border) 16%, transparent))</code></td>
    <td><code>var(--kendo-color-gradient-canvas-rectangle-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ColorGradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-track-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-track-size, 20px)</code></td>
    <td><code>var(--kendo-color-gradient-slider-track-size, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-border-radius</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-border-radius, k-border-radius(md))</code></td>
    <td><code>var(--kendo-color-gradient-slider-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the ColorGradient slider.</div></div>
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
    <td><code>var(--kendo-color-gradient-slider-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-vertical-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-vertical-size, $kendo-color-gradient-canvas-rectangle-height)</code></td>
    <td><code>var(--kendo-color-gradient-slider-vertical-size, var(--kendo-color-gradient-canvas-rectangle-height, 184px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-slider-horizontal-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-slider-horizontal-size, 100%)</code></td>
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
    <td><code>var(--kendo-color-gradient-sm-slider-vertical-size, $kendo-color-gradient-sm-canvas-rectangle-height)</code></td>
    <td><code>var(--kendo-color-gradient-sm-slider-vertical-size, var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-slider-vertical-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-slider-vertical-size, $kendo-color-gradient-md-canvas-rectangle-height)</code></td>
    <td><code>var(--kendo-color-gradient-md-slider-vertical-size, var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the medium ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-slider-vertical-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-slider-vertical-size, $kendo-color-gradient-lg-canvas-rectangle-height)</code></td>
    <td><code>var(--kendo-color-gradient-lg-slider-vertical-size, var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large ColorGradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-width, 20px)</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-width, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-height</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-height, 20px)</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-height, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-border-width, 2px)</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-outline-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-outline-width, 1px)</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-border, k-color(app-surface))</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-border, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-2, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-focus-border, k-color(app-surface))</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-focus-border, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the focused ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-focus-shadow</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-focus-shadow, k-color(base-emphasis))</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-focus-shadow, var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus color of the outline around the ColorGradient canvas drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-draghandle-hover-shadow</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-draghandle-hover-shadow, k-color(base-emphasis))</code></td>
    <td><code>var(--kendo-color-gradient-draghandle-hover-shadow, var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the outline around the ColorGradient canvas drag handle.</div></div>
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
    <td>$kendo-color-gradient-input-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-width, 48px)</code></td>
    <td><code>var(--kendo-color-gradient-input-width, 48px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-spacing, calc( #{$kendo-color-gradient-spacer} / 4 ))</code></td>
    <td><code>var(--kendo-color-gradient-input-spacing, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-label-font-size, var( --kendo-font-size-sm, inherit ))</code></td>
    <td><code>var(--kendo-color-gradient-input-label-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-label-spacing, calc( #{$kendo-color-gradient-spacer} / 4 ))</code></td>
    <td><code>var(--kendo-color-gradient-input-label-spacing, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the ColorGradient inputs and their labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-input-label-text</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-input-label-text, k-color(subtle))</code></td>
    <td><code>var(--kendo-color-gradient-input-label-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ColorGradient input labels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-sm-input-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-sm-input-width, 43px)</code></td>
    <td><code>var(--kendo-color-gradient-sm-input-width, 43px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-md-input-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-md-input-width, $kendo-color-gradient-input-width)</code></td>
    <td><code>var(--kendo-color-gradient-md-input-width, var(--kendo-color-gradient-input-width, 48px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-lg-input-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-lg-input-width, 68px)</code></td>
    <td><code>var(--kendo-color-gradient-lg-input-width, 68px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large ColorGradient input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-ratio-font-weight</td>
    <td>String</td>
    <td><code>var(--kendo-color-gradient-contrast-ratio-font-weight, var( --kendo-font-weight-bold, normal ))</code></td>
    <td><code>var(--kendo-color-gradient-contrast-ratio-font-weight, var(--kendo-font-weight-bold, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the ColorGradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-gradient-contrast-spacing</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-color-gradient-spacer} / 1.5 )</code></td>
    <td><code>calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 1.5)</code></td>
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
        gap: $kendo-color-gradient-sm-spacing,
        canvas-gap: $kendo-color-gradient-sm-canvas-spacing,
        padding-x: $kendo-color-gradient-sm-padding-x,
        padding-y: $kendo-color-gradient-sm-padding-y
    ),
    md: (
        width: $kendo-color-gradient-md-width,
        vertical-slider-height: $kendo-color-gradient-md-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-md-canvas-rectangle-height,
        input-width: $kendo-color-gradient-md-input-width,
        gap: $kendo-color-gradient-md-spacing,
        canvas-gap: $kendo-color-gradient-md-canvas-spacing,
        padding-x: $kendo-color-gradient-md-padding-x,
        padding-y: $kendo-color-gradient-md-padding-y
    ),
    lg: (
        width: $kendo-color-gradient-lg-width,
        vertical-slider-height: $kendo-color-gradient-lg-slider-vertical-size,
        rectangle-height: $kendo-color-gradient-lg-canvas-rectangle-height,
        input-width: $kendo-color-gradient-lg-input-width,
        gap: $kendo-color-gradient-lg-spacing,
        canvas-gap: $kendo-color-gradient-lg-canvas-spacing,
        padding-x: $kendo-color-gradient-lg-padding-x,
        padding-y: $kendo-color-gradient-lg-padding-y
    )
)</code></td>
    <td><ul><li>sm: "width":"var(--kendo-color-gradient-sm-width, 236px)","vertical-slider-height":"var(--kendo-color-gradient-sm-slider-vertical-size, var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px))","rectangle-height":"var(--kendo-color-gradient-sm-canvas-rectangle-height, 160px)","input-width":"var(--kendo-color-gradient-sm-input-width, 43px)","gap":"var(--kendo-color-gradient-sm-spacing, var(--kendo-color-gradient-spacing, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem))))","canvas-gap":"var(--kendo-color-gradient-sm-canvas-spacing, var(--kendo-color-gradient-canvas-spacing, var(--kendo-spacing-2, 0.5rem)))","padding-x":"var(--kendo-color-gradient-sm-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 2))","padding-y":"var(--kendo-color-gradient-sm-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)))"</li><li>md: "width":"var(--kendo-color-gradient-md-width, var(--kendo-color-gradient-width, 260px))","vertical-slider-height":"var(--kendo-color-gradient-md-slider-vertical-size, var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px)))","rectangle-height":"var(--kendo-color-gradient-md-canvas-rectangle-height, var(--kendo-color-gradient-canvas-rectangle-height, 184px))","input-width":"var(--kendo-color-gradient-md-input-width, var(--kendo-color-gradient-input-width, 48px))","gap":"var(--kendo-color-gradient-md-spacing, var(--kendo-color-gradient-spacing, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem))))","canvas-gap":"var(--kendo-color-gradient-md-canvas-spacing, var(--kendo-color-gradient-canvas-spacing, var(--kendo-spacing-2, 0.5rem)))","padding-x":"var(--kendo-color-gradient-md-padding-x, calc(var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)) / 2))","padding-y":"var(--kendo-color-gradient-md-padding-y, var(--kendo-color-gradient-spacer, var(--kendo-spacing-4, 1rem)))"</li><li>lg: "width":"var(--kendo-color-gradient-lg-width, 362px)","vertical-slider-height":"var(--kendo-color-gradient-lg-slider-vertical-size, var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px))","rectangle-height":"var(--kendo-color-gradient-lg-canvas-rectangle-height, 254px)","input-width":"var(--kendo-color-gradient-lg-input-width, 68px)","gap":"var(--kendo-color-gradient-lg-spacing, var(--kendo-spacing-4\\.5, 1.125rem))","canvas-gap":"var(--kendo-color-gradient-lg-canvas-spacing, var(--kendo-spacing-4, 1rem))","padding-x":"var(--kendo-color-gradient-lg-padding-x, var(--kendo-spacing-4, 1rem))","padding-y":"var(--kendo-color-gradient-lg-padding-y, var(--kendo-spacing-4, 1rem))"</li></ul></td>
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

