import * as styles from '../utils/styles';
import { Component, globalDefaultProps } from './component';
import { IconStatic } from './icon.jsx';

class Button extends Component {

    init() {
        this._props.text = this.element.innerHTML;
    }

    render() {
        return <ButtonStatic {...this.props} />;
    }
}

function ButtonStatic(props) {
    const {
        text,
        className: ownClassName,
        type,

        size,
        rounded,
        shape,

        fillMode,
        themeColor,

        icon,

        hover,
        focus,
        active,
        selected,
        disabled,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let buttonClasses = [
        ownClassName,
        'k-button',
        styles.sizeClass( size, 'k-button' ),
        styles.roundedClass( rounded ),
        styles.shapeClass( shape, 'k-button' ),
        styles.fillModeClass( fillMode, 'k-button' ),
        styles.themeColorClass( fillMode, themeColor, 'k-button' ),
        {
            'k-hover': hover === true,
            'k-focus': focus === true,
            'k-active': active === true,
            'k-selected': selected === true,
            'k-disabled': disabled === true,
            'k-icon-button': Boolean( icon ) === true && Boolean( text ) === false
        }
    ];

    htmlAttributes.disabled = disabled;

    let legacyClasses = [
        ownClassName,
        'k-button',
        {
            'k-primary': themeColor === 'primary',
            'k-flat': fillMode === 'flat',
            'k-outline': fillMode === 'outline',
            'k-state-hover': hover === true,
            'k-state-focus': focus === true,
            'k-state-active': active === true,
            'k-state-selected': selected === true,
            'k-state-disabled': disabled === true,
            'k-icon-button': Boolean( icon) === true && Boolean(text) === false
        }
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <button type={type} className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <IconStatic name={icon} />
                { text }
            </button>
        );
    }

    return (
        <button type={type} className={buttonClasses} {...ariaAttr} {...htmlAttributes}>
            <IconStatic className="k-button-icon" name={icon} />
            {text && <span className="k-button-text">{text}</span>}
        </button>
    );
}

ButtonStatic.defaultProps = {
    ...globalDefaultProps,

    text: '',
    icon: '',

    className: '',
    type: 'button',

    size: 'medium',
    rounded: 'medium',
    shape: 'rectangle',

    fillMode: 'solid',
    themeColor: 'base'
};

ButtonStatic.propTypes = {
    text: typeof '',
    icon: typeof '',

    className: typeof '',
    type: typeof [ 'button', 'submit', 'reset' ],

    size: typeof [ 'none', 'small', 'medium', 'large' ],
    rounded: typeof [ 'none', '0', 'small', 'medium', 'large', 'pill', 'circle' ],
    shape: typeof [ 'none', 'rectangle', 'square' ],

    fillMode: typeof [ 'none', 'solid', 'flat', 'outline', 'link' ],
    themeColor: typeof [ 'none', 'surface', 'base', 'primary' ],

    hover: typeof false,
    focus: typeof false,
    active: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { Button, ButtonStatic };
