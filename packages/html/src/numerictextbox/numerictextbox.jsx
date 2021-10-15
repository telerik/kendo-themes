import { Component, globalDefaultProps } from '../component';
import { IconStatic } from '../icon/index';
import { InputStatic, InputInnerInputStatic } from '../input/index';
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
    htmlAttributes.valid = invalid;
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
                    {invalid && <IconStatic name="warning" />}
                    {showSpinButton === true && <SpinButtonStatic />}
                </span>
            </InputStatic>
        );
    }

    return (
        <InputStatic className={numericClasses} {...ariaAttr} {...htmlAttributes}>
            <InputInnerInputStatic {...inputAttributes} />
            {valid && <IconStatic className="k-input-icon" name="check" />}
            {invalid && <IconStatic className="k-input-icon" name="warning" />}
            {showSpinButton === true && <SpinButtonStatic className="k-input-spinner" />}
        </InputStatic>
    );
}

NumericTextboxStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',
    autocomplete: 'off',

    showSpinButton: true,

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

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', 'small', 'medium', 'large', 'pill' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline' ],

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

