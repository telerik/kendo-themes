---
title: Customization
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent
position: 9
---

# Customization

The following table lists the available variables for customizing the Fluent theme.

## Variables

### Common

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
    <td>$kendo-appbar-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary,
    error: error,
    success: success,
    info: info,
    secondary: neutral,
    tertiary: tertiary,
 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the appbar variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the avatar variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary,
    error: error,
    success: success,
    info: info,
    secondary: neutral,
    tertiary: tertiary,
 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the badge variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the bottom-nav variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar header cell.<br /> @group calendar</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-brand-colors</td>
    <td></td>
<td>

`( primary, error, warning, success, info )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the card variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size</td>
    <td></td>
<td>

`14px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
    <td></td>
<td>

`"Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height</td>
    <td></td>
<td>

`math.div( 20, 14 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight</td>
    <td></td>
<td>

`400`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-1</td>
    <td></td>
<td>

`0 1.6px 3.6px rgba( $kendo-color-black, 0.132 ), 0 0.3px 0.9px rgba( $kendo-color-black, 0.108 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for cards and grid item thumbnails.<br />Equivalent to fluent depth 4.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-2</td>
    <td></td>
<td>

`0 3.2px 7.2px rgba( $kendo-color-black, 0.132 ), 0 0.6px 1.8px rgba( $kendo-color-black, 0.108 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for command bars and dropdowns.<br />Equivalent to fluent depth 8.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-3</td>
    <td></td>
<td>

`0 6.4px 14.4px rgba( $kendo-color-black, 0.132 ), 0 1.2px 3.6px rgba( $kendo-color-black, 0.108 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for teaching callouts and hover cards / tooltips.<br />Equivalent to fluent depth 16.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-box-shadow-depth-4</td>
    <td></td>
<td>

`0 25.6px 57.6px rgba( $kendo-color-black, 0.22 ), 0 4.8px 14.4px rgba( $kendo-color-black, 0.18 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for panels and pop up dialogs.<br />Equivalent to fluent depth 64.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary
 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the dialog variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-align</td>
    <td></td>
<td>

`flex-end`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal alignment of the form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary,
    secondary: neutral,
    tertiary: tertiary,
    error: error,
    success: success,
    warning: warning,
    info: info
 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the loader variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-icon-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of menu items icon.<br /> @group menu</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary,
    error: error,
    warning: warning,
    success: success,
    info: info,
    secondary: neutral,
    tertiary: tertiary,
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the notification variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-brand-colors</td>
    <td></td>
<td>

`(error, warning, success, info )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the tooltip variations.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-brand-colors</td>
    <td></td>
<td>

`(
    primary: primary
 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme variations for the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-theme-colors</td>
    <td></td>
<td>

`()`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the window variations.</div></div>
    </td>
</tr>
</tbody>
</table>

### Action-buttons

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
    <td>$kendo-actions-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the action buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the action buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the action buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the action buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the action buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actions-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the action buttons container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Action-sheet

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
    <td>$kendo-actionsheet-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-width</td>
    <td></td>
<td>

`360px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-max-width</td>
    <td></td>
<td>

`100%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum width of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-height</td>
    <td></td>
<td>

`60vh`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-max-height</td>
    <td></td>
<td>

`60vh`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum height of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width around the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-border-radius</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the action sheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-font-size</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-font-family</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-line-height</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the action sheet header groups.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-header-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the action sheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-subtitle-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the action sheet subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-subtitle-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the action sheet subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-subtitle-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the action sheet subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-min-height</td>
    <td></td>
<td>

`40px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum height of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horiozontal padding of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border around the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the icon and the text in the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-icon-size</td>
    <td></td>
<td>

`var( --kendo-icon-size, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the action sheet item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-icon-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the action sheet item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-title-font-weight</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the action sheet item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-title-text-transform</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transform of the action sheet item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-description-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the action sheet item description.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-description-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the action sheet item description.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus background color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus text color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-outline</td>
    <td></td>
<td>

`var( --kendo-outline-color, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus outline color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus outline width of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-hover-bg</td>
    <td></td>
<td>

`$kendo-actionsheet-item-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus and hover background color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-hover-text</td>
    <td></td>
<td>

`$kendo-actionsheet-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus and hover text color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-focus-hover-border</td>
    <td></td>
<td>

`$kendo-actionsheet-item-hover-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus and hover border color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-disabled-bg</td>
    <td></td>
<td>

`$kendo-actionsheet-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Disabled background color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Disabled text color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-actionsheet-item-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Disabled border color of the action sheet item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-header-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the adaptive action sheet titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the adaptive action sheet titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-header-padding-x</td>
    <td></td>
<td>

`$kendo-adaptive-actionsheet-header-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the adaptive action sheet titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-header-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the adaptive action sheet titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-content-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the adaptive action sheet content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-content-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the adaptive action sheet content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-footer-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the adaptive action sheet footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-adaptive-actionsheet-footer-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the adaptive action sheet footer.</div></div>
    </td>
</tr>
</tbody>
</table>

### Appbar

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
    <td>$kendo-appbar-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-margin-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-zindex</td>
    <td></td>
<td>

`1000`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Z-index of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the appbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-appbar-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Content spacing of the appbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Avatar

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
    <td>$kendo-avatar-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td></td>
<td>

`(
    sm: map.get( $kendo-spacing, 4 ),
    md: map.get( $kendo-spacing, 8 ),
    lg: map.get( $kendo-spacing, 16 )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the avatar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Badge

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
    <td>$kendo-badge-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size-xs, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height-xs, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-min-width-sm</td>
    <td></td>
<td>

`calc( #{$kendo-badge-line-height-sm} * 1em + #{$kendo-badge-padding-y-sm} * 2 + #{$kendo-badge-border-width} * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Badge min width used for circle badge.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-badge-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-badge-padding-x-sm,
        padding-y: $kendo-badge-padding-y-sm,
        font-size: $kendo-badge-font-size-sm,
        line-height: $kendo-badge-line-height-sm,
        min-width: $kendo-badge-min-width-sm
    ),
    md: (
        padding-x: $kendo-badge-padding-x-md,
        padding-y: $kendo-badge-padding-y-md,
        font-size: $kendo-badge-font-size-md,
        line-height: $kendo-badge-line-height-md,
        min-width: $kendo-badge-min-width-md
    ),
    lg: (
        padding-x: $kendo-badge-padding-x-lg,
        padding-y: $kendo-badge-padding-y-lg,
        font-size: $kendo-badge-font-size-lg,
        line-height: $kendo-badge-line-height-lg,
        min-width: $kendo-badge-min-width-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the badge.</div></div>
    </td>
</tr>
</tbody>
</table>

### Bottom-nav

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
    <td>$kendo-bottom-nav-item-icon-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the focused bottom navigation item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-offset</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-icon-margin-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the focused bottom navigation item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-icon-margin-x</td>
    <td></td>
<td>

`$kendo-bottom-nav-item-icon-margin-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the focused bottom navigation item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the bottom navigation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Bottom-navigation

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
    <td>$kendo-bottom-nav-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td></td>
<td>

`$kendo-bottom-nav-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td></td>
<td>

`$kendo-bottom-nav-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-border-width</td>
    <td></td>
<td>

`1px 0px 0px 0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-md, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-md, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-letter-spacing</td>
    <td></td>
<td>

`.2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Letter spacing of the bottom navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-width</td>
    <td></td>
<td>

`72px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum width of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-max-width</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum width of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-height</td>
    <td></td>
<td>

`calc( #{$kendo-bottom-nav-item-icon-size} + #{$kendo-bottom-nav-item-icon-size} + (#{$kendo-bottom-nav-item-padding-y} * 2) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum height of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the bottom navigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the bottom navigation item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Breadcrumb

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
    <td>$kendo-breadcrumb-margin-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-margin-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical margin of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-focus-shadow</td>
    <td></td>
<td>

`0 0 0 1px get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused breadcrumb</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border-radius</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-initial-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The initial text color of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The borer color of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-hover-border</td>
    <td></td>
<td>

`var( --kendo-hover-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-active-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-active-text</td>
    <td></td>
<td>

`var( --kendo-selected-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-active-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-focus-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus and hover background color of the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-disabled-border</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-selected-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected the breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the selected breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-selected-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the selected breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-link-selected-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the selected breadcrumb link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-bg</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-text</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-border</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-bg</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-text</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-hover-border</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-hover-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-active-bg</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-active-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-active-text</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-active-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-active-border</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-active-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-bg</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-text</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-focus-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-shadow</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-focus-hover-bg</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-focus-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus and hover background color of the breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-root-link-disabled-text</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled breadcrumb root link</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-x</td>
    <td></td>
<td>

`$kendo-breadcrumb-link-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the breadcrumb link icon</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-icon-link-padding-y</td>
    <td></td>
<td>

`$kendo-breadcrumb-icon-link-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the breadcrumb link icon</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-breadcrumb-delimiter-icon-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the breadcrumb delimiter icon</div></div>
    </td>
</tr>
</tbody>
</table>

### Button

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
    <td>$kendo-actions-button-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-calc-size</td>
    <td></td>
<td>

`calc( ( #{$kendo-button-line-height-md} * 1em ) + ( #{$kendo-button-padding-y-md} * 2 ) + ( #{$kendo-button-border-width} * 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-inner-calc-size</td>
    <td></td>
<td>

`calc( ( #{$kendo-button-line-height-md} * 1em ) + ( #{$kendo-button-padding-y-md} * 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated inner height of the button. Without the border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-button-padding-x-sm,
        padding-y: $kendo-button-padding-y-sm,
        font-size: $kendo-button-font-size-sm,
        line-height: $kendo-button-line-height-sm
    ),
    md: (
        padding-x: $kendo-button-padding-x-md,
        padding-y: $kendo-button-padding-y-md,
        font-size: $kendo-button-font-size-md,
        line-height: $kendo-button-line-height-md
    ),
    lg: (
        padding-x: $kendo-button-padding-x-lg,
        padding-y: $kendo-button-padding-y-lg,
        font-size: $kendo-button-font-size-lg,
        line-height: $kendo-button-line-height-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Content spacing of the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-offset</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-focus-offset</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the flat focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-flat-focus-outline-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the flat focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-link-focus-offset</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the link focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-button-link-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the flat focused button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Calendar

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
    <td>$kendo-calendar-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-size</td>
    <td></td>
<td>

`28px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 ) map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the bottom border of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-text</td>
    <td></td>
<td>

`$kendo-calendar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-border</td>
    <td></td>
<td>

`$kendo-calendar-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the calendar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-nav-gap</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the navigation buttons of the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the calendar footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-footer-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the calendar footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-padding-y</td>
    <td></td>
<td>

`$kendo-calendar-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-line-height</td>
    <td></td>
<td>

`$kendo-calendar-line-height`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-padding-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-width</td>
    <td></td>
<td>

`$kendo-calendar-cell-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-height</td>
    <td></td>
<td>

`$kendo-calendar-cell-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-line-height</td>
    <td></td>
<td>

`2`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-header-cell-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar header cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-height</td>
    <td></td>
<td>

`$kendo-calendar-cell-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-line-height</td>
    <td></td>
<td>

`normal`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-font-weight</td>
    <td></td>
<td>

`bold`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-caption-color</td>
    <td></td>
<td>

`$kendo-subtle-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar captions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-padding-block-end</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom padding of calendar views.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-view-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the views in the multiview calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar weekend cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar weekend cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar today cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar today cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-hover-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar today cell when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar today cell when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-today-border-radius</td>
    <td></td>
<td>

`9999px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the calendar today cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar week number cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-week-number-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar week number cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the other months calendar cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-other-month-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the other months calendar cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the calendar cells when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the calendar cells when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-text</td>
    <td></td>
<td>

`var( --kendo-selected-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-border</td>
    <td></td>
<td>

`var( --kendo-selected-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px $kendo-calendar-cell-selected-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the selected calendar cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-bg</td>
    <td></td>
<td>

`var( --kendo-selected-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected calendar cell when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-hover-text</td>
    <td></td>
<td>

`var( --kendo-selected-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected calendar cell when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px get-theme-color-var( neutral-130)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the selected calendar cell when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-cell-selected-focus-shadow</td>
    <td></td>
<td>

`$kendo-calendar-cell-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the selected calendar cell when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-width</td>
    <td></td>
<td>

`5em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-item-height</td>
    <td></td>
<td>

`2em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the navigation items in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-text</td>
    <td></td>
<td>

`$kendo-calendar-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-border</td>
    <td></td>
<td>

`$kendo-calendar-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 ) map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the navigation in the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-infinite-calendar-view-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the infinite calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-range-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the range selection in the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-range-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the range selection in the calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-range-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the range selection in the calendar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Captcha

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
    <td>$kendo-captcha-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacer of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-width</td>
    <td></td>
<td>

`280px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-spacing</td>
    <td></td>
<td>

`$kendo-captcha-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the captcha.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-wrap-spacing</td>
    <td></td>
<td>

`$kendo-captcha-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the captcha image wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-image-controls-spacing</td>
    <td></td>
<td>

`math.div( $kendo-captcha-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the captcha image controls.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-offset-y</td>
    <td></td>
<td>

`math.div( $kendo-captcha-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the captcha validation text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-captcha-validation-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font-size of the captcha validation text.</div></div>
    </td>
</tr>
</tbody>
</table>

### Card

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
    <td>$kendo-card-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border-radius</td>
    <td></td>
<td>

`$kendo-border-radius-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the cards in the card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-bg</td>
    <td></td>
<td>

`$kendo-card-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the card when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-text</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the card when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the card when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-focus-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the card when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text weight of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Verical padding of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom border width of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-body-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-x</td>
    <td></td>
<td>

`$kendo-card-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-padding-y</td>
    <td></td>
<td>

`$kendo-card-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top border width of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-footer-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the card footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-font-weight</td>
    <td></td>
<td>

`$kendo-card-header-font-weight`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text weight of the card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-title-margin-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom margin of the card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-margin-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom margin of the card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-subtitle-text</td>
    <td></td>
<td>

`$kendo-subtle-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-img-max-width</td>
    <td></td>
<td>

`100px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum width of the card image.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-size</td>
    <td></td>
<td>

`3rem`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the avatar in the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-avatar-spacing</td>
    <td></td>
<td>

`$kendo-card-header-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the avatar and the text in the card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top border of the card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-actions-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the card actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scroll-button-radius</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the scroll button in the card deck.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-callout-size</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the card callout.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chart

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
    <td>$kendo-chart-label-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the label of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-inactive-bg</td>
    <td></td>
<td>

`var( --kendo-disabled-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inactive background color of the chart component.</div></div>
    </td>
</tr>
</tbody>
</table>

### Charts

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
    <td>$kendo-series-a</td>
    <td></td>
<td>

`get-theme-color( series-a, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td></td>
<td>

`get-theme-color( series-b, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td></td>
<td>

`get-theme-color( series-c, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td></td>
<td>

`get-theme-color( series-d, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td></td>
<td>

`get-theme-color( series-e, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td></td>
<td>

`get-theme-color( series-f, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td></td>
<td>

`$kendo-series-a`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-border-width</td>
    <td></td>
<td>

`0px default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-family of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-tooltip-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the tooltip of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-tooltip-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-sm, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the tooltip of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-lg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the title of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-pane-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-lg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the pane title of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-pane-title-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-weight of the pane title of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the chart component major grid lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the chart component minor grid lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-area-opacity</td>
    <td></td>
<td>

`.6`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the chart area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-area-inactive-opacity</td>
    <td></td>
<td>

`.1`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inactive opacity of the chart area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-line-inactive-opacity</td>
    <td></td>
<td>

`.3`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inactive opacity of the chart line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-tooltip-color</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the chart tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-tooltip-color-inverse</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inverse text color of the chart tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-crosshair-background</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart crosshairs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-crosshair-shared-tooltip-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the chart shared crosshair tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-crosshair-shared-tooltip-background</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart shared crosshair tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-crosshair-shared-tooltip-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chart shared crosshair tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-notes-background</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart notes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-notes-border</td>
    <td></td>
<td>

`$kendo-chart-notes-background`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chart notes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-notes-lines</td>
    <td></td>
<td>

`$kendo-chart-notes-background`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart note lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-text</td>
    <td></td>
<td>

`$kendo-chart-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-border</td>
    <td></td>
<td>

`$kendo-chart-handle-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-handle-hover-border</td>
    <td></td>
<td>

`var( --kendo-hover-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the chart handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error-bars-background</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the chart error bars.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selection-handle-size</td>
    <td></td>
<td>

`24px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the selection handle of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selection-border-color</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the selection handle of the chart component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-family of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-font-size</td>
    <td></td>
<td>

`var( -kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font-size of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line-height of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the treemap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-title-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the treemap title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-title-text</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the treemap title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treemap-title-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the treemap title.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chat

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
    <td>$kendo-chat-transition</td>
    <td></td>
<td>

`var( --kendo-transition, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow transition of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-link-hover-text</td>
    <td></td>
<td>

`var( --kendo-link-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text of links in the bubble of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-link-text</td>
    <td></td>
<td>

`var( --kendo-link-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of links in the bubble of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-width</td>
    <td></td>
<td>

`500px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">the width of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-height</td>
    <td></td>
<td>

`600px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-typing-indicator-dot-size</td>
    <td></td>
<td>

`8px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the chat typeing indicator dot in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-typing-indicator-dot-spacing</td>
    <td></td>
<td>

`5px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the chat typeing indicator dot in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing between items of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between items of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-x</td>
    <td></td>
<td>

`$kendo-chat-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of message list of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-y</td>
    <td></td>
<td>

`$kendo-chat-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of message list of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-spacing</td>
    <td></td>
<td>

`$kendo-chat-item-spacing-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of message list of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-font-size</td>
    <td></td>
<td>

`smaller`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the timestap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-transform</td>
    <td></td>
<td>

`uppercase`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">the text transform of the timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-bg</td>
    <td></td>
<td>

`normal`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">the background of the timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-scroll-button</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the scroll button in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-card-deck-scrollbar-size</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the card deck scrollbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border-radius-sm</td>
    <td></td>
<td>

`var( --kendo-border-radius, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the small bubble message</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-size</td>
    <td></td>
<td>

`32px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-avatar-spacing</td>
    <td></td>
<td>

`$kendo-chat-item-spacing-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-x</td>
    <td></td>
<td>

`$kendo-toolbar-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-padding-y</td>
    <td></td>
<td>

`$kendo-toolbar-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-spacing</td>
    <td></td>
<td>

`$kendo-toolbar-spacing-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-bg</td>
    <td></td>
<td>

`$kendo-toolbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-text</td>
    <td></td>
<td>

`$kendo-toolbar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the toolbar in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-line-height</td>
    <td></td>
<td>

`$kendo-chat-bubble-line-height`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-border</td>
    <td></td>
<td>

`$kendo-chat-bubble-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-hover-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover shadow of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-selected-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected shadow of the bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-text</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-border</td>
    <td></td>
<td>

`$kendo-chat-alt-bubble-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-hover-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover shadow of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-selected-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected shadow of the alt bubble in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background of quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-text</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of quick reply in the chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-quick-reply-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border of quick reply in the chat.</div></div>
    </td>
</tr>
</tbody>
</table>

### Checkbox

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
    <td>$kendo-checkbox-border-radius</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-bg</td>
    <td></td>
<td>

`$kendo-component-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-text</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-text</td>
    <td></td>
<td>

`get-theme-color( neutral, 130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-border</td>
    <td></td>
<td>

`$kendo-checkbox-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-border</td>
    <td></td>
<td>

`$kendo-checkbox-checked-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-checked-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background of hovered and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-checked-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-checked-border</td>
    <td></td>
<td>

`$kendo-checkbox-hover-checked-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border of hovered and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-border</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-shadow</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-focus-outline</td>
    <td></td>
<td>

`1px solid get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of a focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-text</td>
    <td></td>
<td>

`get-theme-color( primary, 100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-indeterminate-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-indeterminate-text</td>
    <td></td>
<td>

`get-theme-color( primary, 110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-indeterminate-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-indeterminate-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-indeterminate-text</td>
    <td></td>
<td>

`get-theme-color( neutral, 60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-indeterminate-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-bg</td>
    <td></td>
<td>

`$kendo-checkbox-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-text</td>
    <td></td>
<td>

`$kendo-invalid-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-invalid-border</td>
    <td></td>
<td>

`$kendo-invalid-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indicator-type</td>
    <td></td>
<td>

`image`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Type of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-glyph-font-family</td>
    <td></td>
<td>

`"WebComponentsIcons", monospace`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph font family of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-glyph</td>
    <td></td>
<td>

`"\e118"`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-glyph</td>
    <td></td>
<td>

`"\e121"`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of indeterminate checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-hover-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of hovered checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-checked-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-checked-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-indeterminate-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='3' y='3' width='10' height='10' rx='2' fill='#{$kendo-checkbox-indeterminate-text}'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of indeterminate checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-checked-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-hover-checked-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of hovered and checked checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-hover-indeterminate-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='3' y='3' width='10' height='10' rx='2' fill='#{$kendo-checkbox-hover-indeterminate-text}'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of hovered and indeterminate checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-checked-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$kendo-checkbox-disabled-checked-text}' stroke-linecap='square' stroke-linejoin='square' stroke-width='2' d='M3,8 l3,3 l7-7'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-disabled-indeterminate-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect x='3' y='3' width='10' height='10' rx='2' fill='#{$kendo-checkbox-disabled-indeterminate-text}'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of indeterminate checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-label-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the checkbox inside a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between items of horizontal checkbox list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of checkbox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-list-item-padding-y</td>
    <td></td>
<td>

`$kendo-list-item-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of checkbox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checkbox ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-checkbox-ripple-opacity</td>
    <td></td>
<td>

`.25`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of checkbox ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Chip

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
    <td>$kendo-chip-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the text and the icons of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-width</td>
    <td></td>
<td>

`1em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The chip avatar width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-height</td>
    <td></td>
<td>

`1em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The chip avatar height.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-avatar-flex-basis</td>
    <td></td>
<td>

`1em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The chip avatar flex basis.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-disabled-bg</td>
    <td></td>
<td>

`var( --kendo-disabled-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of solid disabled chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-solid-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of solid disabled chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-disabled-bg</td>
    <td></td>
<td>

`var( $kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of outline disabled chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-outline-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of outline disabled chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-offset</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the outline focused chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the outline focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the outline focused button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the chip that are connected to the $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-calc-size</td>
    <td></td>
<td>

`calc( #{$kendo-chip-line-height-md} * 1em + #{$kendo-chip-padding-y-md} * 2 + #{$kendo-chip-border-width} * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Calculated height of the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-chip-padding-x-sm,
        padding-y: $kendo-chip-padding-y-sm,
        font-size: $kendo-chip-font-size-sm,
        line-height: $kendo-chip-line-height-sm
    ),
    md: (
        padding-x: $kendo-chip-padding-x-md,
        padding-y: $kendo-chip-padding-y-md,
        font-size: $kendo-chip-font-size-md,
        line-height: $kendo-chip-line-height-md
    ),
    lg: (
        padding-x: $kendo-chip-padding-x-lg,
        padding-y: $kendo-chip-padding-y-lg,
        font-size: $kendo-chip-font-size-lg,
        line-height: $kendo-chip-line-height-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the chip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chip-list-sizes</td>
    <td></td>
<td>

`(
    sm: map.get( $kendo-spacing, 1 ),
    md: map.get( $kendo-spacing, 1 ),
    lg: map.get( $kendo-spacing, 1 )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the chip list.</div></div>
    </td>
</tr>
</tbody>
</table>

### Cologradient

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
    <td>$kendo-colorgradient-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacer of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-width</td>
    <td></td>
<td>

`260px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-padding-y</td>
    <td></td>
<td>

`$kendo-colorgradient-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-padding-x</td>
    <td></td>
<td>

`math.div( $kendo-colorgradient-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-spacing</td>
    <td></td>
<td>

`$kendo-colorgradient-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-2, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-focus-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color gradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color gradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-spacing</td>
    <td></td>
<td>

`math.div( $kendo-colorgradient-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the color gradient canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-rectangle-height</td>
    <td></td>
<td>

`180px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height the color gradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-rectangle-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color gradient canvas hsv rectangle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-draghandle-shadow</td>
    <td></td>
<td>

`0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13), inset 0px 0px 0px 3px #FFFFFF`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the color gradient canvas draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-input-width</td>
    <td></td>
<td>

`48px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default input width of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-input-spacing</td>
    <td></td>
<td>

`math.div( $kendo-colorgradient-spacer, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Input spacing of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-input-label-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Input label font size of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-input-label-spacing</td>
    <td></td>
<td>

`math.div( $kendo-colorgradient-spacer, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Input label spacing of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-input-label-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Input label text color of the color gradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-contrast-ratio-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the color gradient contrast ratio text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-contrast-spacing</td>
    <td></td>
<td>

`math.div( $kendo-colorgradient-spacer, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the color gradient contrast tool.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-track-size</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the color gradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color gradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color gradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color gradient slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-vertical-size</td>
    <td></td>
<td>

`180px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the color gradient vertical slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-horizontal-size</td>
    <td></td>
<td>

`100%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the color gradient horizontal slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-slider-alpha-bgr</td>
    <td></td>
<td>

`"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC"`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background image of the color gradient alpha slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-width</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-height</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-2, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-focus-shadow</td>
    <td></td>
<td>

`$kendo-colorgradient-draghandle-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border color of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-draghandle-hover-shadow</td>
    <td></td>
<td>

`$kendo-colorgradient-draghandle-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover shadow of the color gradient draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-draghandle-offset-y</td>
    <td></td>
<td>

`( -1 * math.div( $kendo-colorgradient-draghandle-height, 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical offset of the color gradient canvas draghandle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorgradient-canvas-draghandle-offset-x</td>
    <td></td>
<td>

`( -1 * math.div( $kendo-colorgradient-draghandle-width, 2 ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal offset of the color gradient canvas draghandle.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color-preview

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
    <td>$kendo-color-preview-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default background color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-text</td>
    <td></td>
<td>

`get-theme-color( error, 190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-border</td>
    <td></td>
<td>

`currentColor`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview when no color is selected.</div></div>
    </td>
</tr>
</tbody>
</table>

### Coloreditor

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
    <td>$kendo-coloreditor-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacer of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-min-width</td>
    <td></td>
<td>

`260px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Min width of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-2, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border color of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-focus-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the color editor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-header-padding-y</td>
    <td></td>
<td>

`$kendo-coloreditor-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the color editor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-header-padding-x</td>
    <td></td>
<td>

`$kendo-coloreditor-header-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the color editor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-header-actions-spacing</td>
    <td></td>
<td>

`math.div( $kendo-coloreditor-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the color editor header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-color-preview-width</td>
    <td></td>
<td>

`34px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the color editor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-color-preview-height</td>
    <td></td>
<td>

`14px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the color editor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-preview-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the colors in the color editor preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-views-padding-y</td>
    <td></td>
<td>

`$kendo-coloreditor-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the color editor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-views-padding-x</td>
    <td></td>
<td>

`$kendo-coloreditor-views-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the color editor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-views-spacing</td>
    <td></td>
<td>

`$kendo-coloreditor-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the color editor views container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-footer-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the color editor footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-footer-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the color editor footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-colorgradient-focus-outline-color</td>
    <td></td>
<td>

`rgba(0, 0, 0, 0.3)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the focused colorgradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-colorgradient-focus-outline</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of the focused colorgradient.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-coloreditor-colorgradient-focus-outline-offset</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline offset of the focused colorgradient.</div></div>
    </td>
</tr>
</tbody>
</table>

### Colorpalette

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
    <td>$kendo-colorpalette-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the color palette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the color palette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-line-height</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the color palette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-outline</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline color of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-height</td>
    <td></td>
<td>

`$kendo-colorpalette-tile-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-focus-outline</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus outline color of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 2px $kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-hover-outline</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover outline color of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-hover-shadow</td>
    <td></td>
<td>

`inset 0 0 0 2px $kendo-colorpalette-tile-hover-outline, inset 0 0 0 4px $kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover shadow of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-selected-outline</td>
    <td></td>
<td>

`$kendo-colorpalette-tile-hover-outline`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected outline color of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-selected-shadow</td>
    <td></td>
<td>

`$kendo-colorpalette-tile-hover-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected shadow of the color palette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colorpalette-tile-selected-hover-outline</td>
    <td></td>
<td>

`$kendo-colorpalette-tile-focus-outline`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected hover outline color of the color palette tile.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dialog

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
    <td>$kendo-dialog-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the dialog title bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-inner-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the content of the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-inner-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the content of the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the top border of the dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the action buttons of the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-button-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the buttons in the header of the dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow around the dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Draggable

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
    <td>$kendo-drag-clue-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Borer radius of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Borer width of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Borer style of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-padding-x</td>
    <td></td>
<td>

`$kendo-padding-lg-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-padding-y</td>
    <td></td>
<td>

`$kendo-padding-lg-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-spacing</td>
    <td></td>
<td>

`.4ex`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-opacity</td>
    <td></td>
<td>

`.8`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-text</td>
    <td></td>
<td>

`var( --kendo-selected-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-border</td>
    <td></td>
<td>

`var( --kendo-selected-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drag-clue-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-2, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the drag clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-arrow-size</td>
    <td></td>
<td>

`6px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Arrow size of the drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-arrow-spacing</td>
    <td></td>
<td>

`math.div( $kendo-drop-hint-arrow-size, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Arrow spacing of the drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-h-width</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the horizontal drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-h-height</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the horizontal drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-v-width</td>
    <td></td>
<td>

`$kendo-drop-hint-line-h-height`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the vertical drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-line-v-height</td>
    <td></td>
<td>

`$kendo-drop-hint-line-h-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the vertical drop hint line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drop-hint-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background-color of the drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Drawer

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
    <td>$kendo-drawer-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-x</td>
    <td></td>
<td>

`var( --kendo-padding-x, #{$kendo-padding-md-x} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-content-padding-y</td>
    <td></td>
<td>

`var( --kendo-padding-y, #{$kendo-padding-md-y} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the drawer content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-width</td>
    <td></td>
<td>

`7px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollbar width of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollbar color of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-40 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollbar background of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-radius</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollbar border radius of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-scrollbar-hover-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollbar hover color of the drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-padding-y</td>
    <td></td>
<td>

`var( --kendo-padding-x, #{$kendo-padding-md-x} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-font-size</td>
    <td></td>
<td>

`$kendo-drawer-font-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-lg, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-padding-x</td>
    <td></td>
<td>

`$kendo-drawer-item-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the drawer item in each level.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-level-count</td>
    <td></td>
<td>

`5`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Count of the drawer item levels.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-icon-size</td>
    <td></td>
<td>

`var( --kendo-icon-size, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-mini-initial-width</td>
    <td></td>
<td>

`calc( 2 * #{$kendo-drawer-item-padding-x} + #{$kendo-drawer-icon-size} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Initial width of the mini drawer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the drawer item ripple</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-ripple-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the drawer item ripple</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-bg</td>
    <td></td>
<td>

`$kendo-drawer-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-text</td>
    <td></td>
<td>

`$kendo-drawer-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-bg</td>
    <td></td>
<td>

`$kendo-drawer-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hovered drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-hover-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hovered drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-bg</td>
    <td></td>
<td>

`$kendo-drawer-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-text</td>
    <td></td>
<td>

`$kendo-drawer-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the focused drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-focus-icon-text</td>
    <td></td>
<td>

`$kendo-drawer-item-icon-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the selected drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-text</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected drawer item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-hover-bg</td>
    <td></td>
<td>

`var( --kendo-selected-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected and hovered drawer item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-drawer-item-selected-hover-text</td>
    <td></td>
<td>

`var( --kendo-selected-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected and hovered drawer item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Dropzone

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
    <td>$kendo-dropzone-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-min-height</td>
    <td></td>
<td>

`220px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Min height of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing below the icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-icon-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the icon when the dropzone is hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-size</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing below the hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-hint-text</td>
    <td></td>
<td>

`$kendo-dropzone-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-font-weight</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-spacing</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing below the note.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dropzone-note-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the note.</div></div>
    </td>
</tr>
</tbody>
</table>

### Editor

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
    <td>$kendo-editor-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-text</td>
    <td></td>
<td>

`var( --kendo-input-placeholder-text, #{$kendo-input-placeholder-text} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The placeholder text color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-placeholder-opacity</td>
    <td></td>
<td>

`var( --kendo-input-placeholder-opacity, #{$kendo-input-placeholder-opacity} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The placeholder opacity of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-content-outline-color</td>
    <td></td>
<td>

`var( --kendo-body-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the editor content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the editor resize handle</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the editor resize handle</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-export-tool-icon-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the editor export tool icon</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The outline width of the editor selected node</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected text color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected background color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-highlighted-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The highlighted background color of the editor</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-border</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the editor resize handle</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-resize-handle-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the editor resize handle</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-selectednode-outline-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the editor selected node</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-td-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the inline editor data cell</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-editor-inline-hover-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the inline editor</div></div>
    </td>
</tr>
</tbody>
</table>

### Expander

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
    <td>$kendo-expander-margin-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-shadow</td>
    <td></td>
<td>

`inset 0 0 0 2px get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-expanded-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the expanded expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-disabled-bg</td>
    <td></td>
<td>

`var( --kendo-disabled-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the disabled expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the disabled expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-offset</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus outline color of the expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-shadow</td>
    <td></td>
<td>

`inset 0px 0px 0px 2px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow color of the focused expander.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the expander header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the expander header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the expander header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the expander header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered expander header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-title-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the expander title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-sub-title-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the expander sub-title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the expander indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-text</td>
    <td></td>
<td>

`var( --kendo-expander-text, #{$kendo-expander-text} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the expander indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the expander content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the expander content.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filemanager

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
    <td>$kendo-filemanager-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the filemanager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the filemanager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the filemanager component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-toolbar-bg</td>
    <td></td>
<td>

`$kendo-toolbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-toolbar-text</td>
    <td></td>
<td>

`$kendo-toolbar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-toolbar-border</td>
    <td></td>
<td>

`$kendo-toolbar-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-padding-x</td>
    <td></td>
<td>

`$kendo-filemanager-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-padding-y</td>
    <td></td>
<td>

`$kendo-filemanager-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-width</td>
    <td></td>
<td>

`20%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-border-width</td>
    <td></td>
<td>

`$kendo-filemanager-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-navigation-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-border-width</td>
    <td></td>
<td>

`$kendo-filemanager-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-bg</td>
    <td></td>
<td>

`$kendo-toolbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-breadcrumb-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the breadcrumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the listview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the listview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-width</td>
    <td></td>
<td>

`120px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the listview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-height</td>
    <td></td>
<td>

`120px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the listview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-focus-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the focused listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-selected-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-selected-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-listview-item-icon-selected-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected listview item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-grid-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-grid-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-grid-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-padding-x</td>
    <td></td>
<td>

`$kendo-filemanager-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-padding-y</td>
    <td></td>
<td>

`$kendo-filemanager-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-width</td>
    <td></td>
<td>

`20%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-border-width</td>
    <td></td>
<td>

`$kendo-filemanager-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-spacing</td>
    <td></td>
<td>

`$kendo-filemanager-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-column-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-icon-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-icon-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the preview icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-preview-icon-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the preview icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filemanger

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
    <td>$kendo-filemanager-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The space between the filemanger items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the filemanger.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the filemanger.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the filemanger.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the filemanger.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filemanager-toolbar-border-width</td>
    <td></td>
<td>

`$kendo-filemanager-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Filter

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
    <td>$kendo-filter-padding-x</td>
    <td></td>
<td>

`$kendo-padding-md-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-padding-y</td>
    <td></td>
<td>

`$kendo-padding-md-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-bottom-margin</td>
    <td></td>
<td>

`30px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom margin of the filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-size</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the line that connects the filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-operator-dropdown-width</td>
    <td></td>
<td>

`15em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the dropdown elements in the filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-field-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the preview field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-preview-operator-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the preview operator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the filter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-line-bg</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the line that connects the filter items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-toolbar-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the focused filter.</div></div>
    </td>
</tr>
</tbody>
</table>

### Floating-action-button

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
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-padding-y</td>
    <td></td>
<td>

`$kendo-fab-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-offset</td>
    <td></td>
<td>

`$kendo-button-focus-offset`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-width</td>
    <td></td>
<td>

`$kendo-button-focus-outline-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-focus-outline-style</td>
    <td></td>
<td>

`$kendo-button-focus-outline-style`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-width</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB icon width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-height</td>
    <td></td>
<td>

`$kendo-fab-icon-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB icon height.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB icon spacing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB items horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-items-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB items vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item text horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item text vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the FAB item text border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the FAB item text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text-offset-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-offset</td>
    <td></td>
<td>

`$kendo-button-focus-offset`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Offset of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-width</td>
    <td></td>
<td>

`$kendo-button-focus-outline-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-outline-style</td>
    <td></td>
<td>

`$kendo-button-focus-outline-style`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item icon horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">FAB item icon vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the FAB item icon border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-width</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-icon-height</td>
    <td></td>
<td>

`$kendo-fab-item-icon-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the FAB item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-theme-colors</td>
    <td></td>
<td>

`(
    solid: map.get( $kendo-button-theme-colors, "solid")
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-fab-padding-x-sm,
        padding-y: $kendo-fab-padding-y-sm
    ),
    md: (
        padding-x: $kendo-fab-padding-x-md,
        padding-y: $kendo-fab-padding-y-md
    ),
    lg: (
        padding-x: $kendo-fab-padding-x-lg,
        padding-y: $kendo-fab-padding-y-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the FAB.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-offset-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-text</td>
    <td></td>
<td>

`var( --kendo-selected-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active text color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active background color of the FAB item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-fab-item-active-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active border color of the FAB item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Floating-label

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
    <td>$kendo-floating-label-scale</td>
    <td></td>
<td>

`1`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The resize scale of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-height</td>
    <td></td>
<td>

`calc( #{$kendo-floating-label-line-height} * #{$kendo-floating-label-font-size} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-x</td>
    <td></td>
<td>

`calc( #{$kendo-input-padding-x-md} + #{$kendo-input-border-width} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal offset of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-offset-y</td>
    <td></td>
<td>

`calc( #{$kendo-floating-label-height} + #{$kendo-input-border-width} + #{$kendo-input-padding-y-md} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical offset of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-scale</td>
    <td></td>
<td>

`1`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus resize scale of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal focus offset of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-offset-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical focus offset of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-transition</td>
    <td></td>
<td>

`.2s ease-out`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the floating label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-floating-label-invalid-text</td>
    <td></td>
<td>

`var( --kendo-invalid-text, #{$kendo-invalid-text} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the floating label</div></div>
    </td>
</tr>
</tbody>
</table>

### Form

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
    <td>$kendo-form-spacer</td>
    <td></td>
<td>

`( $kendo-padding-md-x * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the inline form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights of the form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-margin</td>
    <td></td>
<td>

`2em 0 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the form fieldset</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-fieldset-padding</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the form fieldset</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-margin</td>
    <td></td>
<td>

`0 0 map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-padding</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-width</td>
    <td></td>
<td>

`0 0 map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-border-color</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-width</td>
    <td></td>
<td>

`100%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-legend-text-transform</td>
    <td></td>
<td>

`uppercase`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text capitalization of the form legend</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-margin-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-label-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weight of the form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-button-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the form button</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the form hint</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-font-style</td>
    <td></td>
<td>

`normal`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the form hint</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-margin-top</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top margin of the form hint</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-hint-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the font hint</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-rows-spacing-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Form row small size spacing</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-rows-spacing-md</td>
    <td></td>
<td>

`$kendo-form-rows-spacing-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Form row medium size spacing</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-rows-spacing-lg</td>
    <td></td>
<td>

`$kendo-form-rows-spacing-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Form row large size spacing</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-margin</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 ) 0 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the form separator</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-form-separator-border-color</td>
    <td></td>
<td>

`$kendo-form-legend-border-color`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the form separator</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-padding-top</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The top padding of the horizontal form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the horizontal form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-label-width</td>
    <td></td>
<td>

`25%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the horizontal form label</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-horizontal-form-field-wrap-max-width</td>
    <td></td>
<td>

`calc( ( 100% - #{$kendo-horizontal-form-label-width} ) - #{$kendo-horizontal-form-label-margin-x} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The max-width of the horizontal form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-inline-form-element-width</td>
    <td></td>
<td>

`25%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the element of the inline form</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-forms-invalid-color</td>
    <td></td>
<td>

`var( --kendo-invalid-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The invalid text color of the form</div></div>
    </td>
</tr>
</tbody>
</table>

### Gantt

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
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-bg</td>
    <td></td>
<td>

`rgba( $kendo-color-black, .04 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-nonwork-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt non-working days.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-size</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-fill</td>
    <td></td>
<td>

`black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background fill color of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-line-selected-fill</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background fill of the gantt connecting lines.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-size</td>
    <td></td>
<td>

`8px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-bg</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-border</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-dot-hover-border</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of the gantt task dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-bg</td>
    <td></td>
<td>

`$kendo-gantt-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-border</td>
    <td></td>
<td>

`$kendo-gantt-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-milestone-selected-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the gantt milestone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt summary.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-summary-progress-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt summary progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-selected-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the gantt task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-progress-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the gantt task progress.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-actions-padding-y</td>
    <td></td>
<td>

`$kendo-padding-md-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the gantt task actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-task-actions-padding-x</td>
    <td></td>
<td>

`$kendo-padding-md-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the gantt task actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-margin-y</td>
    <td></td>
<td>

`.45em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border-width</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-line-height</td>
    <td></td>
<td>

`.85em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the gantt task planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-dependency-margin-y</td>
    <td></td>
<td>

`.65em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the gantt planned dependencies.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-width</td>
    <td></td>
<td>

`6px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-height</td>
    <td></td>
<td>

`$kendo-gantt-planned-moment-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-border-radius</td>
    <td></td>
<td>

`calc( ( #{$kendo-gantt-planned-border-width * 2} + #{$kendo-gantt-planned-moment-width} ) / 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-moment-left-margin-x</td>
    <td></td>
<td>

`calc( #{$kendo-gantt-planned-border-width} / 2 - #{$kendo-gantt-planned-moment-border-radius} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the gantt planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-moment-margin-x</td>
    <td></td>
<td>

`math.div( $kendo-gantt-planned-moment-width, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the gantt milestone planned line dot.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-height</td>
    <td></td>
<td>

`$kendo-gantt-planned-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-duration-hover-height</td>
    <td></td>
<td>

`calc( #{$kendo-gantt-planned-border-width} + 1px )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover height of the gantt planned line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-single-drag-hint-top</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-summary-drag-hint-top</td>
    <td></td>
<td>

`.5em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt summary drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-milestone-drag-hint-top</td>
    <td></td>
<td>

`.3em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt planned milestone drag hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-offset-resize-handler-margin-x</td>
    <td></td>
<td>

`1.4em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">of the gantt.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-planned-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt planned tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg</td>
    <td></td>
<td>

`get-theme-color-var( error-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-bg-lighter</td>
    <td></td>
<td>

`get-theme-color-var( error-110)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Complement background color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-delayed-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( error-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt delayed task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg</td>
    <td></td>
<td>

`get-theme-color-var( success-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-bg-lighter</td>
    <td></td>
<td>

`get-theme-color-var( success-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Complement background color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-advanced-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( success-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background hover color of the gantt advanced task.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-action-on-offset-text</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the gantt delayed task action.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-offset-resize-handler-top</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the gantt delayed task resize handler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-width</td>
    <td></td>
<td>

`200px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt validation tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-label-width</td>
    <td></td>
<td>

`50px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the gantt validation tooltip label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-valid-border</td>
    <td></td>
<td>

`get-theme-color-var( success-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip in valid state.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gantt-validation-tooltip-invalid-border</td>
    <td></td>
<td>

`get-theme-color-var( error-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the gantt validation tooltip in invalid state.</div></div>
    </td>
</tr>
</tbody>
</table>

### Grid

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
    <td>$kendo-grid-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-x</td>
    <td></td>
<td>

`$kendo-table-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-padding-y</td>
    <td></td>
<td>

`$kendo-table-cell-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-x</td>
    <td></td>
<td>

`$kendo-grid-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-padding-y</td>
    <td></td>
<td>

`$kendo-grid-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-x</td>
    <td></td>
<td>

`$kendo-toolbar-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-padding-y</td>
    <td></td>
<td>

`$kendo-toolbar-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-x</td>
    <td></td>
<td>

`$kendo-grid-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-padding-y</td>
    <td></td>
<td>

`$kendo-grid-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td></td>
<td>

`$kendo-grid-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td></td>
<td>

`$kendo-grid-filter-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-x</td>
    <td></td>
<td>

`$kendo-grid-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid edit cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-edit-cell-padding-y</td>
    <td></td>
<td>

`5px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid edit cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-size</td>
    <td></td>
<td>

`6px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-line-size</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line size of the grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-dot-size</td>
    <td></td>
<td>

`$kendo-grid-group-dropclue-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Dot size of the grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-height</td>
    <td></td>
<td>

`calc( #{$kendo-chip-calc-size} + #{$kendo-grid-group-dropclue-size} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the grid  group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-top</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top offset of the grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-bg</td>
    <td></td>
<td>

`$kendo-table-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-text</td>
    <td></td>
<td>

`$kendo-table-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-border</td>
    <td></td>
<td>

`$kendo-table-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-bg</td>
    <td></td>
<td>

`$kendo-table-alt-row-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-text</td>
    <td></td>
<td>

`$kendo-table-alt-row-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-alt-border</td>
    <td></td>
<td>

`$kendo-table-alt-row-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-bg</td>
    <td></td>
<td>

`$kendo-table-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hover rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-text</td>
    <td></td>
<td>

`$kendo-table-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hover rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hover-border</td>
    <td></td>
<td>

`$kendo-table-hover-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hover rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-bg</td>
    <td></td>
<td>

`$kendo-table-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-text</td>
    <td></td>
<td>

`$kendo-table-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-border</td>
    <td></td>
<td>

`$kendo-table-selected-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-hover-bg</td>
    <td></td>
<td>

`$kendo-table-selected-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-hover-text</td>
    <td></td>
<td>

`$kendo-table-selected-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-selected-hover-border</td>
    <td></td>
<td>

`$kendo-table-selected-hover-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of selected rows in grid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border-width-y</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical border width of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border-width-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal border width of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-font-size</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-menu-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Menu spacing of the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-first-border-width</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the first cell in the grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-bg</td>
    <td></td>
<td>

`$kendo-table-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-text</td>
    <td></td>
<td>

`$kendo-table-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-border</td>
    <td></td>
<td>

`$kendo-table-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-header-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-bg</td>
    <td></td>
<td>

`$kendo-table-footer-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-text</td>
    <td></td>
<td>

`$kendo-table-footer-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-footer-border</td>
    <td></td>
<td>

`$kendo-table-footer-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-bg</td>
    <td></td>
<td>

`$kendo-toolbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-text</td>
    <td></td>
<td>

`$kendo-toolbar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-header-border</td>
    <td></td>
<td>

`$kendo-toolbar-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid grouping header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-border-width-y</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical border width of the grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-bg</td>
    <td></td>
<td>

`$kendo-table-group-row-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-text</td>
    <td></td>
<td>

`$kendo-table-group-row-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-grouping-row-border</td>
    <td></td>
<td>

`$kendo-table-group-row-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid grouping row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-x</td>
    <td></td>
<td>

`$kendo-grid-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filter-cell-padding-y</td>
    <td></td>
<td>

`$kendo-grid-filter-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid filter cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-toolbar-padding-x</td>
    <td></td>
<td>

`$kendo-toolbar-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-toolbar-padding-y</td>
    <td></td>
<td>

`$kendo-toolbar-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-toolbar-spacing</td>
    <td></td>
<td>

`$kendo-toolbar-spacing-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-toolbar-border-width</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the grid toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-border-width-y</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical border width of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-border-width-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal border width of the grid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-cell-placeholder-width</td>
    <td></td>
<td>

`80%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the grid cell placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-height</td>
    <td></td>
<td>

`var( --kendo-icon-size, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-spacing-y</td>
    <td></td>
<td>

`calc( var( --kendo-icon-spacing, .5rem ) / 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal offset of the grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-index-spacing-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical offset of the grid sort index.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing-lg, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid sort icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-indicator-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid sort indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sort-indicator-order-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid sort order indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sorted-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the sorted grid cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-command-cell-padding-y</td>
    <td></td>
<td>

`calc( #{$kendo-table-cell-padding-y} - (#{$kendo-button-calc-size} - #{$kendo-line-height-em} ) / 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid command cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-command-cell-button-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid command cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-padding-x</td>
    <td></td>
<td>

`$kendo-button-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-padding-y</td>
    <td></td>
<td>

`$kendo-button-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-border-width</td>
    <td></td>
<td>

`$kendo-button-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-gap</td>
    <td></td>
<td>

`$kendo-table-cell-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid group indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-indicator-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid group indicator icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-footer-border-width-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal border width of the grid group footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-footer-border-width-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical border width of the grid group footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-group-dropclue-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid group drop clue.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-cell-border-width</td>
    <td></td>
<td>

`$kendo-grid-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-text</td>
    <td></td>
<td>

`$kendo-grid-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-alt-bg</td>
    <td></td>
<td>

`$kendo-grid-sticky-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Alt background color of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-hover-bg</td>
    <td></td>
<td>

`$kendo-grid-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the grid sticky cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-bg</td>
    <td></td>
<td>

`$kendo-grid-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-text</td>
    <td></td>
<td>

`$kendo-grid-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-header-border</td>
    <td></td>
<td>

`$kendo-grid-sticky-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid sticky header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-footer-bg</td>
    <td></td>
<td>

`$kendo-grid-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid sticky footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-footer-hover-bg</td>
    <td></td>
<td>

`$kendo-grid-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the grid sticky footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-selected-bg</td>
    <td></td>
<td>

`$kendo-grid-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the grid sticky cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-selected-alt-bg</td>
    <td></td>
<td>

`$kendo-grid-sticky-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Alt selected background color of the grid sticky cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-sticky-selected-hover-bg</td>
    <td></td>
<td>

`$kendo-grid-selected-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected hover background color of the grid sticky cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-menu-container-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid filter menu container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-filter-menu-container-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid filter menu container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-width</td>
    <td></td>
<td>

`230px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid column menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-multicheck-font-size</td>
    <td></td>
<td>

`$kendo-list-font-size-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the grid column menu checkbox container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-multicheck-line-height</td>
    <td></td>
<td>

`$kendo-list-line-height-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the grid column menu checkbox container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-items-wrap-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid column menu items wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-items-wrap-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid column menu items wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-padding-y</td>
    <td></td>
<td>

`$kendo-list-item-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-padding-x</td>
    <td></td>
<td>

`$kendo-list-item-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-gap</td>
    <td></td>
<td>

`$kendo-list-item-padding-x-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon spacing of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-bg</td>
    <td></td>
<td>

`$kendo-list-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-text</td>
    <td></td>
<td>

`$kendo-list-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-hover-bg</td>
    <td></td>
<td>

`$kendo-list-item-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-hover-text</td>
    <td></td>
<td>

`$kendo-list-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-selected-bg</td>
    <td></td>
<td>

`$kendo-list-item-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-selected-text</td>
    <td></td>
<td>

`$kendo-list-item-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the grid column menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-item-icon-text</td>
    <td></td>
<td>

`$kendo-list-item-icon-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid column menu item icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-padding-y</td>
    <td></td>
<td>

`$kendo-grid-column-menu-item-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-padding-x</td>
    <td></td>
<td>

`$kendo-grid-column-menu-item-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-text-transform</td>
    <td></td>
<td>

`uppercase`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text transform of the grid column menu group header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-column-menu-group-header-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid column menu group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-drag-cell-width</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * 2.25 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the grid drag cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-hierarchy-col-width</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the grid hierarchy cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-grid-filterable-icon-spacing</td>
    <td></td>
<td>

`calc( #{$kendo-button-calc-size} + #{$kendo-grid-header-menu-spacing} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the grid filterable icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Icon

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
    <td>$kendo-icon-size</td>
    <td></td>
<td>

`1rem`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-padding</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Padding of the action icons container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Imageeditor

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
    <td>$kendo-imageeditor-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-margin-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-margin-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-padding-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-padding-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-content-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-content-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-content-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-content-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor content border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-action-pane-width</td>
    <td></td>
<td>

`if( $kendo-imageeditor-content-border-width == 0, 240px, calc( 240px + #{$kendo-imageeditor-content-border-width}) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor action pane width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop text color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-border</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-overlay-bg</td>
    <td></td>
<td>

`rgba( $kendo-color-black, .3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop overlay background color of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border width of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-crop-border-style</td>
    <td></td>
<td>

`dashed`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Crop border style of the imageeditor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-handle-margin-x</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle horizontal margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-handle-margin-y</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle vertical margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-handle-border-width</td>
    <td></td>
<td>

`0 2px 2px 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-handle-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-top-offset</td>
    <td></td>
<td>

`math.div( $kendo-imageeditor-resize-handle-size, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle top offset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-imageeditor-resize-left-offset</td>
    <td></td>
<td>

`math.div( $kendo-imageeditor-resize-handle-size, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Imageeditor resize handle left offset.</div></div>
    </td>
</tr>
</tbody>
</table>

### Input

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
    <td>$kendo-input-width</td>
    <td></td>
<td>

`100%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-border-height</td>
    <td></td>
<td>

`( $kendo-input-border-width * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of he border around the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-bg</td>
    <td></td>
<td>

`$kendo-input-solid-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-focus-text</td>
    <td></td>
<td>

`$kendo-input-solid-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-focus-bg</td>
    <td></td>
<td>

`$kendo-input-solid-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the solid input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-focus-text</td>
    <td></td>
<td>

`$kendo-input-solid-focus-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-input-solid-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-hover-focus-border</td>
    <td></td>
<td>

`$kendo-input-solid-focus-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus border color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-disabled-bg</td>
    <td></td>
<td>

`$kendo-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-solid-disabled-border</td>
    <td></td>
<td>

`$kendo-disabled-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the input</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-focus-text</td>
    <td></td>
<td>

`$kendo-input-outline-focus-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-input-outline-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-hover-focus-border</td>
    <td></td>
<td>

`$kendo-input-outline-focus-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus border color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-outline-disabled-border</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the outline input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-focus-text</td>
    <td></td>
<td>

`$kendo-input-flat-focus-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-input-flat-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-hover-focus-border</td>
    <td></td>
<td>

`$kendo-input-flat-focus-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus border color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-flat-disabled-border</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the flat input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-focus-text</td>
    <td></td>
<td>

`$kendo-picker-solid-focus-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-picker-solid-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-hover-focus-border</td>
    <td></td>
<td>

`$kendo-picker-solid-focus-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus border color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-solid-disabled-border</td>
    <td></td>
<td>

`$kendo-disabled-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the solid picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-border</td>
    <td></td>
<td>

`$kendo-picker-outline-hover-bg!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-hover-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-outline-disabled-border</td>
    <td></td>
<td>

`$kendo-picker-outline-disabled-text!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the outline picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-text</td>
    <td></td>
<td>

`$kendo-picker-flat-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus text color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-picker-flat-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus background color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-hover-focus-border</td>
    <td></td>
<td>

`$kendo-picker-flat-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover-focus border color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-text</td>
    <td></td>
<td>

`$kendo-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-picker-flat-disabled-border</td>
    <td></td>
<td>

`$kendo-picker-flat-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the flat picker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-input-padding-x-sm,
        padding-y: $kendo-input-padding-y-sm,
        font-size: $kendo-input-font-size-sm,
        line-height: $kendo-input-line-height-sm,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + #{$kendo-input-padding-y-sm * 2} ),
        button-padding-x: $kendo-input-padding-y-sm,
        button-padding-y: $kendo-input-padding-y-sm,
        button-width: $kendo-input-button-width-sm
    ),
    md: (
        padding-x: $kendo-input-padding-x-md,
        padding-y: $kendo-input-padding-y-md,
        font-size: $kendo-input-font-size-md,
        line-height: $kendo-input-line-height-md,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + #{$kendo-input-padding-y-md * 2} ),
        button-padding-x: $kendo-input-padding-y-md,
        button-padding-y: $kendo-input-padding-y-md,
        button-width: $kendo-input-button-width-md
    ),
    lg: (
        padding-x: $kendo-input-padding-x-lg,
        padding-y: $kendo-input-padding-y-lg,
        font-size: $kendo-input-font-size-lg,
        line-height: $kendo-input-line-height-lg,
        icon-size: calc( var( --kendo-icon-size, 1rem ) + #{$kendo-input-padding-y-lg * 2} ),
        button-padding-x: $kendo-input-padding-y-lg,
        button-padding-y: $kendo-input-padding-y-lg,
        button-width: $kendo-input-button-width-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map of the input.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-input-theme-colors</td>
    <td></td>
<td>

`(
    input: (
        solid: (
            text: $kendo-input-solid-text,
            bg: $kendo-input-solid-bg,
            border: $kendo-input-solid-border,

            hover-text: $kendo-input-solid-hover-text,
            hover-bg: $kendo-input-solid-hover-bg,
            hover-border: $kendo-input-solid-hover-border,

            focus-text: $kendo-input-solid-focus-text,
            focus-bg: $kendo-input-solid-focus-bg,
            focus-border: $kendo-input-solid-focus-border,

            hover-focus-text: $kendo-input-solid-hover-focus-text,
            hover-focus-bg: $kendo-input-solid-hover-focus-bg,
            hover-focus-border: $kendo-input-solid-hover-focus-border,

            disabled-text: $kendo-input-solid-disabled-text,
            disabled-bg: $kendo-input-solid-disabled-bg,
            disabled-border: $kendo-input-solid-disabled-border

        ),
        outline: (
            text: $kendo-input-outline-text,
            bg: $kendo-input-outline-bg,
            border: $kendo-input-outline-border,

            hover-text: $kendo-input-outline-hover-text,
            hover-bg: $kendo-input-outline-hover-bg,
            hover-border: $kendo-input-outline-hover-border,

            focus-text: $kendo-input-outline-focus-text,
            focus-bg: $kendo-input-outline-focus-bg,
            focus-border: $kendo-input-outline-focus-border,

            hover-focus-text: $kendo-input-outline-hover-focus-text,
            hover-focus-bg: $kendo-input-outline-hover-focus-bg,
            hover-focus-border: $kendo-input-outline-hover-focus-border,

            disabled-text: $kendo-input-outline-disabled-text,
            disabled-bg: $kendo-input-outline-disabled-bg,
            disabled-border: $kendo-input-outline-disabled-border
        ),
        flat: (
            text: $kendo-input-flat-text,
            bg: $kendo-input-flat-bg,
            border: $kendo-input-flat-border,

            hover-text: $kendo-input-flat-hover-text,
            hover-bg: $kendo-input-flat-hover-bg,
            hover-border: $kendo-input-flat-hover-border,

            focus-text: $kendo-input-flat-focus-text,
            focus-bg: $kendo-input-flat-focus-bg,
            focus-border: $kendo-input-flat-focus-border,

            hover-focus-tex: $kendo-input-flat-hover-focus-text,
            hover-focus-bg: $kendo-input-flat-hover-focus-bg,
            hover-focus-border: $kendo-input-flat-hover-focus-border,

            disabled-text: $kendo-input-flat-disabled-text,
            disabled-bg: $kendo-input-flat-disabled-bg,
            disabled-border: $kendo-input-flat-disabled-border
        )
    ),
    picker: (
        solid: (
            text: $kendo-picker-solid-text,
            bg: $kendo-picker-solid-bg,
            border: $kendo-picker-solid-border,

            hover-text: $kendo-picker-solid-hover-text,
            hover-bg: $kendo-picker-solid-hover-bg,
            hover-border: $kendo-picker-solid-hover-border,

            focus-text: $kendo-picker-solid-focus-text,
            focus-bg: $kendo-picker-solid-focus-bg,
            focus-border: $kendo-picker-solid-focus-border,

            hover-focus-tex: $kendo-picker-solid-hover-focus-text,
            hover-focus-bg: $kendo-picker-solid-hover-focus-bg,
            hover-focus-border: $kendo-picker-solid-hover-focus-border,

            disabled-text: $kendo-picker-solid-disabled-text,
            disabled-bg: $kendo-picker-solid-disabled-bg,
            disabled-border: $kendo-picker-solid-disabled-border
        ),
        outline: (
            text: $kendo-picker-outline-text,
            bg: $kendo-picker-outline-bg,
            border: $kendo-picker-outline-border,

            hover-text: $kendo-picker-outline-hover-text,
            hover-bg: $kendo-picker-outline-hover-bg,
            hover-border: $kendo-picker-outline-hover-border,

            focus-text: $kendo-picker-outline-focus-text,
            focus-bg: $kendo-picker-outline-focus-bg,
            focus-border: $kendo-picker-outline-focus-border,

            hover-focus-text: $kendo-picker-outline-hover-focus-text,
            hover-focus-bg: $kendo-picker-outline-hover-focus-bg,
            hover-focus-border: $kendo-picker-outline-hover-focus-border,

            disabled-text: $kendo-picker-outline-disabled-text,
            disabled-bg: $kendo-picker-outline-disabled-bg,
            disabled-border: $kendo-picker-outline-disabled-border
        ),
        flat: (
            text: $kendo-picker-flat-text,
            bg: $kendo-picker-flat-bg,
            border: $kendo-picker-flat-border,

            hover-text: $kendo-picker-flat-hover-text,
            hover-bg: $kendo-picker-flat-hover-bg,
            hover-border: $kendo-picker-flat-hover-border,

            focus-text: $kendo-picker-flat-focus-text,
            focus-bg: $kendo-picker-flat-focus-bg,
            focus-border: $kendo-picker-flat-focus-border,

            hover-focus-tex: $kendo-picker-flat-hover-focus-text,
            hover-focus-bg: $kendo-picker-flat-hover-focus-bg,
            hover-focus-border: $kendo-picker-flat-hover-focus-border,

            disabled-text: $kendo-picker-flat-disabled-text,
            disabled-bg: $kendo-picker-flat-disabled-bg,
            disabled-border: $kendo-picker-flat-disabled-border
        )
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Colors map of the input.</div></div>
    </td>
</tr>
</tbody>
</table>

### List

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
    <td>$kendo-list-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-group-label-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size-xs, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of list item group label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-group-label-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list item group label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-group-label-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list item group label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border-width</td>
    <td></td>
<td>

`1px 0 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of list group item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-icon-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the list item icon</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-header-shadow</td>
    <td></td>
<td>

`$kendo-box-shadow-depth-3`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-40 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-selected-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-disabled-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-item-disabled-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-group-item-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of list group items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-no-data-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the 'No Data' text.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listbox

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
    <td>$kendo-listbox-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between the listbox elements.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-button-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin between the listbox buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-width</td>
    <td></td>
<td>

`10em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-height</td>
    <td></td>
<td>

`200px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the listbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the listbox component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the listbox component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the listbox component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the drop hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listbox-drop-hint-border-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the drop hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listgroup

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
    <td>$kendo-listgroup-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the listgroup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the listgroup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the listgroup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the listgroup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the listgroup component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the listgroup component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the listgroup component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the listgroup items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the listgroup items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listgroup-item-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the listgroup item.</div></div>
    </td>
</tr>
</tbody>
</table>

### Listview

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
    <td>$kendo-listview-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of listview header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of listview header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-footer-padding-x</td>
    <td></td>
<td>

`$kendo-listview-header-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of listview footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-footer-padding-y</td>
    <td></td>
<td>

`$kendo-listview-header-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of listview footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-grid-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap between items of grid listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-text</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-bg</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-focus-shadow</td>
    <td></td>
<td>

`var( --kendo-list-item-focus-shadow, $kendo-list-item-focus-shadow )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-text</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-item-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected listview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-header-text</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of listview header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-header-bg</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-header-border</td>
    <td></td>
<td>

`$kendo-listview-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of listview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-footer-text</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of listview footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-listview-footer-bg</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of listview.</div></div>
    </td>
</tr>
</tbody>
</table>

### Loader

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
    <td>$kendo-loader-segment-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-segment-size-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the loader segment.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-padding-x-sm</td>
    <td></td>
<td>

`math.div( $kendo-loader-segment-size-sm, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-padding-y-sm</td>
    <td></td>
<td>

`math.div( $kendo-loader-segment-size-sm, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-equilateral-height</td>
    <td></td>
<td>

`.8660254038`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Equilateral height of the loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-spinner-3-width-sm</td>
    <td></td>
<td>

`( $kendo-loader-segment-size-sm * 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the spinner-3 loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-spinner-3-height-sm</td>
    <td></td>
<td>

`( $kendo-loader-spinner-3-width-sm * $kendo-loader-equilateral-height )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the spinner-3 loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-spinner-4-width-sm</td>
    <td></td>
<td>

`( $kendo-loader-segment-size-sm * 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the spinner-4 loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-spinner-4-height-sm</td>
    <td></td>
<td>

`$kendo-loader-spinner-4-width-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the spinner-4 loader.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-color</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-panel-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the container panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-gap-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap of the loader container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-loader-container-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the loader container.</div></div>
    </td>
</tr>
</tbody>
</table>

### Map

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
    <td>$kendo-map-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-height</td>
    <td></td>
<td>

`600px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator horizontal margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-margin-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator vertical margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-padding</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-width</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size) * 3 + #{$kendo-map-navigator-padding * 2} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-height</td>
    <td></td>
<td>

`$kendo-map-navigator-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator height.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-navigator-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map navigator border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-margin</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control margin.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-x</td>
    <td></td>
<td>

`$kendo-button-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-zoom-control-button-padding-y</td>
    <td></td>
<td>

`$kendo-map-zoom-control-button-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map zoom control vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-x</td>
    <td></td>
<td>

`$kendo-padding-sm-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-padding-y</td>
    <td></td>
<td>

`$kendo-padding-sm-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-font-size</td>
    <td></td>
<td>

`calc( #{$kendo-map-font-size} * .75 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution font size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-attribution-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map attribution background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-marker-size</td>
    <td></td>
<td>

`var( --kendo-icon-size-xxl, 2rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map marker size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-map-marker-fill</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map marker fill color.</div></div>
    </td>
</tr>
</tbody>
</table>

### Mediaplayer

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
    <td>$kendo-mediaplayer-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the mediaplayer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-overlay-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer overlay background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-quality-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer quality button border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-titlebar-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-titlebar-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-titlebar-bg</td>
    <td></td>
<td>

`rgba( $kendo-color-black, .4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-mediaplayer-titlebar-text</td>
    <td></td>
<td>

`$kendo-mediaplayer-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Mediaplayer titlebar text color.</div></div>
    </td>
</tr>
</tbody>
</table>

### Menu

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
    <td>$kendo-menu-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the menu border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-menu-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-menu-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Padding of menu root items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between menu root items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between menu root items text and icons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-margin</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between menu separator and items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-separator-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Separator width</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline-offset</td>
    <td></td>
<td>

`- map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base outline of focused menu item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-text</td>
    <td></td>
<td>

`var( --kendo-body-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-border</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-text</td>
    <td></td>
<td>

`$kendo-menu-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hover menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hover menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-text</td>
    <td></td>
<td>

`$kendo-menu-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-bg</td>
    <td></td>
<td>

`$kendo-menu-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-focus-outline</td>
    <td></td>
<td>

`var( --kendo-focus-outline, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-expanded-text</td>
    <td></td>
<td>

`$kendo-menu-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of expanded menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-expanded-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of expanded menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-item-disabled-bg</td>
    <td></td>
<td>

`$kendo-menu-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-x</td>
    <td></td>
<td>

`$kendo-popup-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-padding-y</td>
    <td></td>
<td>

`$kendo-popup-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border-width</td>
    <td></td>
<td>

`$kendo-popup-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-md, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-md, 30px )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $kendo-font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-border</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-2, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the menu popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-y-sm</td>
    <td></td>
<td>

`$kendo-list-item-padding-y-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-padding-end-sm</td>
    <td></td>
<td>

`calc( #{$kendo-menu-popup-item-padding-x-sm * 2} + var( --kendo-icon-size, 1rem ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end padding of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-margin-start-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The start margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-icon-margin-end-sm</td>
    <td></td>
<td>

`calc( -1 * (var( --kendo-icon-size, 1rem ) + #{$kendo-menu-popup-item-padding-x-sm}) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The end margin of the menu item expand icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-focus-outline-offset</td>
    <td></td>
<td>

`$kendo-menu-item-focus-outline-offset`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base shadow of focused menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the menu items in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-sizes</td>
    <td></td>
<td>

`(
    sm: (
        group-font-size: $kendo-menu-popup-font-size-sm,
        group-line-height: $kendo-menu-popup-line-height-sm,
        link-padding-x: $kendo-menu-popup-item-padding-x-sm,
        link-padding-y: $kendo-menu-popup-item-padding-y-sm,
        link-padding-inline-end: $kendo-menu-popup-item-padding-end-sm,
        arrow-margin-inline-start: $kendo-menu-popup-item-icon-margin-start-sm,
        arrow-margin-inline-end: $kendo-menu-popup-item-icon-margin-end-sm,
    ),
    md: (
        group-font-size: $kendo-menu-popup-font-size-md,
        group-line-height: $kendo-menu-popup-line-height-md,
        link-padding-x: $kendo-menu-popup-item-padding-x-md,
        link-padding-y: $kendo-menu-popup-item-padding-y-md,
        link-padding-inline-end: $kendo-menu-popup-item-padding-end-md,
        arrow-margin-inline-start: $kendo-menu-popup-item-icon-margin-start-md,
        arrow-margin-inline-end: $kendo-menu-popup-item-icon-margin-end-md,
    ),
    lg: (
        group-font-size: $kendo-menu-popup-font-size-lg,
        group-line-height: $kendo-menu-popup-line-height-lg,
        link-padding-x: $kendo-menu-popup-item-padding-x-lg,
        link-padding-y: $kendo-menu-popup-item-padding-y-lg,
        link-padding-inline-end: $kendo-menu-popup-item-padding-end-lg,
        arrow-margin-inline-start: $kendo-menu-popup-item-icon-margin-start-lg,
        arrow-margin-inline-end: $kendo-menu-popup-item-icon-margin-end-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-text</td>
    <td></td>
<td>

`$kendo-list-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-bg</td>
    <td></td>
<td>

`$kendo-list-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-text</td>
    <td></td>
<td>

`$kendo-list-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-hover-bg</td>
    <td></td>
<td>

`$kendo-list-item-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-text</td>
    <td></td>
<td>

`$kendo-menu-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-bg</td>
    <td></td>
<td>

`$kendo-menu-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-focus-outline</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of focused menu items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-text</td>
    <td></td>
<td>

`$kendo-list-item-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-expanded-bg</td>
    <td></td>
<td>

`$kendo-list-item-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of expanded menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-disabled-text</td>
    <td></td>
<td>

`$kendo-list-item-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-popup-item-disabled-bg</td>
    <td></td>
<td>

`$kendo-list-item-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of disabled menu item in popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, $kendo-component-bg )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of scroll menu buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-border</td>
    <td></td>
<td>

`var( --kendo-component-border, $kendo-component-border )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of scroll menu buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-hover-bg</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hover scroll menu buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-menu-scroll-button-hover-border</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of scroll hover menu buttons.</div></div>
    </td>
</tr>
</tbody>
</table>

### Messagebox

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
    <td>$kendo-message-box-margin</td>
    <td></td>
<td>

`0 0 map.get( $kendo-spacing, 3 ) 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin around the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-sm, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the message box.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-font-style</td>
    <td></td>
<td>

`normal`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font style of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-decoration</td>
    <td></td>
<td>

`underline`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text decoration of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-text</td>
    <td></td>
<td>

`var( --kendo-link-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the message box links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-message-box-link-hover-text</td>
    <td></td>
<td>

`var( --kendo-link-hover-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the message box links.</div></div>
    </td>
</tr>
</tbody>
</table>

### Notification

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
    <td>$kendo-notification-container-padding-y</td>
    <td></td>
<td>

`$kendo-padding-sm-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the notification container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-notification-border-radius</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-box-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the notification.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal spacing of the notification icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-close-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal spacing of the notification close icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-notification-icon-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the notification icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Orgchart

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
    <td></td>
<td>

`map.get( $kendo-spacing, 6)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing index of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-y</td>
    <td></td>
<td>

`$kendo-orgchart-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-padding-x</td>
    <td></td>
<td>

`$kendo-orgchart-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the orgchart.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-spacing</td>
    <td></td>
<td>

`$kendo-orgchart-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the orgchart node.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-group-spacing</td>
    <td></td>
<td>

`$kendo-orgchart-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the orgchart group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-container-spacing</td>
    <td></td>
<td>

`$kendo-orgchart-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the orgchart node container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-y</td>
    <td></td>
<td>

`$kendo-orgchart-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-padding-x</td>
    <td></td>
<td>

`$kendo-orgchart-node-group-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-border</td>
    <td></td>
<td>

`$kendo-card-focus-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border color of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-focus-shadow</td>
    <td></td>
<td>

`$kendo-card-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the orgchart node group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-margin-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the orgchart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-xl, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the orgchart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-title-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-md, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the orgchart node group title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-margin-y</td>
    <td></td>
<td>

`$kendo-orgchart-spacer - map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the orgchart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the orgchart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-node-group-subtitle-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the orgchart node group subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-width</td>
    <td></td>
<td>

`300px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the orgchart card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-border-width</td>
    <td></td>
<td>

`$kendo-card-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the orgchart card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-shadow</td>
    <td></td>
<td>

`$kendo-card-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the orgchart card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-focus-shadow</td>
    <td></td>
<td>

`$kendo-card-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the orgchart card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-margin-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the orgchart card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the orgchart card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-title-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the orgchart card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-margin-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the orgchart card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the orgchart card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-subtitle-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-md, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the orgchart card subtitle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-padding-y</td>
    <td></td>
<td>

`$kendo-orgchart-spacer - map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the orgchart card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-padding-x</td>
    <td></td>
<td>

`$kendo-orgchart-card-body-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the orgchart card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-width</td>
    <td></td>
<td>

`2px 0 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top border width of the orgchart card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-border-color</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the orgchart card body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-margin-x</td>
    <td></td>
<td>

`$kendo-orgchart-spacer - map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the orgchart card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-card-body-vbox-min-height</td>
    <td></td>
<td>

`$kendo-card-avatar-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Min height of the orgchart card body title wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-size</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the orgchart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Fill color of the orgchart connecting line.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-orgchart-line-v-height</td>
    <td></td>
<td>

`25px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the orgchart connecting line.</div></div>
    </td>
</tr>
</tbody>
</table>

### Overlay

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
    <td>$kendo-overlay-opacity</td>
    <td></td>
<td>

`.4`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-overlay-dark</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the dark overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-overlay-light</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the light overlay.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pager

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
    <td>$kendo-pager-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-bg</td>
    <td></td>
<td>

`var( --kendo-pager-bg, #{$kendo-pager-bg})`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-text</td>
    <td></td>
<td>

`var( --kendo-pager-text, #{$kendo-pager-text})`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the focused pager.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-section-spacing</td>
    <td></td>
<td>

`1em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the pager sections.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-border-radius</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-spacing</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the pager items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-item-group-spacing-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the pager item groups according to the pager size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes-label-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager sizes label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-info-label-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the pager info label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-input-width</td>
    <td></td>
<td>

`5em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager inputs.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-dropdown-width</td>
    <td></td>
<td>

`5em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the pager dropdowns.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pager-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-pager-padding-x-sm,
        padding-y: $kendo-pager-padding-y-sm,
        item-group-spacing: $kendo-pager-item-group-spacing-sm
    ),
    md: (
        padding-x: $kendo-pager-padding-x-md,
        padding-y: $kendo-pager-padding-y-md,
        item-group-spacing: $kendo-pager-item-group-spacing-md
    ),
    lg: (
        padding-x: $kendo-pager-padding-x-lg,
        padding-y: $kendo-pager-padding-y-lg,
        item-group-spacing: $kendo-pager-item-group-spacing-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map of the pager.</div></div>
    </td>
</tr>
</tbody>
</table>

### Panelbar

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
    <td>$kendo-panelbar-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style around the the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Style of the border around the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing around the icon of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-x-start</td>
    <td></td>
<td>

`calc( var( --kendo-panelbar-icon-spacing, #{$kendo-panelbar-icon-spacing} ) * 2 + var( --kendo-icon-size, 1rem ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-x-start</td>
    <td></td>
<td>

`calc( var( --kendo-panelbar-icon-spacing, #{$kendo-panelbar-icon-spacing} ) * 2 + var( --kendo-icon-size, 1rem ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-level-count</td>
    <td></td>
<td>

`4`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum nesting of the panelbar items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-bg</td>
    <td></td>
<td>

`var( --kendo-panelbar-bg, #{$kendo-panelbar-bg} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-text</td>
    <td></td>
<td>

`var( --kendo-panelbar-text, #{$kendo-panelbar-text} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the panelbar header when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-header-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-header-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-hover-focus-border</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-text</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-selected-marker</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the marker of the panelbar header when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-bg</td>
    <td></td>
<td>

`$kendo-panelbar-header-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-text</td>
    <td></td>
<td>

`$kendo-panelbar-header-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-header-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-header-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-header-selected-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-header-selected-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-selected-hover-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-header-expanded-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar header when expanded.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of the panelbar item when focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-item-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-hover-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-text</td>
    <td></td>
<td>

`$kendo-color-black`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-bg</td>
    <td></td>
<td>

`$kendo-panelbar-item-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-text</td>
    <td></td>
<td>

`$kendo-panelbar-item-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-item-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-item-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected and focused.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-bg</td>
    <td></td>
<td>

`$kendo-panelbar-item-selected-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-text</td>
    <td></td>
<td>

`$kendo-panelbar-item-selected-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-panelbar-item-selected-hover-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the panelbar item when selected, focused and hovered.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pdf-viewer

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
    <td>$kendo-pdf-viewer-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PDF viewer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PDF viewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-canvas-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PDF viewer canvas.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 7.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the PDF viewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PDF viewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PDF viewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-page-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the PDF viewer page.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-dialog-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PDF viewer search dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-dialog-padding-y</td>
    <td></td>
<td>

`$kendo-pdf-viewer-search-dialog-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PDF viewer search dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-dialog-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the PDF viewer search dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-matches-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the PDF viewer search panel matches container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-panel-margin-y</td>
    <td></td>
<td>

`calc( ( #{$kendo-button-calc-size} + ( 2 * #{$kendo-pdf-viewer-search-panel-border-width} ) + ( 2 * #{$kendo-pdf-viewer-search-dialog-padding-y} ) ) * -1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the PDF viewer search panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-selection-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-sm, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the PDF viewer selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-bg</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background-color of the PDF viewer highlight.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-search-highlight-mark-bg</td>
    <td></td>
<td>

`yellow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background-color of the PDF viewer highlight mark.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-icon-size</td>
    <td></td>
<td>

`$kendo-dropzone-icon-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the PDF viewer icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pdf-viewer-icon-text</td>
    <td></td>
<td>

`$kendo-dropzone-icon-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PDF viewer icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Pivotgrid

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
    <td>$kendo-pivotgrid-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacer of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Font size of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Line height of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon spacing of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-alt-border</td>
    <td></td>
<td>

`$kendo-pivotgrid-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Alt border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-row-header-width</td>
    <td></td>
<td>

`300px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the PivotGrid row header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-column-header-height</td>
    <td></td>
<td>

`75px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the PivotGrid column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-padding-x</td>
    <td></td>
<td>

`$kendo-table-cell-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-padding-y</td>
    <td></td>
<td>

`$kendo-table-cell-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-cell-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PivotGrid cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-headers-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-total-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid total cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-selected-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the PivotGrid.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-padding-x</td>
    <td></td>
<td>

`$kendo-pivotgrid-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-padding-y</td>
    <td></td>
<td>

`$kendo-pivotgrid-configurator-header-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-font-size</td>
    <td></td>
<td>

`calc( var( --kendo-font-size-xl, 2rem ) * .9 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-content-padding-x</td>
    <td></td>
<td>

`$kendo-pivotgrid-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid configurator content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-content-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid configurator content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-margin-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-margin-y</td>
    <td></td>
<td>

`math.div( $kendo-pivotgrid-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-fields-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the PivotGrid configurator fields.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-vertical-width</td>
    <td></td>
<td>

`320px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the PivotGrid vertical configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-horizontal-height</td>
    <td></td>
<td>

`420px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default height of the PivotGrid horizontal configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )!default`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid configurator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid configurator header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-size</td>
    <td></td>
<td>

`calc( #{$kendo-pivotgrid-line-height} * 1em + #{$kendo-pivotgrid-configurator-button-padding-y * 2} + #{$kendo-pivotgrid-configurator-button-border-width * 2} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-configurator-button-icon-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon spacing of the PivotGrid configurator button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-padding-x</td>
    <td></td>
<td>

`$kendo-pivotgrid-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-padding-y</td>
    <td></td>
<td>

`$kendo-pivotgrid-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-gap</td>
    <td></td>
<td>

`$kendo-pivotgrid-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid calculated field.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-calculated-field-header-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the PivotGrid calculated field header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-treeview-padding-x</td>
    <td></td>
<td>

`math.div( $kendo-pivotgrid-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the PivotGrid treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-pivotgrid-treeview-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the PivotGrid treeview.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popover

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
    <td>$kendo-popover-border-width</td>
    <td></td>
<td>

`$kendo-dialog-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width around the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style around the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border-radius</td>
    <td></td>
<td>

`$kendo-window-border-radius`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius around the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-size</td>
    <td></td>
<td>

`$kendo-window-font-size`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-font-family</td>
    <td></td>
<td>

`$kendo-window-font-family`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-line-height</td>
    <td></td>
<td>

`$kendo-window-line-height`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the popover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-x</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-padding-y</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-width</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border-style</td>
    <td></td>
<td>

`$kendo-popover-border-style`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-bg</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-text</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-header-border</td>
    <td></td>
<td>

`$kendo-dialog-titlebar-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popover header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-x</td>
    <td></td>
<td>

`$kendo-window-inner-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-body-padding-y</td>
    <td></td>
<td>

`$kendo-window-inner-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popover body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-x</td>
    <td></td>
<td>

`$kendo-popover-body-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-padding-y</td>
    <td></td>
<td>

`$kendo-popover-body-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-actions-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gap of the popover actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-height</td>
    <td></td>
<td>

`$kendo-popover-callout-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-width</td>
    <td></td>
<td>

`$kendo-popover-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the popover callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popover-callout-border-style</td>
    <td></td>
<td>

`$kendo-popover-border-style`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the popover callout.</div></div>
    </td>
</tr>
</tbody>
</table>

### Popup

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
    <td>$kendo-popup-padding-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-padding-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the content inside the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-content-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the content inside the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the popup.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-popup-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow around the popup.</div></div>
    </td>
</tr>
</tbody>
</table>

### Progressbar

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
    <td>$kendo-progressbar-height</td>
    <td></td>
<td>

`4px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-horizontal-width</td>
    <td></td>
<td>

`100%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal width of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-animation-timing</td>
    <td></td>
<td>

`1s linear infinite`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Animation timing of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-sm, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-padding-x</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-padding-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-border</td>
    <td></td>
<td>

`$kendo-progressbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the disabled progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-disabled-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the disabled progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-disabled-border</td>
    <td></td>
<td>

`$kendo-progressbar-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the disabled progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress background color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress text color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-border</td>
    <td></td>
<td>

`$kendo-progressbar-value-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress border color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress background gradient of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-offset-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress status offset of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-vertical-status-offset</td>
    <td></td>
<td>

`calc( (#{$kendo-progressbar-font-size} * #{$kendo-progressbar-line-height} + #{$kendo-progressbar-offset-y}) * -1)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical status offset of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-value-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Progress background color of the disabled progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-chunk-border</td>
    <td></td>
<td>

`var( --kendo-body-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Chunk order color of the progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-text</td>
    <td></td>
<td>

`$kendo-progressbar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient-horizontal</td>
    <td></td>
<td>

`linear-gradient(270deg, get-theme-color-var( neutral-30 ) 15%, get-theme-color-var( primary-100 ) 50%, get-theme-color-var( neutral-30 ) 85%)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the horizontal indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-gradient-vertical</td>
    <td></td>
<td>

`linear-gradient(180deg, get-theme-color-var( neutral-30 ) 15%, get-theme-color-var( primary-100 ) 50%, get-theme-color-var( neutral-30 ) 85%)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the vertical indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-animation-horizontal</td>
    <td></td>
<td>

`3s ease 0s infinite running progressbar-indeterminate-animation-horizontal`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient size of the horizontal indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-progressbar-indeterminate-animation-vertical</td>
    <td></td>
<td>

`3s ease 0s infinite running progressbar-indeterminate-animation-vertical`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient size of the vertical indeterminate progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-arc-stroke</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Arc stroke color of the circular progressbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-circular-progressbar-scale-stroke</td>
    <td></td>
<td>

`$kendo-progressbar-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scale stroke background color of the circular progressbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Radio

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
    <td>$kendo-radio-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-bg</td>
    <td></td>
<td>

`$kendo-component-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-text</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-bg</td>
    <td></td>
<td>

`$kendo-radio-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-text</td>
    <td></td>
<td>

`get-theme-color( neutral, 130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-border</td>
    <td></td>
<td>

`$kendo-radio-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-bg</td>
    <td></td>
<td>

`$kendo-radio-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-bg</td>
    <td></td>
<td>

`$kendo-radio-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checked and hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked and hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-hover-checked-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checked and hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-border</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-shadow</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-focus-outline</td>
    <td></td>
<td>

`1px solid get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline of a focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-bg</td>
    <td></td>
<td>

`$kendo-radio-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-bg</td>
    <td></td>
<td>

`$kendo-radio-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-text</td>
    <td></td>
<td>

`$kendo-radio-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-border</td>
    <td></td>
<td>

`$kendo-radio-disabled-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-bg</td>
    <td></td>
<td>

`$kendo-radio-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-text</td>
    <td></td>
<td>

`$kendo-invalid-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-invalid-border</td>
    <td></td>
<td>

`$kendo-invalid-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-type</td>
    <td></td>
<td>

`pseudo`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Type of radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-indicator-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-glyph-font-family</td>
    <td></td>
<td>

`"WebComponentsIcons", monospace`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph font family of radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-glyph</td>
    <td></td>
<td>

`"\e308"`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-checked-image</td>
    <td></td>
<td>

`escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'><circle cx='50%' cy='50%' r='4' fill='#{$kendo-radio-checked-text}'/></svg>") )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-disabled-checked-image</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of disabled and checked radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-label-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the radio button inside of a label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item margin of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal list item padding of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-padding-y</td>
    <td></td>
<td>

`$kendo-list-item-padding-y-md`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical list item padding of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-list-item-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"></div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of radio button ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-radio-ripple-opacity</td>
    <td></td>
<td>

`.25`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of radio button ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Rating

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
    <td>$kendo-rating-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Content spacing of the rating.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Normal color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-text</td>
    <td></td>
<td>

`$kendo-rating-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-focus-outline</td>
    <td></td>
<td>

`currentColor`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline color of the focused rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-item-selected-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected hover color of the rating item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-rating-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) * #{$kendo-line-height} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size of the rating.</div></div>
    </td>
</tr>
</tbody>
</table>

### Scheduler

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
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected row in scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-text</td>
    <td></td>
<td>

`$kendo-scheduler-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected row in scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-selected-border</td>
    <td></td>
<td>

`$kendo-scheduler-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected row in scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-bg</td>
    <td></td>
<td>

`var( --kendo-toolbar-bg, $kendo-toolbar-bg )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scheduler toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-text</td>
    <td></td>
<td>

`var( --kendo-toolbar-text, $kendo-toolbar-text )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scheduler toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-border</td>
    <td></td>
<td>

`var( --kendo-toolbar-border, $kendo-toolbar-border )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scheduler toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-toolbar-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the scheduler toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-bg</td>
    <td></td>
<td>

`var( --kendo-toolbar-bg, $kendo-toolbar-bg )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-text</td>
    <td></td>
<td>

`var( --kendo-toolbar-text, $kendo-toolbar-text )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-border</td>
    <td></td>
<td>

`var( --kendo-toolbar-border, $kendo-toolbar-border )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-footer-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the scheduler footer.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-line-height</td>
    <td></td>
<td>

`$kendo-scheduler-line-height`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-min-height</td>
    <td></td>
<td>

`calc( #{$kendo-scheduler-line-height} + 2 * #{$kendo-scheduler-event-padding-y} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minumum height of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-border</td>
    <td></td>
<td>

`$kendo-scheduler-event-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-shadow</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the hovered scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-border</td>
    <td></td>
<td>

`var( --kendo-hover-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Boeswe color of the hovered scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the hovered scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-hover-shadow</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the hovered scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-text</td>
    <td></td>
<td>

`$kendo-scheduler-event-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the selected scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-border</td>
    <td></td>
<td>

`$kendo-scheduler-event-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-gradient</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the selected scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-selected-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the selected scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-event-ongoing-shadow</td>
    <td></td>
<td>

`inset 0px 0px 0px 1px #ff0000`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the ongoing scheduler event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-cell-height</td>
    <td></td>
<td>

`$kendo-line-height-em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the scheduler cell.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-datecolumn-width</td>
    <td></td>
<td>

`12em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the scheduler date column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-timecolumn-width</td>
    <td></td>
<td>

`11em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the scheduler time column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-current-time-color</td>
    <td></td>
<td>

<span class="color-preview" style="background-color: #ff0000"></span>

`#ff0000`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the current time marker in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-nonwork-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the non-working hours in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-nonwork-text</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the non-working hours in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-weekend-bg</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the weekends in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-weekend-text</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the weekends in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-othermonth-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the other months in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-othermonth-text</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the other months in the scheduler.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-padding-y</td>
    <td></td>
<td>

`$kendo-scheduler-yearview-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-calendar-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the calendars in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-size</td>
    <td></td>
<td>

`3px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Days with events indicator size in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-calc-offset-top</td>
    <td></td>
<td>

`calc( #{$kendo-calendar-cell-size} - (#{$kendo-calendar-cell-padding-y} * 2) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Top position of the days with events indicator in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-calc-offset-left</td>
    <td></td>
<td>

`calc( 50% - (#{$kendo-scheduler-yearview-indicator-size} / 2) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Left position of the days with events indicator in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the days with events indicator in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the days with events indicator in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-yearview-indicator-selected-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected days with events indicator in the scheduler year view.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-padding-y</td>
    <td></td>
<td>

`$kendo-scheduler-tooltip-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-border</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-shadow</td>
    <td></td>
<td>

`0px 0px 10px rgba(0, 0, 0, .2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-title-margin-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical spacing of the scheduler tooltip title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-month-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the month inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-day-font-size</td>
    <td></td>
<td>

`calc( $kendo-scheduler-tooltip-month-font-size * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the day inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-events-max-height</td>
    <td></td>
<td>

`250px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Max height of the events inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-events-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the events inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-padding-x</td>
    <td></td>
<td>

`$kendo-scheduler-event-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the events inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-padding-y</td>
    <td></td>
<td>

`$kendo-scheduler-event-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the events inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-border-radius</td>
    <td></td>
<td>

`$kendo-scheduler-event-border-radius`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the events inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-event-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the events items inside the scheduler tooltip.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-tooltip-callout-color</td>
    <td></td>
<td>

`$kendo-scheduler-tooltip-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the scheduler tooltip callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-resize-handle-width</td>
    <td></td>
<td>

`2em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the scheduler resize handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-more-btn-height</td>
    <td></td>
<td>

`13px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the scheduler more events button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scheduler-marquee-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the scheduler marquee.</div></div>
    </td>
</tr>
</tbody>
</table>

### Scrollview

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
    <td>$kendo-scrollview-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the scrollview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-size</td>
    <td></td>
<td>

`10px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-border</td>
    <td></td>
<td>

`$kendo-scrollview-pagebutton-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button primary background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-border</td>
    <td></td>
<td>

`$kendo-scrollview-pagebutton-primary-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button primary border color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-hover-shadow</td>
    <td></td>
<td>

`0 0 0 1px get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button hover shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-focus-shadow</td>
    <td></td>
<td>

`0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button focus shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-hover-shadow</td>
    <td></td>
<td>

`0 0 0 2px get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button primary hover shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pagebutton-primary-focus-shadow</td>
    <td></td>
<td>

`0 0 0 2px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview page button primary focus shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-offset</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager offset.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-spacing</td>
    <td></td>
<td>

`20px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager item spacing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-item-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager item border width.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-height</td>
    <td></td>
<td>

`calc( #{$kendo-scrollview-pagebutton-size} + #{$kendo-scrollview-pager-item-border-width * 2} + #{$kendo-scrollview-pager-item-spacing * 2} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager height.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-multidot-threshold</td>
    <td></td>
<td>

`10`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager multidot threshold.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-multidot-intermediate</td>
    <td></td>
<td>

`3`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager multidot intermediate.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-multidot-step</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager multidot step.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-light-bg</td>
    <td></td>
<td>

`rgba( $kendo-color-white, .4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager light background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-pager-dark-bg</td>
    <td></td>
<td>

`rgba( $kendo-color-black, .4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview pager dark background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-arrow-icon-size</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size-xxl, 2rem ) * 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview arrow arrows size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-color</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview navigation text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-arrow-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview navigation arrows shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview navigation background color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-focus-shadow</td>
    <td></td>
<td>

`0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview navigation arrows focus shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-navigation-arrow-hover-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview navigation arrows hover shadow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-duration</td>
    <td></td>
<td>

`.3s`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview transition duration.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-scrollview-transition-timing-function</td>
    <td></td>
<td>

`ease-in-out`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Scrollview transition timing function.</div></div>
    </td>
</tr>
</tbody>
</table>

### Searchbox

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
    <td>$kendo-searchbox-icon-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the searchbox icon.</div></div>
    </td>
</tr>
</tbody>
</table>

### Signature

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
    <td>$kendo-signature-width</td>
    <td></td>
<td>

`250px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-height</td>
    <td></td>
<td>

`84px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-width</td>
    <td></td>
<td>

`750px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-height</td>
    <td></td>
<td>

`252px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-y</td>
    <td></td>
<td>

`$kendo-signature-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-disabled-opacity</td>
    <td></td>
<td>

`.3`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-style</td>
    <td></td>
<td>

`dashed`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-color</td>
    <td></td>
<td>

`rgba( get-theme-color( info, 100 ), .4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-disabled-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-size</td>
    <td></td>
<td>

`calc( 100% - 2 * #{$kendo-signature-padding-x} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-bottom-offset</td>
    <td></td>
<td>

`33%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-signature-padding-x-sm,
        padding-y: $kendo-signature-padding-y-sm,
        line-size: $kendo-signature-line-size-sm
    ),
    md: (
        padding-x: $kendo-signature-padding-x-md,
        padding-y: $kendo-signature-padding-y-md,
        line-size: $kendo-signature-line-size-md
    ),
    lg: (
        padding-x: $kendo-signature-padding-x-lg,
        padding-y: $kendo-signature-padding-y-lg,
        line-size: $kendo-signature-line-size-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-actions-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between individual action items of the signature component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-line-width</td>
    <td></td>
<td>

`3px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-lg-min-height</td>
    <td></td>
<td>

`110px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min-height of the large size signature component.</div></div>
    </td>
</tr>
</tbody>
</table>

### Skeleton

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
    <td>$kendo-skeleton-text-transform</td>
    <td></td>
<td>

`scale( 1, .6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text transform scale of the skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-text-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-rect-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the rectangle skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-circle-border-radius</td>
    <td></td>
<td>

`9999px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the circle skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-item-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the skeleton item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-wave-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the skeleton wave animation.</div></div>
    </td>
</tr>
</tbody>
</table>

### Slider

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
    <td>$kendo-slider-size</td>
    <td></td>
<td>

`200px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default slider size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-alt-size</td>
    <td></td>
<td>

`26px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default slider track wrap size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border-radius</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-focus-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selection background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-size</td>
    <td></td>
<td>

`16px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border width of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-radius</td>
    <td></td>
<td>

`999em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-scale</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active transition scale of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-size</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active size of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-gradient</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-bg</td>
    <td></td>
<td>

`$kendo-slider-thumb-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-gradient</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-bg</td>
    <td></td>
<td>

`$kendo-slider-thumb-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-gradient</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-bg</td>
    <td></td>
<td>

`$kendo-slider-thumb-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-border</td>
    <td></td>
<td>

`$kendo-slider-thumb-active-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-gradient</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-disabled-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-90 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selection background color of the disabled slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-speed</td>
    <td></td>
<td>

`.3s`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-function</td>
    <td></td>
<td>

`ease-out`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function function.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-speed</td>
    <td></td>
<td>

`.4s`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-function</td>
    <td></td>
<td>

`cubic-bezier(.25, .8, .25, 1)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the slider thumb.</div></div>
    </td>
</tr>
</tbody>
</table>

### Split-button

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
    <td>$kendo-split-button-arrow-padding-y-sm</td>
    <td></td>
<td>

`$kendo-button-padding-y-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the split button arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-padding-x-sm</td>
    <td></td>
<td>

`$kendo-split-button-arrow-padding-y-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the split button arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-size</td>
    <td></td>
<td>

`calc( #{$kendo-button-inner-calc-size} / 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the split button arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-line-size</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the split button arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the split button arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sizes</td>
    <td></td>
<td>

`(
    sm: $kendo-split-button-arrow-padding-y-sm,
    md: $kendo-split-button-arrow-padding-y-md,
    lg: $kendo-split-button-arrow-padding-y-lg
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the split button.</div></div>
    </td>
</tr>
</tbody>
</table>

### Splitter

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
    <td>$kendo-splitter-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the splitter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-splitbar-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-resize-icon-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-length</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Length of the splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-handle-thickness</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">thickness of the splitter drag handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-drag-icon-margin</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Margin of the splitter drag handle icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-hover-text</td>
    <td></td>
<td>

`$kendo-splitbar-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitbar-selected-text</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the splitter splitbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-splitter-splitbar-static-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Size of the splitter static splitbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Spreadsheet

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
    <td>$kendo-spreadsheet-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-popup-menu-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the spreadsheet popup menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-popup-menu-padding-y</td>
    <td></td>
<td>

`$kendo-spreadsheet-popup-menu-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the spreadsheet popup menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-bar-padding-y</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the spreadsheet sheets bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-remove-inline-start</td>
    <td></td>
<td>

`- map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the spreadsheet sheets remove.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-sheets-remove-inline-end</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the spreadsheet sheets remove.</div></div>
    </td>
</tr>
<tr>
    <td>$filter-menu-padding-left</td>
    <td></td>
<td>

`calc( var( --kendo-icon-size, 1rem ) + 2 * var( --kendo-padding-y, #{$kendo-padding-md-y} ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Left padding of the spreadsheet sheets menu.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-primary-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Primary border color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-primary-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Primary background color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-text</td>
    <td></td>
<td>

`$kendo-table-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-bg</td>
    <td></td>
<td>

`$kendo-table-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-header-border</td>
    <td></td>
<td>

`$kendo-table-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected text color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected background color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-selected-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border color of the spreadsheet.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-hover-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-active-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Active text color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-active-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Active background color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-button-active-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Active border color of the spreadsheet filter button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-filter-menu-icon-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the spreadsheet menu icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-error-border</td>
    <td></td>
<td>

`get-theme-color-var( error-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet error.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-style</td>
    <td></td>
<td>

`dashed`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the spreadsheet image dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the spreadsheet image dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-text-margin-bottom</td>
    <td></td>
<td>

`30px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bottom margin of the spreadsheet image dialog.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-width</td>
    <td></td>
<td>

`355px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-height</td>
    <td></td>
<td>

`230px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-img</td>
    <td></td>
<td>

`"image-fluent.png"`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-shadow</td>
    <td></td>
<td>

`inset 0 0 0 2000px rgba(0, 0, 0, .5)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-preview-overlay-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the spreadsheet image dialog preview overlay.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-overlay-hover-text</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of the spreadsheet image dialog preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-height</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-color</td>
    <td></td>
<td>

`var( --kendo-selected-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-outline-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline color of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-handle-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-lg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the spreadsheet drawing handle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline style of the spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-outline-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline width of the spreadsheet drawing.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-drawing-anchor-bg</td>
    <td></td>
<td>

`$kendo-spreadsheet-selected-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Bacground color of the spreadsheet drawing anchor.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-spreadsheet-insert-image-dialog-img</td>
    <td></td>
<td>

`url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAGQCAYAAAAjl1AKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMGVmMzZmZi04YmI1LTRlN2YtOTcwMS04OTU5ZTg1N2ZhY2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDNDOTBDNUQ2OUJGMTFFOTkwMzY4RTI3NjZBQTdENkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDNDOTBDNUM2OUJGMTFFOTkwMzY4RTI3NjZBQTdENkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjMmZmZjM0Mi05NjEyLTQwM2YtYWZhYS01MTE1ZjQ2NThmMWMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphYjlhMmUwMy1kNmIwLTY3NGMtODc4ZS0yMjUzMjdkNDI5OTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz68UHLbAAAgpElEQVR42uzd2ZNc9dnY8TOL9gU0IAkjgwpkI8QOQmI1FS+FHW9VLt/7wpWb900qKV+lTL3vTZzElSvnJilfvM4fkQunfEOw2LUgiUUsNhiMAFsjtIzQrpmJnhOdoaent+np5SyfT1XXiJ4R0hz19Lef31l6ZHZ2NgEAWhu1CQBAMAFAMAFAMAFAMAFAMAFAMAFAMAEAwQQAwQQAwQQAwQQAwQQAwQQAwQQAMuP9/gNGRkZsZQAGop/v8WzCBIA8TJj9GFr9swGUYyAUTHEEoLvn+NxGdLwgG1BEAaoxYY7kNZ55C+bIEu4DoFixHGkT0JE8RTMvwWwXxRHBBKhMQGcbPN8PPZx5COZIh6EcEU+AQgex2fRYH8tm4RxqNIcdzGbxa/dROAGKOT3WhnCk5nOzTX5PbqI5zGB2Estmv24XTwDyO2HOtohi/f25ieawgtkqlvW/HukgnqIJULxY1v96tsV0OvRo5mkfZn0YR5tEs920CUB+o9kokvW3mQ6iWYkJc6RNLOtvo7/85S/X/eIXv/jntWvX/mjZsmVfGRsbG3eNWoCClvOq6enpy1f9/Ysvvvjfv/nNb/7zr3/96zM1oRxN2u/THHhAR/p5odr0D1gYtvpg1kdztObj6N///vf/NDEx8e/Gx8eXeZgBlM+VK1cunzhx4n9u3rz5n65Fc6Zm0my0dFs/tdbGuG9/z2FefL1ROOdi+ZOf/GTl1NTU/920adMvxBKgvOI5/upz/X+I5/x47q8bnEaSnByvMugJs1EkRxoEcyw23Lp16x72UAKojjNnzuxfv379N6/+crrBlDnbbsos44TZ7Mo+aTSPHTv2X8USoHriuT8a0GS6HOqUOewl2QW3OMBnYmLiHz1sAKopGhAtSFqfJTH4aA1pSbbRUmx6m5yc/O833njjv/GQAaiu48eP/6+NGzf+++TLg4AaLc0mSQWWZJuN1iNr1qz5vocKQLVdbcG/TnJ2cZpBBrPV1Xnmps1ly5Zt8lABqLarLdiYNL9YTbOmlCaY9fFsdHm8kbgogYcKQLVda0HTVpR9wuwonq7gA0CD418qtSTbzdQJQIW7macujOZgYwBA7psxmrONIKAA5LIN42XaIFeuXEmmpqaSixcvJjMzMx5qAMOYxEZHkxUrViTr16+P68T2shGVe3uvvohYTk5OCiXAkMXz8Pnz59PhZePGjb2IZj5eCJTlHygmS7EEyFc447m5NJNzWb6ReCUDQL5cuHBBMPP4SgaAfOn39coFEwBypjQH/bhCEAAmTAAQTAAQTAAQTAAQTABAMAFAMAFAMAFAMAFAMAFAMAFAMAFAMAEAwQQAwQQAwQQAwQSAAhkvyzcyMjLiXxMAEyYACCYACCYACCYACCYAIJgAIJgAIJgAIJgAIJgAIJgAIJgAIJgAgGACwBJ5ey8AMGECgGACgGACgGACgGACgGACgGACAIIJAIIJAIIJAIIJAIIJAKXg4usAYMIEAMEEAMEEAMEEAMEEAMEEAMEEAAQTAAQTAAQTAAQTAAQTAErBxdcBwIQJAIIJAAMzbhMA9cbGxpLx8fH0Fr8eHR1NP8auj+wWZmdn527T09PJzMxM+vHKlSvpLX4NggmUKpDLly9Pb8uWLUsD2YnaeMb/o14E9PLly8mlS5fSm4AimEDhRBRXrlyZ3mKSrHXmzJnk5MmTyalTp5IvvvgivV28eDG9RfQigukTyLUpdMWKFWls165dm96uv/76ZMOGDcn69evTz8UtxNR54cKF9BYxBcEEcivCtmrVqrmIZYGcnJxMPv300+Rvf/tbGsZMLLc2ky29nj9/Pv3vY8eOzft8/Bk33XRTsmXLlmTTpk3JunXr5qIaf0b8vpg8oQhGWv0w9OQP+PJ0j5Gaj9lttOYW6zljV/8+J7v5c+p/UIFkQbzWrFkzb5r88MMPk7/85S9pKOt18tzQ6msafe7mm29Otm3bltx2223zonv27Nl5kaZc4sVSl/3YcPXD9LXbTM1ttuaW1HxM+tk0wYSSi32SMdHFx5BNku++++7c0mqvItlpROPvsmPHjrnJM8TfJZZ+6/9OCKZgCib0VeyjjFDGPsrw+eefpxPlO++80/NpsptpM3PXXXelE+eNN96Y/nfs34xw2scpmIIpmNB3sfwa+wuzo13/9Kc/JXv37h1oJFt9vtH9jz32WLJ9+/b01xHL2K9qmVYwBVMwoW8/bxHKbKr8+OOPkwMHDqT7CPMwTbb7XEzEu3fvTrZu3To3bUY4+/08hWAKJlRInAcZp3HE/sE49ePgwYPpfsphT5OLnTRD7N/ctWtX+j3FPs2pqSnncArm0IPptBIogYjkddddly7BxkE9L7/8cseT2bCmyVb3HzlyJDl69Gjy1FNPpU+2cU7n6dOnHRDEUJVmwownCaiiOK8yJsv4WfvrX/+avPTSS+mpGkWZJlt9LibMiGYcFBRfE5Om8zaLZ+PGjaWYMF18HQosDu7JYvn+++8ne/bsaRnL7Lqv3Xy+9rqx3Xyu099Te398L88++2zy3nvvpd9jduUgGAZLslDgyTIO8ImQ/PnPf05eeeWVQk+Tre6PFwLxMY6ije85fm3SZNBMmFDEV7rj43OTZbNYFm2abHf/888/nx7ElE2a9de/BcEE5v/Qjo6mB/hky7D1sew2hJ3+3l4GdLH3x6SZLc9mBzmBYAILZNNVhOKjjz5Kj4btVQjzNE22uv+5555LPvjgg3kvHGAQxsv0RAJlFxdPj1NI4jJ3EctBnxLS632Tnd7fKJqxLTZv3pxe7CAupQcmTCCVvS1XiGXYZuckLnVizNM02ey++N4jmnExg7iqkSNnEUwgFSsoMUmF2Id34sSJjqPWj8/18/5O4xlvbp3tv41p0yoTggmkQYh9dnFt2FdffbWjqbCbyXCQU2Mn02S7qL7xxhvp+3nGtoltBIIJFRanT2QXU9+3b1/HU+FiJr28TpOdRPXFF19MP8Y2cqoJggkVVrsUGwe3DOKUkF6dKtLLabLZ/XHN3LfeemvetgLBhIqJg1liaoqjYltdnGBQ50cOI4jtvjZ+/cc//jF9x6LYVg4AQjChgrKjYuO8w35Nk0sJaK+j2s3XZuJNsmu3GQgmVEScRhITU0xOb7/9du5PCRnENNnqaw8dOpR89tln6TaLbQeCCRWRHejzySef5PpydYOcJuuXYuvvi7c3q912IJhQ9h/M0dH0ij7hnXfeyd00OYggtvvaRvcdPnx4bjp3nVl6zaXxIIfiwJV4TMf1YrO3scr75ery8LWxreIdTeJtwGLKPH/+vAcTJkwoezBDHOxjmmy/FFt7fwSzdhuCCRPK+ip2dDQ9cGVqaiqdMAc5NRZpmmx2X2yzuGze9ddfn27LmZkZDypMmFBG2RGecXTsoKfGok2TzX7/p59+Om9bgmBCCWUH+xw9ejT3R7q2+38sNZ7d/v4PP/xw3raEXrAkCzkNZjYl1YahmaUudy72/n4spfby98dF6gUTwYQSGxsbS4+Ojf2XFy9e7Hv4ihrEdvfF0bHZfszYpvG+mSCYULJghtOnTw88fGWL5+TkZBrMOIBKMOkF+zAhh8GM6ag+BHm++Hke92MeP3583jYFEyaU6RXstavTxIRpmlza12bb0BV/EMw6rvRDKX4gr70BcuzDbDRFDTuIRYpnbMNswvT8gGBCyWRP7OfOnRPEJX5ttg3FEsGEEgfzwoULhb/izrDjmV1HVjARTChxMOsv5yaei//aK1euCCaCCWUPZrzrhiAu/Z1LBBPBhJJbygE/4tn6qkggmFCSUMZEFJd0u3z5cqGClLe/a3bhdfFEMKHEwYxTIbIlxbIEbdDnlGYXLBBMBBNKGsxsOsqO8ixj/AYRz5UrVwomggllD+bq1asXXB4vD0Ea9u9fzP8jtqFg0kuuGQU5kl0kfP369fNiMKjrr/bjWrG9vNbsYq6Zm21DF17HhFnHoeOUQXb+5XXXXVf5pdil/j9iG2bb1PMDggklnTA3bNhQyCAO+mtb3b9x48Z5L0JAMKGEwYz3cazaOZK9jmcWzOyKPyCYUCIxDcWTfiwnxlGecU3ZPMQv79Nk/f2rVq1KJiYm0vtNmPSKg34gZ+KCBWHLli2FPDCn26/t9v/R6P9z6623ztuWIJhQQtkSYvak30lMlhq0QQSxl0fAtro/brfddtu8bQm9YEkWcjphfuUrX6nc1Xl6df9Xv/pVEyYmTCi72OcWB//Efsxt27a1nMSKuhTbr/tDTJc33HBDug3tv0QwoeSy68h+/etfL/xS7CDvj9s999wzbxtCr1iShZwGM470jAkzrivbi/fHHPTyar+XYht9LrbV3XffLZiYMKEqYikx2/9233335XqaHNaU2ehzDz/8cPoxtp3lWASTwjt+/LiN0IGLFy+mH7du3drz+PU6fIPYN9ns/trP3X777fO2HfSSa8ky8Fg+//zzyZNPPpls2rTJBmkhTomIA1fiaNkHHnggOXjw4IJINApHs6AM6msHcX+jz+3evTu55ZZb0m0W285zAiZMCh3LPXv2pO/zGNE8duyYjdJGdqWfOPin22kyr0fALnaKbfe5u+66a942A8Gk8LHMntREs73YFxcT00033ZR885vfzEUQlxq9pQS02ee+973vJTfffHO6rZx7iWBSmljWTk+i2d65c+fSj/fee2+ybt26wl6urpcBrf1cvO/lQw89NG9bgWBSyFhGFOtjKZqdi6kpO0XiqaeeGug02cvL1fXi9zT6fU8//XT6MbaRN4tGMCl0LNu96s+iOTk5aaM1ES84IhJf+9rXkm9961uluMBAN9Nk/ed37dqVbN++Pb2/2YsyEExKEcvaaMayrWgmTYORbcs4LzN7r8eiXK6uV9NkrXiT7XjxUPuCAgSTQsYynsTi0P5Ob3HunEmzuTiYJTu/8Dvf+U4yPj5eqWmy9vPxvf/4xz9OP8ZSrKv6IJgUOpbdsDzbfvtkR81+97vfXXTI8nKBgW4/l30+YhnvSBLbwlIsgkkhY/nCCy8s+QlMNJuLYJw9ezb9eMcdd8xFMy9TZi8/1+zPi1ju2LFj3raAQRjp94Ot5mobIzUfs9tozW0sblf/Pie7+XNOnz7tX3OIIm69iGWtlStXuiJQE2NjY8maNWvSn6833ngj+cMf/tAwNs0i1Iv7h/G5H/7wh+lVj7JYOiq2GOKt6rrsx4arH6av3WZqbrM1t6TmY19fQJkwyWUss0kz/r9OOVkoQhEHAcWTQ5yfWTtplmmarPWDH/xgLpbxvYslgyaYLEm2DBtxW8wBPos5EEg0G4vrpWZHh0Y042o3ebtcXSch7OTzP/rRj5IHH3xw7vSR+N5BMClULGNfY7+v3SmazcWRs9mkGW+cnB05mofL1S31SNjsaNif/vSnyf333z83Wbr0HcNiHya5jmWtFStW2KfZRO0+zU8++ST5/e9/n5w8eXIuPq2mt8Xcv5TPLfbzExMT6QuAeAcS+yyLrSz7MAWTrmLZj32WncgOBMpO3OdLo6OjyerVq9N4Rliee+65ZP/+/T0J3lJC2M3vjSv4fPvb306WLVs2t7/WG0ILpmAKpliKZk9/3mL7LF++PP3v9957L3n22WfTn488T5O1T6xxbdg777wz/e+4IEGsYjh1RDAFUzALGcs8vN9gtjwrmo3FZLZq1aq5n7948+n6U0+GMU22+prvf//7yc6dO+e+Jl6U2V8pmIIpmGIpmgOfNj/99NPk7bffTvbu3ZuLaTLzyCOPJHfffXeyZcsWU6VgCqZgFtvnn38+9GVY0exeHGka4Yx9m+Ho0aPJBx98kOzbty+NU7+WZFt9Tfy77d69O9m2bVt6UE+IfZURSqeMCKZg9jmYU1NTHpV9nCzzfL3OiMETTzzh6NkOwhmhysIZ3n333eTNN99MPw5imox9k3H6S1zaLhOhjFOHhLK84k2+BVMwxVI0CxnO2McZt9pVhI8//jh5//33k48++mjBv3m302TsR926dWv6Pp633nprcsMNN8x9LvZPxk0oBVMwBbPwsXzxxRcL9U4QlmcX/7OZhbN26swCGheKiNupU6fSW5zakV1lJ3s7rez3xwuWOA/0+uuvT2/xb7B58+Z5gcymySyU9lEKpmAKpljmYNIUzcWJczhj8oxwxsean9slieeXCGyEMj46l1IwBVMwSyMmi4hlTBNFJZq9CWjEMz5mt+z6vrU/19nzR3YpuwhidotICiSCKZiljmUZ3pA3lmdFEwSzpy8k/VNStliGOOoyvh9vQg0IJmLZQTRfeukl0QQEE7FsJ06EF01AMFlyLCMm/Xrz57zcskkzjv4FEEy6imVZJ8t62T5N0QS6VZqjZM+cOeNfcxGxLPMybCtxysnjjz/u6FkYoHXr1nXbD0fJIpbDYp8mYMI0YXYcyzy9RdewxHmaJk0wYZowaRjL7AAfnHICCCYtYlnVZdhW0Xz55ZdFExBMxLKdmLgjmo6eBdqxD7PETpw4IZYdyvZp3njjjTYG9Jh9mIhlibi4AVCZCfOLL77wr3mNA3yWNmk+9thjjp6FHlq7dq0JE7Es46TpQCBAMCsQy3iyF0vRZPg8fgSTnMfSPsveRfOVV17xpEdXYl/4888/nxw7dszGKBH7ME2WtJDt03T0LIuJ5Z49e9IXr3Ht4m984xvJpk2bKr1N7MMkF+JoWLHs76TpPE26iWWIn0uTZnkIplgimvQhlhnRFExyEkv7LEWTfMQyotjszdjj8fPCCy+IZsHZh2myZBFin+ajjz5qnyYLYtnJi9fYp/nkk09Wbp9mWfZhliaYZ8+ercQDzwE++YmmixsQR1F3GsvaaFbtQKA1a9aUIpiWZAsWyzjVQSyHyykn1May2TJss1s8fuzTLCbBLFgs7bMUTfIVy24fP6JZPJZkC8A+y/yyT7OasYwDeHrx4rUq+zQtySKWzE2ajp4Vy27Ez7WjZ4tDMMUS0WQIsRTN4rEkm+NYOsCnWGJ59pFHHrE8W0K151n2SyzPPvHEE6VcnrUki1iyYNJ89dVXTZpi2fWk+eKLL5o0c0wwxRLRZMixFE3BRCxFk0LHMvYtDvrnUTTzqzT7MM+dO1fof4g4zzKeZMWyPOzTLK5+HeCzGGU65WT16tXd9sM+TMTSpEneY7nYK/j0+haPH5NmvgjmkMUyrFiWO5p79+4VzQLGMg8sz+aLJVmxZABieXb37t2WZ3Ms22eZx8tPFv2UE0uyiCUmTbE0aVaIYIolA4zmvn37RFMsRVMwEUs6edITzfzFctgH+DgQqBjswxxwLGNZTizJ9mnecMMNNsYQYxnxKeJb5mX7NIvyJub2YSKWdC3bpxmnFDF4sd0jlkWZLJtNmt6P1YRZugnz5MmT6TJsPMih1vLly02aQ4plGd6MPSbNxx9/PPeTZlkmzNIEM68PfpMl7cTy7K5du5xyMgBFXoZtF808n3KyatWqUgTTkqxYMmSOnhXLpYjnl5deesny7ACYMPscS8uwdMrybP9jWeYXr7FSkdcDgUyYiCU9denSJQcC9SmWMYGVfaUnnm9Mmv0lmH2IZSyviSXdRjMeP6LZ21iWbRm2Gcuz/WVJVizJoViejQOBLM+KZTfydvRsWZZkBVMsEc3SqT3Psqpin2ZeomkfJnPiPMv9+/eLJT0Vy7PxuLI8K5bdiOejl19+2fKsCTM/E2bE0mRJvyfNhx9+2KQpll2J5dnHHntsqJOmJVnBFEsGGs1Ynp2YmLAxWsSyCkfDdiNbnh3WxTEsyVacWDJI2fJs7CtHLBcrO+XExTFMmKlB/qDEk5Z9lgxr0rQ8O19VzrPshWEtz8afa8KsILEkD5OmA4HEstvBwoFAJsyB/MBYhiUvYp/Uzp07Kz1pWoZd2uNnkJOmCbNixJI8icfhgQMHKjtpiuXSHz8mTRNm32JpGZY8in2aVZs0xbK3k9+jjz7a90nThFmhyVIsyavYpxmTZlWOno1YxmQklr0R2/GVV15x9KwJUyyp1qQZR8+W+TxNseyfbJ9mv87TLMuEKZgtYhmv3MWSIkUzlmfLGE2xLHY0LcmWmFhSRGVdnhXLwcgOBLI8K5hiiWgWUHwfsY9NLAcXTfs0W0y8lmS/dOrUqXSfZTzpQJHF8uxDDz1U6OXZiKXJcjhieTaOnu3V8qwl2ZKJWMYrc7GkLJPmwYMHCztpiqVJM48EsyaWlmEp25NeEaMplqKZV6VZku02drHP8rXXXhNLSqtIy7NxgE88SQ/r/W1ZKLu4wVKWZ2OJt8t+OK0kL8EUS6oinrAefPDBXEczi6XJMp+Pn6VEsyzBrOySrFhSJXlfnhXL/D9+LM9WdMKMfZZiSRXF8mzeJs3s1BHLsOWdNC3JFjSYYoknvRXJAw88kItoOs+ymI+fRx55ZFHRFMwCBjOLpVNHMGkuH3o0xbI60bQPs2AilrEPRyzh/5+neejQoXRf/rBi+eqrr4plQcWAEv9+VdunWYlgZrG0DAvDj2YWS/ssix/NvXv3VupNzEu/JCuW0Fq2T3PDhg0mS7p6/MTybKs3MbcPswDBPH36tH2W0IFsn2Y/oxmTrH2W1YymYOY8mBFLkyXkI5oRS5Nl+aO5e/fuhtF00E/ORJizm1jC4tXu06z9eVrqTSyroXafZv1joDSdKcuEmS27OhoW8jNp2mdZ3Umz9pSTeEyVYcIsVTAjlvEK2WQJw49mxDImDrGsZjR37do1F03BzFkwjx07lsbSZAm9sWzZsq6jKZbURrMswSzNPkyxhN66fPlycvjw4UWfpymWhFjp27dvX6nO0yxNMMUS+vNztZhoiiX10YzHQ1mMl+UbKdORWJDHSfP+++9vuTwbUY2JIp4k/TxSxmFm1D8n0Gk0m02acb/JkrITTKDjaL7++uvp0ehiiWACtBDLa0eOHEmmp6fFksqxDxPoWJxqct999yVjY2NzsbTPEhMmQF0sd+7cmaxdu3beAT4gmADXxInnEct169bNxdIyLFVjSRZoO1k+9NBDaSzjPEuxRDABWsQyJsv9+/fbZ0llWZIFOoqlyRITZkl4xQu9j2XtAT5iiWACtImlZViwJAu0iGW2zxKwJAtkTwbj4wtiaRkWShhMYGmT5YMPPpjGMq4V62hYWMiSLIjlvFi6gg+UfML0Shi6eAIYH284WQIlDiaw+MnygQcesAwLJkygVSzvv//+BVfwAUyYQIPJUixBMIEOYnngwIH0TaGt0ECFgukHHtrHMpZha2NpsoTOOa0ExBKo0oQJtI9lHA372muvWYaFKgfTDz80+AEfH58XS5MlCCbQYLK877775k4dMVnC0tiHCRWJpckSTJgpr5rh2g/1+LhYgmACnUyW2dGwBw8eFEsQTKCTWFp9AcGcx5MClf5BvrYMa7KE/nHQD4glUKUJE6oolmHvvffeufMsDx065NQRMGECrWJpsgQTZke8oqZSP7jj42IJggm0myzvueeeebG0DAuCacKEusmyUSwBwQRqYhnLsGvWrJl3gA8wGA76gYLG0j5LMGECNbJ9llksDx8+bJ8lCGb3PHlQ1smyPpYmSxgOS7JQgFiePn1aLMGECdSLZdi777577mhYy7AgmD3jiYQyTZb1sTRZgmACdbG0zxIEE2ghW4Z1NCwIZl95UqHok2WjWAL54ShZyFksX3/9dbEEwQSaxTJOHYlY2mcJOf15tQkgH7G0zxIEcyA8yVC0WN51110LYgkIJtAklrEMe/nyZS/6IOfsw4Qhx9JkCSbMgfLqnKLEcvXq1WIJggl0Ess33njDMiwUjCVZGEIsTZZgwhwar9TJayx37NghlmDCBDqN5ZtvvimWYMI0YUJ9LO+8884FsfQ4BRMmUDdZxqkjU1NTyVtvvWWyBBMm0CiWJksQzNzyhEQeYtloGRYoB0uy0IdYWoYFwQQ6iKW36ALBBMQSqvnzXpZvxD5MhhHL7du3L1iG9VgEE2aujY2N+ddkKLGMU0eOHDlinyWU/Lm5NBPm+vXrk5MnT3p0MvBYmiyhuYmJCcHMm1tuuSU5c+ZMMj097RFKX18tN4ol0PjF5W233Vaa72dkdna2v3/Al6+6R2o+ZrfRmlvM7WNX/z5dj4kXLlxIjh49mj6RCSf9+OG/4447xBI6eGEZk2XEMn5eltCPDVc/TF+7zdTcZmtuSc3HpJ9Ny0MwR67FMn49vpRgAlAe14J55Vokp6+FcWjBzMtBPwu+aQAqL1dtGM3JxgCAXDdjNGcbQkAByGUXRvO2Qaanp0UToOJmZmZyF85hBbPRN5/ed+UqDxWAart8+fKVVq0oezAb7bydrdsAsxcuXJj0UAGotnPnzk0mLY6GTYZwQFBelmTnfn3mzJnfe6gAVNupU6f+T5NADk2eTitJb7/97W//+eoo7qoDABV16dKl6d/97nf/1GDCHKpBXrgg/c8GHxdc9efEiRP/bcOGDf/Wwwagej744IP/sW3btv+YdHZ1n3kRK8uVfmpDWR/LBVf+OX/+/HMrV67c6aEDUB3Hjh07sHnz5n+VNL+yT/3EObBgDnpJttnRTvW3mZ/97GdPX7hw4S0PH4BqmJycPPLzn//86RaRnG3TlP4OgAOeMJtNmUndhDm3RHvixIn/snr16n9YsWLFMg8ngPK5Ohxd/uyzz357++23P5MsXIKdSRaeUdE0mGW/luxsk4kzvdjuxMTEM7/61a9uPXr06L9MTU19dunSpSv9jjwA/RMXJbh48eKVkydPfvbhhx/+yzPPPHPr1Vj+MvnyXUnaLr0OwzAmzEZTZu202ektafARgHxqdLDOYm5JJwHtZ9PGc7IRRxpsiFaRHGkRXgDyGctGwUzaBDI371gyPsSNN9Immo3imYglQKmimXQQyaEe7JOHCbNVNEeabKDa++sjKZoA+Y9lJ/HMXSyHHczFTpr1X18fTkcCAZQnnLmKZR6C2SyaSdJ+iTYXGxCAvsUzN7HMSzAbRbCTcAJQnmC2imIuGjCew4030mZDCShAeaOZu1DmMZiNNtBI3jcgAAONqGAuYsM5GhZAHAWzbBsYgHIYtQkAQDABoCf6viTrnUUAMGECgGACAIIJAIIJAIIJAIIJAIIJAIIJAIIJAIIJAAgmAAgmAAgmAAgmAAgmAAgmAAgmACCYACCYACCYACCYACCYAFB0/0+AAQDHHxQEMMRIrwAAAABJRU5ErkJggg==" )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of the spreadsheet insert image dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

### Stepper

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
    <td>$kendo-stepper-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$kendo-stepper-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the stepper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding the stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-inline-content-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding the stepper content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 7.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-height</td>
    <td></td>
<td>

`$kendo-stepper-indicator-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border-radius</td>
    <td></td>
<td>

`50%`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-border-width</td>
    <td></td>
<td>

`$kendo-stepper-indicator-border-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border width of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus size of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-offset</td>
    <td></td>
<td>

`3px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus offset of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-focus-calc-offset</td>
    <td></td>
<td>

`calc( #{$kendo-stepper-indicator-focus-border-width} + #{$kendo-stepper-indicator-focus-offset} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus calculated offset of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-hover-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-bg</td>
    <td></td>
<td>

`var( --kendo-disabled-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the stepper indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-text</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-hover-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-done-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the stepper done indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-120 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-text</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-current-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-bg</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Hover background color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-text</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-hover-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Hover text color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-hover-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-hover-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Hover border color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-bg</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Disabled background color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-text</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-disabled-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Disabled text color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-indicator-current-disabled-border</td>
    <td></td>
<td>

`$kendo-stepper-indicator-done-disabled-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Disabled border color of the stepper current indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-success-text</td>
    <td></td>
<td>

`get-theme-color-var( success-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The success text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-error-text</td>
    <td></td>
<td>

`get-theme-color-var( error-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The error text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-hover-text</td>
    <td></td>
<td>

`$kendo-stepper-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-label-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-current-label-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text color of the stepper label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the stepper optional label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-size</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the stepper optional label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-optional-label-font-style</td>
    <td></td>
<td>

`italic`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font style of the stepper optional label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-progressbar-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the stepper progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-property</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The property name of the stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-duration</td>
    <td></td>
<td>

`300ms`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The duration of the stepper transition.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-stepper-content-transition-timing-function</td>
    <td></td>
<td>

`cubic-bezier(.4, 0, .2, 1) 0ms`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The timing funtion of the stepper transition.</div></div>
    </td>
</tr>
</tbody>
</table>

### Switch

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
    <td>$kendo-switch-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td></td>
<td>

`uppercase`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text transform of the switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Display of the switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td></td>
<td>

`(
    sm: ( font-size: 10px, track-width: 36px, track-height: 16px, thumb-width: 10px, thumb-height: 10px, thumb-offset: 3px, label-offset: 4px ),
    md: ( font-size: 10px, track-width: 40px, track-height: 20px, thumb-width: 12px, thumb-height: 12px, thumb-offset: 4px, label-offset: 5px ),
    lg: ( font-size: 10px, track-width: 44px, track-height: 24px, thumb-width: 14px, thumb-height: 14px, thumb-offset: 5px, label-offset: 6px )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map with the different switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-focus-ring</td>
    <td></td>
<td>

`1px solid get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the focused switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the disabled switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td></td>
<td>

`$kendo-switch-on-track-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-110 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td></td>
<td>

`$kendo-switch-on-track-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td></td>
<td>

`$kendo-switch-on-track-focus-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td></td>
<td>

`$kendo-switch-on-track-disabled-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the disabled switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the disabled switch is checked.</div></div>
    </td>
</tr>
</tbody>
</table>

### Table

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
    <td>$kendo-table-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the table header cells.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td></td>
<td>

`(
    sm: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-cell-padding-x-sm,
        cell-padding-y: $kendo-table-cell-padding-y-sm,
        group-label-padding-x: $kendo-list-item-group-label-padding-x-sm,
        group-label-padding-y: $kendo-list-item-group-label-padding-y-sm,
        group-label-font-size: $kendo-list-item-group-label-font-size-sm
    ),
    md: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-cell-padding-x-md,
        cell-padding-y: $kendo-table-cell-padding-y-md,
        group-label-padding-x: $kendo-list-item-group-label-padding-x-md,
        group-label-padding-y: $kendo-list-item-group-label-padding-y-md,
        group-label-font-size: $kendo-list-item-group-label-font-size-md
    ),
    lg: (
        font-size: var( --kendo-font-size, inherit ),
        line-height: var( --kendo-line-height, inherit ),
        cell-padding-x: $kendo-table-cell-padding-x-lg,
        cell-padding-y: $kendo-table-cell-padding-y-lg,
        group-label-padding-x: $kendo-list-item-group-label-padding-x-lg,
        group-label-padding-y: $kendo-list-item-group-label-padding-y-lg,
        group-label-font-size: $kendo-list-item-group-label-font-size-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-bg</td>
    <td></td>
<td>

`$kendo-table-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-header-border</td>
    <td></td>
<td>

`$kendo-table-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-text</td>
    <td></td>
<td>

`$kendo-list-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-bg</td>
    <td></td>
<td>

`$kendo-list-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-border</td>
    <td></td>
<td>

`$kendo-list-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sticky-header-shadow</td>
    <td></td>
<td>

`$kendo-list-header-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the sticky table header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-bg</td>
    <td></td>
<td>

`$kendo-table-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-text</td>
    <td></td>
<td>

`$kendo-table-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-footer-border</td>
    <td></td>
<td>

`$kendo-table-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-bg</td>
    <td></td>
<td>

`$kendo-table-header-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-text</td>
    <td></td>
<td>

`$kendo-table-header-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-row-border</td>
    <td></td>
<td>

`$kendo-table-header-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-text</td>
    <td></td>
<td>

`$kendo-list-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-group-label-bg</td>
    <td></td>
<td>

`$kendo-list-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group label in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-text</td>
    <td></td>
<td>

`$kendo-table-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-border</td>
    <td></td>
<td>

`$kendo-table-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-hover-border</td>
    <td></td>
<td>

`$kendo-table-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-bg</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-text</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-text</td>
    <td></td>
<td>

`$kendo-table-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-border</td>
    <td></td>
<td>

`$kendo-table-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-text</td>
    <td></td>
<td>

`$kendo-table-selected-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-selected-hover-border</td>
    <td></td>
<td>

`$kendo-table-selected-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover border color of selected rows in table.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tabstrip

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
    <td>$kendo-tabstrip-wrapper-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-wrapper-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-wrapper-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-wrapper-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-wrapper-text</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-wrapper-border</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the tabstrip wrapper</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-x</td>
    <td></td>
<td>

`var( --kendo-padding-x, #{$kendo-padding-md-x} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 ) + map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-gap</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the tabstrip items</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> The background color of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-disabled-bg</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-hover-border</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-selected-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-focus-shadow</td>
    <td></td>
<td>

`$kendo-list-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus shadow of the tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-item-dragging-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the sortable tabstrip item</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-indicator-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the tabstrip indicator</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-indicator-color</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the tabstrip ripple</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, transparent )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-content-focus-border</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of tabstrip focused content</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-scrollable-button-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal button padding of the scrollable tabstrip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tabstrip-scrollable-button-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
</tbody>
</table>

### Taskboard

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
    <td>$kendo-taskboard-spacer</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing index of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-md, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the task board.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-content-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-spacing-y</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical spacing of the task board column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-container-padding-x</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board column container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-columns-container-gap</td>
    <td></td>
<td>

`$kendo-taskboard-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the task board columns container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-width</td>
    <td></td>
<td>

`320px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-bg</td>
    <td></td>
<td>

`$kendo-taskboard-column-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus background color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-text</td>
    <td></td>
<td>

`$kendo-taskboard-column-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus text color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus border color of the task board column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-y</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-padding-x</td>
    <td></td>
<td>

`$kendo-taskboard-column-header-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-gap</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the task board column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-actions-gap</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing  of the task board column header actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-font-weight</td>
    <td></td>
<td>

`400`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the task board column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-header-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Text color of the task board column header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board column cards wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board column cards wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-column-cards-gap</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing of the task board column cards wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-width</td>
    <td></td>
<td>

`$kendo-taskboard-column-width`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default width of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board pane</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the task board pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-y</td>
    <td></td>
<td>

`$kendo-taskboard-spacer`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-xl, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the task board pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the task board pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-header-text</td>
    <td></td>
<td>

`$kendo-taskboard-pane-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the task board pane header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-content-padding-x</td>
    <td></td>
<td>

`$kendo-taskboard-pane-header-padding-x`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board pane content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-pane-actions-padding-x</td>
    <td></td>
<td>

`$kendo-taskboard-pane-actions-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board pane actions.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-y</td>
    <td></td>
<td>

`math.div( $kendo-taskboard-spacer, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the task board card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-padding-x</td>
    <td></td>
<td>

`$kendo-taskboard-card-padding-y`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the task board card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-category-border-width</td>
    <td></td>
<td>

`4px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the task board card category.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-focus-shadow</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the task board card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected border of the task board card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-selected-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Selected shadow of the task board card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-md, 1rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the task board card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-card-title-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, 600 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the task board card title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the task board card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border-radius</td>
    <td></td>
<td>

`$kendo-card-border-radius`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the task board card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-50 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the task board card placeholder.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-taskboard-drag-placeholder-border</td>
    <td></td>
<td>

`var( --kendo-component-border, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the task board card placeholder.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tilelayout

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
    <td>$kendo-tilelayout-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the tilelayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tilelayout-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the tilelayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tilelayout-hint-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the tilelayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tilelayout-hint-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the border around the tilelayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tilelayout-hint-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-lg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Radius of the border around the tilelayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tilelayout-hint-bg</td>
    <td></td>
<td>

`rgba(255, 255, 255, .2)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the tilelayout hint.</div></div>
    </td>
</tr>
</tbody>
</table>

### Time-selector

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
    <td>$kendo-time-selector-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding color of the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-header-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the time-selector header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-separator-display</td>
    <td></td>
<td>

`none`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Visibility of the time-selector separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-width</td>
    <td></td>
<td>

`4em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Minimum width of the time-selector columns.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-height</td>
    <td></td>
<td>

`240px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the time-selector columns.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing beneath the time selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-xs, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height-lg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-height</td>
    <td></td>
<td>

`calc( #{$kendo-time-list-title-spacing} + #{$kendo-time-list-title-font-size} * #{$kendo-time-list-title-line-height} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-title-focus-text</td>
    <td></td>
<td>

`$kendo-time-selector-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the focused time-selector titles.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the time-selector list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the time-selector list items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-border-width</td>
    <td></td>
<td>

`1px 0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-height</td>
    <td></td>
<td>

`calc( #{$kendo-time-selector-font-size} * #{$kendo-time-selector-line-height} + #{ $kendo-time-list-item-padding-y * 2} )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Height of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-bg</td>
    <td></td>
<td>

`$kendo-time-selector-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-highlight-border</td>
    <td></td>
<td>

`$kendo-time-selector-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the selected item in the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-list-focus-bg</td>
    <td></td>
<td>

`rgba(0, 0, 0, .04)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the focused time-selector column.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-font-size</td>
    <td></td>
<td>

`$kendo-list-font-size-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font sizes of the time-selector.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-line-height</td>
    <td></td>
<td>

`$kendo-list-line-height-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line heights used along with $font-size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-list-item-padding-x</td>
    <td></td>
<td>

`$kendo-list-item-padding-x-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Horizontal padding of the time-selector items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sm-list-item-padding-y</td>
    <td></td>
<td>

`$kendo-list-item-padding-y-sm`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description"> Vertical padding of the time-selector items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-time-selector-sizes</td>
    <td></td>
<td>

`(
    sm: (
        font-size: $kendo-time-selector-sm-font-size,
        line-height: $kendo-time-selector-sm-line-height,
        list-item-padding-x: $kendo-time-selector-sm-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-sm-list-item-padding-y
    ),
    md: (
        font-size: $kendo-time-selector-md-font-size,
        line-height: $kendo-time-selector-md-line-height,
        list-item-padding-x: $kendo-time-selector-md-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-md-list-item-padding-y
    ),
    lg: (
        font-size: $kendo-time-selector-lg-font-size,
        line-height: $kendo-time-selector-lg-line-height,
        list-item-padding-x: $kendo-time-selector-lg-list-item-padding-x,
        list-item-padding-y: $kendo-time-selector-lg-list-item-padding-y
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the time-selector.</div></div>
    </td>
</tr>
</tbody>
</table>

### Timeline

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
    <td>$kendo-timeline-spacing-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-spacing-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-items-padding</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding between the items in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal mobile spacing of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical mobile spacing of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 7.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The track arrow width of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-height</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 7.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The track arrow height of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-wrap-padding-bottom</td>
    <td></td>
<td>

`math.div( $kendo-timeline-track-size, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the wrapper of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-margin-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bottom-calc</td>
    <td></td>
<td>

`calc( ( #{ $kendo-timeline-track-arrow-height } / 2 ) + #{ $kendo-timeline-track-wrap-padding-bottom } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-start-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-end-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-arrow-inset-block-end</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-track-size } + #{ $kendo-timeline-track-wrap-padding-bottom } + #{ $kendo-timeline-track-border-width } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inset block end of the arrow in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-bg</td>
    <td></td>
<td>

`var( --kendo-disabled-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled background of the arrow in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled text of the arrow in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-border</td>
    <td></td>
<td>

`var( --kendo-disabled-border, initial)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The disabled border color of the arrow in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-event-offset</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 8 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the track event in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-border-radius</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-box-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-1, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-min-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 20 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min widht of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-max-width</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-spacing-x } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The max width of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-flag-max-width</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-mobile-spacing-x } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The max width of the mobile flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-horizontal-flag-min-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 15 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min width of the horizontal flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-text</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the flag callout in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-height</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the flag callout in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-offset-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset bottom of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-margin-bottom-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-track-size } + 2 * #{ $kendo-timeline-track-border-width } + #{ $kendo-timeline-flag-offset-bottom } + #{ $kendo-timeline-flag-callout-height } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the flag in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the card header in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-160 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the card header in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the card body scroll in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the card body scroll of the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-scroll-thumb-hover</td>
    <td></td>
<td>

`var( --kendo-hover-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover of the card scroll thumb in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-body-text</td>
    <td></td>
<td>

`var( --kendo-body-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text of the date body in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 12 ) + map.get( $kendo-spacing, 0.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the date in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-margin-bottom</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the date in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-with-dates-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-vertical-padding-calc } + #{ $kendo-timeline-date-width } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical dates timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-lg, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the vertical timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-mobile-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-with-dates-calc</td>
    <td></td>
<td>

`calc( #{ $kendo-timeline-mobile-vertical-padding-calc } + #{ $kendo-timeline-date-width } )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile dates in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the circle in the timeline</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-height</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the circle in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the circle in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-width</td>
    <td></td>
<td>

`400px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the events in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-height</td>
    <td></td>
<td>

`600px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the events in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-min-height-calc</td>
    <td></td>
<td>

`calc( 2 * ( #{ $kendo-timeline-track-event-offset } - #{ $kendo-card-border-width } ) )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min height of the events in the timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the icons in the timeline.</div></div>
    </td>
</tr>
</tbody>
</table>

### Toolbar

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
    <td>$kendo-toolbar-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-spacing-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the toolbar tools.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the border around the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-separator-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-60 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the separator border of the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-input-width</td>
    <td></td>
<td>

`10em`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the input in the toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-focus-outline-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the focused toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-focus-outline-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border style of the focused toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-item-focus-outline-color</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the focused toolbar item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-toolbar-sizes</td>
    <td></td>
<td>

`(
    sm: (
        padding-x: $kendo-toolbar-padding-x-sm,
        padding-y: $kendo-toolbar-padding-y-sm,
        spacing: $kendo-toolbar-spacing-sm
    ),
    md: (
        padding-x: $kendo-toolbar-padding-x-md,
        padding-y: $kendo-toolbar-padding-y-md,
        spacing: $kendo-toolbar-spacing-md
    ),
    lg: (
        padding-x: $kendo-toolbar-padding-x-lg,
        padding-y: $kendo-toolbar-padding-y-lg,
        spacing: $kendo-toolbar-spacing-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Sizes map for the toolbar.</div></div>
    </td>
</tr>
</tbody>
</table>

### Tooltip

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
    <td>$kendo-tooltip-border-radius</td>
    <td></td>
<td>

`$kendo-border-radius`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-sm, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-font-size</td>
    <td></td>
<td>

`calc( #{$kendo-tooltip-font-size} * 1.25 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the tooltip title</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-line-height</td>
    <td></td>
<td>

`var( --kendo-line-heigh-xs, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the tooltip title</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-title-margin</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The margin of the tooltip title</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-callout-size</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the tooltip callout</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-bg</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-border</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-3, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box-shadow of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-button-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the tooltip button</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-primary-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary background color of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-primary-text</td>
    <td></td>
<td>

`$kendo-color-white`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary text color of the tooltip</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tooltip-primary-border</td>
    <td></td>
<td>

`initial`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The primary border color of the tooltip</div></div>
    </td>
</tr>
</tbody>
</table>

### Treelist

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
    <td>$kendo-treelist-footer-row-bg</td>
    <td></td>
<td>

`$kendo-grid-hover-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treelist footer row.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treelist-footer-row-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the treelist footer row.</div></div>
    </td>
</tr>
</tbody>
</table>

### Treeview

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
    <td>$kendo-treeview-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size-sm</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height-sm</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Indentation of child groups in treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y-sm</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1.5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-filter-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the treeview filter element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-filter-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the treeview filter element.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td></td>
<td>

`(
    sm: (
        font-size: $kendo-treeview-font-size-sm,
        line-height: $kendo-treeview-line-height-sm,
        item-padding-x: $kendo-treeview-item-padding-x-sm,
        item-padding-y: $kendo-treeview-item-padding-y-sm
    ),
    md: (
        font-size: $kendo-treeview-font-size-md,
        line-height: $kendo-treeview-line-height-md,
        item-padding-x: $kendo-treeview-item-padding-x-md,
        item-padding-y: $kendo-treeview-item-padding-y-md
    ),
    lg: (
        font-size: $kendo-treeview-font-size-lg,
        line-height: $kendo-treeview-line-height-lg,
        item-padding-x: $kendo-treeview-item-padding-x-lg,
        item-padding-y: $kendo-treeview-item-padding-y-lg
    )
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-text</td>
    <td></td>
<td>

`var( --kendo-component-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td></td>
<td>

`var( --kendo-hover-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-bg</td>
    <td></td>
<td>

`$kendo-treeview-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-text</td>
    <td></td>
<td>

`$kendo-treeview-item-text`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-border</td>
    <td></td>
<td>

`$kendo-treeview-item-border`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 1px get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td></td>
<td>

`var( --kendo-selected-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td></td>
<td>

`var( --kendo-selected-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-disabled-bg</td>
    <td></td>
<td>

`$kendo-treeview-item-bg`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-disabled-text</td>
    <td></td>
<td>

`var( --kendo-disabled-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-disabled-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td></td>
<td>

`var( --kendo-link-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td></td>
<td>

`var( --kendo-link-hover-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td></td>
<td>

`transparent`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td></td>
<td>

`var( --kendo-link-hover-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td></td>
<td>

`inherit`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td></td>
<td>

`$kendo-treeview-item-focus-shadow`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of a focused load more.</div></div>
    </td>
</tr>
</tbody>
</table>

### Typography

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
    <td>$kendo-enable-typography</td>
    <td></td>
<td>

`false`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Global typography styles for the Kendo Default theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td></td>
<td>

`SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
</tbody>
</table>

### Upload

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
    <td>$kendo-upload-border-width</td>
    <td></td>
<td>

`1px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-max-height</td>
    <td></td>
<td>

`300px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Maximum height of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-border</td>
    <td></td>
<td>

`var( --kendo-component-border, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-bg</td>
    <td></td>
<td>

`get-theme-color-var( neutral-10 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-text</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-30 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-dropzone-hover-bg</td>
    <td></td>
<td>

`var( --kendo-hover-bg, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the hovered upload dropzone.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the file status message in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-status-text-opacity</td>
    <td></td>
<td>

`null`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the file status message in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the upload items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-item-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 2 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the upload items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-multiple-items-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 4 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between multiple items in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-validation-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-xs, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the upload validation message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-spacing</td>
    <td></td>
<td>

`var( --kendo-icon-spacing, .5rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the icon and text in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-icon-color</td>
    <td></td>
<td>

`var( --kendo-subtle-text, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of the icons in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-group-icon-size</td>
    <td></td>
<td>

`var( --kendo-icon-size-xxl, 2rem )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the file icons in the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-thickness</td>
    <td></td>
<td>

`2px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Thickness of the upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-progress-bg</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the upload progress bar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-bg</td>
    <td></td>
<td>

`get-theme-color-var( success-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Success background color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-success-text</td>
    <td></td>
<td>

`get-theme-color-var( success-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Success text color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-bg</td>
    <td></td>
<td>

`get-theme-color-var( error-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Error background color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-error-text</td>
    <td></td>
<td>

`get-theme-color-var( error-190 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Error text color of the upload.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-upload-focus-shadow</td>
    <td></td>
<td>

`inset 0 0 0 2px rgba(0, 0, 0, .13)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Focus shadow of the upload when focused.</div></div>
    </td>
</tr>
</tbody>
</table>

### Utils

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
    <td>$kendo-utils-border-radius</td>
    <td></td>
<td>

`(
    DEFAULT: var( --kendo-border-radius-md, $kendo-border-radius-md ),
    0: 0,
    sm: var( --kendo-border-radius-sm, $kendo-border-radius-sm ),
    md: var( --kendo-border-radius-md, $kendo-border-radius-md ),
    lg: var( --kendo-border-radius-lg, $kendo-border-radius-lg ),
    none: 0,
    full: 9999px
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius configuration of the theme utils.</div></div>
    </td>
</tr>
</tbody>
</table>

### Window

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
    <td>$kendo-window-border-width</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 1 ) 0 0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the border around the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border-radius</td>
    <td></td>
<td>

`var( --kendo-border-radius-md, 0 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 5 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the top border of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border-style</td>
    <td></td>
<td>

`solid`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Style of the top border of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size-xl, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the title of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the title of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-title-font-weight</td>
    <td></td>
<td>

`var( --kendo-font-weight-bold, bold )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font weight of the title of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-actions-gap</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the buttons in the header of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-opacity</td>
    <td></td>
<td>

`1`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the buttons in the header of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-action-hover-opacity</td>
    <td></td>
<td>

`1`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the buttons when hovered in the header of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the content of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-inner-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the content of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-border-width</td>
    <td></td>
<td>

`0`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of the top border of the window action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-buttongroup-spacing</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between the action buttons of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-text</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-titlebar-border</td>
    <td></td>
<td>

`get-theme-color-var( primary-100 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the window titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow around the window.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-focus-shadow</td>
    <td></td>
<td>

`var( --kendo-box-shadow-depth-4, none )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow around the window when hovered.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-window-sizes</td>
    <td></td>
<td>

`(
    sm: 300px,
    md: 800px,
    lg: 1200px
)`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Map of the width of the different window sizes.</div></div>
    </td>
</tr>
</tbody>
</table>

### Wizard

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
    <td>$kendo-wizard-border-width</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-size</td>
    <td></td>
<td>

`var( --kendo-font-size, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-line-height</td>
    <td></td>
<td>

`var( --kendo-line-height, normal )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-font-family</td>
    <td></td>
<td>

`var( --kendo-font-family, inherit )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the wizard.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-steps-padding-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the wizard steps.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-steps-padding-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 3 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the wizard steps.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-x</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of the wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-padding-y</td>
    <td></td>
<td>

`0px`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of the wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-text</td>
    <td></td>
<td>

`var( --kendo-component-text, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-content-bg</td>
    <td></td>
<td>

`var( --kendo-component-bg, initial )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the wizard content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-buttons-margin-x</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 7 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal margin of the wizard buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-buttons-margin-y</td>
    <td></td>
<td>

`map.get( $kendo-spacing, 6 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical margin of the wizard buttons container.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-wizard-step-focus-border</td>
    <td></td>
<td>

`get-theme-color-var( neutral-130 )`

</td>
<td>



</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Outline of the focused wizard step.</div></div>
    </td>
</tr>
</tbody>
</table>




## Mixins




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

