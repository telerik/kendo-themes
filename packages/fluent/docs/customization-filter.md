---
title: Customizing Filter
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_filter
position: 9
---

# Customizing Filter

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
    <td>$kendo-filter-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-filter-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-filter-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-filter-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-filter-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-bottom-margin</td>
    <td>String</td>
    <td><code>var( --kendo-filter-bottom-margin, #{k-spacing(7.5)} )</code></td>
    <td><code>var(--kendo-filter-bottom-margin, var(--kendo-spacing-7\.5, 1.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-size</td>
    <td>String</td>
    <td><code>var( --kendo-filter-line-size, 1px )</code></td>
    <td><code>var(--kendo-filter-line-size, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the line that connects the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-operator-dropdown-width</td>
    <td>String</td>
    <td><code>var( --kendo-filter-operator-dropdown-width, 15em )</code></td>
    <td><code>var(--kendo-filter-operator-dropdown-width, 15em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the dropdown elements in the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-text</td>
    <td>String</td>
    <td><code>var( --kendo-filter-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-filter-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-field-text</td>
    <td>String</td>
    <td><code>var( --kendo-filter-preview-field-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-filter-preview-field-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-operator-text</td>
    <td>String</td>
    <td><code>var( --kendo-filter-preview-operator-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-filter-preview-operator-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Filter preview operator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-bg</td>
    <td>String</td>
    <td><code>var( --kendo-filter-line-bg, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-filter-line-bg, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the line that connects the Filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-toolbar-focus-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-filter-toolbar-focus-border-width, 2px )</code></td>
    <td><code>var(--kendo-filter-toolbar-focus-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-toolbar-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-filter-toolbar-focus-border, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-filter-toolbar-focus-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Filter.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

