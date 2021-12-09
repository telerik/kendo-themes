import { Component, globalDefaultProps } from '../component/index';
import { InputStatic, InputInnerInputStatic } from '../input/index';
import { InputValidationIconStatic, InputLoadingIconStatic, InputClearValueStatic } from '../input/index';
import { SpinButtonStatic } from '../spinbutton/index';

class DateInput extends Component {
    render() {
        return <DateInputStatic {...this.props} />;
    }
}

function DateInputStatic(props) {

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

    let dateInputClasses = [
        ownClassName,
        'k-dateinput'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-dateinput',
            {
                'k-state-disabled': disabled === true
            }
        ];

        let legacyWrapClasses = [
            'k-dateinput-wrap',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true
            }
        ];

        let legacyInputClasses = [
            'k-input'
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
        <InputStatic className={dateInputClasses} {...ariaAttr} {...htmlAttributes}>
            <InputInnerInputStatic {...inputAttributes} />
            <InputValidationIconStatic {...props} />
            <InputLoadingIconStatic {...props} />
            <InputClearValueStatic {...props} />
            {showSpinButton === true && <SpinButtonStatic className="k-input-spinner" size={size} fillMode={fillMode} />}
        </InputStatic>
    );
}

DateInputStatic.defaultProps = {
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

DateInputStatic.propTypes = {
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

export { DateInput, DateInputStatic };

