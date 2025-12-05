---
title: Customizing Menu
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_menu
position: 9
---

# Customizing Menu

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
    <td>$kendo-menu-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-menu-border-width, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-menu-border-width, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-menu-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-menu-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-menu-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-menu-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-menu-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-menu-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights of the Menu used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-bg, transparent )</code></td>
    <td><code>var(--kendo-menu-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-menu-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-border</td>
    <td>String</td>
    <td><code>var( --kendo-menu-border, initial )</code></td>
    <td><code>var(--kendo-menu-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-menu-shadow, none )</code></td>
    <td><code>var(--kendo-menu-shadow, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-menu-item-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-padding-y, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-menu-item-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-spacing, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-menu-item-spacing, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-icon-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-icon-spacing, var( --kendo-icon-spacing, .5rem ) )</code></td>
    <td><code>var(--kendo-menu-item-icon-spacing, var(--kendo-icon-spacing, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Menu item text and icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-selected-font-weight</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-selected-font-weight, var( --kendo-font-weight-bold, normal ) )</code></td>
    <td><code>var(--kendo-menu-item-selected-font-weight, var(--kendo-font-weight-bold, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the selected Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-text, #{$kendo-menu-text} )</code></td>
    <td><code>var(--kendo-menu-item-text, var(--kendo-menu-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-bg, transparent )</code></td>
    <td><code>var(--kendo-menu-item-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-hover-text, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-menu-item-hover-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-hover-bg, #{k-color(base-hover)} )</code></td>
    <td><code>var(--kendo-menu-item-hover-bg, var(--kendo-color-base-hover, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-active-text, #{$kendo-menu-item-hover-text} )</code></td>
    <td><code>var(--kendo-menu-item-active-text, var(--kendo-menu-item-hover-text, var(--kendo-color-on-base, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of active Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-active-bg, #{k-color(base-active)} )</code></td>
    <td><code>var(--kendo-menu-item-active-bg, var(--kendo-color-base-active, #ebebeb))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of active Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-text, #{$kendo-menu-item-text} )</code></td>
    <td><code>var(--kendo-menu-item-focus-text, var(--kendo-menu-item-text, var(--kendo-menu-text, var(--kendo-color-on-app-surface, #242424))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focused Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-bg, #{$kendo-menu-item-bg} )</code></td>
    <td><code>var(--kendo-menu-item-focus-bg, var(--kendo-menu-item-bg, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focused Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-outline, #{k-color(border-alt)} )</code></td>
    <td><code>var(--kendo-menu-item-focus-outline, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of focused Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline-offset</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-outline-offset, calc( #{k-spacing(0.5)} * -1 ) )</code></td>
    <td><code>var(--kendo-menu-item-focus-outline-offset, calc(var(--kendo-spacing-0\.5, 0.125rem) * -1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-outline-width, 2px )</code></td>
    <td><code>var(--kendo-menu-item-focus-outline-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-focus-outline-style, solid )</code></td>
    <td><code>var(--kendo-menu-item-focus-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-disabled-text, color-mix(in srgb, k-color(on-app-surface) 46%, transparent) )</code></td>
    <td><code>var(--kendo-menu-item-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-disabled-bg, #{$kendo-menu-item-bg} )</code></td>
    <td><code>var(--kendo-menu-item-disabled-bg, var(--kendo-menu-item-bg, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-selected-text, null )</code></td>
    <td><code>var(--kendo-menu-item-selected-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-item-selected-bg, null )</code></td>
    <td><code>var(--kendo-menu-item-selected-bg, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected Menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-margin-inline</td>
    <td>String</td>
    <td><code>var( --kendo-menu-separator-margin-inline, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-menu-separator-margin-inline, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline margin of the horizontal Menu separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-margin-block</td>
    <td>String</td>
    <td><code>var( --kendo-menu-separator-margin-block, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-menu-separator-margin-block, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block margin of the horizontal Menu separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-width</td>
    <td>String</td>
    <td><code>var( --kendo-menu-separator-width, 1px )</code></td>
    <td><code>var(--kendo-menu-separator-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Menu separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-border</td>
    <td>String</td>
    <td><code>var( --kendo-menu-separator-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent) )</code></td>
    <td><code>var(--kendo-menu-separator-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Menu separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-padding-x, #{$kendo-popup-padding-x} )</code></td>
    <td><code>var(--kendo-menu-popup-padding-x, var(--kendo-popup-padding-x, var(--kendo-spacing-0, 0px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-padding-y, #{$kendo-popup-padding-y} )</code></td>
    <td><code>var(--kendo-menu-popup-padding-y, var(--kendo-popup-padding-y, var(--kendo-spacing-0, 0px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-border-width, #{$kendo-popup-border-width} )</code></td>
    <td><code>var(--kendo-menu-popup-border-width, var(--kendo-popup-border-width, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-sm-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-menu-popup-sm-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-md-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-menu-popup-md-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-lg-font-size, var( --kendo-font-size-lg, inherit ) )</code></td>
    <td><code>var(--kendo-menu-popup-lg-font-size, var(--kendo-font-size-lg, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-sm-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-menu-popup-sm-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-md-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-menu-popup-md-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-lg-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-menu-popup-lg-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-menu-popup-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-border, initial )</code></td>
    <td><code>var(--kendo-menu-popup-border, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-shadow, k-elevation(5) )</code></td>
    <td><code>var(--kendo-menu-popup-shadow, var(--kendo-elevation-5, 0 8px 16px 0 rgba(0, 0, 0, 0.14), 0 0 2px 0 rgba(0, 0, 0, 0.12)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-sm-item-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-md-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-md-item-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-lg-item-padding-x, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-sm-item-padding-y, #{$kendo-list-sm-item-padding-y} )</code></td>
    <td><code>var(--kendo-menu-popup-sm-item-padding-y, var(--kendo-list-sm-item-padding-y, var(--kendo-spacing-1, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-md-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-md-item-padding-y, #{$kendo-list-md-item-padding-y} )</code></td>
    <td><code>var(--kendo-menu-popup-md-item-padding-y, var(--kendo-list-md-item-padding-y, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-lg-item-padding-y, #{$kendo-list-lg-item-padding-y} )</code></td>
    <td><code>var(--kendo-menu-popup-lg-item-padding-y, var(--kendo-list-lg-item-padding-y, var(--kendo-spacing-2\.5, 0.625rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-padding-end</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-menu-popup-sm-item-padding-x} * 2 ) + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the small Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-md-item-padding-end</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-menu-popup-md-item-padding-x} * 2 ) + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the medium Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-item-padding-end</td>
    <td>Calculation</td>
    <td><code>calc( calc( #{$kendo-menu-popup-lg-item-padding-x} * 2 ) + var( --kendo-icon-size, 1rem ) )</code></td>
    <td><code>calc(var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the large Menu popup item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-start</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the small Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-md-margin-start</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the medium Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-item-icon-margin-start</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the large Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-sm-item-icon-margin-end</td>
    <td>Calculation</td>
    <td><code>calc( -1 * (var( --kendo-icon-size, 1rem ) + #{$kendo-menu-popup-sm-item-padding-x}) )</code></td>
    <td><code>calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the small Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-md-margin-end</td>
    <td>Calculation</td>
    <td><code>calc( -1 * (var( --kendo-icon-size, 1rem ) + #{$kendo-menu-popup-md-item-padding-x}) )</code></td>
    <td><code>calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the medium Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-lg-item-icon-margin-end</td>
    <td>Calculation</td>
    <td><code>calc( -1 * (var( --kendo-icon-size, 1rem ) + #{$kendo-menu-popup-lg-item-padding-x}) )</code></td>
    <td><code>calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the large Menu popup item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-spacing, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-menu-popup-item-spacing, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Menu items in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        group-font-size: $kendo-menu-popup-sm-font-size,
        group-line-height: $kendo-menu-popup-sm-line-height,
        link-padding-x: $kendo-menu-popup-sm-item-padding-x,
        link-padding-y: $kendo-menu-popup-sm-item-padding-y,
        link-padding-inline-end: $kendo-menu-popup-sm-item-padding-end,
        arrow-margin-inline-start: $kendo-menu-popup-sm-item-icon-margin-start,
        arrow-margin-inline-end: $kendo-menu-popup-sm-item-icon-margin-end,
    ),
    md: (
        group-font-size: $kendo-menu-popup-md-font-size,
        group-line-height: $kendo-menu-popup-md-line-height,
        link-padding-x: $kendo-menu-popup-md-item-padding-x,
        link-padding-y: $kendo-menu-popup-md-item-padding-y,
        link-padding-inline-end: $kendo-menu-popup-md-item-padding-end,
        arrow-margin-inline-start: $kendo-menu-popup-item-icon-md-margin-start,
        arrow-margin-inline-end: $kendo-menu-popup-item-icon-md-margin-end,
    ),
    lg: (
        group-font-size: $kendo-menu-popup-lg-font-size,
        group-line-height: $kendo-menu-popup-lg-line-height,
        link-padding-x: $kendo-menu-popup-lg-item-padding-x,
        link-padding-y: $kendo-menu-popup-lg-item-padding-y,
        link-padding-inline-end: $kendo-menu-popup-lg-item-padding-end,
        arrow-margin-inline-start: $kendo-menu-popup-lg-item-icon-margin-start,
        arrow-margin-inline-end: $kendo-menu-popup-lg-item-icon-margin-end
    )
)</code></td>
    <td><ul><li>sm: "group-font-size":"var(--kendo-menu-popup-sm-font-size, var(--kendo-font-size, inherit))","group-line-height":"var(--kendo-menu-popup-sm-line-height, var(--kendo-line-height, normal))","link-padding-x":"var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem))","link-padding-y":"var(--kendo-menu-popup-sm-item-padding-y, var(--kendo-list-sm-item-padding-y, var(--kendo-spacing-1, 0.25rem)))","link-padding-inline-end":"calc(var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))","arrow-margin-inline-start":"var(--kendo-spacing-0, 0px)","arrow-margin-inline-end":"calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-sm-item-padding-x, var(--kendo-spacing-2, 0.5rem))))"</li><li>md: "group-font-size":"var(--kendo-menu-popup-md-font-size, var(--kendo-font-size, inherit))","group-line-height":"var(--kendo-menu-popup-md-line-height, var(--kendo-line-height, normal))","link-padding-x":"var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem))","link-padding-y":"var(--kendo-menu-popup-md-item-padding-y, var(--kendo-list-md-item-padding-y, var(--kendo-spacing-1\\.5, 0.375rem)))","link-padding-inline-end":"calc(var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))","arrow-margin-inline-start":"var(--kendo-spacing-0, 0px)","arrow-margin-inline-end":"calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-md-item-padding-x, var(--kendo-spacing-2, 0.5rem))))"</li><li>lg: "group-font-size":"var(--kendo-menu-popup-lg-font-size, var(--kendo-font-size-lg, inherit))","group-line-height":"var(--kendo-menu-popup-lg-line-height, var(--kendo-line-height, normal))","link-padding-x":"var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem))","link-padding-y":"var(--kendo-menu-popup-lg-item-padding-y, var(--kendo-list-lg-item-padding-y, var(--kendo-spacing-2\\.5, 0.625rem)))","link-padding-inline-end":"calc(var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem)) * 2 + var(--kendo-icon-size, 1rem))","arrow-margin-inline-start":"var(--kendo-spacing-0, 0px)","arrow-margin-inline-end":"calc(-1 * (var(--kendo-icon-size, 1rem) + var(--kendo-menu-popup-lg-item-padding-x, var(--kendo-spacing-2, 0.5rem))))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-text, #{$kendo-list-item-text} )</code></td>
    <td><code>var(--kendo-menu-popup-item-text, var(--kendo-list-item-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-bg, #{$kendo-list-item-bg} )</code></td>
    <td><code>var(--kendo-menu-popup-item-bg, var(--kendo-list-item-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-hover-text, #{$kendo-list-item-hover-text} )</code></td>
    <td><code>var(--kendo-menu-popup-item-hover-text, var(--kendo-list-item-hover-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-hover-bg, #{$kendo-list-item-hover-bg} )</code></td>
    <td><code>var(--kendo-menu-popup-item-hover-bg, var(--kendo-list-item-hover-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 5%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-focus-outline, #{k-color(border-alt)} )</code></td>
    <td><code>var(--kendo-menu-popup-item-focus-outline, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of focused Menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-active-text, #{$kendo-list-item-selected-text} )</code></td>
    <td><code>var(--kendo-menu-popup-item-active-text, var(--kendo-list-item-selected-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of active Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-active-bg, #{$kendo-list-item-selected-bg} )</code></td>
    <td><code>var(--kendo-menu-popup-item-active-bg, var(--kendo-list-item-selected-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 12%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of active Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-disabled-text, #{$kendo-list-item-disabled-text} )</code></td>
    <td><code>var(--kendo-menu-popup-item-disabled-text, var(--kendo-list-item-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 46%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-popup-item-disabled-bg, #{$kendo-list-item-disabled-bg} )</code></td>
    <td><code>var(--kendo-menu-popup-item-disabled-bg, var(--kendo-list-item-disabled-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled Menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-scroll-button-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-menu-scroll-button-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of Menu scroll buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-border</td>
    <td>String</td>
    <td><code>var( --kendo-menu-scroll-button-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-menu-scroll-button-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of Menu scroll buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-menu-scroll-button-hover-bg, null )</code></td>
    <td><code>var(--kendo-menu-scroll-button-hover-bg, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hover Menu scroll buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-menu-scroll-button-hover-border, null )</code></td>
    <td><code>var(--kendo-menu-scroll-button-hover-border, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hover Menu scroll buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-icon-color</td>
    <td>String</td>
    <td><code>var( --kendo-menu-icon-color, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-menu-icon-color, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Menu items icon.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

