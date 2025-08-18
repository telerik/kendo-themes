---
title: Customizing Panel
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_panel
position: 9
---

# Customizing Panel

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
    <td>$kendo-panel-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-panel-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-panel-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-panel-border-width, 1px )</code></td>
    <td><code>var(--kendo-panel-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-border-style</td>
    <td>String</td>
    <td><code>var( --kendo-panel-border-style, solid )</code></td>
    <td><code>var(--kendo-panel-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The style of the border around the Panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-header-padding-inline</td>
    <td>String</td>
    <td><code>var( --kendo-panel-header-padding-inline, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-panel-header-padding-inline, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline padding of the Panel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-header-padding-block</td>
    <td>String</td>
    <td><code>var( --kendo-panel-header-padding-block, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-panel-header-padding-block, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block padding of the Panel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-content-padding-inline</td>
    <td>String</td>
    <td><code>var( --kendo-panel-content-padding-inline, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-panel-content-padding-inline, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline padding of the Panel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-content-padding-block</td>
    <td>String</td>
    <td><code>var( --kendo-panel-content-padding-block, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-panel-content-padding-block, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block padding of the Panel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-text</td>
    <td>String</td>
    <td><code>var( --kendo-panel-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-panel-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-bg</td>
    <td>String</td>
    <td><code>var( --kendo-panel-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-panel-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panel-border</td>
    <td>String</td>
    <td><code>var( --kendo-panel-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-panel-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the Panel.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

