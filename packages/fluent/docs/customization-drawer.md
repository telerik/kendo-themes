---
title: Customizing Drawer
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_drawer
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
    <td><code>var( --kendo-drawer-bg, k-color(secondary-subtle) )</code></td>
    <td><code>var(--kendo-drawer-bg, var(--kendo-color-secondary-subtle, #f0f0f0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-text, k-color(on-app-surface) )!default</code></td>
    <td><code>var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-drawer-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-border-width, 0 )</code></td>
    <td><code>var(--kendo-drawer-border-width, 0)</code></td>
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
    <td><code>var( --kendo-line-height, inherit )</code></td>
    <td><code>var(--kendo-line-height, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-content-padding-x, null )</code></td>
    <td><code>var(--kendo-drawer-content-padding-x, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-content-padding-y, null )</code></td>
    <td><code>var(--kendo-drawer-content-padding-y, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-width</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-scrollbar-width, 7px )</code></td>
    <td><code>var(--kendo-drawer-scrollbar-width, 7px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-color</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-scrollbar-color, color-mix(in srgb, k-color(on-app-surface) 46%, transparent) )</code></td>
    <td><code>var(--kendo-drawer-scrollbar-color, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-scrollbar-bg, k-color(base-subtle) )</code></td>
    <td><code>var(--kendo-drawer-scrollbar-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-radius</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-scrollbar-radius, 20px )</code></td>
    <td><code>var(--kendo-drawer-scrollbar-radius, 20px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-hover-color</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-scrollbar-hover-color, $kendo-drawer-scrollbar-color )</code></td>
    <td><code>var(--kendo-drawer-scrollbar-hover-color, var(--kendo-drawer-scrollbar-color, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 46%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover color of the Drawer scrollbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-items-padding-x, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-drawer-items-padding-x, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-items-padding-y, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-drawer-items-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-items-gap</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-items-gap, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-drawer-items-gap, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Drawer items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-padding-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-drawer-item-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-padding-y, k-spacing(2) )</code></td>
    <td><code>var(--kendo-drawer-item-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-spacing, $kendo-drawer-item-padding-x )</code></td>
    <td><code>var(--kendo-drawer-item-spacing, var(--kendo-drawer-item-padding-x, var(--kendo-spacing-4, 1rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items in the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-font-size, $kendo-drawer-font-size )</code></td>
    <td><code>var(--kendo-drawer-item-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-drawer-item-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-font-weight, var( --kendo-font-weight, normal ) )</code></td>
    <td><code>var(--kendo-drawer-item-font-weight, var(--kendo-font-weight, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-level-padding-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-drawer-item-level-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
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
    <td><code>var( --kendo-drawer-item-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-drawer-item-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-icon-padding-x, k-spacing(0) )</code></td>
    <td><code>var(--kendo-drawer-icon-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-icon-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-drawer-icon-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Drawer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td>Calculation</td>
    <td><code>calc( 2 * #{$kendo-drawer-item-padding-x} + 2 * #{$kendo-drawer-items-padding-x} + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(2 * var(--kendo-drawer-item-padding-x, var(--kendo-spacing-4, 1rem)) + 2 * var(--kendo-drawer-items-padding-x, var(--kendo-spacing-2\.5, 0.625rem)) + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial width of the mini Drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-ripple-border-width, k-spacing(1) )</code></td>
    <td><code>var(--kendo-drawer-item-ripple-border-width, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Drawer item ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border-height</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-ripple-border-height, k-spacing(5) )</code></td>
    <td><code>var(--kendo-drawer-item-ripple-border-height, var(--kendo-spacing-5, 1.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border height of the Drawer item ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-ripple-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-drawer-item-ripple-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Drawer item ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-spacing-x</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-ripple-spacing-x, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-drawer-item-ripple-spacing-x, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Drawer item ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-ripple-border, k-color(primary-on-surface) )</code></td>
    <td><code>var(--kendo-drawer-item-ripple-border, var(--kendo-color-primary-on-surface, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the drawer item ripple</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-bg, $kendo-drawer-bg )</code></td>
    <td><code>var(--kendo-drawer-item-bg, var(--kendo-drawer-bg, var(--kendo-color-secondary-subtle, #f0f0f0)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-text, $kendo-drawer-text )</code></td>
    <td><code>var(--kendo-drawer-item-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-icon-text, $kendo-drawer-text )</code></td>
    <td><code>var(--kendo-drawer-icon-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-hover-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-drawer-item-hover-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-hover-text, $kendo-drawer-item-text )</code></td>
    <td><code>var(--kendo-drawer-item-hover-text, var(--kendo-drawer-item-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-hover-icon-text, $kendo-drawer-item-icon-text )</code></td>
    <td><code>var(--kendo-drawer-item-hover-icon-text, var(--kendo-drawer-icon-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-focus-bg, $kendo-drawer-item-bg )</code></td>
    <td><code>var(--kendo-drawer-item-focus-bg, var(--kendo-drawer-item-bg, var(--kendo-drawer-bg, var(--kendo-color-secondary-subtle, #f0f0f0))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-focus-text, $kendo-drawer-item-text )</code></td>
    <td><code>var(--kendo-drawer-item-focus-text, var(--kendo-drawer-item-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-focus-shadow, inset 0 0 0 2px k-color(border-alt) )</code></td>
    <td><code>var(--kendo-drawer-item-focus-shadow, inset 0 0 0 2px var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-focus-icon-text, $kendo-drawer-item-icon-text )</code></td>
    <td><code>var(--kendo-drawer-item-focus-icon-text, var(--kendo-drawer-icon-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-font-weight, var( --kendo-font-weight-semibold, 600 ) )</code></td>
    <td><code>var(--kendo-drawer-item-selected-font-weight, var(--kendo-font-weight-semibold, 600))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-bg, $kendo-drawer-item-bg )</code></td>
    <td><code>var(--kendo-drawer-item-selected-bg, var(--kendo-drawer-item-bg, var(--kendo-drawer-bg, var(--kendo-color-secondary-subtle, #f0f0f0))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-text, $kendo-drawer-item-text )</code></td>
    <td><code>var(--kendo-drawer-item-selected-text, var(--kendo-drawer-item-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-icon-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-icon-text, k-color(primary-on-surface) )</code></td>
    <td><code>var(--kendo-drawer-item-selected-icon-text, var(--kendo-color-primary-on-surface, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-hover-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-drawer-item-selected-hover-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-drawer-item-selected-hover-text, $kendo-drawer-item-text )</code></td>
    <td><code>var(--kendo-drawer-item-selected-hover-text, var(--kendo-drawer-item-text, var(--kendo-drawer-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected and hovered Drawer item.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

