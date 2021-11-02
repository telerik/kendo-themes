```html
<!-- default rendering -->
<div class="k-dropdown-button">
    <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
        <span class="k-button-text">Text</span>
    </button>
</div>

<!-- canonical rendering -->
<div class="k-dropdown-button">
    <button class="
        k-button
        ${text === '' && icon !== '' && 'k-icon-button'}
        k-button-${size}
        k-button-${shape}
        k-rounded-${rounded}
        k-button-${fillMode}
        k-button-${fillMode}-${themeColor}

        ${disabled && 'k-disabled'}
    " type={type} disabled={disabled}>
        {icon !== '' && <span class="k-button-icon k-icon k-i-${icon}"></span>}
        {text !== '' && <span class="k-button-text">
            Button
            {showArrow && <span className="k-icon k-i-${arrowIconName}"></span>}
        </span>}

    </button>
</div>
```
