---
title: Customizing Wizard
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_wizard
position: 9
---

# Customizing Wizard

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
    <td>$kendo-wizard-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-x} * 1.25 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-wizard-padding-x</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-x} * 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4, 1rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-padding-md-y} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-buttons-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(2.5)</code></td>
    <td><code>var(--kendo-spacing-2\.5, 0.625rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Wizard's Button container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-step-focus-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the focused Wizard step.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

