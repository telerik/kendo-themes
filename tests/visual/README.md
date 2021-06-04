# Visual Tests

## Overview

To guard against regressions and make pull request reviews easier, the CI build makes screenshots of the sample pages in `tests/visual/src`. This happens automatically for all feature branches.

The sample pages contain static HTML that represents:
* The recommended rendering for components that use the theme.
* Actual rendering in various suites that may not match the reference rendering.

## Creating Images Locally

To generate screenshots for a specific theme:

1. Build the theme with `npm run sass:flat` or `npm run dart:flat`
1. Run `npm run create-screenshots <theme>`, substituting `<theme>` with a theme name.

These steps will create new screenshots in `tests/visual/output`. Note that due to platform differences, all of the files will be marked as changed.

**Do not commit local changes to `tests/visual/output`**.

## Authoring Tests

### Reference Rendering

Create tests for the reference rendering for components and their features in `tests/src/reference`, for example `tests/src/reference/grid/grid-pager.html`.

### Per-Suite Rendering

Follow the process established by your team to create and update reference tests.
The test pages are typically created from live examples with some formatting and filtering applied.

A generic workflow can look like this:
1. Create a runnable example, either for a new scenario or an existing reference demo.
1. Wrap the actual example in a `<div id="test-area" class="grid">` (see [reference](https://github.com/telerik/kendo-themes/blob/b777e466fa0275f165be5646e51f5be577d55c36/tests/visual/src/reference/buttons/buttons-blazor.html#L24)).
1. Copy and reference the [styles.css](https://github.com/telerik/kendo-themes/blob/develop/tests/visual/assets/styles.css) stylesheet in your example.
1. Run the demo and copy the source code of the page.
1. Clean-up the source:
  * Either using the [Pretty HTML](https://pretty-html.stackblitz.io/) tool.
  * Or in a different way. Add the [page boilerplate](https://github.com/telerik/kendo-themes/blob/b777e466fa0275f165be5646e51f5be577d55c36/tests/visual/src/reference/buttons/buttons-blazor.html#L1-L22) in this case.
1. Create a new file following this name template: `tests/visual/src/reference/[component]/[component]-[scenario]-[platform].html`
1. Create a PR and submit the new example.

### Ad-hoc tests

Place ad-hoc tests that do not fall in any of the above categories in `tests/src/misc`.

## Folder Structure

```
tests/visual
├── assets          # Utility scripts and styles for the visual tests.
├── output          # Output images mirroring the "src" folder structure.
│   ├── bootstrap
│   │   ├── misc
│   │   └── reference
│   │       ├── buttons
│   │       ├── dateinput
│   │       └── grid
│   │       └── ...
│   ├── default
│   │   ├── misc
│   │   └── reference
│   │       ├── buttons
│   │       ├── dateinput
│   │       └── grid
│   │       └── ...
│   └── material
│       ├── misc
│       └── reference
│           ├── buttons
│           ├── dateinput
│           └── grid
│   │       └── ...
└── src               # Source pages
    ├── misc          # Uncategorized tests
    └── reference     # Reference rendering for each component
        ├── buttons
        │   ├── buttons.html                # Reference rendering
        │   ├── buttons-angular.html        # Current rendering in KUI/Angular
        │   ├── buttons-blazor.html         # Current rendering in Blazor UI
        │   └── buttons-react.html          # Current rendering in KendoReact
        ├── dateinput
        └── grid
            ├── grid-grouping.html          # Scenario, reference rendering.
            └── grid-grouping-blazor.html   # Scenario, as rendered in Blazor UI
```
