---
title: Customizing Input
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_input
position: 9
---

# Customizing Input

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
    <td>$kendo-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-input-width, 100% )</code></td>
    <td><code>var(--kendo-input-width, 100%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-input-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-input-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-height</td>
    <td>Number</td>
    <td><code>calc( $kendo-input-border-width * 2 )</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the border around the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-input-padding-x, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-input-padding-x, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4.5)</code></td>
    <td><code>var(--kendo-spacing-4\.5, 1.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(0.5)} + 1px )</code></td>
    <td><code>calc(var(--kendo-spacing-0\.5, 0.125rem) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-y</td>
    <td>Calculation</td>
    <td><code>calc(var( --kendo-input-padding-y, #{k-spacing(1)} ) + 1px)</code></td>
    <td><code>calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-input-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-input-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-lg, inherit )</code></td>
    <td><code>var(--kendo-font-size-lg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-input-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-input-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-sm-line-height} * 1em + #{$kendo-button-sm-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5, 0.125rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-md-line-height} * 1em + #{$kendo-button-md-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-lg-line-height} * 1em + #{$kendo-button-lg-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-sm, normal) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2, 0.5rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-sm-button-width</code></td>
    <td><code>calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5, 0.125rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-md-button-width</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-lg-button-width</code></td>
    <td><code>calc(var(--kendo-line-height-sm, normal) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2, 0.5rem)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-spinner-icon-offset</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The icon offset of the Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-text</td>
    <td>String</td>
    <td><code>var( --kendo-input-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-input-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-bg</td>
    <td>String</td>
    <td><code>var( --kendo-input-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>String</td>
    <td><code>var( --kendo-input-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-input-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-input-bg</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-border</td>
    <td>String</td>
    <td><code>color-mix( in srgb, k-color(border) 34%, transparent )</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-text</td>
    <td>String</td>
    <td><code>$kendo-input-text</code></td>
    <td><code>var(--kendo-input-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-input-bg</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 14%, transparent )</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled solid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-text</td>
    <td>String</td>
    <td><code>var( --kendo-input-outline-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-input-outline-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-bg</td>
    <td>String</td>
    <td><code>var( --kendo-input-outline-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-input-outline-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td>String</td>
    <td><code>var( --kendo-input-outline-border, color-mix( in srgb, k-color(border) 26%, transparent ) )</code></td>
    <td><code>var(--kendo-input-outline-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-border</td>
    <td>String</td>
    <td><code>color-mix( in srgb, k-color(border) 34%, transparent )</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-bg</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 14%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-text</td>
    <td>String</td>
    <td><code>var( --kendo-input-flat-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-input-flat-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-bg</td>
    <td>String</td>
    <td><code>var( --kendo-input-flat-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-input-flat-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td>String</td>
    <td><code>var( --kendo-input-flat-border, k-color(border) )</code></td>
    <td><code>var(--kendo-input-flat-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-border</td>
    <td>String</td>
    <td><code>k-color(border-alt)</code></td>
    <td><code>var(--kendo-color-border-alt, #000000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-bg</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 14%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-text</td>
    <td>String</td>
    <td><code>var( --kendo-picker-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-picker-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-bg</td>
    <td>String</td>
    <td><code>var( --kendo-picker-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-picker-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-border</td>
    <td>String</td>
    <td><code>var( --kendo-picker-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-picker-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered the solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-hover-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 34%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-disabled-border</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 14%, transparent )</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled solid Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-text</td>
    <td>String</td>
    <td><code>var( --kendo-picker-outline-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-picker-outline-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-bg</td>
    <td>String</td>
    <td><code>var( --kendo-picker-outline-bg, none )</code></td>
    <td><code>var(--kendo-picker-outline-bg, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-border</td>
    <td>String</td>
    <td><code>var( --kendo-picker-outline-border, color-mix( in srgb, k-color(border) 26%, transparent ) )</code></td>
    <td><code>var(--kendo-picker-outline-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-border</td>
    <td>String</td>
    <td><code>color-mix( in srgb, k-color(border) 34%, transparent )</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered and focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered and focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered and focused outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-bg</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-border</td>
    <td>String</td>
    <td><code>$kendo-picker-outline-disabled-text!default</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled outline Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-text</td>
    <td>String</td>
    <td><code>var( --kendo-picker-flat-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-picker-flat-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-bg</td>
    <td>String</td>
    <td><code>var( --kendo-picker-flat-bg, none )</code></td>
    <td><code>var(--kendo-picker-flat-bg, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-border</td>
    <td>String</td>
    <td><code>var( --kendo-picker-flat-border, k-color(border) )</code></td>
    <td><code>var(--kendo-picker-flat-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-picker-outline-bg, none )</code></td>
    <td><code>var(--kendo-picker-outline-bg, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-border</td>
    <td>String</td>
    <td><code>k-color(border-alt)</code></td>
    <td><code>var(--kendo-color-border-alt, #000000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-bg</td>
    <td>String</td>
    <td><code>k-color(app-surface)</code></td>
    <td><code>var(--kendo-color-app-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-border</td>
    <td>String</td>
    <td><code>k-color(primary-on-surface)</code></td>
    <td><code>var(--kendo-color-primary-on-surface, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-text</td>
    <td>String</td>
    <td><code>$kendo-picker-flat-hover-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered and focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-bg</td>
    <td>String</td>
    <td><code>$kendo-picker-flat-hover-bg</code></td>
    <td><code>var(--kendo-picker-outline-bg, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered and focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-border</td>
    <td>String</td>
    <td><code>$kendo-picker-flat-border</code></td>
    <td><code>var(--kendo-picker-flat-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered and focused flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-bg</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-border</td>
    <td>String</td>
    <td><code>$kendo-picker-flat-disabled-text</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled flat Picker components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-calc-size</td>
    <td>Calculation</td>
    <td><code>calc( ( #{$kendo-input-md-line-height} * 1em ) + ( #{$kendo-input-md-padding-y} * 2 ) + calc( #{$kendo-input-border-width} * 2 ) )</code></td>
    <td><code>calc(var(--kendo-input-line-height, var(--kendo-line-height, normal)) * 1em + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + 1px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The calculated height of the Input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-input-sm-padding-x,
        padding-y: $kendo-input-sm-padding-y,
        font-size: $kendo-input-sm-font-size,
        line-height: $kendo-input-sm-line-height,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + calc( #{$kendo-input-md-padding-y} * 2 ) ),
        button-padding-x: $kendo-input-sm-padding-y,
        button-padding-y: $kendo-input-sm-padding-y,
        button-width: $kendo-input-sm-button-width
    ),
    md: (
        padding-x: $kendo-input-md-padding-x,
        padding-y: $kendo-input-md-padding-y,
        font-size: $kendo-input-md-font-size,
        line-height: $kendo-input-md-line-height,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + calc( #{$kendo-input-sm-padding-y} * 2 ) ),
        button-padding-x: $kendo-input-md-padding-y,
        button-padding-y: $kendo-input-md-padding-y,
        button-width: $kendo-input-md-button-width
    ),
    lg: (
        padding-x: $kendo-input-lg-padding-x,
        padding-y: $kendo-input-lg-padding-y,
        font-size: $kendo-input-lg-font-size,
        line-height: $kendo-input-lg-line-height,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + calc( #{$kendo-input-lg-padding-y} * 2 ) ),
        button-padding-x: $kendo-input-lg-padding-y,
        button-padding-y: $kendo-input-lg-padding-y,
        button-width: $kendo-input-lg-button-width
    )
)</code></td>
    <td><ul><li>sm: "padding-x":"var(--kendo-spacing-2, 0.5rem)","padding-y":"calc(var(--kendo-spacing-0\\.5, 0.125rem) + 1px)","font-size":"var(--kendo-font-size, inherit)","line-height":"var(--kendo-line-height, normal)","icon-size":"calc(var(--kendo-icon-size, 1rem) + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2)","button-padding-x":"calc(var(--kendo-spacing-0\\.5, 0.125rem) + 1px)","button-padding-y":"calc(var(--kendo-spacing-0\\.5, 0.125rem) + 1px)","button-width":"calc(var(--kendo-line-height-lg, normal) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\\.5, 0.125rem)) + 1px) * 2)"</li><li>md: "padding-x":"var(--kendo-input-padding-x, var(--kendo-spacing-2\\.5, 0.625rem))","padding-y":"calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)","font-size":"var(--kendo-input-font-size, var(--kendo-font-size, inherit))","line-height":"var(--kendo-input-line-height, var(--kendo-line-height, normal))","icon-size":"calc(var(--kendo-icon-size, 1rem) + calc(var(--kendo-spacing-0\\.5, 0.125rem) + 1px) * 2)","button-padding-x":"calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)","button-padding-y":"calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px)","button-width":"calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2)"</li><li>lg: "padding-x":"var(--kendo-spacing-4\\.5, 1.125rem)","padding-y":"var(--kendo-spacing-2, 0.5rem)","font-size":"var(--kendo-font-size-lg, inherit)","line-height":"var(--kendo-line-height-lg, normal)","icon-size":"calc(var(--kendo-icon-size, 1rem) + var(--kendo-spacing-2, 0.5rem) * 2)","button-padding-x":"var(--kendo-spacing-2, 0.5rem)","button-padding-y":"var(--kendo-spacing-2, 0.5rem)","button-width":"calc(var(--kendo-line-height-sm, normal) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2, 0.5rem)) + 1px) * 2)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-bg</td>
    <td>String</td>
    <td><code>k-color(base-subtle)</code></td>
    <td><code>var(--kendo-color-base-subtle, #f5f5f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-bg</td>
    <td>String</td>
    <td><code>k-color(base-subtle)</code></td>
    <td><code>var(--kendo-color-base-subtle, #f5f5f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-separator-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border-alt) 76%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border-alt, #000000) 76%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border-alt) 76%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border-alt, #000000) 76%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 28%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 28%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-border</td>
    <td>String</td>
    <td><code>k-color(error-on-surface)</code></td>
    <td><code>var(--kendo-color-error-on-surface, #c50f1f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-text</td>
    <td>String</td>
    <td><code>k-color(error-on-surface)</code></td>
    <td><code>var(--kendo-color-error-on-surface, #c50f1f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the invalid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-text</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #707070)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-text</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #707070)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-opacity</td>
    <td>Number</td>
    <td><code>.6</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-opacity</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered Input clear value icon.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

