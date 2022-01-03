import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

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
        className: ownClassName,

        text,
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

    const isIconButton = Boolean( icon ) === true && Boolean( text ) === false;

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
            'k-icon-button': isIconButton
        }
    ];

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

    // Augment attributes
    htmlAttributes.disabled = disabled;

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <button type={type} className={legacyClasses} {...ariaAttr} {...htmlAttributes}>
                <IconStatic className="k-button-icon" name={icon} />
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

    type: typeof [ 'button', 'submit', 'reset' ],

    size: typeof [ null, 'small', 'medium', 'large' ],
    rounded: typeof [ null, 'small', 'medium', 'large', 'full' ],
    shape: typeof [ null, 'rectangle', 'square' ],

    fillMode: typeof [ null, 'solid', 'flat', 'outline', 'link' ],
    themeColor: typeof [ null, 'surface', 'base', 'primary' ],

    hover: typeof false,
    focus: typeof false,
    active: typeof false,
    selected: typeof false,
    disabled: typeof false,

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { Button, ButtonStatic };
