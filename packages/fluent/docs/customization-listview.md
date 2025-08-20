---
title: Customizing Listview
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_listview
position: 9
---

# Customizing Listview

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
    <td>$kendo-listview-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-listview-padding-x, k-spacing(1) )</code></td>
    <td><code>var(--kendo-listview-padding-x, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-listview-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-listview-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around bordered ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-padding-x, k-spacing(1) )</code></td>
    <td><code>var(--kendo-listview-item-padding-x, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-listview-item-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-listview-font-family, var( --kendo-font-family, initial ) )</code></td>
    <td><code>var(--kendo-listview-font-family, var(--kendo-font-family, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-listview-font-size, var( --kendo-font-size, initial ) )</code></td>
    <td><code>var(--kendo-listview-font-size, var(--kendo-font-size, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-listview-line-height, var( --kendo-line-height, initial ) )</code></td>
    <td><code>var(--kendo-listview-line-height, var(--kendo-line-height, initial))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-text</td>
    <td>String</td>
    <td><code>var( --kendo-listview-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-listview-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-bg</td>
    <td>String</td>
    <td><code>var( --kendo-listview-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-listview-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border</td>
    <td>String</td>
    <td><code>var( --kendo-listview-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-listview-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ListView.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-selected-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-listview-item-selected-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-selected-bg, #{color-mix(in srgb, k-color(on-app-surface) 12%, transparent)} )</code></td>
    <td><code>var(--kendo-listview-item-selected-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 12%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-selected-border, initial )</code></td>
    <td><code>var(--kendo-listview-item-selected-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-focus-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-listview-item-focus-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-focus-bg, initial )</code></td>
    <td><code>var(--kendo-listview-item-focus-bg, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-focus-border, initial )</code></td>
    <td><code>var(--kendo-listview-item-focus-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused ListView items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-listview-item-focus-shadow, var( --kendo-list-item-focus-shadow, $kendo-list-item-focus-shadow ) )</code></td>
    <td><code>var(--kendo-listview-item-focus-shadow, var(--kendo-list-item-focus-shadow, var(--kendo-list-item-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt, #000000))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ListView items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

