---
title: Overview
description: "Preview and install the Kendo UI Bootstrap theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemebootstrap
position: 1
---

# Bootstrap Theme Overview

{% platform_content angular %}
The Kendo UI for Angular Bootstrap theme is part of the Kendo UI for Angular library of UI components. It is distributed through NPM under the [kendo-theme-bootstrap package](https://www.npmjs.com/package/@progress/kendo-theme-bootstrap).
{% endplatform_content %}
{% platform_content react %}
The KendoReact Bootstrap theme is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-theme-bootstrap package](https://www.npmjs.com/package/@progress/kendo-theme-bootstrap).
{% endplatform_content %}

## Installation

1. Download and install the Kendo UI Bootstrap theme package.

    ```sh
    npm install --save @progress/kendo-theme-bootstrap
    ```

1. For the next steps that include alternative approaches for theme installation, refer to the instructions in the [article on styling in Kendo UI]({% slug themesandstyles %}).

If you include the Bootstrap framework from its source, you have to add `kendo-theme-bootstrap` and any variable customizations before you import the Bootstrap framework.

```css-no-run
  // Set the variables here.
  @import "~@progress/kendo-theme-bootstrap/dist/all.scss";
  @import "~bootstrap/scss/bootstrap.scss";
```

## Preview

To apply the Bootstrap theme to any of the examples on this website, use the theme chooser drop-down at the top-right corner of the example. The {% platform_content angular %}Default{% endplatform_content %}{% platform_content react %}Material{% endplatform_content %}{% platform_content vue %}Material{% endplatform_content %} theme styling is loaded by default.

To simultaneously preview multiple components from different packages, to build your own theme, or to customize any of the available Kendo UI ones, use the capabilities of the [Kendo UI Theme Builder](https://themebuilder.telerik.com/) web application.

## Suggested Links

* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
