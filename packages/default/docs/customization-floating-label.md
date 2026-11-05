---
title: Customizing FloatingLabel
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_floating-label
position: 9
---

# Customizing FloatingLabel

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
    <td>$kendo-floating-label-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-size</td>
    <td>String</td>
    <td><code>$kendo-input-md-font-size</code></td>
    <td><code>var(--kendo-font-size)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-max-width</td>
    <td>Number</td>
    <td><code>90%</code></td>
    <td><code>90%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-line-height</td>
    <td>String</td>
    <td><code>$kendo-input-md-line-height</code></td>
    <td><code>var(--kendo-line-height)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-line-height} * #{$kendo-floating-label-font-size} )</code></td>
    <td><code>calc(var(--kendo-line-height) * var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-md-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-spacing-2) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-height} + #{$kendo-input-border-width} + #{$kendo-input-md-padding-y} )</code></td>
    <td><code>calc(calc(var(--kendo-line-height) * var(--kendo-font-size)) + 1px + var(--kendo-spacing-1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sm-font-size</td>
    <td>String</td>
    <td><code>$kendo-input-sm-font-size</code></td>
    <td><code>var(--kendo-font-size)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-lg-font-size</td>
    <td>String</td>
    <td><code>$kendo-input-lg-font-size</code></td>
    <td><code>var(--kendo-font-size-lg)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sm-line-height</td>
    <td>String</td>
    <td><code>$kendo-input-sm-line-height</code></td>
    <td><code>var(--kendo-line-height)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-lg-line-height</td>
    <td>String</td>
    <td><code>$kendo-input-lg-line-height</code></td>
    <td><code>var(--kendo-line-height-lg)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sm-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-sm-line-height} * #{$kendo-floating-label-sm-font-size} )</code></td>
    <td><code>calc(var(--kendo-line-height) * var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the small Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-lg-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-lg-line-height} * #{$kendo-floating-label-lg-font-size} )</code></td>
    <td><code>calc(var(--kendo-line-height-lg) * var(--kendo-font-size-lg))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the large Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sm-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-sm-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-spacing-2) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the small Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-lg-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-lg-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-spacing-2) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the large Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sm-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-sm-height} + #{$kendo-input-border-width} + #{$kendo-input-sm-padding-y} )</code></td>
    <td><code>calc(calc(var(--kendo-line-height) * var(--kendo-font-size)) + 1px + var(--kendo-spacing-0\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the small Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-lg-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-lg-height} + #{$kendo-input-border-width} + #{$kendo-input-lg-padding-y} )</code></td>
    <td><code>calc(calc(var(--kendo-line-height-lg) * var(--kendo-font-size-lg)) + 1px + var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the large Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-scale</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-transition</td>
    <td>String</td>
    <td><code>k-transition(scale-in)</code></td>
    <td><code>var(--kendo-transition-scale-in)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-floating-label-sm-font-size,
        line-height: $kendo-floating-label-sm-line-height,
        height: $kendo-floating-label-sm-height,
        offset-x: $kendo-floating-label-sm-offset-x,
        offset-y: $kendo-floating-label-sm-offset-y
    ),
    md: (
        font-size: $kendo-floating-label-font-size,
        line-height: $kendo-floating-label-line-height,
        height: $kendo-floating-label-height,
        offset-x: $kendo-floating-label-offset-x,
        offset-y: $kendo-floating-label-offset-y
    ),
    lg: (
        font-size: $kendo-floating-label-lg-font-size,
        line-height: $kendo-floating-label-lg-line-height,
        height: $kendo-floating-label-lg-height,
        offset-x: $kendo-floating-label-lg-offset-x,
        offset-y: $kendo-floating-label-lg-offset-y
    )
)</code></td>
    <td><ul><li>sm: "font-size":"var(--kendo-font-size)","line-height":"var(--kendo-line-height)","height":"calc(var(--kendo-line-height) * var(--kendo-font-size))","offset-x":"calc(var(--kendo-spacing-2) + 1px)","offset-y":"calc(calc(var(--kendo-line-height) * var(--kendo-font-size)) + 1px + var(--kendo-spacing-0\\.5))"</li><li>md: "font-size":"var(--kendo-font-size)","line-height":"var(--kendo-line-height)","height":"calc(var(--kendo-line-height) * var(--kendo-font-size))","offset-x":"calc(var(--kendo-spacing-2) + 1px)","offset-y":"calc(calc(var(--kendo-line-height) * var(--kendo-font-size)) + 1px + var(--kendo-spacing-1))"</li><li>lg: "font-size":"var(--kendo-font-size-lg)","line-height":"var(--kendo-line-height-lg)","height":"calc(var(--kendo-line-height-lg) * var(--kendo-font-size-lg))","offset-x":"calc(var(--kendo-spacing-2) + 1px)","offset-y":"calc(calc(var(--kendo-line-height-lg) * var(--kendo-font-size-lg)) + 1px + var(--kendo-spacing-2))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the Floating Label. Picked up automatically based on the size of the nested input/picker.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

