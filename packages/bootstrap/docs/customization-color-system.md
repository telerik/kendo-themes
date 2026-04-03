---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_color-system
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
    <td><ul><li>app-surface: oklch(100% 0 0deg)</li><li>on-app-surface: oklch(from var(--kendo-color-app-surface) clamp(0.2621, (0.6 - l) * 99999, 0.95) 0.0095 248.23deg)</li><li>subtle: oklch(47.71% 0.014 240.22deg)</li><li>surface: oklch(98.16% 0.0018 248.57deg)</li><li>surface-alt: oklch(from var(--kendo-color-surface) calc(l + 0.02) c h)</li><li>border: oklch(26.21% 0.0095 248.23deg / 0.13)</li><li>border-alt: oklch(26.21% 0.0095 248.23deg / 0.2)</li><li>base-subtle: oklch(from var(--kendo-color-base) calc(l + 0.031) c h)</li><li>base-subtle-hover: oklch(from var(--kendo-color-base) l c h)</li><li>base-subtle-active: oklch(from var(--kendo-color-base) calc(l - 0.044) c h)</li><li>base: oklch(91.09% 0.007 247.9deg)</li><li>base-hover: oklch(from var(--kendo-color-base) calc(l - 0.044) c h)</li><li>base-active: oklch(from var(--kendo-color-base) calc(l - 0.094) c h)</li><li>base-emphasis: oklch(from var(--kendo-color-on-app-surface) l c h / 0.34)</li><li>base-on-subtle: oklch(from var(--kendo-color-base) clamp(0.2621, (0.6 - l) * 99999, 0.95) 0.0095 248.23deg)</li><li>on-base: oklch(from var(--kendo-color-base) clamp(0.2621, (0.6 - l) * 99999, 0.95) 0.0095 248.23deg)</li><li>base-on-surface: oklch(from var(--kendo-color-base) clamp(0.2621, (0.6 - l) * 99999, 0.95) 0.0095 248.23deg)</li><li>primary-subtle: oklch(from var(--kendo-color-primary) 0.908 calc(c * 0.196) h)</li><li>primary-subtle-hover: oklch(from var(--kendo-color-primary) 0.868 calc(c * 0.280) h)</li><li>primary-subtle-active: oklch(from var(--kendo-color-primary) 0.816 calc(c * 0.400) h)</li><li>primary: oklch(57.82% 0.2283 260.03deg)</li><li>primary-hover: oklch(from var(--kendo-color-primary) calc(l - 0.0633) calc(c - 0.0285) h)</li><li>primary-active: oklch(from var(--kendo-color-primary) calc(l - 0.0865) calc(c - 0.0379) h)</li><li>primary-emphasis: oklch(from var(--kendo-color-primary) l c h / 0.40)</li><li>primary-on-subtle: oklch(from var(--kendo-color-primary) calc(l * 0.530) calc(c * 0.478) h)</li><li>on-primary: oklch(from var(--kendo-color-primary) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>primary-on-surface: oklch(from var(--kendo-color-primary) l c h)</li><li>secondary-subtle: oklch(from var(--kendo-color-secondary) 0.916 calc(c * 0.182) h)</li><li>secondary-subtle-hover: oklch(from var(--kendo-color-secondary) 0.870 calc(c * 0.109) h)</li><li>secondary-subtle-active: oklch(from var(--kendo-color-secondary) 0.829 calc(c * 0.115) h)</li><li>secondary: oklch(55.75% 0.0165 244.95deg)</li><li>secondary-hover: oklch(from var(--kendo-color-secondary) calc(l - 0.0615) c h)</li><li>secondary-active: oklch(from var(--kendo-color-secondary) calc(l - 0.0804) c h)</li><li>secondary-emphasis: oklch(from var(--kendo-color-secondary) calc(l - 0.0615) calc(c - 0.0023) h / 0.40)</li><li>secondary-on-subtle: oklch(from var(--kendo-color-secondary) clamp(0.3024, (0.55 - l) * 99999, 0.95) 0 h)</li><li>on-secondary: oklch(from var(--kendo-color-secondary) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>secondary-on-surface: oklch(from var(--kendo-color-secondary) calc(l - 0.0615) c h)</li><li>tertiary-subtle: oklch(from var(--kendo-color-tertiary) 0.900 calc(c * 0.194) h)</li><li>tertiary-subtle-hover: oklch(from var(--kendo-color-tertiary) 0.847 calc(c * 0.295) h)</li><li>tertiary-subtle-active: oklch(from var(--kendo-color-tertiary) 0.799 calc(c * 0.391) h)</li><li>tertiary: oklch(50.15% 0.1884 294.99deg)</li><li>tertiary-hover: oklch(from var(--kendo-color-tertiary) calc(l - 0.0724) calc(c - 0.0317) h)</li><li>tertiary-active: oklch(from var(--kendo-color-tertiary) calc(l - 0.147) calc(c - 0.0638) h)</li><li>tertiary-emphasis: oklch(from var(--kendo-color-tertiary) calc(l + 0.0522) calc(c - 0.0232) h / 0.40)</li><li>tertiary-on-subtle: oklch(from var(--kendo-color-tertiary) calc(l * 0.542) calc(c * 0.479) h)</li><li>on-tertiary: oklch(from var(--kendo-color-tertiary) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>tertiary-on-surface: oklch(from var(--kendo-color-tertiary) calc(l + 0.0522) calc(c - 0.0232) h)</li><li>info-subtle: oklch(from var(--kendo-color-info) 0.943 calc(c * 0.288) h)</li><li>info-subtle-hover: oklch(from var(--kendo-color-info) 0.915 calc(c * 0.422) h)</li><li>info-subtle-active: oklch(from var(--kendo-color-info) 0.893 calc(c * 0.562) h)</li><li>info: oklch(77.49% 0.138 218.08deg)</li><li>info-hover: oklch(from var(--kendo-color-info) calc(l + 0.0235) calc(c - 0.0061) h)</li><li>info-active: oklch(from var(--kendo-color-info) calc(l + 0.033) calc(c - 0.0093) h)</li><li>info-emphasis: oklch(from var(--kendo-color-info) l c h / 0.40)</li><li>info-on-subtle: oklch(from var(--kendo-color-info) calc(l * 0.518) calc(c * 0.504) h)</li><li>on-info: oklch(from var(--kendo-color-info) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>info-on-surface: oklch(from var(--kendo-color-info) l c h)</li><li>success-subtle: oklch(from var(--kendo-color-success) 0.909 calc(c * 0.218) h)</li><li>success-subtle-hover: oklch(from var(--kendo-color-success) 0.863 calc(c * 0.328) h)</li><li>success-subtle-active: oklch(from var(--kendo-color-success) 0.818 calc(c * 0.439) h)</li><li>success: oklch(55.2% 0.1234 157.04deg)</li><li>success-hover: oklch(from var(--kendo-color-success) calc(l - 0.0598) calc(c - 0.0139) h)</li><li>success-active: oklch(from var(--kendo-color-success) calc(l - 0.081) calc(c - 0.0196) h)</li><li>success-emphasis: oklch(from var(--kendo-color-success) l c h / 0.40)</li><li>success-on-subtle: oklch(from var(--kendo-color-success) calc(l * 0.538) calc(c * 0.485) h)</li><li>on-success: oklch(from var(--kendo-color-success) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>success-on-surface: oklch(from var(--kendo-color-success) l c h)</li><li>warning-subtle: oklch(from var(--kendo-color-warning) 0.964 calc(c * 0.296) h)</li><li>warning-subtle-hover: oklch(from var(--kendo-color-warning) 0.945 calc(c * 0.425) h)</li><li>warning-subtle-active: oklch(from var(--kendo-color-warning) 0.929 calc(c * 0.560) h)</li><li>warning: oklch(84.42% 0.1721 84.94deg)</li><li>warning-hover: oklch(from var(--kendo-color-warning) calc(l + 0.0182) calc(c - 0.0055) h)</li><li>warning-active: oklch(from var(--kendo-color-warning) calc(l + 0.0246) calc(c - 0.0098) h)</li><li>warning-emphasis: oklch(from var(--kendo-color-warning) l c h / 0.40)</li><li>warning-on-subtle: oklch(from var(--kendo-color-warning) calc(l * 0.515) calc(c * 0.508) h)</li><li>on-warning: oklch(from var(--kendo-color-warning) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>warning-on-surface: oklch(from var(--kendo-color-warning) l c h)</li><li>error-subtle: oklch(from var(--kendo-color-error) 0.908 calc(c * 0.183) h)</li><li>error-subtle-hover: oklch(from var(--kendo-color-error) 0.861 calc(c * 0.291) h)</li><li>error-subtle-active: oklch(from var(--kendo-color-error) 0.816 calc(c * 0.391) h)</li><li>error: oklch(59.16% 0.202 21.23deg)</li><li>error-hover: oklch(from var(--kendo-color-error) calc(l - 0.0662) calc(c - 0.0245) h)</li><li>error-active: oklch(from var(--kendo-color-error) calc(l - 0.0892) calc(c - 0.0325) h)</li><li>error-emphasis: oklch(from var(--kendo-color-error) l c h / 0.40)</li><li>error-on-subtle: oklch(from var(--kendo-color-error) calc(l * 0.527) calc(c * 0.483) h)</li><li>on-error: oklch(from var(--kendo-color-error) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>error-on-surface: oklch(from var(--kendo-color-error) l c h)</li><li>light-subtle: oklch(99.13% 0.0014 285deg)</li><li>light-subtle-hover: oklch(94.31% 0.0001 263.28deg)</li><li>light-subtle-active: oklch(94.17% 0.0053 248.12deg)</li><li>light: oklch(98.16% 0.0018 248.57deg)</li><li>light-hover: oklch(86.95% 0.0018 248.47deg)</li><li>light-active: oklch(82.92% 0.0019 248.44deg)</li><li>light-emphasis: oklch(26.21% 0.0095 248.23deg / 0.1)</li><li>light-on-subtle: oklch(42.76% 0.0147 248.21deg)</li><li>on-light: oklch(0% 0 0deg)</li><li>light-on-surface: oklch(98.16% 0.0018 248.57deg)</li><li>dark-subtle: oklch(86.71% 0.0106 248.06deg)</li><li>dark-subtle-hover: oklch(81.7% 0.0126 248.07deg)</li><li>dark-subtle-active: oklch(76.92% 0.0146 248.09deg)</li><li>dark: oklch(26.21% 0.0095 248.23deg)</li><li>dark-hover: oklch(39.15% 0.0074 240.11deg)</li><li>dark-active: oklch(43.24% 0.0072 240.09deg)</li><li>dark-emphasis: oklch(26.21% 0.0095 248.23deg / 0.4)</li><li>dark-on-subtle: oklch(42.76% 0.0147 248.21deg)</li><li>on-dark: oklch(100% 0 0deg)</li><li>dark-on-surface: oklch(26.21% 0.0095 248.23deg)</li><li>inverse-subtle: oklch(from var(--kendo-color-inverse) calc(l + 0.1655) c h)</li><li>inverse-subtle-hover: oklch(from var(--kendo-color-inverse) calc(l + 0.215) c h)</li><li>inverse-subtle-active: oklch(from var(--kendo-color-inverse) calc(l + 0.2339) c h)</li><li>inverse: oklch(26.21% 0.0095 248.23deg)</li><li>inverse-hover: oklch(from var(--kendo-color-inverse) calc(l + 0.083) c h)</li><li>inverse-active: oklch(from var(--kendo-color-inverse) calc(l + 0.1655) c h)</li><li>inverse-emphasis: oklch(from var(--kendo-color-inverse) l c h / 0.40)</li><li>inverse-on-subtle: oklch(from var(--kendo-color-inverse) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>on-inverse: oklch(from var(--kendo-color-inverse) clamp(0, (0.7 - l) * 99999, 1) 0 h)</li><li>inverse-on-surface: oklch(from var(--kendo-color-inverse) l c h)</li><li>series: oklch(51.49% 0.1998 259.81deg)</li><li>series-a: var(--kendo-color-series)</li><li>series-a-bold: oklch(from var(--kendo-color-series-a) calc(l * 0.781) calc(c * 0.760) h)</li><li>series-a-bolder: oklch(from var(--kendo-color-series-a) calc(l * 0.595) calc(c * 0.547) h)</li><li>series-a-subtle: oklch(from var(--kendo-color-series-a) calc(l * 1.257) calc(c * 0.933) h)</li><li>series-a-subtler: oklch(from var(--kendo-color-series-a) calc(l * 1.497) calc(c * 0.581) h)</li><li>series-b: oklch(from var(--kendo-color-series) calc(l + 0.0388) calc(c - 0.0346) calc(h + 36.75))</li><li>series-b-bold: oklch(from var(--kendo-color-series-b) calc(l * 0.775) calc(c * 0.949) h)</li><li>series-b-bolder: oklch(from var(--kendo-color-series-b) calc(l * 0.561) calc(c * 0.639) h)</li><li>series-b-subtle: oklch(from var(--kendo-color-series-b) calc(l * 1.081) calc(c * 0.917) h)</li><li>series-b-subtler: oklch(from var(--kendo-color-series-b) calc(l * 1.366) calc(c * 0.548) h)</li><li>series-c: oklch(from var(--kendo-color-series) calc(l + 0.2292) calc(c - 0.0518) calc(h - 93.42))</li><li>series-c-bold: oklch(from var(--kendo-color-series-c) calc(l * 0.690) calc(c * 0.675) h)</li><li>series-c-bolder: oklch(from var(--kendo-color-series-c) calc(l * 0.518) calc(c * 0.491) h)</li><li>series-c-subtle: oklch(from var(--kendo-color-series-c) calc(l * 1.120) calc(c * 0.715) h)</li><li>series-c-subtler: oklch(from var(--kendo-color-series-c) calc(l * 1.234) calc(c * 0.351) h)</li><li>series-d: oklch(from var(--kendo-color-series) calc(l + 0.0371) calc(c - 0.0764) calc(h - 102.77))</li><li>series-d-bold: oklch(from var(--kendo-color-series-d) calc(l * 0.853) calc(c * 0.841) h)</li><li>series-d-bolder: oklch(from var(--kendo-color-series-d) calc(l * 0.538) calc(c * 0.485) h)</li><li>series-d-subtle: oklch(from var(--kendo-color-series-d) calc(l * 1.154) calc(c * 0.858) h)</li><li>series-d-subtler: oklch(from var(--kendo-color-series-d) calc(l * 1.398) calc(c * 0.549) h)</li><li>series-e: oklch(from var(--kendo-color-series) calc(l + 0.0767) calc(c + 0.0022) calc(h + 121.42))</li><li>series-e-bold: oklch(from var(--kendo-color-series-e) calc(l * 0.849) calc(c * 0.839) h)</li><li>series-e-bolder: oklch(from var(--kendo-color-series-e) calc(l * 0.613) calc(c * 0.573) h)</li><li>series-e-subtle: oklch(from var(--kendo-color-series-e) calc(l * 1.103) calc(c * 0.826) h)</li><li>series-e-subtler: oklch(from var(--kendo-color-series-e) calc(l * 1.378) calc(c * 0.391) h)</li><li>series-f: oklch(from var(--kendo-color-series) calc(l + 0.3293) calc(c - 0.0277) calc(h - 174.87))</li><li>series-f-bold: oklch(from var(--kendo-color-series-f) calc(l * 0.768) calc(c * 0.765) h)</li><li>series-f-bolder: oklch(from var(--kendo-color-series-f) calc(l * 0.604) calc(c * 0.598) h)</li><li>series-f-subtle: oklch(from var(--kendo-color-series-f) calc(l * 1.022) calc(c * 0.968) h)</li><li>series-f-subtler: oklch(from var(--kendo-color-series-f) calc(l * 1.064) calc(c * 0.793) h)</li></ul></td>
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

