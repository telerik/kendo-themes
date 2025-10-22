---
title: Customizing Chip
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_chip
position: 9
---

# Customizing Chip

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
    <td>$kendo-chip-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-chip-border-width, 1px )</code></td>
    <td><code>var(--kendo-chip-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-chip-spacing, k-spacing(1) )</code></td>
    <td><code>var(--kendo-chip-spacing, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-chip-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-chip-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-width</td>
    <td>String</td>
    <td><code>var( --kendo-chip-avatar-width, 1em )</code></td>
    <td><code>var(--kendo-chip-avatar-width, 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Chip' avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-height</td>
    <td>String</td>
    <td><code>var( --kendo-chip-avatar-height, 1em )</code></td>
    <td><code>var(--kendo-chip-avatar-height, 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Chip' avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-flex-basis</td>
    <td>Number</td>
    <td><code>1em</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The flex basis of the Chip' avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-offset</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-chip-border-width} * -1)</code></td>
    <td><code>calc(var(--kendo-chip-border-width, 1px) * -1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the outline focused Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-outline-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the outline focused Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the outline focused Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-chip-padding-x, k-spacing(1.5) )</code></td>
    <td><code>var(--kendo-chip-padding-x, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(0.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-0\.5, 0.125rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-chip-padding-y, #{k-spacing(1.5)} ) / 2 )</code></td>
    <td><code>calc(var(--kendo-chip-padding-y, var(--kendo-spacing-1\.5, 0.375rem)) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-weight</td>
    <td>String</td>
    <td><code>var(--kendo-chip-font-weight, var( --kendo-font-weight-normal, normal ) )</code></td>
    <td><code>var(--kendo-chip-font-weight, var(--kendo-font-weight-normal, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-chip-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-chip-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-chip-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-chip-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large Chip's line height that is related to the $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-chip-sm-padding-x,
        padding-y: $kendo-chip-sm-padding-y,
        font-size: $kendo-chip-sm-font-size,
        line-height: $kendo-chip-sm-line-height
    ),
    md: (
        padding-x: $kendo-chip-md-padding-x,
        padding-y: $kendo-chip-md-padding-y,
        font-size: $kendo-chip-md-font-size,
        line-height: $kendo-chip-md-line-height
    ),
    lg: (
        padding-x: $kendo-chip-lg-padding-x,
        padding-y: $kendo-chip-lg-padding-y,
        font-size: $kendo-chip-lg-font-size,
        line-height: $kendo-chip-lg-line-height
    )
)</code></td>
    <td><ul><li>sm: "padding-x":"var(--kendo-spacing-1\\.5, 0.375rem)","padding-y":"calc(var(--kendo-spacing-0\\.5, 0.125rem) / 2)","font-size":"var(--kendo-font-size-sm, inherit)","line-height":"var(--kendo-line-height-lg, normal)"</li><li>md: "padding-x":"var(--kendo-chip-padding-x, var(--kendo-spacing-1\\.5, 0.375rem))","padding-y":"calc(var(--kendo-chip-padding-y, var(--kendo-spacing-1\\.5, 0.375rem)) / 2)","font-size":"var(--kendo-chip-font-size, var(--kendo-font-size-sm, inherit))","line-height":"var(--kendo-chip-line-height, var(--kendo-line-height-lg, normal))"</li><li>lg: "padding-x":"var(--kendo-spacing-2, 0.5rem)","padding-y":"calc(var(--kendo-spacing-2\\.5, 0.625rem) / 2)","font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-text</td>
    <td>String</td>
    <td><code>var( --kendo-chip-text, k-color(base-on-subtle) )</code></td>
    <td><code>var(--kendo-chip-text, var(--kendo-color-base-on-subtle, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chip-bg, k-color(base-subtle) )</code></td>
    <td><code>var(--kendo-chip-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-border</td>
    <td>String</td>
    <td><code>var( --kendo-chip-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-chip-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chip-hover-bg, k-color(base-subtle-hover) )</code></td>
    <td><code>var(--kendo-chip-hover-bg, var(--kendo-color-base-subtle-hover, #ebebeb))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-chip-hover-border, color-mix( in srgb, k-color(border) 34%, transparent ) )</code></td>
    <td><code>var(--kendo-chip-hover-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the hovered solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chip-focused-bg, k-color(base-subtle) )</code></td>
    <td><code>var(--kendo-chip-focused-bg, var(--kendo-color-base-subtle, #f5f5f5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-chip-focused-border, k-color(base-on-subtle) )</code></td>
    <td><code>var(--kendo-chip-focused-border, var(--kendo-color-base-on-subtle, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-chip-focus-outline, initial)</code></td>
    <td><code>var(--kendo-chip-focus-outline, initial)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base outline color of the focused solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-chip-selected-text, k-color(on-primary) )</code></td>
    <td><code>var(--kendo-chip-selected-text, var(--kendo-color-on-primary, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the selected solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chip-selected-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-chip-selected-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the selected solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-chip-selected-border, k-color(primary) )</code></td>
    <td><code>var(--kendo-chip-selected-border, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the selected solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-chip-disabled-text, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-chip-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the disabled solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chip-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 7%, transparent) )</code></td>
    <td><code>var(--kendo-chip-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 7%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the disabled solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-chip-disabled-border, transparent )</code></td>
    <td><code>var(--kendo-chip-disabled-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the disabled solid Chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-spacing(1),
    md: k-spacing(1),
    lg: k-spacing(1)
)</code></td>
    <td><ul><li>sm: var(--kendo-spacing-1, 0.25rem)</li><li>md: var(--kendo-spacing-1, 0.25rem)</li><li>lg: var(--kendo-spacing-1, 0.25rem)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the Chip list.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

