---
title: Customizing Radio
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_radio
position: 9
---

# Customizing Radio

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
    <td>$kendo-radio-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-radio-border-radius, 50% )</code></td>
    <td><code>var(--kendo-radio-border-radius, 50%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-bg</td>
    <td>String</td>
    <td><code>var( --kendo-radio-hover-checked-bg, #{$kendo-radio-bg} )</code></td>
    <td><code>var(--kendo-radio-hover-checked-bg, var(--kendo-radio-bg, var(--kendo-color-surface-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked and hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-text</td>
    <td>String</td>
    <td><code>var( --kendo-radio-hover-checked-text, #{k-color(primary-on-surface)} )</code></td>
    <td><code>var(--kendo-radio-hover-checked-text, var(--kendo-color-primary-on-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the checked and hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-border</td>
    <td>String</td>
    <td><code>var( --kendo-radio-hover-checked-border, #{k-color(primary-hover)} )</code></td>
    <td><code>var(--kendo-radio-hover-checked-border, var(--kendo-color-primary-hover))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked and hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-radio-focus-outline, 2px solid #{k-color(border-alt)} )</code></td>
    <td><code>var(--kendo-radio-focus-outline, 2px solid var(--kendo-color-border-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-outline-offset</td>
    <td>String</td>
    <td><code>var( --kendo-radio-focus-outline-offset, 4px )</code></td>
    <td><code>var(--kendo-radio-focus-outline-offset, 4px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-radio-indicator-border-radius, 50% )</code></td>
    <td><code>var(--kendo-radio-indicator-border-radius, 50%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-radio-label-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-radio-label-spacing, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the RadioButton inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-gap</td>
    <td>String</td>
    <td><code>var( --kendo-radio-list-item-gap, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-radio-list-item-gap, var(--kendo-spacing-1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the list items of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-text, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-border, var(--kendo-color-border-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-hover-bg, var(--kendo-radio-bg, var(--kendo-color-surface-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-hover-text, var(--kendo-color-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-hover-border, var(--kendo-radio-border, var(--kendo-color-border-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-checked-bg, var(--kendo-radio-bg, var(--kendo-color-surface-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-checked-text, var(--kendo-color-primary-on-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-checked-border, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-focus-border, var(--kendo-radio-border, var(--kendo-color-border-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-focus-shadow, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-bg, var(--kendo-radio-bg, var(--kendo-color-surface-alt)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-checked-bg, var(--kendo-radio-disabled-bg, var(--kendo-radio-bg, var(--kendo-color-surface-alt))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-checked-text, var(--kendo-radio-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-checked-border, var(--kendo-radio-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface) 30%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-invalid-text, var(--kendo-color-error-on-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-invalid-border, var(--kendo-color-error-on-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-type</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>pseudo</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-glyph-font-family, "WebComponentsIcons", monospace)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the RadioButton indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"\e308"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3e%3ccircle cx='50%25' cy='50%25' r='4' fill='%230078d4'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-image</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-disabled-checked-image, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the disabled and checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-spacing</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-list-spacing, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-list-item-padding-x, var(--kendo-spacing-0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-list-item-padding-y, var(--kendo-list-md-item-padding-y, var(--kendo-spacing-1\.5)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-bg</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-ripple-bg, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>var(--kendo-radio-ripple-opacity, 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the RadioButton ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-default-size</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>"md"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the RadioButton.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

