```html
<!-- default rendering -->
<span class="k-textarea k-input k-input-md k-rounded-md k-input-solid">
    <textarea class="k-input-inner" placeholder="...">...</textarea>
</span>

<!-- canonical rendering -->
<span class="
    k-textarea
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
    {showInputIcon && inputIconName !== '' && <span class="k-input-icon k-i-icon k-i-{inputIconName}"></span>}
    {inputPrefix && <span class="k-input-prefix">...</span>}
    <textarea class="k-input-inner" placeholder="{placeholder}" disabled={disabled}>{value}</textarea>
    {inputPrefix && <span class="k-input-suffix">...</span>}
    {showValidationIcon && valid && <span class="k-validation-icon k-icon k-i-check"></span>}
    {showValidationIcon && invalid && <span class="k-validation-icon k-icon k-i-warning"></span>}
    {showLoadingIcon && loading && <span class="k-icon k-i-loading"></span>}
    {showClearValue && text !== '' && <span class="k-clear-value"><span class="k-icon k-i-x"></span></span>}
</span>
```
