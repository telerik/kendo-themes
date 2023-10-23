---
title: Customizing Floating-action-button
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_floating-action-button
position: 9
---

# Customizing Floating-action-button

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
    <td>$kendo-fab-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td><code>var(--kendo-border-radius-md, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-x</td>
    <td>Number</td>
    <td><code>math.div( $kendo-fab-padding-x, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-x</td>
    <td>Number</td>
    <td><code>( $kendo-fab-padding-x * 1.5 )</code></td>
    <td><code>1.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-x</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sm-padding-y</td>
    <td>Number</td>
    <td><code>math.div( $kendo-fab-padding-y, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-md-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-padding-y</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-lg-padding-y</td>
    <td>Number</td>
    <td><code>( $kendo-fab-padding-y * 1.5 )</code></td>
    <td><code>1.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-offset</td>
    <td>Number</td>
    <td><code>$kendo-button-focus-offset</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-width</td>
    <td>Number</td>
    <td><code>$kendo-button-focus-outline-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-style</td>
    <td>String</td>
    <td><code>$kendo-button-focus-outline-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-icon-padding-x</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the FAB icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td><code>var(--kendo-border-radius-md, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td><code>var(--kendo-font-size-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-sm, inherit )</code></td>
    <td><code>var(--kendo-line-height-sm, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-offset-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-offset</td>
    <td>Number</td>
    <td><code>$kendo-button-focus-offset</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-width</td>
    <td>Number</td>
    <td><code>$kendo-button-focus-outline-width</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-style</td>
    <td>String</td>
    <td><code>$kendo-button-focus-outline-style</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 2 ) + $kendo-fab-icon-padding-x</code></td>
    <td><code>0.625rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-fab-item-icon-padding-x</code></td>
    <td><code>0.625rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
    <td>Map</td>
    <td><code>(
    solid: map.get( $kendo-button-theme-colors, "solid")
)</code></td>
    <td><code>(solid: (base: (bg: #ffffff, text: var(--kendo-neutral-160, inherit), border: var(--kendo-neutral-110, inherit), hover-bg: var(--kendo-neutral-20, inherit), hover-text: var(--kendo-neutral-190, inherit), hover-border: var(--kendo-neutral-110, inherit), focus-bg: #ffffff, focus-text: var(--kendo-neutral-160, inherit), focus-border: var(--kendo-neutral-110, inherit), focus-outline: var(--kendo-neutral-130, inherit), focus-hover-bg: var(--kendo-neutral-20, inherit), focus-hover-text: var(--kendo-neutral-190, inherit), focus-hover-border: var(--kendo-neutral-110, inherit), focus-hover-outline: var(--kendo-neutral-130, inherit), active-bg: var(--kendo-neutral-30, inherit), active-text: var(--kendo-neutral-190, inherit), active-border: var(--kendo-neutral-110, inherit), active-hover-bg: var(--kendo-neutral-20, inherit), active-hover-text: var(--kendo-neutral-190, inherit), active-hover-border: var(--kendo-neutral-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), primary: (bg: var(--kendo-primary-100, inherit), text: #ffffff, border: var(--kendo-primary-100, inherit), hover-bg: var(--kendo-primary-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-primary-110, inherit), focus-bg: var(--kendo-primary-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-primary-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-primary-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-primary-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-primary-120, inherit), active-text: #ffffff, active-border: var(--kendo-primary-120, inherit), active-hover-bg: var(--kendo-primary-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-primary-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), error: (bg: var(--kendo-error-100, inherit), text: #ffffff, border: var(--kendo-error-100, inherit), hover-bg: var(--kendo-error-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-error-110, inherit), focus-bg: var(--kendo-error-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-error-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-error-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-error-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-error-120, inherit), active-text: #ffffff, active-border: var(--kendo-error-120, inherit), active-hover-bg: var(--kendo-error-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-error-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), success: (bg: var(--kendo-success-100, inherit), text: #ffffff, border: var(--kendo-success-100, inherit), hover-bg: var(--kendo-success-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-success-110, inherit), focus-bg: var(--kendo-success-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-success-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-success-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-success-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-success-120, inherit), active-text: #ffffff, active-border: var(--kendo-success-120, inherit), active-hover-bg: var(--kendo-success-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-success-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), info: (bg: var(--kendo-info-100, inherit), text: #ffffff, border: var(--kendo-info-100, inherit), hover-bg: var(--kendo-info-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-info-110, inherit), focus-bg: var(--kendo-info-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-info-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-info-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-info-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-info-120, inherit), active-text: #ffffff, active-border: var(--kendo-info-120, inherit), active-hover-bg: var(--kendo-info-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-info-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), secondary: (bg: var(--kendo-neutral-100, inherit), text: #ffffff, border: var(--kendo-neutral-100, inherit), hover-bg: var(--kendo-neutral-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-neutral-110, inherit), focus-bg: var(--kendo-neutral-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-neutral-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-neutral-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-neutral-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-neutral-120, inherit), active-text: #ffffff, active-border: var(--kendo-neutral-120, inherit), active-hover-bg: var(--kendo-neutral-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-neutral-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), tertiary: (bg: var(--kendo-tertiary-100, inherit), text: #ffffff, border: var(--kendo-tertiary-100, inherit), hover-bg: var(--kendo-tertiary-110, inherit), hover-text: #ffffff, hover-border: var(--kendo-tertiary-110, inherit), focus-bg: var(--kendo-tertiary-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-tertiary-100, inherit), focus-outline: inherit, focus-hover-bg: var(--kendo-tertiary-110, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-tertiary-110, inherit), focus-hover-outline: inherit, active-bg: var(--kendo-tertiary-120, inherit), active-text: #ffffff, active-border: var(--kendo-tertiary-120, inherit), active-hover-bg: var(--kendo-tertiary-110, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-tertiary-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), warning: (bg: var(--kendo-warning-100, inherit), text: var(--kendo-neutral-160, inherit), border: var(--kendo-warning-100, inherit), hover-bg: var(--kendo-warning-110, inherit), hover-text: var(--kendo-neutral-190, inherit), hover-border: var(--kendo-warning-110, inherit), focus-bg: var(--kendo-warning-100, inherit), focus-text: var(--kendo-neutral-160, inherit), focus-border: var(--kendo-warning-100, inherit), focus-outline: #ffffff, focus-hover-bg: var(--kendo-warning-110, inherit), focus-hover-text: var(--kendo-neutral-190, inherit), focus-hover-border: var(--kendo-warning-110, inherit), focus-hover-outline: #ffffff, active-bg: var(--kendo-warning-120, inherit), active-text: var(--kendo-neutral-190, inherit), active-border: var(--kendo-warning-120, inherit), active-hover-bg: var(--kendo-warning-110, inherit), active-hover-text: var(--kendo-neutral-190, inherit), active-hover-border: var(--kendo-warning-110, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), dark: (bg: var(--kendo-neutral-160, inherit), text: #ffffff, border: var(--kendo-neutral-160, inherit), hover-bg: var(--kendo-neutral-170, inherit), hover-text: #ffffff, hover-border: var(--kendo-neutral-170, inherit), focus-bg: var(--kendo-neutral-160, inherit), focus-text: #ffffff, focus-border: var(--kendo-neutral-160, inherit), focus-outline: #ffffff, focus-hover-bg: var(--kendo-neutral-170, inherit), focus-hover-text: #ffffff, focus-hover-border: var(--kendo-neutral-170, inherit), focus-hover-outline: #ffffff, active-bg: var(--kendo-neutral-180, inherit), active-text: #ffffff, active-border: var(--kendo-neutral-180, inherit), active-hover-bg: var(--kendo-neutral-170, inherit), active-hover-text: #ffffff, active-hover-border: var(--kendo-neutral-170, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit)), light: (bg: var(--kendo-neutral-50, inherit), text: var(--kendo-neutral-160, inherit), border: var(--kendo-neutral-50, inherit), hover-bg: var(--kendo-neutral-60, inherit), hover-text: var(--kendo-neutral-190, inherit), hover-border: var(--kendo-neutral-60, inherit), focus-bg: var(--kendo-neutral-50, inherit), focus-text: var(--kendo-neutral-160, inherit), focus-border: var(--kendo-neutral-50, inherit), focus-outline: #ffffff, focus-hover-bg: var(--kendo-neutral-60, inherit), focus-hover-text: var(--kendo-neutral-190, inherit), focus-hover-border: var(--kendo-neutral-60, inherit), focus-hover-outline: #ffffff, active-bg: var(--kendo-neutral-70, inherit), active-text: var(--kendo-neutral-190, inherit), active-border: var(--kendo-neutral-70, inherit), active-hover-bg: var(--kendo-neutral-60, inherit), active-hover-text: var(--kendo-neutral-190, inherit), active-hover-border: var(--kendo-neutral-60, inherit), disabled-bg: var(--kendo-disabled-bg, inherit), disabled-text: var(--kendo-disabled-text, inherit), disabled-border: var(--kendo-disabled-border, inherit))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        padding-x: $kendo-fab-sm-padding-x,
        padding-y: $kendo-fab-sm-padding-y
    ),
    md: (
        padding-x: $kendo-fab-md-padding-x,
        padding-y: $kendo-fab-md-padding-y
    ),
    lg: (
        padding-x: $kendo-fab-lg-padding-x,
        padding-y: $kendo-fab-lg-padding-y
    )
)</code></td>
    <td><code>(sm: (padding-x: 0.5rem, padding-y: 0.5rem), md: (padding-x: 1rem, padding-y: 1rem), lg: (padding-x: 1.5rem, padding-y: 1.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-offset-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-160 )</code></td>
    <td><code>var(--kendo-neutral-160, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-bg</td>
    <td>String</td>
    <td><code>var( --kendo-component-bg, inherit )</code></td>
    <td><code>var(--kendo-component-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-border</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-110 )</code></td>
    <td><code>var(--kendo-neutral-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-hover-text, inherit )</code></td>
    <td><code>var(--kendo-hover-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-hover-bg, inherit )</code></td>
    <td><code>var(--kendo-hover-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-border</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-110 )</code></td>
    <td><code>var(--kendo-neutral-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-text</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-160 )</code></td>
    <td><code>var(--kendo-neutral-160, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-component-bg, inherit )</code></td>
    <td><code>var(--kendo-component-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-border</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-110 )</code></td>
    <td><code>var(--kendo-neutral-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-selected-text, inherit )</code></td>
    <td><code>var(--kendo-selected-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-selected-bg, inherit )</code></td>
    <td><code>var(--kendo-selected-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-border</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-110 )</code></td>
    <td><code>var(--kendo-neutral-110, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active FAB item.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

