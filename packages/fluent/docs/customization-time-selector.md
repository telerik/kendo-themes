---
title: Customizing TimeSelector
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_time-selector
position: 9
---

# Customizing TimeSelector

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
    <td>$kendo-time-selector-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-border-width, 1px )</code></td>
    <td><code>var(--kendo-time-selector-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-time-selector-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-time-selector-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-time-selector-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-bg</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-time-selector-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-text</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-time-selector-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-border</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-time-selector-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-header-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-time-selector-header-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-header-padding-y, k-spacing(3) )</code></td>
    <td><code>var(--kendo-time-selector-header-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding color of the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-header-border-width, 0px )</code></td>
    <td><code>var(--kendo-time-selector-header-border-width, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-header-title-text, k-color(primary-on-surface) )</code></td>
    <td><code>var(--kendo-time-selector-header-title-text, var(--kendo-color-primary-on-surface, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the title in the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-time-now-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the time now in the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-time-now-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the time now in the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-separator-display</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-separator-display, none )</code></td>
    <td><code>var(--kendo-time-list-separator-display, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Visibility of the time-selector separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-width</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-width, 4em )</code></td>
    <td><code>var(--kendo-time-list-width, 4em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum width of the time-selector columns.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-height, 240px )</code></td>
    <td><code>var(--kendo-time-list-height, 240px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the time-selector columns.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-title-spacing, k-spacing(1) )</code></td>
    <td><code>var(--kendo-time-list-title-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing beneath the time selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-title-font-size, var( --kendo-font-size-xs, inherit ) )</code></td>
    <td><code>var(--kendo-time-list-title-font-size, var(--kendo-font-size-xs, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-title-line-height, 1 )</code></td>
    <td><code>var(--kendo-time-list-title-line-height, 1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-time-list-title-spacing} + #{$kendo-time-list-title-font-size} * #{$kendo-time-list-title-line-height} )</code></td>
    <td><code>calc(var(--kendo-time-list-title-spacing, var(--kendo-spacing-1, 0.25rem)) + var(--kendo-time-list-title-font-size, var(--kendo-font-size-xs, inherit)) * var(--kendo-time-list-title-line-height, 1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-title-text, k-color(subtle) )</code></td>
    <td><code>var(--kendo-time-list-title-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-title-focus-text, $kendo-time-selector-text )</code></td>
    <td><code>var(--kendo-time-list-title-focus-text, var(--kendo-time-selector-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-item-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-time-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the time-selector list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-item-padding-y, k-spacing(1) )</code></td>
    <td><code>var(--kendo-time-list-item-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the time-selector list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-highlight-border-width, 1px 0px )</code></td>
    <td><code>var(--kendo-time-list-highlight-border-width, 1px 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-time-selector-font-size} * #{$kendo-time-selector-line-height} + #{$kendo-time-list-item-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-time-selector-font-size, var(--kendo-font-size, inherit)) * var(--kendo-time-selector-line-height, var(--kendo-line-height, normal)) + var(--kendo-time-list-item-padding-y, var(--kendo-spacing-1, 0.25rem)) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-bg</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-highlight-bg, color-mix(in srgb, k-color(on-app-surface) 12%, transparent ) )</code></td>
    <td><code>var(--kendo-time-list-highlight-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 12%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-border</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-highlight-border, transparent )</code></td>
    <td><code>var(--kendo-time-list-highlight-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-time-list-focus-bg, color-mix(in srgb, k-color(on-app-surface) 5%, transparent ) )</code></td>
    <td><code>var(--kendo-time-list-focus-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 5%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused time-selector column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-sm-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-time-selector-sm-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-md-font-size, var(--kendo-font-size, inherit) )</code></td>
    <td><code>var(--kendo-time-selector-md-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TimeSelector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-lg-font-size, var(--kendo-font-size, inherit) )</code></td>
    <td><code>var(--kendo-time-selector-lg-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the TimeSelector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-sm-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-time-selector-sm-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-md-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-time-selector-md-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the TimeSelector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-lg-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-time-selector-lg-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the TimeSelector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-list-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-sm-list-item-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-time-selector-sm-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Horizontal padding of the time-selector items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-md-list-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-md-list-item-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-time-selector-md-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TimeSelector item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-lg-list-item-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-lg-list-item-padding-x, #{k-spacing(3)} )</code></td>
    <td><code>var(--kendo-time-selector-lg-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TimeSelector item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-list-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-sm-list-item-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-time-selector-sm-list-item-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Vertical padding of the time-selector items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-md-list-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-md-list-item-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-time-selector-md-list-item-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TimeSelector item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-lg-list-item-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-time-selector-lg-list-item-padding-y, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-time-selector-lg-list-item-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TimeSelector item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-time-selector-sm-font-size,
        line-height: $kendo-time-selector-sm-line-height,
        list-item-padding-x: $kendo-time-selector-sm-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-sm-list-item-padding-y
    ),
    md: (
        font-size: $kendo-time-selector-md-font-size,
        line-height: $kendo-time-selector-md-line-height,
        list-item-padding-x: $kendo-time-selector-md-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-md-list-item-padding-y
    ),
    lg: (
        font-size: $kendo-time-selector-lg-font-size,
        line-height: $kendo-time-selector-lg-line-height,
        list-item-padding-x: $kendo-time-selector-lg-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-lg-list-item-padding-y
    )
)</code></td>
    <td><ul><li>sm: "font-size":"var(--kendo-time-selector-sm-font-size, var(--kendo-font-size, inherit))","line-height":"var(--kendo-time-selector-sm-line-height, var(--kendo-line-height, normal))","list-item-padding-x":"var(--kendo-time-selector-sm-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))","list-item-padding-y":"var(--kendo-time-selector-sm-list-item-padding-y, var(--kendo-spacing-1, 0.25rem))"</li><li>md: "font-size":"var(--kendo-time-selector-md-font-size, var(--kendo-font-size, inherit))","line-height":"var(--kendo-time-selector-md-line-height, var(--kendo-line-height, normal))","list-item-padding-x":"var(--kendo-time-selector-md-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))","list-item-padding-y":"var(--kendo-time-selector-md-list-item-padding-y, var(--kendo-spacing-1, 0.25rem))"</li><li>lg: "font-size":"var(--kendo-time-selector-lg-font-size, var(--kendo-font-size, inherit))","line-height":"var(--kendo-time-selector-lg-line-height, var(--kendo-line-height, normal))","list-item-padding-x":"var(--kendo-time-selector-lg-list-item-padding-x, var(--kendo-spacing-3, 0.75rem))","list-item-padding-y":"var(--kendo-time-selector-lg-list-item-padding-y, var(--kendo-spacing-2, 0.5rem))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the time-selector.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

