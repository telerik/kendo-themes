# Kendo UI Theme Tasks  

The Kendo UI `theme-tasks` package is a utility library for developing and building `@progress/kendo-theme-*` packages.

## Installation

`theme-tasks` is tightly coupled with the Kendo UI themes. Therefore, even though it is possible to install it as a standalone library, currently it is hardly usable as such.

Normally, `theme-tasks` is installed as a dependency of the respective `@progress/kendo-theme-*` package by running `npm install @progress/kendo-theme-tasks`.

## API

Currently, you have to invoke all calls from within a compatible Kendo UI Theme structure.

> Both `kendotheme ...` and `kendo-theme ...` are acceptable.

* `kendotheme build`&mdash;Builds the main file of the current theme (`./scss/all.scss`).
* `kendotheme build --watch`&mdash;Builds and watches the main file of the current theme for changes (a bit quirky at the time).
* `kendotheme build --swatches`&mdash;Builds all swatches (`./scss/swatches/*.scss`).
* `kendotheme build --file path/to/file.scss`&mdash;Builds the specified file.
* `kendotheme assets`&mdash;Cycles trough specified files and creates SASS variables with base64-encoded content. Each variable is stored in a separate file (`./scss/**/*.{png,gif,ttf,woff}`).
