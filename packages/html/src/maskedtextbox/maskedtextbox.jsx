import { Component, globalDefaultProps } from '../component';
import { IconStatic } from '../icon/index';
import { InputStatic, InputInnerInputStatic } from '../input/index';

class MaskedTextbox extends Component {
    render() {
        return <MaskedTextboxStatic {...this.props} />;
    }
}

function MaskedTextboxStatic(props) {

    const {
        className: ownClassName,

        type,
        value,
        placeholder,

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
        type,
        value,
        placeholder,

        disabled
    };

    let maskedClasses = [
        ownClassName,
        'k-maskedtextbox'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-widget',
            'k-maskedtextbox',
            {
                'k-state-disabled': disabled === true
            }
        ];

        let legacyInputClasses = [
            'k-textbox',
            {
                'k-state-hover': hover === true,
                'k-state-focused': focus === true,
                'k-state-invalid': invalid === true
            }
        ];

        return (
            <InputStatic className={legacyClasses} {...htmlAttributes}>
                <input type={type} className={legacyInputClasses} {...inputAttributes} />
                {invalid && <IconStatic name="warning" />}
            </InputStatic>
        );
    }

    return (
        <InputStatic className={maskedClasses} {...ariaAttr} {...htmlAttributes}>
            <InputInnerInputStatic {...inputAttributes} />
            {valid && <IconStatic className="k-input-icon" name="check" />}
            {invalid && <IconStatic className="k-input-icon" name="warning" />}
        </InputStatic>
    );
}

MaskedTextboxStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

MaskedTextboxStatic.propTypes = {
    className: typeof '',

    type: typeof [ 'text' ],
    value: typeof '',
    placeholder: typeof '',

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

export { MaskedTextbox, MaskedTextboxStatic };

