import { globalDefaultProps } from '../component/index';
import { Picker, PickerStatic, InputInnerSpanStatic } from '../input/index';
import { ColorPreviewStatic } from './color-preview.jsx';
import { ButtonStatic } from '../button/index';
import { IconStatic } from '../icon/index';

class Colorpicker extends Picker {
    render() {
        return <ColorpickerStatic {...this.props} />;
    }
}

function ColorpickerStatic(props) {

    const {
        className: ownClassName,

        value,

        iconName,

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

    let colorpickerClasses = [
        ownClassName,
        'k-colorpicker',
        'k-icon-picker'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-colorpicker',
            {
                'k-state-hover': hover === true,
                'k-state-focus': focus === true,
                'k-state-invalid': invalid === true,
                'k-state-disabled': disabled === true
            }
        ];

        let legacyWrapClasses = [
            'k-picker-wrap'
        ];

        return (
            <PickerStatic className={legacyClasses} {...htmlAttributes}>
                <span className={legacyWrapClasses}>
                    <ColorPreviewStatic color={value} iconName={iconName} />
                    <span className="k-select"><IconStatic name="arrow-s" /></span>
                </span>
            </PickerStatic>
        );
    }

    return (
        <PickerStatic className={colorpickerClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerSpanStatic showValue={false} valueIcon={<ColorPreviewStatic className="k-value-icon" color={value} iconName={iconName} />} />
            {suffix}
            <ButtonStatic className="k-input-button" icon="arrow-s" shape={null} rounded={null} size={size} fillMode={fillMode}></ButtonStatic>
        </PickerStatic>
    );
}

ColorpickerStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    iconName: '',

    valueIcon: null,

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

ColorpickerStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [ 'text', 'password' ],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

    iconName: typeof '',

    prefix: typeof '#fragment',
    suffix: typeof '#fragment',

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline' ],

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

export { Colorpicker, ColorpickerStatic };
