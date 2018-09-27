---
title: Overview
description: "Preview and install the Kendo UI Bootstrap theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemebootstrap
position: 1
---

# Bootstrap Theme Overview

The Kendo UI Bootstrap theme is available through the @progress/kendo-theme-bootstrap NPM module.

## Installation

1. Download and install the package of the Bootstrap theme.

    ```sh
    npm install --save @progress/kendo-theme-bootstrap
    ```

1. Apply the Bootstrap theme options according to the instructions in the article on [styling]({% slug themesandstyles %}).

## Preview

{% platform_content angular %}
The following example previews Kendo UI components which are styled with the Bootstrap theme.
{% endplatform_content %}
{% platform_content vue %}
The following example previews Kendo UI components which are styled with the Bootstrap theme.
{% endplatform_content %}
{% platform_content react %}
You can apply the Bootstrap theme to all Kendo UI for React examples, which demonstrate the behavior of a component, by selecting the theme from the theme-chooser at the top-right corner of the page.
{% endplatform_content %}

{% platform_content angular %}
{% theme_preview theme:bootstrap %}
<script async src="{% asset_path theme-preview.js %}"></script>
{% endplatform_content %}
{% platform_content vue %}
{% theme_preview theme:bootstrap %}
<script async src="{% asset_path vue-theme-preview.js %}"></script>
{% endplatform_content %}

## Suggested Links

* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
