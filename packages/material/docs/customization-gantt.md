---
title: Customizing Gantt
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_gantt
position: 9
---

# Customizing Gantt

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
    <td>$kendo-gantt-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-bg</td>
    <td>String</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-text</td>
    <td>String</td>
    <td><code>$kendo-component-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-treelist-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt TreeList.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-base ) 3%, transparent), rgba( k-contrast-color( $kendo-gantt-bg ), .025 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-base, #212121) 3%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-size</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-fill</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-color-mix( $kendo-gantt-text, $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-subtle, #757575)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background fill color of the Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-selected-fill</td>
    <td>String</td>
    <td><code>$kendo-selected-bg</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background fill of the selected Gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-size</td>
    <td>Number</td>
    <td><code>8px</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-gantt-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-border</td>
    <td>String</td>
    <td><code>$kendo-gantt-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-border</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-secondary</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-border</td>
    <td>String</td>
    <td><code>$kendo-color-secondary</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-emphasis ), k-color-mix( $kendo-color-primary, $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-primary-emphasis, #97a0d7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( secondary-subtle-active ), k-color-mix( $kendo-color-secondary, $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-secondary-subtle-active, #f79bb3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-secondary</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( primary-emphasis ), k-color-mix( $kendo-color-primary, $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-primary-emphasis, #97a0d7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-contrast</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( secondary-subtle-active ), k-color-mix( $kendo-color-secondary, $kendo-gantt-bg ))</code></td>
    <td><code>var(--kendo-color-secondary-subtle-active, #f79bb3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected the Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-text</td>
    <td>String</td>
    <td><code>$kendo-color-secondary-contrast</code></td>
    <td><code>var(--kendo-color-on-secondary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected Gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-secondary</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the selected Gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-margin-y</td>
    <td>Number</td>
    <td><code>.35em</code></td>
    <td><code>0.35em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border-width</td>
    <td>Number</td>
    <td><code>2px</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-line-height</td>
    <td>Number</td>
    <td><code>.75em</code></td>
    <td><code>0.75em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-dependency-margin-y</td>
    <td>Number</td>
    <td><code>.7em</code></td>
    <td><code>0.7em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the Gantt planned dependencies.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-width</td>
    <td>Number</td>
    <td><code>6px</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-height</td>
    <td>Number</td>
    <td><code>$kendo-gantt-planned-moment-width</code></td>
    <td><code>6px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-border-radius</td>
    <td>Calculation</td>
    <td><code>calc( ( #{$kendo-gantt-planned-border-width * 2} + #{$kendo-gantt-planned-moment-width} ) / 2 )</code></td>
    <td><code>calc((4px + 6px) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-left-margin-x</td>
    <td>Calculation</td>
    <td><code>calc( #{k-math-div( $kendo-gantt-planned-border-width, 2 )} - #{$kendo-gantt-planned-moment-border-radius} )</code></td>
    <td><code>calc(1px - calc((4px + 6px) / 2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-moment-margin-x</td>
    <td>Number</td>
    <td><code>k-math-div( $kendo-gantt-planned-moment-width, 2 )</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-height</td>
    <td>Number</td>
    <td><code>$kendo-gantt-planned-border-width</code></td>
    <td><code>2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the Gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-hover-height</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-gantt-planned-border-width} + 1px )</code></td>
    <td><code>calc(2px + 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the hovered Gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-single-drag-hint-top</td>
    <td>Number</td>
    <td><code>.85em</code></td>
    <td><code>0.85em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-summary-drag-hint-top</td>
    <td>Number</td>
    <td><code>1.35em</code></td>
    <td><code>1.35em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt summary drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-drag-hint-top</td>
    <td>Number</td>
    <td><code>1.15em</code></td>
    <td><code>1.15em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt planned milestone drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-wrap-margin-x</td>
    <td>Number</td>
    <td><code>-2.4em</code></td>
    <td><code>-2.4em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-planned-moment-margin-x</td>
    <td>Number</td>
    <td><code>.2em</code></td>
    <td><code>0.2em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-rtl-milestone-dot-start-margin-x</td>
    <td>Number</td>
    <td><code>-.1em</code></td>
    <td><code>-0.1em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the Gantt milestone task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-offset-resize-handler-margin-x</td>
    <td>Number</td>
    <td><code>1.4em</code></td>
    <td><code>1.4em</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the Gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt planned Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border</td>
    <td>String</td>
    <td><code>$kendo-gantt-planned-bg</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt planned Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #f31700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg-lighter</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( error-emphasis ), k-color-tint($kendo-gantt-delayed-bg, 5))</code></td>
    <td><code>var(--kendo-color-error-emphasis, #fc8d83)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The complement background color of the Gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #37b400)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg-lighter</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( success-emphasis ), k-color-tint($kendo-gantt-advanced-bg, 5))</code></td>
    <td><code>var(--kendo-color-success-emphasis, #93d775)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The complement background color of the Gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-action-on-offset-text</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Gantt delayed task action.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-offset-resize-handler-top</td>
    <td>Number</td>
    <td><code>50%</code></td>
    <td><code>50%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top position of the Gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-width</td>
    <td>Number</td>
    <td><code>200px</code></td>
    <td><code>200px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-label-width</td>
    <td>Number</td>
    <td><code>50px</code></td>
    <td><code>50px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the Gantt validation Tooltip label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-border</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
    <td><span class="color-preview" style="background-color: #656565"></span><code>#656565</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-valid-border</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #37b400)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the valid Gantt validation Tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #f31700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the invalid Gantt validation Tooltip.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

