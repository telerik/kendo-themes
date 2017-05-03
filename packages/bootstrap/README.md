# Kendo UI Bootstrap Theme

* [Overview](#overview)
* [Installation](#installation)
* [Custom builds](#custom-builds)
* [Troubleshooting](#troubleshooting)
* [Under the Hood](#under-the-hood)

## Overview

The **Kendo UI Bootstrap Theme** is a theme for the Kendo UI components, based on version 4 of the Twitter Bootstrap framework.

It uses the variables defined in Bootstrap to style and size the components, so that they blend in with the surrounding page.

Currently, the Bootstrap theme is available for the following suites:  

* Kendo UI for React.
* Kendo UI for Angular.
* Kendo UI for jQuery.

## Installation

1. Run the `npm install` command to install the build dependencies.
1. Run the `npm run build` command to build the CSS.

## Custom builds

The handling of all variables happens in the [`_bootstrap-map.scss`](src/_bootstrap-map.scss) file. It loads the Bootstrap variables from the default location. For example, `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap, specify the location in `_bootstrap-map.scss`. Then, build as usual.

## Troubleshooting

Since Bootstrap v4 is still in beta, its variables may change between releases. Make sure to use the version [specified in the peer dependencies](package.json) of the package.

## Under the Hood

To ensure a certain level of compatibility, the Bootstrap variables are mapped locally. This also enables Kendo UI to use an ad-hoc micro framework based on primitive components. For example, [button](src/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss), and so on.

However, some variables, such as `$tooltip-arrow-width` that is used in the tooltip, are not mapped. They are referenced explicitly because they do not fit within the previously mentioned framework.
