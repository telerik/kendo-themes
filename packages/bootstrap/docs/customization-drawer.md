---
title: Customizing Drawer
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_drawer
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
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
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
    <td><code>var(--kendo-color-inverse-subtle, #495057)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(inverse-subtle), k-color(on-inverse))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-inverse-subtle, #495057), var(--kendo-color-on-inverse, #ffffff))</code></td>
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
    <td><code>var(--kendo-color-inverse-subtle, #495057)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the Drawer scrollbar track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-x</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-y</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-spacing</td>
    <td>String</td>
    <td><code>$kendo-drawer-item-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
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
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td>Calculation</td>
    <td><code>calc( 2 * #{$kendo-drawer-item-padding-x} + #{$kendo-icon-size} )</code></td>
    <td><code>calc(2 * var(--kendo-spacing-4, 1rem) + 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial width of the mini Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-bg</td>
    <td>String</td>
    <td><code>k-color(base-subtle-hover)</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-bg</td>
    <td>String</td>
    <td><code>k-color(base-subtle-hover)</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px color-mix(in srgb, k-color(inverse) 15%, transparent)</code></td>
    <td><code>(inset 0 0 0 2px color-mix(in srgb, var(--kendo-color-inverse, #212529) 15%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-text</td>
    <td>String</td>
    <td><code>k-color(on-primary)</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-bg</td>
    <td>String</td>
    <td><code>k-color(primary-hover)</code></td>
    <td><code>var(--kendo-color-primary-hover, #0b5ed7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-selected-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-primary)</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
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

