# Kendo Themes HTML Components

A collection of HTML helpers used for developing Kendo UI themes.

## Basic Usage

## Authoring Tests

### Reference Rendering

Create tests for the reference rendering for components and their features in `/src/[component]/tests` by using the HTML components to remove repetition:

* Create the TSX test and use the respective HTML component `src/[component]/tests/[component]-[scenario]-[platform].tsx` (see [reference](https://github.com/telerik/kendo-themes/blob/307e03bf8d0f86769d3a294d33102d407151c640/packages/html/src/button/tests/button-solid.tsx))
* Create the HTML template `src/[component]/tests/[component]-[scenario]-[platform].html` (see [reference](https://github.com/telerik/kendo-themes/blob/307e03bf8d0f86769d3a294d33102d407151c640/packages/html/src/button/tests/button-solid.html))
* Make sure the compiled script is referenced in the HTML page ( see [reference](https://github.com/telerik/kendo-themes/blob/307e03bf8d0f86769d3a294d33102d407151c640/packages/html/src/button/tests/button-solid.html#L11))

The output (`.html`) is updated as part of the CI build and committed automatically. Review the output in PRs for correctness.

### Per-Suite Rendering

Follow the process established by your team to create and update reference tests.
The test pages are typically created from live examples with some formatting and filtering applied.

The workflow can look like this:

1. Create a runnable example, either for a new scenario or an existing reference demo.
1. Wrap the actual example in a `<div id="test-area" class="grid">` (see [reference](https://github.com/telerik/kendo-themes/blob/b777e466fa0275f165be5646e51f5be577d55c36/tests/visual/src/reference/buttons/buttons-blazor.html#L24)).
1. Copy and reference the [styles.css](https://github.com/telerik/kendo-themes/blob/develop/packages/html/assets/styles.css) stylesheet in your example.
1. Run the demo and copy the source code of the page.
    1. Either manually, by using the [Pretty HTML](https://pretty-html.stackblitz.io/) tool or an [existing page](https://github.com/telerik/kendo-themes/blob/b777e466fa0275f165be5646e51f5be577d55c36/tests/visual/src/reference/buttons/buttons-blazor.html#L1-L22) as a template.
    1. Or as part of the E2E test suite of the component using the `snapshotMarkup` helper from `@progress/kendo-e2e`.
1. Create a new file following this name template: `packages/html/src/[component]/[component]/[component]-[scenario]-[platform].html`
1. Create a PR and submit the new example.
