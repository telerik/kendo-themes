import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Input extends Component {

    init() {
        let prefix = <></>;
        let suffix = <></>;
        let children = this._props.children;
        let newChildren = [];

        children.forEach( child => {
            let component = child._component;

            if (component === 'InputPrefix') {
                prefix.props.children.push( child );
                return;
            }

            if (component === 'InputSuffix') {
                suffix.props.children.push( child );
                return;
            }

            newChildren.push( child );
        });

        this._props.prefix = prefix;
        this._props.suffix = suffix;
        this._props.children = newChildren;
    }

    render() {
        return (
            <InputStatic {...this.props} />
        );
    }
}

function InputStatic(props) {

    const {
        className: ownClassName,

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

    let inputClasses = [
        ownClassName,
        'k-input',
        styles.sizeClass( size, 'k-input' ),
        styles.roundedClass( rounded ),
        styles.fillModeClass( fillMode, 'k-input' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-valid': valid === true,
            'k-invalid': invalid === true,
            'k-required': required === true,
            'k-disabled': disabled === true
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <span className={inputClasses} {...ariaAttr} {...htmlAttributes}>
            {props.children}
        </span>
    );
}

InputStatic.defaultProps = {
    ...globalDefaultProps,

    type: 'text',
    value: '',
    placeholder: '',
    autocomplete: 'off',

    size: 'medium',
    rounded: 'medium',

    fillMode: 'solid'
};

InputStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [],
    value: typeof '',
    placeholder: typeof '',
    autocomplete: typeof [ 'on', 'off' ],

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

export { Input, InputStatic };
