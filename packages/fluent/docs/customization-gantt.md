---
title: Customizing Gantt
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_gantt
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
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-text</td>
    <td></td>
    <td><code>var( --kendo-component-text, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( $kendo-color-black, .04 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-border</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-size</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-fill</td>
    <td></td>
    <td><code>black</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background fill color of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-selected-fill</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-get-theme-color-var( primary-120 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background fill of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-size</td>
    <td></td>
    <td><code>8px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-spacing</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), $kendo-color-black)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), $kendo-color-black)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), $kendo-color-black)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-bg</td>
    <td></td>
    <td><code>$kendo-gantt-text</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-border</td>
    <td></td>
    <td><code>$kendo-gantt-text</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-get-theme-color-var( neutral-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle-active ), k-get-theme-color-var( primary-50 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border-width</td>
    <td></td>
    <td><code>0px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( subtle ), k-get-theme-color-var( neutral-110 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-get-theme-color-var( neutral-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-hover-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-get-theme-color-var( neutral-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary-subtle-active ), k-get-theme-color-var( primary-50 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-border</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-selected-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-actions-padding-y</td>
    <td></td>
    <td><code>$kendo-padding-md-y</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the gantt task actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-actions-padding-x</td>
    <td></td>
    <td><code>$kendo-padding-md-x</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the gantt task actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-margin-y</td>
    <td></td>
    <td><code>.45em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border-width</td>
    <td></td>
    <td><code>2px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-line-height</td>
    <td></td>
    <td><code>.85em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-dependency-margin-y</td>
    <td></td>
    <td><code>.65em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the gantt planned dependencies.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-width</td>
    <td></td>
    <td><code>6px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-height</td>
    <td></td>
    <td><code>$kendo-gantt-planned-moment-width</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-border-radius</td>
    <td></td>
    <td><code>calc( ( #{$kendo-gantt-planned-border-width * 2} + #{$kendo-gantt-planned-moment-width} ) / 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-left-margin-x</td>
    <td></td>
    <td><code>calc( #{$kendo-gantt-planned-border-width} / 2 - #{$kendo-gantt-planned-moment-border-radius} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-moment-margin-x</td>
    <td></td>
    <td><code>math.div( $kendo-gantt-planned-moment-width, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the gantt milestone planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-height</td>
    <td></td>
    <td><code>$kendo-gantt-planned-border-width</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-hover-height</td>
    <td></td>
    <td><code>calc( #{$kendo-gantt-planned-border-width} + 1px )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover height of the gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-single-drag-hint-top</td>
    <td></td>
    <td><code>0</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-summary-drag-hint-top</td>
    <td></td>
    <td><code>.5em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt summary drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-drag-hint-top</td>
    <td></td>
    <td><code>.3em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt planned milestone drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-offset-resize-handler-margin-x</td>
    <td></td>
    <td><code>1.4em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( error-emphasis ), k-get-theme-color-var( error-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg-lighter</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( error ), k-get-theme-color-var( error-110))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Complement background color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-hover-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( error-on-subtle ), k-get-theme-color-var( error-190 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( success-emphasis ), k-get-theme-color-var( success-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg-lighter</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( success ), k-get-theme-color-var( success-110 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Complement background color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-hover-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( success-on-subtle ), k-get-theme-color-var( success-190 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-action-on-offset-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), $kendo-color-black)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt delayed task action.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-offset-resize-handler-top</td>
    <td></td>
    <td><code>50%</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-width</td>
    <td></td>
    <td><code>200px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt validation tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-label-width</td>
    <td></td>
    <td><code>50px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt validation tooltip label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-border</td>
    <td></td>
    <td><code>var( --kendo-component-border, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-valid-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( success ), k-get-theme-color-var( success-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip in valid state.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-invalid-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( error ), k-get-theme-color-var( error-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip in invalid state.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

