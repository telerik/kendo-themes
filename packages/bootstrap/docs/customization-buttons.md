---
title: Customizing Buttons
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_buttons
position: 9
---

# Customizing Buttons

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
      <td>$button-bg</td>
      <td>
          $secondary
      </td>
      <td>The background of the buttons.</td>
    </tr>
    <tr>
      <td>$button-text</td>
      <td>
          contrast-wcag( $button-bg, $gray-900 )
      </td>
      <td>The text color of the buttons.</td>
    </tr>
    <tr>
      <td>$button-border</td>
      <td>
          $button-bg
      </td>
      <td>The border color of the buttons.</td>
    </tr>
    <tr>
      <td>$button-gradient</td>
      <td>
          null
      </td>
      <td>The background gradient of the buttons.</td>
    </tr>
    <tr>
      <td>$button-hovered-bg</td>
      <td>
          try-darken( $button-bg, 7.5% )
      </td>
      <td>The background of hovered buttons.</td>
    </tr>
    <tr>
      <td>$button-hovered-text</td>
      <td>
          contrast-wcag( $button-hovered-bg, $gray-900 )
      </td>
      <td>The text color of hovered buttons.</td>
    </tr>
    <tr>
      <td>$button-hovered-border</td>
      <td>
          try-darken( $button-border, 10% )
      </td>
      <td>The border color of hovered buttons.</td>
    </tr>
    <tr>
      <td>$button-hovered-gradient</td>
      <td>
          null
      </td>
      <td>The background gradient of hovered buttons.</td>
    </tr>
    <tr>
      <td>$button-pressed-bg</td>
      <td>
          try-darken( $button-bg, 10% )
      </td>
      <td>The background color of pressed buttons.</td>
    </tr>
    <tr>
      <td>$button-pressed-text</td>
      <td>
          contrast-wcag( $button-pressed-bg, $gray-900 )
      </td>
      <td>The text color of pressed buttons.</td>
    </tr>
    <tr>
      <td>$button-pressed-border</td>
      <td>
          try-darken( $button-border, 12.5% )
      </td>
      <td>The border color of pressed buttons.</td>
    </tr>
    <tr>
      <td>$button-pressed-gradient</td>
      <td>
          null
      </td>
      <td>The background gradient of pressed buttons.</td>
    </tr>
    <tr>
      <td>$button-focused-shadow</td>
      <td>
          0 0 0 3px rgba($button-border, .5)
      </td>
      <td>The shadow of focused buttons.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
