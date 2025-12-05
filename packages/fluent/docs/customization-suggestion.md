---
title: Customizing Suggestion
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_suggestion
position: 9
---

# Customizing Suggestion

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
    <td>$kendo-suggestion-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-suggestion-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Suggestion wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-suggestion-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Suggestion wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-suggestion-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Suggestion wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-border-width, 1px )</code></td>
    <td><code>var(--kendo-suggestion-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-border-style, solid )</code></td>
    <td><code>var(--kendo-suggestion-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-suggestion-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-border-radius, #{k-border-radius(xxl)} )</code></td>
    <td><code>var(--kendo-suggestion-border-radius, var(--kendo-border-radius-xxl, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-bg</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-bg, #{k-color(base-subtle)} )</code></td>
    <td><code>var(--kendo-suggestion-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-text</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-text, #{k-color(base-on-subtle)} )</code></td>
    <td><code>var(--kendo-suggestion-text, var(--kendo-color-base-on-subtle, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-border</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-border, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-suggestion-border, var(--kendo-color-base-emphasis, #d1d1d1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-hover-bg, #{k-color(base-subtle-hover)} )</code></td>
    <td><code>var(--kendo-suggestion-hover-bg, var(--kendo-color-base-subtle-hover, #ebebeb))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-hover-text, #{k-color(base-on-subtle)} )</code></td>
    <td><code>var(--kendo-suggestion-hover-text, var(--kendo-color-base-on-subtle, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-hover-border, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-suggestion-hover-border, var(--kendo-color-base-emphasis, #d1d1d1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-active-bg, #{k-color(base-subtle-active)} )</code></td>
    <td><code>var(--kendo-suggestion-active-bg, var(--kendo-color-base-subtle-active, #e0e0e0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-active-text, #{k-color(base-on-subtle)} )</code></td>
    <td><code>var(--kendo-suggestion-active-text, var(--kendo-color-base-on-subtle, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-active-border</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-active-border, #{k-color(base-emphasis)} )</code></td>
    <td><code>var(--kendo-suggestion-active-border, var(--kendo-color-base-emphasis, #d1d1d1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-focus-shadow-blur</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-focus-shadow-blur, 0 )</code></td>
    <td><code>var(--kendo-suggestion-focus-shadow-blur, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow blur of the focused Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-focus-shadow-spread</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-focus-shadow-spread, 1px )</code></td>
    <td><code>var(--kendo-suggestion-focus-shadow-spread, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow spread of the focused Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-focus-shadow-color</td>
    <td>String</td>
    <td><code>var( --kendo-suggestion-focus-shadow-color, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-suggestion-focus-shadow-color, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow color of the focused Suggestion.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-suggestion-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-color(primary),
    "secondary": k-color(secondary)
)</code></td>
    <td><ul><li>primary: var(--kendo-color-primary, #0f6cbd)</li><li>secondary: var(--kendo-color-secondary, #ebebeb)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map of the Suggestion.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

