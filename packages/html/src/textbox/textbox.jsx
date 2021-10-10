import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';
import { InputStatic, InputPrefixStatic, InputSuffixStatic } from '../input/index';

class Textbox extends Component {

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
        return <TextboxStatic {...this.props} />;
    }
}

function TextboxStatic(props) {

    const {
        className: ownClassName,

        type,
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
        type,
        value,
        placeholder,

        disabled
    };

    let ariaAttr = aria
        ? {}
        : {};

    let textboxClasses = [
        ownClassName,
        'k-textbox',
        styles.sizeClass( size, 'k-textbox' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-textbox' ),
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
        'k-textbox',
        {
            'k-state-hover': hover === true,
            'k-state-focus': focus === true,
            'k-state-invalid': invalid === true,
            'k-state-required': required === true,
            'k-state-disabled': disabled === true
        }
    ];

    // Augment attributes
    inputAttributes.type = type !== 'password' ? 'text' : type;

    if (legacy) {
        return (
            <span className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <InputPrefixStatic>{prefix}</InputPrefixStatic>
                <InputStatic {...inputAttributes} />
                <InputSuffixStatic>{suffix}</InputSuffixStatic>
            </span>
        );
    }

    return (
        <span className={textboxClasses} {...ariaAttr} {...htmlAttributes}>
            {prefix}
            <InputStatic {...inputAttributes} />
            {suffix}
        </span>
    );
}

TextboxStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

TextboxStatic.propTypes = {
    type: typeof [ 'text', 'password' ],
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

export { Textbox, TextboxStatic };
