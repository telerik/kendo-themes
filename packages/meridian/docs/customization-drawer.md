---
title: Customizing Drawer
description: "Refer to the list of the Kendo UI Meridian theme variables available for customization."
slug: variables_kendothememeridian_drawer
position: 9
---

# Customizing Drawer

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
    <td>$kendo-drawer-bg</td>
    <td>String</td>
    <td><code>k-translucency-bg(k-elevation-bg(1, k-color(surface-alt)))</code></td>
    <td><code>oklch(from oklch(from var(--kendo-color-surface-alt) calc(l + 1 * 0.015 * clamp(0, (0.5 - l) * 99999, 1)) calc(c + 1 * 0.001 * clamp(0, (0.5 - l) * 99999, 1)) h) l c h / calc(100% - calc(var(--kendo-translucency-base))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-x</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-y</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-width</td>
    <td>Number</td>
    <td><code>7px</code></td>
    <td><code>7px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-color</td>
    <td>String</td>
    <td><code>k-color(inverse-subtle)</code></td>
    <td><code>var(--kendo-color-inverse-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(inverse-subtle), k-color(on-inverse))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-inverse-subtle), var(--kendo-color-on-inverse))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer scrollbar thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-radius</td>
    <td>Number</td>
    <td><code>20px</code></td>
    <td><code>20px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-hover-color</td>
    <td>String</td>
    <td><code>$kendo-drawer-scrollbar-color</code></td>
    <td><code>var(--kendo-color-inverse-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-font-weight, normal )</code></td>
    <td><code>var(--kendo-font-weight, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-padding-x</td>
    <td>String</td>
    <td><code>$kendo-drawer-item-padding-x</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item in each level.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-count</td>
    <td>Number</td>
    <td><code>5</code></td>
    <td><code>5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The count of the Drawer item levels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(sm)</code></td>
    <td><code>var(--kendo-border-radius-sm)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td>Calculation</td>
    <td><code>calc(2 * #{$kendo-drawer-item-padding-x} + #{$kendo-icon-size} + 2 * #{$kendo-drawer-items-padding-x})</code></td>
    <td><code>calc(2 * var(--kendo-spacing-4) + 16px + 2 * var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial width of the mini Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary-subtle-hover) 50%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary-subtle-hover) 50%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-text</td>
    <td>String</td>
    <td><code>k-color(primary-on-subtle)</code></td>
    <td><code>var(--kendo-color-primary-on-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-drawer-bg</code></td>
    <td><code>oklch(from oklch(from var(--kendo-color-surface-alt) calc(l + 1 * 0.015 * clamp(0, (0.5 - l) * 99999, 1)) calc(c + 1 * 0.001 * clamp(0, (0.5 - l) * 99999, 1)) h) l c h / calc(100% - calc(var(--kendo-translucency-base))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-outline-color</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary-subtle-active) 70%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary-subtle-active) 70%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-text</td>
    <td>String</td>
    <td><code>k-color(primary-on-subtle)</code></td>
    <td><code>var(--kendo-color-primary-on-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(primary-subtle-active) 70%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary-subtle-active) 70%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-text</td>
    <td>String</td>
    <td><code>k-color(primary-on-subtle)</code></td>
    <td><code>var(--kendo-color-primary-on-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and focused Drawer item.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

