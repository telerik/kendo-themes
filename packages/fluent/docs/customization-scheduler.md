---
title: Customizing Scheduler
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_scheduler
position: 9
---

# Customizing Scheduler

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
    <td>$kendo-scheduler-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-border-width, 1px )</code></td>
    <td><code>var(--kendo-scheduler-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-scheduler-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-scheduler-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-scheduler-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-scheduler-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-scheduler-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-scheduler-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-selected-bg, k-color(primary-subtle) )</code></td>
    <td><code>var(--kendo-scheduler-selected-bg, var(--kendo-color-primary-subtle, #deecf9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected row in Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-selected-text, $kendo-scheduler-text )</code></td>
    <td><code>var(--kendo-scheduler-selected-text, var(--kendo-scheduler-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected row in Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-selected-border, $kendo-scheduler-border )</code></td>
    <td><code>var(--kendo-scheduler-selected-border, var(--kendo-scheduler-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected row in Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-toolbar-bg, var( --kendo-toolbar-bg, $kendo-toolbar-bg ) )</code></td>
    <td><code>var(--kendo-scheduler-toolbar-bg, var(--kendo-toolbar-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #faf9f8))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Scheduler ToolBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-toolbar-text, var( --kendo-toolbar-text, $kendo-toolbar-text ) )</code></td>
    <td><code>var(--kendo-scheduler-toolbar-text, var(--kendo-toolbar-text, var(--kendo-toolbar-text, var(--kendo-color-on-app-surface, #323130))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Scheduler ToolBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-toolbar-border, var( --kendo-toolbar-border, $kendo-toolbar-border ) )</code></td>
    <td><code>var(--kendo-scheduler-toolbar-border, var(--kendo-toolbar-border, var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Scheduler ToolBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-toolbar-gradient, null )</code></td>
    <td><code>var(--kendo-scheduler-toolbar-gradient, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Scheduler ToolBar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-footer-bg, var( --kendo-toolbar-bg, $kendo-toolbar-bg ) )</code></td>
    <td><code>var(--kendo-scheduler-footer-bg, var(--kendo-toolbar-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #faf9f8))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-footer-text, var( --kendo-toolbar-text, $kendo-toolbar-text ) )</code></td>
    <td><code>var(--kendo-scheduler-footer-text, var(--kendo-toolbar-text, var(--kendo-toolbar-text, var(--kendo-color-on-app-surface, #323130))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-footer-border, var( --kendo-toolbar-border, $kendo-toolbar-border ) )</code></td>
    <td><code>var(--kendo-scheduler-footer-border, var(--kendo-toolbar-border, var(--kendo-toolbar-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-footer-gradient, null )</code></td>
    <td><code>var(--kendo-scheduler-footer-gradient, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-scheduler-event-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-line-height, $kendo-scheduler-line-height )</code></td>
    <td><code>var(--kendo-scheduler-event-line-height, var(--kendo-scheduler-line-height, var(--kendo-line-height, normal)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-padding-x, k-spacing(2) )</code></td>
    <td><code>var(--kendo-scheduler-event-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-padding-y, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-scheduler-event-padding-y, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-min-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-min-height, calc( #{$kendo-scheduler-line-height} + 2 * #{$kendo-scheduler-event-padding-y} ) )</code></td>
    <td><code>var(--kendo-scheduler-event-min-height, calc(var(--kendo-scheduler-line-height, var(--kendo-line-height, normal)) + 2 * var(--kendo-scheduler-event-padding-y, var(--kendo-spacing-0\.5, 0.125rem))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-scheduler-event-bg, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-scheduler-event-text, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-border, $kendo-scheduler-event-bg )</code></td>
    <td><code>var(--kendo-scheduler-event-border, var(--kendo-scheduler-event-bg, var(--kendo-color-primary, #0078d4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-gradient, null )</code></td>
    <td><code>var(--kendo-scheduler-event-gradient, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-shadow, null )</code></td>
    <td><code>var(--kendo-scheduler-event-shadow, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-hover-bg, k-color(base-hover) )</code></td>
    <td><code>var(--kendo-scheduler-event-hover-bg, var(--kendo-color-base-hover, #f3f2f1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-hover-text, k-color(on-base) )</code></td>
    <td><code>var(--kendo-scheduler-event-hover-text, var(--kendo-color-on-base, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-hover-border, color-mix(in srgb, k-color(border) 10%, transparent) )</code></td>
    <td><code>var(--kendo-scheduler-event-hover-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-hover-gradient, null )</code></td>
    <td><code>var(--kendo-scheduler-event-hover-gradient, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-hover-shadow, null )</code></td>
    <td><code>var(--kendo-scheduler-event-hover-shadow, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the hovered Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-selected-bg, k-color(primary-active) )</code></td>
    <td><code>var(--kendo-scheduler-event-selected-bg, var(--kendo-color-primary-active, #005a9e))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-selected-text, $kendo-scheduler-event-text )</code></td>
    <td><code>var(--kendo-scheduler-event-selected-text, var(--kendo-scheduler-event-text, var(--kendo-color-app-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-selected-border, $kendo-scheduler-event-bg )</code></td>
    <td><code>var(--kendo-scheduler-event-selected-border, var(--kendo-scheduler-event-bg, var(--kendo-color-primary, #0078d4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-selected-gradient, null )</code></td>
    <td><code>var(--kendo-scheduler-event-selected-gradient, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the selected Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-selected-shadow, none )</code></td>
    <td><code>var(--kendo-scheduler-event-selected-shadow, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the selected Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-ongoing-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-event-ongoing-shadow, inset 0px 0px 0px 1px #ff0000 )</code></td>
    <td><code>var(--kendo-scheduler-event-ongoing-shadow, inset 0px 0px 0px 1px #ff0000)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ongoing Scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-cell-padding-x, k-spacing(2) )</code></td>
    <td><code>var(--kendo-scheduler-cell-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-cell-padding-y, k-spacing(2) )</code></td>
    <td><code>var(--kendo-scheduler-cell-padding-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-cell-height, $kendo-line-height-em )</code></td>
    <td><code>var(--kendo-scheduler-cell-height, calc(1.4285714286 * 1em))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-datecolumn-width</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-datecolumn-width, 12em )</code></td>
    <td><code>var(--kendo-scheduler-datecolumn-width, 12em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Scheduler date column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-timecolumn-width</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-timecolumn-width, 11em )</code></td>
    <td><code>var(--kendo-scheduler-timecolumn-width, 11em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Scheduler time column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-nonwork-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-nonwork-bg, k-color(surface) )</code></td>
    <td><code>var(--kendo-scheduler-nonwork-bg, var(--kendo-color-surface, #faf9f8))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the non-working hours in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-nonwork-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-nonwork-text, null )</code></td>
    <td><code>var(--kendo-scheduler-nonwork-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the non-working hours in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-othermonth-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-othermonth-bg, k-color(surface) )</code></td>
    <td><code>var(--kendo-scheduler-othermonth-bg, var(--kendo-color-surface, #faf9f8))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-othermonth-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-othermonth-text, null )</code></td>
    <td><code>var(--kendo-scheduler-othermonth-text, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the preceding/subsequent month cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-padding-x, k-spacing(3) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-padding-x, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-padding-y, $kendo-scheduler-yearview-padding-x )</code></td>
    <td><code>var(--kendo-scheduler-yearview-padding-y, var(--kendo-scheduler-yearview-padding-x, var(--kendo-spacing-3, 0.75rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-calendar-gap</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-calendar-gap, k-spacing(3) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-calendar-gap, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the calendars of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-size</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-size, 3px )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-size, 3px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The days with events indicator size of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-calc-offset-top</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-calc-offset-top, calc( #{$kendo-calendar-cell-size} - (#{$kendo-calendar-cell-padding-y} * 2) ) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-calc-offset-top, calc(var(--kendo-calendar-cell-size, 28px) - var(--kendo-calendar-cell-padding-y, var(--kendo-calendar-cell-padding-x, var(--kendo-spacing-1, 0.25rem))) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the days with events indicator of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-calc-offset-left</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-calc-offset-left, calc( 50% - (#{$kendo-scheduler-yearview-indicator-size} / 2) ) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-calc-offset-left, calc(50% - var(--kendo-scheduler-yearview-indicator-size, 3px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left position of the days with events indicator of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-border-radius, 50% )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-border-radius, 50%)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the days with events indicator of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-bg, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the days with events indicator of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-selected-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-yearview-indicator-selected-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-scheduler-yearview-indicator-selected-bg, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected days with events indicator of the year view in the Scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-padding-x, k-spacing(2) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-padding-x, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-padding-y, $kendo-scheduler-tooltip-padding-x )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-padding-y, var(--kendo-scheduler-tooltip-padding-x, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-border-width, 0 )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-bg</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-bg, var(--kendo-color-app-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-text</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-text, k-color(subtle) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-border</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-border, null )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-border, )</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-shadow, k-elevation(5) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-shadow, var(--kendo-elevation-5, 0 1.8px 5.4px rgba(0, 0, 0, 0.1), 0 9.6px 21.6px rgba(0, 0, 0, 0.13)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-title-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-title-margin-y, k-spacing(3) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-title-margin-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Scheduler Tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-month-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-month-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-month-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the month inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-day-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-day-font-size, calc( var( --kendo-font-size-sm, .75rem ) * 2 ) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-day-font-size, calc(var(--kendo-font-size-sm, 0.75rem) * 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the day inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-events-max-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-events-max-height, 250px )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-events-max-height, 250px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The max height of the events inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-events-gap</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-events-gap, k-spacing(2) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-events-gap, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the events inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-event-padding-x, $kendo-scheduler-event-padding-x )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-event-padding-x, var(--kendo-scheduler-event-padding-x, var(--kendo-spacing-2, 0.5rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the events inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-event-padding-y, $kendo-scheduler-event-padding-y )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-event-padding-y, var(--kendo-scheduler-event-padding-y, var(--kendo-spacing-0\.5, 0.125rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the events inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-event-border-radius, $kendo-scheduler-event-border-radius )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-event-border-radius, var(--kendo-scheduler-event-border-radius, var(--kendo-border-radius-md, 0.25rem)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the events inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-gap</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-event-gap, k-spacing(0.5) )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-event-gap, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the events items inside the Scheduler Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-callout-color</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-tooltip-callout-color, $kendo-scheduler-tooltip-bg )</code></td>
    <td><code>var(--kendo-scheduler-tooltip-callout-color, var(--kendo-scheduler-tooltip-bg, var(--kendo-color-app-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Scheduler Tooltip callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-resize-handle-width</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-resize-handle-width, 2em )</code></td>
    <td><code>var(--kendo-scheduler-resize-handle-width, 2em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Scheduler resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-more-btn-height</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-more-btn-height, 13px )</code></td>
    <td><code>var(--kendo-scheduler-more-btn-height, 13px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Scheduler more events button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-marquee-color</td>
    <td>String</td>
    <td><code>var( --kendo-scheduler-marquee-color, k-color(primary) )</code></td>
    <td><code>var(--kendo-scheduler-marquee-color, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Scheduler marquee.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

