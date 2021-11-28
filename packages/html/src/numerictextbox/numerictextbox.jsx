import { Component, globalDefaultProps } from '../component';
import { InputStatic, InputInnerInputStatic } from '../input/index';
import { InputValidationIconStatic, InputLoadingIconStatic, InputClearValueStatic } from '../input/index';
import { SpinButtonStatic } from '../spinbutton/index';

class NumericTextbox extends Component {
    render() {
        return <NumericTextboxStatic {...this.props} />;
    }
}

function NumericTextboxStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

        showSpinButton,

        size,
        rounded,

        fillMode,

        hover,
        focus,
        valid,
        invalid,
        required,
        disabled,

        aria,
        legacy,

        ...htmlAttributes

    } = props;

    htmlAttributes.size = size;
    htmlAttributes.rounded = rounded;
    htmlAttributes.fillMode = fillMode;
    htmlAttributes.hover = hover;
    htmlAttributes.focus = focus;
    htmlAttributes.valid = valid;
    htmlAttributes.invalid = invalid;
    htmlAttributes.required = required;
    htmlAttributes.disabled = disabled;

    const inputAttributes = {
        type: 'text',
        value,
        placeholder,
        autocomplete,

        disabled
    };

    let numericClasses = [
        ownClassName,
        'k-numerictextbox'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-numerictextbox',
            {
                'k-state-disabled': disabled === true
            }
        ];

        let legacyWrapClasses = [
            'k-numeric-wrap',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true
            }
        ];

        let legacyInputClasses = [
            'k-input',
            'k-formatted-value'
        ];

        return (
            <InputStatic className={legacyClasses} {...htmlAttributes}>
                <span className={legacyWrapClasses}>
                    <input type={type} className={legacyInputClasses} {...inputAttributes} />
                    <InputValidationIconStatic {...props} />
                    <InputLoadingIconStatic {...props} />
                    <InputClearValueStatic {...props} />
                    {showSpinButton === true && <SpinButtonStatic />}
                </span>
            </InputStatic>
        );
    }

    return (
        <InputStatic className={numericClasses} {...ariaAttr} {...htmlAttributes}>
            <InputInnerInputStatic {...inputAttributes} />
            <InputValidationIconStatic {...props} />
            <InputLoadingIconStatic {...props} />
            <InputClearValueStatic {...props} />
            {showSpinButton === true && <SpinButtonStatic className="k-input-spinner" size={size} fillMode={fillMode} />}
        </InputStatic>
    );
}

NumericTextboxStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',
    autocomplete: 'off',

    showSpinButton: true,

    showValidationIcon: true,
    showLoadingIcon: true,
    showClearButton: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

NumericTextboxStatic.propTypes = {
    type: typeof [ 'text' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showSpinButton: typeof true,

    showValidationIcon: typeof true,
    showLoadingIcon: typeof true,
    showClearButton: typeof true,

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'pill' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline' ],

    hover: typeof false,
    focus: typeof false,
    valid: typeof false,
    invalid: typeof false,
    required: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { NumericTextbox, NumericTextboxStatic };

