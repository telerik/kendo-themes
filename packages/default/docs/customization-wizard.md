---
title: Customizing Wizard
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_wizard
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
    <td><code>calc( #{k-spacing(2)} * 2.5 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-y</td>
    <td>Calculation</td>
    <td><code>$kendo-wizard-padding-x</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 2.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-x</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(2)} * 4 )</code></td>
    <td><code>calc(var(--kendo-spacing-2, 0.5rem) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-y</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(1)} * 8 )</code></td>
    <td><code>calc(var(--kendo-spacing-1, 0.25rem) * 8)</code></td>
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
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
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

