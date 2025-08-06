---
title: Customizing Form
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_form
position: 9
---

# Customizing Form

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
    <td>$kendo-form-spacer</td>
    <td>String</td>
    <td><code>var(--kendo-form-spacer, #{k-spacing(4)})</code></td>
    <td><code>var(--kendo-form-spacer, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the inline Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-form-font-size, var( --kendo-font-size, inherit ))</code></td>
    <td><code>var(--kendo-form-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-form-line-height, var( --kendo-line-height, normal ))</code></td>
    <td><code>var(--kendo-form-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-margin</td>
    <td>String</td>
    <td><code>var(--kendo-form-fieldset-margin, 2em 0 0)</code></td>
    <td><code>var(--kendo-form-fieldset-margin, 2em 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-padding</td>
    <td>String</td>
    <td><code>var(--kendo-form-fieldset-padding, #{k-spacing(0)})</code></td>
    <td><code>var(--kendo-form-fieldset-padding, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-margin</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-margin, 0 0 #{k-spacing(3)})</code></td>
    <td><code>var(--kendo-form-legend-margin, 0 0 var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-padding</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-padding, #{k-spacing(0)})</code></td>
    <td><code>var(--kendo-form-legend-padding, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-border-width, 0 0 #{k-spacing(0.5)})</code></td>
    <td><code>var(--kendo-form-legend-border-width, 0 0 var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-style</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-border-style, solid)</code></td>
    <td><code>var(--kendo-form-legend-border-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-color</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-border-color, #{color-mix(in srgb, k-color(border) 16%, transparent)})</code></td>
    <td><code>var(--kendo-form-legend-border-color, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-width</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-width, 100%)</code></td>
    <td><code>var(--kendo-form-legend-width, 100%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-font-size, var( --kendo-font-size, inherit ))</code></td>
    <td><code>var(--kendo-form-legend-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-text-transform</td>
    <td>String</td>
    <td><code>var(--kendo-form-legend-text-transform, uppercase)</code></td>
    <td><code>var(--kendo-form-legend-text-transform, uppercase)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text capitalization of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-margin-bottom</td>
    <td>String</td>
    <td><code>var(--kendo-form-label-margin-bottom, #{k-spacing(2)})</code></td>
    <td><code>var(--kendo-form-label-margin-bottom, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Form label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-font-weight</td>
    <td>String</td>
    <td><code>var(--kendo-form-label-font-weight, var( --kendo-font-weight-bold, inherit ))</code></td>
    <td><code>var(--kendo-form-label-font-weight, var(--kendo-font-weight-bold, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-form-hint-font-size, var( --kendo-font-size-sm, inherit ))</code></td>
    <td><code>var(--kendo-form-hint-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-style</td>
    <td>String</td>
    <td><code>var(--kendo-form-hint-font-style, normal)</code></td>
    <td><code>var(--kendo-form-hint-font-style, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-margin-top</td>
    <td>String</td>
    <td><code>var(--kendo-form-hint-margin-top, #{k-spacing(1)})</code></td>
    <td><code>var(--kendo-form-hint-margin-top, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-text</td>
    <td>String</td>
    <td><code>var(--kendo-form-hint-text, #{k-color(subtle)})</code></td>
    <td><code>var(--kendo-form-hint-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-rows-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-form-sm-rows-spacing, #{k-spacing(3)})</code></td>
    <td><code>var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-md-rows-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-form-md-rows-spacing, #{$kendo-form-sm-rows-spacing})</code></td>
    <td><code>var(--kendo-form-md-rows-spacing, var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the medium Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-rows-spacing</td>
    <td>String</td>
    <td><code>var(--kendo-form-lg-rows-spacing, #{$kendo-form-sm-rows-spacing})</code></td>
    <td><code>var(--kendo-form-lg-rows-spacing, var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-margin</td>
    <td>String</td>
    <td><code>var(--kendo-form-separator-margin, #{k-spacing(3)} 0 0)</code></td>
    <td><code>var(--kendo-form-separator-margin, var(--kendo-spacing-3, 0.75rem) 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-border-color</td>
    <td>String</td>
    <td><code>var(--kendo-form-separator-border-color, #{$kendo-form-legend-border-color})</code></td>
    <td><code>var(--kendo-form-separator-border-color, var(--kendo-form-legend-border-color, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-padding-top</td>
    <td>String</td>
    <td><code>var(--kendo-horizontal-form-label-padding-top, #{k-spacing(1.5)})</code></td>
    <td><code>var(--kendo-horizontal-form-label-padding-top, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-margin-x</td>
    <td>String</td>
    <td><code>var(--kendo-horizontal-form-label-margin-x, #{k-spacing(2)})</code></td>
    <td><code>var(--kendo-horizontal-form-label-margin-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-width</td>
    <td>String</td>
    <td><code>var(--kendo-horizontal-form-label-width, 25%)</code></td>
    <td><code>var(--kendo-horizontal-form-label-width, 25%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-align</td>
    <td>String</td>
    <td><code>var(--kendo-horizontal-form-label-align, flex-end)</code></td>
    <td><code>var(--kendo-horizontal-form-label-align, flex-end)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal alignment of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-field-wrap-max-width</td>
    <td>String</td>
    <td><code>var(--kendo-horizontal-form-field-wrap-max-width, calc( ( 100% - #{$kendo-horizontal-form-label-width} ) - #{$kendo-horizontal-form-label-margin-x} ))</code></td>
    <td><code>var(--kendo-horizontal-form-field-wrap-max-width, calc(100% - var(--kendo-horizontal-form-label-width, 25%) - var(--kendo-horizontal-form-label-margin-x, var(--kendo-spacing-2, 0.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the field wrap in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-element-width</td>
    <td>String</td>
    <td><code>var(--kendo-inline-form-element-width, 25%)</code></td>
    <td><code>var(--kendo-inline-form-element-width, 25%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the inline Form element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-forms-invalid-color</td>
    <td>String</td>
    <td><code>var(--kendo-forms-invalid-color, #{k-color(error-on-surface)})</code></td>
    <td><code>var(--kendo-forms-invalid-color, var(--kendo-color-error-on-surface, #a4262c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-margin-x</td>
    <td>String</td>
    <td><code>var(--kendo-label-optional-margin-x, #{k-spacing(1.5)})</code></td>
    <td><code>var(--kendo-label-optional-margin-x, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-label-optional-font-size, var( --kendo-font-size-sm, inherit ))</code></td>
    <td><code>var(--kendo-label-optional-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-style</td>
    <td>String</td>
    <td><code>var(--kendo-label-optional-font-style, normal)</code></td>
    <td><code>var(--kendo-label-optional-font-style, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-margin</td>
    <td>String</td>
    <td><code>var(--kendo-fieldset-margin, #{k-spacing(7.5)})</code></td>
    <td><code>var(--kendo-fieldset-margin, var(--kendo-spacing-7\.5, 1.875rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-text</td>
    <td>String</td>
    <td><code>var(--kendo-fieldset-legend-text, #{k-color(subtle)})</code></td>
    <td><code>var(--kendo-fieldset-legend-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        form-rows-spacing: $kendo-form-sm-rows-spacing
    ),
    md: (
        form-rows-spacing: $kendo-form-md-rows-spacing
    ),
    lg: (
        form-rows-spacing: $kendo-form-lg-rows-spacing
    )
)</code></td>
    <td><ul><li>sm: "form-rows-spacing":"var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem))"</li><li>md: "form-rows-spacing":"var(--kendo-form-md-rows-spacing, var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem)))"</li><li>lg: "form-rows-spacing":"var(--kendo-form-lg-rows-spacing, var(--kendo-form-sm-rows-spacing, var(--kendo-spacing-3, 0.75rem)))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the Form.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

