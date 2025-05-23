---
title: Customizing Radio
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_radio
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
    <td>$kendo-radio-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-size</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-size</td>
    <td>String</td>
    <td><code>k-spacing(5)</code></td>
    <td><code>var(--kendo-spacing-5, 1.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(3.5)</code></td>
    <td><code>var(--kendo-spacing-3\.5, 0.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-glyph-size</td>
    <td>String</td>
    <td><code>k-spacing(4.5)</code></td>
    <td><code>var(--kendo-spacing-4\.5, 1.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sm-ripple-size</td>
    <td>String</td>
    <td><code>k-spacing(8)</code></td>
    <td><code>var(--kendo-spacing-8, 2rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a small RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-md-ripple-size</td>
    <td>String</td>
    <td><code>k-spacing(10)</code></td>
    <td><code>var(--kendo-spacing-10, 2.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a medium RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-lg-ripple-size</td>
    <td>String</td>
    <td><code>k-spacing(12)</code></td>
    <td><code>var(--kendo-spacing-12, 3rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ripple size of a large RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        size: $kendo-radio-sm-size,
        glyph-size: $kendo-radio-sm-glyph-size,
        ripple-size: $kendo-radio-sm-ripple-size,
        indicator-size: k-spacing(8)
    ),
    md: (
        size: $kendo-radio-md-size,
        glyph-size: $kendo-radio-md-glyph-size,
        ripple-size: $kendo-radio-md-ripple-size,
        indicator-size: k-spacing(10)
    ),
    lg: (
        size: $kendo-radio-lg-size,
        glyph-size: $kendo-radio-lg-glyph-size,
        ripple-size: $kendo-radio-lg-ripple-size,
        indicator-size: k-spacing(12)
    )
)</code></td>
    <td><ul><li>sm: "size":"var(--kendo-spacing-4, 1rem)","glyph-size":"var(--kendo-spacing-2\\.5, 0.625rem)","ripple-size":"var(--kendo-spacing-8, 2rem)","indicator-size":"var(--kendo-spacing-8, 2rem)"</li><li>md: "size":"var(--kendo-spacing-4, 1rem)","glyph-size":"var(--kendo-spacing-3\\.5, 0.875rem)","ripple-size":"var(--kendo-spacing-10, 2.5rem)","indicator-size":"var(--kendo-spacing-10, 2.5rem)"</li><li>lg: "size":"var(--kendo-spacing-5, 1.25rem)","glyph-size":"var(--kendo-spacing-4\\.5, 1.125rem)","ripple-size":"var(--kendo-spacing-12, 3rem)","indicator-size":"var(--kendo-spacing-12, 3rem)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different RadioButton sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td>String</td>
    <td><code>$kendo-checkbox-bg</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td>String</td>
    <td><code>unset</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td>String</td>
    <td><code>unset</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-border</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td>String</td>
    <td><code>unset</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #65558F)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td>String</td>
    <td><code>$kendo-radio-checked-text</code></td>
    <td><code>var(--kendo-color-primary, #65558F)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td>String</td>
    <td><code>$kendo-checkbox-focus-shadow</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-border</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-focus-checked-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-checked-shadow</td>
    <td>String</td>
    <td><code>$kendo-checkbox-focus-checked-shadow</code></td>
    <td><code>unset</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td>Null</td>
    <td><code>$kendo-radio-disabled-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td>String</td>
    <td><code>$kendo-radio-disabled-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td>String</td>
    <td><code>$kendo-radio-disabled-border</code></td>
    <td><code>var(--kendo-color-on-app-surface, #1D1B20)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled and checked RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-bg</td>
    <td>Null</td>
    <td><code>$kendo-checkbox-invalid-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td>String</td>
    <td><code>$kendo-checkbox-invalid-text</code></td>
    <td><code>var(--kendo-color-error, #B3261E)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-checkbox-invalid-border</code></td>
    <td><code>var(--kendo-color-error, #B3261E)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-type</td>
    <td>String</td>
    <td><code>image</code></td>
    <td><code>image</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The type of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td>List</td>
    <td><code>"WebComponentsIcons", monospace</code></td>
    <td><code>("WebComponentsIcons", monospace)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the RadioButton indicator glyph.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td>String</td>
    <td><code>"\e308"</code></td>
    <td><code>"\e308"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The glyph of the RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#ffffff'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3ccircle cx='50%25' cy='50%25' r='4' fill='%23ffffff'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#adadad'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3e%3ccircle cx='50%25' cy='50%25' r='4' fill='%23adadad'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The image of the disabled and checked RadioButton indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the RadioButton inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-spacing</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td>String</td>
    <td><code>$kendo-list-md-item-padding-y</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of the RadioButton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #65558F)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the RadioButton ripple..</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td>Number</td>
    <td><code>.2</code></td>
    <td><code>0.2</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the RadioButton ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

