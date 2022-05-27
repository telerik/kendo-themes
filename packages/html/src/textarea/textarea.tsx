import { globalDefaultProps } from '../component/index';
import { Input, InputStatic, InputInnerTextareaStatic } from '../input/index';

class Textarea extends Input {
    render() {
        return <TextareaStatic {...this.props} />;
    }
}

function TextareaStatic(props) {

    const {
        className: ownClassName,

        value,
        placeholder,

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
        value,
        placeholder,

        disabled
    };

    let textareaClasses = [
        ownClassName,
        'k-textarea'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <InputStatic className={textareaClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputInnerTextareaStatic className="!k-overflow-auto" {...inputAttributes} />
            {suffix}
        </InputStatic>
    );
}

TextareaStatic.defaultProps = {
    ...globalDefaultProps,

    value: '',
    placeholder: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

TextareaStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    value: typeof '',
    placeholder: typeof '',

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

export { Textarea, TextareaStatic };
