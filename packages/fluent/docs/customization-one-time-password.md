---
title: Customizing OneTimePassword
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_one-time-password
position: 9
---

# Customizing OneTimePassword

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
    <td>$kendo-otp-gap</td>
    <td>String</td>
    <td><code>var( --kendo-otp-gap, #{k-spacing(1.5)} )</code></td>
    <td><code>var(--kendo-otp-gap, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the OTP.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-sm-gap</td>
    <td>String</td>
    <td><code>var( --kendo-otp-sm-gap, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-otp-sm-gap, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the small OTP.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-md-gap</td>
    <td>String</td>
    <td><code>var( --kendo-otp-md-gap, #{$kendo-otp-gap} )</code></td>
    <td><code>var(--kendo-otp-md-gap, var(--kendo-otp-gap, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the medium OTP.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-lg-gap</td>
    <td>String</td>
    <td><code>var( --kendo-otp-lg-gap, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-otp-lg-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the items in the large OTP.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-separator-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-otp-separator-padding-x, #{$kendo-otp-gap} )</code></td>
    <td><code>var(--kendo-otp-separator-padding-x, var(--kendo-otp-gap, var(--kendo-spacing-1\.5, 0.375rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-sm-separator-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-otp-sm-separator-padding-x, #{$kendo-otp-sm-gap} )</code></td>
    <td><code>var(--kendo-otp-sm-separator-padding-x, var(--kendo-otp-sm-gap, var(--kendo-spacing-1, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-md-separator-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-otp-md-separator-padding-x, #{$kendo-otp-separator-padding-x} )</code></td>
    <td><code>var(--kendo-otp-md-separator-padding-x, var(--kendo-otp-separator-padding-x, var(--kendo-otp-gap, var(--kendo-spacing-1\.5, 0.375rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-lg-separator-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-otp-lg-separator-padding-x, #{$kendo-otp-lg-gap} )</code></td>
    <td><code>var(--kendo-otp-lg-separator-padding-x, var(--kendo-otp-lg-gap, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-otp-input-width, #{$kendo-input-calc-size} )</code></td>
    <td><code>var(--kendo-otp-input-width, calc(var(--kendo-input-line-height, var(--kendo-line-height, normal)) * 1em + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + 1px * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-sm-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-otp-sm-input-width, #{$kendo-input-sm-calc-size} )</code></td>
    <td><code>var(--kendo-otp-sm-input-width, calc(var(--kendo-line-height, normal) * 1em + calc(var(--kendo-spacing-0\.5, 0.125rem) + 1px) * 2 + 1px * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-md-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-otp-md-input-width, #{$kendo-otp-input-width} )</code></td>
    <td><code>var(--kendo-otp-md-input-width, var(--kendo-otp-input-width, calc(var(--kendo-input-line-height, var(--kendo-line-height, normal)) * 1em + calc(var(--kendo-input-padding-y, var(--kendo-spacing-1, 0.25rem)) + 1px) * 2 + 1px * 2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium OTP separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-otp-lg-input-width</td>
    <td>String</td>
    <td><code>var( --kendo-otp-lg-input-width, #{$kendo-input-lg-calc-size} )</code></td>
    <td><code>var(--kendo-otp-lg-input-width, calc(var(--kendo-line-height-lg, normal) * 1em + var(--kendo-spacing-2, 0.5rem) * 2 + 1px * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large OTP separator.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

