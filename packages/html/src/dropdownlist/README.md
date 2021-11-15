```html
<!-- default rendering -->
<span class="k-dropdownlist k-picker k-picker-md k-rounded-md k-picker-solid">
    <span class="k-input-inner"><span class="k-input-value-text"><span></span>
    <button type="button" class="k-input-button k-button k-icon-button k-button-md k-button-solid k-button-solid-base">
        <span class="k-button-icon k-icon k-i-arrow-s"></span>
    </button>
</span>

<!-- canonical rendering -->
<span class="
    k-dropdownlist
    k-picker
    k-picker-{size}
    k-rounded-{rounded}
    k-picker-{fillMode}

    {valid && 'k-valid'}
    {invalid && 'k-invalid'}
    {loading && 'k-loading'}
    {required && 'k-required'}
    {disabled && 'k-disabled'}
">
    {showInputIcon && inputIconName !== '' && <span class="k-input-icon k-i-icon k-i-{inputIconName}"></span>}
    {inputPrefix && <span class="k-input-prefix">...</span>}
    <span class="k-input-inner">
        <span class="k-input-value-icon k-icon k-i-{valueIcon}"><span>
        <span class="k-input-value-text">{valueText}<span>
    </span>
    {inputPrefix && <span class="k-input-suffix">...</span>}
    {showValidationIcon && valid && <span class="k-validation-icon k-icon k-i-check"></span>}
    {showValidationIcon && invalid && <span class="k-validation-icon k-icon k-i-warning"></span>}
    {showLoadingIcon && loading && <span class="k-icon k-i-loading"></span>}
    {showClearValue && text !== '' && <span class="k-clear-value"><span class="k-icon k-i-x"></span></span>}
    <button type="button" class="k-input-button k-button k-icon-button k-button-{size} k-button-{fillMode} k-button-{fillMode}-base">
        <span class="k-button-icon k-icon k-i-arrow-s"></span>
    </button>
</span>
```
