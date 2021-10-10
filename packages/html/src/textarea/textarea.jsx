import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';
import { InputStatic, InputPrefixStatic, InputSuffixStatic } from '../input/index';

class Textarea extends Component {

    init() {
        let children = Array.from(this.element.children);
        let prefix = document.createDocumentFragment();
        let suffix = document.createDocumentFragment();

        children.forEach( child => {
            const isName = child.getAttribute('is');

            if (isName === 'InputPrefix') {
                prefix.append( ...child.childNodes );
            }

            if (isName === 'InputSuffix') {
                suffix.append( ...child.childNodes );
            }
        });

        this._props.prefix = prefix;
        this._props.suffix = suffix;
    }

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
        invalid,
        required,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    const inputAttributes = {
        value,
        placeholder,

        disabled
    };

    let ariaAttr = aria
        ? {}
        : {};

    let textareaClasses = [
        ownClassName,
        'k-textarea',
        styles.sizeClass( size, 'k-textarea' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-textarea' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-invalid': invalid === true,
            'k-required': required === true,
            'k-disabled': disabled === true
        }
    ];

    let legacyClasses = [
        ownClassName,
        'k-textarea',
        {
            'k-state-hover': hover === true,
            'k-state-focus': focus === true,
            'k-state-invalid': invalid === true,
            'k-state-required': required === true,
            'k-state-disabled': disabled === true
        }
    ];

    // Augment attributes

    if (legacy) {
        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <InputPrefixStatic>{prefix}</InputPrefixStatic>
                <InputStatic renderAs="textarea" {...inputAttributes} />
                <InputSuffixStatic>{suffix}</InputSuffixStatic>
            </span>
        );
    }

    return (
        <span className={textareaClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputStatic renderAs="textarea" {...inputAttributes} />
            {suffix}
        </span>
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
    value: typeof '',
    placeholder: typeof '',

    prefix: typeof document.createDocumentFragment(),
    suffix: typeof document.createDocumentFragment(),

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

export { Textarea, TextareaStatic };
