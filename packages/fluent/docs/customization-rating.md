---
title: Customizing Rating
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_rating
position: 9
---

# Customizing Rating

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
    <td>$kendo-rating-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-rating-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-rating-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-rating-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-rating-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-rating-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-rating-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-rating-spacing, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-rating-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The content spacing of the Rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-padding-x, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-rating-item-padding-x, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-rating-item-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-rating-item-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-hover-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-rating-item-hover-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-focus-outline-width, 2px )</code></td>
    <td><code>var(--kendo-rating-item-focus-outline-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-focus-outline-style, solid )</code></td>
    <td><code>var(--kendo-rating-item-focus-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-focus-outline, currentColor )</code></td>
    <td><code>var(--kendo-rating-item-focus-outline, currentColor)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused Rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-rating-item-selected-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-rating-item-selected-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Rating item.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

