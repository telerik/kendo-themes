# Kendo UI Bootstrap Theme

* [License](#license)
* [Overview](#overview)
* [Installation](#installation)
* [Custom Builds](#custom-builds)
* [Troubleshooting](#troubleshooting)
* [Under the Hood](#under-the-hood)

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

*Copyright © 2017 Telerik AD. All rights reserved.*

## Overview

The Kendo UI Bootstrap Theme is a theme for the Kendo UI components, based on the Twitter Bootstrap framework, version 4. It uses the variables defined in Bootstrap to style and size the components, so that they blend in with the surrounding page.

## Installation

1. Run the `npm install` command to install the build dependencies.
1. Run the `npm run build` command to build the CSS.

## Custom Builds

The handling of all variables happens in the [`_bootstrap-map.scss`](src/_bootstrap-map.scss) file. It loads the Bootstrap variables from the default location. For example, `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap:

1. Specify the location in `_bootstrap-map.scss`.
1. Build as usual.

## Troubleshooting

Since Bootstrap v4 is still in beta, its variables may change between releases. Make sure to use the version [specified in the peer dependencies](package.json) of the package.

## Under the Hood

To ensure a certain level of compatibility, the Bootstrap variables are mapped locally. This also enables Kendo UI to use an ad-hoc micro framework based on primitive components. For example, [button](src/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss), and so on.

However, some variables, such as `$tooltip-arrow-width` that is used in the tooltip, are not mapped. They are referenced explicitly because they do not fit within the previously mentioned framework.
