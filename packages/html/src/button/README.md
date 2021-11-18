```html
<!-- default rendering -->
<button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base">
    <span class="k-button-text">Text</span>
</button>

<!-- canonical rendering -->
<button class="
    k-button
    {text === '' && iconName !== '' && 'k-icon-button'}
    k-button-{size}
    k-button-{shape}
    k-rounded-{rounded}
    k-button-{fillMode}
    k-button-{fillMode}-{themeColor}

    {disabled && 'k-disabled'}
" type={type} disabled={disabled}>
    {iconName !== '' && <span class="k-button-icon k-icon k-i-{iconName}"></span>}
    {text !== '' && <span class="k-button-text">Button</span>}
</button>
```
