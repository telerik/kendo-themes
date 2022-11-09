---
title: Loader
category: components
slug: loader
position: 3
---

# Loader

The Loader is a visual indicator that expresses an indeterminate wait time.

## Rendering

```html
<!-- default rendering -->
<div class="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
	<div class="k-loader-canvas">
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
	</div>
</div>

<!-- rendering with k-loader-container -->
<div class="k-loader-container k-loader-container-md k-loader-top">
	<div class="k-loader-container-overlay k-overlay-dark"></div>
	<div class="k-loader-container-inner k-loader-container-panel">
		<div class="k-loader k-loader-pulsing-2 k-loader-md k-loader-primary">
			<div class="k-loader-canvas">
				<span class="k-loader-segment"></span>
				<span class="k-loader-segment"></span>
			</div>
		</div>
		<div class="k-loader-container-label !k-text-primary">Loading...</div>
	</div>
</div>
```

## Sizes

The Loader has three predefined sizes - small, medium and large.

```html
<!-- small -->
<div class="k-loader k-loader-sm">
    ...
</div>

<!-- medium -->
<div class="k-loader k-loader-md">
    ...
</div>

<!-- large -->
<div class="k-loader k-loader-lg">
    ...
</div>
```

## Animations

The Loader has three animation effects - pulsing, infinite-spinner and converging-spinner.

```html
<!-- pulsing -->
<div class="k-loader k-loader-pulsing-2 k-loader-primary k-loader-md">
	<div class="k-loader-canvas">
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
	</div>
</div>

<!-- infinite-spinner -->
<div class="k-loader k-loader-spinner-3 k-loader-primary k-loader-md">
	<div class="k-loader-canvas">
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
	</div>
</div>

<!-- converging-spinner -->
<div class="k-loader k-loader-spinner-4 k-loader-primary k-loader-md">
	<div class="k-loader-canvas">
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
		<span class="k-loader-segment"></span>
	</div>
</div>
```

## Customization

> TODO: write down specific customization use-cases
## SASS Variables

<import file="./packages/$THEME_NAME/scss/loader/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/loader/index.md" />
