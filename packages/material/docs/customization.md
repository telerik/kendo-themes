---
title: Customization
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial
position: 9
---

# Customization

The following table lists the available variables for customizing the Material theme.

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
    <td>$border-radius</td>
    <td></td>
    <td>2px</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$base-bg</td>
    <td></td>
    <td>map-get( $theme, base-bg )</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-text</td>
    <td></td>
    <td>map-get($theme, component-text)</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .08 )</td>
    <td>rgba( if($theme-type == dark, white, black), .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$base-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-bg</td>
    <td></td>
    <td>map-get( $theme, hover-bg )</td>
    <td>map-get( $theme, hover-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-text</td>
    <td></td>
    <td>$base-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .15 )</td>
    <td>rgba( if($theme-type == dark, white, black), .15 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-bg</td>
    <td></td>
    <td>$secondary</td>
    <td>material-color( $secondary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-text</td>
    <td></td>
    <td>$secondary-contrast</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-border</td>
    <td></td>
    <td>rgba( if($theme-type == dark, white, black), .1 )</td>
    <td>rgba( if($theme-type == dark, white, black), .1 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
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
    <td>$avatar-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$avatar-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$avatar-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$avatar-line-height</td>
    <td></td>
    <td>$line-height</td>
    <td>(28 / 14)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$avatar-sizes</td>
    <td></td>
    <td>(
    sm: map-get( $spacing, 4 ),
    md: map-get( $spacing, 8 ),
    lg: map-get( $spacing, 16 )
)</td>
    <td>(
    sm: map-get( $spacing, 4 ),
    md: map-get( $spacing, 8 ),
    lg: map-get( $spacing, 16 )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the avatar.</div></div>
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
    <td>$button-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-border-radius</td>
    <td></td>
    <td>$border-radius</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-x</td>
    <td></td>
    <td>$padding-x</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-padding-y</td>
    <td></td>
    <td>8px</td>
    <td>8px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of buttons</div></div>
    </td>
</tr>
<tr>
    <td>$button-bg</td>
    <td></td>
    <td>$base-bg</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-text</td>
    <td></td>
    <td>$base-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-border</td>
    <td></td>
    <td>$button-bg</td>
    <td>map-get( $theme, base-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-active-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of active buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-bg</td>
    <td></td>
    <td>$button-active-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-text</td>
    <td></td>
    <td>$button-active-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-border</td>
    <td></td>
    <td>$button-active-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of selected buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$button-focused-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused buttons.</div></div>
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
    <td>$series-a</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #3f51b5"></span>#3f51b5</td>
    <td><span class="color-preview" style="background-color: #3f51b5"></span>#3f51b5</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-b</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #2196f3"></span>#2196f3</td>
    <td><span class="color-preview" style="background-color: #2196f3"></span>#2196f3</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-c</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #43a047"></span>#43a047</td>
    <td><span class="color-preview" style="background-color: #43a047"></span>#43a047</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-d</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #ffc107"></span>#ffc107</td>
    <td><span class="color-preview" style="background-color: #ffc107"></span>#ffc107</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-e</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #ff5722"></span>#ff5722</td>
    <td><span class="color-preview" style="background-color: #ff5722"></span>#ff5722</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-f</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #e91e63"></span>#e91e63</td>
    <td><span class="color-preview" style="background-color: #e91e63"></span>#e91e63</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$series-1</td>
    <td></td>
    <td>$series-a</td>
    <td><span class="color-preview" style="background-color: #3f51b5"></span>#3f51b5</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$chart-major-lines</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .08 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .08 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$chart-minor-lines</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .04 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (minor).</div></div>
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
    <td>$checkbox-border-width</td>
    <td></td>
    <td>2px</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-border</td>
    <td></td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-hovered-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-checked-bg</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-checked-text</td>
    <td></td>
    <td>contrast-wcag( $checkbox-checked-bg )</td>
    <td>contrast-wcag( $checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-checked-border</td>
    <td></td>
    <td>$checkbox-checked-bg</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indeterminate-bg</td>
    <td></td>
    <td>$checkbox-checked-bg</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indeterminate-text</td>
    <td></td>
    <td>$checkbox-checked-text</td>
    <td>contrast-wcag( $checkbox-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indeterminate-border</td>
    <td></td>
    <td>$checkbox-checked-border</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of indeterminate checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-focused-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-focused-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-focused-checked-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-focused-checked-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-border</td>
    <td></td>
    <td>try-shade( $component-bg, 4 )</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-checked-bg</td>
    <td></td>
    <td>$checkbox-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-checked-text</td>
    <td></td>
    <td>contrast-wcag( $checkbox-disabled-checked-bg )</td>
    <td>contrast-wcag( $checkbox-disabled-checked-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-disabled-checked-border</td>
    <td></td>
    <td>$checkbox-disabled-checked-bg</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and checked checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-invalid-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-invalid-text</td>
    <td></td>
    <td>$invalid-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-invalid-border</td>
    <td></td>
    <td>$invalid-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of invalid checkbox.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indicator-type</td>
    <td></td>
    <td>image</td>
    <td>image</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Type of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-glyph-font-family</td>
    <td></td>
    <td>"WebComponentsIcons", monospace</td>
    <td>"WebComponentsIcons", monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph font family of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-checked-glyph</td>
    <td></td>
    <td>"\e118"</td>
    <td>"\e118"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indeterminate-glyph</td>
    <td></td>
    <td>"\e121"</td>
    <td>"\e121"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of indeterminate checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-checked-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='#{$checkbox-checked-text}' stroke-width='3' d='M4.1,12.7 9,17.6 20.3,6.3'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='none' stroke='#{$checkbox-checked-text}' stroke-width='3' d='M4.1,12.7 9,17.6 20.3,6.3'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-indeterminate-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$checkbox-indeterminate-text}' stroke-width='3' d='M4 10h12'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$checkbox-indeterminate-text}' stroke-width='3' d='M4 10h12'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked checkbox indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-list-spacing</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between items of horizontal checkbox list.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-list-item-padding-x</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of checkbox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-list-item-padding-y</td>
    <td></td>
    <td>$list-item-padding-y</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of checkbox list items.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-ripple-bg</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checkbox ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$checkbox-ripple-opacity</td>
    <td></td>
    <td>.2</td>
    <td>.2</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of checkbox ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color System

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
    <td>$primary</td>
    <td>Color</td>
    <td>material-color( $primary-palette, main )</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$primary-contrast</td>
    <td>Color</td>
    <td>material-color( $primary-palette, main-contrast )</td>
    <td>material-color( $primary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary</td>
    <td>Color</td>
    <td>material-color( $secondary-palette, main )</td>
    <td>material-color( $secondary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$secondary-contrast</td>
    <td>Color</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
    <td>material-color( $secondary-palette, main-contrast )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary</td>
    <td>Color</td>
    <td>material-color($tertiary-palette, main)</td>
    <td>material-color($tertiary-palette, main)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$tertiary-contrast</td>
    <td>Color</td>
    <td>material-color($tertiary-palette, main-contrast)</td>
    <td>material-color($tertiary-palette, main-contrast)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$info</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span>#0058e9</td>
    <td><span class="color-preview" style="background-color: #0058e9"></span>#0058e9</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$success</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #37b400"></span>#37b400</td>
    <td><span class="color-preview" style="background-color: #37b400"></span>#37b400</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$warning</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span>#ffc000</td>
    <td><span class="color-preview" style="background-color: #ffc000"></span>#ffc000</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$error</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #f31700"></span>#f31700</td>
    <td><span class="color-preview" style="background-color: #f31700"></span>#f31700</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$dark</td>
    <td>Color</td>
    <td>get-base-hue( gray, 800 )</td>
    <td>get-base-hue( gray, 800 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$light</td>
    <td>Color</td>
    <td>get-base-hue( gray, 100 )</td>
    <td>get-base-hue( gray, 100 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$inverse</td>
    <td></td>
    <td>if( $dark-theme, $light, $dark )</td>
    <td>if( $dark-theme, $light, $dark )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or lught, it will be light or dark</div></div>
    </td>
</tr>
</tbody>
</table>

### Component

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
    <td>$component-bg</td>
    <td></td>
    <td>map-get($theme, component-bg)</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$grid-bg: $component-bg !defualt;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-text</td>
    <td></td>
    <td>map-get($theme, component-text)</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$grid-text: component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$component-border</td>
    <td></td>
    <td>map-get($theme, component-border)</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$grid-border: component-border !default;`.</div></div>
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
    <td>$grid-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-border</td>
    <td></td>
    <td>$component-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the grid component</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-bg</td>
    <td></td>
    <td>$grid-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-text</td>
    <td></td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-header-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of grid header</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-bg</td>
    <td></td>
    <td>$grid-header-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-text</td>
    <td></td>
    <td>$grid-header-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-footer-border</td>
    <td></td>
    <td>$grid-header-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of grid footer</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-alt-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-hovered-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-bg</td>
    <td></td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in grid</div></div>
    </td>
</tr>
<tr>
    <td>$grid-selected-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in grid</div></div>
    </td>
</tr>
</tbody>
</table>

### Icons

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
    <td>$icon-font-url</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The URL to the icon font that will be used by the theme<br />The default value of `null` embeds the package font with a `data:` URL</div></div>
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
    <td>$list-font-size</td>
    <td></td>
    <td>$font-size-lg</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-line-height</td>
    <td></td>
    <td>1.25</td>
    <td>1.25</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-border</td>
    <td></td>
    <td>$component-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the list component.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-border</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-header-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of list header.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-hovered-bg</td>
    <td></td>
    <td>$hovered-bg</td>
    <td>map-get( $theme, hover-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-hovered-text</td>
    <td></td>
    <td>$hovered-text</td>
    <td>$base-text</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-focused-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-selected-bg</td>
    <td></td>
    <td>$component-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-item-selected-text</td>
    <td></td>
    <td>$secondary</td>
    <td>material-color( $secondary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected list items.</div></div>
    </td>
</tr>
<tr>
    <td>$list-no-data-text</td>
    <td></td>
    <td>$subtle-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the 'No Data' text.</div></div>
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
    <td>$radio-radius</td>
    <td></td>
    <td>50%</td>
    <td>50%</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-border-width</td>
    <td></td>
    <td>2px</td>
    <td>2px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-bg</td>
    <td></td>
    <td>$checkbox-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-text</td>
    <td></td>
    <td>$checkbox-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-border</td>
    <td></td>
    <td>$checkbox-border</td>
    <td>rgba( if( $dark-theme, $white, $black ), .54 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-hovered-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-checked-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-checked-text</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-checked-border</td>
    <td></td>
    <td>$radio-checked-text</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-focused-border</td>
    <td></td>
    <td>$checkbox-hovered-border</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-focused-shadow</td>
    <td></td>
    <td>$checkbox-focused-shadow</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-focused-checked-border</td>
    <td></td>
    <td>$checkbox-checked-border</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-focused-checked-shadow</td>
    <td></td>
    <td>$checkbox-focused-checked-shadow</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-border</td>
    <td></td>
    <td>$checkbox-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-checked-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-checked-text</td>
    <td></td>
    <td>$radio-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-checked-border</td>
    <td></td>
    <td>$radio-disabled-border</td>
    <td>try-shade( $component-bg, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of disabled and checked radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-invalid-bg</td>
    <td></td>
    <td>$checkbox-invalid-bg</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-invalid-text</td>
    <td></td>
    <td>$checkbox-invalid-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-invalid-border</td>
    <td></td>
    <td>$checkbox-invalid-border</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of invalid radio button.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-indicator-type</td>
    <td></td>
    <td>image</td>
    <td>image</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Type of radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-checked-glyph</td>
    <td></td>
    <td>"\e308"</td>
    <td>"\e308"</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Glyph of radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-checked-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#{$radio-checked-text}'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#{$radio-checked-text}'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of checked radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-disabled-checked-image</td>
    <td></td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#{$radio-disabled-checked-text}'/></svg>") )</td>
    <td>escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><circle cx='50%' cy='50%' r='4' fill='#{$radio-disabled-checked-text}'/></svg>") )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Image of disabled and checked radio button indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-list-spacing</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between items of horizontal radio button list.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-list-item-padding-x</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of radio button list items.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-list-item-padding-y</td>
    <td></td>
    <td>$list-item-padding-y</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of radio button list items.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-ripple-bg</td>
    <td></td>
    <td>$primary</td>
    <td>material-color( $primary-palette, main )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of radio button ripple.</div></div>
    </td>
</tr>
<tr>
    <td>$radio-ripple-opacity</td>
    <td></td>
    <td>.2</td>
    <td>.2</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of radio button ripple.</div></div>
    </td>
</tr>
</tbody>
</table>

### Shadows

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
    <td>$elevation</td>
    <td></td>
    <td>map-get( $theme, elevation )</td>
    <td>map-get( $theme, elevation )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Color of shadows</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-1</td>
    <td></td>
    <td>0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )</td>
    <td>0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for switch.<br />Equivalent to material elevation 1.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-2</td>
    <td></td>
    <td>0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )</td>
    <td>0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for resting state of button, card and other widgets.<br />Equivalent to material elevation 2.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-3</td>
    <td></td>
    <td>0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )</td>
    <td>0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for menu, popups and raised state of button and card.<br />Equivalent to material elevation 8.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-4</td>
    <td></td>
    <td>0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )</td>
    <td>0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for drawers and other overlaying elements.<br />Equivalent to material elevation 16.</div></div>
    </td>
</tr>
<tr>
    <td>$box-shadow-depth-5</td>
    <td></td>
    <td>0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )</td>
    <td>0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow for window and dialog.<br />Equivalent to material elevation 24.</div></div>
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
    <td>$table-border-width</td>
    <td></td>
    <td>1px</td>
    <td>1px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-vertical-border-width</td>
    <td></td>
    <td>$grid-cell-vertical-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of vertical border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-horizontal-border-width</td>
    <td></td>
    <td>$grid-cell-horizontal-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of horizontal border of table cells.</div></div>
    </td>
</tr>
<tr>
    <td>$table-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-padding-x</td>
    <td></td>
    <td>24px</td>
    <td>24px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-cell-padding-y</td>
    <td></td>
    <td>10px</td>
    <td>10px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$table-bg</td>
    <td></td>
    <td>$grid-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-text</td>
    <td></td>
    <td>$grid-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-border</td>
    <td></td>
    <td>$grid-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tables.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-bg</td>
    <td></td>
    <td>$grid-header-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-text</td>
    <td></td>
    <td>$grid-header-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-header-border</td>
    <td></td>
    <td>$grid-header-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table headers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-bg</td>
    <td></td>
    <td>$grid-footer-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-text</td>
    <td></td>
    <td>$grid-footer-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-footer-border</td>
    <td></td>
    <td>$grid-footer-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of table footers.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-bg</td>
    <td></td>
    <td>$table-header-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-text</td>
    <td></td>
    <td>$table-header-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-group-row-border</td>
    <td></td>
    <td>$table-header-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of group rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-alt-row-bg</td>
    <td></td>
    <td>$grid-alt-bg</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-alt-row-text</td>
    <td></td>
    <td>$grid-alt-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-alt-row-border</td>
    <td></td>
    <td>$grid-alt-border</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of alternating rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-hover-bg</td>
    <td></td>
    <td>$grid-hovered-bg</td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-hover-text</td>
    <td></td>
    <td>$grid-hovered-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-hover-border</td>
    <td></td>
    <td>$grid-hovered-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-focus-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-focus-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-focus-shadow</td>
    <td></td>
    <td>$grid-focused-shadow</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-selected-bg</td>
    <td></td>
    <td>$grid-selected-bg</td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-selected-text</td>
    <td></td>
    <td>$grid-selected-text</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected rows in table.</div></div>
    </td>
</tr>
<tr>
    <td>$table-selected-border</td>
    <td></td>
    <td>$grid-selected-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected rows in table.</div></div>
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
    <td>$tabstrip-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-text</td>
    <td></td>
    <td>$subtle-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-border</td>
    <td></td>
    <td>$component-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip component</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-x</td>
    <td></td>
    <td>24px</td>
    <td>24px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-padding-y</td>
    <td></td>
    <td>14px</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border-radius</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-gap</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Spacing between tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-text</td>
    <td></td>
    <td>$subtle-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-bg</td>
    <td></td>
    <td>$hovered-bg</td>
    <td>map-get( $theme, hover-bg )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradent of hovered tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-text</td>
    <td></td>
    <td>$body-text</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-item-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected tabs</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Width of border around tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip content</div></div>
    </td>
</tr>
<tr>
    <td>$tabstrip-content-border-focused</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of tabstrip focused content</div></div>
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
    <td>$toolbar-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the container.</div></div>
    </td>
</tr>
<tr>
    <td>$toolbar-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the container.</div></div>
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
    <td>$treeview-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-font-size</td>
    <td></td>
    <td>16px</td>
    <td>16px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-line-height</td>
    <td></td>
    <td>1.25</td>
    <td>1.25</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-indent</td>
    <td></td>
    <td>16px</td>
    <td>16px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Indentation of child groups in treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-padding-x</td>
    <td></td>
    <td>map-get( $spacing, 4 )</td>
    <td>map-get( $spacing, 4 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-padding-y</td>
    <td></td>
    <td>map-get( $spacing, 2 )</td>
    <td>map-get( $spacing, 2 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-border-radius</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the treeview component.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-hovered-bg</td>
    <td></td>
    <td>rgba( $treeview-text, .07 )</td>
    <td>rgba( $treeview-text, .07 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-hovered-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-hovered-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-hovered-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of hovered treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-selected-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-selected-text</td>
    <td></td>
    <td>$selected-bg</td>
    <td>$secondary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-selected-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background gradient of selected treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-item-focused-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused treeview items.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-hover-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-hover-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-focus-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-focus-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$treeview-loadmore-focus-shadow</td>
    <td></td>
    <td>$treeview-item-focused-shadow</td>
    <td>null</td>
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
    <td>$enable-typography</td>
    <td></td>
    <td>false</td>
    <td>false</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Global typography styles for the Kendo Material theme.</div></div>
    </td>
</tr>
<tr>
    <td>$font-size</td>
    <td></td>
    <td>14px</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family</td>
    <td></td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$font-family-monospace</td>
    <td></td>
    <td>Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace</td>
    <td>Consolas, "Ubuntu Mono", "Lucida Console", "Courier New", monospace</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family for monospaced text. Used for styling the code.</div></div>
    </td>
</tr>
<tr>
    <td>$line-height</td>
    <td></td>
    <td>(28 / 14)</td>
    <td>(28 / 14)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height used along with $font-size.</div></div>
    </td>
</tr>
</tbody>
</table>




## Mixins




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

