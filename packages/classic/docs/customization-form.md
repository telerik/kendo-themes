---
title: Customizing Form
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_form
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
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2)} * 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the inline Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height-em</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-form-line-height} * 1em )</code></td>
    <td><code>calc(var(--kendo-line-height, normal) * 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Form in em units.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, normal )</code></td>
    <td><code>var(--kendo-line-height-sm, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-lg, normal )</code></td>
    <td><code>var(--kendo-line-height-lg, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-margin</td>
    <td>List</td>
    <td><code>2em 0 0</code></td>
    <td><code>(2em 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-padding</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-margin</td>
    <td>List</td>
    <td><code>0 0 1em</code></td>
    <td><code>(0 0 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-padding</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-width</td>
    <td>List</td>
    <td><code>0 0 2px</code></td>
    <td><code>(0 0 2px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-color</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-width</td>
    <td>Number</td>
    <td><code>100%</code></td>
    <td><code>100%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-text-transform</td>
    <td>String</td>
    <td><code>uppercase</code></td>
    <td><code>uppercase</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text capitalization of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-margin-bottom</td>
    <td>String</td>
    <td><code>k-spacing(0)</code></td>
    <td><code>var(--kendo-spacing-0, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Form label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-button-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Form buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-margin-top</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the Form hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-sm-rows-spacing</td>
    <td>Number</td>
    <td><code>1em</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the small Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-md-rows-spacing</td>
    <td>Number</td>
    <td><code>$kendo-form-sm-rows-spacing</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the medium Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-lg-rows-spacing</td>
    <td>Number</td>
    <td><code>$kendo-form-sm-rows-spacing</code></td>
    <td><code>1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The row spacing of the large Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-margin</td>
    <td>List</td>
    <td><code>$kendo-form-md-rows-spacing 0 0</code></td>
    <td><code>(1em 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-border-color</td>
    <td>String</td>
    <td><code>$kendo-form-legend-border-color</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-padding-top</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2.5)} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-2\.5, 0.625rem) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-align</td>
    <td>String</td>
    <td><code>flex-end</code></td>
    <td><code>flex-end</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal alignment of the label in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-field-wrap-max-width</td>
    <td>Calculation</td>
    <td><code>calc( ( 100% - #{$kendo-horizontal-form-label-width} ) - #{$kendo-horizontal-form-label-margin-x} )</code></td>
    <td><code>calc(100% - 25% - var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the field wrap in the horizontal Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-element-width</td>
    <td>Number</td>
    <td><code>25%</code></td>
    <td><code>25%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the inline Form element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-field-padding-x</td>
    <td>List</td>
    <td><code>0 k-spacing(3)</code></td>
    <td><code>(0 var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the inline Form field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-field-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1)} + #{$kendo-input-border-width} )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the inline Form field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-forms-invalid-color</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-label-optional-font-style</td>
    <td>String</td>
    <td><code>italic</code></td>
    <td><code>italic</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the optional label in the Form.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-margin</td>
    <td>String</td>
    <td><code>k-spacing(7.5)</code></td>
    <td><code>var(--kendo-spacing-7\.5, 1.875rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-font-size</td>
    <td>Calculation</td>
    <td><code>$kendo-h4-font-size</code></td>
    <td><code>calc(var(--kendo-font-size, 0.875rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form fieldset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-padding</td>
    <td>List</td>
    <td><code>0 k-spacing(2) 0 0</code></td>
    <td><code>(0 var(--kendo-spacing-2, 0.5rem) 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the Form fieldset legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-margin</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1.5)} * 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1\.5, 0.375rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form fieldset legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-alert-error-margin</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1)} * 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form alert error.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-field-info-margin</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the Form field info.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-try-shade( $kendo-body-text, 2 ))</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Form legend.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fieldset-legend-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Form legend.</div></div>
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
    <td><ul><li>sm: "form-rows-spacing":"1em"</li><li>md: "form-rows-spacing":"1em"</li><li>lg: "form-rows-spacing":"1em"</li></ul></td>
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

