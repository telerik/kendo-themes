```html
<!-- default rendering -->
<span class="k-multiselect k-input k-input-md k-rounded-md k-input-solid">
    <input type="text" class="k-input-inner" placeholder="..." autocomplete="..."/>
</span>

<!-- canonical rendering -->
<span class="
    k-multiselect
    k-input
    k-input-{size}
    k-rounded-{rounded}
    k-input-{fillMode}

    {valid && 'k-valid'}
    {invalid && 'k-invalid'}
    {loading && 'k-loading'}
    {required && 'k-required'}
    {disabled && 'k-disabled'}
">
    {showInputIcon && inputIconName !== '' && <span class="k-input-icon k-icon k-i-{inputIconName}"></span>}
    {inputPrefix && <span class="k-input-prefix">...</span>}
    <div class="k-input-values k-chip-list k-chip-list-md k-selection-multiple">
        {value}
        <input type={type} class="k-input-inner" value={value} placeholder={placeholder} disabled={disabled} />
    </div>
    {inputPrefix && <span class="k-input-suffix">...</span>}
    {showValidationIcon && valid && <span class="k-input-validation-icon k-icon k-i-check"></span>}
    {showValidationIcon && invalid && <span class="k-input-validation-icon k-icon k-i-warning"></span>}
    {showLoadingIcon && loading && <span class="k-icon k-i-loading"></span>}
    {showClearValue && text !== '' && <span class="k-clear-value"><span class="k-icon k-i-x"></span></span>}
    {showArrowButton &&
        <button type="button" class="k-input-button k-button k-icon-button k-button-{size} k-button-{fillMode} k-button-{fillMode}-base">
        <span class="k-button-icon k-icon k-i-arrow-s"></span>
    </button>}
</span>
```
