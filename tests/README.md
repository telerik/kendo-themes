# Visual Tests

## Overview

To guard against regressions and make pull request reviews easier, the CI build automatically generates:

* an `.html` output page in `tests/[component]/` for each visual test from `packages/html/[component]/tests/`. The generated page contains the vanilla HTML output of the source page.
* screenshots of the sample pages in `tests/[component]/`.
This happens automatically for all feature branches.

The output pages contain static HTML that represents:

* The recommended rendering for components that use the theme.
* Actual rendering in various suites that may not match the reference rendering.

## Creating Images Locally

To generate screenshots for a specific theme:

1. Build the theme with `npm run sass`.
1. Run `npm run test:create-screenshots <theme>`, substituting `<theme>` with a theme name.

These steps will create new screenshots in `tests/_output`. Note that due to platform differences, all of the files will be marked as changed.

**Do not commit local changes to `tests/`**.

## Authoring Tests

The visual tests are created in the `packages/html` folder. For more information on how to create new ones check the `packages/html/README.md` file.

## Folder Structure

```
tests
├── _output          # Output images
│   ├── bootstrap
│   │   ├── button
│   │   │   ├── button
│   │   │   ├── button-size
│   │   │   └── ...
│   │   ├─── dateinput
│   │   │   ├── dateinput
│   │   │   ├── dateinput-flat
│   │   │   └── ...
│   │   ├─── grid
│   │   │   ├── grid
│   │   │   ├── grid-grouping
│   │   │   └── ...
│   │   └── ...
│   ├── default
│   │   ├── button
│   │   │   ├── button
│   │   │   ├── button-size
│   │   │   └── ...
│   │   ├─── dateinput
│   │   │   ├── dateinput
│   │   │   ├── dateinput-flat
│   │   │   └── ...
│   │   ├─── grid
│   │   │   ├── grid
│   │   │   ├── grid-grouping
│   │   │   └── ...
│   │   └── ...
│   └── material
│   │   ├── button
│   │   │   ├── button
│   │   │   ├── button-size
│   │   │   └── ...
│   │   ├─── dateinput
│   │   │   ├── dateinput
│   │   │   ├── dateinput-flat
│   │   │   └── ...
│   │   ├─── grid
│   │   │   ├── grid
│   │   │   ├── grid-grouping
│   │   │   └── ...
│   │   └── ...
├── button                   # Automatically generated .html output pages organized in folders per component
│   ├── button.html          # Reference rendering
│   ├── button-size.html     # Reference rendering
│   └── ...
├── dateinput
└── grid
    ├── grid.html                   # Reference rendering
    ├── grid-angular.html           # Current rendering in KUI/Angular
    ├── grid-grouping.html          # Scenario, reference rendering
    ├── grid-grouping-blazor.html   # Scenario, as rendered in Blazor UI
    └── ...
```
