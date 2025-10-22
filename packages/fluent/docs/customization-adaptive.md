---
title: Customizing Adaptive
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_adaptive
position: 9
---

# Customizing Adaptive

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
    <td>$kendo-adaptive-bg</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-adaptive-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-adaptive-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-border</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-adaptive-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-content-bg</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-content-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-adaptive-content-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Adaptive content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-content-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-content-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-adaptive-content-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-menu-bg</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-menu-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-adaptive-menu-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Adaptive menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-menu-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-menu-text, #{k-color(app-surface)} )</code></td>
    <td><code>var(--kendo-adaptive-menu-text, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-menu-clear-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-menu-clear-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-adaptive-menu-clear-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive menu clear button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-menu-item-border</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-menu-item-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-adaptive-menu-item-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Adaptive menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-menu-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-menu-title-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-adaptive-menu-title-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive menu title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-border-width, 1px )</code></td>
    <td><code>var(--kendo-adaptive-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-adaptive-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-font-size, var( --kendo-font-size, 1rem ) )</code></td>
    <td><code>var(--kendo-adaptive-font-size, var(--kendo-font-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-adaptive-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Adaptive component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-grid-sort-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-grid-sort-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-adaptive-grid-sort-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Adaptive Grid sort indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-scheduler-current-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-scheduler-current-text, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-adaptive-scheduler-current-text, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the current date in the Adaptive Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-scheduler-base-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-scheduler-base-text, inherit )</code></td>
    <td><code>var(--kendo-adaptive-scheduler-base-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the Adaptive Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-scheduler-subtle-text</td>
    <td>String</td>
    <td><code>var( --kendo-adaptive-scheduler-subtle-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-adaptive-scheduler-subtle-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The subtle text color of the Adaptive Scheduler.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

