---
title: Customizing Orgchart
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_orgchart
position: 9
---

# Customizing Orgchart

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
    <td>$kendo-orgchart-spacer</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-spacer, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing index of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-padding-y, #{$kendo-orgchart-spacer} )</code></td>
    <td><code>var(--kendo-orgchart-padding-y, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-padding-x, #{$kendo-orgchart-padding-y} )</code></td>
    <td><code>var(--kendo-orgchart-padding-x, var(--kendo-orgchart-padding-y, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-orgchart-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-bg</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-orgchart-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-text</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-orgchart-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-border</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-orgchart-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-spacing, #{$kendo-orgchart-spacer} )</code></td>
    <td><code>var(--kendo-orgchart-node-spacing, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-group-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-group-spacing, #{$kendo-orgchart-spacer} )</code></td>
    <td><code>var(--kendo-orgchart-group-spacing, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the OrgChart group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-padding-y, #{$kendo-orgchart-spacer} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-padding-y, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-padding-x, #{$kendo-orgchart-node-group-padding-y} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-padding-x, var(--kendo-orgchart-node-group-padding-y, var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-border-width, 1px )</code></td>
    <td><code>var(--kendo-orgchart-node-group-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-bg</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-text</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-orgchart-node-group-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-focus-border, #{$kendo-card-focus-border} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-focus-border, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-focus-shadow, #{$kendo-card-focus-shadow} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-focus-shadow, var(--kendo-elevation-3, none))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-title-margin-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-title-margin-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-title-font-size, var( --kendo-font-size-xl, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-node-group-title-font-size, var(--kendo-font-size-xl, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-title-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-orgchart-node-group-title-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-subtitle-margin-y, calc( #{$kendo-orgchart-spacer} - #{k-spacing(1)} ) )</code></td>
    <td><code>var(--kendo-orgchart-node-group-subtitle-margin-y, calc(var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)) - var(--kendo-spacing-1, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-subtitle-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-node-group-subtitle-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-text</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-node-group-subtitle-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-orgchart-node-group-subtitle-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-width</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-width, 300px )</code></td>
    <td><code>var(--kendo-orgchart-card-width, 300px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-border-width, #{$kendo-card-border-width} )</code></td>
    <td><code>var(--kendo-orgchart-card-border-width, var(--kendo-card-border-width, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-shadow, #{$kendo-card-shadow} )</code></td>
    <td><code>var(--kendo-orgchart-card-shadow, var(--kendo-card-shadow, var(--kendo-elevation-3, none)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-focus-shadow, #{$kendo-card-focus-shadow} )</code></td>
    <td><code>var(--kendo-orgchart-card-focus-shadow, var(--kendo-elevation-3, none))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the focused OrgChart Card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-title-margin-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-orgchart-card-title-margin-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-title-font-size, #{$kendo-card-title-font-size} )</code></td>
    <td><code>var(--kendo-orgchart-card-title-font-size, var(--kendo-card-title-font-size, var(--kendo-font-size-md, inherit)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-title-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-orgchart-card-title-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart Card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-subtitle-margin-y, #{k-spacing(0)} )</code></td>
    <td><code>var(--kendo-orgchart-card-subtitle-margin-y, var(--kendo-spacing-0, 0px))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-subtitle-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-card-subtitle-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-subtitle-line-height, var( --kendo-line-height, inherit ) )</code></td>
    <td><code>var(--kendo-orgchart-card-subtitle-line-height, var(--kendo-line-height, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the OrgChart Card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-padding-y, calc( #{$kendo-orgchart-spacer} - #{k-spacing(2)} ) )</code></td>
    <td><code>var(--kendo-orgchart-card-body-padding-y, calc(var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)) - var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-padding-x, #{$kendo-orgchart-card-body-padding-y} )</code></td>
    <td><code>var(--kendo-orgchart-card-body-padding-x, var(--kendo-orgchart-card-body-padding-y, calc(var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)) - var(--kendo-spacing-2, 0.5rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-border-width, 2px 0 0 )</code></td>
    <td><code>var(--kendo-orgchart-card-body-border-width, 2px 0 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top border width of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-color</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-border-color, transparent )</code></td>
    <td><code>var(--kendo-orgchart-card-body-border-color, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the OrgChart Card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-vbox-margin-x, calc( #{$kendo-orgchart-spacer} - #{k-spacing(2)} ) )</code></td>
    <td><code>var(--kendo-orgchart-card-body-vbox-margin-x, calc(var(--kendo-orgchart-spacer, var(--kendo-spacing-6, 1.5rem)) - var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-min-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-card-body-vbox-min-height, 3em )</code></td>
    <td><code>var(--kendo-orgchart-card-body-vbox-min-height, 3em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min height of the OrgChart Card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-size</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-line-size, 1px )</code></td>
    <td><code>var(--kendo-orgchart-line-size, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-text</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-line-text, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-orgchart-line-text, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fill color of the OrgChart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-v-height</td>
    <td>String</td>
    <td><code>var( --kendo-orgchart-line-v-height, #{k-spacing(6)} )</code></td>
    <td><code>var(--kendo-orgchart-line-v-height, var(--kendo-spacing-6, 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the OrgChart connecting line.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

