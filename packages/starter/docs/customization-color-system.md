---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Starter theme variables available for customization."
slug: variables_kendothemestarter_color-system
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
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><ul><li>app-surface: oklch(100% 0 0deg)</li><li>on-app-surface: oklch(from var(--kendo-color-app-surface) clamp(0.2836, (0.65 - l) * 99999, 0.95) 0.0243 calc(h + 261.13))</li><li>subtle: oklch(55.44% 0.0407 257.42deg)</li><li>surface: oklch(98.46% 0.0017 247.84deg)</li><li>surface-alt: oklch(from var(--kendo-color-surface) 1 0 h)</li><li>border: oklch(79.5% 0.0197 255.55deg / 0.35)</li><li>border-alt: oklch(79.5% 0.0197 255.55deg / 0.5)</li><li>base-subtle: oklch(from var(--kendo-color-base) clamp(0.01, calc(l + clamp(-0.0182, (0.35 - l) * 99999, 0.0182)), 0.99) calc(c + 0.0028) calc(h + 7.62))</li><li>base-subtle-hover: oklch(from var(--kendo-color-base) clamp(0.02, calc(l + clamp(-0.0395, (0.35 - l) * 99999, 0.0395)), 0.98) calc(c + 0.0058) calc(h + 10.48))</li><li>base-subtle-active: oklch(from var(--kendo-color-base) clamp(0.03, calc(l + clamp(-0.0673, (0.35 - l) * 99999, 0.0673)), 0.97) calc(c + 0.0076) calc(h + 8.84))</li><li>base: oklch(96.92% 0.0034 247.86deg)</li><li>base-hover: oklch(from var(--kendo-color-base) clamp(0.01, calc(l + clamp(-0.0395, (0.35 - l) * 99999, 0.0395)), 0.99) calc(c + 0.0058) calc(h + 10.48))</li><li>base-active: oklch(from var(--kendo-color-base) clamp(0.02, calc(l + clamp(-0.0673, (0.35 - l) * 99999, 0.0673)), 0.98) calc(c + 0.0076) calc(h + 8.84))</li><li>base-emphasis: oklch(from var(--kendo-color-base) clamp(0.05, calc(l + clamp(-0.0984, (0.35 - l) * 99999, 0.0984)), 0.95) calc(c + 0.0094) calc(h + 7.65))</li><li>base-on-subtle: oklch(from var(--kendo-color-base) clamp(0.2836, (0.65 - l) * 99999, 0.95) 0.0243 calc(h + 13.28))</li><li>on-base: oklch(from var(--kendo-color-base) clamp(0.2836, (0.65 - l) * 99999, 0.95) 0.0243 calc(h + 13.28))</li><li>base-on-surface: oklch(from var(--kendo-color-base) clamp(0.2836, (0.65 - l) * 99999, 0.95) 0.0243 calc(h + 13.28))</li><li>primary-subtle: oklch(from var(--kendo-color-primary) calc(l + 0.5966) calc(c - 0.0323) calc(h - 9.39))</li><li>primary-subtle-hover: oklch(from var(--kendo-color-primary) calc(l + 0.5784) calc(c - 0.0295) calc(h - 4.47))</li><li>primary-subtle-active: oklch(from var(--kendo-color-primary) calc(l + 0.5571) calc(c - 0.0265) calc(h - 1.78))</li><li>primary: oklch(37.17% 0.0392 257.29deg)</li><li>primary-hover: oklch(from var(--kendo-color-primary) max(0.15, calc(l + clamp(-0.0922, (0.35 - l) * 99999, 0.0922))) calc(c - 0.0023) calc(h + 2.74))</li><li>primary-active: oklch(from var(--kendo-color-primary) max(0.20, calc(l + clamp(-0.1640, (0.35 - l) * 99999, 0.1640))) calc(c + 0.0007) calc(h + 8.47))</li><li>primary-emphasis: oklch(from var(--kendo-color-primary) calc(l + 0.4973) calc(c - 0.0193) calc(h - 4.39))</li><li>primary-on-subtle: oklch(from var(--kendo-color-primary) calc(l - 0.2429) calc(c + 0.0014) calc(h + 7.41))</li><li>on-primary: oklch(from var(--kendo-color-primary) clamp(0.10, (0.65 - l) * 99999, 1) 0 h)</li><li>primary-on-surface: oklch(from var(--kendo-color-primary) clamp(0.20, calc(l - 0.0922), 0.60) calc(c - 0.0023) calc(h + 2.74))</li><li>secondary-subtle: oklch(from var(--kendo-color-secondary) calc(l + 0.4027) calc(c - 0.1869) calc(h + 7.65))</li><li>secondary-subtle-hover: oklch(from var(--kendo-color-secondary) calc(l + 0.3749) calc(c - 0.1730) calc(h + 6.61))</li><li>secondary-subtle-active: oklch(from var(--kendo-color-secondary) calc(l + 0.3424) calc(c - 0.1561) calc(h + 7.13))</li><li>secondary: oklch(54.53% 0.2124 275.85deg)</li><li>secondary-hover: oklch(from var(--kendo-color-secondary) max(0.15, calc(l + clamp(-0.0569, (0.35 - l) * 99999, 0.0569))) calc(c - 0.0174) calc(h - 0.42))</li><li>secondary-active: oklch(from var(--kendo-color-secondary) max(0.20, calc(l + clamp(-0.1233, (0.35 - l) * 99999, 0.1233))) calc(c - 0.0417) calc(h - 0.77))</li><li>secondary-emphasis: oklch(from var(--kendo-color-secondary) calc(l + 0.2519) calc(c - 0.1078) calc(h + 5.50))</li><li>secondary-on-subtle: oklch(from var(--kendo-color-secondary) calc(l - 0.2705) calc(c - 0.1041) h)</li><li>on-secondary: oklch(from var(--kendo-color-secondary) clamp(0.10, (0.65 - l) * 99999, 1) 0 h)</li><li>secondary-on-surface: oklch(from var(--kendo-color-secondary) clamp(0.20, calc(l - 0.1233), 0.60) calc(c - 0.0417) calc(h - 0.77))</li><li>tertiary-subtle: oklch(from var(--kendo-color-tertiary) calc(l + 0.1308) calc(c - 0.0793) calc(h + 3.78))</li><li>tertiary-subtle-hover: oklch(from var(--kendo-color-tertiary) calc(l + 0.1097) calc(c - 0.0665) calc(h + 0.96))</li><li>tertiary-subtle-active: oklch(from var(--kendo-color-tertiary) calc(l + 0.0830) calc(c - 0.0486) calc(h + 0.87))</li><li>tertiary: oklch(83.18% 0.1046 310.19deg)</li><li>tertiary-hover: oklch(from var(--kendo-color-tertiary) max(0.15, calc(l + clamp(-0.0551, (0.35 - l) * 99999, 0.0551))) calc(c + 0.0342) h)</li><li>tertiary-active: oklch(from var(--kendo-color-tertiary) max(0.20, calc(l + clamp(-0.1072, (0.35 - l) * 99999, 0.1072))) calc(c + 0.0681) calc(h + 0.48))</li><li>tertiary-emphasis: oklch(from var(--kendo-color-tertiary) calc(l - 0.1072) calc(c + 0.0681) calc(h + 0.48))</li><li>tertiary-on-subtle: oklch(from var(--kendo-color-tertiary) calc(l - 0.4562) calc(c + 0.0303) h)</li><li>on-tertiary: oklch(from var(--kendo-color-tertiary) clamp(0.2783, (0.65 - l) * 99999, 0.95) 0.0970 h)</li><li>tertiary-on-surface: oklch(from var(--kendo-color-tertiary) clamp(0.20, calc(l - 0.4562), 0.60) calc(c + 0.0303) h)</li><li>info-subtle: oklch(from var(--kendo-color-info) calc(l + 0.3276) calc(c - 0.0923) calc(h - 12.89))</li><li>info-subtle-hover: oklch(from var(--kendo-color-info) calc(l + 0.2710) calc(c - 0.0723) calc(h - 12.07))</li><li>info-subtle-active: oklch(from var(--kendo-color-info) calc(l + 0.2166) calc(c - 0.0535) calc(h - 9.52))</li><li>info: oklch(56.43% 0.131 241.46deg)</li><li>info-hover: oklch(from var(--kendo-color-info) max(0.15, calc(l + clamp(-0.0362, (0.35 - l) * 99999, 0.0362))) calc(c - 0.0083) calc(h - 0.10))</li><li>info-active: oklch(from var(--kendo-color-info) max(0.20, calc(l + clamp(-0.0735, (0.35 - l) * 99999, 0.0735))) calc(c - 0.0181) calc(h - 0.68))</li><li>info-emphasis: oklch(from var(--kendo-color-info) calc(l + 0.1218) calc(c - 0.0235) calc(h - 8.04))</li><li>info-on-subtle: oklch(from var(--kendo-color-info) calc(l - 0.1490) calc(c - 0.0360) calc(h - 0.92))</li><li>on-info: oklch(from var(--kendo-color-info) clamp(0.10, (0.65 - l) * 99999, 1) 0 h)</li><li>info-on-surface: oklch(from var(--kendo-color-info) clamp(0.20, calc(l - 0.0735), 0.60) calc(c - 0.0181) calc(h - 0.68))</li><li>success-subtle: oklch(from var(--kendo-color-success) calc(l + 0.3820) calc(c - 0.0756) calc(h + 10.01))</li><li>success-subtle-hover: oklch(from var(--kendo-color-success) calc(l + 0.3257) calc(c - 0.0510) calc(h + 9.38))</li><li>success-subtle-active: oklch(from var(--kendo-color-success) calc(l + 0.2724) calc(c - 0.0300) calc(h + 7.48))</li><li>success: oklch(51.46% 0.1066 163.53deg)</li><li>success-hover: oklch(from var(--kendo-color-success) max(0.15, calc(l + clamp(-0.0369, (0.35 - l) * 99999, 0.0369))) calc(c - 0.0071) h)</li><li>success-active: oklch(from var(--kendo-color-success) max(0.20, calc(l + clamp(-0.0744, (0.35 - l) * 99999, 0.0744))) calc(c - 0.0145) calc(h - 0.12))</li><li>success-emphasis: oklch(from var(--kendo-color-success) calc(l + 0.1725) calc(c - 0.0033) calc(h + 5.16))</li><li>success-on-subtle: oklch(from var(--kendo-color-success) calc(l - 0.1550) calc(c - 0.0314) calc(h + 0.29))</li><li>on-success: oklch(from var(--kendo-color-success) clamp(0.10, (0.65 - l) * 99999, 1) 0 h)</li><li>success-on-surface: oklch(from var(--kendo-color-success) clamp(0.20, calc(l - 0.1126), 0.60) calc(c - 0.0222) calc(h - 0.26))</li><li>warning-subtle: oklch(from var(--kendo-color-warning) calc(l + 0.0793) calc(c - 0.1084) calc(h + 1.96))</li><li>warning-subtle-hover: oklch(from var(--kendo-color-warning) calc(l + 0.0637) calc(c - 0.0833) calc(h + 1.54))</li><li>warning-subtle-active: oklch(from var(--kendo-color-warning) calc(l + 0.0517) calc(c - 0.0593) calc(h + 1.36))</li><li>warning: oklch(88.34% 0.1817 99deg)</li><li>warning-hover: oklch(from var(--kendo-color-warning) max(0.15, calc(l + clamp(-0.0334, (0.35 - l) * 99999, 0.0334))) calc(c - 0.0069) calc(h - 0.16))</li><li>warning-active: oklch(from var(--kendo-color-warning) max(0.20, calc(l + clamp(-0.0672, (0.35 - l) * 99999, 0.0672))) calc(c - 0.0138) calc(h - 0.33))</li><li>warning-emphasis: oklch(from var(--kendo-color-warning) calc(l + 0.0283) calc(c - 0.0228) calc(h + 1.42))</li><li>warning-on-subtle: oklch(from var(--kendo-color-warning) calc(l - 0.5998) calc(c - 0.1574) calc(h + 162.13))</li><li>on-warning: oklch(from var(--kendo-color-warning) clamp(0.2836, (0.65 - l) * 99999, 0.95) 0.0243 calc(h + 162.13))</li><li>warning-on-surface: oklch(from var(--kendo-color-warning) clamp(0.20, calc(l - 0.5998), 0.60) calc(c - 0.1574) calc(h + 162.13))</li><li>error-subtle: oklch(from var(--kendo-color-error) calc(l + 0.3868) calc(c - 0.1565) calc(h - 14.72))</li><li>error-subtle-hover: oklch(from var(--kendo-color-error) calc(l + 0.3203) calc(c - 0.1250) calc(h - 13.80))</li><li>error-subtle-active: oklch(from var(--kendo-color-error) calc(l + 0.2580) calc(c - 0.0932) calc(h - 12.78))</li><li>error: oklch(51.01% 0.1951 14.31deg)</li><li>error-hover: oklch(from var(--kendo-color-error) max(0.15, calc(l + clamp(-0.0415, (0.35 - l) * 99999, 0.0415))) calc(c - 0.0154) calc(h + 0.39))</li><li>error-active: oklch(from var(--kendo-color-error) max(0.20, calc(l + clamp(-0.0851, (0.35 - l) * 99999, 0.0851))) calc(c - 0.0324) calc(h - 0.19))</li><li>error-emphasis: oklch(from var(--kendo-color-error) calc(l + 0.1479) calc(c - 0.0349) calc(h - 9.11))</li><li>error-on-subtle: oklch(from var(--kendo-color-error) calc(l - 0.1281) calc(c - 0.0490) calc(h - 0.16))</li><li>on-error: oklch(from var(--kendo-color-error) clamp(0.10, (0.65 - l) * 99999, 1) 0 h)</li><li>error-on-surface: oklch(from var(--kendo-color-error) clamp(0.20, calc(l - 0.0415), 0.60) calc(c - 0.0154) calc(h + 0.39))</li><li>inverse-subtle: oklch(from var(--kendo-color-inverse) calc(l + 0.5871) calc(c - 0.0115) calc(h - 5.62))</li><li>inverse-subtle-hover: oklch(from var(--kendo-color-inverse) calc(l + 0.5114) calc(c - 0.0046) calc(h - 5.58))</li><li>inverse-subtle-active: oklch(from var(--kendo-color-inverse) calc(l + 0.4312) calc(c + 0.0009) calc(h - 5.00))</li><li>inverse: oklch(28.36% 0.0243 261.13deg)</li><li>inverse-hover: oklch(from var(--kendo-color-inverse) calc(l - 0.0689) calc(c - 0.0017) calc(h + 7.83))</li><li>inverse-active: oklch(from var(--kendo-color-inverse) calc(l - 0.1452) calc(c + 0.0006) calc(h + 12.11))</li><li>inverse-emphasis: oklch(from var(--kendo-color-inverse) calc(l + 0.4312) calc(c + 0.0009) calc(h - 5.00))</li><li>inverse-on-subtle: oklch(from var(--kendo-color-inverse) calc(l - 0.1452) calc(c + 0.0006) calc(h + 12.11))</li><li>on-inverse: oklch(from var(--kendo-color-inverse) clamp(0.10, (0.75 - l) * 99999, 1) 0 h)</li><li>inverse-on-surface: oklch(from var(--kendo-color-inverse) calc(l - 0.1452) calc(c + 0.0006) calc(h + 12.11))</li><li>series: oklch(54.53% 0.2124 275.85deg)</li><li>series-a: var(--kendo-color-series)</li><li>series-a-bold: oklch(from var(--kendo-color-series-a) calc(l - 0.1233) calc(c - 0.0417) calc(h - 0.77))</li><li>series-a-bolder: oklch(from var(--kendo-color-series-a) calc(l - 0.1945) calc(c - 0.0713) calc(h - 0.52))</li><li>series-a-subtle: oklch(from var(--kendo-color-series-a) calc(l + 0.1176) calc(c - 0.0308) calc(h + 2.64))</li><li>series-a-subtler: oklch(from var(--kendo-color-series-a) calc(l + 0.2519) calc(c - 0.1078) calc(h + 5.50))</li><li>series-b: oklch(from var(--kendo-color-series) calc(l + 0.0868) calc(c + 0.0134) calc(h + 34.73))</li><li>series-b-bold: oklch(from var(--kendo-color-series-b) calc(l - 0.1664) calc(c - 0.0541) h)</li><li>series-b-bolder: oklch(from var(--kendo-color-series-b) calc(l - 0.2565) calc(c - 0.0909) calc(h - 0.37))</li><li>series-b-subtle: oklch(from var(--kendo-color-series-b) calc(l + 0.0925) calc(c - 0.0531) h)</li><li>series-b-subtler: oklch(from var(--kendo-color-series-b) calc(l + 0.1997) calc(c - 0.1212) calc(h - 0.39))</li><li>series-c: oklch(from var(--kendo-color-series) calc(l + 0.1534) calc(c - 0.0058) calc(h + 86.96))</li><li>series-c-bold: oklch(from var(--kendo-color-series-c) calc(l - 0.1333) calc(c - 0.0427) calc(h - 0.57))</li><li>series-c-bolder: oklch(from var(--kendo-color-series-c) calc(l - 0.2736) calc(c - 0.0877) calc(h - 0.57))</li><li>series-c-subtle: oklch(from var(--kendo-color-series-c) calc(l + 0.0604) calc(c - 0.0487) calc(h - 3.57))</li><li>series-c-subtler: oklch(from var(--kendo-color-series-c) calc(l + 0.1339) calc(c - 0.1035) calc(h - 5.82))</li><li>series-d: oklch(from var(--kendo-color-series) calc(l + 0.2229) calc(c - 0.0482) calc(h - 122.72))</li><li>series-d-bold: oklch(from var(--kendo-color-series-d) calc(l - 0.1462) calc(c - 0.0334) h)</li><li>series-d-bolder: oklch(from var(--kendo-color-series-d) calc(l - 0.3015) calc(c - 0.0691) calc(h + 0.38))</li><li>series-d-subtle: oklch(from var(--kendo-color-series-d) calc(l + 0.0522) calc(c - 0.0354) calc(h + 2.32))</li><li>series-d-subtler: oklch(from var(--kendo-color-series-d) calc(l + 0.1078) calc(c - 0.0775) calc(h + 4.33))</li><li>series-e: oklch(from var(--kendo-color-series) calc(l + 0.3660) calc(c - 0.0645) calc(h - 179.84))</li><li>series-e-bold: oklch(from var(--kendo-color-series-e) calc(l - 0.1759) calc(c - 0.0305) calc(h + 0.31))</li><li>series-e-bolder: oklch(from var(--kendo-color-series-e) calc(l - 0.3623) calc(c - 0.0621) h)</li><li>series-e-subtle: oklch(from var(--kendo-color-series-e) calc(l + 0.0206) calc(c - 0.0289) calc(h + 0.79))</li><li>series-e-subtler: oklch(from var(--kendo-color-series-e) calc(l + 0.0411) calc(c - 0.0664) calc(h + 0.31))</li><li>series-f: oklch(from var(--kendo-color-series) calc(l + 0.1532) calc(c - 0.0202) calc(h + 111.34))</li><li>series-f-bold: oklch(from var(--kendo-color-series-f) calc(l - 0.1947) calc(c - 0.0581) h)</li><li>series-f-bolder: oklch(from var(--kendo-color-series-f) calc(l - 0.3643) calc(c - 0.1031) calc(h - 0.41))</li><li>series-f-subtle: oklch(from var(--kendo-color-series-f) calc(l + 0.0613) calc(c - 0.0491) calc(h - 2.12))</li><li>series-f-subtler: oklch(from var(--kendo-color-series-f) calc(l + 0.1348) calc(c - 0.1001) calc(h - 3.88))</li></ul></td>
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
    <td colspan="2">The base series color variable. Series A equals this value.</td>
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
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

