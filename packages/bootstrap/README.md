# Kendo UI Bootstrap Theme

The Kendo UI Bootstrap Theme is a theme for the Kendo UI components which is based on the Bootstrap framework. To style and size the components and make them blend in with the surrounding page, the Bootstrap theme uses the variables defined in Bootstrap.

* [License](#license)
* [Basic Usage](#basic-usage)
* [Running Custom Builds](#running-custom-builds)
* [Applying Mapped Variables](#applying-mapped-variables)
* [Troubleshooting](#troubleshooting)

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [KendoReact](http://www.telerik.com/kendo-react-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Basic Usage

For more information on how to implement the Bootstrap theme in your project, refer to the following articles:

* [Using the Bootstrap Theme in Angular Projects](https://www.telerik.com/kendo-angular-ui/components/styling/theme-bootstrap/)
* [Using the Bootstrap Theme in React Projects](https://www.telerik.com/kendo-react-ui/components/styling/theme-bootstrap/)
* [Using the Bootstrap Theme in jQuery Projects](http://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

## Running Custom Builds

The handling of all variables happens in the [`_bootstrap-map.scss`](src/_bootstrap-map.scss) file. It loads the Bootstrap variables from the default location. For example, `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap:

1. Specify the location in `_bootstrap-map.scss`.
1. Build as usual.

## Applying Mapped Variables

To ensure a certain level of compatibility, the Bootstrap variables are locally mapped. This also enables Kendo UI to use an ad-hoc micro framework based on primitive components. For example, [button](src/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss), and so on.

However, some variables, such as `$tooltip-arrow-width` which is used in the tooltip, are not mapped. They are referenced explicitly because they do not fit in the previously mentioned framework.

*Copyright © 2020 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
