---
title: Customizing Common
description: "Refer to the list of the Kendo UI Theme Core theme variables available for customization."
slug: variables_kendothemecore_common
position: 9
---

# Customizing Common

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
    <td>$kendo-border-radius</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 0.5)</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-primary != null, k-color-shade($kendo-color-primary, 2), null )</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Null</td>
    <td><code>$kendo-color-primary-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>Null</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>Null</td>
    <td><code>$kendo-color-primary-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-bg</td>
    <td>Null</td>
    <td><code>$kendo-color-primary-hover</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-text</td>
    <td>Null</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-border</td>
    <td>Null</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>Null</td>
    <td><code>$kendo-color-base</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>Null</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>Null</td>
    <td><code>$kendo-color-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>List</td>
    <td><code>rgba($kendo-color-black, 0), rgba($kendo-color-black, 0.02)</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-bg</td>
    <td>Null</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-text</td>
    <td>Null</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-border</td>
    <td>Null</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-app-text</td>
    <td>Null</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>Null</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>Null</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>Null</td>
    <td><code>$kendo-color-base-hover</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>Null</td>
    <td><code>$kendo-color-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-text</td>
    <td>Null</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-bg</td>
    <td>Null</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>Null</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-primary != null, k-color-tint($kendo-color-primary, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-secondary != null, k-color-tint($kendo-color-secondary, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-secondary != null, k-color-shade($kendo-color-secondary, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Null</td>
    <td><code>if($kendo-color-secondary != null, k-contrast-legacy($kendo-color-secondary), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-tertiary != null, k-color-tint($kendo-color-tertiary, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-tertiary != null, k-color-shade($kendo-color-tertiary, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Null</td>
    <td><code>if($kendo-color-tertiary != null, k-contrast-legacy($kendo-color-tertiary), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-info != null, k-color-tint($kendo-color-info, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-info != null, k-color-shade($kendo-color-info, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-success != null, k-color-tint($kendo-color-success, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-success != null, k-color-shade($kendo-color-success, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-warning != null, k-color-tint($kendo-color-warning, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-warning != null, k-color-shade($kendo-color-warning, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error-lighter</td>
    <td>Null</td>
    <td><code>if($kendo-color-error != null, k-color-tint($kendo-color-error, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error-darker</td>
    <td>Null</td>
    <td><code>if($kendo-color-error != null, k-color-shade($kendo-color-error, 2), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>Null</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>List</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.02)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>Null</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-app-border</td>
    <td>Color</td>
    <td><code>rgba($kendo-color-black, 0.08)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-app-bg</td>
    <td>Null</td>
    <td><code>if($kendo-body-bg != null, k-try-shade($kendo-body-bg, 0.25), null)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-bg</td>
    <td>Null</td>
    <td><code>$kendo-component-bg</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-loading-text</td>
    <td>String</td>
    <td><code>currentColor</code></td>
    <td><code>currentColor</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Deprecated</b></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-1</td>
    <td>List</td>
    <td><code>0 1.6px 3.6px rgba( $kendo-color-black, 0.132 ), 0 0.3px 0.9px rgba( $kendo-color-black, 0.108 )</code></td>
    <td><code>0 1.6px 3.6px rgba(0, 0, 0, 0.132), 0 0.3px 0.9px rgba(0, 0, 0, 0.108)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for cards and grid item thumbnails.<br />Equivalent to fluent depth 4.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-2</td>
    <td>List</td>
    <td><code>0 3.2px 7.2px rgba( $kendo-color-black, 0.132 ), 0 0.6px 1.8px rgba( $kendo-color-black, 0.108 )</code></td>
    <td><code>0 3.2px 7.2px rgba(0, 0, 0, 0.132), 0 0.6px 1.8px rgba(0, 0, 0, 0.108)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for command bars and dropdowns.<br />Equivalent to fluent depth 8.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-3</td>
    <td>List</td>
    <td><code>0 6.4px 14.4px rgba( $kendo-color-black, 0.132 ), 0 1.2px 3.6px rgba( $kendo-color-black, 0.108 )</code></td>
    <td><code>0 6.4px 14.4px rgba(0, 0, 0, 0.132), 0 1.2px 3.6px rgba(0, 0, 0, 0.108)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for teaching callouts and hover cards / tooltips.<br />Equivalent to fluent depth 16.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-4</td>
    <td>List</td>
    <td><code>0 25.6px 57.6px rgba( $kendo-color-black, 0.22 ), 0 4.8px 14.4px rgba( $kendo-color-black, 0.18 )</code></td>
    <td><code>0 25.6px 57.6px rgba(0, 0, 0, 0.22), 0 4.8px 14.4px rgba(0, 0, 0, 0.18)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for panels and pop up dialogs.<br />Equivalent to fluent depth 64.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

