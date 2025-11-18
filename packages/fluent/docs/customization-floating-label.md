---
title: Customizing FloatingLabel
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_floating-label
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
    <td>String</td>
    <td><code>var(--kendo-floating-label-scale, 1)</code></td>
    <td><code>var(--kendo-floating-label-scale, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-font-size, var( --kendo-font-size, inherit ))</code></td>
    <td><code>var(--kendo-floating-label-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-max-width</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-max-width, 90%)</code></td>
    <td><code>var(--kendo-floating-label-max-width, 90%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-line-height, var( --kendo-line-height, normal ))</code></td>
    <td><code>var(--kendo-floating-label-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-line-height} * #{$kendo-floating-label-font-size} )</code></td>
    <td><code>calc(var(--kendo-floating-label-line-height, var(--kendo-line-height, normal)) * var(--kendo-floating-label-font-size, var(--kendo-font-size, inherit)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-input-md-padding-x} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-input-padding-x, var(--kendo-spacing-2\.5, 0.625rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-floating-label-height} + #{$kendo-input-border-width} + #{$kendo-input-md-padding-y} )</code></td>
    <td><code>calc(calc(var(--kendo-floating-label-line-height, var(--kendo-line-height, normal)) * var(--kendo-floating-label-font-size, var(--kendo-font-size, inherit))) + 1px + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-scale</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-focus-scale, 1)</code></td>
    <td><code>var(--kendo-floating-label-focus-scale, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transformation scale of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-x</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-focus-offset-x, 0)</code></td>
    <td><code>var(--kendo-floating-label-focus-offset-x, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-y</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-focus-offset-y, 0)</code></td>
    <td><code>var(--kendo-floating-label-focus-offset-y, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-transition</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-transition, k-transition(scale-in))</code></td>
    <td><code>var(--kendo-floating-label-transition, var(--kendo-transition-scale-in))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-bg</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-bg, inherit)</code></td>
    <td><code>var(--kendo-floating-label-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-text</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-text, inherit)</code></td>
    <td><code>var(--kendo-floating-label-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-bg</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-focus-bg, inherit)</code></td>
    <td><code>var(--kendo-floating-label-focus-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-text</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-focus-text, inherit)</code></td>
    <td><code>var(--kendo-floating-label-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Floating Label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-invalid-text</td>
    <td>String</td>
    <td><code>var(--kendo-floating-label-invalid-text, #{k-color(error-on-surface)})</code></td>
    <td><code>var(--kendo-floating-label-invalid-text, var(--kendo-color-error-on-surface, #c50f1f))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the Floating Label.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

