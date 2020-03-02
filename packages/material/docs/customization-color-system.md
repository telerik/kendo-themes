---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_color-system
position: 9
---

# Customizing Color System

The following table lists the available variables for customization.

<style>
.theme-variables th,
.theme-variables td {
  vertical-align: top;
}

.color-preview {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid rgba(0,0,0,.08);
}
</style>




<table class="theme-variables">
  <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col style="width: 250px" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$primary</td>
      <td>
          material-color( $primary-palette, default )
      </td>
      <td>The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</td>
    </tr>
    <tr>
      <td>$primary-contrast</td>
      <td>
          material-color( $primary-palette, default-contrast )
      </td>
      <td>The color used along with the primary color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</td>
    </tr>
    <tr>
      <td>$secondary</td>
      <td>
          material-color( $secondary-palette, default )
      </td>
      <td>The secondary color of the theme.</td>
    </tr>
    <tr>
      <td>$secondary-contrast</td>
      <td>
          material-color( $secondary-palette, default-contrast )
      </td>
      <td>The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</td>
    </tr>
    <tr>
      <td>$tertiary</td>
      <td>
          material-color($tertiary-palette, default)
      </td>
      <td>The tertiary color of the theme.</td>
    </tr>
    <tr>
      <td>$tertiary-contrast</td>
      <td>
          material-color($tertiary-palette, default-contrast)
      </td>
      <td>The color used along with the tertiary color denoted by $tertiary.<br />Used to provide contrast between the background and foreground colors.</td>
    </tr>
    <tr>
      <td>$info</td>
      <td>
          <span class="color-preview" style="background-color: #0058e9"></span>
          #0058e9
      </td>
      <td>The color for informational messages and states.</td>
    </tr>
    <tr>
      <td>$success</td>
      <td>
          <span class="color-preview" style="background-color: #37b400"></span>
          #37b400
      </td>
      <td>The color for success messages and states.</td>
    </tr>
    <tr>
      <td>$warning</td>
      <td>
          <span class="color-preview" style="background-color: #ffc000"></span>
          #ffc000
      </td>
      <td>The color for warning messages and states.</td>
    </tr>
    <tr>
      <td>$error</td>
      <td>
          <span class="color-preview" style="background-color: #f31700"></span>
          #f31700
      </td>
      <td>The color for error messages and states.</td>
    </tr>
    <tr>
      <td>$dark</td>
      <td>
          get-base-hue( grey, 800 )
      </td>
      <td>The dark color of the theme.</td>
    </tr>
    <tr>
      <td>$light</td>
      <td>
          get-base-hue( grey, 100 )
      </td>
      <td>The light color of the theme.</td>
    </tr>
    <tr>
      <td>$inverse</td>
      <td>
          if( $is-dark-theme, $light, $dark )
      </td>
      <td>Inverse color of the theme. Depending on the theme luminance dark or lught, it will be light or dark</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
