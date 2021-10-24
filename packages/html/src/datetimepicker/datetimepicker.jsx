import { globalDefaultProps } from '../component';
import { Input, InputStatic, InputInnerInputStatic } from '../input/index';
import { InputValidationIconStatic, InputLoadingIconStatic, InputClearValueStatic } from '../input/index';
import { ButtonStatic } from '../button/index';
import { IconStatic } from '../icon/index';

class DateTimePicker extends Input {
    render() {
        return <DateTimePickerStatic {...this.props} />;
    }
}

function DateTimePickerStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,
        autocomplete,

        prefix,
        suffix,

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
        type,
        value,
        placeholder,
        autocomplete,

        disabled
    };

    let dateTimePickerClasses = [
        ownClassName,
        'k-datetimepicker'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-datetimepicker',
            {
                'k-state-disabled': disabled === true
            }
        ];

        let legacyWrapClasses = [
            'k-picker-wrap',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true
            }
        ];

        return (
            <InputStatic className={legacyClasses} {...htmlAttributes}>
                <span className={legacyWrapClasses}>
                    <input type={type} className="k-input" {...inputAttributes} />
                    <InputValidationIconStatic {...props} />
                    <InputLoadingIconStatic {...props} />
                    <InputClearValueStatic {...props} />
                    <span className="k-select"><span className="k-link"><IconStatic name="calendar" /></span></span>
                </span>
            </InputStatic>
        );
    }

    return (
        <InputStatic className={dateTimePickerClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerInputStatic {...inputAttributes} />
            {suffix}
            <InputValidationIconStatic {...props} />
            <InputLoadingIconStatic {...props} />
            <InputClearValueStatic {...props} />
            <ButtonStatic className="k-input-button" icon="calendar" rounded="none" size={size} fillMode={fillMode}></ButtonStatic>
        </InputStatic>
    );
}

DateTimePickerStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    showValidationIcon: true,
    showLoadingIcon: true,
    showClearButton: true,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

DateTimePickerStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    showValidationIcon: typeof true,
    showLoadingIcon: typeof true,
    showClearButton: typeof true,

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',

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

    htmlAttributes: typeof []
};

export { DateTimePicker, DateTimePickerStatic };
