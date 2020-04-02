---
title: Customizing Buttons
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_buttons
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
  margin-right: .5em;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  vertical-align: top;
  display: inline-block;
  border: 1px solid rgba(0,0,0,.08);
}

.theme-variables-description-container > div {
  margin: 0 0 .5em 2em;
}

.theme-variables-description {
  display: block;
  margin-left: 1em;
}
</style>


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
      <td>$button-text</td>
      <td></td>
      <td> $base-text</td>
      <td><span class="color-preview" style="background-color: $base-text"></span> #656565</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-bg</td>
      <td></td>
      <td> $base-bg</td>
      <td><span class="color-preview" style="background-color: $base-bg"></span> #f6f6f6</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-border</td>
      <td></td>
      <td> $base-border</td>
      <td> rgba( black, .08 )</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-gradient</td>
      <td></td>
      <td> $base-gradient</td>
      <td> $base-bg, darken( $base-bg, 2% )</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-hovered-text</td>
      <td></td>
      <td> $hovered-text</td>
      <td> $base-text</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-hovered-bg</td>
      <td></td>
      <td> $hovered-bg</td>
      <td><span class="color-preview" style="background-color: $hovered-bg"></span> #ededed</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-hovered-border</td>
      <td></td>
      <td> $hovered-border</td>
      <td> rgba( black, .15 )</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-hovered-gradient</td>
      <td></td>
      <td> $hovered-gradient</td>
      <td> $hovered-bg, darken( $hovered-bg, 2% )</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of hovered buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-pressed-text</td>
      <td></td>
      <td> $button-text</td>
      <td><span class="color-preview" style="background-color: $button-text"></span> #656565</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of pressed buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-pressed-bg</td>
      <td></td>
      <td> $button-bg</td>
      <td><span class="color-preview" style="background-color: $button-bg"></span> #f6f6f6</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of pressed buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-pressed-border</td>
      <td></td>
      <td> $button-border</td>
      <td> rgba( black, .08 )</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of pressed buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-pressed-gradient</td>
      <td></td>
      <td> none</td>
      <td> none</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of pressed buttons.</div></div>
      </td>
    </tr>
    <tr>
      <td>$button-focused-shadow</td>
      <td></td>
      <td> 0 3px 4px 0 rgba(0, 0, 0, .06)</td>
      <td> 0 3px 4px 0 rgba(0, 0, 0, .06)</td>
    </tr>
    <tr>
      <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of focused buttons.</div></div>
      </td>
    </tr>
    </tbody>
</table>


## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
