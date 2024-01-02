# Kendo UI Themes Monorepo

`kendo-themes` is a [lerna](https://github.com/lerna/lerna/) managed monorepo project for all Kendo UI themes that are used across the Kendo UI suites and Telerik UI for Blazor. The themes are built with sass using scss syntax. The syntax is compatible with both `node-sass` and `dart-sass`, as we currently do not use the sass module system. Browser-specific properties are generated at build-time through [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

## Setup

* Make sure you have Node v20 or later.
* Clone the repo and run `npm ci` to install dependencies.

## Development Server

To run it, execute `npm start` and navigate to <http://localhost:3000/>

## Building Packages

The following npm commands are available for building the themes:

* To build all themes run `npm run sass`.
* To build all swatches run `npm run sass:swatches`.

There are additional commands, which can be found in [`package.json`](package.json) and [`gulpfile.js`](gulpfile.js).

## Directory structure

* [build](build) -- various bash scripts
* [lib](lib) -- files which we didn't put elsewhere
* [packages](packages)
  * theme-name
    * build -- theme specific files needed for building
    * docs -- per theme documentation
    * lib -- files that are not strictly scss, like swatches in json format
    * scripts -- theme specific javascript files
    * scss -- source of the themes
* [scripts](scripts) -- various javascript files
* [tests](tests) -- visual tests

## Development

Inside each theme source directory, there is a per-component directory containing the respective styles.

Note: we mostly have aptly named direcotries, so they match component names. In few cases, however, we chose different names. For example, `multicolumncombobox` is a mouthful, so its directory is `dropdowngrid`.

Each component consists of `index` file that is the entry points for component styles. Inside, we import `core` files, all dependencies (for example, datepicker needs calendar) and the components `layout` (metrics) and `theme` (appearance) files.

> Note: We list all dependencies is because we want components to be compiled standalone without the developer needing to know which component depends on which other component. However, recursive importing creates exponentially large dist files, unles handled.
>
> To workaround this limitation, we use a mixin -- `import-once` -- which takes care to output only once!

During development, the scss files are linted on every `commit` and built on every `push` command.

Changes in `develop` branch release a new package version every monday in the `dev` channel and in  `(version)-dev.(integer)` format. To install the latest development version of a given theme, run `npm install (themename)@dev` --  for example, `npm install @progress/kendo-theme-default@dev`.

Stable channel is released manually trough a github action.

### Visual tests

To guard against regressions and make pull request reviews easier, the CI build makes screenshots of the sample pages in `packages/html/src/[component]/tests/*.html`. This happens automatically for all feature branches. The sample pages contain static HTML that is the recommended rendering for components that use the theme.

To generate screenshots for a specific theme:

1. Build the theme with `npm run sass`
1. Run `npm run create-screenshots <theme>`, substituting `<theme>` with a theme name.

These steps will create new screenshots in `tests/_output`. Note that due to platform differences, all of the files will be marked as changed.

### Embedding Resources

To avoid hosting-related issues in projects that use the themes, the resources are embedded by encoding them in the output CSS. For more details, refer to [this issue](https://github.com/telerik/kendo-theme-default/issues/41#issuecomment-258472183).

To embed the latest resources:

1. Run the `npm run embed-assets` task. The task generates a file with the same name which registers a Base64-encoded version in the `$data-uris` SCSS map. For example, the `foo.woff` font file will be encoded in a `foo.scss` file which can later be imported through `@import './font/foo';`.
1. Inline the encoded file inside the CSS through `map-get( $data-uris, 'foo.woff' )`. For example:

```scss
$web-font-uri: map-get( $data-uris, 'WebComponentsIcons.woff' );

@font-face {
    font-family: 'WebComponentsIcons';
    src: url( $web-font-uri ) format( "woff" );
}
```

### Documenting Variables

The available variables for customizing each theme are listed in the article on customization for each theme (`docs/customization.md`) The file is generated from the SCSS source files by running the `npm run docs` command.

To document a variable, use triple-slash comments (`///`) before its definition.

```scss
/// Variable description
$foo: 42 !default;
```

To group variables, use the `@group` directive.

```scss
/// Variable description
/// @group random
$foo: 42 !default;

/// Another variable description
/// @group random
$bar: 1024 !default;
```

To change the layout or the front meter of the generated help topic, change the `docs/_templates/customization.md.njk` source file.

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui)
* [KendoReact](http://www.telerik.com/kendo-react-ui)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

*Copyright © 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
