---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_color-system
position: 9
---

# Customizing Color System

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
    <td>$kendo-color-white</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-black</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-rgba-transparent</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-black</td>
    <td>Gradient</td>
    <td><code>rgba(black, 0), black</code></td>
    <td><code>(rgba(0, 0, 0, 0), black)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td>Gradient</td>
    <td><code>rgba(white, 0), white</code></td>
    <td><code>(rgba(255, 255, 255, 0), white)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td>Gradient</td>
    <td><code>black, rgba(black, 0)</code></td>
    <td><code>(black, rgba(0, 0, 0, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td>Gradient</td>
    <td><code>white, rgba(white, 0)</code></td>
    <td><code>(white, rgba(255, 255, 255, 0))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td>Gradient</td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td><code>(#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$default-colors</code></td>
    <td><ul><li>app-surface: oklch(100% 0 0deg)</li><li>on-app-surface: oklch(from var(--kendo-color-app-surface) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>subtle: oklch(51.03% 0 0deg)</li><li>surface: oklch(98.51% 0 0deg)</li><li>surface-alt: oklch(from var(--kendo-color-surface) calc(l + 0.02) c h)</li><li>border: oklch(0% 0 0deg / 0.08)</li><li>border-alt: oklch(0% 0 0deg / 0.16)</li><li>base-subtle: oklch(from var(--kendo-color-base) calc(l + clamp(-0.03, (0.6 - l) * 99999, 0.03)) c h)</li><li>base-subtle-hover: oklch(from var(--kendo-color-base) calc(l + clamp(-0.064, (0.6 - l) * 99999, 0.064)) c h)</li><li>base-subtle-active: oklch(from var(--kendo-color-base) calc(l + clamp(-0.094, (0.6 - l) * 99999, 0.094)) c h)</li><li>base: oklch(97.02% 0 0deg)</li><li>base-hover: oklch(from var(--kendo-color-base) calc(l + clamp(-0.03, (0.6 - l) * 99999, 0.03)) c h)</li><li>base-active: oklch(from var(--kendo-color-base) calc(l + clamp(-0.094, (0.6 - l) * 99999, 0.094)) c h)</li><li>base-emphasis: oklch(from var(--kendo-color-base) calc(l + clamp(-0.156, (0.6 - l) * 99999, 0.156)) c h)</li><li>base-on-subtle: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>on-base: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>base-on-surface: oklch(from var(--kendo-color-base) clamp(0.36, (0.6 - l) * 99999, 0.95) 0 h)</li><li>primary-subtle: oklch(from var(--kendo-color-primary) 0.958 calc(c * 0.11) h)</li><li>primary-subtle-hover: oklch(from var(--kendo-color-primary) 0.927 calc(c * 0.19) h)</li><li>primary-subtle-active: oklch(from var(--kendo-color-primary) 0.88 calc(c * 0.33) h)</li><li>primary: oklch(69.85% 0.1923 27.19deg)</li><li>primary-hover: oklch(from var(--kendo-color-primary) calc(l - 0.044) calc(c - 0.012) h)</li><li>primary-active: oklch(from var(--kendo-color-primary) calc(l - 0.088) calc(c - 0.027) h)</li><li>primary-emphasis: oklch(from var(--kendo-color-primary) calc(l * 0.665 + 0.33) calc(c * 0.61) h)</li><li>primary-on-subtle: oklch(from var(--kendo-color-primary) calc(l * 0.48) calc(c * 0.47) h)</li><li>on-primary: oklch(from var(--kendo-color-primary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>primary-on-surface: oklch(from var(--kendo-color-primary) l c h)</li><li>secondary-subtle: oklch(from var(--kendo-color-secondary) calc(l * 0.03 + 0.97) calc(c * 0.12) h)</li><li>secondary-subtle-hover: oklch(from var(--kendo-color-secondary) calc(l * 0.06 + 0.94) calc(c * 0.18) h)</li><li>secondary-subtle-active: oklch(from var(--kendo-color-secondary) calc(l * 0.12 + 0.88) calc(c * 0.25) h)</li><li>secondary: oklch(51.03% 0 0deg)</li><li>secondary-hover: oklch(from var(--kendo-color-secondary) calc(l - 0.072) c h)</li><li>secondary-active: oklch(from var(--kendo-color-secondary) calc(l - 0.15) c h)</li><li>secondary-emphasis: oklch(from var(--kendo-color-secondary) calc(l * 0.19 + 0.81) calc(c * 0.55) h)</li><li>secondary-on-subtle: oklch(from var(--kendo-color-secondary) calc(l * 0.375) c h)</li><li>on-secondary: oklch(from var(--kendo-color-secondary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>secondary-on-surface: oklch(from var(--kendo-color-secondary) calc(l * 0.55) c h)</li><li>tertiary-subtle: oklch(from var(--kendo-color-tertiary) 0.944 calc(c * 0.20) h)</li><li>tertiary-subtle-hover: oklch(from var(--kendo-color-tertiary) 0.916 calc(c * 0.29) h)</li><li>tertiary-subtle-active: oklch(from var(--kendo-color-tertiary) 0.872 calc(c * 0.46) h)</li><li>tertiary: oklch(69.91% 0.157 238.99deg)</li><li>tertiary-hover: oklch(from var(--kendo-color-tertiary) calc(l + clamp(-0.046, (0.6 - l) * 99999, 0.046)) c h)</li><li>tertiary-active: oklch(from var(--kendo-color-tertiary) calc(l + clamp(-0.09, (0.6 - l) * 99999, 0.09)) c h)</li><li>tertiary-emphasis: oklch(from var(--kendo-color-tertiary) calc(l * 0.665 + 0.33) calc(c * 0.75) h)</li><li>tertiary-on-subtle: oklch(from var(--kendo-color-tertiary) calc(l * 0.50) calc(c * 0.48) h)</li><li>on-tertiary: oklch(from var(--kendo-color-tertiary) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>tertiary-on-surface: oklch(from var(--kendo-color-tertiary) calc(l * 0.87) c h)</li><li>info-subtle: oklch(from var(--kendo-color-info) 0.9086 calc(c * 0.17) h)</li><li>info-subtle-hover: oklch(from var(--kendo-color-info) 0.8646 calc(c * 0.24) h)</li><li>info-subtle-active: oklch(from var(--kendo-color-info) 0.7417 calc(c * 0.50) h)</li><li>info: oklch(51.78% 0.2301 261.43deg)</li><li>info-hover: oklch(from var(--kendo-color-info) calc(l - 0.0286) calc(c - 0.0164) h)</li><li>info-active: oklch(from var(--kendo-color-info) calc(l - 0.0624) calc(c - 0.032) h)</li><li>info-emphasis: oklch(from var(--kendo-color-info) calc(l * 0.68 + 0.33) calc(c * 0.64) h)</li><li>info-on-subtle: oklch(from var(--kendo-color-info) calc(l * 0.52) calc(c * 0.46) h)</li><li>on-info: oklch(from var(--kendo-color-info) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>info-on-surface: oklch(from var(--kendo-color-info) calc(l * 0.88) calc(c * 0.86) h)</li><li>success-subtle: oklch(from var(--kendo-color-success) 0.9326 calc(c * 0.20) h)</li><li>success-subtle-hover: oklch(from var(--kendo-color-success) 0.9012 calc(c * 0.30) h)</li><li>success-subtle-active: oklch(from var(--kendo-color-success) 0.8647 calc(c * 0.42) h)</li><li>success: oklch(67.45% 0.2171 139.99deg)</li><li>success-hover: oklch(from var(--kendo-color-success) calc(l - 0.042) calc(c - 0.0137) h)</li><li>success-active: oklch(from var(--kendo-color-success) calc(l - 0.0847) calc(c - 0.0275) h)</li><li>success-emphasis: oklch(from var(--kendo-color-success) calc(l * 0.675 + 0.33) calc(c * 0.78) h)</li><li>success-on-subtle: oklch(from var(--kendo-color-success) calc(l * 0.61) calc(c * 0.60) h)</li><li>on-success: oklch(from var(--kendo-color-success) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>success-on-surface: oklch(from var(--kendo-color-success) calc(l * 0.875) calc(c * 0.875) h)</li><li>warning-subtle: oklch(from var(--kendo-color-warning) 0.9674 calc(c * 0.26) h)</li><li>warning-subtle-hover: oklch(from var(--kendo-color-warning) 0.9508 calc(c * 0.38) h)</li><li>warning-subtle-active: oklch(from var(--kendo-color-warning) 0.9312 calc(c * 0.55) h)</li><li>warning: oklch(84.22% 0.1727 84.58deg)</li><li>warning-hover: oklch(from var(--kendo-color-warning) calc(l - 0.055) calc(c - 0.011) h)</li><li>warning-active: oklch(from var(--kendo-color-warning) calc(l - 0.11) calc(c - 0.0225) h)</li><li>warning-emphasis: oklch(from var(--kendo-color-warning) calc(l * 0.665 + 0.33) calc(c * 0.83) h)</li><li>warning-on-subtle: oklch(from var(--kendo-color-warning) calc(l * 0.49) calc(c * 0.49) h)</li><li>on-warning: oklch(from var(--kendo-color-warning) clamp(0.36, (0.6 - l) * 99999, 1) 0 h)</li><li>warning-on-surface: oklch(from var(--kendo-color-warning) l c h)</li><li>error-subtle: oklch(from var(--kendo-color-error) 0.9223 calc(c * 0.14) h)</li><li>error-subtle-hover: oklch(from var(--kendo-color-error) 0.8762 calc(c * 0.24) h)</li><li>error-subtle-active: oklch(from var(--kendo-color-error) 0.7533 calc(c * 0.56) h)</li><li>error: oklch(61.07% 0.2435 30.2deg)</li><li>error-hover: oklch(from var(--kendo-color-error) calc(l - 0.0377) calc(c - 0.0159) h)</li><li>error-active: oklch(from var(--kendo-color-error) calc(l - 0.0782) calc(c - 0.0326) h)</li><li>error-emphasis: oklch(from var(--kendo-color-error) calc(l * 0.61 + 0.33) calc(c * 0.70) h)</li><li>error-on-subtle: oklch(from var(--kendo-color-error) calc(l * 0.61) calc(c * 0.59) h)</li><li>on-error: oklch(from var(--kendo-color-error) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>error-on-surface: oklch(from var(--kendo-color-error) calc(l * 0.872) calc(c * 0.866) h)</li><li>light-subtle: oklch(98.51% 0 0deg)</li><li>light-subtle-hover: oklch(97.02% 0 0deg)</li><li>light-subtle-active: oklch(94.01% 0 0deg)</li><li>light: oklch(94.01% 0 0deg)</li><li>light-hover: oklch(90.67% 0 0deg)</li><li>light-active: oklch(87.61% 0 0deg)</li><li>light-emphasis: oklch(87.61% 0 0deg)</li><li>light-on-subtle: oklch(19.13% 0 0deg)</li><li>on-light: oklch(0% 0 0deg)</li><li>light-on-surface: oklch(90.67% 0 0deg)</li><li>dark-subtle: oklch(81.41% 0 0deg)</li><li>dark-subtle-hover: oklch(74.76% 0 0deg)</li><li>dark-subtle-active: oklch(68.3% 0 0deg)</li><li>dark: oklch(36% 0 0deg)</li><li>dark-hover: oklch(28.09% 0 0deg)</li><li>dark-active: oklch(23.93% 0 0deg)</li><li>dark-emphasis: oklch(51.03% 0 0deg)</li><li>dark-on-subtle: oklch(23.93% 0 0deg)</li><li>on-dark: oklch(100% 0 0deg)</li><li>dark-on-surface: oklch(19.13% 0 0deg)</li><li>inverse-subtle: oklch(from var(--kendo-color-inverse) calc(l + 0.15) c h)</li><li>inverse-subtle-hover: oklch(from var(--kendo-color-inverse) calc(l + 0.079) c h)</li><li>inverse-subtle-active: oklch(from var(--kendo-color-inverse) l c h)</li><li>inverse: oklch(36% 0 0deg)</li><li>inverse-hover: oklch(from var(--kendo-color-inverse) calc(l - 0.079) c h)</li><li>inverse-active: oklch(from var(--kendo-color-inverse) calc(l - 0.121) c h)</li><li>inverse-emphasis: oklch(from var(--kendo-color-inverse) calc(l + 0.323) c h)</li><li>inverse-on-subtle: oklch(from var(--kendo-color-inverse) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>on-inverse: oklch(from var(--kendo-color-inverse) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>inverse-on-surface: oklch(from var(--kendo-color-inverse) calc(l * 0.53) c h)</li><li>series: oklch(69.85% 0.1923 27.19deg)</li><li>series-a: var(--kendo-color-series)</li><li>series-a-bold: oklch(from var(--kendo-color-series-a) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-a-bolder: oklch(from var(--kendo-color-series-a) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-a-subtle: oklch(from var(--kendo-color-series-a) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-a-subtler: oklch(from var(--kendo-color-series-a) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-b: oklch(from var(--kendo-color-series) calc(l + 0.2128) calc(c - 0.0444) calc(h + 68.82))</li><li>series-b-bold: oklch(from var(--kendo-color-series-b) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-b-bolder: oklch(from var(--kendo-color-series-b) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-b-subtle: oklch(from var(--kendo-color-series-b) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-b-subtler: oklch(from var(--kendo-color-series-b) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-c: oklch(from var(--kendo-color-series) calc(l + 0.0697) calc(c - 0.0281) calc(h + 125.93))</li><li>series-c-bold: oklch(from var(--kendo-color-series-c) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-c-bolder: oklch(from var(--kendo-color-series-c) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-c-subtle: oklch(from var(--kendo-color-series-c) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-c-subtler: oklch(from var(--kendo-color-series-c) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-d: oklch(from var(--kendo-color-series) calc(l - 0.1323) calc(c + 0.0372) calc(h + 244.06))</li><li>series-d-bold: oklch(from var(--kendo-color-series-d) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-d-bolder: oklch(from var(--kendo-color-series-d) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-d-subtle: oklch(from var(--kendo-color-series-d) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-d-subtler: oklch(from var(--kendo-color-series-d) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-e: oklch(from var(--kendo-color-series) calc(l - 0.0581) calc(c + 0.0456) calc(h + 276.18))</li><li>series-e-bold: oklch(from var(--kendo-color-series-e) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-e-bolder: oklch(from var(--kendo-color-series-e) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-e-subtle: oklch(from var(--kendo-color-series-e) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-e-subtler: oklch(from var(--kendo-color-series-e) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li><li>series-f: oklch(from var(--kendo-color-series) l calc(c + 0.0143) calc(h - 24.38))</li><li>series-f-bold: oklch(from var(--kendo-color-series-f) calc(l * 0.81) calc(c * 0.79) h)</li><li>series-f-bolder: oklch(from var(--kendo-color-series-f) calc(l * 0.61) calc(c * 0.57) h)</li><li>series-f-subtle: oklch(from var(--kendo-color-series-f) calc(l * 0.55 + 0.45) calc(c * 0.50) h)</li><li>series-f-subtler: oklch(from var(--kendo-color-series-f) calc(l * 0.79 + 0.21) calc(c * 0.77) h)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Groups</b><div class="theme-variables-description">The groups of the $kendo-colors Map</div></div>
    </td>
</tr>
<tr>
    <td>Group</td>
    <td colspan="2">Values</td>
    <td>Description</td>
</tr>
<tr>
    <td>misc</td>
    <td colspan="2"> app-surface, on-app-surface, subtle, surface, surface-alt, border, border-alt</td>
    <td>The Misc variable group.</td>
</tr>
<tr>
    <td>base</td>
    <td colspan="2"> base-subtle, base-subtle-hover, base-subtle-active, base, base-hover, base-active, base-emphasis, base-on-subtle, on-base, base-on-surface</td>
    <td>The Base variable group.</td>
</tr>
<tr>
    <td>primary</td>
    <td colspan="2"> primary-subtle, primary-subtle-hover, primary-subtle-active, primary, primary-hover, primary-active, primary-emphasis, primary-on-subtle, on-primary, primary-on-surface</td>
    <td>The Primary variable group.</td>
</tr>
<tr>
    <td>secondary</td>
    <td colspan="2"> secondary-subtle, secondary-subtle-hover, secondary-subtle-active, secondary, secondary-hover, secondary-active, secondary-emphasis, secondary-on-subtle, on-secondary, secondary-on-surface</td>
    <td>The Secondary variable group.</td>
</tr>
<tr>
    <td>tertiary</td>
    <td colspan="2"> tertiary-subtle, tertiary-subtle-hover, tertiary-subtle-active, tertiary, tertiary-hover, tertiary-active, tertiary-emphasis, tertiary-on-subtle, on-tertiary, tertiary-on-surface</td>
    <td>The Tertiary variable group.</td>
</tr>
<tr>
    <td>info</td>
    <td colspan="2"> info-subtle, info-subtle-hover, info-subtle-active, info, info-hover, info-active, info-emphasis, info-on-subtle, on-info, info-on-surface</td>
    <td>The Info variable group.</td>
</tr>
<tr>
    <td>success</td>
    <td colspan="2"> success-subtle, success-subtle-hover, success-subtle-active, success, success-hover, success-active, success-emphasis, success-on-subtle, on-success, success-on-surface</td>
    <td>The Success variable group.</td>
</tr>
<tr>
    <td>warning</td>
    <td colspan="2"> warning-subtle, warning-subtle-hover, warning-subtle-active, warning, warning-hover, warning-active, warning-emphasis, warning-on-subtle, on-warning, warning-on-surface</td>
    <td>The Warning variable group.</td>
</tr>
<tr>
    <td>error</td>
    <td colspan="2"> error-subtle, error-subtle-hover, error-subtle-active, error, error-hover, error-active, error-emphasis, error-on-subtle, on-error, error-on-surface</td>
    <td>The Error variable group.</td>
</tr>
<tr>
    <td>light</td>
    <td colspan="2"> light-subtle, light-subtle-hover, light-subtle-active, light, light-hover, light-active, light-emphasis, light-on-subtle, on-light, light-on-surface</td>
    <td>The Light variable group.</td>
</tr>
<tr>
    <td>dark</td>
    <td colspan="2"> dark-subtle, dark-subtle-hover, dark-subtle-active, dark, dark-hover, dark-active, dark-emphasis, dark-on-subtle, on-dark, dark-on-surface</td>
    <td>The Dark variable group.</td>
</tr>
<tr>
    <td>inverse</td>
    <td colspan="2"> inverse-subtle, inverse-subtle-hover, inverse-subtle-active, inverse, inverse-hover, inverse-active, inverse-emphasis, inverse-on-subtle, on-inverse, inverse-on-surface</td>
    <td>The Inverse variable group.</td>
</tr>
<tr>
    <td>series</td>
    <td colspan="2"> series</td>
    <td>The Series base variable group.</td>
</tr>
<tr>
    <td>series-a</td>
    <td colspan="2"> series-a, series-a-bold, series-a-bolder, series-a-subtle, series-a-subtler</td>
    <td>The Series A variable group.</td>
</tr>
<tr>
    <td>series-b</td>
    <td colspan="2"> series-b, series-b-bold, series-b-bolder, series-b-subtle, series-b-subtler</td>
    <td>The Series B variable group.</td>
</tr>
<tr>
    <td>series-c</td>
    <td colspan="2"> series-c, series-c-bold, series-c-bolder, series-c-subtle, series-c-subtler</td>
    <td>The Series C variable group.</td>
</tr>
<tr>
    <td>series-d</td>
    <td colspan="2"> series-d, series-d-bold, series-d-bolder, series-d-subtle, series-d-subtler</td>
    <td>The Series D variable group.</td>
</tr>
<tr>
    <td>series-e</td>
    <td colspan="2"> series-e, series-e-bold, series-e-bolder, series-e-subtle, series-e-subtler</td>
    <td>The Series E variable group.</td>
</tr>
<tr>
    <td>series-f</td>
    <td colspan="2"> series-f, series-f-bold, series-f-bolder, series-f-subtle, series-f-subtler</td>
    <td>The Series F variable group.</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Properties</b><div class="theme-variables-description">The properties of the $kendo-colors Map</div></div>
    </td>
</tr>
<tr>
    <td>Type</td>
    <td>Name</td>
    <td colspan="2">Description</td>
</tr>
<tr>
    <td>Color</td>
    <td>app-surface</td>
    <td colspan="2">The background color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-app-surface</td>
    <td colspan="2">The text color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>subtle</td>
    <td colspan="2">The subtle text color.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface</td>
    <td colspan="2">The background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface-alt</td>
    <td colspan="2">The alternative background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border</td>
    <td colspan="2">The border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border-alt</td>
    <td colspan="2">The alternative border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle</td>
    <td colspan="2">The base subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-hover</td>
    <td colspan="2">The base subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-active</td>
    <td colspan="2">The base subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base</td>
    <td colspan="2">The base background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-hover</td>
    <td colspan="2">The base background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-active</td>
    <td colspan="2">The base background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-emphasis</td>
    <td colspan="2">The emphasized base color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-subtle</td>
    <td colspan="2">The text color variable for content on base subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-base</td>
    <td colspan="2">The text color variable for content on base.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle</td>
    <td colspan="2">The primary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-hover</td>
    <td colspan="2">The primary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-active</td>
    <td colspan="2">The primary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary</td>
    <td colspan="2">The primary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-hover</td>
    <td colspan="2">The primary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-active</td>
    <td colspan="2">The primary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-emphasis</td>
    <td colspan="2">The emphasized primary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-subtle</td>
    <td colspan="2">The text color variable for content on primary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-primary</td>
    <td colspan="2">The text color variable for content on primary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle</td>
    <td colspan="2">The secondary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-hover</td>
    <td colspan="2">The secondary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-active</td>
    <td colspan="2">The secondary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary</td>
    <td colspan="2">The secondary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-hover</td>
    <td colspan="2">The secondary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-active</td>
    <td colspan="2">The secondary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-emphasis</td>
    <td colspan="2">The emphasized secondary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-subtle</td>
    <td colspan="2">The text color variable for content on secondary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-secondary</td>
    <td colspan="2">The text color variable for content on secondary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle</td>
    <td colspan="2">The tertiary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-hover</td>
    <td colspan="2">The tertiary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-active</td>
    <td colspan="2">The tertiary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary</td>
    <td colspan="2">The tertiary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-hover</td>
    <td colspan="2">The tertiary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-active</td>
    <td colspan="2">The tertiary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-emphasis</td>
    <td colspan="2">The emphasized tertiary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-subtle</td>
    <td colspan="2">The text color variable for content on tertiary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-tertiary</td>
    <td colspan="2">The text color variable for content on tertiary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle</td>
    <td colspan="2">The info subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-hover</td>
    <td colspan="2">The info subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-active</td>
    <td colspan="2">The info subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info</td>
    <td colspan="2">The info background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-hover</td>
    <td colspan="2">The info background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-active</td>
    <td colspan="2">The info background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-emphasis</td>
    <td colspan="2">The emphasized info color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-subtle</td>
    <td colspan="2">The text color variable for content on info subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-info</td>
    <td colspan="2">The text color variable for content on info.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle</td>
    <td colspan="2">The success subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-hover</td>
    <td colspan="2">The success subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-active</td>
    <td colspan="2">The success subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success</td>
    <td colspan="2">The success background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-hover</td>
    <td colspan="2">The success background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-active</td>
    <td colspan="2">The success background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-emphasis</td>
    <td colspan="2">The emphasized success color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-subtle</td>
    <td colspan="2">The text color variable for content on success subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-success</td>
    <td colspan="2">The text color variable for content on success.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle</td>
    <td colspan="2">The warning subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-hover</td>
    <td colspan="2">The warning subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-active</td>
    <td colspan="2">The warning subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning</td>
    <td colspan="2">The warning background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-hover</td>
    <td colspan="2">The warning background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-active</td>
    <td colspan="2">The warning background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-emphasis</td>
    <td colspan="2">The emphasized warning color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-subtle</td>
    <td colspan="2">The text color variable for content on warning subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-warning</td>
    <td colspan="2">The text color variable for content on warning.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle</td>
    <td colspan="2">The error subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-hover</td>
    <td colspan="2">The error subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-active</td>
    <td colspan="2">The error subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error</td>
    <td colspan="2">The error background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-hover</td>
    <td colspan="2">The error background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-active</td>
    <td colspan="2">The error background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-emphasis</td>
    <td colspan="2">The emphasized error color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-subtle</td>
    <td colspan="2">The text color variable for content on error subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-error</td>
    <td colspan="2">The text color variable for content on error.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle</td>
    <td colspan="2">The light subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-hover</td>
    <td colspan="2">The light subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-active</td>
    <td colspan="2">The light subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light</td>
    <td colspan="2">The light background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-hover</td>
    <td colspan="2">The light background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-active</td>
    <td colspan="2">The light background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-emphasis</td>
    <td colspan="2">The emphasized light color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-subtle</td>
    <td colspan="2">The text color variable for content on light subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-light</td>
    <td colspan="2">The text color variable for content on light.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle</td>
    <td colspan="2">The dark subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-hover</td>
    <td colspan="2">The dark subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-active</td>
    <td colspan="2">The dark subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark</td>
    <td colspan="2">The dark background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-hover</td>
    <td colspan="2">The dark background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-active</td>
    <td colspan="2">The dark background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-emphasis</td>
    <td colspan="2">The emphasized dark color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-subtle</td>
    <td colspan="2">The text color variable for content on dark subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-dark</td>
    <td colspan="2">The text color variable for content on dark.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle</td>
    <td colspan="2">The inverse subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-hover</td>
    <td colspan="2">The inverse subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-active</td>
    <td colspan="2">The inverse subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse</td>
    <td colspan="2">The inverse background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-hover</td>
    <td colspan="2">The inverse background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-active</td>
    <td colspan="2">The inverse background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-emphasis</td>
    <td colspan="2">The emphasized inverse color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-subtle</td>
    <td colspan="2">The text color variable for content on inverse subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-inverse</td>
    <td colspan="2">The text color variable for content on inverse.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series</td>
    <td colspan="2">The base series color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a</td>
    <td colspan="2">The series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bold</td>
    <td colspan="2">The bold series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bolder</td>
    <td colspan="2">The bolder series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtle</td>
    <td colspan="2">The subtle series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtler</td>
    <td colspan="2">The subtler series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b</td>
    <td colspan="2">The series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bold</td>
    <td colspan="2">The bold series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bolder</td>
    <td colspan="2">The bolder series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtle</td>
    <td colspan="2">The subtle series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtler</td>
    <td colspan="2">The subtler series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c</td>
    <td colspan="2">The series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bold</td>
    <td colspan="2">The bold series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bolder</td>
    <td colspan="2">The bolder series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtle</td>
    <td colspan="2">The subtle series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtler</td>
    <td colspan="2">The subtler series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d</td>
    <td colspan="2">The series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bold</td>
    <td colspan="2">The bold series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bolder</td>
    <td colspan="2">The bolder series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtle</td>
    <td colspan="2">The subtle series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtler</td>
    <td colspan="2">The subtler series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e</td>
    <td colspan="2">The series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bold</td>
    <td colspan="2">The bold series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bolder</td>
    <td colspan="2">The bolder series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtle</td>
    <td colspan="2">The subtle series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtler</td>
    <td colspan="2">The subtler series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f</td>
    <td colspan="2">The series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bold</td>
    <td colspan="2">The bold series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bolder</td>
    <td colspan="2">The bolder series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtle</td>
    <td colspan="2">The subtle series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtler</td>
    <td colspan="2">The subtler series F color variable.</td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

