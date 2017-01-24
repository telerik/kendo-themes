# Bootstrap v4 Integration for Kendo UI Widgets

TLDR: Theme Kendo UI widgets based on Bootstrap.

_Longer version_: The project aims to provide a Bootstrap theme for the Kendo UI widgets, which uses the same variables as Bootstrap to achieve **mostly** the same appearance and size.

## Building

Install the build dependencies via `npm install`. Run `npm run build` to build the css.

## Customizing

All variable handling happens in [_bootstrap-map.scss](scss/_bootstrap-map.scss) and it loads Bootstrap variables from the default location, e.g. `node_modules/bootstrap/scss/_variables.scss`.

If you have a customized version of Bootstrap, you need to specify the location in _bootstrap-map.scss. Then, build as usual.

## Troubleshooting

Since Bootstrap is loaded as an npm module pointing directly to the [v4 branch](https://github.com/twbs/bootstrap/tree/v4-dev), it's not impossible for something to break after update.

If it's a mapped variable, you can patch it directly in _bootstrap-map.scss. If it's an explicit variable, you need to patch all files.

In any case, you can open an issue.

## Under the Hood

To ensure some sort of compatibility, Bootstrap variables are mapped locally. Further more, this enables us to use an ad-hoc micro framework based on primitive widgets, e.g. [button](scss/mixins/appearance/_button.scss), [input](src/mixins/appearance/_input.scss), [node](src/mixins/appearance/_node.scss) etc.

Not all variables are mapped though. Some, like `$tooltip-arrow-width`, used in the tooltip, are referenced explictly, because they don't fit within the aforementioned framework.
