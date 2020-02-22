---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_color-system
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
          $accent
      </td>
      <td>The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</td>
    </tr>
    <tr>
      <td>$primary-contrast</td>
      <td>
          $accent-contrast
      </td>
      <td>The color used along with the primary color denoted by $primary.<br />Used to provide contrast between the background and foreground colors.</td>
    </tr>
    <tr>
      <td>$secondary</td>
      <td>
          $secondary
      </td>
      <td>The secondary color of the theme.</td>
    </tr>
    <tr>
      <td>$secondary-contrast</td>
      <td>
          contrast-wcag( $secondary )
      </td>
      <td>The color used along with the secondary color denoted by $secondary.<br />Used to provide contrast between the background and foreground colors.</td>
    </tr>
    <tr>
      <td>$info</td>
      <td>
          $info
      </td>
      <td>The color for informational messages and states.</td>
    </tr>
    <tr>
      <td>$success</td>
      <td>
          $success
      </td>
      <td>The color for success messages and states.</td>
    </tr>
    <tr>
      <td>$warning</td>
      <td>
          $warning
      </td>
      <td>The color for warning messages and states.</td>
    </tr>
    <tr>
      <td>$error</td>
      <td>
          $danger
      </td>
      <td>The color for error messages and states.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
