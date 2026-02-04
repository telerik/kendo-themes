---
title: Customizing SegmentedControl
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_segmented-control
position: 9
---

# Customizing SegmentedControl

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
    <td>$kendo-segmented-control-default-size</td>
    <td>String</td>
    <td><code>"md"</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Segmented control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-padding-x, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-segmented-control-padding-x, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-padding-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-segmented-control-padding-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-border-radius, #{k-border-radius(full)} )</code></td>
    <td><code>var(--kendo-segmented-control-border-radius, var(--kendo-border-radius-full, 9999px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-bg</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-bg, color-mix(in srgb, k-color(base), currentColor 12%) )</code></td>
    <td><code>var(--kendo-segmented-control-bg, color-mix(in srgb, var(--kendo-color-base, #ffffff), currentColor 12%))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-text</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-text, #{k-color(on-base)} )</code></td>
    <td><code>var(--kendo-segmented-control-text, var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-sm-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-segmented-control-sm-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-md-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-segmented-control-md-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-lg-font-size, var( --kendo-font-size-lg, inherit ) )</code></td>
    <td><code>var(--kendo-segmented-control-lg-font-size, var(--kendo-font-size-lg, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-segmented-control-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-sm-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-segmented-control-sm-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-md-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-segmented-control-md-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-lg-line-height, var( --kendo-line-height-sm, normal ) )</code></td>
    <td><code>var(--kendo-segmented-control-lg-line-height, var(--kendo-line-height-sm, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-thumb-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-thumb-border-radius, #{$kendo-segmented-control-border-radius} )</code></td>
    <td><code>var(--kendo-segmented-control-thumb-border-radius, var(--kendo-segmented-control-border-radius, var(--kendo-border-radius-full, 9999px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Segmented Control thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-thumb-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Segmented Control thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-thumb-bg</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-thumb-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-segmented-control-thumb-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the Segmented Control thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-thumb-text</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-thumb-text, #{k-color(on-primary)} )</code></td>
    <td><code>var(--kendo-segmented-control-thumb-text, var(--kendo-color-on-primary, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Segmented Control thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sm-button-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-sm-button-padding-x, #{k-spacing(3.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-sm-button-padding-x, var(--kendo-spacing-3\.5, 0.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-md-button-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-md-button-padding-x, #{k-spacing(3.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-md-button-padding-x, var(--kendo-spacing-3\.5, 0.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-lg-button-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-lg-button-padding-x, #{k-spacing(3.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-lg-button-padding-x, var(--kendo-spacing-3\.5, 0.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sm-button-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-sm-button-padding-y, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-segmented-control-sm-button-padding-y, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-md-button-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-md-button-padding-y, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-md-button-padding-y, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-lg-button-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-lg-button-padding-y, #{k-spacing(2.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-lg-button-padding-y, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-button-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-button-border-width, #{0px} )</code></td>
    <td><code>var(--kendo-segmented-control-button-border-width, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-button-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-button-border-radius, #{$kendo-segmented-control-thumb-border-radius} )</code></td>
    <td><code>var(--kendo-segmented-control-button-border-radius, var(--kendo-segmented-control-thumb-border-radius, var(--kendo-segmented-control-border-radius, var(--kendo-border-radius-full, 9999px))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Segmented Control button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sm-button-gap</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-sm-button-gap, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-sm-button-gap, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the items inside the small Segmented Control buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-md-button-gap</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-md-button-gap, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-md-button-gap, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the items inside the medium Segmented Control buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-lg-button-gap</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-lg-button-gap, #{k-spacing(2.5)} )</code></td>
    <td><code>var(--kendo-segmented-control-lg-button-gap, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap of the items inside the large Segmented Control buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-button-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-button-hover-bg, color-mix(in srgb, k-color(base-hover), currentColor 16%) )</code></td>
    <td><code>var(--kendo-segmented-control-button-hover-bg, color-mix(in srgb, var(--kendo-color-base-hover, #f5f5f5), currentColor 16%))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered button inside Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-button-focus-indicator</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-button-focus-indicator, inset 0 0 0 2px k-color(on-base) )</code></td>
    <td><code>var(--kendo-segmented-control-button-focus-indicator, inset 0 0 0 2px var(--kendo-color-on-base, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The indication of the focused button inside Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-button-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-segmented-control-button-disabled-text, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-segmented-control-button-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled button inside Segmented Control.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-segmented-control-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-segmented-control-sm-font-size,
        line-height: $kendo-segmented-control-sm-line-height,
        button-padding-x: $kendo-segmented-control-sm-button-padding-x,
        button-padding-y: $kendo-segmented-control-sm-button-padding-y,
        button-gap: $kendo-segmented-control-sm-button-gap
    ),
    md: (
        font-size: $kendo-segmented-control-md-font-size,
        line-height: $kendo-segmented-control-md-line-height,
        button-padding-x: $kendo-segmented-control-md-button-padding-x,
        button-padding-y: $kendo-segmented-control-md-button-padding-y,
        button-gap: $kendo-segmented-control-md-button-gap
    ),
    lg: (
        font-size: $kendo-segmented-control-lg-font-size,
        line-height: $kendo-segmented-control-lg-line-height,
        button-padding-x: $kendo-segmented-control-lg-button-padding-x,
        button-padding-y: $kendo-segmented-control-lg-button-padding-y,
        button-gap: $kendo-segmented-control-lg-button-gap
    )
)</code></td>
    <td><ul><li>sm: "font-size":"var(--kendo-segmented-control-sm-font-size, var(--kendo-font-size-sm, inherit))","line-height":"var(--kendo-segmented-control-sm-line-height, var(--kendo-line-height-lg, normal))","button-padding-x":"var(--kendo-segmented-control-sm-button-padding-x, var(--kendo-spacing-3\\.5, 0.875rem))","button-padding-y":"var(--kendo-segmented-control-sm-button-padding-y, var(--kendo-spacing-1, 0.25rem))","button-gap":"var(--kendo-segmented-control-sm-button-gap, var(--kendo-spacing-1\\.5, 0.375rem))"</li><li>md: "font-size":"var(--kendo-segmented-control-md-font-size, var(--kendo-font-size, inherit))","line-height":"var(--kendo-segmented-control-md-line-height, var(--kendo-line-height, normal))","button-padding-x":"var(--kendo-segmented-control-md-button-padding-x, var(--kendo-spacing-3\\.5, 0.875rem))","button-padding-y":"var(--kendo-segmented-control-md-button-padding-y, var(--kendo-spacing-1\\.5, 0.375rem))","button-gap":"var(--kendo-segmented-control-md-button-gap, var(--kendo-spacing-1\\.5, 0.375rem))"</li><li>lg: "font-size":"var(--kendo-segmented-control-lg-font-size, var(--kendo-font-size-lg, inherit))","line-height":"var(--kendo-segmented-control-lg-line-height, var(--kendo-line-height-sm, normal))","button-padding-x":"var(--kendo-segmented-control-lg-button-padding-x, var(--kendo-spacing-3\\.5, 0.875rem))","button-padding-y":"var(--kendo-segmented-control-lg-button-padding-y, var(--kendo-spacing-2\\.5, 0.625rem))","button-gap":"var(--kendo-segmented-control-lg-button-gap, var(--kendo-spacing-2\\.5, 0.625rem))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the Segmented Control.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

