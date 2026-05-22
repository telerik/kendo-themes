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
    <td>$kendo-input-focus-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-input-focus-border-width, 2px )</code></td>
    <td><code>var(--kendo-input-focus-border-width, 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Input input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-sm-line-height} * 1em + #{$kendo-button-sm-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-lg) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-md-line-height} * 1em + #{$kendo-button-md-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-button-width</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-lg-line-height} * 1em + #{$kendo-button-lg-padding-y} * 2 )</code></td>
    <td><code>calc(var(--kendo-line-height-sm) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large Input button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-sm-button-width</code></td>
    <td><code>calc(var(--kendo-line-height-lg) * 1em + calc(var(--kendo-button-sm-padding-y, var(--kendo-spacing-0\.5)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the small Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-md-button-width</code></td>
    <td><code>calc(var(--kendo-line-height) * 1em + calc(var(--kendo-button-md-padding-y, var(--kendo-spacing-1)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the medium Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-spinner-width</td>
    <td>Calculation</td>
    <td><code>$kendo-input-lg-button-width</code></td>
    <td><code>calc(var(--kendo-line-height-sm) * 1em + calc(var(--kendo-button-lg-padding-y, var(--kendo-spacing-2)) + 1px) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the large Input spinner button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent)</code></td>
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
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 30%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent)</code></td>
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
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 28%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-disabled-text</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 28%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-text</td>
    <td>String</td>
    <td><code>k-color(error-on-surface)</code></td>
    <td><code>var(--kendo-color-error-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the invalid Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-default-fill-mode</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"solid"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default fill mode of the Input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-default-roundness</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default roundness of the Input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-default-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-width</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-radius</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-padding-x, var(--kendo-spacing-2\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-spacing-4\.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-padding-y</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-spacing-0\.5) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-padding-y</td>
    <td>Calculation</td>
    <td><code>null</code></td>
    <td><code>calc(var(--kendo-input-padding-y, var(--kendo-spacing-1)) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-spacing-2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-family</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-font-size)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-font-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-font-size-lg)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sm-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-line-height)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-md-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the medium Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-lg-line-height</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-line-height-lg)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-hover-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-focus-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-primary-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-disabled-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-outline-bg, var(--kendo-color-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-outline-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-outline-border, color-mix(in srgb, var(--kendo-color-border) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border) 34%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-primary-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-flat-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-flat-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-input-flat-border, var(--kendo-color-border))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-bg</td>
    <td>Color</td>
    <td><code>null</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-border-alt)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat hovered Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-bg</td>
    <td>Color</td>
    <td><code>null</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-primary-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat focused Input components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-placeholder-opacity</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-opacity</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-clear-value-hover-opacity</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the hovered Input clear value icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-button-border-width</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Input button.</div></div>
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
    <td>$kendo-input-separator-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Input separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border-alt) 76%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-prefix-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-base-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input prefix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border-alt) 76%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-suffix-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-base-subtle)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Input suffix.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-invalid-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-color-error-on-surface)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Input components.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

