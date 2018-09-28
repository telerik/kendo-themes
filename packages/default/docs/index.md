---
title: Overview
description: "Preview and install the Kendo UI Default theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemedefault
position: 1
---

# Default Theme Overview

The Kendo UI Default theme is available through the @progress/kendo-theme-default NPM module.

## Installation

1. Download and install the package of the Default theme.

    ```sh
    npm install --save @progress/kendo-theme-default
    ```

1. Apply the Default theme options according to the instructions in the article on [styling]({% slug themesandstyles %}).

## Preview

{% platform_content angular %}
The following example previews Kendo UI components which are styled with the Default theme.
{% endplatform_content %}
{% platform_content vue %}
The following example previews Kendo UI components which are styled with the Default theme.
{% endplatform_content %}
{% platform_content react %}
You can apply the Default theme to all Kendo UI for React examples, which demonstrate the behavior of a component, by selecting the theme from the theme-chooser at the top-right corner of the page.
{% endplatform_content %}

{% platform_content angular %}
{% theme_preview theme:default %}
<script async src="{% asset_path theme-preview.js %}"></script>
{% endplatform_content %}
{% platform_content vue %}
{% theme_preview theme:default %}
<script async src="{% asset_path vue-theme-preview.js %}"></script>
{% endplatform_content %}

## Suggested Links

* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
