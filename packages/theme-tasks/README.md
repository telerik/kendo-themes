## What is kendo-theme-tasks?

Kendo theme tasks is an utility library needed to develop and build `@progress/kendo-theme-*` packages. It's usually installed as a dependency of `@progress/kendo-theme-*`.

You could install it stand alone, but since it's tightly coupled to kendo themes structure, it's hardly usable standalone. That may change in future versions.

## Installation

```
npm install @progress/kendo-theme-tasks
```

## API

Currently, all calls should be invoked from within a kendo-theme compatible structure.

* `kendotheme build` -- Builds builds the current theme main file. Currently, `./scss/all.scss`.
* `kendotheme build --watch` -- Builds and watches for changes the current theme main file. Note: currently that's a bit quirky.
* `kendotheme build --swatches` -- Builds all swatches. Currently, `./scss/swatches/*.scss`.
* `kendotheme build --file path/to/file.scss` -- Builds the specified file
* `kendotheme assets` -- Cycles trough specified files and creates sass variables with base64 encoded content. Each variable is stored in a separate file. Currently, `./scss/**/*.{png,gif,ttf,woff}`.

Note: both `kendotheme ...` and `kendo-theme ...` will work.

##

## Want to contribute?

Anyone can help make this project better - check out our [Contributing guide](./CONTRIBUTING.md)!
